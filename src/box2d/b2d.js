// this is a shim for the box2d lib
import Box2D, * as __Box2D from 'box2d'
let _Box2D = window.Box2D || Box2D.Box2D || Box2D; /* || ()=>{console.warn("Unknown config of Box2D. Failed to load library");return {};}; */
export {_Box2D as default};
