import * as React from 'react'
import { FacialHairColorOptions } from '../../../config'

interface Props {
  color:FacialHairColorOptions
}

export default class Blank extends React.Component<Props> {
  static optionValue = 'Blank'

  render() {
    return null
  }
}
