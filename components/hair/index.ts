import * as React from 'react'

// HAIR STYLES
import Eyepatch from './style/Eyepatch'
import LongHairBigHair from './style/LongHairBigHair'
import LongHairBob from './style/LongHairBob'
import LongHairBun from './style/LongHairBun'
import LongHairCurly from './style/LongHairCurly'
import LongHairCurvy from './style/LongHairCurvy'
import LongHairDreads from './style/LongHairDreads'
import LongHairFrida from './style/LongHairFrida'
import LongHairFro from './style/LongHairFro'
import LongHairFroBand from './style/LongHairFroBand'
import LongHairMiaWallace from './style/LongHairMiaWallace'
import LongHairNotTooLong from './style/LongHairNotTooLong'
import LongHairShavedSides from './style/LongHairShavedSides'
import LongHairStraight from './style/LongHairStraight'
import LongHairStraight2 from './style/LongHairStraight2'
import LongHairStraightStrand from './style/LongHairStraightStrand'
import NoHair from './style/NoHair'
import ShortHairDreads01 from './style/ShortHairDreads01'
import ShortHairDreads02 from './style/ShortHairDreads02'
import ShortHairFrizzle from './style/ShortHairFrizzle'
import ShortHairShaggy from './style/ShortHairShaggy'
import ShortHairShaggyMullet from './style/ShortHairShaggyMullet'
import ShortHairShortCurly from './style/ShortHairShortCurly'
import ShortHairShortFlat from './style/ShortHairShortFlat'
import ShortHairShortRound from './style/ShortHairShortRound'
import ShortHairShortWaved from './style/ShortHairShortWaved'
import ShortHairSides from './style/ShortHairSides'
import ShortHairTheCaesar from './style/ShortHairTheCaesar'
import ShortHairTheCaesarSidePart from './style/ShortHairTheCaesarSidePart'

// HAT STYLES
import Hat from './style/Hat'
import Hijab from './style/Hijab'
import Turban from './style/Turban'
import WinterHat1 from './style/WinterHat1'
import WinterHat2 from './style/WinterHat2'
import WinterHat3 from './style/WinterHat3'
import WinterHat4 from './style/WinterHat4'

export const HairStyles: { [k: string]: typeof React.Component | null } = {
  None: null,

  // Hair Styles
  Eyepatch: Eyepatch,
  NoHair: NoHair,
  LongHairBigHair:LongHairBigHair,
  LongHairBob:LongHairBob,
  LongHairBun:LongHairBun,
  LongHairCurly:LongHairCurly,
  LongHairCurvy:LongHairCurvy,
  LongHairDreads:LongHairDreads,
  LongHairFrida:LongHairFrida,
  LongHairFro:LongHairFro,
  LongHairFroBand:LongHairFroBand,
  LongHairMiaWallace:LongHairMiaWallace,
  LongHairNotTooLong:LongHairNotTooLong,
  LongHairShavedSides:LongHairShavedSides,
  LongHairStraight:LongHairStraight,
  LongHairStraight2:LongHairStraight2,
  LongHairStraightStrand:LongHairStraightStrand,
  ShortHairDreads01:ShortHairDreads01,
  ShortHairDreads02:ShortHairDreads02,
  ShortHairFrizzle:ShortHairFrizzle,
  ShortHairShaggy:ShortHairShaggy,
  ShortHairShaggyMullet:ShortHairShaggyMullet,
  ShortHairShortCurly:ShortHairShortCurly,
  ShortHairShortFlat:ShortHairShortFlat,
  ShortHairShortRound:ShortHairShortRound,
  ShortHairShortWaved:ShortHairShortWaved,
  ShortHairSides:ShortHairSides,
  ShortHairTheCaesar:ShortHairTheCaesar,
  ShortHairTheCaesarSidePart:ShortHairTheCaesarSidePart,

  // Hat Styles
  Hat: Hat,
  Hijab: Hijab,
  Turban: Turban,
  WinterHat1: WinterHat1,
  WinterHat2: WinterHat2,
  WinterHat3: WinterHat3,
  WinterHat4: WinterHat4
}

export default null
