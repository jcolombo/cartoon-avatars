import * as React from 'react'

// GLASSES STYLES
import Blank from './style/Blank'
import Kurt from './style/Kurt'
import Prescription01 from './style/Prescription01'
import Prescription02 from './style/Prescription02'
import Round from './style/Round'
import Sunglasses from './style/Sunglasses'
import Wayfarers from './style/Wayfarers'

export const GlassesStyles: { [k: string]: typeof React.Component | null } = {
  None: null,

  // Glasses Styles
  Kurt: Kurt,
  Prescription01: Prescription01,
  Prescription02:Prescription02,
  Blank:Blank,
  Round:Round,
  Sunglasses:Sunglasses,
  Wayfarers:Wayfarers,
}

export default null
