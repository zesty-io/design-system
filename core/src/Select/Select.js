import React, { Component } from "react";
import { Search } from "../Search";
import styles from "./Select.less";
import cx from "classnames";

export class Select extends Component {
  static defaultProps = {
    options: [
      {
        text: "This field is misconfigured",
        value: null
      }
    ],
    searchLength: 50
  };

  constructor(props) {
    super(props);

    if (!props.name) {
      throw new Error("Select components require a `name` property");
    }

    this.state = {
      dropdownOpen: false,
      value: props.value,
      filter: ""
    };
  }

  componentDidMount() {
    // document.addEventListener("click", this.onClose);
    document.addEventListener("keyup", this.onEsc);
    if (this.props.searchLength) {
      this.setState({ searchLength: this.props.searchLength });
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.value !== prevProps.value) {
      this.setState({ value: this.props.value });
    }
  }

  componentWillUnmount() {
    // document.removeEventListener("click", this.onClose);
    document.removeEventListener("keyup", this.onEsc);
  }

  handleFilterKeyUp = (name, term, datatype) => {
    this.setState({
      filter: term.trim().toLowerCase()
    });
  };

  onEsc = evt => {
    if (evt.which == 27) {
      this.setState({
        dropdownOpen: false
      });
    }
  };

  onClose = evt => {
    const parent = evt.target.closest(".Select");

    // Close this select if the click occured
    // outside a ZestySelect or this instance
    if (!parent || parent !== this.selector) {
      this.setState({
        dropdownOpen: false
      });
    }
  };

  toggleDropdown = evt => {
    if (evt.target.type === "search") {
      return false;
    }

    if (this.props.onClick) {
      this.props.onClick(evt);
    }

    const body = document.querySelector("body");
    const content = document.querySelector("body");

    if (body && content) {
      const contentHeight = content.scrollHeight;
      const selectorPosition = this.selector.getBoundingClientRect();
      const filter = this.selector.querySelector(".Filter");
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

    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  };

  // Top level Select event listener
  setSelection = evt => {
    const value = evt.currentTarget.dataset.value;

    if (this.props.onSelect) {
      this.props.onSelect(this.props.name, value);
    }

    this.setState({ value });
  };

  render() {
    // On each render determine the currently selected option
    const childrenArr = React.Children.toArray(this.props.children);
    const selection = childrenArr.find(
      child => child.props.value == this.state.value
    );

    return (
      <div
        className={cx(
          "Select",
          styles.selector,
          this.state.dropdownOpen ? styles.show : styles.hidden,
          this.props.className
        )}
        onClick={this.toggleDropdown}
        ref={div => (this.selector = div)}
      >
        <span className={styles.selection}>
          {selection && selection.props.html ? (
            <span
              className={styles.content}
              dangerouslySetInnerHTML={{
                __html: selection && selection.props.html
              }}
            />
          ) : (
            <span className={styles.content}>
              {selection && selection.props.text}
            </span>
          )}

          <i className={cx("fa fa-caret-down", styles.chevron)} />
        </span>
        <ul className={cx("selections", styles.selections)}>
          {childrenArr.length > this.props.searchLength && (
            <Search
              className={styles.Filter}
              placeholder="Enter a term to filter this list"
              onChange={this.handleFilterKeyUp}
            />
          )}
          <div className={cx("options", styles.options)}>
            {childrenArr
              .filter(child => {
                if (this.state.filter) {
                  return (
                    (child.props.html &&
                      child.props.html
                        .toLowerCase()
                        .indexOf(this.state.filter) !== -1) ||
                    (child.props.text &&
                      child.props.text
                        .toLowerCase()
                        .indexOf(this.state.filter) !== -1)
                  );
                } else {
                  return true;
                }
              })
              .map(child => {
                return React.cloneElement(child, {
                  onClick: evt => {
                    // Individual option event listener
                    if (child.props.onClick) {
                      child.props.onClick(evt);
                    }
                    this.setSelection(evt);
                  }
                });
              })}
          </div>
        </ul>
      </div>
    );
  }
}

export function Option({ value, html, text, onClick, className }) {
  if (html) {
    return (
      <li
        className={className}
        data-value={value}
        onClick={onClick}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  } else {
    return (
      <li className={className} data-value={value} onClick={onClick}>
        {text}
      </li>
    );
  }
}
