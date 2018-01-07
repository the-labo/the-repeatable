'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import c from 'classnames'
import TheRepeatableStyle from './TheRepeatableStyle'
import { htmlAttributesFor, eventHandlersFor } from 'the-component-util'
import { TheSpin } from 'the-spin'
import { TheCondition } from 'the-condition'

/**
 * Repeatable of the-component
 */
class TheRepeatable extends React.Component {
  render () {
    const s = this
    const {props} = s
    const {
      className,
      children,
      spinning,
      data = [],
      alt,
      horizontal,
      ListComponent,
      ItemComponent,
      keyFor,
      render,
    } = props
    const empty = !spinning && data.length === 0
    return (
      <div {...htmlAttributesFor(props, {except: ['className', 'data', 'alt']})}
           {...eventHandlersFor(props, {except: []})}
           className={c('the-repeatable', className, {
             'the-repeatable-horizontal': horizontal
           })}
      >
        <TheSpin cover
                 enabled={spinning}
                 className='the-repeatable-spin'/>
        <TheCondition if={empty}>
          <div className={'the-repeatable-alt'}>{alt}</div>
        </TheCondition>
        <TheCondition unless={empty}>
          <ListComponent className={'the-repeatable-list'}>
            {data.map((data, i) => (
              <ItemComponent key={keyFor(data, i)}
                             className={'the-repeatable-item'}>
                {render(data, i)}
              </ItemComponent>
            ))}
          </ListComponent>
        </TheCondition>
        {children}
      </div>
    )
  }
}

TheRepeatable.Style = TheRepeatableStyle

TheRepeatable.propTypes = {
  /** List component */
  ListComponent: PropTypes.any,
  /** Item component */
  ItemComponent: PropTypes.any,
  /** Render as horizontal list */
  horizontal: PropTypes.bool,
  /** Shows spinner */
  spinning: PropTypes.bool,
  /** Items to render */
  data: PropTypes.array,
  /** Get key for data */
  keyFor: PropTypes.func,
  /** Renderer */
  render: PropTypes.func.isRequired,
  /** Alt text when empty */
  alt: PropTypes.node
}

TheRepeatable.defaultProps = {
  ListComponent: 'ul',
  ItemComponent: 'li',
  horizontal: false,
  spinning: false,
  data: [],
  render: null,
  keyFor: (data, i) => i,
  alt: 'Data Not Found'
}

TheRepeatable.displayName = 'TheRepeatable'

export default TheRepeatable
