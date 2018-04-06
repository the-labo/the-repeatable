'use strict'

import c from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import { asStyleData } from 'the-component-util'
import TheStyle from 'the-style'

/** Style for TheRepeatable */
const TheRepeatableStyle = ({className, id, options}) => (
  <TheStyle {...{id}}
            className={c('the-repeatable-style', className)}
            styles={TheRepeatableStyle.data(options)}
  />
)

TheRepeatableStyle.displayName = 'TheRepeatableStyle'
TheRepeatableStyle.propTypes = {
  /** Style options */
  options: PropTypes.object,
}

TheRepeatableStyle.defaultProps = {
  options: {},
}

TheRepeatableStyle.data = (options) => {
  const {ThemeValues} = TheStyle
  const {
    dominantColor = ThemeValues.dominantColor,
    lightTextColor = ThemeValues.lightTextColor,
  } = options
  return asStyleData('.the-repeatable', {
    '.the-repeatable-alt': {
      boxSizing: 'border-box',
      color: '#E0E0E0',
      fontSize: '1.25em',
      padding: '48px 16px',
      textAlign: 'center',
      width: '100%',
    },
    '.the-repeatable-item': {
      display: 'inline-block',
      flexGrow: '1',
      margin: '0',
      padding: '0',
    },
    '.the-repeatable-list': {
      alignItems: 'center',
      display: 'flex',
      flexWrap: 'wrap',
      listStyle: 'none',
      margin: 0,
      padding: 0,
    },
    '&': {
      minHeight: '36px',
      position: 'relative',
    },
    '&.the-repeatable-horizontal': {
      '.the-repeatable-item': {
        flexShrink: '0',
      },
      '.the-repeatable-list': {
        flexWrap: 'noWrap',
        overflow: 'auto',
      },
    },
  })
}

export default TheRepeatableStyle
