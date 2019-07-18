import * as React from 'react'

// MOUTHS
import Concerned from './mouth/Concerned'
import { default as MouthDefault } from './mouth/Default'
import Disbelief from './mouth/Disbelief'
import Eating from './mouth/Eating'
import Grimace from './mouth/Grimace'
import Sad from './mouth/Sad'
import ScreamOpen from './mouth/ScreamOpen'
import Serious from './mouth/Serious'
import Smile from './mouth/Smile'
import Tongue from './mouth/Tongue'
import Twinkle from './mouth/Twinkle'
import Vomit from './mouth/Vomit'

// NOSES
import { default as NoseDefault } from './nose/Default'

// EYES
import Close from './eyes/Close'
import Cry from './eyes/Cry'
import { default as EyesDefault } from './eyes/Default'
import Dizzy from './eyes/Dizzy'
import EyeRoll from './eyes/EyeRoll'
import Happy from './eyes/Happy'
import Hearts from './eyes/Hearts'
import Side from './eyes/Side'
import Squint from './eyes/Squint'
import Surprised from './eyes/Surprised'
import Wink from './eyes/Wink'
import WinkWacky from './eyes/WinkWacky'

// EYEBROWS
import Angry from './eyebrows/Angry'
import AngryNatural from './eyebrows/AngryNatural'
import { default as EyebrowsDefault } from './eyebrows/Default'
import DefaultNatural from './eyebrows/DefaultNatural'
import FlatNatural from './eyebrows/FlatNatural'
import FrownNatural from './eyebrows/FrownNatural'
import RaisedExcited from './eyebrows/RaisedExcited'
import RaisedExcitedNatural from './eyebrows/RaisedExcitedNatural'
import SadConcerned from './eyebrows/SadConcerned'
import SadConcernedNatural from './eyebrows/SadConcernedNatural'
import UnibrowNatural from './eyebrows/UnibrowNatural'
import UpDown from './eyebrows/UpDown'
import UpDownNatural from './eyebrows/UpDownNatural'

export const Mouths: { [k: string]: typeof React.Component | null } = {
  None: null,
  Concerned: Concerned,
  Default: MouthDefault,
  Disbelief: Disbelief,
  Eating: Eating,
  Grimace: Grimace,
  Sad: Sad,
  ScreamOpen: ScreamOpen,
  Serious: Serious,
  Smile: Smile,
  Tongue: Tongue,
  Twinkle: Twinkle,
  Vomit: Vomit,
}

export const Noses: { [k: string]: typeof React.Component | null } = {
  None: null,
  Default: NoseDefault,
}

export const Eyes: { [k: string]: typeof React.Component | null } = {
  None: null,
  Close: Close,
  Cry: Cry,
  Default: EyesDefault,
  Dizzy: Dizzy,
  EyeRoll: EyeRoll,
  Happy: Happy,
  Hearts: Hearts,
  Side: Side,
  Squint: Squint,
  Surprised: Surprised,
  Wink: Wink,
  WinkWacky: WinkWacky,
}

export const Eyebrows: { [k: string]: typeof React.Component | null } = {
  None: null,
  Angry: Angry,
  AngryNatural: AngryNatural,
  Default: EyebrowsDefault,
  DefaultNatural: DefaultNatural,
  FlatNatural: FlatNatural,
  FrownNatural: FrownNatural,
  RaisedExcited: RaisedExcited,
  RaisedExcitedNatural: RaisedExcitedNatural,
  SadConcerned: SadConcerned,
  SadConcernedNatural: SadConcernedNatural,
  UnibrowNatural: UnibrowNatural,
  UpDown: UpDown,
  UpDownNatural: UpDownNatural,
}

export default null
