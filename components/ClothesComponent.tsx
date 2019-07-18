import * as React from 'react'
import { AvatarConfiguration } from '../'
import {
  ClothesChoices,
  defaultClothesChoice,
  defaultClothesColor,
  defaultClothesGraphic,
} from '../config'

interface Props {
  clothes: AvatarConfiguration['clothes']
}

class ClothesComponent extends React.Component<Props> {
  render() {
    const { clothes } = this.props
    const outfitKey =
        clothes && clothes.outfit ? clothes.outfit : defaultClothesChoice
    const OutfitComponent = ClothesChoices[outfitKey].component
    const color =
        clothes && clothes.color ? clothes.color : defaultClothesColor
    const graphic =
        clothes && clothes.graphic ? clothes.graphic : defaultClothesGraphic
    return (
      !!OutfitComponent && <OutfitComponent color={color} graphic={graphic} />
    )
  }
}

export default ClothesComponent
