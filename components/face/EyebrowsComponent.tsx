import * as React from 'react'
import { EyebrowsChoices, defaultEyebrows, EyebrowsOptions } from '../../config'

interface Props {
  eyebrows?: EyebrowsOptions
}

class EyebrowsComponent extends React.Component<Props> {
  render() {
    const { eyebrows } = this.props
    const eyebrowsKey = eyebrows ? eyebrows : defaultEyebrows
    const EyebrowsPart = EyebrowsChoices[eyebrowsKey].component
    return !!EyebrowsPart && <EyebrowsPart />
  }
}

export default EyebrowsComponent
