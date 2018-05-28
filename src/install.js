// Ludic Installer

// Box2D
import Box2D from './box2d/box2d'

// DebugDraw
import DebugDraw from './box2d/debugDraw'

// World
import World from './box2d/world'

// Rube - TODO has deep ludic inheritance in RubeAsset
// import RubeLoader  from './rube/RubeLoader'
// import RubeScene from './rube/RubeScene'
// import RubeAssetLoader from './rube/rubeAssetLoader'

export default function ludicInstall(app){
  //Register Box2D on the app
  app.$box2d = {
    B2D: Box2D,
    DebugDraw: DebugDraw,
    World: World,

    // RubeLoader: RubeLoader,
    // RubeScene: RubeScene,
    // RubeAssetLoader: RubeAssetLoader,
  }
}
