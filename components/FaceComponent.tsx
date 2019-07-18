import * as React from 'react'
import { AvatarConfiguration } from '../index'
import Eyebrow from './face/EyebrowsComponent'
import Eyes from './face/EyesComponent'
import Mouth from './face/MouthComponent'
import Nose from './face/NoseComponent'

interface Props {
  face?: AvatarConfiguration['face']
}

export default class Face extends React.Component<Props> {
  render() {
    const { face } = this.props
    return (
      <g id="Face" transform="translate(76.000000, 82.000000)" fill="#000000">
        <Mouth mouth={face ? face.mouth : undefined} />
        <Nose nose={face ? face.nose : undefined} />
        <Eyes eyes={face ? face.eyes : undefined} />
        <Eyebrow eyebrows={face ? face.eyebrows : undefined} />
      </g>
    )
  }
}
