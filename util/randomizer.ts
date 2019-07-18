import { Random } from 'random-js'
import { AvatarConfiguration } from '../index'
import {
  CircleColorOptions,
  circleColors,
  ClothesChoices,
  ClothesColorOptions,
  ClothesColors,
  ClothesGraphicOptions,
  ClothesGraphicsChoices,
  ClothesOptions,
  EyebrowsChoices,
  EyebrowsOptions,
  EyesChoices,
  EyesOptions,
  FacialHairColorChoices,
  FacialHairColorOptions,
  FacialHairStyleChoices,
  FacialHairStyleOptions,
  GlassesStyleChoices, GlassesStyleOptions,
  HairChoices,
  HairColorOptions,
  HairColors,
  HairOptions,
  HatColorOptions,
  HatColors,
  MouthChoices,
  MouthOptions,
  NoseChoices,
  NoseOptions,
  SkinColorOptions,
  skinColors,
} from '../config'

export interface RandomizerOptions {
  circle?: boolean
}

export const randomizeAvatar = (
  options?: RandomizerOptions
): AvatarConfiguration => {
  return {
    circle: {
      enabled:
        options && options.circle !== undefined
          ? options.circle
          : randomBool(),
      color: randomItem(Object.keys(circleColors)) as CircleColorOptions,
    },
    skin: randomItem(Object.keys(skinColors)) as SkinColorOptions,
    clothes: {
      outfit: randomItem(Object.keys(ClothesChoices)) as ClothesOptions,
      color: randomItem(Object.keys(ClothesColors)) as ClothesColorOptions,
      graphic: randomItem(
        Object.keys(ClothesGraphicsChoices)
      ) as ClothesGraphicOptions,
    },
    face: {
      eyebrows: randomItem(
        Object.keys(EyebrowsChoices),
        1
      ) as EyebrowsOptions,
      eyes: randomItem(Object.keys(EyesChoices), 1) as EyesOptions,
      mouth: randomItem(Object.keys(MouthChoices), 1) as MouthOptions,
      nose: randomItem(Object.keys(NoseChoices), 1) as NoseOptions,
    },
    hair: {
      style: randomItem(Object.keys(HairChoices), 1) as HairOptions,
      color: randomItem(Object.keys(HairColors)) as HairColorOptions,
      hatColor: randomItem(Object.keys(HatColors)) as HatColorOptions,
      facialHair:
        randomNumber(1, 10) > 8
          ? {
              style: randomItem(
                Object.keys(FacialHairStyleChoices)
              ) as FacialHairStyleOptions,
              color: randomItem(
                Object.keys(FacialHairColorChoices)
              ) as FacialHairColorOptions,
            }
          : undefined,
    },
    glasses:
      randomNumber(1, 10) > 6
        ? {
            style: randomItem(
              Object.keys(GlassesStyleChoices)
            ) as GlassesStyleOptions,
          }
        : undefined,
  }
}

const randomItem = (oList: string[], firstIndex:number=0): string => {
  const min = firstIndex
  const max = oList.length - 1
  return oList[randomNumber(min, max)]
}

function randomBool() {
  return !!randomNumber(0, 1)
}

function randomNumber(min: number, max: number) {
  const random = new Random() // uses the nativeMath engine
  return random.integer(min, max)

  //return Math.floor(Math.random()*(max-min+1)+min);
}
