import React, { Component, Fragment } from "react";
import { Search } from "../Search";
import { Input } from "../Input";
import { Loader } from "../Loader";
import styles from "./SearchableList.less";
import cx from "classnames";

export class SearchableList extends Component {
  state = {
    dropdownOpen: false,
    searchTerm: ""
    // hasMatch: false
  };
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.selection) {
      if (nextProps.selection.value !== prevState.selection.value) {
        return { ...prevState, selection: nextProps.selection };
      }
    }
    return null;
  }
  componentDidMount() {
    document.addEventListener("click", this.onClose);
    document.addEventListener("keyup", this.onEsc);
    if (this.props.value) {
      this.setState({ searchTerm: this.props.value });
    }
  }
  componentDidUpdate() {
    if (this.props.value && this.props.value !== this.state.searchTerm) {
      this.setState({ searchTerm: this.props.value });
    }
  }
  componentWillUnmount() {
    document.removeEventListener("click", this.onClose);
    document.removeEventListener("keyup", this.onEsc);
  }

  toggleDropdown = evt => {
    if (evt.target.closest(".filter")) {
      return false;
    }

    const body = document.querySelector(".AppMain");
    const content = document.querySelector(".AppMain");

    if (body && content) {
      const contentHeight = content.scrollHeight;
      const selectorPosition = this.selector.getBoundingClientRect();
      const filter = this.selector.querySelector(".filter");
      const selections = this.selector.querySelector(".selections");
      const initialSelectionsHeight = selections.offsetHeight;
      const scrollOffset = body.scrollTop;

      if (initialSelectionsHeight < contentHeight) {
        if (initialSelectionsHeight + selectorPosition.y > contentHeight) {
          // If we can adjust the dropdown height to fit in the
          // available content space, subtracting the footer 50px height
          let newHeight = Math.floor(contentHeight - selectorPosition.y) - 50;
          if (newHeight > 200 && newHeight < 600) {
            // The options list controls the overflow scrolling
            // so we have to adjust it's height
            selections.querySelector(".options").style.height =
              newHeight + "px";
          } else {
            selections.style.top = "-" + initialSelectionsHeight + "px";
          }
        }
      }

      if (filter) {
        filter.querySelector("input").focus();
      }
    }
    this.props.children.length &&
      this.setState({
        dropdownOpen: !this.state.dropdownOpen
      });
  };

  setSelection = evt => {
    // Top level Select event listener
    const { name, datatype } = this.props;
    const value = evt.target.dataset.value;
    const searchTerm = evt.target.innerText;
    if (this.props.onSelect) {
      this.props.onSelect(name, value, datatype);
    }

    const selected = React.Children.toArray(this.props.children).find(child => {
      return child.props.value == value;
    });

    this.setState({
      searchTerm
    });
    this.props.onSearch(searchTerm);
  };

  handleFilterKeyUp = evt => {
    if (!this.state.dropdownOpen) {
      this.setState({
        dropdownOpen: true
      });
    }
    const searchTerm = evt.target.value;
    this.setState({
      filter: evt.target.value.trim().toLowerCase(),
      searchTerm
    });
    return this.props.onSearch(searchTerm);
  };

  onEsc = evt => {
    if (evt.which == 27) {
      this.setState({
        dropdownOpen: false
      });
    }
  };

  onClose = evt => {
    const parent = evt.target.closest(".selector");

    // Close this select if the click occured
    // outside a ZestySelect or this instance
    if (!parent || parent !== this.selector) {
      this.setState({ dropdownOpen: false });
    }
  };

  render() {
    let opts = {
      className: cx(
        "selector",
        styles.selector,
        this.state.dropdownOpen ? styles.show : styles.hidden,
        this.props.className
      ),
      onClick: this.toggleDropdown
    };
    return (
      <Fragment>
        <section className={styles.SeachableListLabel}>
          <label>{this.props.label}</label>
        </section>
        <div {...opts} ref={div => (this.selector = div)}>
          <Input
            type="text"
            name="term"
            autoComplete="off"
            className={styles.searchField}
            value={this.state.searchTerm}
            placeholder={this.props.placeholder}
            onFocus={this.props.onFocus}
            onChange={this.handleFilterKeyUp}
          />
          <ul className={cx("selections", styles.selections)}>
            <div className={cx("options", styles.options)}>
              {this.props.loading ? (
                <Loader />
              ) : (
                React.Children.toArray(this.props.children).map(child => {
                  return React.cloneElement(child, {
                    onClick: evt => {
                      // Individual option event listener
                      if (child.props.onClick) {
                        child.props.onClick(evt);
                      }
                      this.setSelection(evt);
                    }
                  });
                })
              )}
            </div>
          </ul>
        </div>
      </Fragment>
    );
  }
}

export function Option({ value, text, onClick }) {
  return (
    <li data-value={value} onClick={onClick}>
      {text}
    </li>
  );
}
