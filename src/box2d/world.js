import Box2D from './box2d';
import {utils} from 'ludic';


export default class World {

  constructor(b2Vec2, y) {
    if(!(b2Vec2 instanceof Box2D.b2Vec2) && typeof b2Vec2 === 'number' && arguments.length === 2){
      // read arg[0] as x coord
      b2Vec2 = new Box2D.b2Vec2(b2Vec2, y)
    } else if(arguments.length === 0){
      b2Vec2 = new Box2D.b2Vec2(0,0)
    } else {
      throw "Improper arguments for World"
    }

    this.world = new Box2D.b2World(b2Vec2);
    utils.using(this, this.world)
    this.enableStep();

    // contact stuff
    this._contactListeners = [];
    this._contactListener = new Box2D.JSContactListener();

    this._contactListener.BeginContact = this.onContact(true).bind(this);
    this._contactListener.EndContact = this.onContact(false).bind(this);
    this._contactListener.PreSolve = function() {};
    this._contactListener.PostSolve = function() {};

    this.world.SetContactListener(this._contactListener);
  }

  drawDebug(override=false){
    this.world.DrawDebugData();
  }

  onContact(begin){
    return function(contactPtr){
      var listener;
      for(var i=0;i<this._contactListeners.length;i++){
        listener = this._contactListeners[i]
        listener.callback(begin, Box2D.wrapPointer(contactPtr, Box2D.b2Contact))
      }
    }
  }

  // onBeginContact(contactPtr){
  //   var listener;
  //   for(var i=0;i<this._contactListeners.length;i++){
  //     listener = this._contactListeners[i];
  //
  //     var contactObject = this.bodyInvolvedInContact(listener.body, contactPtr);
  //
  //     if(contactObject){
  //       // console.log("player.onBeginContact");
  //
  //       if(listener.className) {
  //         if( contactObject.entityData.constructor.name === listener.className){
  //           listener.callback(true, contactObject);
  //         }
  //       } else {
  //         listener.callback(true, contactObject);
  //       }
  //
  //     } else {
  //       continue;
  //     }
  //   }
  // }
  //
  // onEndContact(contactPtr){
  //
  // }

  registerBodyContactListener(l){
    this._contactListeners.push(l);
  }

  newBodyContactListener(callback, addAlso){
    var cl = new ContactListener(callback)

    if(addAlso){
      this.registerBodyContactListener(cl)
    }

    return cl
  }

  bodyInvolvedInContact(body, contactPtr){
    let contact = Box2D.wrapPointer(contactPtr, Box2D.b2Contact)
    let fixtureA = contact.GetFixtureA()
    let bodyA = fixtureA.GetBody()
    let fixtureB = contact.GetFixtureB()
    let bodyB = fixtureB.GetBody()
    if(bodyA == body){
      return {
        contact,
        body: bodyB,
        fixture: fixtureB,
      }
    } else if(bodyB == body){
      return {
        contact,
        body: bodyA,
        fixture: fixtureA,
      }
    } else {
      return false
    }
  }

  step(delta=0,a=3,b=2){
    if(this.stepWorld){
      this.world.Step(delta, a, b);
    }
  }

  enableStep(){
    this.stepWorld = true;
  }

  disableStep(){
    this.stepWorld = false;
  }

  destroy(){
    Box2D.destroy(this.world);
  }

}

class ContactListener {
  constructor(callback) {
    this.callback = callback
  }
}

World.ContactListener = ContactListener
