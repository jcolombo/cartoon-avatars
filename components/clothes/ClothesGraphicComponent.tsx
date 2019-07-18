import * as React from 'react'
import {
  ClothesGraphicOptions,
  ClothesGraphicsChoices,
  defaultClothesGraphic,
} from '../../config'

interface Props {
  maskID: string
  graphic: ClothesGraphicOptions
  color?:string
}

class ClothesComponent extends React.Component<Props> {
  render() {
    const { graphic, maskID } = this.props
    const graphicKey = graphic ? graphic : defaultClothesGraphic
    const GraphicComponent = ClothesGraphicsChoices[graphicKey].component
    return !!GraphicComponent && <GraphicComponent maskID={maskID} color={this.props.color} />
  }
}

export default ClothesComponent
