import * as React from 'react'

// SHIRT TYPES
import BlazerShirt from './outfits/BlazerShirt'
import BlazerSweater from './outfits/BlazerSweater'
import CollarSweater from './outfits/CollarSweater'
import GraphicShirt from './outfits/GraphicShirt'
import Hoodie from './outfits/Hoodie'
import Overall from './outfits/Overall'
import ShirtCrewNeck from './outfits/ShirtCrewNeck'
import ShirtScoopNeck from './outfits/ShirtScoopNeck'
import ShirtVNeck from './outfits/ShirtVNeck'

// SHIRT GRAPHICS
import Bat from './graphics/Bat'
import Bear from './graphics/Bear'
import Cumbia from './graphics/Cumbia'
import Deer from './graphics/Deer'
import Diamond from './graphics/Diamond'
import Hola from './graphics/Hola'
import Pizza from './graphics/Pizza'
import Resist from './graphics/Resist'
import Selena from './graphics/Selena'
import Skull from './graphics/Skull'
import SkullOutline from './graphics/SkullOutline'


export const Clothes: {[k:string]:typeof React.Component|null} = {
    None: null,
    BlazerShirt: BlazerShirt,
    BlazerSweater: BlazerSweater,
    CollarSweater: CollarSweater,
    GraphicShirt: GraphicShirt,
    Hoodie: Hoodie,
    Overall: Overall,
    ShirtCrewNeck: ShirtCrewNeck,
    ShirtScoopNeck: ShirtScoopNeck,
    ShirtVNeck: ShirtVNeck,
}

export const ClothesGraphics: {[k:string]:typeof React.Component|null} = {
    None: null,
    Bat: Bat,
    Bear: Bear,
    Cumbia: Cumbia,
    Deer: Deer,
    Diamond: Diamond,
    Hola: Hola,
    Pizza: Pizza,
    Resist: Resist,
    Selena: Selena,
    Skull: Skull,
    SkullOutline: SkullOutline,
}

export default null