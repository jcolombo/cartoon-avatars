import * as React from 'react'
import { AvatarConfigurationFacialHair } from '../'
import {
  FacialHairStyleChoices,
  defaultFacialHairStyle,
  defaultFacialHairColor,
} from '../config'

interface Props {
  facialHair?: AvatarConfigurationFacialHair
}

class FacialHairComponent extends React.Component<Props> {
  render() {
    const { facialHair } = this.props
    if (!facialHair) { return null }
    const hairKey =
      facialHair && facialHair.style ? facialHair.style : defaultFacialHairStyle
    const DynamicFacialHairComponent = FacialHairStyleChoices[hairKey].component
    const hairColor =
      facialHair && facialHair.color ? facialHair.color : defaultFacialHairColor
    return (
        !!DynamicFacialHairComponent && <DynamicFacialHairComponent color={hairColor} />
    )
  }
}

export default FacialHairComponent
