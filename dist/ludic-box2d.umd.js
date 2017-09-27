(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("ludic"), require("box2d"));
	else if(typeof define === 'function' && define.amd)
		define(["ludic", "box2d"], factory);
	else if(typeof exports === 'object')
		exports["ludic-box2d"] = factory(require("ludic"), require("box2d"));
	else
		root["ludic-box2d"] = factory(root["ludic"], root["box2d"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_9__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_box2d__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_box2d___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_box2d__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _Box2D; });
// this is a shim for the box2d lib

var _Box2D = window.Box2D || __WEBPACK_IMPORTED_MODULE_0_box2d___default.a.Box2D || __WEBPACK_IMPORTED_MODULE_0_box2d___default.a; /* || ()=>{console.warn("Unknown config of Box2D. Failed to load library");return {};}; */


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__box2d_b2d__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__RubeScene__ = __webpack_require__(3);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




Object.prototype.hasOwnProperty = function (property) {
  return typeof this[property] !== 'undefined';
};

var RubeLoader = function () {
  function RubeLoader() {
    _classCallCheck(this, RubeLoader);
  }

  _createClass(RubeLoader, [{
    key: 'loadBodyFromRUBE',
    value: function loadBodyFromRUBE(bodyJso, world) {
      if (!bodyJso.hasOwnProperty('type')) {
        console.log("Body does not have a 'type' property");
        return null;
      }

      var bd = new __WEBPACK_IMPORTED_MODULE_0__box2d_b2d__["a" /* default */].b2BodyDef();
      if (bodyJso.type == 2) bd.set_type(__WEBPACK_IMPORTED_MODULE_0__box2d_b2d__["a" /* default */].b2_dynamicBody);else if (bodyJso.type == 1) bd.set_type(__WEBPACK_IMPORTED_MODULE_0__box2d_b2d__["a" /* default */].b2_kinematicBody);else bd.set_type(__WEBPACK_IMPORTED_MODULE_0__box2d_b2d__["a" /* default */].b2_staticBody);

      if (bodyJso.active === false) {
        bd.set_active(false);
      }
      bd.set_angle(bodyJso.angle || 0);
      bd.set_angularVelocity(bodyJso.angularVelocity || 0);
      bd.set_angularDamping(bodyJso.angularDamping || 0);
      bd.set_awake(bodyJso.awake || false);
      bd.set_bullet(bodyJso.bullet || false);
      bd.set_fixedRotation(bodyJso.fixedRotation || false);
      bd.set_linearDamping(bodyJso.linearDamping || false);
      if (!bodyJso.allowSleep) {
        bd.set_allowSleep(false);
      }

      if (bodyJso.hasOwnProperty('linearVelocity') && bodyJso.linearVelocity instanceof Object) bd.set_linearVelocity(this.parseVec(bodyJso.linearVelocity));else bd.set_linearVelocity(new __WEBPACK_IMPORTED_MODULE_0__box2d_b2d__["a" /* default */].b2Vec2(0, 0));

      if (bodyJso.hasOwnProperty('position') && bodyJso.position instanceof Object) bd.set_position(this.parseVec(bodyJso.position));else bd.set_position(new __WEBPACK_IMPORTED_MODULE_0__box2d_b2d__["a" /* default */].b2Vec2(0, 0));

      if (bodyJso.hasOwnProperty('gravityScale') && !isNaN(parseFloat(bodyJso.gravityScale)) && isFinite(bodyJso.gravityScale)) {
        bd.set_gravityScale(bodyJso.gravityScale);
      } else {
        bd.set_gravityScale(1);
      }

      var body = world.CreateBody(bd);
      body.fixtures = [];

      var md = new __WEBPACK_IMPORTED_MODULE_0__box2d_b2d__["a" /* default */].b2MassData();
      md.set_mass(bodyJso['massData-mass'] || 0);
      if (bodyJso.hasOwnProperty('massData-center') && bodyJso['massData-center'] instanceof Object) md.set_center(this.parseVec(bodyJso['massData-center']));else md.set_center(new __WEBPACK_IMPORTED_MODULE_0__box2d_b2d__["a" /* default */].b2Vec2(0, 0));

      md.set_I(bodyJso['massData-I'] || 0);

      body.SetMassData(md);

      if (bodyJso.hasOwnProperty('fixture')) {
        for (var k = 0; k < bodyJso['fixture'].length; k++) {
          var fixtureJso = bodyJso['fixture'][k];
          this.loadFixtureFromRUBE(body, fixtureJso);
        }
      }
      if (bodyJso.hasOwnProperty('name')) {
        body.name = bodyJso.name;
      }
      if (bodyJso.hasOwnProperty('customProperties')) {
        body.customProperties = bodyJso.customProperties;
        this.parseCustomProperties(body);
      }
      return body;
    }
  }, {
    key: 'parseCustomProperties',
    value: function parseCustomProperties(body) {
      body.props = body.props || {};
      var types = ['string', 'vec2', 'color', 'float', 'int', 'bool'];
      body.customProperties.forEach(function (prop) {
        // var data = {};
        // data[prop.name] = prop.string || prop.vec2 || prop.color || null;
        // if(data[prop.name]===null){
        //   data[prop.name] = prop.float!==undefined?prop.float:null;
        // }
        // if(data[prop.name]===null){
        //   data[prop.name] = prop.int!==undefined?prop.int:null;
        // }
        // if(data[prop.name]===null){
        //   data[prop.name] = prop.bool!==undefined?prop.bool:null;
        // }
        // body.props.push(data);

        types.forEach(function (type) {
          if (prop[type] !== undefined) {
            prop.value = prop[type];
            prop.type = type;
          }
        });

        body.props[prop.name] = {
          type: prop.type,
          value: prop.value
        };
      });
    }
  }, {
    key: 'loadFixtureFromRUBE',
    value: function loadFixtureFromRUBE(body, fixtureJso) {
      var fd = new __WEBPACK_IMPORTED_MODULE_0__box2d_b2d__["a" /* default */].b2FixtureDef();
      fd.set_density(fixtureJso.density || 0);
      fd.set_friction(fixtureJso.friction || 0);
      fd.set_restitution(fixtureJso.restitution || 0);
      fd.set_isSensor(fixtureJso.sensor || 0);

      var filter = new __WEBPACK_IMPORTED_MODULE_0__box2d_b2d__["a" /* default */].b2Filter();

      filter.set_categoryBits(fixtureJso['filter-categoryBits'] || 1);
      filter.set_maskBits(fixtureJso['filter-maskBits'] || 65535);
      filter.set_groupIndex(fixtureJso['filter-groupIndex'] || 0);

      fd.set_filter(filter);

      if (fixtureJso.hasOwnProperty('circle')) {

        var shape = new __WEBPACK_IMPORTED_MODULE_0__box2d_b2d__["a" /* default */].b2CircleShape();
        var radius = fixtureJso.circle.radius || 0;
        var center = this.parseVec(fixtureJso.circle.center);

        shape.set_m_radius(radius);
        shape.set_m_p(center);

        fd.set_shape(shape);

        var fixture = body.CreateFixture(fd);
        if (fixtureJso.name) fixture.name = fixtureJso.name;

        // body.shapeType = 'circle';
        // body.radius = radius;
        // body.center = center;
        var data = {
          type: 'circle',
          radius: radius,
          center: center,
          json: fixtureJso
        };
        body.fixtures.push(data);
      } else if (fixtureJso.hasOwnProperty('polygon')) {

        var verts = [];
        var _verts = [];
        for (var v = 0; v < fixtureJso.polygon.vertices.x.length; v++) {
          verts.push(new __WEBPACK_IMPORTED_MODULE_0__box2d_b2d__["a" /* default */].b2Vec2(fixtureJso.polygon.vertices.x[v], fixtureJso.polygon.vertices.y[v]));
          _verts.push({ x: fixtureJso.polygon.vertices.x[v], y: fixtureJso.polygon.vertices.y[v] });
        }

        var shape = this.createPolygonShape(verts);

        fd.set_shape(shape);

        var fixture = body.CreateFixture(fd);

        if (fixture && fixtureJso.name) fixture.name = fixtureJso.name;

        // body.shapeType = 'polygon';
        // body.verts = verts;
        var data = {
          type: 'polygon',
          verts: _verts,
          json: fixtureJso
        };
        body.fixtures.push(data);
      } else if (fixtureJso.hasOwnProperty('chain')) {

        var verts = [];
        var _verts = [];
        for (var v = 0; v < fixtureJso.chain.vertices.x.length; v++) {
          verts.push(new __WEBPACK_IMPORTED_MODULE_0__box2d_b2d__["a" /* default */].b2Vec2(fixtureJso.chain.vertices.x[v], fixtureJso.chain.vertices.y[v]));
          _verts.push({ x: fixtureJso.chain.vertices.x[v], y: fixtureJso.chain.vertices.y[v] });
        }

        shape = this.createChainShape(verts);
        fd.set_shape(shape);

        var fixture = body.CreateFixture(fd);
        if (fixtureJso.name) fixture.name = fixtureJso.name;

        // body.shapeType = 'chain';
        // body.verts = verts;
        var data = {
          type: 'chain',
          verts: _verts,
          json: fixtureJso
        };
        body.fixtures.push(data);
      } else {
        console.log("Could not find shape type for fixture");
      }
    }
  }, {
    key: 'getVectorValue',
    value: function getVectorValue(val) {
      if (val instanceof Object) return val;else return { x: 0, y: 0 };
    }
  }, {
    key: 'parseVec',
    value: function parseVec(obj) {
      if (obj && obj instanceof Object) return new __WEBPACK_IMPORTED_MODULE_0__box2d_b2d__["a" /* default */].b2Vec2(obj.x || 0, obj.y || 0);else return new __WEBPACK_IMPORTED_MODULE_0__box2d_b2d__["a" /* default */].b2Vec2(0, 0);
    }
  }, {
    key: 'loadJointFromRUBE',
    value: function loadJointFromRUBE(jointJso, world, loadedBodies) {
      if (!jointJso.hasOwnProperty('type')) {
        console.log("Joint does not have a 'type' property");
        return null;
      }
      if (jointJso.bodyA >= loadedBodies.length) {
        console.log("Index for bodyA is invalid: " + jointJso.bodyA);
        return null;
      }
      if (jointJso.bodyB >= loadedBodies.length) {
        console.log("Index for bodyB is invalid: " + jointJso.bodyB);
        return null;
      }

      var joint = null;

      if (jointJso.type == "revolute") {
        var jd = new __WEBPACK_IMPORTED_MODULE_0__box2d_b2d__["a" /* default */].b2RevoluteJointDef();
        jd.set_bodyA(loadedBodies[jointJso.bodyA]);
        jd.set_bodyB(loadedBodies[jointJso.bodyB]);
        jd.set_collideConnected(jointJso.collideConnected || false);
        jd.set_localAnchorA(this.parseVec(jointJso.anchorA));
        jd.set_localAnchorB(this.parseVec(jointJso.anchorB));
        jd.set_enableLimit(jointJso.enableLimit || false);
        jd.set_enableMotor(jointJso.enableMotor || false);
        jd.set_lowerAngle(jointJso.lowerLimit || 0);
        jd.set_maxMotorTorque(jointJso.maxMotorTorque || 0);
        jd.set_motorSpeed(jointJso.motorSpeed || 0);
        jd.set_referenceAngle(jointJso.refAngle || 0);
        jd.set_upperAngle(jointJso.upperLimit || 0);

        joint = world.CreateJoint(jd);
      } else if (jointJso.type == "distance") {
        var jd = new __WEBPACK_IMPORTED_MODULE_0__box2d_b2d__["a" /* default */].b2DistanceJointDef();
        jd.set_bodyA(loadedBodies[jointJso.bodyA]);
        jd.set_bodyB(loadedBodies[jointJso.bodyB]);
        jd.set_collideConnected(jointJso.collideConnected || false);
        jd.set_localAnchorA(this.parseVec(jointJso.anchorA));
        jd.set_localAnchorB(this.parseVec(jointJso.anchorB));
        jd.set_dampingRatio(jointJso.dampingRatio || 0);
        jd.set_frequencyHz(jointJso.frequency || 0);
        jd.set_length(jointJso.length || 0);

        joint = world.CreateJoint(jd);
      } else if (jointJso.type == "rope") {
        var jd = new __WEBPACK_IMPORTED_MODULE_0__box2d_b2d__["a" /* default */].b2RopeJointDef();

        jd.set_bodyA(loadedBodies[jointJso.bodyA]);
        jd.set_bodyB(loadedBodies[jointJso.bodyB]);
        jd.set_collideConnected(jointJso.collideConnected || false);
        jd.set_localAnchorA(this.parseVec(jointJso.anchorA));
        jd.set_localAnchorB(this.parseVec(jointJso.anchorB));
        jd.set_maxLength(jointJso.maxLength || 0);
        joint = world.CreateJoint(jd);
      } else if (jointJso.type == "motor") {
        if (__WEBPACK_IMPORTED_MODULE_0__box2d_b2d__["a" /* default */].b2MotorJointDef) {
          var jd = new __WEBPACK_IMPORTED_MODULE_0__box2d_b2d__["a" /* default */].b2MotorJointDef();

          jd.set_bodyA(loadedBodies[jointJso.bodyA]);
          jd.set_bodyB(loadedBodies[jointJso.bodyB]);
          jd.set_collideConnected(jointJso.collideConnected || false);

          jd.set_linearOffset(this.parseVec(jointJso.anchorA));
          jd.set_angularOffset(jointJso.refAngle || 0);
          jd.set_maxForce(jointJso.maxForce || 0);
          jd.set_maxTorque(jointJso.maxTorque || 0);
          jd.set_correctionFactor(jointJso.correctionFactor || 0);

          joint = world.CreateJoint(jd);
        } else {
          console.log("This version of box2d doesn't support motor joints");
        }
      } else if (jointJso.type == "prismatic") {
        var jd = new __WEBPACK_IMPORTED_MODULE_0__box2d_b2d__["a" /* default */].b2PrismaticJointDef();
        jd.set_bodyA(loadedBodies[jointJso.bodyA]);
        jd.set_bodyB(loadedBodies[jointJso.bodyB]);
        jd.set_collideConnected(jointJso.collideConnected || false);
        jd.set_localAnchorA(this.parseVec(jointJso.anchorA));
        jd.set_localAnchorB(this.parseVec(jointJso.anchorB));
        jd.set_enableLimit(jointJso.enableLimit || false);
        jd.set_enableMotor(jointJso.enableMotor || false);
        jd.set_localAxisA(this.parseVec(jointJso.localAxisA));
        jd.set_lowerTranslation(jointJso.lowerLimit || 0);
        jd.set_maxMotorForce(jointJso.maxMotorForce || 0);
        jd.set_motorSpeed(jointJso.motorSpeed || 0);
        jd.set_referenceAngle(jointJso.refAngle || 0);
        jd.set_upperTranslation(jointJso.upperLimit || 0);
        joint = world.CreateJoint(jd);
      } else if (jointJso.type == "wheel") {

        var jd = new __WEBPACK_IMPORTED_MODULE_0__box2d_b2d__["a" /* default */].b2WheelJointDef();
        jd.set_bodyA(loadedBodies[jointJso.bodyA]);
        jd.set_bodyB(loadedBodies[jointJso.bodyB]);
        jd.set_collideConnected(jointJso.collideConnected || false);
        jd.set_localAnchorA(this.parseVec(jointJso.anchorA));
        jd.set_localAnchorB(this.parseVec(jointJso.anchorB));
        jd.set_enableMotor(jointJso.enableMotor || false);
        jd.set_localAxisA(this.parseVec(jointJso.localAxisA));
        jd.set_maxMotorTorque(jointJso.maxMotorTorque || 0);
        jd.set_motorSpeed(jointJso.motorSpeed || 0);
        jd.set_dampingRatio(jointJso.springDampingRatio || 0);
        jd.set_frequencyHz(jointJso.springFrequency || 0);
        joint = world.CreateJoint(jd);
      } else if (jointJso.type == "friction") {
        var jd = new __WEBPACK_IMPORTED_MODULE_0__box2d_b2d__["a" /* default */].b2FrictionJointDef();

        jd.set_bodyA(loadedBodies[jointJso.bodyA]);
        jd.set_bodyB(loadedBodies[jointJso.bodyB]);
        jd.set_collideConnected(jointJso.collideConnected || false);
        jd.set_localAnchorA(this.parseVec(jointJso.anchorA));
        jd.set_localAnchorB(this.parseVec(jointJso.anchorB));
        jd.set_maxForce(jointJso.maxForce || 0);
        jd.set_maxTorque(jointJso.maxTorque || 0);
        joint = world.CreateJoint(jd);
      } else if (jointJso.type == "weld") {
        var jd = new __WEBPACK_IMPORTED_MODULE_0__box2d_b2d__["a" /* default */].b2WeldJointDef();

        jd.set_bodyA(loadedBodies[jointJso.bodyA]);
        jd.set_bodyB(loadedBodies[jointJso.bodyB]);
        jd.set_collideConnected(jointJso.collideConnected || false);
        jd.set_localAnchorA(this.parseVec(jointJso.anchorA));
        jd.set_localAnchorB(this.parseVec(jointJso.anchorB));
        jd.set_referenceAngle(jointJso.refAngle || 0);
        jd.set_dampingRatio(jointJso.dampingRatio || 0);
        jd.set_frequencyHz(jointJso.frequency || 0);
        joint = world.CreateJoint(jd);
      } else {
        console.log("Unsupported joint type: " + jointJso.type);
        console.log(jointJso);
      }
      if (joint && jointJso.name) joint.name = jointJso.name;
      return joint;
    }
  }, {
    key: 'makeClone',
    value: function (_makeClone) {
      function makeClone(_x) {
        return _makeClone.apply(this, arguments);
      }

      makeClone.toString = function () {
        return _makeClone.toString();
      };

      return makeClone;
    }(function (obj) {
      var newObj = obj instanceof Array ? [] : {};
      for (var i in obj) {
        if (obj[i] && _typeof(obj[i]) == "object") newObj[i] = makeClone(obj[i]);else newObj[i] = obj[i];
      }
      return newObj;
    })
  }, {
    key: 'loadSceneFromRUBE',


    //mainly just a convenience for the testbed - uses global 'world' variable
    value: function loadSceneFromRUBE(worldJso) {
      return loadSceneIntoWorld(worldJso, world);
    }

    //load the scene into an already existing world variable

  }, {
    key: 'loadSceneIntoWorld',
    value: function loadSceneIntoWorld(worldJso, world) {
      var success = true;
      var scene = new __WEBPACK_IMPORTED_MODULE_1__RubeScene__["a" /* default */](worldJso, world);

      var loadedBodies = [];
      if (worldJso.hasOwnProperty('body')) {
        for (var i = 0; i < worldJso.body.length; i++) {
          var bodyJso = worldJso.body[i];
          var body = this.loadBodyFromRUBE(bodyJso, world);
          if (body) {
            loadedBodies.push(body);
          } else {
            success = false;
          }
        }
      }
      scene.bodies = loadedBodies;

      var loadedJoints = [];
      if (worldJso.hasOwnProperty('joint')) {
        for (var i = 0; i < worldJso.joint.length; i++) {
          var jointJso = worldJso.joint[i];
          var joint = this.loadJointFromRUBE(jointJso, world, loadedBodies);
          if (joint) loadedJoints.push(joint);
          //else
          //    success = false;
        }
      }
      scene.joints = loadedJoints;
      scene._success = success;

      return scene;
    }

    //create a world variable and return it if loading succeeds

  }, {
    key: 'loadWorldFromRUBE',
    value: function loadWorldFromRUBE(worldJso) {
      var gravity = new __WEBPACK_IMPORTED_MODULE_0__box2d_b2d__["a" /* default */].b2Vec2(0, 0);
      if (worldJso.hasOwnProperty('gravity') && worldJso.gravity instanceof Object) gravity.SetV(worldJso.gravity);
      var world = new __WEBPACK_IMPORTED_MODULE_0__box2d_b2d__["a" /* default */].b2World(gravity);
      if (!loadSceneIntoWorld(worldJso, world)) return false;
      return world;
    }
  }, {
    key: 'getNamedBodies',
    value: function getNamedBodies(world, name) {
      var bodies = [];
      for (b = world.m_bodyList; b; b = b.m_next) {
        if (b.name == name) bodies.push(b);
      }
      return bodies;
    }
  }, {
    key: 'getNamedFixtures',
    value: function getNamedFixtures(world, name) {
      var fixtures = [];
      for (var b = world.m_bodyList; b; b = b.m_next) {
        for (var f = b.m_fixtureList; f; f = f.m_next) {
          if (f.name == name) fixtures.push(f);
        }
      }
      return fixtures;
    }
  }, {
    key: 'getNamedJoints',
    value: function getNamedJoints(world, name) {
      var joints = [];
      for (var j = world.m_jointList; j; j = j.m_next) {
        if (j.name == name) joints.push(j);
      }
      return joints;
    }

    //custom properties

  }, {
    key: 'getBodiesByCustomProperty',
    value: function getBodiesByCustomProperty(world, propertyType, propertyName, valueToMatch) {
      var bodies = [];
      for (var b = world.m_bodyList; b; b = b.m_next) {
        if (!b.hasOwnProperty('customProperties')) continue;
        for (var i = 0; i < b.customProperties.length; i++) {
          if (!b.customProperties[i].hasOwnProperty("name")) continue;
          if (!b.customProperties[i].hasOwnProperty(propertyType)) continue;
          if (b.customProperties[i].name == propertyName && b.customProperties[i][propertyType] == valueToMatch) bodies.push(b);
        }
      }
      return bodies;
    }
  }, {
    key: 'hasCustomProperty',
    value: function hasCustomProperty(item, propertyType, propertyName) {
      if (!item.hasOwnProperty('customProperties')) return false;
      for (var i = 0; i < item.customProperties.length; i++) {
        if (!item.customProperties[i].hasOwnProperty("name")) continue;
        if (!item.customProperties[i].hasOwnProperty(propertyType)) continue;
        return true;
      }
      return false;
    }
  }, {
    key: 'getCustomProperty',
    value: function getCustomProperty(item, propertyType, propertyName, defaultValue) {
      if (!item.hasOwnProperty('customProperties')) return defaultValue;
      for (var i = 0; i < item.customProperties.length; i++) {
        if (!item.customProperties[i].hasOwnProperty("name")) continue;
        if (!item.customProperties[i].hasOwnProperty(propertyType)) continue;
        if (item.customProperties[i].name == propertyName) return item.customProperties[i][propertyType];
      }
      return defaultValue;
    }

    // http://stackoverflow.com/questions/12792486/emscripten-bindings-how-to-create-an-accessible-c-c-array-from-javascript

  }, {
    key: 'createChainShape',
    value: function createChainShape(vertices, closedLoop) {
      var shape = new __WEBPACK_IMPORTED_MODULE_0__box2d_b2d__["a" /* default */].b2ChainShape();
      var buffer = __WEBPACK_IMPORTED_MODULE_0__box2d_b2d__["a" /* default */].allocate(vertices.length * 8, 'float', __WEBPACK_IMPORTED_MODULE_0__box2d_b2d__["a" /* default */].ALLOC_STACK);
      var offset = 0;
      for (var i = 0; i < vertices.length; i++) {
        __WEBPACK_IMPORTED_MODULE_0__box2d_b2d__["a" /* default */].setValue(buffer + offset, vertices[i].get_x(), 'float'); // x
        __WEBPACK_IMPORTED_MODULE_0__box2d_b2d__["a" /* default */].setValue(buffer + (offset + 4), vertices[i].get_y(), 'float'); // y
        offset += 8;
      }
      var ptr_wrapped = __WEBPACK_IMPORTED_MODULE_0__box2d_b2d__["a" /* default */].wrapPointer(buffer, __WEBPACK_IMPORTED_MODULE_0__box2d_b2d__["a" /* default */].b2Vec2);
      if (closedLoop) shape.CreateLoop(ptr_wrapped, vertices.length);else shape.CreateChain(ptr_wrapped, vertices.length);
      return shape;
    }
  }, {
    key: 'createPolygonShape',
    value: function createPolygonShape(vertices) {
      var shape = new __WEBPACK_IMPORTED_MODULE_0__box2d_b2d__["a" /* default */].b2PolygonShape();
      var buffer = __WEBPACK_IMPORTED_MODULE_0__box2d_b2d__["a" /* default */].allocate(vertices.length * 8, 'float', __WEBPACK_IMPORTED_MODULE_0__box2d_b2d__["a" /* default */].ALLOC_STACK);
      var offset = 0;
      for (var i = 0; i < vertices.length; i++) {
        __WEBPACK_IMPORTED_MODULE_0__box2d_b2d__["a" /* default */].setValue(buffer + offset, vertices[i].get_x(), 'float'); // x
        __WEBPACK_IMPORTED_MODULE_0__box2d_b2d__["a" /* default */].setValue(buffer + (offset + 4), vertices[i].get_y(), 'float'); // y
        offset += 8;
      }
      var ptr_wrapped = __WEBPACK_IMPORTED_MODULE_0__box2d_b2d__["a" /* default */].wrapPointer(buffer, __WEBPACK_IMPORTED_MODULE_0__box2d_b2d__["a" /* default */].b2Vec2);
      shape.Set(ptr_wrapped, vertices.length);
      return shape;
    }
  }, {
    key: 'createRandomPolygonShape',
    value: function createRandomPolygonShape(radius) {
      var numVerts = 3.5 + Math.random() * 5;
      numVerts = numVerts | 0;
      var verts = [];
      for (var i = 0; i < numVerts; i++) {
        var angle = i / numVerts * 360.0 * 0.0174532925199432957;
        verts.push(new b2Vec2(radius * Math.sin(angle), radius * -Math.cos(angle)));
      }
      return this.createPolygonShape(verts);
    }
  }]);

  return RubeLoader;
}();

/* harmony default export */ __webpack_exports__["a"] = new RubeLoader();

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RubeScene = function () {
  function RubeScene(sceneJson, world) {
    _classCallCheck(this, RubeScene);

    this._json = sceneJson;
    this.world = world;
  }

  _createClass(RubeScene, [{
    key: "destroy",
    value: function destroy() {
      // this.world = null;
      // this.bodies = null;
      // this.joints = null;
      // this.objects = null;
      for (var key in this) {
        this[key] = null;
      }
    }
  }, {
    key: "finish",
    value: function finish(opts) {
      this.data = opts;
      this._isFinished = true;
    }
  }]);

  return RubeScene;
}();

/* harmony default export */ __webpack_exports__["a"] = RubeScene;

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__b2d__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ludic__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ludic___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ludic__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var DebugDraw = function () {
    function DebugDraw(canvas) {
        _classCallCheck(this, DebugDraw);

        this.canvas = canvas;
        this.context = canvas.getContext('2d');
        this.debugDraw = this.getCanvasDebugDraw();
        __WEBPACK_IMPORTED_MODULE_1_ludic__["utils"].using(this, this.debugDraw, true);
    }

    _createClass(DebugDraw, [{
        key: 'initBits',
        value: function initBits() {
            this.e_shapeBit = 0x0001;
            this.e_jointBit = 0x0002;
            this.e_aabbBit = 0x0004;
            this.e_pairBit = 0x0008;
            this.e_centerOfMassBit = 0x0010;
        }
    }, {
        key: 'setColorFromDebugDrawCallback',
        value: function setColorFromDebugDrawCallback(color) {
            var col = __WEBPACK_IMPORTED_MODULE_0__b2d__["a" /* default */].wrapPointer(color, __WEBPACK_IMPORTED_MODULE_0__b2d__["a" /* default */].b2Color);
            var red = col.get_r() * 255 | 0;
            var green = col.get_g() * 255 | 0;
            var blue = col.get_b() * 255 | 0;
            var colStr = red + "," + green + "," + blue;
            this.context.fillStyle = "rgba(" + colStr + ",0.5)";
            this.context.strokeStyle = "rgb(" + colStr + ")";
        }
    }, {
        key: 'drawSegment',
        value: function drawSegment(vert1, vert2) {
            var vert1V = __WEBPACK_IMPORTED_MODULE_0__b2d__["a" /* default */].wrapPointer(vert1, __WEBPACK_IMPORTED_MODULE_0__b2d__["a" /* default */].b2Vec2);
            var vert2V = __WEBPACK_IMPORTED_MODULE_0__b2d__["a" /* default */].wrapPointer(vert2, __WEBPACK_IMPORTED_MODULE_0__b2d__["a" /* default */].b2Vec2);
            this.context.beginPath();
            this.context.moveTo(vert1V.get_x(), vert1V.get_y());
            this.context.lineTo(vert2V.get_x(), vert2V.get_y());
            this.context.stroke();
        }
    }, {
        key: 'drawPolygon',
        value: function drawPolygon(vertices, vertexCount, fill) {
            this.context.beginPath();
            for (var tmpI = 0; tmpI < vertexCount; tmpI++) {
                var vert = __WEBPACK_IMPORTED_MODULE_0__b2d__["a" /* default */].wrapPointer(vertices + tmpI * 8, __WEBPACK_IMPORTED_MODULE_0__b2d__["a" /* default */].b2Vec2);
                if (tmpI == 0) this.context.moveTo(vert.get_x(), vert.get_y());else this.context.lineTo(vert.get_x(), vert.get_y());
            }
            this.context.closePath();
            if (fill) this.context.fill();
            this.context.stroke();
        }
    }, {
        key: 'drawCircle',
        value: function drawCircle(center, radius, axis, fill) {
            var centerV = __WEBPACK_IMPORTED_MODULE_0__b2d__["a" /* default */].wrapPointer(center, __WEBPACK_IMPORTED_MODULE_0__b2d__["a" /* default */].b2Vec2);
            var axisV = __WEBPACK_IMPORTED_MODULE_0__b2d__["a" /* default */].wrapPointer(axis, __WEBPACK_IMPORTED_MODULE_0__b2d__["a" /* default */].b2Vec2);

            this.context.beginPath();
            this.context.arc(centerV.get_x(), centerV.get_y(), radius, 0, 2 * Math.PI, false);
            if (fill) this.context.fill();
            this.context.stroke();

            if (fill) {
                //render axis marker
                var vert2V = Util.copyVec2(centerV);
                vert2V.op_add(Util.scaledVec2(axisV, radius));
                this.context.beginPath();
                this.context.moveTo(centerV.get_x(), centerV.get_y());
                this.context.lineTo(vert2V.get_x(), vert2V.get_y());
                this.context.stroke();
            }
        }
    }, {
        key: 'drawTransform',
        value: function drawTransform(transform) {
            var trans = __WEBPACK_IMPORTED_MODULE_0__b2d__["a" /* default */].wrapPointer(transform, __WEBPACK_IMPORTED_MODULE_0__b2d__["a" /* default */].b2Transform);
            var pos = trans.get_p();
            var rot = trans.get_q();

            this.context.save();
            this.context.translate(pos.get_x(), pos.get_y());
            this.context.scale(0.5, 0.5);
            this.context.rotate(rot.GetAngle());
            this.context.lineWidth *= 2;
            this.drawAxes(context);
            this.context.restore();
        }

        // solid polygon: rgba(127, 127, 76, 0.498039215686275)
        // solid polygon: rgba(127, 127, 76, 0.498039215686275)
        // solid circle: rgba(229, 178, 178, 0.498039215686275)

    }, {
        key: 'saveContext',
        value: function saveContext(type) {
            var ctx = this.context;
            this.obj = this.obj || {};

            if (!this.obj.hasOwnProperty(ctx.fillStyle)) {
                var arr = this.obj[ctx.fillStyle] = this.obj[ctx.fillStyle] || [];
                arr.push(type);

                // console.log(this.obj);
            }
        }
    }, {
        key: 'getCanvasDebugDraw',
        value: function getCanvasDebugDraw() {
            var debugDraw = new __WEBPACK_IMPORTED_MODULE_0__b2d__["a" /* default */].JSDraw();
            var self = this;
            debugDraw.DrawSegment = function (vert1, vert2, color) {
                self.setColorFromDebugDrawCallback(color);
                self.saveContext('draw segment');
                console.log('draw seg');
                self.drawSegment(vert1, vert2);
            };

            debugDraw.DrawPolygon = function (vertices, vertexCount, color) {
                console.log('draw poly');
                self.setColorFromDebugDrawCallback(color);
                self.saveContext('draw polygon');
                self.drawPolygon(vertices, vertexCount, false);
            };

            debugDraw.DrawSolidPolygon = function (vertices, vertexCount, color) {
                console.log('draw solid poly');
                self.setColorFromDebugDrawCallback(color);
                self.saveContext('draw solid polygon');
                self.drawPolygon(vertices, vertexCount, true);
            };

            debugDraw.DrawCircle = function (center, radius, color) {
                self.setColorFromDebugDrawCallback(color);
                self.saveContext('draw circle');
                var dummyAxis = __WEBPACK_IMPORTED_MODULE_0__b2d__["a" /* default */].b2Vec2(0, 0);
                self.drawCircle(center, radius, dummyAxis, false);
            };

            debugDraw.DrawSolidCircle = function (center, radius, axis, color) {
                self.setColorFromDebugDrawCallback(color);
                self.saveContext('draw solid circle');
                self.drawCircle(center, radius, axis, true);
            };

            debugDraw.DrawTransform = function (transform) {
                self.drawTransform(transform);
            };

            return debugDraw;
        }
    }, {
        key: 'getDebugDraw',
        value: function getDebugDraw() {
            return this.debugDraw;
        }

        // TODO: implement better bit flag management
        // setShapeBit(bit){
        //   if(bit){
        //
        //   }
        // }

    }, {
        key: 'destroy',
        value: function destroy() {
            this.debugDraw = null;
        }
    }], [{
        key: 'newDebugger',
        value: function newDebugger(canvas) {
            var d = new DebugDraw(canvas);
            return d.debugDraw;
        }
    }]);

    return DebugDraw;
}();

DebugDraw.e_shapeBit = 0x0001;
DebugDraw.e_jointBit = 0x0002;
DebugDraw.e_aabbBit = 0x0004;
DebugDraw.e_pairBit = 0x0008;
DebugDraw.e_centerOfMassBit = 0x0010;

/* harmony default export */ __webpack_exports__["a"] = DebugDraw;

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__b2d__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ludic__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ludic___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ludic__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




// var canvasOffset = {
//   x: 0,
//   y: 0
// };

var World = function () {
  function World(b2Vec2, y) {
    _classCallCheck(this, World);

    if (!(b2Vec2 instanceof __WEBPACK_IMPORTED_MODULE_0__b2d__["a" /* default */].b2Vec2) && typeof b2Vec2 === 'number' && arguments.length === 2) {
      // read arg[0] as x coord
      b2Vec2 = new __WEBPACK_IMPORTED_MODULE_0__b2d__["a" /* default */].b2Vec2(b2Vec2, y);
    } else if (arguments.length === 0) {
      b2Vec2 = new __WEBPACK_IMPORTED_MODULE_0__b2d__["a" /* default */].b2Vec2(0, 0);
    } else {
      throw "Improper arguments for World";
    }

    this.world = new __WEBPACK_IMPORTED_MODULE_0__b2d__["a" /* default */].b2World(b2Vec2);
    __WEBPACK_IMPORTED_MODULE_1_ludic__["utils"].using(this, this.world);
    this.enableStep();
    console.log('world');
    // contact stuff
    this._contactListeners = [];
    this._contactListener = new __WEBPACK_IMPORTED_MODULE_0__b2d__["a" /* default */].JSContactListener();

    this._contactListener.BeginContact = this.onContact(true).bind(this);
    this._contactListener.EndContact = this.onContact(false).bind(this);
    this._contactListener.PreSolve = function () {};
    this._contactListener.PostSolve = function () {};

    this.world.SetContactListener(this._contactListener);
  }

  _createClass(World, [{
    key: 'drawDebug',
    value: function drawDebug() {
      var override = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      this.world.DrawDebugData();
    }
  }, {
    key: 'onContact',
    value: function onContact(begin) {
      return function (contactPtr) {
        var listener;
        for (var i = 0; i < this._contactListeners.length; i++) {
          listener = this._contactListeners[i];
          var contactObject = this.bodyInvolvedInContact(listener.body, contactPtr);

          if (contactObject) {
            if (listener.className) {
              if (contactObject.entityData.constructor.name === listener.className) {
                listener.callback(begin, contactObject);
              }
            } else {
              listener.callback(begin, contactObject);
            }
          } else {
            continue;
          }
        }
      };
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

  }, {
    key: 'registerBodyContactListener',
    value: function registerBodyContactListener(l) {
      this._contactListeners.push(l);
    }
  }, {
    key: 'newBodyContactListener',
    value: function newBodyContactListener(body, className, callback, addAlso) {
      var cl = new ContactListener(body, className, callback);

      if (addAlso) {
        this.registerBodyContactListener(cl);
      }

      return cl;
    }
  }, {
    key: 'bodyInvolvedInContact',
    value: function bodyInvolvedInContact(body, contactPtr) {
      var contact = __WEBPACK_IMPORTED_MODULE_0__b2d__["a" /* default */].wrapPointer(contactPtr, __WEBPACK_IMPORTED_MODULE_0__b2d__["a" /* default */].b2Contact);
      var bodyA = contact.GetFixtureA().GetBody();
      var bodyB = contact.GetFixtureB().GetBody();
      if (bodyA == body) {
        return bodyB;
      } else if (bodyB == body) {
        return bodyA;
      } else {
        return false;
      }
    }
  }, {
    key: 'step',
    value: function step() {
      var delta = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var a = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;
      var b = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2;

      if (this.stepWorld) {
        this.world.Step(delta, a, b);
      }
    }
  }, {
    key: 'enableStep',
    value: function enableStep() {
      this.stepWorld = true;
    }
  }, {
    key: 'disableStep',
    value: function disableStep() {
      this.stepWorld = false;
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      __WEBPACK_IMPORTED_MODULE_0__b2d__["a" /* default */].destroy(this.world);
    }
  }]);

  return World;
}();

/* harmony default export */ __webpack_exports__["a"] = World;

var ContactListener = function ContactListener(body, className, callback) {
  _classCallCheck(this, ContactListener);

  if (typeof className === 'function') {
    callback = className;
    className = false;
  }

  this.body = body;
  this.className = className;
  this.callback = callback;
};

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rubeAsset__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rubeImageAsset__ = __webpack_require__(8);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var RubeAssetLoader = function () {
  function RubeAssetLoader() {
    _classCallCheck(this, RubeAssetLoader);
  }

  _createClass(RubeAssetLoader, [{
    key: 'load',
    value: function load(name, url, type, options) {
      switch (type) {
        case 'rube':
          return new __WEBPACK_IMPORTED_MODULE_0__rubeAsset__["a" /* default */](name, url, type, options);
          break;
        case 'rubeImage':
          return new __WEBPACK_IMPORTED_MODULE_1__rubeImageAsset__["a" /* default */](name, url, type, options);
          break;
        default:
          console.error('RubeAssetLoader: unknown asset type:: ', arguments);
          return null;
      }
    }
  }]);

  return RubeAssetLoader;
}();

/* harmony default export */ __webpack_exports__["a"] = new RubeAssetLoader();

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ludic__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ludic___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_ludic__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__RubeLoader__ = __webpack_require__(2);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var RubeAsset = function (_Asset) {
  _inherits(RubeAsset, _Asset);

  function RubeAsset(name, url, type, options) {
    _classCallCheck(this, RubeAsset);

    var _this = _possibleConstructorReturn(this, (RubeAsset.__proto__ || Object.getPrototypeOf(RubeAsset)).call(this, name, url, type, options));

    _this.world = _this.options.world;
    if (!_this.world) {
      console.warn('RubeAsset has no world.', _this);
    }

    _this._promises = [];
    _this._loadJSON();
    return _this;
  }

  _createClass(RubeAsset, [{
    key: '_loadRube',
    value: function _loadRube() {}
  }, {
    key: '_loadJSON',
    value: function _loadJSON() {
      var _this2 = this;

      this.promise = new Promise(function (resolve, reject) {
        _this2._resolve = resolve;
        _this2._reject = reject;
        _this2.xobj = new XMLHttpRequest();
        _this2.xobj.overrideMimeType("application/json");
        _this2.xobj.open('GET', _this2.url, true);
        _this2.xobj.onreadystatechange = _this2.onload(resolve, reject);
      });
    }
  }, {
    key: 'load',
    value: function load() {
      this.xobj.send(null);
    }
  }, {
    key: 'onload',
    value: function onload(resolve, reject) {
      var _this3 = this;

      return function () {
        if (_this3.xobj.readyState == 4 && _this3.xobj.status == "200") {
          var sceneJson = JSON.parse(_this3.xobj.responseText);
          _this3.data = __WEBPACK_IMPORTED_MODULE_1__RubeLoader__["a" /* default */].loadSceneIntoWorld(sceneJson, _this3.world);
          if (_this3.data._success) {
            resolve(_this3);
          } else {
            reject(_this3);
          }
        }
      };
    }
  }, {
    key: 'onAssetResolve',
    value: function onAssetResolve(am) {
      if (this.data._json.image) {
        this.loadImages(this.data._json.image, am);
      }
    }
  }, {
    key: 'loadImages',
    value: function loadImages(images, am) {
      var img;
      for (var i = 0; i < images.length; i++) {
        img = images[i];
        am.loadResource(img.name, img.file, 'rubeImage', { img: img, scene: this.data });
      }
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.world = null;
      this.promise = null;
      this._promises = null;
      this.xobj = null;
      this.data.destroy();
      this.data = null;
      this.options = null;
    }
  }]);

  return RubeAsset;
}(__WEBPACK_IMPORTED_MODULE_0_ludic__["Asset"]);

/* harmony default export */ __webpack_exports__["a"] = RubeAsset;

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ludic__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ludic___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_ludic__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



// TODO: get this from some config
var baseUrl = 'src';

var RubeImageAsset = function (_Asset) {
  _inherits(RubeImageAsset, _Asset);

  function RubeImageAsset(name, url, type, options) {
    _classCallCheck(this, RubeImageAsset);

    var _this = _possibleConstructorReturn(this, (RubeImageAsset.__proto__ || Object.getPrototypeOf(RubeImageAsset)).call(this, name, url, type || 'image', options));

    _this.img = options.img;
    _this.scene = options.scene;

    // do some string manipulation on url
    _this.url = _this.fixRubeUrl(_this.url);

    _this.data = new Image();
    _this.promise = new Promise(function (resolve, reject) {
      _this.data.onload = _this.onload(resolve, reject);
    });

    return _this;
  }

  _createClass(RubeImageAsset, [{
    key: 'load',
    value: function load() {
      // this.calculateSize();
      this.data.src = this.url;
    }
  }, {
    key: 'onload',
    value: function onload(resolve, reject) {
      var _this2 = this;

      return function () {
        resolve(_this2);
      };
    }
  }, {
    key: 'onAssetResolve',
    value: function onAssetResolve(am) {
      this.scene.bodies[this.img.body].imageInfo = this.img;
    }
  }, {
    key: 'fixRubeUrl',
    value: function fixRubeUrl(url) {
      var components = url.split('/');
      components.splice(0, 1, baseUrl);
      url = components.join('/');
      this.options.path = url;
      return url;
    }
  }, {
    key: 'calculateSize',
    value: function calculateSize() {
      // var verts = this.img.glVertexPointer;
      var verts = [];
      for (var i = 0; i < this.img.corners.x.length; i++) {
        var p = {
          x: this.img.corners.x[i],
          y: this.img.corners.y[i]
        };
        verts.push(p);
      }
      this.img.verts = verts;

      var a = verts[1].x - verts[0].x;
      var b = verts[1].y - verts[0].y;

      // console.log(a,b);
      // var width = Math.sqrt( Math.pow() );
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      _get(RubeImageAsset.prototype.__proto__ || Object.getPrototypeOf(RubeImageAsset.prototype), 'destroy', this).call(this);
      this.img = null;
      this.scene = null;
    }
  }]);

  return RubeImageAsset;
}(__WEBPACK_IMPORTED_MODULE_0_ludic__["Asset"]);

/* harmony default export */ __webpack_exports__["a"] = RubeImageAsset;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_9__;

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__box2d_b2d__ = __webpack_require__(0);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Box2D", function() { return __WEBPACK_IMPORTED_MODULE_0__box2d_b2d__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return __WEBPACK_IMPORTED_MODULE_0__box2d_b2d__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__box2d_debugDraw__ = __webpack_require__(4);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "DebugDraw", function() { return __WEBPACK_IMPORTED_MODULE_1__box2d_debugDraw__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__box2d_world__ = __webpack_require__(5);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "World", function() { return __WEBPACK_IMPORTED_MODULE_2__box2d_world__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rube_RubeLoader__ = __webpack_require__(2);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "RubeLoader", function() { return __WEBPACK_IMPORTED_MODULE_3__rube_RubeLoader__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__rube_RubeScene__ = __webpack_require__(3);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "RubeScene", function() { return __WEBPACK_IMPORTED_MODULE_4__rube_RubeScene__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__rube_rubeAssetLoader__ = __webpack_require__(6);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "RubeAssetLoader", function() { return __WEBPACK_IMPORTED_MODULE_5__rube_rubeAssetLoader__["a"]; });
// box2d
 // this is a shim

// debug draw


// world


// rube




/***/ })
/******/ ]);
});
//# sourceMappingURL=ludic-box2d.umd.js.map