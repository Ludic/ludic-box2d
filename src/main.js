// box2d
export {default as Box2D} from './box2d/box2d' // this is a shim

// debug draw
export {default as DebugDraw} from './box2d/debugDraw'

// world
export {default as World} from './box2d/world'

// rube
export {default as RubeLoader} from './rube/RubeLoader'
export {default as RubeScene} from './rube/RubeScene'
export {default as RubeAssetLoader} from './rube/rubeAssetLoader'

export default function(a){
  // TODO: Make this a ludic plugin and then create a LudicApp.ready to instantiate it
  console.log(a)
}
