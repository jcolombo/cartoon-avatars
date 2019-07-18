import Avatar from './avatar/Avatar'
import SkinComponent from './components/SkinComponent'
import ClothesComponent from './components/ClothesComponent'
import FaceComponent from './components/FaceComponent'
import HairComponent from './components/HairComponent'
import GlassesComponent from './components/GlassesComponent'
// import FacialHairComponent from './components/FacialHairComponent'
import {
  CircleColorOptions,
  ClothesColorOptions,
  ClothesGraphicOptions,
  ClothesOptions,
  EyebrowsOptions,
  EyesOptions,
  FacialHairColorOptions,
  FacialHairStyleOptions,
  GlassesStyleOptions,
  HairColorOptions,
  HairOptions,
  HatColorOptions,
  MouthOptions,
  NoseOptions,
  SkinColorOptions,
} from './config'

export default Avatar
export const Skin = SkinComponent
export const Clothes = ClothesComponent
export const Face = FaceComponent
export const Hair = HairComponent
export const Glasses = GlassesComponent
// export const FacialHair = FacialHairComponent

export interface AvatarConfigurationFacialHair {
  style:FacialHairStyleOptions
  color?:FacialHairColorOptions
}

export interface AvatarConfigurationGlasses {
  style:GlassesStyleOptions
}

export interface AvatarConfiguration {
  circle?: {
    enabled: boolean
    color?: CircleColorOptions
  }
  skin?: SkinColorOptions
  clothes?: {
    outfit: ClothesOptions
    color?: ClothesColorOptions
    graphic?: ClothesGraphicOptions
  }
  face?: {
    eyebrows?: EyebrowsOptions
    eyes?: EyesOptions
    mouth?: MouthOptions
    nose?: NoseOptions
  }
  hair?: {
    style:HairOptions
    color?:HairColorOptions
    hatColor?:HatColorOptions
    facialHair?: AvatarConfigurationFacialHair
  }
  glasses?: AvatarConfigurationGlasses
}
