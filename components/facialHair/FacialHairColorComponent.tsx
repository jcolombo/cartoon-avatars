import * as React from 'react'
import { defaultFacialHairColor, FacialHairColorChoices, FacialHairColorOptions } from '../../config'

export interface Props {
  maskID: string
  color?: FacialHairColorOptions
}

function makeColor(name: string, color: string) {
  class ColorComponent extends React.Component<Props> {
    render() {
      return (
        <g
          id='Color/Hair/Brown'
          mask={`url(#${this.props.maskID})`}
          fill={color}>
          <g transform='translate(-32.000000, 0.000000)' id='Color'>
            <rect x='0' y='0' width='264' height='244' />
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

class FacialHairColorComponent extends React.Component<Props> {
    render() {
        const { color } = this.props
        const hairValue : FacialHairColorOptions = color || defaultFacialHairColor
        const FacialHairColor = makeColor(hairValue, FacialHairColorChoices[hairValue].color)
        return <FacialHairColor maskID={this.props.maskID} color={hairValue} />
    }
}

export default FacialHairColorComponent
