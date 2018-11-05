import React, { Component } from "react";
import { Search } from "../Search";
import styles from "./Select.less";
import cx from "classnames";

export class Select extends Component {
  static defaultProps = {
    options: [
      {
        text: "This field is misconfigured",
        value: ""
      }
    ],
    default: {
      className: styles.DefaultOpt,
      text: "— None —",
      value: ""
    },
    searchLength: 50
  };

  constructor(props) {
    super(props);

    if (!this.props.name) {
      throw new Error("Select components require a `name` property");
    }

    this.state = {
      dropdownOpen: false,
      selection: props.selection ? props.selection : props.default,
      filter: ""
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.selection) {
      if (nextProps.selection.value !== prevState.selection.value) {
        return { ...prevState, selection: nextProps.selection };
      }
    }
    return null;
  }

  componentDidMount() {
    // document.addEventListener("click", this.onClose);
    document.addEventListener("keyup", this.onEsc);
    if (this.props.searchLength) {
      this.setState({ searchLength: this.props.searchLength });
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

  setSelection = evt => {
    const value = evt.currentTarget.dataset.value;
    const child = React.Children.toArray(this.props.children).find(child => {
      return child.props.value == value;
    });

    this.setState(
      {
        selection: child ? child.props : this.props.default
      },
      () => {
        // Top level Select event listener
        if (this.props.onSelect) {
          this.props.onSelect(this.props.name, value);
        }
      }
    );
  };

  render() {
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
        {/*<input
          type="hidden"
          name={this.props.name}
          value={this.state.selection.value}
        />*/}
        <span className={styles.selection}>
          {this.state.selection.html ? (
            <span
              className={styles.content}
              dangerouslySetInnerHTML={{
                __html: this.state.selection.html
              }}
            />
          ) : (
            <span className={styles.content}>{this.state.selection.text}</span>
          )}

          <i className={cx("fa fa-caret-down", styles.chevron)} />
        </span>
        <ul className={cx("selections", styles.selections)}>
          {this.props.children &&
            React.Children.toArray(this.props.children).length >
              this.props.searchLength && (
              <Search
                className={styles.Filter}
                placeholder="Enter a term to filter this list"
                onChange={this.handleFilterKeyUp}
              />
            )}
          <div className={cx("options", styles.options)}>
            {/* Default Option*/}
            <Option
              className={cx(styles.DefaultOpt, this.props.default.className)}
              text={this.props.default.text}
              value={this.props.default.value}
              // {...this.props.default}
              onClick={this.setSelection}
            />

            {React.Children.toArray(this.props.children)
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
