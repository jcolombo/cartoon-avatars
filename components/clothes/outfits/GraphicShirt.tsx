import * as React from 'react'
import { uniqueId } from 'lodash'
import { isLight } from '../../../util/tools'
import ClothesColorComponent from '../ClothesColorComponent'
import ClothesGraphicComponent from '../ClothesGraphicComponent'
import {
  ClothesColorOptions, ClothesColors,
  ClothesGraphicOptions,
  defaultClothesColor,
  defaultClothesGraphic,
} from '../../../config'


interface Props {
  color: ClothesColorOptions
  graphic: ClothesGraphicOptions
}

export default class GraphicShirt extends React.Component<Props> {
  static optionValue = 'GraphicShirt'

  private path1 = uniqueId('react-path-')
  private mask1 = uniqueId('react-mask-')

  render() {
    const { color, graphic } = this.props
    const colorChoice = color ? color : defaultClothesColor
    const graphicChoice = graphic ? graphic : defaultClothesGraphic
    const { path1, mask1 } = this
    const ClothesColorHex = ClothesColors[colorChoice].color
    const graphicColor = isLight(ClothesColorHex) ? '#000' : '#FFF'
    console.log(ClothesColorHex, isLight(ClothesColorHex), graphicColor)
    return (
      <g
        id="Clothing/Graphic-Shirt"
        transform="translate(0.000000, 170.000000)"
      >
        <defs>
          <path
            d="M165.624032,29.2681342 C202.760022,32.1373245 232,63.1798426 232,101.051724 L232,110 L32,110 L32,101.051724 C32,62.8348009 61.7752018,31.5722494 99.3929298,29.1967444 C99.1342224,30.2735458 99,31.3767131 99,32.5 C99,44.3741221 113.998461,54 132.5,54 C151.001539,54 166,44.3741221 166,32.5 C166,31.4015235 165.871641,30.3222877 165.624025,29.2681336 Z"
            id={path1}
          />
        </defs>
        <mask id={mask1} fill="white">
          <use xlinkHref={'#' + path1} />
        </mask>
        <use
          id="Clothes"
          fill="#E6E6E6"
          fillRule="evenodd"
          xlinkHref={'#' + path1}
        />
        <ClothesColorComponent maskID={mask1} color={colorChoice} />
        <ClothesGraphicComponent maskID={mask1} graphic={graphicChoice} color={graphicColor} />
      </g>
    )
  }
}
