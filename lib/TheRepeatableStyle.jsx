'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import c from 'classnames'
import TheStyle from 'the-style'
import { asStyleData } from 'the-component-util'

/** Style for TheRepeatable */
const TheRepeatableStyle = ({id, className, options}) => (
  <TheStyle {...{id}}
            className={c('the-repeatable-style', className)}
            styles={TheRepeatableStyle.data(options)}
  />
)

TheRepeatableStyle.displayName = 'TheRepeatableStyle'
TheRepeatableStyle.propTypes = {
  /** Style options */
  options: PropTypes.object
}

TheRepeatableStyle.defaultProps = {
  options: {}
}

TheRepeatableStyle.data = (options) => {
  const {ThemeValues} = TheStyle
  const {
    dominantColor = ThemeValues.dominantColor,
    lightTextColor = ThemeValues.lightTextColor,
  } = options
  return asStyleData('.the-repeatable', {
    '&': {
      position: 'relative',
      minHeight: '36px',
    },
    '&.the-repeatable-horizontal': {
      '.the-repeatable-list': {
        flexWrap: 'noWrap',
        overflow: 'auto'
      },
      '.the-repeatable-item': {
        flexShrink: '0'
      }
    },
    '.the-repeatable-list': {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      padding: 0,
      margin: 0,
      listStyle: 'none'
    },
    '.the-repeatable-item': {
      display: 'inline-block',
      margin: '0',
      padding: '0',
      flexGrow: '1',
    },
    '.the-repeatable-alt': {
      color: '#E0E0E0',
      width: '100%',
      padding: '48px 16px',
      textAlign: 'center',
      fontSize: '1.25em'
    }
  })
}

export default TheRepeatableStyle
