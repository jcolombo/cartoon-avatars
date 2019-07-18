import * as React from 'react'
import { defaultSkinColor, SkinColorOptions, skinColors } from '../config'

export interface Props {
  maskID: string
  skin?: SkinColorOptions
}

function makeColor(name: string, color: string) {
  class ColorComponent extends React.Component<Props> {
    render() {
      return (
        <g
          id="Skin/👶🏽-03-Brown"
          mask={`url(#${this.props.maskID})`}
          fill={color}
        >
          <g transform="translate(0.000000, 0.000000)" id="Color">
            <rect x="0" y="0" width="264" height="280" />
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

class SkinComponent extends React.Component<Props> {
    render() {
        const { skin } = this.props
        const skinValue : SkinColorOptions = skin || defaultSkinColor
        const SkinColor = makeColor(skinValue, skinColors[skinValue].color)
        return <SkinColor maskID={this.props.maskID} />
    }
}

export default SkinComponent
