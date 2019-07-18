import * as React from 'react'
import { EyesChoices, defaultEyes, EyesOptions } from '../../config'

interface Props {
  eyes?: EyesOptions
}

class EyesComponent extends React.Component<Props> {
  render() {
    const { eyes } = this.props
    const eyesKey = eyes ? eyes : defaultEyes
    const EyesPart = EyesChoices[eyesKey].component
    return !!EyesPart && <EyesPart />
  }
}

export default EyesComponent
