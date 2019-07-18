import * as React from 'react'
import { NoseChoices, defaultNose, NoseOptions } from '../../config'

interface Props {
  nose?: NoseOptions
}

class NoseComponent extends React.Component<Props> {
  render() {
    const { nose } = this.props
    const noseKey = nose ? nose : defaultNose
    const NosePart = NoseChoices[noseKey].component
    return !!NosePart && <NosePart />
  }
}

export default NoseComponent
