import React from 'react'
import { Search } from '../Search'
import styles from './SearchableList.less'
import cx from 'classnames'

export class SearchableList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dropdownOpen: false,
      filter: '',
      searchTerm: '',
      hasMatch: false
    }
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.selection) {
      if (nextProps.selection.value !== prevState.selection.value) {
        return { ...prevState, selection: nextProps.selection }
      }
    }
    return null
  }
  componentDidMount() {
    document.addEventListener('click', this.onClose)
    document.addEventListener('keyup', this.onEsc)
  }
  componentWillUnmount() {
    document.removeEventListener('click', this.onClose)
    document.removeEventListener('keyup', this.onEsc)
  }

  render() {
    let opts = {
      className: cx(
        'selector',
        styles.selector,
        this.state.dropdownOpen && this.state.hasMatch
          ? styles.show
          : styles.hidden,
        this.props.className
      ),
      onClick: this.toggleDropdown
    }
    return (
      <div {...opts} ref={div => (this.selector = div)}>
        <input
          type="text"
          name="term"
          autoComplete="off"
          value={this.state.searchTerm}
          className={styles.searchField}
          placeholder={this.props.placeholder}
          onFocus={this.props.onFocus}
          onChange={this.handleFilterKeyUp}
        />
        <ul className={cx('selections', styles.selections)}>
          <div className={cx('options', styles.options)}>
            {React.Children.toArray(this.props.children)
              .filter(child => {
                if (this.state.filter) {
                  return (
                    child.props.text &&
                    child.props.text
                      .toLowerCase()
                      .indexOf(this.state.filter) !== -1
                  )
                } else {
                  return true
                }
              })
              .map(child => {
                return React.cloneElement(child, {
                  onClick: evt => {
                    // Individual option event listener
                    if (child.props.onClick) {
                      child.props.onClick(evt)
                    }
                    this.setSelection(evt)
                  }
                })
              })}
          </div>
        </ul>
      </div>
    )
  }

  toggleDropdown = evt => {
    if (evt.target.closest('.filter')) {
      return false
    }

    const body = document.querySelector('.AppMain')
    const content = document.querySelector('.AppMain')

    if (body && content) {
      const contentHeight = content.scrollHeight
      const selectorPosition = this.selector.getBoundingClientRect()
      const filter = this.selector.querySelector('.filter')
      const selections = this.selector.querySelector('.selections')
      const initialSelectionsHeight = selections.offsetHeight
      const scrollOffset = body.scrollTop

      if (initialSelectionsHeight < contentHeight) {
        if (initialSelectionsHeight + selectorPosition.y > contentHeight) {
          // If we can adjust the dropdown height to fit in the
          // available content space, subtracting the footer 50px height
          let newHeight = Math.floor(contentHeight - selectorPosition.y) - 50
          if (newHeight > 200 && newHeight < 600) {
            // The options list controls the overflow scrolling
            // so we have to adjust it's height
            selections.querySelector('.options').style.height = newHeight + 'px'
          } else {
            selections.style.top = '-' + initialSelectionsHeight + 'px'
          }
        }
      }

      if (filter) {
        filter.querySelector('input').focus()
      }
    }
    const hasMatch = this.hasMatch()
    if (hasMatch) {
      this.setState({
        dropdownOpen: !this.state.dropdownOpen,
        hasMatch
      })
    } else {
    }
  }

  hasMatch = () => {
    const { filter } = this.state
    console.log(
      React.Children.toArray(this.props.children).filter(
        child => child.props.text
      )
    )
    return Boolean(
      React.Children.toArray(this.props.children).filter(child => {
        return child.props.text.toLowerCase().indexOf(this.state.filter) !== -1
      }).length
    )
  }

  setSelection = evt => {
    // Top level Select event listener
    if (this.props.onSelect) {
      this.props.onSelect(evt)
    }

    const selected = React.Children.toArray(this.props.children).find(child => {
      return child.props.value == evt.currentTarget.dataset.value
    })

    this.setState({
      selection: selected.props
    })
  }

  handleFilterKeyUp = evt => {
    if (!this.state.dropdownOpen) {
      this.setState({
        dropdownOpen: true
      })
    }
    this.setState({
      filter: evt.target.value.trim().toLowerCase(),
      searchTerm: evt.target.value
    })
  }

  onEsc = evt => {
    if (evt.which == 27) {
      this.setState({
        dropdownOpen: false
      })
    }
  }

  onClose = evt => {
    const parent = evt.target.closest('.selector')

    // Close this select if the click occured
    // outside a ZestySelect or this instance
    if (!parent || parent !== this.selector) {
      this.setState({ dropdownOpen: false })
    }
  }
}

export function Option({ value, text, onClick }) {
  return (
    <li data-value={value} onClick={onClick}>
      {text}
    </li>
  )
}
