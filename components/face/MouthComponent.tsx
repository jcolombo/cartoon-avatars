import * as React from 'react'
import { MouthChoices, defaultMouth, MouthOptions } from '../../config'

interface Props {
  mouth?: MouthOptions
}

class MouthComponent extends React.Component<Props> {
  render() {
    const { mouth } = this.props
    const mouthKey = mouth ? mouth : defaultMouth
    const MouthPart = MouthChoices[mouthKey].component
    return !!MouthPart && <MouthPart />
  }
}

export default MouthComponent
