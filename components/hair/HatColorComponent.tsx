import * as React from 'react'
import {
  defaultHatColor,
  HatColorOptions,
  HatColors,
} from '../../config'

export interface Props {
  maskID: string
  color?: HatColorOptions
}

function makeColor(name: string, color: string) {
  class ColorComponent extends React.Component<Props> {
    render() {
      return (
        <g
          id='Color/Palette/Gray-01'
          mask={`url(#${this.props.maskID})`}
          fillRule='evenodd'
          fill={color}>
          <rect id='🖍Color' x='0' y='0' width='264' height='280' />
        </g>
      )
    }
  }
  const anyComponent = ColorComponent as any
  anyComponent.displayName = name
  anyComponent.optionValue = name
  return anyComponent
}

class HatColorComponent extends React.Component<Props> {
    render() {
        const { color } = this.props
        const hatValue : HatColorOptions = color || defaultHatColor
        const HatColor = makeColor(hatValue, HatColors[hatValue].color)
        return <HatColor maskID={this.props.maskID} color={hatValue} />
    }
}

export default HatColorComponent
