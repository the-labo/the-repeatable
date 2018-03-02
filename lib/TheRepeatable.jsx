'use strict'

import c from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import { eventHandlersFor, htmlAttributesFor } from 'the-component-util'
import { TheCondition } from 'the-condition'
import { TheSpin } from 'the-spin'
import TheRepeatableStyle from './TheRepeatableStyle'

/**
 * Repeatable of the-component
 */
class TheRepeatable extends React.Component {
  render () {
    const s = this
    const {props} = s
    const {
      ItemComponent,
      ListComponent,
      alt,
      children,
      className,
      data = [],
      horizontal,
      keyFor,
      render,
      spinning,
    } = props
    const empty = !spinning && data.length === 0
    return (
      <div {...htmlAttributesFor(props, {except: ['className', 'data', 'alt']})}
           {...eventHandlersFor(props, {except: []})}
           className={c('the-repeatable', className, {
             'the-repeatable-horizontal': horizontal,
           })}
      >
        <TheSpin className='the-repeatable-spin'
                 cover
                 enabled={spinning}/>
        <TheCondition if={empty}>
          <div className='the-repeatable-alt'>{alt}</div>
        </TheCondition>
        <TheCondition unless={empty}>
          <ListComponent className='the-repeatable-list'>
            {data.map((data, i) => (
              <ItemComponent className='the-repeatable-item'
                             key={keyFor(data, i)}>
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
  /** Item component */
  ItemComponent: PropTypes.any,
  ListComponent: PropTypes.any,
  /** Alt text when empty */
  alt: PropTypes.node,
  /** Items to render */
  data: PropTypes.array,
  /** Render as horizontal list */
  horizontal: PropTypes.bool,
  /** Get key for data */
  keyFor: PropTypes.func,
  /** Renderer */
  render: PropTypes.func.isRequired,
  /** Shows spinner */
  spinning: PropTypes.bool,
}

TheRepeatable.defaultProps = {
  ItemComponent: 'li',
  ListComponent: 'ul',
  alt: 'Data Not Found',
  data: [],
  horizontal: false,
  keyFor: (data, i) => i,
  render: null,
  spinning: false,
}

TheRepeatable.displayName = 'TheRepeatable'

export default TheRepeatable
