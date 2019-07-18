import * as React from 'react'

// HAIR STYLES
import BeardLight from './style/BeardLight'
import BeardMajestic from './style/BeardMajestic'
import BeardMedium from './style/BeardMedium'
import Blank from './style/Blank'
import MoustacheFancy from './style/MoustacheFancy'
import MoustacheMagnum from './style/MoustacheMagnum'

export const FacialHairStyles: { [k: string]: typeof React.Component | null } = {
  None: null,

  // Hair Styles
  BeardLight: BeardLight,
  BeardMajestic: BeardMajestic,
  BeardMedium:BeardMedium,
  Blank:Blank,
  MoustacheFancy:MoustacheFancy,
  MoustacheMagnum:MoustacheMagnum,
}

export default null
