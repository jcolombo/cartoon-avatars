import * as React from 'react'
import { defaultHairColor, HairColorOptions, HairColors } from '../../config'

export interface Props {
  maskID: string
  color?: HairColorOptions
}

function makeColor(name: string, color: string) {
  class ColorComponent extends React.Component<Props> {
    render() {
      return (
        <g
          id='Skin/👶🏽-03-Brown'
          mask={`url(#${this.props.maskID})`}
          fill={color}>
          <g transform='translate(0.000000, 0.000000) ' id='Color'>
            <rect x='0' y='0' width='264' height='280' />
          </g>
        </g>
      )
    }
  }
  const anyComponent = ColorComponent as any
  anyComponent.displayName = name
  anyComponent.optionValue = name
  return anyComponent
}

class HairColorComponent extends React.Component<Props> {
    render() {
        const { color } = this.props
        const hairValue : HairColorOptions = color || defaultHairColor
        const HairColor = makeColor(hairValue, HairColors[hairValue].color)
        return <HairColor maskID={this.props.maskID} color={hairValue} />
    }
}

export default HairColorComponent
