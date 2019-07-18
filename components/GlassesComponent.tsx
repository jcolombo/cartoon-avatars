import * as React from 'react'
import { AvatarConfigurationGlasses } from '../'
import {
  GlassesStyleChoices,
  defaultGlassesStyle,
} from '../config'

interface Props {
  glasses?: AvatarConfigurationGlasses
}

class GlassesComponent extends React.Component<Props> {
  render() {
    const { glasses } = this.props
    if (!glasses) { return null }
    const glassesKey =
      glasses && glasses.style ? glasses.style : defaultGlassesStyle
    const DynamicGlassesComponent = GlassesStyleChoices[glassesKey].component
    return (
        !!DynamicGlassesComponent && <DynamicGlassesComponent />
    )
  }
}

export default GlassesComponent
