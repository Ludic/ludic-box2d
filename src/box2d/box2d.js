import Box2D from 'box2d.wasm.js'
import b2bin from 'box2d.wasm.wasm'

import { USER_DATA_MAP, ENTITY_MAP, CONTACT_ENABLED_MAP } from './maps.js'

const definePropertiesForPrototype = function(pt){
  return function(property){
    let oldProperty = property
    if(Array.isArray(property)){
      let [prop, oldProp] = property
      property = prop
      oldProperty = oldProp
    }
    Object.defineProperty(pt, property, {
      get(){
        try {
          return this[`get_${oldProperty}`]()
        } catch (error) {
          console.error(`[Ludic Box2D] could not get property '${oldProperty}'`, propery, pt, this)
        }
      },
      set(val){
        try {
          this[`set_${oldProperty}`](val)
        } catch (error) {
          console.error(`[Ludic Box2D] could not set value "${val}" for property '${oldProperty}'`, val, propery, pt, this)
        }
      },
    })
  }
}

let b2d = Box2D({wasmBinary: b2bin})
console.log(b2d)
b2d = b2d.then((b2)=>{
  // setup some helper stuff

  // define all the property getter/setters for modules that have them
  let modules = {
    b2Vec2: ['x','y'],
    b2Vec3: ['x','y','z'],
    b2Mat22: ['ex', 'ey'],
    b2Mat33: ['ex', 'ey', 'ez'],
    b2RayCastInput: ['p1', 'p2', 'maxFriction'],
    b2RayCastOutput: ['normal', 'fraction'],
    b2Shape: [['type', 'm_type'], ['radius', 'm_radius']],
    b2CircleShape: [['p', 'm_p']],
    b2EdgeShape: [ ['vertex1','m_vertex1'], ['vertex2','m_vertex2'], ['vertex0','m_vertex0'], ['vertex3','m_vertex3'], ['hasVertex0','m_hasVertex0'], ['hasVertex3','m_hasVertex3'] ],
    b2ChainShape: [ ['vertices','m_vertices'], ['count','m_count'], ['prevVertex','m_prevVertex'], ['nextVertex','m_nextVertex'], ['hasPrevVertex','m_hasPrevVertex'], ['hasNextVertex','m_hasNextVertex'], ],
    b2PolygonShape: [ ['centroid', 'm_centroid'], ['vertices', 'm_vertices'], ['normals', 'm_normals'], ['count', 'm_count'] ],
    b2FixtureDef: ['shape', 'userData', 'friction', 'restitution', 'density', 'isSensor', 'filter'],
    b2BodyDef: ['type', 'position', 'angle', 'linearVelocity', 'angularVelocity', 'linearDamping', 'angularDamping', 'allowSleep', 'awake', 'fixedRotation', 'bullet', 'active', 'userData', 'gravityScale'],
    b2JointDef: [ 'type', 'userData', 'bodyA', 'bodyB', 'collideConnected' ],
    b2WeldJointDef: [ 'localAnchorA', 'localAnchorB', 'referenceAngle', 'frequencyHz', 'dampingRatio' ],
    b2DistanceJointDef: [ 'localAnchorA', 'localAnchorB', 'length', 'frequencyHz', 'dampingRatio' ],
    b2FrictionJointDef: ['localAnchorA', 'localAnchorB', 'maxForce', 'maxTorque'],
    b2GearJointDef: ['joint1', 'joint2', 'ratio'],
    b2MouseJointDef: ['target', 'maxForce', 'frequencyHz', 'dampingRatio'],
    b2PrismaticJointDef: [ 'localAnchorA', 'localAnchorB', 'localAxisA', 'referenceAngle', 'enableLimit', 'lowerTranslation', 'upperTranslation', 'enableMotor', 'maxMotorForce', 'motorSpeed' ],
    b2JointEdge: ['other', 'joint', 'next','prev'],
    b2PulleyJointDef: [ 'groundAnchorA', 'groundAnchorB', 'localAnchorA', 'localAnchorB', 'lengthA', 'lengthB', 'ratio'],
    b2RevoluteJointDef: [ 'localAnchorA', 'localAnchorB', 'referenceAngle', 'enableLimit', 'lowerAngle', 'upperAngle', 'enableMotor', 'motorSpeed', 'maxMotorTorque' ],
    b2RopeJointDef: ['localAnchorA', 'localAnchorB', 'maxLength'],
    b2WheelJointDef: [ 'localAnchorA', 'localAnchorB', 'localAxisA', 'enableMotor', 'maxMotorTorque', 'motorSpeed', 'frequencyHz', 'dampingRatio' ],
    b2MotorJointDef: [ 'linearOffset', 'angularOffset', 'maxForce', 'maxTorque', 'correctionFactor' ],
    b2Manifold: ['localNormal', 'localPoint', 'type', 'pointCount'],
    b2WorldManifold: ['normal', 'points', 'separations'],
    b2ManifoldPoint: ['localPoint', 'normalImpulse', 'tangentImpulse', 'id'],
    b2Filter: [ 'categoryBits', 'maskBits', 'groupIndex' ],
    b2Transform: ['q', 'p'],
    b2MassData: ['mass', 'center', 'I'],
    b2Profile: [ 'step', 'collide', 'solve', 'solveInit', 'solveVelocity', 'solvePosition', 'broadphase', 'solveTOI' ],
    b2AABB: ['lowerBound', 'upperBound'],
    b2Color: ['r', 'g', 'b'],
    b2Rot: ['s', 'c'],
    b2ContactEdge: ['other', 'contact', 'next', 'prev'],
    b2ContactFeature: ['indexA', 'indexB', 'typeA', 'typeB'],
    b2ContactID: ['cf', 'key'],
    b2ContactImpulse: ['count'],

  }
  Object.entries(modules).forEach(([module, keys])=>{
    if(b2[module]){
      keys.forEach(definePropertiesForPrototype(b2[module].prototype))
    } else {
      console.log('module fail', module)
    }
  })

  // augment b2Body with propery user data values
  // setup these using weakmaps
  Object.defineProperties(b2.b2Body.prototype, {
    GetUserData: {
      value(){
        return USER_DATA_MAP.get(this)
      }
    },
    SetUserData: {
      value(val){
        USER_DATA_MAP.set(this, val)
      }
    },
    entity: {
      get(){
        return ENTITY_MAP.get(this)
      },
      set(val){
        ENTITY_MAP.set(this, val)
      },
    },
  })

  // const IsEnabled = Object.getOwnPropertyDescriptor(b2.b2Contact.prototype, 'IsEnabled')
  const SetEnabled = Object.getOwnPropertyDescriptor(b2.b2Contact.prototype, 'SetEnabled')
  Object.defineProperties(b2.b2Contact.prototype, {
    SetEnabled: {
      value(enabled){
        SetEnabled.value.call(this, enabled)
        CONTACT_ENABLED_MAP.set(this, enabled)
      }
    }
  })


  // define the enums as the are in the def file
  const enums = {
    b2ShapeType: [ 'circle', 'edge', 'polygon', 'chain'],
    b2BodyType: ['static', 'kinematic', 'dynamic'],
    b2JointType: [ 'unknown', 'revolute', 'prismatic', 'distance', 'pulley', 'mouse', 'gear', 'wheel', 'weld', 'friction', 'rope', 'motor' ],
    b2LimitState: ['inactive', 'atLower', 'atUpper', 'equal'],
    b2ContactFeatureType: ['vertex', 'face'],
    b2DrawFlag: [ 'shapeBit', 'jointBit', 'aabbBit', 'pairBit', 'centerOfMassBit' ],
    b2ManifoldType: [ 'circles', 'faceA', 'faceB' ],
    
  }
  Object.entries(enums).forEach(([module, keys])=>{
    b2[module] = keys.reduce((mod, key, index)=>{
      mod[key] = index
      return mod
    }, {})
  })

  return b2
})
export default b2d
