import Box2D from 'box2d/build/Box2D_v2.3.1_min.wasm.js'
import b2bin from 'box2d/build/Box2D_v2.3.1_min.wasm.wasm'
const b2d = Box2D({wasmBinary: b2bin}).then((b2)=>{
  // setup some helper stuff

  // augment b2Vec2 with x,y getters/setters
  Object.defineProperties(b2.b2Vec2.prototype, {
    x: {
      get(){
        return this.get_x()
      },
      set(val){
        this.set_x(val)
      }
    },
    y: {
      get(){
        return this.get_y()
      },
      set(val){
        this.set_y(val)
      }
    },
  })

  // augment b2Body with propery user data values
  Object.defineProperties(b2.b2Body.prototype, {
    SetUserData: {
      value(val){
        this.__userData = val
      }
    },
    GetUserData: {
      value(){
        return this.__userData
      }
    }
  })

  return b2
})
export default b2d
