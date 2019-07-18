import * as React from 'react'
import { AvatarConfiguration } from '../'
import {
  HairChoices,
  defaultHairStyle,
  defaultHairColor,
  defaultHatColor,
} from '../config'

interface Props {
  hair: AvatarConfiguration['hair']
  children: React.ReactNode
}

class HairComponent extends React.Component<Props> {
  render() {
    const { hair, children } = this.props
    const hairKey =
        hair && hair.style ? hair.style : defaultHairStyle
    const DynamicHairComponent = HairChoices[hairKey].component
    const hairColor =
        hair && hair.color ? hair.color : defaultHairColor
    const facialHair =
        hair && hair.facialHair && hair.facialHair ? hair.facialHair : undefined
    const hatColor =
        hair && hair.hatColor ? hair.hatColor : defaultHatColor
    return (
        !!DynamicHairComponent && <DynamicHairComponent hairColor={hairColor} facialHair={facialHair} hatColor={hatColor}>{children}</DynamicHairComponent>
    )
  }
}

export default HairComponent
