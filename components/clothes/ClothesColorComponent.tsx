import * as React from 'react'
import {defaultClothesColor, ClothesColorOptions, ClothesColors} from "../../config"

export interface Props {
  maskID: string
  color?:ClothesColorOptions
}

function makeColor (name: string, color: string) {
  class ColorComponent extends React.Component<Props> {
    render () {
      return (
          <g
              id='Color/Palette/Gray-01'
              mask={`url(#${this.props.maskID})`}
              fillRule='evenodd'
              fill={color}>
            <rect id='🖍Color' x='0' y='0' width='264' height='110' />
          </g>
      )
    }
  }
  const anyComponent = ColorComponent as any
  anyComponent.displayName = name
  anyComponent.optionValue = name
  return anyComponent
}

class ClothesComponent extends React.Component<Props> {
  render() {
    const { color } = this.props
    const ClothesValue : ClothesColorOptions = color || defaultClothesColor
    const ClothesColor = makeColor(ClothesValue, ClothesColors[ClothesValue].color)
    return <ClothesColor maskID={this.props.maskID} />
  }
}

export default ClothesComponent


