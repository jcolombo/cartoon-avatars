import * as React from 'react'
import {
  Clothes as ClothesComponent,
  ClothesGraphics as ClothesGraphicsComponent,
} from './components/clothes'
import {
  Mouths as MouthComponent,
  Noses as NoseComponent,
  Eyes as EyesComponent,
  Eyebrows as EyebrowsComponent,
} from './components/face'
import { HairStyles as HairStylesComponent } from './components/hair'
import { FacialHairStyles as FacialHairStylesComponent } from './components/facialHair'
import { GlassesStyles as GlassesStylesComponent } from './components/glasses'

// *****************************************************************************************************************
// BACKGROUND CIRCLE COLOR SETTINGS
// *****************************************************************************************************************

export type CircleColorOptions =
  | 'Blue'
  | 'Red'
  | 'Green'
  | 'Yellow'
  | 'Purple'
  | 'Orange'
  | 'Black'

interface CircleColorObject {
  color: string
}

type CircleColorsContainer = { [k in CircleColorOptions]: CircleColorObject }

export const circleColors: CircleColorsContainer = {
  Blue: { color: '#65C9FF' },
  Red: { color: '#FF6969' },
  Green: { color: '#79D17F' },
  Yellow: { color: '#F8FC79' },
  Purple: { color: '#D06EEB' },
  Orange: { color: '#F7AE4F' },
  Black: { color: '#000000' },
}
export const defaultCircleColor: CircleColorOptions = 'Black'

// *****************************************************************************************************************
// SKIN COLOR SETTINGS
// *****************************************************************************************************************

export type SkinColorOptions =
  | 'Gray'
  | 'Tanned'
  | 'Yellow'
  | 'Pale'
  | 'Light'
  | 'Brown'
  | 'DarkBrown'
  | 'Black'

interface SkinColorObject {
  color: string
}

type SkinColorsContainer = { [k in SkinColorOptions]: SkinColorObject }

export const skinColors: SkinColorsContainer = {
  Gray: { color: '#B0AEAE' },
  Tanned: { color: '#FD9841' },
  Yellow: { color: '#F8D25C' },
  Pale: { color: '#FFDBB4' },
  Light: { color: '#EDB98A' },
  Brown: { color: '#D08B5B' },
  DarkBrown: { color: '#AE5D29' },
  Black: { color: '#614335' },
}
export const defaultSkinColor: SkinColorOptions = 'Gray'

// *****************************************************************************************************************
// CLOTHES SETTINGS
// *****************************************************************************************************************

// Outfits

export type ClothesOptions =
  | 'None'
  | 'BlazerShirt'
  | 'BlazerSweater'
  | 'CollarSweater'
  | 'GraphicShirt'
  | 'Hoodie'
  | 'Overall'
  | 'ShirtCrewNeck'
  | 'ShirtScoopNeck'
  | 'ShirtVNeck'

interface ClothesObject {
  component: typeof React.Component | null
}

type ClothesChoiceContainer = { [k in ClothesOptions]: ClothesObject }

export const ClothesChoices: ClothesChoiceContainer = {
  None: { component: ClothesComponent.None },
  BlazerShirt: { component: ClothesComponent.BlazerShirt },
  BlazerSweater: { component: ClothesComponent.BlazerSweater },
  CollarSweater: { component: ClothesComponent.CollarSweater },
  GraphicShirt: { component: ClothesComponent.GraphicShirt },
  Hoodie: { component: ClothesComponent.Hoodie },
  Overall: { component: ClothesComponent.Overall },
  ShirtCrewNeck: { component: ClothesComponent.ShirtCrewNeck },
  ShirtScoopNeck: { component: ClothesComponent.ShirtScoopNeck },
  ShirtVNeck: { component: ClothesComponent.ShirtVNeck },
}
export const defaultClothesChoice: ClothesOptions = 'None'

// Colors

export type ClothesColorOptions =
  | 'Black'
  | 'Blue01'
  | 'Blue02'
  | 'Blue03'
  | 'Gray01'
  | 'Gray02'
  | 'Heather'
  | 'PastelBlue'
  | 'PastelGreen'
  | 'PastelOrange'
  | 'PastelRed'
  | 'PastelYellow'
  | 'Pink'
  | 'Red'
  | 'White'

interface ClothesColorObject {
  color: string
}

type ClothesColorsContainer = { [k in ClothesColorOptions]: ClothesColorObject }

export const ClothesColors: ClothesColorsContainer = {
  Black: { color: '#262E33' },
  Blue01: { color: '#65C9FF' },
  Blue02: { color: '#5199E4' },
  Blue03: { color: '#25557C' },
  Gray01: { color: '#E6E6E6' },
  Gray02: { color: '#929598' },
  Heather: { color: '#3C4F5C' },
  PastelBlue: { color: '#B1E2FF' },
  PastelGreen: { color: '#A7FFC4' },
  PastelOrange: { color: '#FFDEB5' },
  PastelRed: { color: '#FFAFB9' },
  PastelYellow: { color: '#FFFFB1' },
  Pink: { color: '#FF488E' },
  Red: { color: '#FF5C5C' },
  White: { color: '#FFFFFF' },
}
export const defaultClothesColor: ClothesColorOptions = 'Black'

// Graphics

export type ClothesGraphicOptions =
  | 'None'
  | 'Bat'
  | 'Bear'
  | 'Cumbia'
  | 'Deer'
  | 'Diamond'
  | 'Hola'
  | 'Pizza'
  | 'Resist'
  | 'Selena'
  | 'Skull'
  | 'SkullOutline'

interface ClothesGraphicObject {
  component: typeof React.Component | null
}

type ClothesGraphicChoiceContainer = {
  [k in ClothesGraphicOptions]: ClothesGraphicObject
}

export const ClothesGraphicsChoices: ClothesGraphicChoiceContainer = {
  None: { component: ClothesGraphicsComponent.None },
  Bat: { component: ClothesGraphicsComponent.Bat },
  Bear: { component: ClothesGraphicsComponent.Bear },
  Cumbia: { component: ClothesGraphicsComponent.Cumbia },
  Deer: { component: ClothesGraphicsComponent.Deer },
  Diamond: { component: ClothesGraphicsComponent.Diamond },
  Hola: { component: ClothesGraphicsComponent.Hola },
  Pizza: { component: ClothesGraphicsComponent.Pizza },
  Resist: { component: ClothesGraphicsComponent.Resist },
  Selena: { component: ClothesGraphicsComponent.Selena },
  Skull: { component: ClothesGraphicsComponent.Skull },
  SkullOutline: { component: ClothesGraphicsComponent.SkullOutline },
}
export const defaultClothesGraphic: ClothesGraphicOptions = 'None'

// *****************************************************************************************************************
// FACE SETTINGS
// *****************************************************************************************************************

// Mouth

export type MouthOptions =
  | 'None'
  | 'Concerned'
  | 'Default'
  | 'Disbelief'
  | 'Eating'
  | 'Grimace'
  | 'Sad'
  | 'ScreamOpen'
  | 'Serious'
  | 'Smile'
  | 'Tongue'
  | 'Twinkle'
  | 'Vomit'

interface MouthObject {
  component: typeof React.Component | null
}

type MouthOptionsContainer = { [k in MouthOptions]: MouthObject }

export const MouthChoices: MouthOptionsContainer = {
  None: { component: MouthComponent.None },
  Concerned: { component: MouthComponent.Concerned },
  Default: { component: MouthComponent.Default },
  Disbelief: { component: MouthComponent.Disbelief },
  Eating: { component: MouthComponent.Eating },
  Grimace: { component: MouthComponent.Grimace },
  Sad: { component: MouthComponent.Sad },
  ScreamOpen: { component: MouthComponent.ScreamOpen },
  Serious: { component: MouthComponent.Serious },
  Smile: { component: MouthComponent.Smile },
  Tongue: { component: MouthComponent.Tongue },
  Twinkle: { component: MouthComponent.Twinkle },
  Vomit: { component: MouthComponent.Vomit },
}
export const defaultMouth: MouthOptions = 'None'

// Nose

export type NoseOptions = 'None' | 'Default'

interface NoseObject {
  component: typeof React.Component | null
}

type NoseOptionsContainer = { [k in NoseOptions]: NoseObject }

export const NoseChoices: NoseOptionsContainer = {
  None: { component: NoseComponent.None },
  Default: { component: NoseComponent.Default },
}
export const defaultNose: NoseOptions = 'None'

// Eyes

export type EyesOptions =
  | 'None'
  | 'Close'
  | 'Cry'
  | 'Default'
  | 'Dizzy'
  | 'EyeRoll'
  | 'Happy'
  | 'Hearts'
  | 'Side'
  | 'Squint'
  | 'Surprised'
  | 'Wink'
  | 'WinkWacky'

interface EyesObject {
  component: typeof React.Component | null
}

type EyesOptionsContainer = { [k in EyesOptions]: EyesObject }

export const EyesChoices: EyesOptionsContainer = {
  None: { component: EyesComponent.None },
  Close: { component: EyesComponent.Close },
  Cry: { component: EyesComponent.Cry },
  Default: { component: EyesComponent.Default },
  Dizzy: { component: EyesComponent.Dizzy },
  EyeRoll: { component: EyesComponent.EyeRoll },
  Happy: { component: EyesComponent.Happy },
  Hearts: { component: EyesComponent.Hearts },
  Side: { component: EyesComponent.Side },
  Squint: { component: EyesComponent.Squint },
  Surprised: { component: EyesComponent.Surprised },
  Wink: { component: EyesComponent.Wink },
  WinkWacky: { component: EyesComponent.WinkWacky },
}
export const defaultEyes: EyesOptions = 'None'

// Eyebrows

export type EyebrowsOptions =
  | 'None'
  | 'Angry'
  | 'AngryNatural'
  | 'Default'
  | 'DefaultNatural'
  | 'FlatNatural'
  | 'FrownNatural'
  | 'RaisedExcited'
  | 'RaisedExcitedNatural'
  | 'SadConcerned'
  | 'SadConcernedNatural'
  | 'UnibrowNatural'
  | 'UpDown'
  | 'UpDownNatural'

interface EyebrowsObject {
  component: typeof React.Component | null
}

type EyebrowsOptionsContainer = { [k in EyebrowsOptions]: EyebrowsObject }

export const EyebrowsChoices: EyebrowsOptionsContainer = {
  None: { component: EyebrowsComponent.None },
  Angry: { component: EyebrowsComponent.Angry },
  AngryNatural: { component: EyebrowsComponent.AngryNatural },
  Default: { component: EyebrowsComponent.Default },
  DefaultNatural: { component: EyebrowsComponent.DefaultNatural },
  FlatNatural: { component: EyebrowsComponent.FlatNatural },
  FrownNatural: { component: EyebrowsComponent.FrownNatural },
  RaisedExcited: { component: EyebrowsComponent.RaisedExcited },
  RaisedExcitedNatural: { component: EyebrowsComponent.RaisedExcitedNatural },
  SadConcerned: { component: EyebrowsComponent.SadConcerned },
  SadConcernedNatural: { component: EyebrowsComponent.SadConcernedNatural },
  UnibrowNatural: { component: EyebrowsComponent.UnibrowNatural },
  UpDown: { component: EyebrowsComponent.UpDown },
  UpDownNatural: { component: EyebrowsComponent.UpDownNatural },
}
export const defaultEyebrows: EyebrowsOptions = 'None'

// *****************************************************************************************************************
// HAIR SETTINGS
// *****************************************************************************************************************

// Hair

export type HairOptions =
  | 'None'
  | 'Eyepatch'
  | 'Hat'
  | 'Hijab'
  | 'Turban'
  | 'WinterHat1'
  | 'WinterHat2'
  | 'WinterHat3'
  | 'WinterHat4'
  | 'LongHairBigHair'
  | 'LongHairBob'
  | 'LongHairBun'
  | 'LongHairCurly'
  | 'LongHairCurvy'
  | 'LongHairDreads'
  | 'LongHairFrida'
  | 'LongHairFro'
  | 'LongHairFroBand'
  | 'LongHairMiaWallace'
  | 'LongHairNotTooLong'
  | 'LongHairShavedSides'
  | 'LongHairStraight'
  | 'LongHairStraight2'
  | 'LongHairStraightStrand'
  | 'NoHair'
  | 'ShortHairDreads01'
  | 'ShortHairDreads02'
  | 'ShortHairFrizzle'
  | 'ShortHairShaggy'
  | 'ShortHairShaggyMullet'
  | 'ShortHairShortCurly'
  | 'ShortHairShortFlat'
  | 'ShortHairShortRound'
  | 'ShortHairShortWaved'
  | 'ShortHairSides'
  | 'ShortHairTheCaesar'
  | 'ShortHairTheCaesarSidePart'

interface HairObject {
  component: typeof React.Component | null
}

type HairChoiceContainer = { [k in HairOptions]: HairObject }

export const HairChoices: HairChoiceContainer = {
         None: { component: HairStylesComponent.None },
         // Hair Styles
         Eyepatch: { component: HairStylesComponent.Eyepatch },
         LongHairBigHair: {
           component: HairStylesComponent.LongHairBigHair,
         },
         LongHairBob: { component: HairStylesComponent.LongHairBob },
         LongHairBun: { component: HairStylesComponent.LongHairBun },
         LongHairCurly: { component: HairStylesComponent.LongHairCurly },
         LongHairCurvy: { component: HairStylesComponent.LongHairCurvy },
         LongHairDreads: {
           component: HairStylesComponent.LongHairDreads,
         },
         LongHairFrida: { component: HairStylesComponent.LongHairFrida },
         LongHairFro: { component: HairStylesComponent.LongHairFro },
         LongHairFroBand: {
           component: HairStylesComponent.LongHairFroBand,
         },
         LongHairMiaWallace: {
           component: HairStylesComponent.LongHairMiaWallace,
         },
         LongHairNotTooLong: {
           component: HairStylesComponent.LongHairNotTooLong,
         },
         LongHairShavedSides: {
           component: HairStylesComponent.LongHairShavedSides,
         },
         LongHairStraight: {
           component: HairStylesComponent.LongHairStraight,
         },
         LongHairStraight2: {
           component: HairStylesComponent.LongHairStraight2,
         },
         LongHairStraightStrand: {
           component: HairStylesComponent.LongHairStraightStrand,
         },
         NoHair: { component: HairStylesComponent.NoHair },
         ShortHairDreads01: {
           component: HairStylesComponent.ShortHairDreads01,
         },
         ShortHairDreads02: {
           component: HairStylesComponent.ShortHairDreads02,
         },
         ShortHairFrizzle: {
           component: HairStylesComponent.ShortHairFrizzle,
         },
         ShortHairShaggy: {
           component: HairStylesComponent.ShortHairShaggy,
         },
         ShortHairShaggyMullet: {
           component: HairStylesComponent.ShortHairShaggyMullet,
         },
         ShortHairShortCurly: {
           component: HairStylesComponent.ShortHairShortCurly,
         },
         ShortHairShortFlat: {
           component: HairStylesComponent.ShortHairShortFlat,
         },
         ShortHairShortRound: {
           component: HairStylesComponent.ShortHairShortRound,
         },
         ShortHairShortWaved: {
           component: HairStylesComponent.ShortHairShortWaved,
         },
         ShortHairSides: {
           component: HairStylesComponent.ShortHairSides,
         },
         ShortHairTheCaesar: {
           component: HairStylesComponent.ShortHairTheCaesar,
         },
         ShortHairTheCaesarSidePart: {
           component: HairStylesComponent.ShortHairTheCaesarSidePart,
         },

         // Hat Styles
         Hat: { component: HairStylesComponent.Hat },
         Hijab: { component: HairStylesComponent.Hijab },
         Turban: { component: HairStylesComponent.Turban },
         WinterHat1: { component: HairStylesComponent.WinterHat1 },
         WinterHat2: { component: HairStylesComponent.WinterHat2 },
         WinterHat3: { component: HairStylesComponent.WinterHat3 },
         WinterHat4: { component: HairStylesComponent.WinterHat4 },
       }


export const defaultHairStyle: HairOptions = 'None'

// Hair Color

export type HairColorOptions =
  | 'Auburn'
  | 'Black'
  | 'Blonde'
  | 'BlondeGolden'
  | 'Brown'
  | 'BrownDark'
  | 'PastelPink'
  | 'Platinum'
  | 'Red'
  | 'SilverGray'

interface HairColorObject {
  color: string
}

type HairColorsContainer = { [k in HairColorOptions]: HairColorObject }

export const HairColors: HairColorsContainer = {
  Auburn: { color: '#A55728' },
  Black: { color: '#2C1B18' },
  Blonde: { color: '#B58143' },
  BlondeGolden: { color: '#D6B370' },
  Brown: { color: '#724133' },
  BrownDark: { color: '#4A312C' },
  PastelPink: { color: '#F59797' },
  Platinum: { color: '#ECDCBF' },
  Red: { color: '#C93305' },
  SilverGray: { color: '#E8E1E1' },
}
export const defaultHairColor: HairColorOptions = 'Auburn'

// Hat Color

export type HatColorOptions =
  | 'Black'
  | 'Blue01'
  | 'Blue02'
  | 'Blue03'
  | 'Gray01'
  | 'Gray02'
  | 'Heather'
  | 'PastelBlue'
  | 'PastelGreen'
  | 'PastelOrange'
  | 'PastelRed'
  | 'PastelYellow'
  | 'Pink'
  | 'Red'
  | 'White'

interface HatColorObject {
  color: string
}

type HatColorsContainer = { [k in HatColorOptions]: HatColorObject }

export const HatColors: HatColorsContainer = {
  Black: { color: '#262E33' },
  Blue01: { color: '#65C9FF' },
  Blue02: { color: '#5199E4' },
  Blue03: { color: '#25557C' },
  Gray01: { color: '#E6E6E6' },
  Gray02: { color: '#929598' },
  Heather: { color: '#3C4F5C' },
  PastelBlue: { color: '#B1E2FF' },
  PastelGreen: { color: '#A7FFC4' },
  PastelOrange: { color: '#FFDEB5' },
  PastelRed: { color: '#FFAFB9' },
  PastelYellow: { color: '#FFFFB1' },
  Pink: { color: '#FF488E' },
  Red: { color: '#FF5C5C' },
  White: { color: '#FFFFFF' },
}
export const defaultHatColor: HatColorOptions = 'Black'

// *****************************************************************************************************************
// FACIAL HAIR SETTINGS
// *****************************************************************************************************************

// Style

export type FacialHairStyleOptions =
  | 'None'
  | 'BeardLight'
  | 'BeardMajestic'
  | 'BeardMedium'
  | 'Blank'
  | 'MoustacheFancy'
  | 'MoustacheMagnum'

interface FacialHairStyleObject {
  component: typeof React.Component | null
}

type FacialHairStyleContainer = { [k in FacialHairStyleOptions]: FacialHairStyleObject }

export const FacialHairStyleChoices: FacialHairStyleContainer = {
  None: { component: FacialHairStylesComponent.None },
  BeardLight: { component: FacialHairStylesComponent.BeardLight },
  BeardMajestic: { component: FacialHairStylesComponent.BeardMajestic },
  BeardMedium: { component: FacialHairStylesComponent.BeardMedium },
  Blank: { component: FacialHairStylesComponent.Blank },
  MoustacheFancy: { component: FacialHairStylesComponent.MoustacheFancy },
  MoustacheMagnum: { component: FacialHairStylesComponent.MoustacheMagnum },
}
export const defaultFacialHairStyle: FacialHairStyleOptions = 'None'

// Colors

export type FacialHairColorOptions =
  | 'Auburn'
  | 'Black'
  | 'Blonde'
  | 'BlondeGolden'
  | 'Brown'
  | 'BrownDark'
  | 'PastelPink'
  | 'Platinum'
  | 'Red'
  | 'SilverGray'

interface FacialHairColorObject {
  color: string
}

type FacialHairColorContainer = { [k in FacialHairColorOptions]: FacialHairColorObject }

export const FacialHairColorChoices: FacialHairColorContainer = {
  Auburn: { color: '#A55728' },
  Black: { color: '#2C1B18' },
  Blonde: { color: '#B58143' },
  BlondeGolden: { color: '#D6B370' },
  Brown: { color: '#724133' },
  BrownDark: { color: '#4A312C' },
  PastelPink: { color: '#F59797' },
  Platinum: { color: '#ECDCBF' },
  Red: { color: '#C93305' },
  SilverGray: { color: '#E8E1E1' },
}
export const defaultFacialHairColor: FacialHairColorOptions = 'Black'

// *****************************************************************************************************************
// GLASSES SETTINGS
// *****************************************************************************************************************

// Style

export type GlassesStyleOptions =
  | 'None'
  | 'Blank'
  | 'Kurt'
  | 'Prescription01'
  | 'Prescription02'
  | 'Round'
  | 'Sunglasses'
  | 'Wayfarers'

interface GlassesStyleObject {
  component: typeof React.Component | null
}

type GlassesStyleContainer = { [k in GlassesStyleOptions]: GlassesStyleObject }

export const GlassesStyleChoices: GlassesStyleContainer = {
  None: { component: GlassesStylesComponent.None },
  Blank: { component: GlassesStylesComponent.Blank },
  Kurt: { component: GlassesStylesComponent.Kurt },
  Prescription01: { component: GlassesStylesComponent.Prescription01 },
  Prescription02: { component: GlassesStylesComponent.Prescription02 },
  Round: { component: GlassesStylesComponent.Round },
  Sunglasses: { component: GlassesStylesComponent.Sunglasses },
  Wayfarers: { component: GlassesStylesComponent.Wayfarers },
}
export const defaultGlassesStyle: GlassesStyleOptions = 'None'


// *****************************************************************************************************************
// *****************************************************************************************************************

export default null
