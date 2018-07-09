(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("ludic"));
	else if(typeof define === 'function' && define.amd)
		define(["ludic"], factory);
	else if(typeof exports === 'object')
		exports["ludic-box2d"] = factory(require("ludic"));
	else
		root["ludic-box2d"] = factory(root["ludic"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_box2d_build_Box2D_v2_3_1_min_wasm_js__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_box2d_build_Box2D_v2_3_1_min_wasm_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_box2d_build_Box2D_v2_3_1_min_wasm_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_box2d_build_Box2D_v2_3_1_min_wasm_wasm__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_box2d_build_Box2D_v2_3_1_min_wasm_wasm___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_box2d_build_Box2D_v2_3_1_min_wasm_wasm__);


var b2d = __WEBPACK_IMPORTED_MODULE_0_box2d_build_Box2D_v2_3_1_min_wasm_js___default()({ wasmBinary: __WEBPACK_IMPORTED_MODULE_1_box2d_build_Box2D_v2_3_1_min_wasm_wasm___default.a }).then(function (b2) {
  // setup some helper stuff

  // augment b2Vec2 with x,y getters/setters
  Object.defineProperties(b2.b2Vec2.prototype, {
    x: {
      get: function get() {
        return this.get_x();
      },
      set: function set(val) {
        this.set_x(val);
      }
    },
    y: {
      get: function get() {
        return this.get_y();
      },
      set: function set(val) {
        this.set_y(val);
      }
    }
  });

  // augment b2Body with propery user data values
  Object.defineProperties(b2.b2Body.prototype, {
    SetUserData: {
      value: function value(val) {
        this.__userData = val;
      }
    },
    GetUserData: {
      value: function value() {
        return this.__userData;
      }
    }
  });

  return b2;
});
/* harmony default export */ __webpack_exports__["a"] = b2d;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__box2d_box2d__ = __webpack_require__(0);
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

      var bd = new __WEBPACK_IMPORTED_MODULE_0__box2d_box2d__["a" /* default */].b2BodyDef();
      if (bodyJso.type == 2) bd.set_type(__WEBPACK_IMPORTED_MODULE_0__box2d_box2d__["a" /* default */].b2_dynamicBody);else if (bodyJso.type == 1) bd.set_type(__WEBPACK_IMPORTED_MODULE_0__box2d_box2d__["a" /* default */].b2_kinematicBody);else bd.set_type(__WEBPACK_IMPORTED_MODULE_0__box2d_box2d__["a" /* default */].b2_staticBody);

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

      if (bodyJso.hasOwnProperty('linearVelocity') && bodyJso.linearVelocity instanceof Object) bd.set_linearVelocity(this.parseVec(bodyJso.linearVelocity));else bd.set_linearVelocity(new __WEBPACK_IMPORTED_MODULE_0__box2d_box2d__["a" /* default */].b2Vec2(0, 0));

      if (bodyJso.hasOwnProperty('position') && bodyJso.position instanceof Object) bd.set_position(this.parseVec(bodyJso.position));else bd.set_position(new __WEBPACK_IMPORTED_MODULE_0__box2d_box2d__["a" /* default */].b2Vec2(0, 0));

      if (bodyJso.hasOwnProperty('gravityScale') && !isNaN(parseFloat(bodyJso.gravityScale)) && isFinite(bodyJso.gravityScale)) {
        bd.set_gravityScale(bodyJso.gravityScale);
      } else {
        bd.set_gravityScale(1);
      }

      var body = world.CreateBody(bd);
      body.fixtures = [];

      var md = new __WEBPACK_IMPORTED_MODULE_0__box2d_box2d__["a" /* default */].b2MassData();
      md.set_mass(bodyJso['massData-mass'] || 0);
      if (bodyJso.hasOwnProperty('massData-center') && bodyJso['massData-center'] instanceof Object) md.set_center(this.parseVec(bodyJso['massData-center']));else md.set_center(new __WEBPACK_IMPORTED_MODULE_0__box2d_box2d__["a" /* default */].b2Vec2(0, 0));

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
      var fd = new __WEBPACK_IMPORTED_MODULE_0__box2d_box2d__["a" /* default */].b2FixtureDef();
      fd.set_density(fixtureJso.density || 0);
      fd.set_friction(fixtureJso.friction || 0);
      fd.set_restitution(fixtureJso.restitution || 0);
      fd.set_isSensor(fixtureJso.sensor || 0);

      var filter = new __WEBPACK_IMPORTED_MODULE_0__box2d_box2d__["a" /* default */].b2Filter();

      filter.set_categoryBits(fixtureJso['filter-categoryBits'] || 1);
      filter.set_maskBits(fixtureJso['filter-maskBits'] || 65535);
      filter.set_groupIndex(fixtureJso['filter-groupIndex'] || 0);

      fd.set_filter(filter);

      if (fixtureJso.hasOwnProperty('circle')) {

        var shape = new __WEBPACK_IMPORTED_MODULE_0__box2d_box2d__["a" /* default */].b2CircleShape();
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
          verts.push(new __WEBPACK_IMPORTED_MODULE_0__box2d_box2d__["a" /* default */].b2Vec2(fixtureJso.polygon.vertices.x[v], fixtureJso.polygon.vertices.y[v]));
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
          verts.push(new __WEBPACK_IMPORTED_MODULE_0__box2d_box2d__["a" /* default */].b2Vec2(fixtureJso.chain.vertices.x[v], fixtureJso.chain.vertices.y[v]));
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
      if (obj && obj instanceof Object) return new __WEBPACK_IMPORTED_MODULE_0__box2d_box2d__["a" /* default */].b2Vec2(obj.x || 0, obj.y || 0);else return new __WEBPACK_IMPORTED_MODULE_0__box2d_box2d__["a" /* default */].b2Vec2(0, 0);
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
        var jd = new __WEBPACK_IMPORTED_MODULE_0__box2d_box2d__["a" /* default */].b2RevoluteJointDef();
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
        var jd = new __WEBPACK_IMPORTED_MODULE_0__box2d_box2d__["a" /* default */].b2DistanceJointDef();
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
        var jd = new __WEBPACK_IMPORTED_MODULE_0__box2d_box2d__["a" /* default */].b2RopeJointDef();

        jd.set_bodyA(loadedBodies[jointJso.bodyA]);
        jd.set_bodyB(loadedBodies[jointJso.bodyB]);
        jd.set_collideConnected(jointJso.collideConnected || false);
        jd.set_localAnchorA(this.parseVec(jointJso.anchorA));
        jd.set_localAnchorB(this.parseVec(jointJso.anchorB));
        jd.set_maxLength(jointJso.maxLength || 0);
        joint = world.CreateJoint(jd);
      } else if (jointJso.type == "motor") {
        if (__WEBPACK_IMPORTED_MODULE_0__box2d_box2d__["a" /* default */].b2MotorJointDef) {
          var jd = new __WEBPACK_IMPORTED_MODULE_0__box2d_box2d__["a" /* default */].b2MotorJointDef();

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
        var jd = new __WEBPACK_IMPORTED_MODULE_0__box2d_box2d__["a" /* default */].b2PrismaticJointDef();
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

        var jd = new __WEBPACK_IMPORTED_MODULE_0__box2d_box2d__["a" /* default */].b2WheelJointDef();
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
        var jd = new __WEBPACK_IMPORTED_MODULE_0__box2d_box2d__["a" /* default */].b2FrictionJointDef();

        jd.set_bodyA(loadedBodies[jointJso.bodyA]);
        jd.set_bodyB(loadedBodies[jointJso.bodyB]);
        jd.set_collideConnected(jointJso.collideConnected || false);
        jd.set_localAnchorA(this.parseVec(jointJso.anchorA));
        jd.set_localAnchorB(this.parseVec(jointJso.anchorB));
        jd.set_maxForce(jointJso.maxForce || 0);
        jd.set_maxTorque(jointJso.maxTorque || 0);
        joint = world.CreateJoint(jd);
      } else if (jointJso.type == "weld") {
        var jd = new __WEBPACK_IMPORTED_MODULE_0__box2d_box2d__["a" /* default */].b2WeldJointDef();

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
      var gravity = new __WEBPACK_IMPORTED_MODULE_0__box2d_box2d__["a" /* default */].b2Vec2(0, 0);
      if (worldJso.hasOwnProperty('gravity') && worldJso.gravity instanceof Object) gravity.SetV(worldJso.gravity);
      var world = new __WEBPACK_IMPORTED_MODULE_0__box2d_box2d__["a" /* default */].b2World(gravity);
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
      var shape = new __WEBPACK_IMPORTED_MODULE_0__box2d_box2d__["a" /* default */].b2ChainShape();
      var buffer = __WEBPACK_IMPORTED_MODULE_0__box2d_box2d__["a" /* default */].allocate(vertices.length * 8, 'float', __WEBPACK_IMPORTED_MODULE_0__box2d_box2d__["a" /* default */].ALLOC_STACK);
      var offset = 0;
      for (var i = 0; i < vertices.length; i++) {
        __WEBPACK_IMPORTED_MODULE_0__box2d_box2d__["a" /* default */].setValue(buffer + offset, vertices[i].get_x(), 'float'); // x
        __WEBPACK_IMPORTED_MODULE_0__box2d_box2d__["a" /* default */].setValue(buffer + (offset + 4), vertices[i].get_y(), 'float'); // y
        offset += 8;
      }
      var ptr_wrapped = __WEBPACK_IMPORTED_MODULE_0__box2d_box2d__["a" /* default */].wrapPointer(buffer, __WEBPACK_IMPORTED_MODULE_0__box2d_box2d__["a" /* default */].b2Vec2);
      if (closedLoop) shape.CreateLoop(ptr_wrapped, vertices.length);else shape.CreateChain(ptr_wrapped, vertices.length);
      return shape;
    }
  }, {
    key: 'createPolygonShape',
    value: function createPolygonShape(vertices) {
      var shape = new __WEBPACK_IMPORTED_MODULE_0__box2d_box2d__["a" /* default */].b2PolygonShape();
      var buffer = __WEBPACK_IMPORTED_MODULE_0__box2d_box2d__["a" /* default */].allocate(vertices.length * 8, 'float', __WEBPACK_IMPORTED_MODULE_0__box2d_box2d__["a" /* default */].ALLOC_STACK);
      var offset = 0;
      for (var i = 0; i < vertices.length; i++) {
        __WEBPACK_IMPORTED_MODULE_0__box2d_box2d__["a" /* default */].setValue(buffer + offset, vertices[i].get_x(), 'float'); // x
        __WEBPACK_IMPORTED_MODULE_0__box2d_box2d__["a" /* default */].setValue(buffer + (offset + 4), vertices[i].get_y(), 'float'); // y
        offset += 8;
      }
      var ptr_wrapped = __WEBPACK_IMPORTED_MODULE_0__box2d_box2d__["a" /* default */].wrapPointer(buffer, __WEBPACK_IMPORTED_MODULE_0__box2d_box2d__["a" /* default */].b2Vec2);
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
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__box2d__ = __webpack_require__(0);
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
            var col = __WEBPACK_IMPORTED_MODULE_0__box2d__["a" /* default */].wrapPointer(color, __WEBPACK_IMPORTED_MODULE_0__box2d__["a" /* default */].b2Color);
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
            var vert1V = __WEBPACK_IMPORTED_MODULE_0__box2d__["a" /* default */].wrapPointer(vert1, __WEBPACK_IMPORTED_MODULE_0__box2d__["a" /* default */].b2Vec2);
            var vert2V = __WEBPACK_IMPORTED_MODULE_0__box2d__["a" /* default */].wrapPointer(vert2, __WEBPACK_IMPORTED_MODULE_0__box2d__["a" /* default */].b2Vec2);
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
                var vert = __WEBPACK_IMPORTED_MODULE_0__box2d__["a" /* default */].wrapPointer(vertices + tmpI * 8, __WEBPACK_IMPORTED_MODULE_0__box2d__["a" /* default */].b2Vec2);
                if (tmpI == 0) this.context.moveTo(vert.get_x(), vert.get_y());else this.context.lineTo(vert.get_x(), vert.get_y());
            }
            this.context.closePath();
            if (fill) this.context.fill();
            this.context.stroke();
        }
    }, {
        key: 'drawCircle',
        value: function drawCircle(center, radius, axis, fill) {
            var centerV = __WEBPACK_IMPORTED_MODULE_0__box2d__["a" /* default */].wrapPointer(center, __WEBPACK_IMPORTED_MODULE_0__box2d__["a" /* default */].b2Vec2);
            var axisV = __WEBPACK_IMPORTED_MODULE_0__box2d__["a" /* default */].wrapPointer(axis, __WEBPACK_IMPORTED_MODULE_0__box2d__["a" /* default */].b2Vec2);

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
            var trans = __WEBPACK_IMPORTED_MODULE_0__box2d__["a" /* default */].wrapPointer(transform, __WEBPACK_IMPORTED_MODULE_0__box2d__["a" /* default */].b2Transform);
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
            var debugDraw = new __WEBPACK_IMPORTED_MODULE_0__box2d__["a" /* default */].JSDraw();
            var self = this;
            debugDraw.DrawSegment = function (vert1, vert2, color) {
                self.setColorFromDebugDrawCallback(color);
                self.saveContext('draw segment');
                console.log('draw seg');
                self.drawSegment(vert1, vert2);
            };

            debugDraw.DrawPolygon = function (vertices, vertexCount, color) {
                // console.log('draw poly');
                self.setColorFromDebugDrawCallback(color);
                self.saveContext('draw polygon');
                self.drawPolygon(vertices, vertexCount, false);
            };

            debugDraw.DrawSolidPolygon = function (vertices, vertexCount, color) {
                // console.log('draw solid poly');
                self.setColorFromDebugDrawCallback(color);
                self.saveContext('draw solid polygon');
                self.drawPolygon(vertices, vertexCount, true);
            };

            debugDraw.DrawCircle = function (center, radius, color) {
                self.setColorFromDebugDrawCallback(color);
                self.saveContext('draw circle');
                var dummyAxis = __WEBPACK_IMPORTED_MODULE_0__box2d__["a" /* default */].b2Vec2(0, 0);
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
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__box2d__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ludic__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ludic___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ludic__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var World = function () {
  function World(b2Vec2, y) {
    _classCallCheck(this, World);

    if (!(b2Vec2 instanceof __WEBPACK_IMPORTED_MODULE_0__box2d__["a" /* default */].b2Vec2) && typeof b2Vec2 === 'number' && arguments.length === 2) {
      // read arg[0] as x coord
      b2Vec2 = new __WEBPACK_IMPORTED_MODULE_0__box2d__["a" /* default */].b2Vec2(b2Vec2, y);
    } else if (arguments.length === 0) {
      b2Vec2 = new __WEBPACK_IMPORTED_MODULE_0__box2d__["a" /* default */].b2Vec2(0, 0);
    } else {
      throw "Improper arguments for World";
    }

    this.world = new __WEBPACK_IMPORTED_MODULE_0__box2d__["a" /* default */].b2World(b2Vec2);
    __WEBPACK_IMPORTED_MODULE_1_ludic__["utils"].using(this, this.world);
    this.enableStep();

    // contact stuff
    this._contactListeners = [];
    this._contactListener = new __WEBPACK_IMPORTED_MODULE_0__box2d__["a" /* default */].JSContactListener();

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
      var contact = __WEBPACK_IMPORTED_MODULE_0__box2d__["a" /* default */].wrapPointer(contactPtr, __WEBPACK_IMPORTED_MODULE_0__box2d__["a" /* default */].b2Contact);
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
      __WEBPACK_IMPORTED_MODULE_0__box2d__["a" /* default */].destroy(this.world);
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
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rubeAsset__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rubeImageAsset__ = __webpack_require__(11);
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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(9)("AGFzbQEAAAABn4SAgABNYAF/AGACf38AYAN/f30AYAJ/fQF9YAF/AX9gA39/fwF/YAV/f39/fwF/YAR/f39/AGACf38Bf2AFf39/f30BfWADf39/AGAEf399fwBgBX9/fX9/AGABfAF/YAAAYAZ/f39/f38AYAV/f39/fwBgAAF/YAR/f39/AX9gBn9/f3x/fwBgA39/fAF8YAV/f398fwBgBH9/f3wAYAd/f39/f39/AGAGf39/f39/AX9gBn9/f39/fAF8YAZ/f398f38Bf2AFf39/fH8Bf2ACf30Bf2ABfwF9YAJ/fQBgAX0Bf2ACfX0Bf2ADf319AGADfX19AX9gBH99fX0AYAR/fX9/AGAEfX19fQF/YAh/f39/f39/fQBgBX99fX99AGADf399AX9gA399fwBgBX9/f39/AX1gBH9/f30BfWADfn9/AX9gAn5/AX9gAn5+AX5gBn98f39/fwF/YAF8AX5gAnx/AXxgAn1/AX9gA3x/fwF/YAF8AX1gAX0BfWAGf39/fX9/AGADf399AX1gBX9/f31/AGAEf39/fQBgBn9/f39/fQF9YAF/AXxgAn98AGAFf398f38AYAR/f3x/AGACf3wBfGADf3x8AGADf3x/AGACf3wBf2AEf3x8fABgA39/fABgBH98f38AYAJ8fAF/YAN8fHwBf2ADf398AX9gBX9/f398AXxgBX98fH98AGAEfHx8fAF/YAh/f39/f39/fAAC7oeAgAAvA2Vudg5EWU5BTUlDVE9QX1BUUgN/AANlbnYIU1RBQ0tUT1ADfwADZW52CVNUQUNLX01BWAN/AANlbnYFYWJvcnQAAANlbnYNZW5sYXJnZU1lbW9yeQARA2Vudg5nZXRUb3RhbE1lbW9yeQARA2VudhdhYm9ydE9uQ2Fubm90R3Jvd01lbW9yeQARA2Vudgtqc0NhbGxfaWlpaQASA2Vudg1qc0NhbGxfdmlpZmlpABMDZW52DWpzQ2FsbF92aWlpaWkADwNlbnYJanNDYWxsX3ZpAAEDZW52CmpzQ2FsbF92aWkACgNlbnYJanNDYWxsX2lpAAgDZW52CmpzQ2FsbF9maWYAFANlbnYLanNDYWxsX3ZpaWkABwNlbnYManNDYWxsX3ZpaWZpABUDZW52CGpzQ2FsbF92AAADZW52C2pzQ2FsbF92aWlmABYDZW52DmpzQ2FsbF92aWlpaWlpABcDZW52CmpzQ2FsbF9paWkABQNlbnYNanNDYWxsX2lpaWlpaQAYA2Vudg1qc0NhbGxfZmlpaWlmABkDZW52DGpzQ2FsbF92aWlpaQAQA2VudhtfZW1zY3JpcHRlbl9hc21fY29uc3RfaWlpaWkABgNlbnYcX2Vtc2NyaXB0ZW5fYXNtX2NvbnN0X2RpaWlpZAAZA2VudhNfcHRocmVhZF9rZXlfY3JlYXRlAAgDZW52Bl9hYm9ydAAOA2VudhxfZW1zY3JpcHRlbl9hc21fY29uc3RfaWlpZGlpABoDZW52Dl9fX2Fzc2VydF9mYWlsAAcDZW52C19fX3NldEVyck5vAAADZW52Fl9lbXNjcmlwdGVuX21lbWNweV9iaWcABQNlbnYUX3B0aHJlYWRfZ2V0c3BlY2lmaWMABANlbnYNX3B0aHJlYWRfb25jZQAIA2VudgxfX19zeXNjYWxsNTQACANlbnYZX2Vtc2NyaXB0ZW5fYXNtX2NvbnN0X2lpaQAFA2VudhtfZW1zY3JpcHRlbl9hc21fY29uc3RfaWlpZGkAGwNlbnYUX3B0aHJlYWRfc2V0c3BlY2lmaWMACANlbnYaX2Vtc2NyaXB0ZW5fYXNtX2NvbnN0X2lpaWkAEgNlbnYLX19fc3lzY2FsbDYACANlbnYNX19fc3lzY2FsbDE0MAAIA2VudhNfX19jeGFfcHVyZV92aXJ0dWFsAA4DZW52DV9fX3N5c2NhbGwxNDYACAhhc20yd2FzbQpmNjQtdG8taW50AA0DZW52Bm1lbW9yeQIBgAKAAgNlbnYFdGFibGUBcACACQNlbnYKbWVtb3J5QmFzZQN/AANlbnYJdGFibGVCYXNlA38AA96JgIAA3AkEEQABAQARAAEEAQEEBAQEHAMEBAEEBAARBAEEAQEEAQAEBQYHAh0eEQEBBAEEBB4dHh0eHQQEHAARBQAICAEBBAEEAQQBBAEEAQQABAEIEgEeHR0eHR4IAREEAQQBBAERCAEEHh0eHQQEHBEfHgAdBAQeHR4BBB4dHh0eHR4dBAQcHR4dHh0eEQQBBAEdHgQBBAEBBAEEAQQBHR4RCQQBBAEEAQQBIAAhAQEeHR0dBAQRIgAjAQEeEQQEBB0BCggFAQQBEQQBBAERBwQBBAEdHh0eEQQBBAEEAQQBERAEAR0eBAEdHh0eBAEdHgQBAQEBCAEIASQAAAoHBAQEAQQBBAEEAQQEBAQEBAQdAQQEAQQEAAAEHR0EAR0dIQQBHh0eHQMEBBwBEQEBCgoRCCUKAAAECBEQBAEdHhEBEQcEBB4dBAQcBAQcESYEAREBAAIRAAoKAQEKIiMEBAQcEQohJwQIAREKBAERBREEAREHBwsMAQQdHQQBHh4DBAQcBAQdHR0EBBwRBAQBBB4dAB4dAB4dERAIKAECAQQeBwopBykdHQEBAAgICAgICB4BAQQBBAEEAQQBBAQEBAQEAB4eBAQcEQQBBAEdBAEhBAEeHR4DBAQcEREKEREREREREREREREREQABAQAICQEBCgoFBwcLDAcBAQECAwABAQEIAQAACAQFBgcCBggEBwIICAoIBQYHAggFBgcCBQoHEAcQBwcHBwcqAQECAwABAQgBAQIDAAEBAQECAwABAQgBAQIDAAEBAQIDAAEBCAIAAQEBCAABAQgCAAEBCAIAAQEIAQECAAEBCAAEAQgBCisrAQAHAQgKAQEBAQIBAAEBAAgKBgEGBgYGBgYGBQEAAAAAEAEBAAgBAQgkCgcHAAAmEQQFBAUFCAoGCgQKLC0uLggILQQQCAgvMDExCAgICAUICAoEETEyMzQ0DgEEADU1NQQADhEBBQ8QBwgKCgcIDxAHDgAPEAcHDxAEEQUEDgUFBAQSBQUFBQUFBQUFBQUFBQUFBQUFBQU2DAwMDAwMDAwMDAwMDAwMDAwMDAwPEBAQEBAQEBAQEBAQEBAQEBAQEBABAAAAAAAAAAAAAAAAAAAAAAAAAAAKAQEBAQEBAQEBAQEBAQEBAQEBAQEIBAQEBAQEBAQEBAQEBAQEBAQEBAQ3AwMDAwMDAwMDAwMDAwMDAwMDAwMHCgoKCgoKCgoKCgoKCgoKCgoKCgo4CwsLCwsLCwsLCwsLCwsLCwsLCwsADg4ODg4ODg4ODg4ODg4ODg4ODg45AgICAgICAgICAgICAgICAgICAgIXDw8PDw8PDw8PDw8PDw8PDw8PDw8FCAgICAgICAgICAgICAgICAgICAgYBgYGBgYGBgYGBgYGBgYGBgYGBgY6CQkJCQkJCQkJCQkJCQkJCQkJCQkQBwcHBwcHBwcHBwcHBwcHBwcHBwcFDBAAAQQDCgsOAg8IBgkHOzs8Oz08Pj88O0A8PDs7Ozw8PDs7Ozs7QTw7PDs8Ozs8PEI7Ozs8Ozw7Ozs7OztDOzw7Ozw8PEE8REI8Oz87PDw8Qjw8O0U7PEY8Ozs7RztEPEg8STxESjxCOzw7Ozw8DTs8PDtCOzxAPDs7PEI7SztAQj9CQkc/PEI7QkA8O0M8Qkw7OzwTFBUWGQafgICAAAZ/ASMAC38BIwELfwEjAgt/AUEAC38BQQALfwFBAAsHgpuDgADtCDVfZW1zY3JpcHRlbl9iaW5kX2IyV2hlZWxKb2ludF9HZXRTcHJpbmdEYW1waW5nUmF0aW9fMAD5CDZfZW1zY3JpcHRlbl9iaW5kX2IyV2VsZEpvaW50RGVmX2dldF9jb2xsaWRlQ29ubmVjdGVkXzAARitfZW1zY3JpcHRlbl9iaW5kX2IyQ2hhaW5TaGFwZV9nZXRfbV9jb3VudF8wAFMoX2Vtc2NyaXB0ZW5fYmluZF9iMlByb2ZpbGVfZ2V0X2NvbGxpZGVfMAD6CCZfZW1zY3JpcHRlbl9iaW5kX2IyU2hhcGVfQ29tcHV0ZUFBQkJfMwBMMl9lbXNjcmlwdGVuX2JpbmRfYjJGcmljdGlvbkpvaW50RGVmX3NldF91c2VyRGF0YV8xADAjX2Vtc2NyaXB0ZW5fYmluZF9iMkpvaW50X0dldEJvZHlBXzAANCNfZW1zY3JpcHRlbl9iaW5kX2IyV29ybGRfSXNMb2NrZWRfMAC2AiJfZW1zY3JpcHRlbl9iaW5kX2IyRHJhd19HZXRGbGFnc18wADErX2Vtc2NyaXB0ZW5fYmluZF9iMkZyaWN0aW9uSm9pbnRfSXNBY3RpdmVfMAA9IF9lbXNjcmlwdGVuX2JpbmRfYjJDb2xvcl9zZXRfZ18xAPsIMl9lbXNjcmlwdGVuX2JpbmRfYjJXaGVlbEpvaW50RGVmX2dldF9mcmVxdWVuY3lIel8wAPwIMl9lbXNjcmlwdGVuX2JpbmRfYjJSb3BlSm9pbnREZWZfc2V0X2xvY2FsQW5jaG9yQV8xAPQBKV9lbXNjcmlwdGVuX2JpbmRfYjJQb2x5Z29uU2hhcGVfUmF5Q2FzdF80AEspX2Vtc2NyaXB0ZW5fYmluZF9iMldvcmxkX0dldFRyZWVCYWxhbmNlXzAAsgIuX2Vtc2NyaXB0ZW5fYmluZF9iMkNoYWluU2hhcGVfZ2V0X21fdmVydGljZXNfMAA6KV9lbXNjcmlwdGVuX2JpbmRfSlNEcmF3X0RyYXdTb2xpZENpcmNsZV80AP0IMl9lbXNjcmlwdGVuX2JpbmRfYjJSZXZvbHV0ZUpvaW50X0dldExvY2FsQW5jaG9yQV8wAJ4BKl9lbXNjcmlwdGVuX2JpbmRfYjJGaXh0dXJlRGVmX2dldF9maWx0ZXJfMADvAS5fZW1zY3JpcHRlbl9iaW5kX2IyRnJpY3Rpb25Kb2ludERlZl9nZXRfdHlwZV8wAEEqX2Vtc2NyaXB0ZW5fYmluZF9iMldlbGRKb2ludF9fX2Rlc3Ryb3lfX18wAGAoX2Vtc2NyaXB0ZW5fYmluZF9iMlJheUNhc3RJbnB1dF9nZXRfcDFfMABoL19lbXNjcmlwdGVuX2JpbmRfYjJFZGdlU2hhcGVfc2V0X21faGFzVmVydGV4M18xAI8DKF9lbXNjcmlwdGVuX2JpbmRfYjJKb2ludEVkZ2Vfc2V0X2pvaW50XzEAMDFfZW1zY3JpcHRlbl9iaW5kX2IyV2hlZWxKb2ludERlZl9zZXRfbW90b3JTcGVlZF8xAP4IKF9lbXNjcmlwdGVuX2JpbmRfYjJGaXh0dXJlX19fZGVzdHJveV9fXzAASCxfZW1zY3JpcHRlbl9iaW5kX2IyUHVsbGV5Sm9pbnRfU2V0VXNlckRhdGFfMQA8Kl9lbXNjcmlwdGVuX2JpbmRfYjJXb3JsZF9TZXRXYXJtU3RhcnRpbmdfMQCnAiRfZW1zY3JpcHRlbl9iaW5kX0pTRHJhd19EcmF3Q2lyY2xlXzMA/wgnX2Vtc2NyaXB0ZW5fYmluZF9iMldlbGRKb2ludF9Jc0FjdGl2ZV8wAD0vX2Vtc2NyaXB0ZW5fYmluZF9iMkVkZ2VTaGFwZV9nZXRfbV9oYXNWZXJ0ZXgwXzAA3gIlX2Vtc2NyaXB0ZW5fYmluZF9iMkJvZHlEZWZfc2V0X3R5cGVfMQBCK19lbXNjcmlwdGVuX2JpbmRfYjJDaGFpblNoYXBlX0NvbXB1dGVBQUJCXzMATCZfZW1zY3JpcHRlbl9lbnVtX2IyU2hhcGVUeXBlX2VfcG9seWdvbgCCBCdfZW1zY3JpcHRlbl9iaW5kX2IySm9pbnRFZGdlX2dldF9wcmV2XzAAQzBfZW1zY3JpcHRlbl9iaW5kX2IyV2VsZEpvaW50X0dldFJlYWN0aW9uVG9ycXVlXzEAgAk3X2Vtc2NyaXB0ZW5fYmluZF9iMlByaXNtYXRpY0pvaW50RGVmX3NldF9sb2NhbEFuY2hvckFfMQD0ASlfZW1zY3JpcHRlbl9iaW5kX2IyQm9keURlZl9nZXRfcG9zaXRpb25fMACxATJfZW1zY3JpcHRlbl9iaW5kX2IyUm9wZUpvaW50RGVmX2dldF9sb2NhbEFuY2hvckJfMAD1ATJfZW1zY3JpcHRlbl9iaW5kX2IyUmV2b2x1dGVKb2ludERlZl9zZXRfdXNlckRhdGFfMQAwK19lbXNjcmlwdGVuX2JpbmRfYjJXb3JsZF9TZXRDb250YWN0RmlsdGVyXzEAlgInX2Vtc2NyaXB0ZW5fYmluZF9iMldvcmxkX0dldEpvaW50TGlzdF8wAKMCN19lbXNjcmlwdGVuX2JpbmRfYjJXaGVlbEpvaW50RGVmX2dldF9jb2xsaWRlQ29ubmVjdGVkXzAARjdfZW1zY3JpcHRlbl9iaW5kX2IyUHJpc21hdGljSm9pbnREZWZfZ2V0X2xvY2FsQW5jaG9yQV8wAPMBL19lbXNjcmlwdGVuX2JpbmRfYjJGaXh0dXJlRGVmX3NldF9yZXN0aXR1dGlvbl8xAIEJLF9lbXNjcmlwdGVuX2JpbmRfYjJFZGdlU2hhcGVfR2V0Q2hpbGRDb3VudF8wAEkhX2Vtc2NyaXB0ZW5fYmluZF9iMk1hdDMzX2dldF9leV8wAGotX2Vtc2NyaXB0ZW5fYmluZF9iMk1vdG9ySm9pbnREZWZfSW5pdGlhbGl6ZV8yAP8DJV9lbXNjcmlwdGVuX2JpbmRfYjJXb3JsZF9HZXRHcmF2aXR5XzAAtQIqX2Vtc2NyaXB0ZW5fYmluZF9iMkZyaWN0aW9uSm9pbnRfR2V0TmV4dF8wADorX2Vtc2NyaXB0ZW5fYmluZF9iMlByb2ZpbGVfZ2V0X2Jyb2FkcGhhc2VfMACCCS1fZW1zY3JpcHRlbl9iaW5kX2IyUHVsbGV5Sm9pbnREZWZfZ2V0X2JvZHlBXzAAQy1fZW1zY3JpcHRlbl9iaW5kX2IyUHJpc21hdGljSm9pbnRfU2V0TGltaXRzXzIAgwk0X2Vtc2NyaXB0ZW5fYmluZF9iMlB1bGxleUpvaW50RGVmX2dldF9sb2NhbEFuY2hvckFfMACGAi1fZW1zY3JpcHRlbl9iaW5kX2IyRGlzdGFuY2VKb2ludF9HZXRBbmNob3JBXzAAXTJfZW1zY3JpcHRlbl9iaW5kX2IyRGlzdGFuY2VKb2ludERlZl9zZXRfdXNlckRhdGFfMQAwNl9lbXNjcmlwdGVuX2JpbmRfYjJEaXN0YW5jZUpvaW50RGVmX3NldF9kYW1waW5nUmF0aW9fMQCECTZfZW1zY3JpcHRlbl9iaW5kX2IyUm9wZUpvaW50RGVmX3NldF9jb2xsaWRlQ29ubmVjdGVkXzEARzBfZW1zY3JpcHRlbl9iaW5kX2IyQ2hhaW5TaGFwZV9zZXRfbV9uZXh0VmVydGV4XzEA9gEvX2Vtc2NyaXB0ZW5fYmluZF9KU0NvbnRhY3RMaXN0ZW5lcl9FbmRDb250YWN0XzEA0QImX2Vtc2NyaXB0ZW5fYmluZF9iMk1hc3NEYXRhX3NldF9tYXNzXzEAhQkfX2Vtc2NyaXB0ZW5fYmluZF9iMlZlYzNfZ2V0X3hfMACGCStfZW1zY3JpcHRlbl9iaW5kX2IyQ2hhaW5TaGFwZV9DcmVhdGVDaGFpbl8yAPsCKl9lbXNjcmlwdGVuX2JpbmRfYjJSb3BlSm9pbnRfR2V0VXNlckRhdGFfMAA7Jl9lbXNjcmlwdGVuX2JpbmRfYjJXb3JsZF9EZXN0cm95Qm9keV8xAJoCLl9lbXNjcmlwdGVuX2JpbmRfYjJQcm9maWxlX2dldF9zb2x2ZVBvc2l0aW9uXzAAhwkiX2Vtc2NyaXB0ZW5fYmluZF9iMlNoYXBlX1JheUNhc3RfNABLMV9lbXNjcmlwdGVuX2JpbmRfYjJQdWxsZXlKb2ludF9HZXRHcm91bmRBbmNob3JBXzAApgMmX2Vtc2NyaXB0ZW5fYmluZF9iMk1hdDMzX19fZGVzdHJveV9fXzAASDBfZW1zY3JpcHRlbl9iaW5kX2IyR2VhckpvaW50X0dldFJlYWN0aW9uVG9ycXVlXzEAgAk2X2Vtc2NyaXB0ZW5fYmluZF9iMldlbGRKb2ludERlZl9zZXRfY29sbGlkZUNvbm5lY3RlZF8xAEcyX2Vtc2NyaXB0ZW5fYmluZF9iMkpvaW50RGVmX2dldF9jb2xsaWRlQ29ubmVjdGVkXzAARi5fZW1zY3JpcHRlbl9iaW5kX2IyUmV2b2x1dGVKb2ludF9fX2Rlc3Ryb3lfX18wAGA0X2Vtc2NyaXB0ZW5fYmluZF9iMlB1bGxleUpvaW50RGVmX2IyUHVsbGV5Sm9pbnREZWZfMADwAi1fZW1zY3JpcHRlbl9iaW5kX2IyV29ybGRfU2V0QXV0b0NsZWFyRm9yY2VzXzEAtwI7X2Vtc2NyaXB0ZW5fYmluZF9iMlByaXNtYXRpY0pvaW50RGVmX3NldF9sb3dlclRyYW5zbGF0aW9uXzEA/ggpX2Vtc2NyaXB0ZW5fYmluZF9iMkJvZHlEZWZfc2V0X3Bvc2l0aW9uXzEAsgEkX2Vtc2NyaXB0ZW5fYmluZF9iMlRyYW5zZm9ybV9nZXRfcV8wAOoBLV9lbXNjcmlwdGVuX2JpbmRfYjJQb2x5Z29uU2hhcGVfc2V0X21fY291bnRfMQCLAyRfZW1zY3JpcHRlbl9iaW5kX2IyQ29udGFjdF9HZXROZXh0XzAAOi9fZW1zY3JpcHRlbl9iaW5kX2IyTW90b3JKb2ludERlZl9zZXRfdXNlckRhdGFfMQAwKF9lbXNjcmlwdGVuX2JpbmRfYjJHZWFySm9pbnRfR2V0Sm9pbnQxXzAA5gIxX2Vtc2NyaXB0ZW5fYmluZF9iMldoZWVsSm9pbnRfR2V0TWF4TW90b3JUb3JxdWVfMACICSxfZW1zY3JpcHRlbl9iaW5kX2IyTW90b3JKb2ludF9TZXRNYXhUb3JxdWVfMQCJCSlfZW1zY3JpcHRlbl9iaW5kX2IyR2VhckpvaW50X0dldEFuY2hvckFfMADqAilfZW1zY3JpcHRlbl9lbnVtX2IySm9pbnRUeXBlX2VfbW91c2VKb2ludACFBCxfZW1zY3JpcHRlbl9iaW5kX2IyTW91c2VKb2ludERlZl9zZXRfYm9keUFfMQBENV9lbXNjcmlwdGVuX2JpbmRfYjJXaGVlbEpvaW50RGVmX3NldF9tYXhNb3RvclRvcnF1ZV8xAIoJLF9lbXNjcmlwdGVuX2VudW1fYjJKb2ludFR5cGVfZV9yZXZvbHV0ZUpvaW50AIEELV9lbXNjcmlwdGVuX2JpbmRfYjJXb3JsZF9TZXRDb250YWN0TGlzdGVuZXJfMQCXAiFfZW1zY3JpcHRlbl9iaW5kX2IyQm9keV9Jc0F3YWtlXzAA2wMoX2Vtc2NyaXB0ZW5fYmluZF9iMkpvaW50RWRnZV9zZXRfb3RoZXJfMQBCMV9lbXNjcmlwdGVuX2JpbmRfYjJSZXZvbHV0ZUpvaW50X0lzTW90b3JFbmFibGVkXzAA9AMzX2Vtc2NyaXB0ZW5fYmluZF9iMk1vdG9ySm9pbnRfU2V0Q29ycmVjdGlvbkZhY3Rvcl8xAIsJK19lbXNjcmlwdGVuX2JpbmRfYjJGaXh0dXJlRGVmX2dldF9kZW5zaXR5XzAAjAknX2Vtc2NyaXB0ZW5fYmluZF9iMkdlYXJKb2ludF9HZXRSYXRpb18wAI0JH19lbXNjcmlwdGVuX2JpbmRfYjJWZWMyX2dldF94XzAAhgk7X2Vtc2NyaXB0ZW5fYmluZF9iMlByaXNtYXRpY0pvaW50RGVmX2dldF91cHBlclRyYW5zbGF0aW9uXzAA/Ag0X2Vtc2NyaXB0ZW5fYmluZF9iMlJldm9sdXRlSm9pbnRfR2V0UmVmZXJlbmNlQW5nbGVfMACOCTdfZW1zY3JpcHRlbl9iaW5kX2IyTW90b3JKb2ludERlZl9nZXRfY29sbGlkZUNvbm5lY3RlZF8wAEYoX2Vtc2NyaXB0ZW5fYmluZF9iMk1vdXNlSm9pbnRfSXNBY3RpdmVfMAA9LF9lbXNjcmlwdGVuX2JpbmRfYjJXaGVlbEpvaW50RGVmX3NldF9ib2R5Ql8xAEU0X2Vtc2NyaXB0ZW5fYmluZF9iMlB1bGxleUpvaW50RGVmX3NldF9sb2NhbEFuY2hvckJfMQDzAixfZW1zY3JpcHRlbl9iaW5kX2IyRml4dHVyZURlZl9nZXRfdXNlckRhdGFfMAAxOl9lbXNjcmlwdGVuX2JpbmRfYjJGcmljdGlvbkpvaW50RGVmX3NldF9jb2xsaWRlQ29ubmVjdGVkXzEARztfZW1zY3JpcHRlbl9iaW5kX2IyUHJpc21hdGljSm9pbnREZWZfZ2V0X2xvd2VyVHJhbnNsYXRpb25fMACPCTJfZW1zY3JpcHRlbl9iaW5kX2IyR2VhckpvaW50X0dldENvbGxpZGVDb25uZWN0ZWRfMAA+Ll9lbXNjcmlwdGVuX2JpbmRfYjJSb3BlSm9pbnRfR2V0TG9jYWxBbmNob3JCXzAAiwE5X2Vtc2NyaXB0ZW5fYmluZF9iMlByaXNtYXRpY0pvaW50RGVmX2dldF9yZWZlcmVuY2VBbmdsZV8wAJAJK19lbXNjcmlwdGVuX2JpbmRfYjJNb3VzZUpvaW50RGVmX3NldF90eXBlXzEAQi1fZW1zY3JpcHRlbl9iaW5kX2IyQm9keV9BcHBseUFuZ3VsYXJJbXB1bHNlXzIAkQksX2Vtc2NyaXB0ZW5fZW51bV9iMkpvaW50VHlwZV9lX2ZyaWN0aW9uSm9pbnQAiQQvX2Vtc2NyaXB0ZW5fYmluZF9iMlJheUNhc3RPdXRwdXRfc2V0X2ZyYWN0aW9uXzEAkgkgX2Vtc2NyaXB0ZW5fYmluZF9iMkNvbG9yX3NldF9yXzEAhQkpX2Vtc2NyaXB0ZW5fYmluZF9iMlB1bGxleUpvaW50X0dldEJvZHlCXzAANS1fZW1zY3JpcHRlbl9iaW5kX2IyUmF5Q2FzdE91dHB1dF9nZXRfbm9ybWFsXzAAaClfZW1zY3JpcHRlbl9iaW5kX2IyV29ybGRfR2V0VHJlZVF1YWxpdHlfMACTCS1fZW1zY3JpcHRlbl9iaW5kX2IyQm9keURlZl9zZXRfZ3Jhdml0eVNjYWxlXzEAigkrX2Vtc2NyaXB0ZW5fYmluZF9iMlJvcGVKb2ludERlZl9zZXRfYm9keUJfMQBFMV9lbXNjcmlwdGVuX2JpbmRfYjJQcmlzbWF0aWNKb2ludF9HZXRMb3dlckxpbWl0XzAAiAkoX2Vtc2NyaXB0ZW5fYmluZF9iMkFBQkJfZ2V0X2xvd2VyQm91bmRfMABoLV9lbXNjcmlwdGVuX2JpbmRfYjJXaGVlbEpvaW50X1NldE1vdG9yU3BlZWRfMQCUCStfZW1zY3JpcHRlbl9iaW5kX2IyTW91c2VKb2ludF9HZXRNYXhGb3JjZV8wAJUJJV9lbXNjcmlwdGVuX2JpbmRfYjJCb2R5X1NldE1hc3NEYXRhXzEAzAMeX2Vtc2NyaXB0ZW5fYmluZF9iMlZlYzJfU2tld18wANgBMF9lbXNjcmlwdGVuX2JpbmRfYjJCb2R5RGVmX2dldF9hbmd1bGFyVmVsb2NpdHlfMACCCS5fZW1zY3JpcHRlbl9iaW5kX2IyV2VsZEpvaW50X1NldERhbXBpbmdSYXRpb18xAJYJMl9lbXNjcmlwdGVuX2JpbmRfYjJQcmlzbWF0aWNKb2ludERlZl9fX2Rlc3Ryb3lfX18wAEgnX2Vtc2NyaXB0ZW5fYmluZF9iMkNvbnRhY3RfSXNUb3VjaGluZ18wALADIl9lbXNjcmlwdGVuX2JpbmRfYjJEcmF3X1NldEZsYWdzXzEAMCJfZW1zY3JpcHRlbl9iaW5kX2IyQUFCQl9Db250YWluc18xAOcBKl9lbXNjcmlwdGVuX2JpbmRfYjJEaXN0YW5jZUpvaW50X0dldE5leHRfMAA6K19lbXNjcmlwdGVuX2JpbmRfYjJFZGdlU2hhcGVfc2V0X21fcmFkaXVzXzEAkgk2X2Vtc2NyaXB0ZW5fYmluZF9iMkRpc3RhbmNlSm9pbnREZWZfZ2V0X2RhbXBpbmdSYXRpb18wAJAJMl9lbXNjcmlwdGVuX2JpbmRfYjJEaXN0YW5jZUpvaW50X0dldExvY2FsQW5jaG9yQV8wAFUrX2Vtc2NyaXB0ZW5fYmluZF9iMlByaXNtYXRpY0pvaW50X0dldFR5cGVfMAAxK19lbXNjcmlwdGVuX2JpbmRfYjJGaXh0dXJlX0dldFJlc3RpdHV0aW9uXzAAhwkkX2Vtc2NyaXB0ZW5fYmluZF9iMlRyYW5zZm9ybV9zZXRfcV8xAOsBLV9lbXNjcmlwdGVuX2JpbmRfYjJQb2x5Z29uU2hhcGVfX19kZXN0cm95X19fMAAvKF9lbXNjcmlwdGVuX2JpbmRfYjJBQUJCX2dldF91cHBlckJvdW5kXzAA6gEqX2Vtc2NyaXB0ZW5fYmluZF9iMlRyYW5zZm9ybV9fX2Rlc3Ryb3lfX18wAEgrX2Vtc2NyaXB0ZW5fYmluZF9iMkJvZHlfR2V0TGluZWFyVmVsb2NpdHlfMADCAy1fZW1zY3JpcHRlbl9iaW5kX2IyQ2lyY2xlU2hhcGVfc2V0X21fcmFkaXVzXzEAkgkvX2Vtc2NyaXB0ZW5fYmluZF9iMkVkZ2VTaGFwZV9zZXRfbV9oYXNWZXJ0ZXgwXzEA3wIrX2Vtc2NyaXB0ZW5fYmluZF9iMlJvcGVKb2ludF9HZXRNYXhMZW5ndGhfMACXCSpfZW1zY3JpcHRlbl9iaW5kX2IyR2VhckpvaW50X0dldFVzZXJEYXRhXzAAOzNfZW1zY3JpcHRlbl9iaW5kX2IyTW90b3JKb2ludF9HZXRDb2xsaWRlQ29ubmVjdGVkXzAAPipfZW1zY3JpcHRlbl9iaW5kX2IyR2VhckpvaW50RGVmX3NldF90eXBlXzEAQjJfZW1zY3JpcHRlbl9iaW5kX2IyRGlzdGFuY2VKb2ludF9TZXREYW1waW5nUmF0aW9fMQCWCShfZW1zY3JpcHRlbl9iaW5kX2IyQ29udGFjdF9HZXRGaXh0dXJlQV8wADQuX2Vtc2NyaXB0ZW5fYmluZF9iMlF1ZXJ5Q2FsbGJhY2tfX19kZXN0cm95X19fMAAvLV9lbXNjcmlwdGVuX2JpbmRfYjJQdWxsZXlKb2ludERlZl9nZXRfcmF0aW9fMACYCTdfZW1zY3JpcHRlbl9iaW5kX2IyUHJpc21hdGljSm9pbnREZWZfZ2V0X2xvY2FsQW5jaG9yQl8wAPUBK19lbXNjcmlwdGVuX2JpbmRfYjJDaXJjbGVTaGFwZV9zZXRfbV90eXBlXzEAMB5fZW1zY3JpcHRlbl9iaW5kX2IyUm90X2dldF9jXzAA+ggpX2Vtc2NyaXB0ZW5fYmluZF9iMlJvcGVKb2ludF9HZXRBbmNob3JCXzAAgwMoX2Vtc2NyaXB0ZW5fYmluZF9iMkFBQkJfc2V0X3VwcGVyQm91bmRfMQDrATdfZW1zY3JpcHRlbl9iaW5kX2IyTW91c2VKb2ludERlZl9nZXRfY29sbGlkZUNvbm5lY3RlZF8wAEYzX2Vtc2NyaXB0ZW5fYmluZF9iMldoZWVsSm9pbnREZWZfc2V0X2RhbXBpbmdSYXRpb18xAJkJL19lbXNjcmlwdGVuX2JpbmRfYjJDb250YWN0SW1wdWxzZV9fX2Rlc3Ryb3lfX18wAEg6X2Vtc2NyaXB0ZW5fYmluZF9iMlByaXNtYXRpY0pvaW50RGVmX2IyUHJpc21hdGljSm9pbnREZWZfMACEAi9fZW1zY3JpcHRlbl9iaW5kX2IyUHVsbGV5Sm9pbnREZWZfc2V0X2xlbmd0aEJfMQCaCS1fZW1zY3JpcHRlbl9iaW5kX2IyUmF5Q2FzdElucHV0X19fZGVzdHJveV9fXzAASCxfZW1zY3JpcHRlbl9iaW5kX2IyQm9keV9BcHBseUZvcmNlVG9DZW50ZXJfMgDFAz5fZW1zY3JpcHRlbl9iaW5kX0pTRGVzdHJ1Y3Rpb25MaXN0ZW5lcl9KU0Rlc3RydWN0aW9uTGlzdGVuZXJfMABQM19lbXNjcmlwdGVuX2JpbmRfYjJXaGVlbEpvaW50RGVmX3NldF9sb2NhbEFuY2hvckFfMQD0AStfZW1zY3JpcHRlbl9iaW5kX2IyRnJpY3Rpb25Kb2ludF9HZXRCb2R5Ql8wADUrX2Vtc2NyaXB0ZW5fYmluZF9iMldlbGRKb2ludERlZl9zZXRfYm9keUFfMQBEK19lbXNjcmlwdGVuX2JpbmRfYjJEaXN0YW5jZUpvaW50X0dldEJvZHlCXzAANSlfZW1zY3JpcHRlbl9lbnVtX2IySm9pbnRUeXBlX2Vfd2hlZWxKb2ludACHBC9fZW1zY3JpcHRlbl9iaW5kX2IyV2hlZWxKb2ludF9HZXRMb2NhbEFuY2hvckJfMAC8AilfZW1zY3JpcHRlbl9iaW5kX2IySm9pbnREZWZfX19kZXN0cm95X19fMABIKF9lbXNjcmlwdGVuX2VudW1fYjJTaGFwZVR5cGVfZV90eXBlQ291bnQAhAQ2X2Vtc2NyaXB0ZW5fYmluZF9iMkZyaWN0aW9uSm9pbnREZWZfZ2V0X2xvY2FsQW5jaG9yQV8wAPMBLl9lbXNjcmlwdGVuX2JpbmRfYjJDaXJjbGVTaGFwZV9HZXRDaGlsZENvdW50XzAASSdfZW1zY3JpcHRlbl9iaW5kX2IyQm9keURlZl9nZXRfYnVsbGV0XzAAvAEgX2Vtc2NyaXB0ZW5fYmluZF9iMkNvbG9yX3NldF9iXzEAkgkhX2Vtc2NyaXB0ZW5fYmluZF9iMk1hdDMzX2dldF9lel8wAGwoX2Vtc2NyaXB0ZW5fYmluZF9iMk1hc3NEYXRhX2dldF9jZW50ZXJfMACxATRfZW1zY3JpcHRlbl9iaW5kX2IyUHVsbGV5Sm9pbnREZWZfZ2V0X2xvY2FsQW5jaG9yQl8wAPICMF9lbXNjcmlwdGVuX2JpbmRfYjJXaGVlbEpvaW50X0dldFJlYWN0aW9uRm9yY2VfMQCbCSlfZW1zY3JpcHRlbl9iaW5kX2IyV29ybGRfU2V0U3ViU3RlcHBpbmdfMQCrAiBfZW1zY3JpcHRlbl9iaW5kX2IyVmVjMl9vcF9hZGRfMQDRASVfZW1zY3JpcHRlbl9iaW5kX0pTRHJhd19EcmF3U2VnbWVudF8zAEwuX2Vtc2NyaXB0ZW5fYmluZF9iMkpvaW50X0dldENvbGxpZGVDb25uZWN0ZWRfMAA+MV9lbXNjcmlwdGVuX2JpbmRfYjJNb3RvckpvaW50X0dldFJlYWN0aW9uVG9ycXVlXzEAgAkwX2Vtc2NyaXB0ZW5fYmluZF9iMlJldm9sdXRlSm9pbnRfR2V0Sm9pbnRBbmdsZV8wAJwJLl9lbXNjcmlwdGVuX2JpbmRfYjJXaGVlbEpvaW50RGVmX19fZGVzdHJveV9fXzAASCFfZW1zY3JpcHRlbl9iaW5kX2IyVmVjM19TZXRaZXJvXzAA2wEqX2Vtc2NyaXB0ZW5fZW51bV9iMkpvaW50VHlwZV9lX3B1bGxleUpvaW50AIQEMF9lbXNjcmlwdGVuX2JpbmRfYjJDaGFpblNoYXBlX2dldF9tX25leHRWZXJ0ZXhfMAD1ASdfZW1zY3JpcHRlbl9iaW5kX2IyQ29udGFjdF9TZXRFbmFibGVkXzEAsQMnX2Vtc2NyaXB0ZW5fYmluZF9iMlNoYXBlX3NldF9tX3JhZGl1c18xAJIJJ19lbXNjcmlwdGVuX2JpbmRfYjJXb3JsZF9TZXREZWJ1Z0RyYXdfMQCYAiZfZW1zY3JpcHRlbl9iaW5kX2IyQ29udGFjdElEX3NldF9rZXlfMQBCOl9lbXNjcmlwdGVuX2JpbmRfYjJSZXZvbHV0ZUpvaW50RGVmX3NldF9jb2xsaWRlQ29ubmVjdGVkXzEARwdfbWFsbG9jAPIFJV9lbXNjcmlwdGVuX2JpbmRfYjJKb2ludF9HZXRBbmNob3JCXzAANyNfZW1zY3JpcHRlbl9iaW5kX2IyVmVjMl9Ob3JtYWxpemVfMACdCS1fZW1zY3JpcHRlbl9iaW5kX2IyV2hlZWxKb2ludF9HZXRKb2ludFNwZWVkXzAAngk2X2Vtc2NyaXB0ZW5fYmluZF9iMkZyaWN0aW9uSm9pbnREZWZfc2V0X2xvY2FsQW5jaG9yQV8xAPQBLl9lbXNjcmlwdGVuX2JpbmRfYjJDaGFpblNoYXBlX3NldF9tX3ZlcnRpY2VzXzEARTZfZW1zY3JpcHRlbl9iaW5kX0pTUmF5Q2FzdENhbGxiYWNrX0pTUmF5Q2FzdENhbGxiYWNrXzAAxAEoX2Vtc2NyaXB0ZW5fYmluZF9iMlJheUNhc3RJbnB1dF9zZXRfcDJfMQDrATRfZW1zY3JpcHRlbl9iaW5kX2IyUmV2b2x1dGVKb2ludERlZl9nZXRfbW90b3JTcGVlZF8wAPwIMF9lbXNjcmlwdGVuX2JpbmRfYjJQdWxsZXlKb2ludERlZl9zZXRfdXNlckRhdGFfMQAwJ19lbXNjcmlwdGVuX2JpbmRfYjJXZWxkSm9pbnRfR2V0Qm9keUFfMAA0Jl9lbXNjcmlwdGVuX2VudW1fYjJEcmF3RmxhZ19lX2pvaW50Qml0AIIELF9lbXNjcmlwdGVuX2JpbmRfYjJGaXh0dXJlRGVmX2dldF9pc1NlbnNvcl8wAO0BD19sbHZtX2Jzd2FwX2kzMgCYBi1fZW1zY3JpcHRlbl9iaW5kX2IyUHVsbGV5Sm9pbnREZWZfc2V0X2JvZHlCXzEARS5fZW1zY3JpcHRlbl9iaW5kX2IyV2VsZEpvaW50X0dldExvY2FsQW5jaG9yQV8wAFUrX2Vtc2NyaXB0ZW5fYmluZF9iMldoZWVsSm9pbnRfRW5hYmxlTW90b3JfMQCfAzBfZW1zY3JpcHRlbl9iaW5kX2IyUmV2b2x1dGVKb2ludF9HZXRKb2ludFNwZWVkXzAAngkvX2Vtc2NyaXB0ZW5fYmluZF9iMldoZWVsSm9pbnREZWZfZ2V0X3VzZXJEYXRhXzAAMSpfZW1zY3JpcHRlbl9iaW5kX0pTRHJhd19EcmF3U29saWRQb2x5Z29uXzMAlwMcX2Vtc2NyaXB0ZW5fYmluZF9iMlJvdF9TZXRfMQCfCStfZW1zY3JpcHRlbl9iaW5kX2IyTW90b3JKb2ludF9HZXRNYXhGb3JjZV8wAKAJJV9lbXNjcmlwdGVuX2JpbmRfSlNEcmF3X19fZGVzdHJveV9fXzAALy5fZW1zY3JpcHRlbl9iaW5kX2IyTW91c2VKb2ludERlZl9fX2Rlc3Ryb3lfX18wAEgiX2Vtc2NyaXB0ZW5fYmluZF9iMk1hdDMzX1NvbHZlMjJfMQBlLl9lbXNjcmlwdGVuX2JpbmRfYjJQcm9maWxlX3NldF9zb2x2ZVBvc2l0aW9uXzEAoQkuX2Vtc2NyaXB0ZW5fYmluZF9iMkNvbnRhY3RGaWx0ZXJfX19kZXN0cm95X19fMAAvL19lbXNjcmlwdGVuX2JpbmRfYjJXaGVlbEpvaW50X0dldExvY2FsQW5jaG9yQV8wAIsBM19lbXNjcmlwdGVuX2JpbmRfYjJDaGFpblNoYXBlX3NldF9tX2hhc1ByZXZWZXJ0ZXhfMQC4AS9fZW1zY3JpcHRlbl9iaW5kX2IyUHJpc21hdGljSm9pbnRfX19kZXN0cm95X19fMABgKl9lbXNjcmlwdGVuX2JpbmRfYjJHZWFySm9pbnRfX19kZXN0cm95X19fMABgN19lbXNjcmlwdGVuX2JpbmRfYjJQcmlzbWF0aWNKb2ludF9HZXRKb2ludFRyYW5zbGF0aW9uXzAAogkpX2Vtc2NyaXB0ZW5fYmluZF9iMk1hbmlmb2xkUG9pbnRfZ2V0X2lkXzAAswEtX2Vtc2NyaXB0ZW5fYmluZF9iMkNpcmNsZVNoYXBlX2dldF9tX3JhZGl1c18wAKMJMV9lbXNjcmlwdGVuX2JpbmRfYjJQcmlzbWF0aWNKb2ludF9HZXRNb3RvclNwZWVkXzAApAkkX2Vtc2NyaXB0ZW5fYmluZF9iMlJvdF9TZXRJZGVudGl0eV8wAJYBMV9lbXNjcmlwdGVuX2JpbmRfYjJQdWxsZXlKb2ludF9HZXRHcm91bmRBbmNob3JCXzAApwMgX2Vtc2NyaXB0ZW5fYmluZF9iMlZlYzNfb3BfYWRkXzEA3QEqX2Vtc2NyaXB0ZW5fYmluZF9iMkZyaWN0aW9uSm9pbnRfR2V0VHlwZV8wADEoX2Vtc2NyaXB0ZW5fYmluZF9iMk1vdG9ySm9pbnRfR2V0Qm9keUFfMAA0M19lbXNjcmlwdGVuX2JpbmRfYjJNb3VzZUpvaW50RGVmX2dldF9kYW1waW5nUmF0aW9fMAClCTBfZW1zY3JpcHRlbl9iaW5kX2IyUmV2b2x1dGVKb2ludF9HZXRNb3RvclNwZWVkXzAApgknX2Vtc2NyaXB0ZW5fYmluZF9iMldoZWVsSm9pbnRfR2V0TmV4dF8wADoqX2Vtc2NyaXB0ZW5fYmluZF9iMkNoYWluU2hhcGVfc2V0X21fdHlwZV8xADAoX2Vtc2NyaXB0ZW5fYmluZF9iMkNvbnRhY3RfR2V0RnJpY3Rpb25fMACnCSJfZW1zY3JpcHRlbl9iaW5kX2IyTWF0MzNfU29sdmUzM18xAGQfX2Vtc2NyaXB0ZW5fYmluZF9iMlZlYzNfZ2V0X3lfMAD6CCJfZW1zY3JpcHRlbl9iaW5kX2IyV29ybGRfYjJXb3JsZF8xAJQCLF9lbXNjcmlwdGVuX2JpbmRfYjJNb3VzZUpvaW50RGVmX2dldF9ib2R5Ql8wADokX2Vtc2NyaXB0ZW5fYmluZF9iMlNoYXBlX1Rlc3RQb2ludF8yAEooX2Vtc2NyaXB0ZW5fYmluZF9iMkJvZHlfR2V0V29ybGRWZWN0b3JfMQDPAx1fZW1zY3JpcHRlbl9iaW5kX2IyVmVjM19TZXRfMwCoCTFfZW1zY3JpcHRlbl9iaW5kX2IyV2VsZEpvaW50RGVmX2dldF9mcmVxdWVuY3lIel8wAKkJK19lbXNjcmlwdGVuX2JpbmRfYjJHZWFySm9pbnREZWZfc2V0X3JhdGlvXzEAqgkpX2Vtc2NyaXB0ZW5fYmluZF9iMk1hbmlmb2xkX19fZGVzdHJveV9fXzAASC9fZW1zY3JpcHRlbl9iaW5kX2IyUHVsbGV5Sm9pbnREZWZfc2V0X2xlbmd0aEFfMQD+CCZfZW1zY3JpcHRlbl9iaW5kX2IyQ29udGFjdF9Jc0VuYWJsZWRfMACyAyZfZW1zY3JpcHRlbl9iaW5kX2IyV29ybGRfQ3JlYXRlSm9pbnRfMQCbAi1fZW1zY3JpcHRlbl9iaW5kX2IyUHVsbGV5Sm9pbnREZWZfc2V0X3JhdGlvXzEAmQkrX2Vtc2NyaXB0ZW5fYmluZF9iMldvcmxkX0dldEFsbG93U2xlZXBpbmdfMACmAidfZW1zY3JpcHRlbl9iaW5kX2IySm9pbnRFZGdlX3NldF9wcmV2XzEARDRfZW1zY3JpcHRlbl9iaW5kX2IyUmV2b2x1dGVKb2ludERlZl9nZXRfdXBwZXJBbmdsZV8wAKsJJ19lbXNjcmlwdGVuX2JpbmRfYjJCb2R5X0dldExvY2FsUG9pbnRfMQDQAzdfZW1zY3JpcHRlbl9iaW5kX2IyUHJpc21hdGljSm9pbnRfR2V0Q29sbGlkZUNvbm5lY3RlZF8wAD4uX2Vtc2NyaXB0ZW5fYmluZF9iMlJvcGVKb2ludERlZl9nZXRfdXNlckRhdGFfMAAxK19lbXNjcmlwdGVuX2JpbmRfYjJEaXN0YW5jZUpvaW50X0lzQWN0aXZlXzAAPSxfZW1zY3JpcHRlbl9iaW5kX2IyUm9wZUpvaW50X0dldExpbWl0U3RhdGVfMACBAylfZW1zY3JpcHRlbl9iaW5kX2IyUHJvZmlsZV9nZXRfc29sdmVUT0lfMACsCSBfZW1zY3JpcHRlbl9iaW5kX2IyVmVjMl9iMlZlYzJfMACTAS1fZW1zY3JpcHRlbl9iaW5kX2IyRGlzdGFuY2VKb2ludF9HZXRBbmNob3JCXzAAXjVfZW1zY3JpcHRlbl9iaW5kX2IyV2hlZWxKb2ludERlZl9nZXRfbWF4TW90b3JUb3JxdWVfMACrCTZfZW1zY3JpcHRlbl9iaW5kX2IyUmV2b2x1dGVKb2ludERlZl9zZXRfbG9jYWxBbmNob3JBXzEA9AEoX2Vtc2NyaXB0ZW5fYmluZF9iMkNpcmNsZVNoYXBlX2dldF9tX3BfMABqLl9lbXNjcmlwdGVuX2JpbmRfYjJDb250YWN0RmVhdHVyZV9nZXRfaW5kZXhBXzAAxgEyX2Vtc2NyaXB0ZW5fYmluZF9iMk1vdG9ySm9pbnREZWZfYjJNb3RvckpvaW50RGVmXzAA/gMuX2Vtc2NyaXB0ZW5fYmluZF9iMlJldm9sdXRlSm9pbnRfRW5hYmxlTGltaXRfMQDyAzRfZW1zY3JpcHRlbl9iaW5kX2IyUHVsbGV5Sm9pbnRfR2V0Q29sbGlkZUNvbm5lY3RlZF8wAD4qX2Vtc2NyaXB0ZW5fYmluZF9iMkpvaW50RGVmX2dldF91c2VyRGF0YV8wADElX2Vtc2NyaXB0ZW5fYmluZF9iMkJvZHlfR2V0UG9zaXRpb25fMABqKF9lbXNjcmlwdGVuX2JpbmRfYjJQcm9maWxlX19fZGVzdHJveV9fXzAASClfZW1zY3JpcHRlbl9iaW5kX2IyQ29udGFjdEVkZ2VfZ2V0X3ByZXZfMABDL19lbXNjcmlwdGVuX2JpbmRfYjJEaXN0YW5jZUpvaW50X1NldEZyZXF1ZW5jeV8xAK0JJF9lbXNjcmlwdGVuX2VudW1fYjJTaGFwZVR5cGVfZV9jaGFpbgCDBCpfZW1zY3JpcHRlbl9iaW5kX2IyTW91c2VKb2ludF9HZXRBbmNob3JBXzAAkAEuX2Vtc2NyaXB0ZW5fZW51bV9iMkNvbnRhY3RGZWF0dXJlVHlwZV9lX3ZlcnRleACABCRfZW1zY3JpcHRlbl9iaW5kX2IyRml4dHVyZV9HZXRCb2R5XzAAQy1fZW1zY3JpcHRlbl9iaW5kX2IyQ29udGFjdEltcHVsc2Vfc2V0X2NvdW50XzEAVC1fZW1zY3JpcHRlbl9iaW5kX2IyUHVsbGV5Sm9pbnREZWZfZ2V0X2JvZHlCXzAAOidfZW1zY3JpcHRlbl9iaW5kX2IyUm9wZUpvaW50X0lzQWN0aXZlXzAAPS5fZW1zY3JpcHRlbl9iaW5kX2IyQ2lyY2xlU2hhcGVfYjJDaXJjbGVTaGFwZV8wAOICNF9lbXNjcmlwdGVuX2JpbmRfYjJSZXZvbHV0ZUpvaW50X0dldFJlYWN0aW9uVG9ycXVlXzEAgAknX2Vtc2NyaXB0ZW5fYmluZF9iMkZpeHR1cmVfU2V0RGVuc2l0eV8xAK4JMF9lbXNjcmlwdGVuX2JpbmRfYjJDaGFpblNoYXBlX2dldF9tX3ByZXZWZXJ0ZXhfMADzASZfZW1zY3JpcHRlbl9iaW5kX2IyV29ybGRfQ2xlYXJGb3JjZXNfMACeAiVfZW1zY3JpcHRlbl9iaW5kX2IyVmVjM19fX2Rlc3Ryb3lfX18wAEgyX2Vtc2NyaXB0ZW5fYmluZF9iMldlbGRKb2ludERlZl9nZXRfZGFtcGluZ1JhdGlvXzAAkAkvX2Vtc2NyaXB0ZW5fYmluZF9iMldoZWVsSm9pbnREZWZfc2V0X3VzZXJEYXRhXzEAMCtfZW1zY3JpcHRlbl9iaW5kX2IyV2VsZEpvaW50X1NldEZyZXF1ZW5jeV8xAK0JMF9lbXNjcmlwdGVuX2JpbmRfYjJSb3BlSm9pbnRfR2V0UmVhY3Rpb25Ub3JxdWVfMQCACS1fZW1zY3JpcHRlbl9iaW5kX0pTQ29udGFjdExpc3RlbmVyX1ByZVNvbHZlXzIA0gIqX2Vtc2NyaXB0ZW5fYmluZF9iMkJvZHlfU2V0Rml4ZWRSb3RhdGlvbl8xAN4DLV9lbXNjcmlwdGVuX2JpbmRfYjJSYXlDYXN0T3V0cHV0X3NldF9ub3JtYWxfMQDpATZfZW1zY3JpcHRlbl9iaW5kX2IyUmV2b2x1dGVKb2ludERlZl9zZXRfbG9jYWxBbmNob3JCXzEA9gEyX2Vtc2NyaXB0ZW5fYmluZF9iMkRpc3RhbmNlSm9pbnRfR2V0RGFtcGluZ1JhdGlvXzAA+Qg0X2Vtc2NyaXB0ZW5fYmluZF9iMlJldm9sdXRlSm9pbnRfU2V0TWF4TW90b3JUb3JxdWVfMQCvCS5fZW1zY3JpcHRlbl9iaW5kX2IyUmV2b2x1dGVKb2ludF9FbmFibGVNb3Rvcl8xAPUDLF9lbXNjcmlwdGVuX2JpbmRfYjJNb3VzZUpvaW50RGVmX3NldF9ib2R5Ql8xAEUoX2Vtc2NyaXB0ZW5fYmluZF9iMkNpcmNsZVNoYXBlX0dldFR5cGVfMAAxKV9lbXNjcmlwdGVuX2JpbmRfYjJQb2x5Z29uU2hhcGVfR2V0VHlwZV8wADE5X2Vtc2NyaXB0ZW5fYmluZF9iMlByaXNtYXRpY0pvaW50RGVmX3NldF9yZWZlcmVuY2VBbmdsZV8xAIQJNl9lbXNjcmlwdGVuX2JpbmRfYjJSb3BlSm9pbnREZWZfZ2V0X2NvbGxpZGVDb25uZWN0ZWRfMABGKl9lbXNjcmlwdGVuX2JpbmRfYjJGaXh0dXJlRGVmX3NldF9maWx0ZXJfMQDwASVfZW1zY3JpcHRlbl9iaW5kX2IyQm9keV9BcHBseVRvcnF1ZV8yALAJKl9lbXNjcmlwdGVuX2JpbmRfYjJGaXh0dXJlX1NldEZpbHRlckRhdGFfMQBxMl9lbXNjcmlwdGVuX2JpbmRfYjJGcmljdGlvbkpvaW50RGVmX2dldF91c2VyRGF0YV8wADEwX2Vtc2NyaXB0ZW5fYmluZF9iMlJheUNhc3RDYWxsYmFja19fX2Rlc3Ryb3lfX18wAC8eX2Vtc2NyaXB0ZW5fYmluZF9iMlJvdF9iMlJvdF8wAJMBMV9lbXNjcmlwdGVuX2JpbmRfYjJQcmlzbWF0aWNKb2ludF9TZXRNb3RvclNwZWVkXzEAsQkrX2Vtc2NyaXB0ZW5fYmluZF9iMk1vdG9ySm9pbnRfU2V0VXNlckRhdGFfMQA8MV9lbXNjcmlwdGVuX2JpbmRfYjJQcmlzbWF0aWNKb2ludF9HZXRMb2NhbEF4aXNBXzAAvAIoX2Vtc2NyaXB0ZW5fYmluZF9iMk1vdG9ySm9pbnRfR2V0Qm9keUJfMAA1Il9lbXNjcmlwdGVuX2JpbmRfYjJUcmFuc2Zvcm1fU2V0XzIAsgkpX2Vtc2NyaXB0ZW5fYmluZF9iMk1vdXNlSm9pbnRfU2V0VGFyZ2V0XzEAigEsX2Vtc2NyaXB0ZW5fYmluZF9iMkNvbnRhY3RFZGdlX3NldF9jb250YWN0XzEAMDVfZW1zY3JpcHRlbl9iaW5kX2IyUmV2b2x1dGVKb2ludERlZl9nZXRfZW5hYmxlTGltaXRfMAC+AS5fZW1zY3JpcHRlbl9iaW5kX2IyUmV2b2x1dGVKb2ludF9HZXRVc2VyRGF0YV8wADspX2Vtc2NyaXB0ZW5fYmluZF9iMlByb2ZpbGVfc2V0X3NvbHZlVE9JXzEAqgkvX2Vtc2NyaXB0ZW5fYmluZF9iMlByaXNtYXRpY0pvaW50RGVmX3NldF90eXBlXzEAQi5fZW1zY3JpcHRlbl9iaW5kX2IyR2VhckpvaW50RGVmX2dldF91c2VyRGF0YV8wADEtX2Vtc2NyaXB0ZW5fYmluZF9iMlJldm9sdXRlSm9pbnRfR2V0QW5jaG9yQl8wAPsDMV9lbXNjcmlwdGVuX2JpbmRfYjJGcmljdGlvbkpvaW50RGVmX19fZGVzdHJveV9fXzAASDRfZW1zY3JpcHRlbl9iaW5kX2IyUHJpc21hdGljSm9pbnRfR2V0UmVhY3Rpb25Gb3JjZV8xALMJKl9lbXNjcmlwdGVuX2JpbmRfYjJUcmFuc2Zvcm1fYjJUcmFuc2Zvcm1fMADUAjNfZW1zY3JpcHRlbl9iaW5kX2IyTW91c2VKb2ludF9HZXRDb2xsaWRlQ29ubmVjdGVkXzAAPitfZW1zY3JpcHRlbl9lbnVtX2IyTGltaXRTdGF0ZV9lX2VxdWFsTGltaXRzAIMEKV9lbXNjcmlwdGVuX2JpbmRfYjJCb2R5X0lzRml4ZWRSb3RhdGlvbl8wAN8DJl9lbXNjcmlwdGVuX2VudW1fYjJEcmF3RmxhZ19lX3NoYXBlQml0AIEEL19lbXNjcmlwdGVuX2JpbmRfYjJSZXZvbHV0ZUpvaW50RGVmX3NldF9ib2R5Ql8xAEUoX2Vtc2NyaXB0ZW5fYmluZF9iMkJvZHlfR2V0Q29udGFjdExpc3RfMADiAzVfZW1zY3JpcHRlbl9iaW5kX2IyV2hlZWxKb2ludF9TZXRTcHJpbmdEYW1waW5nUmF0aW9fMQCWCTBfZW1zY3JpcHRlbl9iaW5kX2IyRGlzdGFuY2VKb2ludERlZl9zZXRfbGVuZ3RoXzEAtAkyX2Vtc2NyaXB0ZW5fYmluZF9iMkRpc3RhbmNlSm9pbnRfR2V0TG9jYWxBbmNob3JCXzAAViFfZW1zY3JpcHRlbl9iaW5kX2IyTWF0MzNfc2V0X2V5XzEAay5fZW1zY3JpcHRlbl9iaW5kX2IyRGlzdGFuY2VKb2ludERlZl9nZXRfdHlwZV8wAEEkX2Vtc2NyaXB0ZW5fYmluZF9iMkRyYXdfQ2xlYXJGbGFnc18xADMmX2Vtc2NyaXB0ZW5fYmluZF9iMldlbGRKb2ludF9HZXRUeXBlXzAAMSxfZW1zY3JpcHRlbl9iaW5kX2IyTW90b3JKb2ludF9HZXRNYXhUb3JxdWVfMAC1CSJfZW1zY3JpcHRlbl9iaW5kX2IyQm9keV9Jc0FjdGl2ZV8wAN0DLV9lbXNjcmlwdGVuX2JpbmRfYjJDb250YWN0X1Jlc2V0UmVzdGl0dXRpb25fMAC4Ay9fZW1zY3JpcHRlbl9iaW5kX2IyRnJpY3Rpb25Kb2ludERlZl9nZXRfYm9keUFfMABDMl9lbXNjcmlwdGVuX2JpbmRfYjJNYW5pZm9sZFBvaW50X2IyTWFuaWZvbGRQb2ludF8wAPQCKV9lbXNjcmlwdGVuX2JpbmRfYjJFZGdlU2hhcGVfc2V0X21fdHlwZV8xADArX2Vtc2NyaXB0ZW5fZW51bV9iMkpvaW50VHlwZV9lX3Vua25vd25Kb2ludACABDVfZW1zY3JpcHRlbl9iaW5kX2IyUmV2b2x1dGVKb2ludERlZl9zZXRfZW5hYmxlTW90b3JfMQCUAylfZW1zY3JpcHRlbl9iaW5kX2IyUHVsbGV5Sm9pbnRfSXNBY3RpdmVfMAA9J19lbXNjcmlwdGVuX2JpbmRfYjJNb3VzZUpvaW50X0dldE5leHRfMAA6Ll9lbXNjcmlwdGVuX2JpbmRfYjJSZXZvbHV0ZUpvaW50X1NldFVzZXJEYXRhXzEAPCxfZW1zY3JpcHRlbl9iaW5kX2IyTWFuaWZvbGRfZ2V0X2xvY2FsUG9pbnRfMAD+AS9fZW1zY3JpcHRlbl9iaW5kX2IyUHVsbGV5Sm9pbnREZWZfZ2V0X2xlbmd0aEJfMAD8CC9fZW1zY3JpcHRlbl9iaW5kX2IyUG9seWdvblNoYXBlX0dldENoaWxkQ291bnRfMABJKl9lbXNjcmlwdGVuX2JpbmRfYjJDaGFpblNoYXBlX0NyZWF0ZUxvb3BfMgD6AixfZW1zY3JpcHRlbl9iaW5kX2IyR2VhckpvaW50RGVmX2dldF9qb2ludDFfMADsAyhfZW1zY3JpcHRlbl9iaW5kX2IyUHVsbGV5Sm9pbnRfR2V0TmV4dF8wADoxX2Vtc2NyaXB0ZW5fYmluZF9iMlByaXNtYXRpY0pvaW50X0dldE1vdG9yRm9yY2VfMQC2CSVfZW1zY3JpcHRlbl9iaW5kX2IyQm9keV9TZXRVc2VyRGF0YV8xAIsDJ19lbXNjcmlwdGVuX2JpbmRfYjJHZWFySm9pbnRfSXNBY3RpdmVfMAA9J19lbXNjcmlwdGVuX2JpbmRfYjJKb2ludERlZl9nZXRfYm9keUJfMAA6OF9lbXNjcmlwdGVuX2JpbmRfYjJQdWxsZXlKb2ludERlZl9nZXRfY29sbGlkZUNvbm5lY3RlZF8wAEYoX2Vtc2NyaXB0ZW5fYmluZF9iMkZpeHR1cmVfR2V0TWFzc0RhdGFfMQB4KV9lbXNjcmlwdGVuX2JpbmRfYjJDb250YWN0RWRnZV9zZXRfbmV4dF8xAEUvX2Vtc2NyaXB0ZW5fYmluZF9iMlJldm9sdXRlSm9pbnREZWZfc2V0X2JvZHlBXzEARCtfZW1zY3JpcHRlbl9iaW5kX2IyQm9keURlZl9zZXRfYWxsb3dTbGVlcF8xALgBKF9lbXNjcmlwdGVuX2JpbmRfYjJQdWxsZXlKb2ludF9HZXRUeXBlXzAAMTJfZW1zY3JpcHRlbl9iaW5kX2IyV2VsZEpvaW50RGVmX3NldF9sb2NhbEFuY2hvckFfMQD0ASVfZW1zY3JpcHRlbl9iaW5kX2IyUHJvZmlsZV9zZXRfc3RlcF8xAIUJKl9lbXNjcmlwdGVuX2JpbmRfYjJDb250YWN0RWRnZV9zZXRfb3RoZXJfMQBCMl9lbXNjcmlwdGVuX2JpbmRfYjJQdWxsZXlKb2ludF9HZXRDdXJyZW50TGVuZ3RoQl8wALcJIF9lbXNjcmlwdGVuX2JpbmRfYjJWZWMyX29wX211bF8xALgJL19lbXNjcmlwdGVuX2JpbmRfYjJNb3VzZUpvaW50RGVmX3NldF91c2VyRGF0YV8xADAnX2Vtc2NyaXB0ZW5fYmluZF9iMk1vdG9ySm9pbnRfR2V0VHlwZV8wADEpX2Vtc2NyaXB0ZW5fYmluZF9iMlJvcGVKb2ludF9HZXRBbmNob3JBXzAAggMrX2Vtc2NyaXB0ZW5fYmluZF9iMlJldm9sdXRlSm9pbnRfR2V0Qm9keUJfMAA1Kl9lbXNjcmlwdGVuX2JpbmRfYjJXb3JsZF9HZXRDb250YWN0Q291bnRfMACwAjdfZW1zY3JpcHRlbl9iaW5kX2IyTW90b3JKb2ludERlZl9zZXRfY29ycmVjdGlvbkZhY3Rvcl8xALkJNV9lbXNjcmlwdGVuX2JpbmRfYjJNYW5pZm9sZFBvaW50X3NldF90YW5nZW50SW1wdWxzZV8xAIEJLF9lbXNjcmlwdGVuX2JpbmRfYjJHZWFySm9pbnREZWZfc2V0X2pvaW50Ml8xAO8DLF9lbXNjcmlwdGVuX2JpbmRfYjJQdWxsZXlKb2ludF9HZXRVc2VyRGF0YV8wADsvX2Vtc2NyaXB0ZW5fYmluZF9iMlB1bGxleUpvaW50RGVmX19fZGVzdHJveV9fXzAASChfZW1zY3JpcHRlbl9iaW5kX2IyTW91c2VKb2ludF9HZXRCb2R5Ql8wADUrX2Vtc2NyaXB0ZW5fYmluZF9iMlBvbHlnb25TaGFwZV9UZXN0UG9pbnRfMgBKLF9lbXNjcmlwdGVuX2JpbmRfYjJFZGdlU2hhcGVfc2V0X21fdmVydGV4M18xAIcCMF9lbXNjcmlwdGVuX2JpbmRfYjJQb2x5Z29uU2hhcGVfYjJQb2x5Z29uU2hhcGVfMACFAyVfZW1zY3JpcHRlbl9iaW5kX2IyUG9seWdvblNoYXBlX1NldF8yAIYDMV9lbXNjcmlwdGVuX2JpbmRfYjJXaGVlbEpvaW50X1NldE1heE1vdG9yVG9ycXVlXzEAugkvX2Vtc2NyaXB0ZW5fYmluZF9iMkdlYXJKb2ludF9HZXRSZWFjdGlvbkZvcmNlXzEAuwk2X2Vtc2NyaXB0ZW5fYmluZF9iMkRpc3RhbmNlSm9pbnREZWZfZ2V0X2xvY2FsQW5jaG9yQV8wAPMBKF9lbXNjcmlwdGVuX2JpbmRfYjJNYXNzRGF0YV9zZXRfY2VudGVyXzEAsgEsX2Vtc2NyaXB0ZW5fYmluZF9iMkNvbnRhY3RfU2V0VGFuZ2VudFNwZWVkXzEAvAk2X2Vtc2NyaXB0ZW5fYmluZF9iMkZyaWN0aW9uSm9pbnREZWZfZ2V0X2xvY2FsQW5jaG9yQl8wAPUBJ19lbXNjcmlwdGVuX2JpbmRfYjJCb2R5RGVmX2dldF9hY3RpdmVfMAC+ASxfZW1zY3JpcHRlbl9iaW5kX2IyQm9keV9HZXRBbmd1bGFyVmVsb2NpdHlfMAD5CChfZW1zY3JpcHRlbl9iaW5kX2IyQ2lyY2xlU2hhcGVfc2V0X21fcF8xAOMCLV9lbXNjcmlwdGVuX2JpbmRfYjJXaGVlbEpvaW50RGVmX0luaXRpYWxpemVfNADdAjJfZW1zY3JpcHRlbl9iaW5kX2IyV2VsZEpvaW50RGVmX3NldF9kYW1waW5nUmF0aW9fMQCECStfZW1zY3JpcHRlbl9iaW5kX2IyQm9keV9TZXRMaW5lYXJWZWxvY2l0eV8xAMEDNF9lbXNjcmlwdGVuX2JpbmRfYjJQcmlzbWF0aWNKb2ludF9TZXRNYXhNb3RvckZvcmNlXzEAvQkzX2Vtc2NyaXB0ZW5fYmluZF9iMlByaXNtYXRpY0pvaW50RGVmX2dldF91c2VyRGF0YV8wADEtX2Vtc2NyaXB0ZW5fYmluZF9iMkNvbnRhY3RGZWF0dXJlX3NldF90eXBlQl8xAM0BK19lbXNjcmlwdGVuX2JpbmRfYjJSZXZvbHV0ZUpvaW50X0dldEJvZHlBXzAANCVfZW1zY3JpcHRlbl9iaW5kX2IyQ29udGFjdElEX3NldF9jZl8xAM4CJl9lbXNjcmlwdGVuX2JpbmRfYjJXb3JsZF9HZXRCb2R5TGlzdF8wAKICKV9lbXNjcmlwdGVuX2JpbmRfYjJCb2R5X0dldEdyYXZpdHlTY2FsZV8wAL4JKV9lbXNjcmlwdGVuX2JpbmRfYjJDb250YWN0RWRnZV9zZXRfcHJldl8xAEQ0X2Vtc2NyaXB0ZW5fYmluZF9iMlJldm9sdXRlSm9pbnRfR2V0TWF4TW90b3JUb3JxdWVfMACVCSRfZW1zY3JpcHRlbl9iaW5kX2IyRml4dHVyZV9HZXROZXh0XzAAMTZfZW1zY3JpcHRlbl9iaW5kX2IyRnJpY3Rpb25Kb2ludERlZl9zZXRfbG9jYWxBbmNob3JCXzEA9gEpX2Vtc2NyaXB0ZW5fYmluZF9iMkNvbnRhY3RFZGdlX2dldF9uZXh0XzAAOipfZW1zY3JpcHRlbl9iaW5kX2IyQ2hhaW5TaGFwZV9nZXRfbV90eXBlXzAAMStfZW1zY3JpcHRlbl9iaW5kX2IyR2VhckpvaW50RGVmX2dldF9ib2R5QV8wAEM1X2Vtc2NyaXB0ZW5fYmluZF9iMkRpc3RhbmNlSm9pbnREZWZfc2V0X2ZyZXF1ZW5jeUh6XzEAuQk2X2Vtc2NyaXB0ZW5fYmluZF9iMlJldm9sdXRlSm9pbnREZWZfZ2V0X2xvY2FsQW5jaG9yQl8wAPUBOF9lbXNjcmlwdGVuX2JpbmRfYjJSZXZvbHV0ZUpvaW50RGVmX2dldF9yZWZlcmVuY2VBbmdsZV8wAKUJLl9lbXNjcmlwdGVuX2JpbmRfSlNDb250YWN0RmlsdGVyX19fZGVzdHJveV9fXzAALwdfbWVtc2V0AJUGLl9lbXNjcmlwdGVuX2JpbmRfYjJQb2x5Z29uU2hhcGVfZ2V0X21fcmFkaXVzXzAAowksX2Vtc2NyaXB0ZW5fZW51bV9iMkJvZHlUeXBlX2IyX2tpbmVtYXRpY0JvZHkAgQQrX2Vtc2NyaXB0ZW5fYmluZF9iMlJvcGVKb2ludERlZl9nZXRfYm9keUFfMABDJ19lbXNjcmlwdGVuX2VudW1fYjJNYW5pZm9sZFR5cGVfZV9mYWNlQQCBBCdfZW1zY3JpcHRlbl9lbnVtX2IyTWFuaWZvbGRUeXBlX2VfZmFjZUIAggQsX2Vtc2NyaXB0ZW5fYmluZF9iMkZpeHR1cmVEZWZfYjJGaXh0dXJlRGVmXzAA7AEvX2Vtc2NyaXB0ZW5fYmluZF9iMlByaXNtYXRpY0pvaW50X1NldFVzZXJEYXRhXzEAPC9fZW1zY3JpcHRlbl9iaW5kX2IyRWRnZVNoYXBlX2dldF9tX2hhc1ZlcnRleDNfMACOAzRfZW1zY3JpcHRlbl9iaW5kX2IyTWFuaWZvbGRQb2ludF9nZXRfbm9ybWFsSW1wdWxzZV8wAKMJI19lbXNjcmlwdGVuX2VudW1fYjJTaGFwZVR5cGVfZV9lZGdlAIEEK19lbXNjcmlwdGVuX2JpbmRfYjJNb3RvckpvaW50RGVmX3NldF90eXBlXzEAQidfZW1zY3JpcHRlbl9iaW5kX2IyQm9keURlZl9zZXRfYWN0aXZlXzEAvwE2X2Vtc2NyaXB0ZW5fYmluZF9iMkRpc3RhbmNlSm9pbnREZWZfc2V0X2xvY2FsQW5jaG9yQl8xAPYBJ19lbXNjcmlwdGVuX2JpbmRfYjJCb2R5X0dldFdvcmxkUG9pbnRfMQDOAytfZW1zY3JpcHRlbl9iaW5kX2IyR2VhckpvaW50RGVmX2dldF9ib2R5Ql8wADowX2Vtc2NyaXB0ZW5fYmluZF9KU0NvbnRhY3RGaWx0ZXJfU2hvdWxkQ29sbGlkZV8yAJEDKl9lbXNjcmlwdGVuX2JpbmRfYjJKb2ludEVkZ2VfYjJKb2ludEVkZ2VfMADgAS9fZW1zY3JpcHRlbl9iaW5kX2IyUmV2b2x1dGVKb2ludERlZl9nZXRfYm9keUFfMABDLF9lbXNjcmlwdGVuX2JpbmRfYjJKb2ludF9HZXRSZWFjdGlvblRvcnF1ZV8xAIAJLl9lbXNjcmlwdGVuX2JpbmRfYjJSZXZvbHV0ZUpvaW50RGVmX3NldF90eXBlXzEAQjBfZW1zY3JpcHRlbl9iaW5kX2IyUm9wZUpvaW50RGVmX2IyUm9wZUpvaW50RGVmXzAA/QMuX2Vtc2NyaXB0ZW5fYmluZF9iMkJvZHlEZWZfZ2V0X2xpbmVhckRhbXBpbmdfMACsCR9fZW1zY3JpcHRlbl9iaW5kX2IyV29ybGRfU3RlcF8zAL8JKF9lbXNjcmlwdGVuX2JpbmRfYjJDaXJjbGVTaGFwZV9SYXlDYXN0XzQASyVfZW1zY3JpcHRlbl9iaW5kX2IyUHJvZmlsZV9nZXRfc3RlcF8wAIYJIV9lbXNjcmlwdGVuX2JpbmRfYjJBQUJCX1JheUNhc3RfMgDoASxfZW1zY3JpcHRlbl9iaW5kX2IyRGlzdGFuY2VKb2ludF9HZXRMZW5ndGhfMACVCStfZW1zY3JpcHRlbl9iaW5kX2IyUHVsbGV5Sm9pbnRfR2V0TGVuZ3RoQl8wAMAJLF9lbXNjcmlwdGVuX2JpbmRfYjJGaWx0ZXJfc2V0X2NhdGVnb3J5Qml0c18xAIMBK19lbXNjcmlwdGVuX2JpbmRfYjJNb3RvckpvaW50X0dldFVzZXJEYXRhXzAAOzRfZW1zY3JpcHRlbl9iaW5kX2IyRnJpY3Rpb25Kb2ludF9HZXRSZWFjdGlvblRvcnF1ZV8xAIAJJV9lbXNjcmlwdGVuX2JpbmRfYjJTaGFwZV9nZXRfbV90eXBlXzAAMS9fZW1zY3JpcHRlbl9iaW5kX2IyTW91c2VKb2ludF9TZXREYW1waW5nUmF0aW9fMQDBCS1fZW1zY3JpcHRlbl9iaW5kX2IyV29ybGRfR2V0QXV0b0NsZWFyRm9yY2VzXzAAuAIlX2Vtc2NyaXB0ZW5fZW51bV9iMlNoYXBlVHlwZV9lX2NpcmNsZQCABC5fZW1zY3JpcHRlbl9iaW5kX2IyQm9keURlZl9zZXRfZml4ZWRSb3RhdGlvbl8xALsBIF9lbXNjcmlwdGVuX2JpbmRfYjJWZWMyX2IyVmVjMl8yAMIJJl9lbXNjcmlwdGVuX2JpbmRfYjJNYW5pZm9sZF9nZXRfdHlwZV8wAIACMF9lbXNjcmlwdGVuX2JpbmRfYjJSZXZvbHV0ZUpvaW50X0dldExvd2VyTGltaXRfMACICTJfZW1zY3JpcHRlbl9iaW5kX2IyV2VsZEpvaW50X0dldENvbGxpZGVDb25uZWN0ZWRfMAA+MF9lbXNjcmlwdGVuX2JpbmRfSlNDb250YWN0TGlzdGVuZXJfX19kZXN0cm95X19fMAAvL19lbXNjcmlwdGVuX2JpbmRfYjJCb2R5RGVmX3NldF9saW5lYXJWZWxvY2l0eV8xALQBMl9lbXNjcmlwdGVuX2JpbmRfYjJKb2ludERlZl9zZXRfY29sbGlkZUNvbm5lY3RlZF8xAEcrX2Vtc2NyaXB0ZW5fYmluZF9iMk1vdG9ySm9pbnRfX19kZXN0cm95X19fMABgK19lbXNjcmlwdGVuX2JpbmRfYjJCb2R5X0dldEFuZ3VsYXJEYW1waW5nXzAApwkkX2Vtc2NyaXB0ZW5fYmluZF9iMkZpeHR1cmVfUmF5Q2FzdF8zAHcrX2Vtc2NyaXB0ZW5fYmluZF9iMlByb2ZpbGVfc2V0X2Jyb2FkcGhhc2VfMQDDCTZfZW1zY3JpcHRlbl9iaW5kX2IyR2VhckpvaW50RGVmX2dldF9jb2xsaWRlQ29ubmVjdGVkXzAARi9fZW1zY3JpcHRlbl9iaW5kX2IyUm9wZUpvaW50RGVmX2dldF9tYXhMZW5ndGhfMAClCSxfZW1zY3JpcHRlbl9iaW5kX2IyTW91c2VKb2ludERlZl9nZXRfYm9keUFfMABDI19lbXNjcmlwdGVuX2JpbmRfYjJCb2R5X1NldEJ1bGxldF8xANYDKl9lbXNjcmlwdGVuX2JpbmRfYjJEaXN0YW5jZUpvaW50X0dldFR5cGVfMAAxL19lbXNjcmlwdGVuX2JpbmRfYjJGaXh0dXJlRGVmX2dldF9yZXN0aXR1dGlvbl8wAMQJJF9lbXNjcmlwdGVuX2JpbmRfYjJGaXh0dXJlX0dldFR5cGVfMABuNl9lbXNjcmlwdGVuX2JpbmRfYjJSZXZvbHV0ZUpvaW50RGVmX2dldF9sb2NhbEFuY2hvckFfMADzAS1fZW1zY3JpcHRlbl9iaW5kX2IyUHVsbGV5Sm9pbnREZWZfc2V0X2JvZHlBXzEARCpfZW1zY3JpcHRlbl9iaW5kX2IyUHJvZmlsZV9zZXRfc29sdmVJbml0XzEAgQkqX2Vtc2NyaXB0ZW5fYmluZF9iMlJvcGVKb2ludERlZl9zZXRfdHlwZV8xAEIwX2Vtc2NyaXB0ZW5fYmluZF9iMlByaXNtYXRpY0pvaW50RGVmX2dldF9ib2R5Ql8wADowX2Vtc2NyaXB0ZW5fYmluZF9iMlB1bGxleUpvaW50RGVmX2dldF91c2VyRGF0YV8wADEwX2Vtc2NyaXB0ZW5fYmluZF9iMlByaXNtYXRpY0pvaW50RGVmX3NldF9ib2R5Ql8xAEU4X2Vtc2NyaXB0ZW5fYmluZF9iMkZyaWN0aW9uSm9pbnREZWZfYjJGcmljdGlvbkpvaW50RGVmXzAA8QEgX2Vtc2NyaXB0ZW5fYmluZF9iMlZlYzJfb3Bfc3ViXzEA0gEFX2ZyZWUA8wUsX2Vtc2NyaXB0ZW5fYmluZF9iMk1vdXNlSm9pbnRfR2V0RnJlcXVlbmN5XzAAlwkyX2Vtc2NyaXB0ZW5fYmluZF9iMlB1bGxleUpvaW50X0dldEN1cnJlbnRMZW5ndGhBXzAAxQktX2Vtc2NyaXB0ZW5fYmluZF9iMk1hbmlmb2xkX2dldF9sb2NhbE5vcm1hbF8wAPwBIF9lbXNjcmlwdGVuX2JpbmRfYjJWZWMzX2IyVmVjM18wANkBLF9lbXNjcmlwdGVuX2JpbmRfYjJCb2R5X1NldFNsZWVwaW5nQWxsb3dlZF8xANgDJ19lbXNjcmlwdGVuX2JpbmRfYjJSb3BlSm9pbnRfR2V0Qm9keUJfMAA1Ll9lbXNjcmlwdGVuX2JpbmRfYjJQcmlzbWF0aWNKb2ludF9HZXRBbmNob3JBXzAAywIsX2Vtc2NyaXB0ZW5fYmluZF9iMk1hbmlmb2xkX3NldF9wb2ludENvdW50XzEAgwIyX2Vtc2NyaXB0ZW5fYmluZF9iMlByaXNtYXRpY0pvaW50X0lzTW90b3JFbmFibGVkXzAAxAIrX2Vtc2NyaXB0ZW5fYmluZF9iMldlbGRKb2ludF9HZXRGcmVxdWVuY3lfMADGCS5fZW1zY3JpcHRlbl9iaW5kX2IyV2VsZEpvaW50X0dldExvY2FsQW5jaG9yQl8wAFYmX2Vtc2NyaXB0ZW5fYmluZF9iMkpvaW50X0dldFVzZXJEYXRhXzAAOypfZW1zY3JpcHRlbl9iaW5kX2IyV2hlZWxKb2ludF9HZXRBbmNob3JCXzAApAMrX2Vtc2NyaXB0ZW5fYmluZF9iMlB1bGxleUpvaW50X0dldEFuY2hvckJfMACsAyZfZW1zY3JpcHRlbl9iaW5kX2IyTWFuaWZvbGRfc2V0X3R5cGVfMQCBAiBfZW1zY3JpcHRlbl9iaW5kX2IyVmVjM19iMlZlYzNfMwDHCS9fZW1zY3JpcHRlbl9iaW5kX2IyUm9wZUpvaW50RGVmX3NldF9tYXhMZW5ndGhfMQC0CSxfZW1zY3JpcHRlbl9iaW5kX2IyUHJpc21hdGljSm9pbnRfR2V0Qm9keUJfMAA1KV9lbXNjcmlwdGVuX2JpbmRfYjJDaGFpblNoYXBlX1Rlc3RQb2ludF8yAEo1X2Vtc2NyaXB0ZW5fYmluZF9iMlByaXNtYXRpY0pvaW50X0dldFJlZmVyZW5jZUFuZ2xlXzAAyAkoX2Vtc2NyaXB0ZW5fYmluZF9iMlJheUNhc3RJbnB1dF9nZXRfcDJfMADqAShfZW1zY3JpcHRlbl9iaW5kX2IyU2hhcGVfR2V0Q2hpbGRDb3VudF8wAEkmX2Vtc2NyaXB0ZW5fYmluZF9iMkJvZHlEZWZfc2V0X2FuZ2xlXzEAgQkqX2Vtc2NyaXB0ZW5fYmluZF9iMldlbGRKb2ludF9HZXRVc2VyRGF0YV8wADszX2Vtc2NyaXB0ZW5fYmluZF9iMldoZWVsSm9pbnREZWZfZ2V0X2xvY2FsQW5jaG9yQV8wAPMBLF9lbXNjcmlwdGVuX2JpbmRfYjJQdWxsZXlKb2ludERlZl9zZXRfdHlwZV8xAEIiX2Vtc2NyaXB0ZW5fYmluZF9iMkJvZHlfSXNCdWxsZXRfMADXAyxfZW1zY3JpcHRlbl9iaW5kX2IyTW90b3JKb2ludERlZl9zZXRfYm9keUFfMQBEKl9lbXNjcmlwdGVuX2JpbmRfYjJNYXQzM19HZXRTeW1JbnZlcnNlMzNfMQBnJV9lbXNjcmlwdGVuX2JpbmRfYjJXb3JsZF9DcmVhdGVCb2R5XzEAmQIsX2Vtc2NyaXB0ZW5fYmluZF9iMkJvZHlfQXBwbHlMaW5lYXJJbXB1bHNlXzMAxwMtX2Vtc2NyaXB0ZW5fYmluZF9iMlBvbHlnb25TaGFwZV9Db21wdXRlTWFzc18yAMkJO19lbXNjcmlwdGVuX2JpbmRfYjJQcmlzbWF0aWNKb2ludERlZl9zZXRfdXBwZXJUcmFuc2xhdGlvbl8xAJoJLF9lbXNjcmlwdGVuX2JpbmRfYjJNb3VzZUpvaW50X1NldEZyZXF1ZW5jeV8xAMoJKl9lbXNjcmlwdGVuX2JpbmRfYjJSb3BlSm9pbnRfX19kZXN0cm95X19fMABgJl9lbXNjcmlwdGVuX2JpbmRfYjJCb2R5RGVmX3NldF9hd2FrZV8xALoBH19lbXNjcmlwdGVuX2JpbmRfYjJWZWMyX2dldF95XzAA+ggnX2Vtc2NyaXB0ZW5fYmluZF9iMkJvZHlfQ3JlYXRlRml4dHVyZV8xAL0DJ19lbXNjcmlwdGVuX2JpbmRfYjJCb2R5X0NyZWF0ZUZpeHR1cmVfMgDLCSNfZW1zY3JpcHRlbl9iaW5kX2IyQm9keV9TZXRBY3RpdmVfMQDcAytfZW1zY3JpcHRlbl9iaW5kX2IyV2hlZWxKb2ludF9fX2Rlc3Ryb3lfX18wAGAnX2Vtc2NyaXB0ZW5fYmluZF9iMldvcmxkX0Rlc3Ryb3lKb2ludF8xAJwCLV9lbXNjcmlwdGVuX2JpbmRfYjJQb2x5Z29uU2hhcGVfQ29tcHV0ZUFBQkJfMwBMLV9lbXNjcmlwdGVuX2JpbmRfYjJDb250YWN0RmVhdHVyZV9nZXRfdHlwZUFfMADKAS9fZW1zY3JpcHRlbl9iaW5kX2IyTW91c2VKb2ludERlZl9zZXRfbWF4Rm9yY2VfMQCqCTNfZW1zY3JpcHRlbl9iaW5kX2IyUHJpc21hdGljSm9pbnRfR2V0TG9jYWxBbmNob3JBXzAAngEoX2Vtc2NyaXB0ZW5fYmluZF9iMkVkZ2VTaGFwZV9UZXN0UG9pbnRfMgBKB19tZW1jcHkAlgYwX2Vtc2NyaXB0ZW5fYmluZF9iMlBvbHlnb25TaGFwZV9nZXRfbV9jZW50cm9pZF8wAGorX2Vtc2NyaXB0ZW5fYmluZF9iMkNoYWluU2hhcGVfX19kZXN0cm95X19fMAAvKl9lbXNjcmlwdGVuX2JpbmRfYjJHZWFySm9pbnRfU2V0VXNlckRhdGFfMQA8H19lbXNjcmlwdGVuX2JpbmRfYjJWZWMzX3NldF96XzEAkgk2X2Vtc2NyaXB0ZW5fYmluZF9iMlByaXNtYXRpY0pvaW50RGVmX3NldF9lbmFibGVMaW1pdF8xAIsCL19lbXNjcmlwdGVuX2JpbmRfYjJEaXN0YW5jZUpvaW50X0dldEZyZXF1ZW5jeV8wAMYJKV9lbXNjcmlwdGVuX2JpbmRfYjJCb2R5X1NldEdyYXZpdHlTY2FsZV8xAMwJLF9lbXNjcmlwdGVuX2VudW1fYjJDb250YWN0RmVhdHVyZVR5cGVfZV9mYWNlAIEEL19lbXNjcmlwdGVuX2JpbmRfYjJCb2R5RGVmX2dldF9saW5lYXJWZWxvY2l0eV8wALMBLl9lbXNjcmlwdGVuX2JpbmRfYjJXaGVlbEpvaW50X0lzTW90b3JFbmFibGVkXzAAngMvX2Vtc2NyaXB0ZW5fYmluZF9iMlB1bGxleUpvaW50RGVmX2dldF9sZW5ndGhBXzAAjwkfX2Vtc2NyaXB0ZW5fYmluZF9iMlZlYzNfc2V0X3hfMQCFCSFfZW1zY3JpcHRlbl9iaW5kX2IyTWF0MzNfZ2V0X2V4XzAAaDhfZW1zY3JpcHRlbl9iaW5kX0pTRGVzdHJ1Y3Rpb25MaXN0ZW5lcl9TYXlHb29kYnllSm9pbnRfMQBRJl9lbXNjcmlwdGVuX2JpbmRfYjJTaGFwZV9fX2Rlc3Ryb3lfX18wAC8mX2Vtc2NyaXB0ZW5fYmluZF9iMk1hdDIyX19fZGVzdHJveV9fXzAASCxfZW1zY3JpcHRlbl9iaW5kX2IyRml4dHVyZURlZl9zZXRfZnJpY3Rpb25fMQCSCSpfZW1zY3JpcHRlbl9iaW5kX2IyQ29udGFjdElEX19fZGVzdHJveV9fXzAASDRfZW1zY3JpcHRlbl9iaW5kX2IyRGVzdHJ1Y3Rpb25MaXN0ZW5lcl9fX2Rlc3Ryb3lfX18wAC8yX2Vtc2NyaXB0ZW5fYmluZF9KU1JheUNhc3RDYWxsYmFja19SZXBvcnRGaXh0dXJlXzQAzQkzX2Vtc2NyaXB0ZW5fYmluZF9iMk1vdG9ySm9pbnREZWZfZ2V0X2xpbmVhck9mZnNldF8wAPMBJV9lbXNjcmlwdGVuX2JpbmRfYjJEcmF3X19fZGVzdHJveV9fXzAALy5fZW1zY3JpcHRlbl9iaW5kX2IyUHJpc21hdGljSm9pbnRfR2V0QW5jaG9yQl8wAMwCLV9lbXNjcmlwdGVuX2JpbmRfYjJQb2x5Z29uU2hhcGVfZ2V0X21fY291bnRfMACJAylfZW1zY3JpcHRlbl9lbnVtX2IyQm9keVR5cGVfYjJfc3RhdGljQm9keQCABClfZW1zY3JpcHRlbl9iaW5kX2IyV2VsZEpvaW50X0dldEFuY2hvckJfMADuAi5fZW1zY3JpcHRlbl9iaW5kX2IyUmV2b2x1dGVKb2ludERlZl9nZXRfdHlwZV8wAEEqX2Vtc2NyaXB0ZW5fYmluZF9iMkdlYXJKb2ludERlZl9nZXRfdHlwZV8wAEEnX2Vtc2NyaXB0ZW5fYmluZF9iMkNoYWluU2hhcGVfR2V0VHlwZV8wADExX2Vtc2NyaXB0ZW5fYmluZF9iMlJheUNhc3RJbnB1dF9nZXRfbWF4RnJhY3Rpb25fMACMCSdfZW1zY3JpcHRlbl9iaW5kX2IyR2VhckpvaW50X0dldEJvZHlBXzAANChfZW1zY3JpcHRlbl9iaW5kX2IyQm9keV9HZXRMb2NhbFZlY3Rvcl8xANEDL19lbXNjcmlwdGVuX2JpbmRfYjJQcmlzbWF0aWNKb2ludF9FbmFibGVMaW1pdF8xAMACMl9lbXNjcmlwdGVuX2JpbmRfYjJGcmljdGlvbkpvaW50RGVmX2dldF9tYXhGb3JjZV8wAKUJMF9lbXNjcmlwdGVuX2JpbmRfYjJCb2R5RGVmX3NldF9hbmd1bGFyVmVsb2NpdHlfMQDDCSpfZW1zY3JpcHRlbl9iaW5kX2IyQm9keV9TZXRMaW5lYXJEYW1waW5nXzEAzgkoX2Vtc2NyaXB0ZW5fYmluZF9iMldoZWVsSm9pbnRfR2V0Qm9keUJfMAA1LF9lbXNjcmlwdGVuX2JpbmRfYjJHZWFySm9pbnREZWZfZ2V0X2pvaW50Ml8wAO4DLF9lbXNjcmlwdGVuX2JpbmRfYjJQcmlzbWF0aWNKb2ludF9Jc0FjdGl2ZV8wAD0fX2Vtc2NyaXB0ZW5fYmluZF9iMlZlYzNfZ2V0X3pfMACjCShfZW1zY3JpcHRlbl9iaW5kX2IyTW90b3JKb2ludF9Jc0FjdGl2ZV8wAD0oX2Vtc2NyaXB0ZW5fZW51bV9iMkpvaW50VHlwZV9lX3dlbGRKb2ludACIBC9fZW1zY3JpcHRlbl9iaW5kX2IyV29ybGRfU2V0Q29udGludW91c1BoeXNpY3NfMQCpAi1fZW1zY3JpcHRlbl9iaW5kX2IyTW91c2VKb2ludERlZl9nZXRfdGFyZ2V0XzAA8wEmX2Vtc2NyaXB0ZW5fYmluZF9iMkJvZHlfU2V0VHJhbnNmb3JtXzIAzwkwX2Vtc2NyaXB0ZW5fYmluZF9iMk1vdG9ySm9pbnREZWZfc2V0X21heFRvcnF1ZV8xALQJMl9lbXNjcmlwdGVuX2JpbmRfYjJGcmljdGlvbkpvaW50RGVmX3NldF9tYXhGb3JjZV8xALQJOF9lbXNjcmlwdGVuX2JpbmRfYjJEaXN0YW5jZUpvaW50RGVmX2IyRGlzdGFuY2VKb2ludERlZl8wALsDMF9lbXNjcmlwdGVuX2JpbmRfYjJQb2x5Z29uU2hhcGVfc2V0X21fY2VudHJvaWRfMQDjAidfZW1zY3JpcHRlbl9iaW5kX2IyTWF0MzNfR2V0SW52ZXJzZTIyXzEAZipfZW1zY3JpcHRlbl9iaW5kX2IyUG9seWdvblNoYXBlX1NldEFzQm94XzQA0AksX2Vtc2NyaXB0ZW5fYmluZF9iMkVkZ2VTaGFwZV9nZXRfbV92ZXJ0ZXgyXzAA8wExX2Vtc2NyaXB0ZW5fYmluZF9iMldoZWVsSm9pbnRfR2V0UmVhY3Rpb25Ub3JxdWVfMQCACTdfZW1zY3JpcHRlbl9iaW5kX2IyV2hlZWxKb2ludERlZl9zZXRfY29sbGlkZUNvbm5lY3RlZF8xAEctX2Vtc2NyaXB0ZW5fYmluZF9iMkNvbnRhY3RGZWF0dXJlX3NldF90eXBlQV8xAMsBIV9lbXNjcmlwdGVuX2JpbmRfYjJGaXh0dXJlX0R1bXBfMQCAATVfZW1zY3JpcHRlbl9iaW5kX2IyUHJpc21hdGljSm9pbnRfR2V0UmVhY3Rpb25Ub3JxdWVfMQCACSxfZW1zY3JpcHRlbl9iaW5kX2IyTWFuaWZvbGRfc2V0X2xvY2FsUG9pbnRfMQD/AS5fZW1zY3JpcHRlbl9iaW5kX2IyRGlzdGFuY2VKb2ludF9TZXRVc2VyRGF0YV8xADwnX2Vtc2NyaXB0ZW5fYmluZF9iMkJvZHlEZWZfc2V0X2J1bGxldF8xAL0BLl9lbXNjcmlwdGVuX2JpbmRfYjJSYXlDYXN0T3V0cHV0X19fZGVzdHJveV9fXzAASChfZW1zY3JpcHRlbl9iaW5kX2IyV29ybGRfRHJhd0RlYnVnRGF0YV8wAJ8CEF9fX2N4YV9jYW5fY2F0Y2gAkgYyX2Vtc2NyaXB0ZW5fYmluZF9iMlJvcGVKb2ludERlZl9nZXRfbG9jYWxBbmNob3JBXzAA8wEuX2Vtc2NyaXB0ZW5fYmluZF9iMlByb2ZpbGVfc2V0X3NvbHZlVmVsb2NpdHlfMQDRCSNfZW1zY3JpcHRlbl9iaW5kX2IyQUFCQl9HZXRDZW50ZXJfMADiASpfZW1zY3JpcHRlbl9iaW5kX2IyRmlsdGVyX3NldF9ncm91cEluZGV4XzEAhwEoX2Vtc2NyaXB0ZW5fYmluZF9iMkpvaW50RGVmX2IySm9pbnREZWZfMABAHl9lbXNjcmlwdGVuX2JpbmRfYjJSb3Rfc2V0X2NfMQD7CDBfZW1zY3JpcHRlbl9iaW5kX2IyR2VhckpvaW50RGVmX2IyR2VhckpvaW50RGVmXzAA6wMsX2Vtc2NyaXB0ZW5fYmluZF9iMkVkZ2VTaGFwZV9nZXRfbV92ZXJ0ZXgwXzAA9QEzX2Vtc2NyaXB0ZW5fYmluZF9iMkRpc3RhbmNlSm9pbnRfR2V0UmVhY3Rpb25Gb3JjZV8xANIJMV9lbXNjcmlwdGVuX2JpbmRfYjJQcmlzbWF0aWNKb2ludF9HZXRKb2ludFNwZWVkXzAA0wkyX2Vtc2NyaXB0ZW5fYmluZF9iMk1vdXNlSm9pbnREZWZfc2V0X2ZyZXF1ZW5jeUh6XzEA1AklX2Vtc2NyaXB0ZW5fYmluZF9iMkpvaW50X0dldEFuY2hvckFfMAA2K19lbXNjcmlwdGVuX2JpbmRfYjJDb250YWN0X0dldFJlc3RpdHV0aW9uXzAAvgksX2Vtc2NyaXB0ZW5fYmluZF9iMkNvbnRhY3RFZGdlX2dldF9jb250YWN0XzAAMTJfZW1zY3JpcHRlbl9iaW5kX2IyUmV2b2x1dGVKb2ludERlZl9nZXRfdXNlckRhdGFfMAAxJF9lbXNjcmlwdGVuX2JpbmRfYjJGaXh0dXJlX0dldEFBQkJfMQB/O19lbXNjcmlwdGVuX2JpbmRfYjJQcmlzbWF0aWNKb2ludERlZl9zZXRfY29sbGlkZUNvbm5lY3RlZF8xAEc1X2Vtc2NyaXB0ZW5fYmluZF9iMlByaXNtYXRpY0pvaW50RGVmX3NldF9sb2NhbEF4aXNBXzEAhwIsX2Vtc2NyaXB0ZW5fYmluZF9iMkNvbnRhY3RfR2V0VGFuZ2VudFNwZWVkXzAA1QksX2Vtc2NyaXB0ZW5fZW51bV9iMkxpbWl0U3RhdGVfZV9hdExvd2VyTGltaXQAgQQvX2Vtc2NyaXB0ZW5fYmluZF9iMk1vdG9ySm9pbnRfR2V0TGluZWFyT2Zmc2V0XzAAngEsX2Vtc2NyaXB0ZW5fYmluZF9iMldoZWVsSm9pbnREZWZfZ2V0X2JvZHlCXzAAOh5fZW1zY3JpcHRlbl9iaW5kX2IyUm90X3NldF9zXzEAhQkvX2Vtc2NyaXB0ZW5fYmluZF9iMkZyaWN0aW9uSm9pbnRfR2V0TWF4VG9ycXVlXzAAyAkqX2Vtc2NyaXB0ZW5fYmluZF9iMlJldm9sdXRlSm9pbnRfR2V0VHlwZV8wADEoX2Vtc2NyaXB0ZW5fYmluZF9iMkJvZHlfRGVzdHJveUZpeHR1cmVfMQC/AydfZW1zY3JpcHRlbl9iaW5kX2IySm9pbnREZWZfc2V0X2JvZHlBXzEARDNfZW1zY3JpcHRlbl9iaW5kX2IyV2hlZWxKb2ludERlZl9nZXRfbG9jYWxBbmNob3JCXzAA9QEtX2Vtc2NyaXB0ZW5fYmluZF9iMkNvbnRhY3RJbXB1bHNlX2dldF9jb3VudF8wAFMoX2Vtc2NyaXB0ZW5fYmluZF9iMldvcmxkX0dldEpvaW50Q291bnRfMACvAi1fZW1zY3JpcHRlbl9iaW5kX2IyV2hlZWxKb2ludF9HZXRNb3RvclNwZWVkXzAA1gkzX2Vtc2NyaXB0ZW5fYmluZF9iMldoZWVsSm9pbnREZWZfZ2V0X2RhbXBpbmdSYXRpb18wAJgJL19lbXNjcmlwdGVuX2JpbmRfYjJSYXlDYXN0T3V0cHV0X2dldF9mcmFjdGlvbl8wAKMJKV9lbXNjcmlwdGVuX2VudW1fYjJNYW5pZm9sZFR5cGVfZV9jaXJjbGVzAIAEJ19lbXNjcmlwdGVuX2JpbmRfYjJHZWFySm9pbnRfU2V0UmF0aW9fMQDXCSVfZW1zY3JpcHRlbl9iaW5kX0pTRHJhd19EcmF3UG9seWdvbl8zAJYDJ19lbXNjcmlwdGVuX2JpbmRfYjJGaWx0ZXJfX19kZXN0cm95X19fMABIJ19lbXNjcmlwdGVuX2JpbmRfYjJKb2ludEVkZ2Vfc2V0X25leHRfMQBFFl9fX2N4YV9pc19wb2ludGVyX3R5cGUAkwYuX2Vtc2NyaXB0ZW5fYmluZF9iMkJvZHlEZWZfZ2V0X2ZpeGVkUm90YXRpb25fMABwNV9lbXNjcmlwdGVuX2JpbmRfYjJQcmlzbWF0aWNKb2ludERlZl9zZXRfbW90b3JTcGVlZF8xAK0JLV9lbXNjcmlwdGVuX2JpbmRfYjJDaGFpblNoYXBlX1NldFByZXZWZXJ0ZXhfMQD8AixfZW1zY3JpcHRlbl9iaW5kX2IyRmlsdGVyX2dldF9jYXRlZ29yeUJpdHNfMACCATFfZW1zY3JpcHRlbl9iaW5kX2IyTW91c2VKb2ludF9HZXRSZWFjdGlvblRvcnF1ZV8xAIAJOl9lbXNjcmlwdGVuX2JpbmRfYjJEaXN0YW5jZUpvaW50RGVmX3NldF9jb2xsaWRlQ29ubmVjdGVkXzEARytfZW1zY3JpcHRlbl9iaW5kX2IyV2hlZWxKb2ludF9HZXRVc2VyRGF0YV8wADsgX2Vtc2NyaXB0ZW5fYmluZF9iMlZlYzNfb3Bfc3ViXzEA3gEvX2Vtc2NyaXB0ZW5fYmluZF9iMk1vdXNlSm9pbnRfR2V0RGFtcGluZ1JhdGlvXzAAwAkiX2Vtc2NyaXB0ZW5fYmluZF9iMlNoYXBlX0dldFR5cGVfMAAxIV9lbXNjcmlwdGVuX2JpbmRfYjJBQUJCX0lzVmFsaWRfMADhAShfZW1zY3JpcHRlbl9iaW5kX2IyV2hlZWxKb2ludF9HZXRCb2R5QV8wADQnX2Vtc2NyaXB0ZW5fYmluZF9KU0RyYXdfRHJhd1RyYW5zZm9ybV8xAJoDKl9lbXNjcmlwdGVuX2JpbmRfYjJXb3JsZF9HZXRXYXJtU3RhcnRpbmdfMACoAitfZW1zY3JpcHRlbl9iaW5kX2IyUHVsbGV5Sm9pbnRfR2V0TGVuZ3RoQV8wAJcJNV9lbXNjcmlwdGVuX2JpbmRfYjJEaXN0YW5jZUpvaW50RGVmX2dldF9mcmVxdWVuY3lIel8wAKkJMF9lbXNjcmlwdGVuX2JpbmRfYjJSZXZvbHV0ZUpvaW50X1NldE1vdG9yU3BlZWRfMQDYCSZfZW1zY3JpcHRlbl9iaW5kX2IyV29ybGRfX19kZXN0cm95X19fMAC7AjNfZW1zY3JpcHRlbl9iaW5kX2IyQ2hhaW5TaGFwZV9nZXRfbV9oYXNOZXh0VmVydGV4XzAAuQEtX2Vtc2NyaXB0ZW5fYmluZF9iMkNoYWluU2hhcGVfU2V0TmV4dFZlcnRleF8xAP0CIV9lbXNjcmlwdGVuX2JpbmRfYjJCb2R5X1NldFR5cGVfMQDVAyFfZW1zY3JpcHRlbl9iaW5kX2IyQm9keV9HZXRNYXNzXzAAjgkgX2Vtc2NyaXB0ZW5fYmluZF9iMkFBQkJfYjJBQUJCXzAA4AEeX2Vtc2NyaXB0ZW5fYmluZF9iMlJvdF9iMlJvdF8xANkJLF9lbXNjcmlwdGVuX2VudW1fYjJKb2ludFR5cGVfZV9kaXN0YW5jZUpvaW50AIMEM19lbXNjcmlwdGVuX2JpbmRfYjJDaGFpblNoYXBlX2dldF9tX2hhc1ByZXZWZXJ0ZXhfMAC3ASdfZW1zY3JpcHRlbl9iaW5kX2IyTW91c2VKb2ludF9HZXRUeXBlXzAAMS5fZW1zY3JpcHRlbl9iaW5kX0pTUXVlcnlDYWxsYmFja19fX2Rlc3Ryb3lfX18wAC8yX2Vtc2NyaXB0ZW5fYmluZF9iMldoZWVsSm9pbnREZWZfc2V0X2VuYWJsZU1vdG9yXzEA3wI0X2Vtc2NyaXB0ZW5fYmluZF9iMlJldm9sdXRlSm9pbnREZWZfc2V0X2xvd2VyQW5nbGVfMQCECSpfZW1zY3JpcHRlbl9iaW5kX2IySm9pbnRFZGdlX19fZGVzdHJveV9fXzAASClfZW1zY3JpcHRlbl9iaW5kX2IyUHVsbGV5Sm9pbnRfR2V0UmF0aW9fMADaCTFfZW1zY3JpcHRlbl9iaW5kX0pTQ29udGFjdExpc3RlbmVyX0JlZ2luQ29udGFjdF8xANACM19lbXNjcmlwdGVuX2JpbmRfYjJNb3RvckpvaW50RGVmX3NldF9saW5lYXJPZmZzZXRfMQD0ASlfZW1zY3JpcHRlbl9lbnVtX2IySm9pbnRUeXBlX2VfbW90b3JKb2ludACLBCdfZW1zY3JpcHRlbl9iaW5kX2IySm9pbnRFZGdlX2dldF9uZXh0XzAAOjFfZW1zY3JpcHRlbl9iaW5kX2IyUmF5Q2FzdElucHV0X3NldF9tYXhGcmFjdGlvbl8xANEJLF9lbXNjcmlwdGVuX2JpbmRfYjJXaGVlbEpvaW50RGVmX2dldF9ib2R5QV8wAEMoX2Vtc2NyaXB0ZW5fYmluZF9iMk1vdXNlSm9pbnRfR2V0Qm9keUFfMAA0Jl9lbXNjcmlwdGVuX2JpbmRfYjJCb2R5RGVmX2dldF9hd2FrZV8wALkBKl9lbXNjcmlwdGVuX2JpbmRfYjJQcm9maWxlX2dldF9zb2x2ZUluaXRfMADECTRfZW1zY3JpcHRlbl9iaW5kX2IyV2VsZEpvaW50RGVmX2dldF9yZWZlcmVuY2VBbmdsZV8wAKUJLl9lbXNjcmlwdGVuX2JpbmRfYjJSb3BlSm9pbnREZWZfc2V0X3VzZXJEYXRhXzEAMCVfZW1zY3JpcHRlbl9iaW5kX2IyRml4dHVyZV9Jc1NlbnNvcl8wAHAnX2Vtc2NyaXB0ZW5fYmluZF9iMldlbGRKb2ludF9HZXRCb2R5Ql8wADUoX2Vtc2NyaXB0ZW5fYmluZF9iMkNvbnRhY3RfU2V0RnJpY3Rpb25fMQDbCSRfZW1zY3JpcHRlbl9iaW5kX2IyUm90X19fZGVzdHJveV9fXzAASChfZW1zY3JpcHRlbl9iaW5kX2IyRmlsdGVyX2dldF9tYXNrQml0c18wAIQBKF9lbXNjcmlwdGVuX2JpbmRfYjJCb2R5X0dldEZpeHR1cmVMaXN0XzAA4AMsX2Vtc2NyaXB0ZW5fYmluZF9iMlB1bGxleUpvaW50X19fZGVzdHJveV9fXzAAYDNfZW1zY3JpcHRlbl9iaW5kX2IyTW91c2VKb2ludERlZl9zZXRfZGFtcGluZ1JhdGlvXzEAtAkwX2Vtc2NyaXB0ZW5fYmluZF9KU1JheUNhc3RDYWxsYmFja19fX2Rlc3Ryb3lfX18wAC8wX2Vtc2NyaXB0ZW5fYmluZF9iMkNvbnRhY3RMaXN0ZW5lcl9fX2Rlc3Ryb3lfX18wAC83X2Vtc2NyaXB0ZW5fYmluZF9iMlByaXNtYXRpY0pvaW50RGVmX3NldF9sb2NhbEFuY2hvckJfMQD2ASVfZW1zY3JpcHRlbl9lbnVtX2IyRHJhd0ZsYWdfZV9wYWlyQml0AIgELl9lbXNjcmlwdGVuX2JpbmRfYjJGcmljdGlvbkpvaW50X19fZGVzdHJveV9fXzAAYCNfZW1zY3JpcHRlbl9iaW5kX2IyV2VsZEpvaW50X0R1bXBfMAA/K19lbXNjcmlwdGVuX2JpbmRfYjJNb3RvckpvaW50X1NldE1heEZvcmNlXzEA3AkrX2Vtc2NyaXB0ZW5fYmluZF9iMldoZWVsSm9pbnREZWZfZ2V0X3R5cGVfMABBLF9lbXNjcmlwdGVuX2JpbmRfYjJDaXJjbGVTaGFwZV9Db21wdXRlQUFCQl8zAEwyX2Vtc2NyaXB0ZW5fYmluZF9iMkZyaWN0aW9uSm9pbnRfR2V0TG9jYWxBbmNob3JBXzAAngEoX2Vtc2NyaXB0ZW5fYmluZF9iMkpvaW50RWRnZV9nZXRfb3RoZXJfMABBNl9lbXNjcmlwdGVuX2JpbmRfYjJHZWFySm9pbnREZWZfc2V0X2NvbGxpZGVDb25uZWN0ZWRfMQBHMF9lbXNjcmlwdGVuX2JpbmRfYjJXZWxkSm9pbnREZWZfYjJXZWxkSm9pbnREZWZfMADkAiFfZW1zY3JpcHRlbl9iaW5kX2IyVmVjMl9Jc1ZhbGlkXzAA1wEwX2Vtc2NyaXB0ZW5fYmluZF9iMlByaXNtYXRpY0pvaW50RGVmX3NldF9ib2R5QV8xAEQrX2Vtc2NyaXB0ZW5fYmluZF9iMkZpeHR1cmVfU2V0UmVzdGl0dXRpb25fMQChCTNfZW1zY3JpcHRlbl9iaW5kX2IyV2hlZWxKb2ludERlZl9zZXRfbG9jYWxBbmNob3JCXzEA9gE1X2Vtc2NyaXB0ZW5fYmluZF9iMlJldm9sdXRlSm9pbnREZWZfc2V0X2VuYWJsZUxpbWl0XzEAvwEgX2Vtc2NyaXB0ZW5fYmluZF9iMk1hdDIyX1NvbHZlXzEA2wImX2Vtc2NyaXB0ZW5fYmluZF9Wb2lkUHRyX19fZGVzdHJveV9fXzAASCZfZW1zY3JpcHRlbl9iaW5kX2IyUm9wZUpvaW50X0dldE5leHRfMAA6KV9lbXNjcmlwdGVuX2JpbmRfYjJFZGdlU2hhcGVfZ2V0X21fdHlwZV8wADEmX2Vtc2NyaXB0ZW5fYmluZF9iMkVkZ2VTaGFwZV9SYXlDYXN0XzQASytfZW1zY3JpcHRlbl9iaW5kX2IyR2VhckpvaW50RGVmX2dldF9yYXRpb18wAKwJJF9lbXNjcmlwdGVuX2JpbmRfYjJCb2R5X0dldEluZXJ0aWFfMADdCS5fZW1zY3JpcHRlbl9iaW5kX2IyV2VsZEpvaW50RGVmX3NldF91c2VyRGF0YV8xADAzX2Vtc2NyaXB0ZW5fYmluZF9iMldoZWVsSm9pbnRfR2V0Q29sbGlkZUNvbm5lY3RlZF8wAD4zX2Vtc2NyaXB0ZW5fYmluZF9iMlByaXNtYXRpY0pvaW50X0dldExvY2FsQW5jaG9yQl8wAIsBMV9lbXNjcmlwdGVuX2JpbmRfYjJSZXZvbHV0ZUpvaW50RGVmX19fZGVzdHJveV9fXzAASDdfZW1zY3JpcHRlbl9iaW5kX2IyTW90b3JKb2ludERlZl9nZXRfY29ycmVjdGlvbkZhY3Rvcl8wAKkJLV9lbXNjcmlwdGVuX2JpbmRfYjJDb250YWN0RmVhdHVyZV9nZXRfdHlwZUJfMADMASZfZW1zY3JpcHRlbl9iaW5kX2IyQ29udGFjdElEX2dldF9rZXlfMABBMF9lbXNjcmlwdGVuX2JpbmRfYjJNb3RvckpvaW50X0dldFJlYWN0aW9uRm9yY2VfMQDeCSFfZW1zY3JpcHRlbl9iaW5kX2IyUm90X0dldEFuZ2xlXzAA3wkrX2Vtc2NyaXB0ZW5fYmluZF9iMldvcmxkX1NldEFsbG93U2xlZXBpbmdfMQClAjBfZW1zY3JpcHRlbl9iaW5kX2IyTW90b3JKb2ludF9TZXRBbmd1bGFyT2Zmc2V0XzEA4AkpX2Vtc2NyaXB0ZW5fYmluZF9iMk1hbmlmb2xkUG9pbnRfc2V0X2lkXzEA9QI2X2Vtc2NyaXB0ZW5fYmluZF9iMkZyaWN0aW9uSm9pbnRfR2V0Q29sbGlkZUNvbm5lY3RlZF8wAD4tX2Vtc2NyaXB0ZW5fYmluZF9iMldlbGRKb2ludERlZl9fX2Rlc3Ryb3lfX18wAEgrX2Vtc2NyaXB0ZW5fYmluZF9iMk1vdXNlSm9pbnRfX19kZXN0cm95X19fMABgKl9lbXNjcmlwdGVuX2JpbmRfYjJNb3RvckpvaW50X0dldEFuY2hvckFfMACnASdfZW1zY3JpcHRlbl9iaW5kX2IyRml4dHVyZV9HZXREZW5zaXR5XzAAhgkrX2Vtc2NyaXB0ZW5fYmluZF9iMk1vdXNlSm9pbnREZWZfZ2V0X3R5cGVfMABBHV9lbXNjcmlwdGVuX2JpbmRfYjJWZWMyX1NldF8yAOEJKl9lbXNjcmlwdGVuX2JpbmRfYjJXZWxkSm9pbnREZWZfZ2V0X3R5cGVfMABBOF9lbXNjcmlwdGVuX2JpbmRfYjJSZXZvbHV0ZUpvaW50RGVmX3NldF9tYXhNb3RvclRvcnF1ZV8xAJkJHl9lbXNjcmlwdGVuX2JpbmRfYjJSb3RfZ2V0X3NfMACGCS9fZW1zY3JpcHRlbl9iaW5kX2IyRnJpY3Rpb25Kb2ludF9TZXRNYXhUb3JxdWVfMQDiCTJfZW1zY3JpcHRlbl9iaW5kX2IyTW91c2VKb2ludERlZl9nZXRfZnJlcXVlbmN5SHpfMADjCS5fZW1zY3JpcHRlbl9iaW5kX2IyRnJpY3Rpb25Kb2ludF9TZXRVc2VyRGF0YV8xADwsX2Vtc2NyaXB0ZW5fYmluZF9iMkZpeHR1cmVEZWZfc2V0X3VzZXJEYXRhXzEAMDpfZW1zY3JpcHRlbl9iaW5kX2IyRGlzdGFuY2VKb2ludERlZl9nZXRfY29sbGlkZUNvbm5lY3RlZF8wAEY4X2Vtc2NyaXB0ZW5fYmluZF9iMlJldm9sdXRlSm9pbnREZWZfc2V0X3JlZmVyZW5jZUFuZ2xlXzEAtAkvX2Vtc2NyaXB0ZW5fYmluZF9iMkNvbnRhY3RGZWF0dXJlX19fZGVzdHJveV9fXzAASC9fZW1zY3JpcHRlbl9iaW5kX2IyRGlzdGFuY2VKb2ludERlZl9zZXRfYm9keUJfMQBFKF9lbXNjcmlwdGVuX2JpbmRfYjJXb3JsZF9HZXRQcm94eUNvdW50XzAArQIyX2Vtc2NyaXB0ZW5fYmluZF9KU1F1ZXJ5Q2FsbGJhY2tfSlNRdWVyeUNhbGxiYWNrXzAAiAEtX2Vtc2NyaXB0ZW5fYmluZF9iMkNoYWluU2hhcGVfR2V0Q2hpbGRDb3VudF8wAEkoX2Vtc2NyaXB0ZW5fYmluZF9iMk1hc3NEYXRhX2IyTWFzc0RhdGFfMADgAR9fZW1zY3JpcHRlbl9iaW5kX2IyVmVjM19zZXRfeV8xAPsIIV9lbXNjcmlwdGVuX2JpbmRfYjJBQUJCX0NvbWJpbmVfMQDlASFfZW1zY3JpcHRlbl9iaW5kX2IyQUFCQl9Db21iaW5lXzIA5gEsX2Vtc2NyaXB0ZW5fYmluZF9iMlByaXNtYXRpY0pvaW50X0dldEJvZHlBXzAANDRfZW1zY3JpcHRlbl9iaW5kX2IyUHJpc21hdGljSm9pbnRfR2V0TWF4TW90b3JGb3JjZV8wAOQJJV9lbXNjcmlwdGVuX2JpbmRfYjJBQUJCX19fZGVzdHJveV9fXzAASCtfZW1zY3JpcHRlbl9iaW5kX2IyQm9keV9Jc1NsZWVwaW5nQWxsb3dlZF8wANkDM19lbXNjcmlwdGVuX2JpbmRfYjJNb3RvckpvaW50X0dldENvcnJlY3Rpb25GYWN0b3JfMADICSZfZW1zY3JpcHRlbl9iaW5kX2IyUHJvZmlsZV9nZXRfc29sdmVfMACjCTpfZW1zY3JpcHRlbl9iaW5kX0pTRGVzdHJ1Y3Rpb25MaXN0ZW5lcl9TYXlHb29kYnllRml4dHVyZV8xAFIwX2Vtc2NyaXB0ZW5fYmluZF9iMlBvbHlnb25TaGFwZV9HZXRWZXJ0ZXhDb3VudF8wAIkDNV9lbXNjcmlwdGVuX2JpbmRfYjJQdWxsZXlKb2ludERlZl9nZXRfZ3JvdW5kQW5jaG9yQV8wAPMBKF9lbXNjcmlwdGVuX2JpbmRfYjJBQUJCX3NldF9sb3dlckJvdW5kXzEA6QE0X2Vtc2NyaXB0ZW5fYmluZF9iMk1vdG9ySm9pbnREZWZfc2V0X2FuZ3VsYXJPZmZzZXRfMQCqCStfZW1zY3JpcHRlbl9iaW5kX2IyTW91c2VKb2ludF9TZXRNYXhGb3JjZV8xAOUJL19lbXNjcmlwdGVuX2JpbmRfYjJGcmljdGlvbkpvaW50RGVmX2dldF9ib2R5Ql8wADoqX2Vtc2NyaXB0ZW5fYmluZF9iMkpvaW50RGVmX3NldF91c2VyRGF0YV8xADA1X2Vtc2NyaXB0ZW5fYmluZF9iMk1hbmlmb2xkUG9pbnRfZ2V0X3RhbmdlbnRJbXB1bHNlXzAAxAk4X2Vtc2NyaXB0ZW5fYmluZF9iMlJldm9sdXRlSm9pbnREZWZfZ2V0X21heE1vdG9yVG9ycXVlXzAAmAkvX2Vtc2NyaXB0ZW5fYmluZF9iMlJldm9sdXRlSm9pbnREZWZfZ2V0X2JvZHlCXzAAOixfZW1zY3JpcHRlbl9iaW5kX2IyRml4dHVyZURlZl9zZXRfaXNTZW5zb3JfMQDuASpfZW1zY3JpcHRlbl9iaW5kX2IyRWRnZVNoYXBlX2IyRWRnZVNoYXBlXzAAjAMzX2Vtc2NyaXB0ZW5fYmluZF9iMkZyaWN0aW9uSm9pbnRfR2V0UmVhY3Rpb25Gb3JjZV8xAOYJK19lbXNjcmlwdGVuX2JpbmRfYjJNb3VzZUpvaW50X0dldFVzZXJEYXRhXzAAOy5fZW1zY3JpcHRlbl9iaW5kX2IyRGlzdGFuY2VKb2ludERlZl9zZXRfdHlwZV8xAEIhX2Vtc2NyaXB0ZW5fYmluZF9iMlJvdF9HZXRYQXhpc18wAJgBKF9lbXNjcmlwdGVuX2JpbmRfYjJNYW5pZm9sZF9iMk1hbmlmb2xkXzAA+wEuX2Vtc2NyaXB0ZW5fYmluZF9KU0NvbnRhY3RMaXN0ZW5lcl9Qb3N0U29sdmVfMgDTAitfZW1zY3JpcHRlbl9iaW5kX2IyV2VsZEpvaW50RGVmX2dldF9ib2R5Ql8wADoqX2Vtc2NyaXB0ZW5fYmluZF9iMlJvcGVKb2ludERlZl9nZXRfdHlwZV8wAEEsX2Vtc2NyaXB0ZW5fYmluZF9iMkNpcmNsZVNoYXBlX0NvbXB1dGVNYXNzXzIAyQk2X2Vtc2NyaXB0ZW5fYmluZF9iMkRpc3RhbmNlSm9pbnREZWZfZ2V0X2xvY2FsQW5jaG9yQl8wAPUBNF9lbXNjcmlwdGVuX2JpbmRfYjJQdWxsZXlKb2ludERlZl9zZXRfbG9jYWxBbmNob3JBXzEAhwIqX2Vtc2NyaXB0ZW5fZW51bV9iMkJvZHlUeXBlX2IyX2R5bmFtaWNCb2R5AIIEKl9lbXNjcmlwdGVuX2JpbmRfYjJDaXJjbGVTaGFwZV9UZXN0UG9pbnRfMgBKMF9lbXNjcmlwdGVuX2JpbmRfYjJNb3RvckpvaW50RGVmX2dldF9tYXhUb3JxdWVfMAClCTlfZW1zY3JpcHRlbl9iaW5kX2IyQm9keV9HZXRMaW5lYXJWZWxvY2l0eUZyb21Mb2NhbFBvaW50XzEA0wMiX2Vtc2NyaXB0ZW5fYmluZF9iMk1hdDIyX2IyTWF0MjJfMADUAipfZW1zY3JpcHRlbl9iaW5kX2IyTW91c2VKb2ludF9HZXRBbmNob3JCXzAAkQEsX2Vtc2NyaXB0ZW5fYmluZF9iMkVkZ2VTaGFwZV9zZXRfbV92ZXJ0ZXgwXzEA9gEnX2Vtc2NyaXB0ZW5fYmluZF9iMkdlYXJKb2ludF9HZXRCb2R5Ql8wADUlX2Vtc2NyaXB0ZW5fYmluZF9iMkNoYWluU2hhcGVfQ2xlYXJfMAD5AixfZW1zY3JpcHRlbl9iaW5kX2IyQ2lyY2xlU2hhcGVfX19kZXN0cm95X19fMAAvKl9lbXNjcmlwdGVuX2JpbmRfYjJFZGdlU2hhcGVfX19kZXN0cm95X19fMAAvL19lbXNjcmlwdGVuX2JpbmRfYjJEaXN0YW5jZUpvaW50RGVmX2dldF9ib2R5QV8wAEMrX2Vtc2NyaXB0ZW5fYmluZF9iMkNvbnRhY3RfU2V0UmVzdGl0dXRpb25fMQDMCS9fZW1zY3JpcHRlbl9iaW5kX2IyQm9keURlZl9nZXRfYW5ndWxhckRhbXBpbmdfMADjCSxfZW1zY3JpcHRlbl9iaW5kX2IyRWRnZVNoYXBlX2dldF9tX3ZlcnRleDNfMACGAihfZW1zY3JpcHRlbl9iaW5kX2IyRml4dHVyZV9TZXRVc2VyRGF0YV8xAHUqX2Vtc2NyaXB0ZW5fYmluZF9iMlRyYW5zZm9ybV9TZXRJZGVudGl0eV8wAPYCG19lbXNjcmlwdGVuX2dldF9nbG9iYWxfbGliYwDGBSxfZW1zY3JpcHRlbl9iaW5kX2IyR2VhckpvaW50RGVmX3NldF9qb2ludDFfMQDtAyxfZW1zY3JpcHRlbl9iaW5kX2IyRWRnZVNoYXBlX3NldF9tX3ZlcnRleDJfMQD0AS5fZW1zY3JpcHRlbl9iaW5kX2IyQ29udGFjdEZlYXR1cmVfc2V0X2luZGV4Ql8xAMkBOV9lbXNjcmlwdGVuX2JpbmRfYjJCb2R5X0dldExpbmVhclZlbG9jaXR5RnJvbVdvcmxkUG9pbnRfMQDSAyhfZW1zY3JpcHRlbl9iaW5kX2IyQm9keV9HZXRXb3JsZENlbnRlcl8wAPICK19lbXNjcmlwdGVuX2JpbmRfYjJXZWxkSm9pbnREZWZfZ2V0X2JvZHlBXzAAQyFfZW1zY3JpcHRlbl9iaW5kX2IyTWF0MjJfc2V0X2V5XzEA6wEyX2Vtc2NyaXB0ZW5fYmluZF9iMldoZWVsSm9pbnREZWZfc2V0X2ZyZXF1ZW5jeUh6XzEAmgkpX2Vtc2NyaXB0ZW5fYmluZF9iMldvcmxkX0dldFN1YlN0ZXBwaW5nXzAArAIhX2Vtc2NyaXB0ZW5fYmluZF9iMlJvdF9HZXRZQXhpc18wAJkBL19lbXNjcmlwdGVuX2JpbmRfYjJQcmlzbWF0aWNKb2ludF9FbmFibGVNb3Rvcl8xAMUCMV9lbXNjcmlwdGVuX2JpbmRfYjJXaGVlbEpvaW50RGVmX2dldF9sb2NhbEF4aXNBXzAAhgIuX2Vtc2NyaXB0ZW5fYmluZF9iMkRpc3RhbmNlSm9pbnRfX19kZXN0cm95X19fMABgJl9lbXNjcmlwdGVuX2JpbmRfYjJFZGdlU2hhcGVfR2V0VHlwZV8wADE0X2Vtc2NyaXB0ZW5fYmluZF9iMlJldm9sdXRlSm9pbnREZWZfZ2V0X2xvd2VyQW5nbGVfMACQCS5fZW1zY3JpcHRlbl9iaW5kX2IyTWFuaWZvbGRQb2ludF9fX2Rlc3Ryb3lfX18wAEgtX2Vtc2NyaXB0ZW5fZW51bV9iMkpvaW50VHlwZV9lX3ByaXNtYXRpY0pvaW50AIIEJ19lbXNjcmlwdGVuX2JpbmRfYjJNb3RvckpvaW50X0dldE5leHRfMAA6IF9lbXNjcmlwdGVuX2JpbmRfYjJWZWMyX0xlbmd0aF8wAOcJIV9lbXNjcmlwdGVuX2JpbmRfYjJWZWMyX1NldFplcm9fMADPASxfZW1zY3JpcHRlbl9iaW5kX2IyRWRnZVNoYXBlX2dldF9tX3ZlcnRleDFfMABqKF9lbXNjcmlwdGVuX2JpbmRfYjJGaXh0dXJlX0dldFVzZXJEYXRhXzAAdCdfZW1zY3JpcHRlbl9iaW5kX2IySm9pbnREZWZfc2V0X2JvZHlCXzEARR5fZW1zY3JpcHRlbl9iaW5kX2IyTWF0MjJfU2V0XzIA1wIhX2Vtc2NyaXB0ZW5fYmluZF9iMkJvZHlfR2V0VHlwZV8wAEE0X2Vtc2NyaXB0ZW5fYmluZF9iMlJldm9sdXRlSm9pbnREZWZfc2V0X3VwcGVyQW5nbGVfMQCKCSZfZW1zY3JpcHRlbl9iaW5kX2IyV2VsZEpvaW50X0dldE5leHRfMAA6J19lbXNjcmlwdGVuX2JpbmRfYjJTaGFwZV9nZXRfbV9yYWRpdXNfMACjCSpfZW1zY3JpcHRlbl9iaW5kX2IyRWRnZVNoYXBlX0NvbXB1dGVBQUJCXzMATCVfZW1zY3JpcHRlbl9iaW5kX2IyQm9keURlZl9nZXRfdHlwZV8wAEE4X2Vtc2NyaXB0ZW5fYmluZF9iMlJldm9sdXRlSm9pbnREZWZfYjJSZXZvbHV0ZUpvaW50RGVmXzAAkgM0X2Vtc2NyaXB0ZW5fYmluZF9KU0Rlc3RydWN0aW9uTGlzdGVuZXJfX19kZXN0cm95X19fMAAvK19lbXNjcmlwdGVuX2JpbmRfYjJNb3RvckpvaW50RGVmX2dldF90eXBlXzAAQS5fZW1zY3JpcHRlbl9iaW5kX2IyUm9wZUpvaW50X0dldExvY2FsQW5jaG9yQV8wAJ4BLl9lbXNjcmlwdGVuX2JpbmRfYjJCb2R5RGVmX3NldF9saW5lYXJEYW1waW5nXzEAqgkuX2Vtc2NyaXB0ZW5fYmluZF9iMkZyaWN0aW9uSm9pbnRfR2V0VXNlckRhdGFfMAA7NV9lbXNjcmlwdGVuX2JpbmRfYjJQcmlzbWF0aWNKb2ludERlZl9nZXRfbW90b3JTcGVlZF8wAMYJLV9lbXNjcmlwdGVuX2JpbmRfYjJNYW5pZm9sZF9zZXRfbG9jYWxOb3JtYWxfMQD9ASdfZW1zY3JpcHRlbl9iaW5kX2IySm9pbnREZWZfZ2V0X2JvZHlBXzAAQypfZW1zY3JpcHRlbl9iaW5kX2IyQm9keV9HZXRMaW5lYXJEYW1waW5nXzAApAkxX2Vtc2NyaXB0ZW5fYmluZF9iMldlbGRKb2ludERlZl9zZXRfZnJlcXVlbmN5SHpfMQC5CTZfZW1zY3JpcHRlbl9iaW5kX2IyUHJpc21hdGljSm9pbnREZWZfc2V0X2VuYWJsZU1vdG9yXzEAkQImX2Vtc2NyaXB0ZW5fYmluZF9iMk1hdDIyX1NldElkZW50aXR5XzAA2AItX2Vtc2NyaXB0ZW5fYmluZF9iMkJvZHlEZWZfZ2V0X2dyYXZpdHlTY2FsZV8wAKsJLV9lbXNjcmlwdGVuX2JpbmRfYjJSZXZvbHV0ZUpvaW50X0dldEFuY2hvckFfMAD6AzBfZW1zY3JpcHRlbl9iaW5kX2IyQ2hhaW5TaGFwZV9zZXRfbV9wcmV2VmVydGV4XzEA9AEqX2Vtc2NyaXB0ZW5fYmluZF9iMldoZWVsSm9pbnRfR2V0QW5jaG9yQV8wAKMDMF9lbXNjcmlwdGVuX2JpbmRfYjJEaXN0YW5jZUpvaW50RGVmX2dldF9sZW5ndGhfMAClCStfZW1zY3JpcHRlbl9iaW5kX2IyV2hlZWxKb2ludERlZl9zZXRfdHlwZV8xAEIzX2Vtc2NyaXB0ZW5fYmluZF9iMlByaXNtYXRpY0pvaW50RGVmX3NldF91c2VyRGF0YV8xADAuX2Vtc2NyaXB0ZW5fYmluZF9iMkZyaWN0aW9uSm9pbnREZWZfc2V0X3R5cGVfMQBCL19lbXNjcmlwdGVuX2JpbmRfYjJQcmlzbWF0aWNKb2ludF9HZXRVc2VyRGF0YV8wADsFX3NicmsAlwY6X2Vtc2NyaXB0ZW5fYmluZF9iMkZyaWN0aW9uSm9pbnREZWZfZ2V0X2NvbGxpZGVDb25uZWN0ZWRfMABGNF9lbXNjcmlwdGVuX2JpbmRfYjJXZWxkSm9pbnREZWZfc2V0X3JlZmVyZW5jZUFuZ2xlXzEAtAktX2Vtc2NyaXB0ZW5fYmluZF9iMkZyaWN0aW9uSm9pbnRfR2V0QW5jaG9yQV8wAOgDJl9lbXNjcmlwdGVuX2JpbmRfYjJSb3BlSm9pbnRfR2V0VHlwZV8wADEjX2Vtc2NyaXB0ZW5fYmluZF9iMk1hc3NEYXRhX2dldF9JXzAAxAkxX2Vtc2NyaXB0ZW5fYmluZF9iMldoZWVsSm9pbnREZWZfZ2V0X21vdG9yU3BlZWRfMACPCShfZW1zY3JpcHRlbl9lbnVtX2IySm9pbnRUeXBlX2Vfcm9wZUpvaW50AIoEKF9lbXNjcmlwdGVuX2JpbmRfYjJGaWx0ZXJfc2V0X21hc2tCaXRzXzEAhQE1X2Vtc2NyaXB0ZW5fYmluZF9iMlJldm9sdXRlSm9pbnREZWZfZ2V0X2VuYWJsZU1vdG9yXzAAkwM3X2Vtc2NyaXB0ZW5fYmluZF9iMk1vdG9ySm9pbnREZWZfc2V0X2NvbGxpZGVDb25uZWN0ZWRfMQBHIl9lbXNjcmlwdGVuX2JpbmRfYjJNYXQyMl9iMk1hdDIyXzIA1QIrX2Vtc2NyaXB0ZW5fYmluZF9iMlByaXNtYXRpY0pvaW50X0dldE5leHRfMAA6L19lbXNjcmlwdGVuX2JpbmRfYjJGcmljdGlvbkpvaW50RGVmX3NldF9ib2R5Ql8xAEUiX2Vtc2NyaXB0ZW5fYmluZF9iMk1hdDIyX2IyTWF0MjJfNADoCTNfZW1zY3JpcHRlbl9iaW5kX2IyQ2hhaW5TaGFwZV9zZXRfbV9oYXNOZXh0VmVydGV4XzEAugElX2Vtc2NyaXB0ZW5fYmluZF9iMk1hdDIyX0dldEludmVyc2VfMADaAitfZW1zY3JpcHRlbl9iaW5kX2IyR2VhckpvaW50RGVmX3NldF9ib2R5QV8xAEQrX2Vtc2NyaXB0ZW5fYmluZF9iMkNpcmNsZVNoYXBlX2dldF9tX3R5cGVfMAAxKl9lbXNjcmlwdGVuX2JpbmRfYjJGaWx0ZXJfZ2V0X2dyb3VwSW5kZXhfMACGAS5fZW1zY3JpcHRlbl9iaW5kX2IyQ29udGFjdEVkZ2VfYjJDb250YWN0RWRnZV8wAOABKF9lbXNjcmlwdGVuX2JpbmRfYjJCb2R5RGVmX19fZGVzdHJveV9fXzAASDNfZW1zY3JpcHRlbl9iaW5kX2IyRnJpY3Rpb25Kb2ludERlZl9zZXRfbWF4VG9ycXVlXzEAuQkrX2Vtc2NyaXB0ZW5fYmluZF9iMlBvbHlnb25TaGFwZV9HZXRWZXJ0ZXhfMQCKAzVfZW1zY3JpcHRlbl9iaW5kX2IyUHVsbGV5Sm9pbnREZWZfc2V0X2dyb3VuZEFuY2hvckJfMQD2ATpfZW1zY3JpcHRlbl9iaW5kX2IyUmV2b2x1dGVKb2ludERlZl9nZXRfY29sbGlkZUNvbm5lY3RlZF8wAEYvX2Vtc2NyaXB0ZW5fYmluZF9iMkRpc3RhbmNlSm9pbnREZWZfc2V0X2JvZHlBXzEARDNfZW1zY3JpcHRlbl9iaW5kX2IyV2hlZWxKb2ludF9HZXRKb2ludFRyYW5zbGF0aW9uXzAA6QksX2Vtc2NyaXB0ZW5fYmluZF9iMlJldm9sdXRlSm9pbnRfU2V0TGltaXRzXzIA6gkqX2Vtc2NyaXB0ZW5fYmluZF9iMldlbGRKb2ludERlZl9zZXRfdHlwZV8xAEIuX2Vtc2NyaXB0ZW5fYmluZF9iMk1vdG9ySm9pbnREZWZfX19kZXN0cm95X19fMABIK19lbXNjcmlwdGVuX2JpbmRfYjJGaXh0dXJlRGVmX3NldF9kZW5zaXR5XzEA0QklX2Vtc2NyaXB0ZW5fYmluZF9iMlNoYXBlX3NldF9tX3R5cGVfMQAwMV9lbXNjcmlwdGVuX2JpbmRfYjJQdWxsZXlKb2ludF9HZXRSZWFjdGlvbkZvcmNlXzEA6wkuX2Vtc2NyaXB0ZW5fYmluZF9iMldoZWVsSm9pbnRfR2V0TW90b3JUb3JxdWVfMQDsCSpfZW1zY3JpcHRlbl9iaW5kX2IyUm9wZUpvaW50X1NldFVzZXJEYXRhXzEAPC1fZW1zY3JpcHRlbl9iaW5kX2IyUm9wZUpvaW50RGVmX19fZGVzdHJveV9fXzAASChfZW1zY3JpcHRlbl9iaW5kX2IyV2hlZWxKb2ludF9Jc0FjdGl2ZV8wAD02X2Vtc2NyaXB0ZW5fYmluZF9iMlByaXNtYXRpY0pvaW50RGVmX2dldF9lbmFibGVNb3Rvcl8wAJACKl9lbXNjcmlwdGVuX2JpbmRfYjJUcmFuc2Zvcm1fYjJUcmFuc2Zvcm1fMgDVAi9fZW1zY3JpcHRlbl9iaW5kX2IyV2VsZEpvaW50X0dldFJlYWN0aW9uRm9yY2VfMQDtCSdfZW1zY3JpcHRlbl9iaW5kX2IyQ2hhaW5TaGFwZV9SYXlDYXN0XzQASyxfZW1zY3JpcHRlbl9iaW5kX2IyUHVsbGV5Sm9pbnREZWZfZ2V0X3R5cGVfMABBK19lbXNjcmlwdGVuX2JpbmRfYjJDaGFpblNoYXBlX3NldF9tX2NvdW50XzEAVCVfZW1zY3JpcHRlbl9iaW5kX2IyQ29udGFjdElEX2dldF9jZl8wAGgwX2Vtc2NyaXB0ZW5fYmluZF9iMkRpc3RhbmNlSm9pbnREZWZfSW5pdGlhbGl6ZV80ALwDLF9lbXNjcmlwdGVuX2JpbmRfYjJDaGFpblNoYXBlX2dldF9tX3JhZGl1c18wAKMJMl9lbXNjcmlwdGVuX2JpbmRfYjJXaGVlbEpvaW50RGVmX2dldF9lbmFibGVNb3Rvcl8wAN4CMl9lbXNjcmlwdGVuX2JpbmRfYjJXZWxkSm9pbnREZWZfc2V0X2xvY2FsQW5jaG9yQl8xAPYBLF9lbXNjcmlwdGVuX2JpbmRfYjJDaGFpblNoYXBlX3NldF9tX3JhZGl1c18xAJIJNF9lbXNjcmlwdGVuX2JpbmRfYjJEaXN0YW5jZUpvaW50X0dldFJlYWN0aW9uVG9ycXVlXzEAgAkfX2Vtc2NyaXB0ZW5fYmluZF9iMldvcmxkX0R1bXBfMAC6AjJfZW1zY3JpcHRlbl9iaW5kX2IyUmV2b2x1dGVKb2ludF9HZXRMb2NhbEFuY2hvckJfMACLATJfZW1zY3JpcHRlbl9iaW5kX0pTQ29udGFjdEZpbHRlcl9KU0NvbnRhY3RGaWx0ZXJfMACQAyZfZW1zY3JpcHRlbl9iaW5kX2IyUHJvZmlsZV9zZXRfc29sdmVfMQCSCTVfZW1zY3JpcHRlbl9iaW5kX2IyUHVsbGV5Sm9pbnREZWZfZ2V0X2dyb3VuZEFuY2hvckJfMAD1AS5fZW1zY3JpcHRlbl9iaW5kX2IyV2VsZEpvaW50X0dldERhbXBpbmdSYXRpb18wAPkIIF9lbXNjcmlwdGVuX2JpbmRfYjJDb2xvcl9nZXRfYl8wAKMJL19lbXNjcmlwdGVuX2JpbmRfYjJSb3BlSm9pbnRfR2V0UmVhY3Rpb25Gb3JjZV8xAO4JNl9lbXNjcmlwdGVuX2JpbmRfYjJQcmlzbWF0aWNKb2ludERlZl9nZXRfZW5hYmxlTGltaXRfMACKAjFfZW1zY3JpcHRlbl9iaW5kX2IyTWFuaWZvbGRQb2ludF9zZXRfbG9jYWxQb2ludF8xAOkBKl9lbXNjcmlwdGVuX2JpbmRfYjJGaXh0dXJlX0dldEZpbHRlckRhdGFfMAByIF9lbXNjcmlwdGVuX2JpbmRfYjJDb2xvcl9nZXRfcl8wAIYJJl9lbXNjcmlwdGVuX2JpbmRfYjJCb2R5X0dldEpvaW50TGlzdF8wAOEDIl9lbXNjcmlwdGVuX2JpbmRfYjJKb2ludF9HZXROZXh0XzAAOiJfZW1zY3JpcHRlbl9iaW5kX2IySm9pbnRfR2V0VHlwZV8wADEiX2Vtc2NyaXB0ZW5fYmluZF9iMldvcmxkX1JheUNhc3RfMwChAiNfZW1zY3JpcHRlbl9iaW5kX2IyTWFzc0RhdGFfc2V0X0lfMQCBCSlfZW1zY3JpcHRlbl9iaW5kX2IyTWFzc0RhdGFfX19kZXN0cm95X19fMABIKF9lbXNjcmlwdGVuX2JpbmRfYjJGaXh0dXJlX1NldEZyaWN0aW9uXzEA0QkiX2Vtc2NyaXB0ZW5fYmluZF9iMkNvbG9yX2IyQ29sb3JfMwDvCSJfZW1zY3JpcHRlbl9iaW5kX2IyQ29sb3JfYjJDb2xvcl8wANQCM19lbXNjcmlwdGVuX2JpbmRfYjJGcmljdGlvbkpvaW50RGVmX2dldF9tYXhUb3JxdWVfMACpCSxfZW1zY3JpcHRlbl9iaW5kX2IyV2VsZEpvaW50RGVmX0luaXRpYWxpemVfMwDlAjFfZW1zY3JpcHRlbl9iaW5kX2IyUmV2b2x1dGVKb2ludF9HZXRNb3RvclRvcnF1ZV8xAPAJKF9lbXNjcmlwdGVuX2VudW1fYjJKb2ludFR5cGVfZV9nZWFySm9pbnQAhgQsX2Vtc2NyaXB0ZW5fYmluZF9iMkZpeHR1cmVEZWZfZ2V0X2ZyaWN0aW9uXzAAowkvX2Vtc2NyaXB0ZW5fYmluZF9iMk1vdG9ySm9pbnREZWZfZ2V0X21heEZvcmNlXzAA4wkoX2Vtc2NyaXB0ZW5fYmluZF9iMkNvbnRhY3RfR2V0TWFuaWZvbGRfMACvAylfZW1zY3JpcHRlbl9iaW5kX2IyTW91c2VKb2ludF9HZXRUYXJnZXRfMACLATJfZW1zY3JpcHRlbl9iaW5kX2IyV2VsZEpvaW50RGVmX2dldF9sb2NhbEFuY2hvckFfMADzAStfZW1zY3JpcHRlbl9iaW5kX2IyTW91c2VKb2ludF9TZXRVc2VyRGF0YV8xADwsX2Vtc2NyaXB0ZW5fYmluZF9iMk1vdG9ySm9pbnREZWZfc2V0X2JvZHlCXzEARSxfZW1zY3JpcHRlbl9iaW5kX2IyQ2hhaW5TaGFwZV9HZXRDaGlsZEVkZ2VfMgD+AjBfZW1zY3JpcHRlbl9iaW5kX2IyUHJpc21hdGljSm9pbnREZWZfZ2V0X2JvZHlBXzAAQzRfZW1zY3JpcHRlbl9iaW5kX2IyTW90b3JKb2ludERlZl9nZXRfYW5ndWxhck9mZnNldF8wAKwJK19lbXNjcmlwdGVuX2JpbmRfYjJXaGVlbEpvaW50X1NldFVzZXJEYXRhXzEAPDFfZW1zY3JpcHRlbl9iaW5kX2IyUHJpc21hdGljSm9pbnRfR2V0VXBwZXJMaW1pdF8wANYJNl9lbXNjcmlwdGVuX2JpbmRfYjJEaXN0YW5jZUpvaW50X0dldENvbGxpZGVDb25uZWN0ZWRfMAA+LV9lbXNjcmlwdGVuX2JpbmRfYjJHZWFySm9pbnREZWZfX19kZXN0cm95X19fMABIMl9lbXNjcmlwdGVuX2JpbmRfYjJXZWxkSm9pbnREZWZfZ2V0X2xvY2FsQW5jaG9yQl8wAPUBJV9lbXNjcmlwdGVuX2JpbmRfYjJXb3JsZF9TZXRHcmF2aXR5XzEAtAIiX2Vtc2NyaXB0ZW5fYmluZF9iMk1hdDIyX1NldFplcm9fMADZAitfZW1zY3JpcHRlbl9iaW5kX2IyQ29udGFjdF9HZXRDaGlsZEluZGV4QV8wAIACIF9lbXNjcmlwdGVuX2JpbmRfYjJDb2xvcl9nZXRfZ18wAPoIJl9lbXNjcmlwdGVuX2JpbmRfYjJCb2R5X0dldFRyYW5zZm9ybV8wAGosX2Vtc2NyaXB0ZW5fYmluZF9iMkNvbnRhY3RFZGdlX19fZGVzdHJveV9fXzAASCFfZW1zY3JpcHRlbl9iaW5kX2IyTWF0MzNfc2V0X2V4XzEAaSRfZW1zY3JpcHRlbl9iaW5kX2IyQUFCQl9HZXRFeHRlbnRzXzAA4wElX2Vtc2NyaXB0ZW5fYmluZF9iMkJvZHlfR2V0TWFzc0RhdGFfMQDLAyVfZW1zY3JpcHRlbl9iaW5kX2IyQm9keV9HZXRVc2VyRGF0YV8wAIkDLF9lbXNjcmlwdGVuX2JpbmRfYjJXaGVlbEpvaW50RGVmX3NldF9ib2R5QV8xAEQvX2Vtc2NyaXB0ZW5fYmluZF9iMk1vdG9ySm9pbnREZWZfc2V0X21heEZvcmNlXzEA1AkmX2Vtc2NyaXB0ZW5fYmluZF9iMkJvZHlEZWZfZ2V0X2FuZ2xlXzAAxAkyX2Vtc2NyaXB0ZW5fYmluZF9iMlB1bGxleUpvaW50X0dldFJlYWN0aW9uVG9ycXVlXzEAgAkpX2Vtc2NyaXB0ZW5fYmluZF9iMkZpeHR1cmVEZWZfZ2V0X3NoYXBlXzAAQS5fZW1zY3JpcHRlbl9iaW5kX2IyV2VsZEpvaW50RGVmX2dldF91c2VyRGF0YV8wADEuX2Vtc2NyaXB0ZW5fYmluZF9iMkZyaWN0aW9uSm9pbnRfU2V0TWF4Rm9yY2VfMQDxCSJfZW1zY3JpcHRlbl9iaW5kX2IyTWF0MzNfYjJNYXQzM18zAGIiX2Vtc2NyaXB0ZW5fYmluZF9iMk1hdDMzX2IyTWF0MzNfMABhJl9lbXNjcmlwdGVuX2JpbmRfYjJKb2ludERlZl9nZXRfdHlwZV8wAEEwX2Vtc2NyaXB0ZW5fYmluZF9KU1F1ZXJ5Q2FsbGJhY2tfUmVwb3J0Rml4dHVyZV8xAIkBJl9lbXNjcmlwdGVuX2JpbmRfYjJGaXh0dXJlX1Rlc3RQb2ludF8xAHY2X2Vtc2NyaXB0ZW5fYmluZF9iMlJldm9sdXRlSm9pbnRfR2V0Q29sbGlkZUNvbm5lY3RlZF8wAD4gX2Vtc2NyaXB0ZW5fYmluZF9KU0RyYXdfSlNEcmF3XzAAlQMyX2Vtc2NyaXB0ZW5fYmluZF9iMkZyaWN0aW9uSm9pbnRfR2V0TG9jYWxBbmNob3JCXzAAiwEkX2Vtc2NyaXB0ZW5fYmluZF9iMlRyYW5zZm9ybV9nZXRfcF8wAGgqX2Vtc2NyaXB0ZW5fYmluZF9iMkVkZ2VTaGFwZV9Db21wdXRlTWFzc18yAMkJJV9lbXNjcmlwdGVuX2JpbmRfYjJXb3JsZF9HZXRQcm9maWxlXzAAuQIxX2Vtc2NyaXB0ZW5fYmluZF9iMkRpc3RhbmNlSm9pbnREZWZfX19kZXN0cm95X19fMABIMV9lbXNjcmlwdGVuX2JpbmRfYjJXb3JsZF9TZXREZXN0cnVjdGlvbkxpc3RlbmVyXzEAlQImX2Vtc2NyaXB0ZW5fYmluZF9iMkpvaW50RGVmX3NldF90eXBlXzEAQiVfZW1zY3JpcHRlbl9iaW5kX2IyRHJhd19BcHBlbmRGbGFnc18xADIvX2Vtc2NyaXB0ZW5fYmluZF9iMk1vdG9ySm9pbnREZWZfZ2V0X3VzZXJEYXRhXzAAMSlfZW1zY3JpcHRlbl9iaW5kX2IyV29ybGRfR2V0Q29udGFjdExpc3RfMACkAiFfZW1zY3JpcHRlbl9iaW5kX2IyTWF0MzNfc2V0X2V6XzEAbSRfZW1zY3JpcHRlbl9iaW5kX2IyRmlsdGVyX2IyRmlsdGVyXzAAgQEkX2Vtc2NyaXB0ZW5fYmluZF9iMkJvZHlfQXBwbHlGb3JjZV8zAMQDKl9lbXNjcmlwdGVuX2JpbmRfYjJXZWxkSm9pbnRfU2V0VXNlckRhdGFfMQA8M19lbXNjcmlwdGVuX2JpbmRfYjJSZXZvbHV0ZUpvaW50X0dldFJlYWN0aW9uRm9yY2VfMQDyCThfZW1zY3JpcHRlbl9iaW5kX2IyUHVsbGV5Sm9pbnREZWZfc2V0X2NvbGxpZGVDb25uZWN0ZWRfMQBHMl9lbXNjcmlwdGVuX2JpbmRfYjJSb3BlSm9pbnRfR2V0Q29sbGlkZUNvbm5lY3RlZF8wAD4qX2Vtc2NyaXB0ZW5fYmluZF9iMkNvbnRhY3RFZGdlX2dldF9vdGhlcl8wAEEpX2Vtc2NyaXB0ZW5fYmluZF9iMkJvZHlEZWZfc2V0X3VzZXJEYXRhXzEAwQEpX2Vtc2NyaXB0ZW5fYmluZF9iMkdlYXJKb2ludF9HZXRBbmNob3JCXzAA6wIrX2Vtc2NyaXB0ZW5fYmluZF9iMkNvbnRhY3RfR2V0Q2hpbGRJbmRleEJfMACCAihfZW1zY3JpcHRlbl9iaW5kX2IyRml4dHVyZV9HZXRGcmljdGlvbl8wAIwJJV9lbXNjcmlwdGVuX2VudW1fYjJEcmF3RmxhZ19lX2FhYmJCaXQAhAQwX2Vtc2NyaXB0ZW5fYmluZF9iMlJldm9sdXRlSm9pbnREZWZfSW5pdGlhbGl6ZV8zAOUCIl9lbXNjcmlwdGVuX2JpbmRfYjJCb2R5X0dldEFuZ2xlXzAA/AgiX2Vtc2NyaXB0ZW5fYmluZF9iMkVkZ2VTaGFwZV9TZXRfMgCNAyJfZW1zY3JpcHRlbl9iaW5kX2IyTWF0MzNfU2V0WmVyb18wAGMsX2Vtc2NyaXB0ZW5fYmluZF9iMk1vdG9ySm9pbnREZWZfZ2V0X2JvZHlCXzAAOjVfZW1zY3JpcHRlbl9iaW5kX2IyUHJpc21hdGljSm9pbnREZWZfZ2V0X2xvY2FsQXhpc0FfMACGAiFfZW1zY3JpcHRlbl9iaW5kX2IyTWF0MjJfZ2V0X2V5XzAA6gEeX2Vtc2NyaXB0ZW5fYmluZF9iMkJvZHlfRHVtcF8wAOUDI19lbXNjcmlwdGVuX2JpbmRfYjJKb2ludF9Jc0FjdGl2ZV8wAD0rX2Vtc2NyaXB0ZW5fYmluZF9iMkJvZHlEZWZfZ2V0X2FsbG93U2xlZXBfMAC3AShfZW1zY3JpcHRlbl9iaW5kX2IyV29ybGRfR2V0VHJlZUhlaWdodF8wALECMF9lbXNjcmlwdGVuX2JpbmRfYjJSZXZvbHV0ZUpvaW50X0dldFVwcGVyTGltaXRfMADWCShfZW1zY3JpcHRlbl9iaW5kX2IyR2VhckpvaW50X0dldEpvaW50Ml8wAOcCIl9lbXNjcmlwdGVuX2JpbmRfYjJCb2R5X0dldFdvcmxkXzAA5AMtX2Vtc2NyaXB0ZW5fZW51bV9iMkxpbWl0U3RhdGVfZV9pbmFjdGl2ZUxpbWl0AIAEH19lbXNjcmlwdGVuX2JpbmRfYjJWZWMyX3NldF94XzEAhQkiX2Vtc2NyaXB0ZW5fYmluZF9iMkJvZHlfU2V0QXdha2VfMQDaAyxfZW1zY3JpcHRlbl9iaW5kX2IyRWRnZVNoYXBlX3NldF9tX3ZlcnRleDFfMQDjAiVfZW1zY3JpcHRlbl9iaW5kX2IyVmVjMl9fX2Rlc3Ryb3lfX18wAEgoX2Vtc2NyaXB0ZW5fYmluZF9iMlJheUNhc3RJbnB1dF9zZXRfcDFfMQDpASpfZW1zY3JpcHRlbl9iaW5kX2IyQ29udGFjdF9SZXNldEZyaWN0aW9uXzAAtQMrX2Vtc2NyaXB0ZW5fYmluZF9iMlB1bGxleUpvaW50X0dldEFuY2hvckFfMACrAyZfZW1zY3JpcHRlbl9iaW5kX2IyQUFCQl9HZXRQZXJpbWV0ZXJfMADzCS9fZW1zY3JpcHRlbl9iaW5kX2IyRGlzdGFuY2VKb2ludERlZl9nZXRfYm9keUJfMAA6K19lbXNjcmlwdGVuX2JpbmRfYjJKb2ludF9HZXRSZWFjdGlvbkZvcmNlXzEA9AkqX2Vtc2NyaXB0ZW5fYmluZF9iMlJldm9sdXRlSm9pbnRfR2V0TmV4dF8wADomX2Vtc2NyaXB0ZW5fYmluZF9iMkNvbG9yX19fZGVzdHJveV9fXzAASCpfZW1zY3JpcHRlbl9iaW5kX2IyTW90b3JKb2ludF9HZXRBbmNob3JCXzAAqAElX2Vtc2NyaXB0ZW5fYmluZF9iMkZpeHR1cmVfR2V0U2hhcGVfMAA6Kl9lbXNjcmlwdGVuX2JpbmRfYjJQb2x5Z29uU2hhcGVfU2V0QXNCb3hfMgD1CSBfZW1zY3JpcHRlbl9iaW5kX2IyVmVjM19vcF9tdWxfMQD2CSxfZW1zY3JpcHRlbl9iaW5kX2IyUG9seWdvblNoYXBlX3NldF9tX3R5cGVfMQAwJ19lbXNjcmlwdGVuX2JpbmRfYjJXaGVlbEpvaW50X0dldFR5cGVfMAAxMF9lbXNjcmlwdGVuX2JpbmRfYjJNb3RvckpvaW50X0dldEFuZ3VsYXJPZmZzZXRfMAD3CStfZW1zY3JpcHRlbl9iaW5kX2IyUmV2b2x1dGVKb2ludF9Jc0FjdGl2ZV8wAD0mX2Vtc2NyaXB0ZW5fYmluZF9iMkdlYXJKb2ludF9HZXROZXh0XzAAOi9fZW1zY3JpcHRlbl9iaW5kX2IyTW91c2VKb2ludERlZl9nZXRfbWF4Rm9yY2VfMACsCR5fZW1zY3JpcHRlbl9iaW5kX2IyQ29sb3JfU2V0XzMA+Ak4X2Vtc2NyaXB0ZW5fYmluZF9iMlByaXNtYXRpY0pvaW50RGVmX3NldF9tYXhNb3RvckZvcmNlXzEA+QktX2Vtc2NyaXB0ZW5fYmluZF9iMldoZWVsSm9pbnRfR2V0TG9jYWxBeGlzQV8wAJsDIV9lbXNjcmlwdGVuX2JpbmRfYjJCb2R5X0dldE5leHRfMADjAzBfZW1zY3JpcHRlbl9iaW5kX2IyTW91c2VKb2ludF9HZXRSZWFjdGlvbkZvcmNlXzEA+gknX2Vtc2NyaXB0ZW5fYmluZF9iMlJvcGVKb2ludF9HZXRCb2R5QV8wADQuX2Vtc2NyaXB0ZW5fYmluZF9iMkNvbnRhY3RGZWF0dXJlX3NldF9pbmRleEFfMQDHASVfZW1zY3JpcHRlbl9iaW5kX2IyRml4dHVyZV9SZWZpbHRlcl8wAHMvX2Vtc2NyaXB0ZW5fYmluZF9iMkJvZHlEZWZfc2V0X2FuZ3VsYXJEYW1waW5nXzEA1AktX2Vtc2NyaXB0ZW5fYmluZF9iMkZyaWN0aW9uSm9pbnRfR2V0QW5jaG9yQl8wAOkDJF9lbXNjcmlwdGVuX2JpbmRfYjJXb3JsZF9RdWVyeUFBQkJfMgCgAihfZW1zY3JpcHRlbl9iaW5kX2IyUHJvZmlsZV9zZXRfY29sbGlkZV8xAPsIKV9lbXNjcmlwdGVuX2JpbmRfYjJCb2R5RGVmX2dldF91c2VyRGF0YV8wAMABL19lbXNjcmlwdGVuX2JpbmRfYjJNb3RvckpvaW50X1NldExpbmVhck9mZnNldF8xAJ0BNV9lbXNjcmlwdGVuX2JpbmRfYjJQdWxsZXlKb2ludERlZl9zZXRfZ3JvdW5kQW5jaG9yQV8xAPQBK19lbXNjcmlwdGVuX2JpbmRfYjJSb3BlSm9pbnREZWZfc2V0X2JvZHlBXzEARDFfZW1zY3JpcHRlbl9iaW5kX2IyUmV2b2x1dGVKb2ludF9Jc0xpbWl0RW5hYmxlZF8wAPEDIV9lbXNjcmlwdGVuX2JpbmRfYjJNYXQyMl9nZXRfZXhfMABoMl9lbXNjcmlwdGVuX2JpbmRfYjJNb3VzZUpvaW50RGVmX2IyTW91c2VKb2ludERlZl8wAK4DK19lbXNjcmlwdGVuX2JpbmRfYjJXZWxkSm9pbnREZWZfc2V0X2JvZHlCXzEARSRfZW1zY3JpcHRlbl9iaW5kX2IyVHJhbnNmb3JtX3NldF9wXzEA6QEsX2Vtc2NyaXB0ZW5fYmluZF9iMkRpc3RhbmNlSm9pbnRfU2V0TGVuZ3RoXzEA5QkoX2Vtc2NyaXB0ZW5fYmluZF9iMkpvaW50RWRnZV9nZXRfam9pbnRfMAAxKF9lbXNjcmlwdGVuX2JpbmRfYjJCb2R5X0dldExvY2FsQ2VudGVyXzAA9QErX2Vtc2NyaXB0ZW5fYmluZF9iMkZpeHR1cmVEZWZfX19kZXN0cm95X19fMABIKV9lbXNjcmlwdGVuX2JpbmRfYjJGaXh0dXJlRGVmX3NldF9zaGFwZV8xAEIpX2Vtc2NyaXB0ZW5fYmluZF9iMldlbGRKb2ludF9HZXRBbmNob3JBXzAA7QIuX2Vtc2NyaXB0ZW5fYmluZF9iMlByb2ZpbGVfZ2V0X3NvbHZlVmVsb2NpdHlfMACMCSlfZW1zY3JpcHRlbl9iaW5kX2IyUHVsbGV5Sm9pbnRfR2V0Qm9keUFfMAA0L19lbXNjcmlwdGVuX2JpbmRfYjJXb3JsZF9HZXRDb250aW51b3VzUGh5c2ljc18wAKoCK19lbXNjcmlwdGVuX2JpbmRfYjJCb2R5X1NldEFuZ3VsYXJEYW1waW5nXzEA2wkuX2Vtc2NyaXB0ZW5fYmluZF9iMlB1bGxleUpvaW50RGVmX0luaXRpYWxpemVfNwD7CStfZW1zY3JpcHRlbl9iaW5kX2IyR2VhckpvaW50RGVmX3NldF9ib2R5Ql8xAEUtX2Vtc2NyaXB0ZW5fYmluZF9iMk1vdXNlSm9pbnREZWZfc2V0X3RhcmdldF8xAPQBIV9lbXNjcmlwdGVuX2JpbmRfYjJNYXQyMl9zZXRfZXhfMQDpASZfZW1zY3JpcHRlbl9iaW5kX2IyR2VhckpvaW50X0dldFR5cGVfMAAxLV9lbXNjcmlwdGVuX2VudW1fYjJEcmF3RmxhZ19lX2NlbnRlck9mTWFzc0JpdACMBCxfZW1zY3JpcHRlbl9iaW5kX2IyQ2hhaW5TaGFwZV9iMkNoYWluU2hhcGVfMAD4AjJfZW1zY3JpcHRlbl9iaW5kX2IyUm9wZUpvaW50RGVmX3NldF9sb2NhbEFuY2hvckJfMQD2ATBfZW1zY3JpcHRlbl9iaW5kX2IyRnJpY3Rpb25Kb2ludERlZl9Jbml0aWFsaXplXzMA8gEuX2Vtc2NyaXB0ZW5fYmluZF9iMkdlYXJKb2ludERlZl9zZXRfdXNlckRhdGFfMQAwJl9lbXNjcmlwdGVuX2JpbmRfYjJGaXh0dXJlX1NldFNlbnNvcl8xAG8rX2Vtc2NyaXB0ZW5fYmluZF9iMkVkZ2VTaGFwZV9nZXRfbV9yYWRpdXNfMACjCShfZW1zY3JpcHRlbl9iaW5kX2IyQ29udGFjdF9HZXRGaXh0dXJlQl8wADUrX2Vtc2NyaXB0ZW5fYmluZF9iMkNoYWluU2hhcGVfQ29tcHV0ZU1hc3NfMgDJCR9fZW1zY3JpcHRlbl9iaW5kX2IyVmVjMl9zZXRfeV8xAPsIMl9lbXNjcmlwdGVuX2JpbmRfYjJQcmlzbWF0aWNKb2ludF9Jc0xpbWl0RW5hYmxlZF8wAL8CK19lbXNjcmlwdGVuX2JpbmRfYjJSb3BlSm9pbnREZWZfZ2V0X2JvZHlCXzAAOiZfZW1zY3JpcHRlbl9iaW5kX2IyQm9keURlZl9iMkJvZHlEZWZfMACwASZfZW1zY3JpcHRlbl9iaW5kX2IyTWFzc0RhdGFfZ2V0X21hc3NfMACGCSZfZW1zY3JpcHRlbl9iaW5kX2IySm9pbnRfU2V0VXNlckRhdGFfMQA8I19lbXNjcmlwdGVuX2JpbmRfYjJKb2ludF9HZXRCb2R5Ql8wADU3X2Vtc2NyaXB0ZW5fYmluZF9iMk1vdXNlSm9pbnREZWZfc2V0X2NvbGxpZGVDb25uZWN0ZWRfMQBHMV9lbXNjcmlwdGVuX2JpbmRfYjJXaGVlbEpvaW50RGVmX3NldF9sb2NhbEF4aXNBXzEAhwIfX2Vtc2NyaXB0ZW5fYmluZF9iMkpvaW50X0R1bXBfMAA/Ml9lbXNjcmlwdGVuX2JpbmRfYjJXaGVlbEpvaW50RGVmX2IyV2hlZWxKb2ludERlZl8wANwCNF9lbXNjcmlwdGVuX2JpbmRfYjJSZXZvbHV0ZUpvaW50RGVmX3NldF9tb3RvclNwZWVkXzEAmgksX2Vtc2NyaXB0ZW5fYmluZF9iMk1vdG9ySm9pbnREZWZfZ2V0X2JvZHlBXzAAQy5fZW1zY3JpcHRlbl9iaW5kX2IyRnJpY3Rpb25Kb2ludF9HZXRNYXhGb3JjZV8wALUJJ19lbXNjcmlwdGVuX2JpbmRfYjJWZWMyX0xlbmd0aFNxdWFyZWRfMAD8CS9fZW1zY3JpcHRlbl9iaW5kX2IyRnJpY3Rpb25Kb2ludERlZl9zZXRfYm9keUFfMQBENF9lbXNjcmlwdGVuX2JpbmRfYjJXaGVlbEpvaW50X0dldFNwcmluZ0ZyZXF1ZW5jeUh6XzAAxgkuX2Vtc2NyaXB0ZW5fYmluZF9iMkNvbnRhY3RGZWF0dXJlX2dldF9pbmRleEJfMADIATRfZW1zY3JpcHRlbl9iaW5kX2IyV2hlZWxKb2ludF9TZXRTcHJpbmdGcmVxdWVuY3lIel8xAK0JJl9lbXNjcmlwdGVuX2JpbmRfYjJTaGFwZV9Db21wdXRlTWFzc18yAMkJK19lbXNjcmlwdGVuX2JpbmRfYjJGcmljdGlvbkpvaW50X0dldEJvZHlBXzAANDFfZW1zY3JpcHRlbl9iaW5kX2IyTWFuaWZvbGRQb2ludF9nZXRfbG9jYWxQb2ludF8wAGg2X2Vtc2NyaXB0ZW5fYmluZF9iMkRpc3RhbmNlSm9pbnREZWZfc2V0X2xvY2FsQW5jaG9yQV8xAPQBOF9lbXNjcmlwdGVuX2JpbmRfYjJQcmlzbWF0aWNKb2ludERlZl9nZXRfbWF4TW90b3JGb3JjZV8wAP0JK19lbXNjcmlwdGVuX2JpbmRfYjJEaXN0YW5jZUpvaW50X0dldEJvZHlBXzAANC5fZW1zY3JpcHRlbl9iaW5kX2IyRGlzdGFuY2VKb2ludF9HZXRVc2VyRGF0YV8wADsyX2Vtc2NyaXB0ZW5fYmluZF9iMkRpc3RhbmNlSm9pbnREZWZfZ2V0X3VzZXJEYXRhXzAAMTtfZW1zY3JpcHRlbl9iaW5kX2IyUHJpc21hdGljSm9pbnREZWZfZ2V0X2NvbGxpZGVDb25uZWN0ZWRfMABGLF9lbXNjcmlwdGVuX2JpbmRfYjJNYW5pZm9sZF9nZXRfcG9pbnRDb3VudF8wAIICL19lbXNjcmlwdGVuX2JpbmRfYjJQcmlzbWF0aWNKb2ludERlZl9nZXRfdHlwZV8wAEE7X2Vtc2NyaXB0ZW5fYmluZF9iMkRlc3RydWN0aW9uTGlzdGVuZXJXcmFwcGVyX19fZGVzdHJveV9fXzAALzRfZW1zY3JpcHRlbl9iaW5kX2IyTWFuaWZvbGRQb2ludF9zZXRfbm9ybWFsSW1wdWxzZV8xAJIJLF9lbXNjcmlwdGVuX2VudW1fYjJMaW1pdFN0YXRlX2VfYXRVcHBlckxpbWl0AIIELF9lbXNjcmlwdGVuX2JpbmRfYjJCb2R5X1NldEFuZ3VsYXJWZWxvY2l0eV8xAP4JLF9lbXNjcmlwdGVuX2JpbmRfYjJQb2x5Z29uU2hhcGVfZ2V0X21fdHlwZV8wADEvX2Vtc2NyaXB0ZW5fYmluZF9iMk1vdXNlSm9pbnREZWZfZ2V0X3VzZXJEYXRhXzAAMSdfZW1zY3JpcHRlbl9iaW5kX2IyV29ybGRfR2V0Qm9keUNvdW50XzAArgIrX2Vtc2NyaXB0ZW5fYmluZF9iMlJvcGVKb2ludF9TZXRNYXhMZW5ndGhfMQDKCSdfZW1zY3JpcHRlbl9iaW5kX2IyQm9keV9SZXNldE1hc3NEYXRhXzAAzQMuX2Vtc2NyaXB0ZW5fYmluZF9iMlBvbHlnb25TaGFwZV9zZXRfbV9yYWRpdXNfMQCSCTFfZW1zY3JpcHRlbl9iaW5kX2IyUHJpc21hdGljSm9pbnREZWZfSW5pdGlhbGl6ZV80AIUCNl9lbXNjcmlwdGVuX2JpbmRfSlNDb250YWN0TGlzdGVuZXJfSlNDb250YWN0TGlzdGVuZXJfMADPAgtydW5Qb3N0U2V0cwCUBgpzdGFja0FsbG9jACgJc3RhY2tTYXZlACkMc3RhY2tSZXN0b3JlACoTZXN0YWJsaXNoU3RhY2tTcGFjZQArC3NldFRlbXBSZXQwAC0LZ2V0VGVtcFJldDAALghzZXRUaHJldwAsDGR5bkNhbGxfaWlpaQCZBg5keW5DYWxsX3ZpaWZpaQD/CQ5keW5DYWxsX3ZpaWlpaQDDBgpkeW5DYWxsX3ZpANgGC2R5bkNhbGxfdmlpAO0GCmR5bkNhbGxfaWkAggcLZHluQ2FsbF9maWYAgAoMZHluQ2FsbF92aWlpAKwHDWR5bkNhbGxfdmlpZmkAgQoJZHluQ2FsbF92ANYHDGR5bkNhbGxfdmlpZgCCCg9keW5DYWxsX3ZpaWlpaWkAgAgLZHluQ2FsbF9paWkAlQgOZHluQ2FsbF9paWlpaWkAqggOZHluQ2FsbF9maWlpaWYAgwoNZHluQ2FsbF92aWlpaQDUCAmEkoCAAAEAIwQLgAnpCOkImgbpCJsG6QicBukInQbpCJ4G6QifBukIoAbpCKEG6QiiBukIowbpCKQG6QilBukIpgbpCKcG6QioBukIqQbpCKoG6QirBukIrAbpCK0G6QiXBKwErAS5BL4EwgTKBcgFywX8BekI6QjpCOkI6QjpCOkI6QjpCOkI6QjpCOoI6givBuoIsAbqCLEG6giyBuoIswbqCLQG6gi1BuoItgbqCLcG6gi4BuoIuQbqCLoG6gi7BuoIvAbqCL0G6gi+BuoIvwbqCMAG6gjBBuoIwgbqCJsE6gjqCOoI6gjqCOoI6gjqCOoI6gjqCOoI6gjqCOoI6gjqCOoI6gjqCOoI6wjrCMQG6wjFBusIxgbrCMcG6wjIBusIyQbrCMoG6wjLBusIzAbrCM0G6wjOBusIzwbrCNAG6wjRBusI0gbrCNMG6wjUBusI1QbrCNYG6wjXBusI/gWGBosG6wjrCOsI6wjrCOsI6wjrCOsI6wjrCOsI6wjrCOsI6wjrCOsI6wjsCOwI2QbsCNoG7AjbBuwI3AbsCN0G7AjeBuwI3wbsCOAG7AjhBuwI4gbsCOMG7AjkBuwI5QbsCOYG7AjnBuwI6AbsCOkG7AjqBuwI6wbsCOwG7AiQBI0EkASNBJAEjQSQBI0EkASNBJAEjQSiBJAEjQSoBKkEkASNBI0EjQSNBI0EkASNBI0EjQSNBI0EjQSNBNIEjQTaBI0E4QSNBOkEjQTvBI0E9ASNBPkEjQT+BI0EgwWNBIoFjQSOBY0EkASNBJAEkASNBI0EiQbsCOwI7AjsCOwI7AjsCOwI7AjsCOwI7AjsCOwI7AjsCOwI7AjsCOwI7AjsCOwI7AjsCOwI7QjtCO4G7QjvBu0I8AbtCPEG7QjyBu0I8wbtCPQG7Qj1Bu0I9gbtCPcG7Qj4Bu0I+QbtCPoG7Qj7Bu0I/AbtCP0G7Qj+Bu0I/wbtCIAH7QiBB+0IUVKOBI8EkwSUBJ0EngSfBKMEpASlBKMEowTOBM8E0wTUBNYE1wTbBNwE3QTeBOIE4wTlBOYE6gTrBOwE1gTXBPAE8QTdBN4E9QT2BPcE1gTXBPoE+wTWBNcE/wSABc4EzwSEBYUFhwWIBYsFjAWpBakFqQWpBakFqQWpBe0I7QjtCO0I7QjtCO0I7QjtCO0I7QjtCO0I7QjtCO0I7QjtCO0I7QjtCO0I7QjuCO4IgwfuCIQH7giFB+4IhgfuCIcH7giIB+4IiQfuCIoH7giLB+4IjAfuCI0H7giOB+4IjwfuCJAH7giRB+4IkgfuCJMH7giUB+4IlQfuCJYH7girBLIEsgSyBMcF7gjuCO4I7gjuCO4I7gjuCO4I7gjuCO4I7gjuCO4I7gjuCO8I7wiYB+8ImQfvCJoH7wibB+8InAfvCJ0H7wieB+8InwfvCKAH7wihB+8IogfvCKMH7wikB+8IpQfvCKYH7winB+8IqAfvCKkH7wiqB+8IqwfvCKEE0QTZBOAE6ATuBNEE2QTRBKIDogPvCO8I7wjvCO8I7wjvCO8I7wjvCO8I8AjwCK0H8AiuB/AIrwfwCLAH8AixB/AIsgfwCLMH8Ai0B/AItQfwCLYH8Ai3B/AIuAfwCLkH8Ai6B/AIuwfw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gAAAIABBMGoLjICAgAAAIAAgASkCADcCMAuHgICAAAAgACgCOAuJgICAAAAgACABNgI4C4eAgIAAACAAKAI8C4mAgIAAACAAIAE2AjwLl4GAgAABAn8Cf0HIABD3BSIAQQRqIgFCADcCACABQQA2AgggAUEAOgAMIABBAjYCACAAQRRqIgFCADcCACABQgA3AgggAEMAAIA/OAIkIABDAAAAADgCKCAAQwAAAAA4AiwgAEEAOgAwIABDAAAAADgCNCAAQwAAAAA4AjggAEEAOgA8IABDAAAAADgCQCAAQwAAAAA4AkQgAAsL6oGAgAACA38EfQJAIAAgATYCCCAAIAI2AgwgACADKgIAIAEqAgyTIgggAUEYaiIFKgIAIgmUIANBBGoiBioCACABKgIQkyIKIAFBFGoiByoCACILlJI4AhQgACAJIAqUIAggC5STOAIYIAAgAyoCACACKgIMkyIIIAIqAhgiCZQgBioCACACKgIQkyIKIAIqAhQiC5SSOAIcIAAgCSAKlCAIIAuUkzgCICAAIAUqAgAiCCAEKgIAIgmUIAcqAgAiCiAEKgIEIguUkjgCJCAAIAggC5QgCSAKlJM4AiggACACKgI4IAEqAjiTOAIsCwuHgICAAAAgAEEkaguMgICAAAAgACABKQIANwIkC4eAgIAAACAAKgIsC4mAgIAAACAAIAE4AiwLioCAgAAAIAAsADBBAEcLjICAgAAAIAAgAUEBcToAMAuHgICAAAAgACoCNAuJgICAAAAgACABOAI0C4eAgIAAACAAKgI4C4mAgIAAACAAIAE4AjgLioCAgAAAIAAsADxBAEcLjICAgAAAIAAgAUEBcToAPAuHgICAAAAgACoCQAuJgICAAAAgACABOAJAC5eAgIAAAQF/An9B9KQGEPcFIgEgABC5BSABCwuOgICAAAAgAEHEpAZqIAE2AgALjoCAgAAAIABBnKQGaiABNgIAC46AgIAAACAAQaCkBmogATYCAAuOgICAAAAgAEHIpAZqIAE2AgALiYCAgAAAIAAgARC7BQuJgICAAAAgACABELwFC4mAgIAAACAAIAEQvgULiYCAgAAAIAAgARC9BQuNgICAAAAgACABIAIgAxC/BQvAgICAAAACQCAAQaikBmooAgAiAEUEQA8LA0AgAEMAAAAAOAJMIABDAAAAADgCUCAAQwAAAAA4AlQgACgCYCIADQALCwuHgICAAAAgABDDBQuLgICAAAAgACABIAIQwAULjYCAgAAAIAAgASACIAMQwQULjICAgAAAIABBqKQGaigCAAuMgICAAAAgAEGspAZqKAIAC4yAgIAAACAAQZSkBmooAgAL8oCAgAABAX8CQCABQQFxIABBwKQGaiICLQAARgRADwsgAiABQQFxOgAAIAEEQA8LIABBqKQGaigCACIARQRADwsDQCAAQQRqIgEvAQAiAkECcUUEQCABIAJBAnI7AQAgAEMAAAAAOAKQAQsgACgCYCIADQALCwuPgICAAAAgAEHApAZqLAAAQQBHC5GAgIAAACAAQdCkBmogAUEBcToAAAuPgICAAAAgAEHQpAZqLAAAQQBHC5GAgIAAACAAQdGkBmogAUEBcToAAAuPgICAAAAgAEHRpAZqLAAAQQBHC5GAgIAAACAAQdKkBmogAUEBcToAAAuPgICAAAAgAEHSpAZqLAAAQQBHC4yAgIAAACAAQfSjBmooAgALjICAgAAAIABBsKQGaigCAAuMgICAAAAgAEG0pAZqKAIAC4yAgIAAACAAQZikBmooAgALr4CAgAABAX8CfyAAQdijBmooAgAiAUF/RgRAQQAPCyAAQdyjBmooAgAgAUEkbGooAiALC8aBgIAAAQV/An8gAEHkowZqKAIAIgRBAEwEQEEADwsgAEHcowZqKAIAIQJBACEDQQAhAAJAAkACQANAIAIgA0EkbGooAiBBAk4EQCACIANBJGxqKAIYIgFBf0YNAkEAIAIgAiADQSRsaigCHEEkbGooAiAgAiABQSRsaigCIGsiAWshBSAAIAFBAEoEfyABBSAFIgELTARAIAEhAAsLIANBAWoiAyAESA0ADAILAAtB4dYAQdzRAEGrBUH51gAQGQwBCyAADwtBAAsL8oGAgAACAn8FfQJ9IABB2KMGaigCACICQX9GBEBDAAAAAA8LIABB3KMGaigCACIBIAJBJGxqKgIIIQQgASACQSRsaioCACEFIAEgAkEkbGoqAgwhBiABIAJBJGxqKgIEIQcgAEHkowZqKAIAIgJBAEoEQEEAIQBDAAAAACEDA0AgASAAQSRsaigCIEEATgRAIAMgASAAQSRsaioCCCABIABBJGxqKgIAkyABIABBJGxqKgIMIAEgAEEkbGoqAgSTkkMAAABA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ICIgKpQgIyAmlJMiKjgCACAFQYwBaiIWICc4AgAgBUGQAWoiFyAlICOUICIgJJSSIiY4AgAgBSArICYgAyoCDCIilCAnIAMqAhAiI5STkiIsOAKUASAFICIgJ5QgJiAjlJIgKpIiMDgCmAEgBSABKQIcIh43ApwBIAVBpAFqIhEgASkCDCIfNwIAIAVBrAFqIhAgASkCFCIgNwIAIAUgASkCJCIhNwK0ASABLAAsQQBHIQQgASwALSECICCnviIyIB+nviIokyIiICKUICBCIIinviIzIB9CIIinviItkyIjICOUkpEiJUMAAAA0XSEBICJDAACAPyAllSIllCEkICMgJZQhJSABRQRAICQhIgsgBUHEAWoiBiABBH0gIwUgJSIjCzgCACAFQcgBaiIUICKMIjE4AgAgHqe+ISkgHkIgiKe+IS8gBAR/ICggKZMiJSAllCAtIC+TIiQgJJSSkSIuQwAAADRdIQEgJUMAAIA/IC6VIi6UITQgJCAulCEuIAFFBEAgNCElCyAFIAEEfSAkBSAuIiQLOAK8ASAFICWMIi44AsABICwgKZMgJJQgMCAvkyAulJIhKSAjICWUICIgJJSTQwAAAABgBUMAAAAAISlBAAshASAsICiTICOUIDAgLZMgMZSSISggIae+ISUgIUIgiKe+ISQCQCACBEAgJSAykyIlICWUICQgM5MiJCAklJKRIi1DAAAANF0hAiAlQwAAgD8gLZUiLZQhLyAkIC2UIS0gAkUEQCAvISULIAUgAgR9ICQFIC0iJAs4AswBIAUgJYwiLTgC0AEgIiAklCAjICWUk0MAAAAAXiECICwgMpMgJJQgMCAzkyAtlJIhLCAERQRAIChDAAAAAGAhASAsQwAAAABgIQQgAgRAIAUgASAEciICQQFxIgE6APgBIAIEQCAFIAYpAgAiHjcC1AEgBSAep76MOALkASAFICI4AugBIAUgBSkCzAE3AuwBDAQFIAUgI4wiIzgC1AEgBSAiOALYASAFICM4AuQBIAUgIjgC6AEgBSAGKQIANwLsAQwECwAFIAUgASAEcSICQQFxIgE6APgBIAIEQCAFIAYpAgAiHjcC1AEgBSAep76MOALkASAFICI4AugBIAUgHjcC7AEMBAUgBSAjjDgC1AEgBSAiOALYASAFICSMOALkASAFICU4AugBIAUgBikCADcC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QCAHJAYPCyABKQIAIQ4gASAFKQIANwIAIAUgDjcCACABIAggAigCAEE/cUGAB2oRCABFBEAgByQGDwsgCCkCACEOIAggASkCADcCACABIA43AgAgCCADIAIoAgBBP3FBgAdqEQgARQRAIAckBg8LIAMpAgAhDiADIAgpAgA3AgAgCCAONwIAIAMgACACKAIAQT9xQYAHahEIAEUEQCAHJAYPCyAAKQIAIQ4gACADKQIANwIAIAMgDjcCACAHJAYPCyAAQQhqIgYgACACKAIAQT9xQYAHahEIACEBIABBEGoiAyAGIAIoAgBBP3FBgAdqEQgAIQQCQCABBEAgACkCACEOIAQEQCAAIAMpAgA3AgAgAyAONwIADAILIAAgBikCADcCACAGIA43AgAgAyAGIAIoAgBBP3FBgAdqEQgABEAgBikCACEOIAYgAykCADcCACADIA43AgALBSAEBEAgBikCACEOIAYgAykCADcCACADIA43AgAgBiAAIAIoAgBBP3FBgAdqEQgABEAgACkCACEOIAAgBikCADcCACAGIA43AgALCwsLIABBGGoiASAIRgRAIAckBg8LA0AgASADIAIoAgBBP3FBgAdqEQgABEAgCiABKQIANwMAIAEhBANAAkAgBCADKQIANwIAIAMgAEYNACAKIANBeGoiBiACKAIAQT9xQYAHahEIAARAIAMhBCAGIQMMAgsLCyADIAopAwA3AgALIAFBCGoiBCAIRwRAIAEhAyAEIQEMAQsLIAckBg8LIAckBgsL54GAgAABAn0CfyAEQZQBELYEIgFBBDYCBCABIAA2AjAgASACNgI0IAFBADYCOCABQQA2AjwgAUEANgJ8IAFBADYCgAEgAUEIaiIDQgA3AgAgA0IANwIIIANCADcCECADQgA3AhggA0IANwIgIAEgACoCECACKgIQlJE4AogBIAEgACoCFCIFIAIqAhQiBl4EfSAFBSAGCzgCjAEgAUMAAAAAOAKQASABQewRNgIAIAAoAgwoAgQEQEHW8gBBgfMAQStBuvMAEBkLIAIoAgwoAgQEQEHK8wBBgfMAQSxBuvMAEBkFIAEPC0EACwvXgICAAAEBfwJAIAAgACgCACgCBEH/AHFBwAFqEQAAQeCpAS0AACICQQ5IBEAgACABQQxqIAJBAnRqIgEoAgA2AgAgASAANgIABUHAPUGR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IgJCADcCACACQgA3AgggAEGIpAZqQRA2AgAgAEGMpAZqQQA2AgAgAEGEpAZqQYABEPIFNgIAIABB/KMGakEQNgIAIABBgKQGakEANgIAIABB+KMGakHAABDyBTYCACAAQZSkBmpBADYCACAAQZikBmpBADYCACAAQZykBmpBgBE2AgAgAEGgpAZqQZgRNgIAIABBxKQGakEANgIAIABByKQGakEANgIAIABBpKQGaiICQgA3AgAgAkIANwIIIAJBADYCECAAQdCkBmpBAToAACAAQdGkBmpBAToAACAAQdKkBmpBADoAACAAQdOkBmpBAToAACAAQcCkBmpBAToAACAAQbikBmogASkCADcCACAAQdSjBmpBBDYCACAAQcykBmpDAAAAADgCACACIAA2AgAgAEHUpAZqIgBCADcCACAAQgA3AgggAEIANwIQIABCADcCGAsLhIKAgAABA38CQCAAQaikBmooAgAiAQRAA0AgASgCYCECIAEoAmQhAQNAIAEEQCABKAIEIQMgAUEANgIcIAEgABCeBSADIQEMAQsLIAIEQCACIQEMAQsLCyAAQfijBmooAgAQ8wUgAEGEpAZqKAIAEPMFIABB3KMGaigCABDzBSAAQcSgBmooAgAEQEG42gBBxdoAQSBB9NoAEBkLIABB0KMGaigCAARAQYbbAEHF2gBBIUH02gAQGQsgACgCACEBIABBBGoiAygCAEEASgRAQQAhAgUgARDzBQ8LA0AgASACQQN0aigCBBDzBSAAKAIAIQEgAkEBaiICIAMoAgBIDQALIAEQ8wULC8KHgIAAAwl/AX4BfQJ/IABB1KMGaigCAEECcQRAQcf2AEHb9gBB7QBBg/cAEBkLIABBmAEQtgQhAiABQQRqIgYoAgBBgICA/AdxQYCAgPwHRgRAQerbAEGB3ABBG0Go3AAQGQsgASgCCEGAgID8B3FBgICA/AdGBEBB6tsAQYHcAEEbQajcABAZCyABQRBqIgcoAgBBgICA/AdxQYCAgPwHRgRAQa/cAEGB3ABBHEGo3AAQGQsgASgCFEGAgID8B3FBgICA/AdGBEBBr9wAQYHcAEEcQajcABAZCyABQQxqIgUoAgBBgICA/AdxQYCAgPwHRgRAQczcAEGB3ABBHUGo3AAQGQsgAUEYaiIIKAIAQYCAgPwHcUGAgID8B0YEQEHh3ABB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IAAgCSADQQlIBH8gAwVBCQsQzwUgA0F3aiEJIAVBBGoiBSAISSADQQlKcQRAIAkhAwwBBSAJIQMLCwsgAEEwIANBCWpBCUEAENoFBSALQQRqIQUgEAR/IAgFIAULIQ0gA0F/SgRAIApFIQ8gDkEJaiIMIRFBACATayETIA5BCGohCiALIQkgAyEFA0AgCSgCAK0gDBDYBSIDIAxGBEAgCkEwOgAAIAohAwsCQCAJIAtGBEAgA0EBaiEIIAAgA0EBEM8FIA8gBUEBSHEEQCAIIQMMAgsgAEGEiAFBARDPBSAIIQMFIAMgDk0NASAOQTAgAyATahCVBhoDQCADQX9qIgMgDksNAAsLCyAAIAMgBSARIANrIgNKBH8gAwUgBQsQzwUgCUEEaiIJIA1JIAUgA2siBUF/SnENACAFIQMLCyAAQTAgA0ESakESQQAQ2gUgACAGIBIgBmsQzwULIABBICACIAcgBEGAwABzENoFIAcFIAVBIHFBAEciAwR/QeSHAQVB6IcBCyEFIAEgAWJBAHIhCSADBH9B7IcBBUHwhwELIQggAEEgIAIgEUEDaiIDIARB//97cRDaBSAAIA0gERDPBSAAIAkEfyAIBSAFC0EDEM8FIABBICACIAMgBEGAwABzENoFIAMLCyEAIBUkBiAAIAJIBH8gAgUgAAsLC4WAgIAAACAAvQuJgICAAAAgACABEOAFC4qRgIAAAQJ+AnwCQAJAAkACQCAAvSICQjSIIgOnQf8PcQ6AEAACAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIBAgsgASAARAAAAAAAAAAAYgR/IABEAAAAAAAA8EOiIAEQ4AUhACABKAIAQUBqBUEACzYCAAwCCwwBCyABIAOnQf8PcUGCeGo2AgAgAkL/////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ACAAQQFqIQAgAUEBaiEBIAJBAWshAgwBCwsgA0F8cSICQcAAayEFA0AgACAFTARAIAAgASgCADYCACAAIAEoAgQ2AgQgACABKAIINgIIIAAgASgCDDYCDCAAIAEoAhA2AhAgACABKAIUNgIUIAAgASgCGDYCGCAAIAEoAhw2AhwgACABKAIgNgIgIAAgASgCJDYCJCAAIAEoAig2AiggACABKAIsNgIsIAAgASgCMDYCMCAAIAEoAjQ2AjQgACABKAI4NgI4IAAgASgCPDYCPCAAQcAAaiEAIAFBwABqIQEMAQsLA0AgACACSARAIAAgASgCADYCACAAQQRqIQAgAUEEaiEBDAELCwUgA0EEayECA0AgACACSARAIAAgASwAADoAACAAIAEsAAE6AAEgACABLAACOgACIAAgASwAAzoAAyAAQQRqIQAgAUEEaiEBDAELCwsDQCAAIANIBEAgACABLAAAOgAAIABBAWohACABQQFqIQEMAQsLIAQLC96AgIAAAQJ/An8jBSgCACICIABBD2pBcHEiAGohASAAQQBKIAEgAkhxIAFBAEhyBEAQAxpBDBAaQX8PCyMFIAE2AgAgARACSgRAEAFFBEBBDBAaIwUgAjYCAEF/DwsLIAILC6uAgIAAACAAQf8BcUEYdCAAQQh1Qf8BcUEQdHIgAEEQdUH/AXFBCHRyIABBGHZyC5CAgIAAACABIAIgAyAAQT9xEQUAC4yAgIAAAEEAIAAgASACEAQLjICAgAAAQQEgACABIAIQBAuMgICAAABBAiAAIAEgAhAEC4yAgIAAAEEDIAAgASACEAQLjICAgAAAQQQgACABIAIQBAuMgICAAABBBSAAIAEgAhAEC4yAgIAAAEEGIAAgASACEAQLjICAgAAAQQcgACABIAIQBAuMgICAAABBCCAAIAEgAhAEC4yAgIAAAEEJIAAgASACEAQLjICAgAAAQQogACABIAIQBAuMgICAAABBCyAAIAEgAhAEC4yAgIAAAEEMIAAgASACEAQLjICAgAAAQQ0gACABIAIQBAuMgICAAABBDiAAIAEgAhAEC4yAgIAAAEEPIAAgASACEAQLjICAgAAAQRAgACABIAIQBAuMgICAAABBESAAIAEgAhAEC4yAgIAAAEESIAAgASACEAQLjICAgAAAQRMgACABIAIQBAuYgICAAAAgASACIAMgBCAFIABBP3FBwABqEQwAC5GAgIAAAEEAIAAgASACuyADIAQQBQuRgICAAABBASAAIAEgArsgAyAEEAULkYCAgAAAQQIgACABIAK7IAMgBBAFC5GAgIAAAEEDIAAgASACuyADIAQQBQuRgICAAABBBCAAIAEgArsgAyAEEAULkYCAgAAAQQUgACABIAK7IAMgBBAFC5GAgIAAAEEGIAAgASACuyADIAQQBQuRgICAAABBByAAIAEgArsgAyAEEAULkYCAgAAAQQggACABIAK7IAMgBBAFC5GAgIAAAEEJIAAgASACuyADIAQQBQuRgICAAABBCiAAIAEgArsgAyAEEAULkYCAgAAAQQsgACABIAK7IAMgBBAFC5GAgIAAAEEMIAAgASACuyADIAQQBQuRgICAAABBDSAAIAEgArsgAyAEEAULkYCAgAAAQQ4gACABIAK7IAMgBBAFC5GAgIAAAEEPIAAgASACuyADIAQQBQuRgICAAABBECAAIAEgArsgAyAEEAULkYCAgAAAQREgACABIAK7IAMgBBAFC5GAgIAAAEESIAAgASACuyADIAQQBQuRgICAAABBEyAAIAEgArsgAyAEEAULmICAgAAAIAEgAiADIAQgBSAAQT9xQYABahEQAAuQgICAAABBACAAIAEgAiADIAQQBguQgICAAABBASAAIAEgAiADIAQQBguQgICAAABBAiAAIAEgAiADIAQQBguQgICAAABBAyAAIAEgAiADIAQQBguQgICAAABBBCAAIAEgAiADIAQQBguQgICAAABBBSAAIAEgAiADIAQQBguQgICAAABBBiAAIAEgAiADIAQQBguQgICAAABBByAAIAEgAiADIAQQBguQgICAAABBCCAAIAEgAiADIAQQBguQgICAAABBCSAAIAEgAiADIAQQBguQgICAAABBCiAAIAEgAiADIAQQBguQgICAAABBCyAAIAEgAiADIAQQBguQgICAAABBDCAAIAEgAiADIAQQBguQgICAAABBDSAAIAEgAiADIAQQBguQgICAAABBDiAAIAEgAiADIAQQBguQgICAAABBDyAAIAEgAiADIAQQBguQgICAAABBECAAIAEgAiADIAQQBguQgICAAABBESAAIAEgAiADIAQQBguQgICAAABBEiAAIAEgAiADIAQQBguQgICAAABBEyAAIAEgAiADIAQQBguRgICAAAAgASAAQf8AcUHAAWoRAAALiICAgAAAQQAgABAHC4iAgIAAAEEBIAAQBwuIgICAAABBAiAAEAcLiICAgAAAQQMgABAHC4iAgIAAAEEEIAAQBwuIgICAAABBBSAAEAcLiICAgAAAQQYgABAHC4iAgIAAAEEHIAAQBwuIgICAAABBCCAAEAcLiICAgAAAQQkgABAHC4iAgIAAAEEKIAAQBwuIgICAAABBCyAAEAcLiICAgAAAQQwgABAHC4iAgIAAAEENIAAQBwuIgICAAABBDiAAEAcLiICAgAAAQQ8gABAHC4iAgIAAAEEQIAAQBwuIgICAAABBESAAEAcLiICAgAAAQRIgABAHC4iAgIAAAEETIAAQBwuTgICAAAAgASACIABB/wBxQcACahEBAAuKgICAAABBACAAIAEQCAuKgICAAABBASAAIAEQCAuKgICAAABBAiAAIAEQCAuKgICAAABBAyAAIAEQCAuKgICAAABBBCAAIAEQCAuKgICAAABBBSAAIAEQCAuKgICAAABBBiAAIAEQCAuKgICAAABBByAAIAEQCAuKgICAAABBCCAAIAEQCAuKgICAAABBCSAAIAEQCAuKgICAAABBCiAAIAEQCAuKgICAAABBCyAAIAEQCAuKgICAAABBDCAAIAEQCAuKgICAAABBDSAAIAEQCAuKgICAAABBDiAAIAEQCAuKgICAAABBDyAAIAEQCAuKgICAAABBECAAIAEQCAuKgICAAABBESAAIAEQCAuKgICAAABBEiAAIAEQCAuKgICAAABBEyAAIAEQCAuQgICAAAAgASAAQT9xQcADahEEAAuIgICAAABBACAAEAkLiICAgAAAQQEgABAJC4iAgIAAAEECIAAQCQuIgICAAABBAyAAEAkLiICAgAAAQQQgABAJC4iAgIAAAEEFIAAQCQuIgICAAABBBiAAEAkLiICAgAAAQQcgABAJC4iAgIAAAEEIIAAQCQuIgICAAABBCSAAEAkLiICAgAAAQQogABAJC4iAgIAAAEELIAAQCQuIgICAAABBDCAAEAkLiICAgAAAQQ0gABAJC4iAgIAAAEEOIAAQCQuIgICAAABBDyAAEAkLiICAgAAAQRAgABAJC4iAgIAAAEERIAAQCQuIgICAAABBEiAAEAkLiICAgAAAQRMgABAJC5KAgIAAACABIAIgAEE/cUGABGoRAwALjICAgAAAQQAgACABuxAKtguMgICAAABBASAAIAG7EAq2C4yAgIAAAEECIAAgAbsQCrYLjICAgAAAQQMgACABuxAKtguMgICAAABBBCAAIAG7EAq2C4yAgIAAAEEFIAAgAbsQCrYLjICAgAAAQQYgACABuxAKtguMgICAAABBByAAIAG7EAq2C4yAgIAAAEEIIAAgAbsQCrYLjICAgAAAQQkgACABuxAKtguMgICAAABBCiAAIAG7EAq2C4yAgIAAAEELIAAgAbsQCrYLjICAgAAAQQwgACABuxAKtguMgICAAABBDSAAIAG7EAq2C4yAgIAAAEEOIAAgAbsQCrYLjICAgAAAQQ8gACABuxAKtguMgICAAABBECAAIAG7EAq2C4yAgIAAAEERIAAgAbsQCrYLjICAgAAAQRIgACABuxAKtguMgICAAABBEyAAIAG7EAq2C5SAgIAAACABIAIgAyAAQT9xQcAEahEKAAuMgICAAABBACAAIAEgAhALC4yAgIAAAEEBIAAgASACEAsLjICAgAAAQQIgACABIAIQCwuMgICAAABBAyAAIAEgAhALC4yAgIAAAEEEIAAgASACEAsLjICAgAAAQQUgACABIAIQCwuMgICAAABBBiAAIAEgAhALC4yAgIAAAEEHIAAgASACEAsLjICAgAAAQQggACABIAIQCwuMgICAAABBCSAAIAEgAhALC4yAgIAAAEEKIAAgASACEAsLjICAgAAAQQsgACABIAIQCwuMgICAAABBDCAAIAEgAhALC4yAgIAAAEENIAAgASACEAsLjICAgAAAQQ4gACABIAIQCwuMgICAAABBDyAAIAEgAhALC4yAgIAAAEEQIAAgASACEAsLjICAgAAAQREgACABIAIQCwuMgICAAABBEiAAIAEgAhALC4yAgIAAAEETIAAgASACEAsLloCAgAAAIAEgAiADIAQgAEE/cUGABWoRCwALj4CAgAAAQQAgACABIAK7IAMQDAuPgICAAABBASAAIAEgArsgAxAMC4+AgIAAAEECIAAgASACuyADEAwLj4CAgAAAQQMgACABIAK7IAMQDAuPgICAAABBBCAAIAEgArsgAxAMC4+AgIAAAEEFIAAgASACuyADEAwLj4CAgAAAQQYgACABIAK7IAMQDAuPgICAAABBByAAIAEgArsgAxAMC4+AgIAAAEEIIAAgASACuyADEAwLj4CAgAAAQQkgACABIAK7IAMQDAuPgICAAABBCiAAIAEgArsgAxAMC4+AgIAAAEELIAAgASACuyADEAwLj4CAgAAAQQwgACABIAK7IAMQDAuPgICAAABBDSAAIAEgArsgAxAMC4+AgIAAAEEOIAAgASACuyADEAwLj4CAgAAAQQ8gACABIAK7IAMQDAuPgICAAABBECAAIAEgArsgAxAMC4+AgIAAAEERIAAgASACuyADEAwLj4CAgAAAQRIgACABIAK7IAMQDAuPgICAAABBEyAAIAEgArsgAxAMC46AgIAAACAAQT9xQcAFahEOAAuGgICAAABBABANC4aAgIAAAEEBEA0LhoCAgAAAQQIQDQuGgICAAABBAxANC4aAgIAAAEEEEA0LhoCAgAAAQQUQDQuGgICAAABBBhANC4aAgIAAAEEHEA0LhoCAgAAAQQgQDQuGgICAAABBCRANC4aAgIAAAEEKEA0LhoCAgAAAQQsQDQuGgICAAABBDBANC4aAgIAAAEENEA0LhoCAgAAAQQ4QDQuGgICAAABBDxANC4aAgIAAAEEQEA0LhoCAgAAAQREQDQuGgICAAABBEhANC4aAgIAAAEETEA0LlICAgAAAIAEgAiADIABBP3FBgAZqEQIAC42AgIAAAEEAIAAgASACuxAOC42AgIAAAEEBIAAgASACuxAOC42AgIAAAEECIAAgASACuxAOC42AgIAAAEEDIAAgASACuxAOC42AgIAAAEEEIAAgASACuxAOC42AgIAAAEEFIAAgASACuxAOC42AgIAAAEEGIAAgASACuxAOC42AgIAAAEEHIAAgASACuxAOC42AgIAAAEEIIAAgASACuxAOC42AgIAAAEEJIAAgASACuxAOC42AgIAAAEEKIAAgASACuxAOC42AgIAAAEELIAAgASACuxAOC42AgIAAAEEMIAAgASACuxAOC42AgIAAAEENIAAgASACuxAOC42AgIAAAEEOIAAgASACuxAOC42AgIAAAEEPIAAgASACuxAOC42AgIAAAEEQIAAgASACuxAOC42AgIAAAEERIAAgASACuxAOC42AgIAAAEESIAAgASACuxAOC42AgIAAAEETIAAgASACuxAOC5qAgIAAACABIAIgAyAEIAUgBiAAQT9xQcAGahEPAAuSgICAAABBACAAIAEgAiADIAQgBRAPC5KAgIAAAEEBIAAgASACIAMgBCAFEA8LkoCAgAAAQQIgACABIAIgAyAEIAUQDwuSgICAAABBAyAAIAEgAiADIAQgBRAPC5KAgIAAAEEEIAAgASACIAMgBCAFEA8LkoCAgAAAQQUgACABIAIgAyAEIAUQDwuSgICAAABBBiAAIAEgAiADIAQgBRAPC5KAgIAAAEEHIAAgASACIAMgBCAFEA8LkoCAgAAAQQggACABIAIgAyAEIAUQDwuSgICAAABBCSAAIAEgAiADIAQgBRAPC5KAgIAAAEEKIAAgASACIAMgBCAFEA8LkoCAgAAAQQsgACABIAIgAyAEIAUQDwuSgICAAABBDCAAIAEgAiADIAQgBRAPC5KAgIAAAEENIAAgASACIAMgBCAFEA8LkoCAgAAAQQ4gACABIAIgAyAEIAUQDwuSgICAAABBDyAAIAEgAiADIAQgBRAPC5KAgIAAAEEQIAAgASACIAMgBCAFEA8LkoCAgAAAQREgACABIAIgAyAEIAUQDwuSgICAAABBEiAAIAEgAiADIAQgBRAPC5KAgIAAAEETIAAgASACIAMgBCAFEA8LkoCAgAAAIAEgAiAAQT9xQYAHahEIAAuKgICAAABBACAAIAEQEAuKgICAAABBASAAIAEQEAuKgICAAABBAiAAIAEQEAuKgICAAABBAyAAIAEQEAuKgICAAABBBCAAIAEQEAuKgICAAABBBSAAIAEQEAuKgICAAABBBiAAIAEQEAuKgICAAABBByAAIAEQEAuKgICAAABBCCAAIAEQEAuKgICAAABBCSAAIAEQEAuKgICAAABBCiAAIAEQEAuKgICAAABBCyAAIAEQEAuKgICAAABBDCAAIAEQEAuKgICAAABBDSAAIAEQEAuKgICAAABBDiAAIAEQEAuKgICAAABBDyAAIAEQEAuKgICAAABBECAAIAEQEAuKgICAAABBESAAIAEQEAuKgICAAABBEiAAIAEQEAuKgICAAABBEyAAIAEQEAuYgICAAAAgASACIAMgBCAFIABBP3FBwAdqEQYAC5CAgIAAAEEAIAAgASACIAMgBBARC5CAgIAAAEEBIAAgASACIAMgBBARC5CAgIAAAEECIAAgASACIAMgBBARC5CAgIAAAEEDIAAgASACIAMgBBARC5CAgIAAAEEEIAAgASACIAMgBBARC5CAgIAAAEEFIAAgASACIAMgBBARC5CAgIAAAEEGIAAgASACIAMgBBARC5CAgIAAAEEHIAAgASACIAMgBBARC5CAgIAAAEEIIAAgASACIAMgBBARC5CAgIAAAEEJIAAgASACIAMgBBARC5CAgIAAAEEKIAAgASACIAMgBBARC5CAgIAAAEELIAAgASACIAMgBBARC5CAgIAAAEEMIAAgASACIAMgBBARC5CAgIAAAEENIAAgASACIAMgBBARC5CAgIAAAEEOIAAgASACIAMgBBARC5CAgIAAAEEPIAAgASACIAMgBBARC5CAgIAAAEEQIAAgASACIAMgBBARC5CAgIAAAEERIAAgASACIAMgBBARC5CAgIAAAEESIAAgASACIAMgBBARC5CAgIAAAEETIAAgASACIAMgBBARC5iAgIAAACABIAIgAyAEIAUgAEE/cUGACGoRCQALkoCAgAAAQQAgACABIAIgAyAEuxAStguSgICAAABBASAAIAEgAiADIAS7EBK2C5KAgIAAAEECIAAgASACIAMgBLsQErYLkoCAgAAAQQMgACABIAIgAyAEuxAStguSgICAAABBBCAAIAEgAiADIAS7EBK2C5KAgIAAAEEFIAAgASACIAMgBLsQErYLkoCAgAAAQQYgACABIAIgAyAEuxAStguSgICAAABBByAAIAEgAiADIAS7EBK2C5KAgIAAAEEIIAAgASACIAMgBLsQErYLkoCAgAAAQQkgACABIAIgAyAEuxAStguSgICAAABBCiAAIAEgAiADIAS7EBK2C5KAgIAAAEELIAAgASACIAMgBLsQErYLkoCAgAAAQQwgACABIAIgAyAEuxAStguSgICAAABBDSAAIAEgAiADIAS7EBK2C5KAgIAAAEEOIAAgASACIAMgBLsQErYLkoCAgAAAQQ8gACABIAIgAyAEuxAStguSgICAAABBECAAIAEgAiADIAS7EBK2C5KAgIAAAEERIAAgASACIAMgBLsQErYLkoCAgAAAQRIgACABIAIgAyAEuxAStguSgICAAABBEyAAIAEgAiADIAS7EBK2C5aAgIAAACABIAIgAyAEIABBP3FBwAhqEQcAC46AgIAAAEEAIAAgASACIAMQEwuOgICAAABBASAAIAEgAiADEBMLjoCAgAAAQQIgACABIAIgAxATC46AgIAAAEEDIAAgASACIAMQEwuOgICAAABBBCAAIAEgAiADEBMLjoCAgAAAQQUgACABIAIgAxATC46AgIAAAEEGIAAgASACIAMQEwuOgICAAABBByAAIAEgAiADEBMLjoCAgAAAQQggACABIAIgAxATC46AgIAAAEEJIAAgASACIAMQEwuOgICAAABBCiAAIAEgAiADEBMLjoCAgAAAQQsgACABIAIgAxATC46AgIAAAEEMIAAgASACIAMQEwuOgICAAABBDSAAIAEgAiADEBMLjoCAgAAAQQ4gACABIAIgAxATC46AgIAAAEEPIAAgASACIAMQEwuOgICAAABBECAAIAEgAiADEBMLjoCAgAAAQREgACABIAIgAxATC46AgIAAAEESIAAgASACIAMQEwuOgICAAABBEyAAIAEgAiADEBMLi4CAgAAAAn9BABAAQQALC4aAgIAAAEEBEAALhoCAgAAAQQIQAAuGgICAAABBAxAAC4aAgIAAAEEEEAALi4CAgAAAAn9BBRAAQQALC46AgIAAAAJ9QQYQAEMAAAAACwuGgICAAABBBxAAC4aAgIAAAEEIEAALhoCAgAAAQQkQAAuGgICAAABBChAAC4aAgIAAAEELEAALi4CAgAAAAn9BDBAAQQALC4uAgIAAAAJ/QQ0QAEEACwuOgICAAAACfUEOEABDAAAAAAsLhoCAgAAAQQ8QAAuHgICAAAAgABBcuwuIgICAAAAgABCbAbsLioCAgAAAIAAgAbYQnAELiICAgAAAIAAQjgK7C5CAgIAAACAAIAEgArYgAyAEEJkDC4qAgIAAACAAIAG2EI0CC46AgIAAACAAIAEgArYgAxCYAwuKgICAAAAgACABthA5uwuKgICAAAAgACABthCrAQuIgICAAAAgABCsAbsLjYCAgAAAIAAgAbYgArYQwwILioCAgAAAIAAgAbYQiQILioCAgAAAIAAgAbYQmgELh4CAgAAAIAAQersLh4CAgAAAIAAQfbsLiICAgAAAIAAQwQK7C4qAgIAAACAAIAG2EKMBC4qAgIAAACAAIAG2EMMBC4qAgIAAACAAIAG2EKUBC4eAgIAAACAAEHu7C4iAgIAAACAAEOkCuwuIgICAAAAgABDJA7sLiICAgAAAIAAQjAK7C4iAgIAAACAAEIgCuwuMgICAAAAgACABtiACEMgDC4mAgIAAACAAIAG2EE8LiICAgAAAIAAQswK7C4qAgIAAACAAIAG2EKADC4eAgIAAACAAEFi7C4mAgIAAACAAIAG2EFsLiICAgAAAIAAQjQG7C4iAgIAAACAAEOACuwuKgICAAAAgACABthDhAguKgICAAAAgACABthCPAguKgICAAAAgACABthClAwuIgICAAAAgABDwA7sLiICAgAAAIAAQ1gG7C4iAgIAAACAAEJ0DuwuKgICAAAAgACABthCVAQuIgICAAAAgABCiAbsLiYCAgAAAIAAgAbYQfguIgICAAAAgABC9ArsLh4CAgAAAIAAQTrsLiICAgAAAIAAQxwK7C4iAgIAAACAAEPcBuwuIgICAAAAgABD3A7sLiICAgAAAIAAQtAO7C5CAgIAAACAAIAG2IAK2IAO2ENwBC4iAgIAAACAAEPkBuwuKgICAAAAgACABthCvAQuIgICAAAAgABDCAbsLiICAgAAAIAAQrgG7C4mAgIAAACAAIAG2EFkLiYCAgAAAIAAgAbYQeQuKgICAAAAgACABthD4AwuMgICAAAAgACABtiACEMYDC4qAgIAAACAAIAG2EMYCC4yAgIAAACAAIAEgArYQ9wILioCAgAAAIAAgAbYQzQILioCAgAAAIAAgAbYQ+AELiICAgAAAIAAQpAG7C4uAgIAAACAAIAG2EMoCuwuIgICAAAAgABCqA7sLioCAgAAAIAAgAbYQ0wELioCAgAAAIAAgAbYQ+gELioCAgAAAIAAgAbYQoQMLioCAgAAAIAAgAbYQ7AILioCAgAAAIAAgAbYQuQMLioCAgAAAIAAgAbYQyAILiICAgAAAIAAQtwO7C46AgIAAACAAIAG2IAIgAxCdAguIgICAAAAgABCPAbsLioCAgAAAIAAgAbYQjgELi4CAgAAAIAC2IAG2EM4BC4qAgIAAACAAIAG2EK0BC4iAgIAAACAAEKoBuwuIgICAAAAgABCpA7sLh4CAgAAAIAAQWrsLjoCAgAAAIAC2IAG2IAK2ENoBC4iAgIAAACAAEKYBuwuLgICAAAAgACABIAK2EE0LioCAgAAAIAAgAbYQjAELjICAgAAAIAAgASACthC+AwuKgICAAAAgACABthC2AwuRgICAAAAgACABIAIgAyAEthDFAbsLioCAgAAAIAAgAbYQ1AMLjICAgAAAIAAgASACthDAAwuSgICAAAAgACABtiACtiADIAS2EIgDC4mAgIAAACAAIAG2EHwLiYCAgAAAIAAgAbYQXwuIgICAAAAgABC+ArsLioCAgAAAIAAgAbYQtgELiICAgAAAIAAQugO7C4iAgIAAACAAEMICuwuKgICAAAAgACABthDoAguKgICAAAAgACABthD2AwuIgICAAAAgALYQlAELiICAgAAAIAAQqAO7C4qAgIAAACAAIAG2ELMDC4qAgIAAACAAIAG2EKEBC4iAgIAAACAAEMoDuwuKgICAAAAgACABthCpAQuIgICAAAAgABCXAbsLioCAgAAAIAAgAbYQnwELjYCAgAAAIAAgAbYgArYQ0AELioCAgAAAIAAgAbYQ5wMLiICAgAAAIAAQtQG7C4iAgIAAACAAEMkCuwuJgICAAAAgACABthBXC4qAgIAAACAAIAG2EOoDC4iAgIAAACAAENQBuwuRgICAAAAgALYgAbYgArYgA7YQ1gILiICAgAAAIAAQnAO7C42AgIAAACAAIAG2IAK2EPMDC4qAgIAAACAAIAG2EK0DC4uAgIAAACAAIAG2EKIDuwuKgICAAAAgACABthDvAguKgICAAAAgACABthCEAwuOgICAAAAgALYgAbYgArYQ/wILi4CAgAAAIAAgAbYQ+QO7C4qAgIAAACAAIAG2EOYDC4qAgIAAACAAIAG2EPwDC4iAgIAAACAAEOQBuwuJgICAAAAgACABthA4C42AgIAAACAAIAG2IAK2EIcDC4qAgIAAACAAIAG2EN8BC4iAgIAAACAAEKABuwuQgICAAAAgACABtiACtiADthCAAwuKgICAAAAgACABthCTAguKgICAAAAgACABthCSAQuWgICAAAAgACABIAIgAyAEIAUgBiAHthDxAguIgICAAAAgABDVAbsLiICAgAAAIAAQkgK7C4qAgIAAACAAIAG2EMMDC5KAgIAAACAAIAEgAiADtiAEIAUQrgYLjYCAgAAAIAAgASACthCXB7sLkICAgAAAIAAgASACIAO2IAQQwQcLjoCAgAAAIAAgASACIAO2EOsHC5OAgIAAACAAIAEgAiADIAQgBbYQvwi7CwuDkYGAABwAQYAIC5oEsA0AAFcOAAAADgAAOA4AAAAAAAABAAAAAAQAAAAAAADYDQAAIA4AAAgEAAAAAAAAsA0A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R29vZGJ5ZUpvaW50J10oJDEpOyB9AHsgdmFyIHNlbGYgPSBNb2R1bGVbJ2dldENhY2hlJ10oTW9kdWxlWydKU0Rlc3RydWN0aW9uTGlzdGVuZXInXSlbJDBdOyBpZiAoIXNlbGYuaGFzT3duUHJvcGVydHkoJ1NheUdvb2RieWVGaXh0dXJlJykpIHRocm93ICdhIEpTSW1wbGVtZW50YXRpb24gbXVzdCBpbXBsZW1lbnQgYWxsIGZ1bmN0aW9ucywgeW91IGZvcmdvdCBKU0Rlc3RydWN0aW9uTGlzdGVuZXI6OlNheUdvb2RieWVGaXh0dXJlLic7IHNlbGZbJ1NheUdvb2RieWVGaXh0dXJlJ10oJDEpOyB9AGIySXNWYWxpZChkZW5zaXR5KSAmJiBkZW5zaXR5ID49IDAuMGYAQm94MkRfdjIuMy4xL0JveDJEL0R5bmFtaWNzL2IyRml4dHVyZS5oAFNldERlbnNpdHkAMCA8PSBjaGlsZEluZGV4ICYmIGNoaWxkSW5kZXggPCBtX3Byb3h5Q291bnQAR2V0QUFCQgAxNUpTUXVlcnlDYWxsYmFjawAxNWIyUXVlcnlDYWxsYmFjawB7IHZhciBzZWxmID0gTW9kdWxlWydnZXRDYWNoZSddKE1vZHVsZVsnSlNRdWVyeUNhbGxiYWNrJ10pWyQwXTsgaWYgKCFzZWxmLmhhc093blByb3BlcnR5KCdSZXBvcnRGaXh0dXJlJykpIHRocm93ICdhIEpTSW1wbGVtZW50YXRpb24gbXVzdCBpbXBsZW1lbnQgYWxsIGZ1bmN0aW9ucywgeW91IGZvcmdvdCBKU1F1ZXJ5Q2FsbGJhY2s6OlJlcG9ydEZpeHR1cmUuJzsgcmV0dXJuIHNlbGZbJ1JlcG9ydEZpeHR1cmUnXSgkMSk7IH0AMTdKU1JheUNhc3RDYWxsYmFjawAxN2IyUmF5Q2FzdENhbGxiYWNrAHsgdmFyIHNlbGYgPSBNb2R1bGVbJ2dldENhY2hlJ10oTW9kdWxlWydKU1JheUNhc3RDYWxsYmFjayddKVskMF07IGlmICghc2VsZi5oYXNPd25Qcm9wZXJ0eSgnUmVwb3J0Rml4dHVyZScpKSB0aHJvdyAnYSBKU0ltcGxlbWVudGF0aW9uIG11c3QgaW1wbGVtZW50IGFsbCBmdW5jdGlvbnMsIHlvdSBmb3Jnb3QgSlNSYXlDYXN0Q2FsbGJhY2s6OlJlcG9ydEZpeHR1cmUuJzsgcmV0dXJuIHNlbGZbJ1JlcG9ydEZpeHR1cmUnXSgkMSwkMiwkMywkNCk7IH0AMTdKU0NvbnRhY3RMaXN0ZW5lcgAxN2IyQ29udGFjdExpc3RlbmVyAHsgdmFyIHNlbGYgPSBNb2R1bGVbJ2dldENhY2hlJ10oTW9kdWxlWydKU0NvbnRhY3RMaXN0ZW5lciddKVskMF07IGlmICghc2VsZi5oYXNPd25Qcm9wZXJ0eSgnQmVnaW5Db250YWN0JykpIHRocm93ICdhIEpTSW1wbGVtZW50YXRpb24gbXVzdCBpbXBsZW1lbnQgYWxsIGZ1bmN0aW9ucywgeW91IGZvcmdvdCBKU0NvbnRhY3RMaXN0ZW5lcjo6QmVnaW5Db250YWN0Lic7IHNlbGZbJ0JlZ2luQ29udGFjdCddKCQxKTsgfQB7IHZhciBzZWxmID0gTW9kdWxlWydnZXRDYWNoZSddKE1vZHVsZVsnSlNDb250YWN0TGlzdGVuZXInXSlbJDBdOyBpZiAoIXNlbGYuaGFzT3duUHJvcGVydHkoJ0VuZENvbnRhY3QnKSkgdGhyb3cgJ2EgSlNJbXBsZW1lbnRhdGlvbiBtdXN0IGltcGxlbWVudCBhbGwgZnVuY3Rpb25zLCB5b3UgZm9yZ290IEpTQ29udGFjdExpc3RlbmVyOjpFbmRDb250YWN0Lic7IHNlbGZbJ0VuZENvbnRhY3QnXSgkMSk7IH0AeyB2YXIgc2VsZiA9IE1vZHVsZVsnZ2V0Q2FjaGUnXShNb2R1bGVbJ0pTQ29udGFjdExpc3RlbmVyJ10pWyQwXTsgaWYgKCFzZWxmLmhhc093blByb3BlcnR5KCdQcmVTb2x2ZScpKSB0aHJvdyAnYSBKU0ltcGxlbWVudGF0aW9uIG11c3QgaW1wbGVtZW50IGFsbCBmdW5jdGlvbnMsIHlvdSBmb3Jnb3QgSlNDb250YWN0TGlzdGVuZXI6OlByZVNvbHZlLic7IHNlbGZbJ1ByZVNvbHZlJ10oJDEsJDIpOyB9AHsgdmFyIHNlbGYgPSBNb2R1bGVbJ2dldENhY2hlJ10oTW9kdWxlWydKU0NvbnRhY3RMaXN0ZW5lciddKVskMF07IGlmICghc2VsZi5oYXNPd25Qcm9wZXJ0eSgnUG9zdFNvbHZlJykpIHRocm93ICdhIEpTSW1wbGVtZW50YXRpb24gbXVzdCBpbXBsZW1lbnQgYWxsIGZ1bmN0aW9ucywgeW91IGZvcmdvdCBKU0NvbnRhY3RMaXN0ZW5lcjo6UG9zdFNvbHZlLic7IHNlbGZbJ1Bvc3RTb2x2ZSddKCQxLCQyKTsgfQBCb3gyRF92Mi4zLjEvQm94MkQvQ29sbGlzaW9uL1NoYXBlcy9iMlBvbHlnb25TaGFwZS5oADE1SlNDb250YWN0RmlsdGVyAHsgdmFyIHNlbGYgPSBNb2R1bGVbJ2dldENhY2hlJ10oTW9kdWxlWydKU0NvbnRhY3RGaWx0ZXInXSlbJDBdOyBpZiAoIXNlbGYuaGFzT3duUHJvcGVydHkoJ1Nob3VsZENvbGxpZGUnKSkgdGhyb3cgJ2EgSlNJbXBsZW1lbnRhdGlvbiBtdXN0IGltcGxlbWVudCBhbGwgZnVuY3Rpb25zLCB5b3UgZm9yZ290IEpTQ29udGFjdEZpbHRlcjo6U2hvdWxkQ29sbGlkZS4nOyByZXR1cm4gc2VsZlsnU2hvdWxkQ29sbGlkZSddKCQxLCQyKTsgfQA2SlNEcmF3ADZiMkRyYXcAeyB2YXIgc2VsZiA9IE1vZHVsZVsnZ2V0Q2FjaGUnXShNb2R1bGVbJ0pTRHJhdyddKVskMF07IGlmICghc2VsZi5oYXNPd25Qcm9wZXJ0eSgnRHJhd1BvbHlnb24nKSkgdGhyb3cgJ2EgSlNJbXBsZW1lbnRhdGlvbiBtdXN0IGltcGxlbWVudCBhbGwgZnVuY3Rpb25zLCB5b3UgZm9yZ290IEpTRHJhdzo6RHJhd1BvbHlnb24uJzsgc2VsZlsnRHJhd1BvbHlnb24nXSgkMSwkMiwkMyk7IH0AeyB2YXIgc2VsZiA9IE1vZHVsZVsnZ2V0Q2FjaGUnXShNb2R1bGVbJ0pTRHJhdyddKVskMF07IGlmICghc2VsZi5oYXNPd25Qcm9wZXJ0eSgnRHJhd1NvbGlkUG9seWdvbicpKSB0aHJvdyAnYSBKU0ltcGxlbWVudGF0aW9uIG11c3QgaW1wbGVtZW50IGFsbCBmdW5jdGlvbnMsIHlvdSBmb3Jnb3QgSlNEcmF3OjpEcmF3U29saWRQb2x5Z29uLic7IHNlbGZbJ0RyYXdTb2xpZFBvbHlnb24nXSgkMSwkMiwkMyk7IH0AeyB2YXIgc2VsZiA9IE1vZHVsZVsnZ2V0Q2FjaGUnXShNb2R1bGVbJ0pTRHJhdyddKVskMF07IGlmICghc2VsZi5oYXNPd25Qcm9wZXJ0eSgnRHJhd0NpcmNsZScpKSB0aHJvdyAnYSBKU0ltcGxlbWVudGF0aW9uIG11c3QgaW1wbGVtZW50IGFsbCBmdW5jdGlvbnMsIHlvdSBmb3Jnb3QgSlNEcmF3OjpEcmF3Q2lyY2xlLic7IHNlbGZbJ0RyYXdDaXJjbGUnXSgkMSwkMiwkMyk7IH0AeyB2YXIgc2VsZiA9IE1vZHVsZVsnZ2V0Q2FjaGUnXShNb2R1bGVbJ0pTRHJhdyddKVskMF07IGlmICghc2VsZi5oYXNPd25Qcm9wZXJ0eSgnRHJhd1NvbGlkQ2lyY2xlJykpIHRocm93ICdhIEpTSW1wbGVtZW50YXRpb24gbXVzdCBpbXBsZW1lbnQgYWxsIGZ1bmN0aW9ucywgeW91IGZvcmdvdCBKU0RyYXc6OkRyYXdTb2xpZENpcmNsZS4nOyBzZWxmWydEcmF3U29saWRDaXJjbGUnXSgkMSwkMiwkMywkNCk7IH0AeyB2YXIgc2VsZiA9IE1vZHVsZVsnZ2V0Q2FjaGUnXShNb2R1bGVbJ0pTRHJhdyddKVskMF07IGlmICghc2VsZi5oYXNPd25Qcm9wZXJ0eSgnRHJhd1NlZ21lbnQnKSkgdGhyb3cgJ2EgSlNJbXBsZW1lbnRhdGlvbiBtdXN0IGltcGxlbWVudCBhbGwgZnVuY3Rpb25zLCB5b3UgZm9yZ290IEpTRHJhdzo6RHJhd1NlZ21lbnQuJzsgc2VsZlsnRHJhd1NlZ21lbnQnXSgkMSwkMiwkMyk7IH0AeyB2YXIgc2VsZiA9IE1vZHVsZVsnZ2V0Q2FjaGUnXShNb2R1bGVbJ0pTRHJhdyddKVskMF07IGlmICghc2VsZi5oYXNPd25Qcm9wZXJ0eSgnRHJhd1RyYW5zZm9ybScpKSB0aHJvdyAnYSBKU0ltcGxlbWVudGF0aW9uIG11c3QgaW1wbGVtZW50IGFsbCBmdW5jdGlvbnMsIHlvdSBmb3Jnb3QgSlNEcmF3OjpEcmF3VHJhbnNmb3JtLic7IHNlbGZbJ0RyYXdUcmFuc2Zvcm0nXSgkMSk7IH0AICBiMk1vdG9ySm9pbnREZWYgamQ7CgAgIGpkLmxpbmVhck9mZnNldC5TZXQoJS4xNWxlZiwgJS4xNWxlZik7CgAgIGpkLmFuZ3VsYXJPZmZzZXQgPSAlLjE1bGVmOwoAICBqZC5jb3JyZWN0aW9uRmFjdG9yID0gJS4xNWxlZjsKADEyYjJNb3RvckpvaW50ADdiMkpvaW50AGNoaWxkSW5kZXggPCBtX2NvdW50AEJveDJEX3YyLjMuMS9Cb3gyRC9Db2xsaXNpb24vU2hhcGVzL2IyQ2hhaW5TaGFwZS5jcHAAQ29tcHV0ZUFBQkIAMCA8IHNpemUAQm94MkRfdjIuMy4xL0JveDJEL0NvbW1vbi9iMkJsb2NrQWxsb2NhdG9yLmNwcAAwIDw9IGluZGV4ICYmIGluZGV4IDwgYjJfYmxvY2tTaXplcwBibG9ja0NvdW50ICogYmxvY2tTaXplIDw9IGIyX2NodW5rU2l6ZQAxMWIyRWRnZVNoYXBlADdiMlNoYXBlAG1fdmVydGljZXMgPT0gMEwgJiYgbV9jb3VudCA9PSAwAENyZWF0ZUNoYWluAGNvdW50ID49IDIAYjJEaXN0YW5jZVNxdWFyZWQodmVydGljZXNbaS0xXSwgdmVydGljZXNbaV0pID4gMC4wMDVmICogMC4wMDVmADEyYjJDaGFpblNoYXBlADEzYjJDaXJjbGVTaGFwZQBtX2NvdW50ID49IDMAQm94MkRfdjIuMy4xL0JveDJEL0NvbGxpc2lvbi9TaGFwZXMvYjJQb2x5Z29uU2hhcGUuY3BwAENvbXB1dGVNYXNzAGFyZWEgPiAxLjE5MjA5Mjg5NTUwNzgxMjVlLTA3RgAwLjBmIDw9IGxvd2VyICYmIGxvd2VyIDw9IGlucHV0Lm1heEZyYWN0aW9uADE0YjJQb2x5Z29uU2hhcGUAMTViMkNvbnRhY3RGaWx0ZXIAZGVuID4gMC4wZgBCb3gyRF92Mi4zLjEvQm94MkQvQ29sbGlzaW9uL2IyQ29sbGlkZUVkZ2UuY3BwAGIyQ29sbGlkZUVkZ2VBbmRDaXJjbGUAMCA8PSBpbmRleCAmJiBpbmRleCA8IG1fY291bnQgLSAxAEdldENoaWxkRWRnZQAyM2IyQ2hhaW5BbmRDaXJjbGVDb250YWN0ADliMkNvbnRhY3QAMjRiMkNoYWluQW5kUG9seWdvbkNvbnRhY3QAMTViMkNpcmNsZUNvbnRhY3QAMjJiMkVkZ2VBbmRDaXJjbGVDb250YWN0ADIzYjJFZGdlQW5kUG9seWdvbkNvbnRhY3QAMjViMlBvbHlnb25BbmRDaXJjbGVDb250YWN0ADAgPD0gZWRnZTEgJiYgZWRnZTEgPCBwb2x5MS0+bV9jb3VudABCb3gyRF92Mi4zLjEvQm94MkQvQ29sbGlzaW9uL2IyQ29sbGlkZVBvbHlnb24uY3BwAGIyRmluZEluY2lkZW50RWRnZQAxNmIyUG9seWdvbkNvbnRhY3QAICBiMkRpc3RhbmNlSm9pbnREZWYgamQ7CgAgIGpkLmxlbmd0aCA9ICUuMTVsZWY7CgAxNWIyRGlzdGFuY2VKb2ludAAgIGIyRnJpY3Rpb25Kb2ludERlZiBqZDsKACAgamQubWF4Rm9yY2UgPSAlLjE1bGVmOwoAICBqZC5tYXhUb3JxdWUgPSAlLjE1bGVmOwoAMTViMkZyaWN0aW9uSm9pbnQAICBiMkdlYXJKb2ludERlZiBqZDsKACAgamQuam9pbnQxID0gam9pbnRzWyVkXTsKACAgamQuam9pbnQyID0gam9pbnRzWyVkXTsKADExYjJHZWFySm9pbnQAZCArIGggKiBrID4gMS4xOTIwOTI4OTU1MDc4MTI1ZS0wN0YAQm94MkRfdjIuMy4xL0JveDJEL0R5bmFtaWNzL0pvaW50cy9iMk1vdXNlSm9pbnQuY3BwAEluaXRWZWxvY2l0eUNvbnN0cmFpbnRzAE1vdXNlIGpvaW50IGR1bXBpbmcgaXMgbm90IHN1cHBvcnRlZC4KADEyYjJNb3VzZUpvaW50ACAgYjJQcmlzbWF0aWNKb2ludERlZiBqZDsKACAgamQubG93ZXJUcmFuc2xhdGlvbiA9ICUuMTVsZWY7CgAgIGpkLnVwcGVyVHJhbnNsYXRpb24gPSAlLjE1bGVmOwoAICBqZC5tYXhNb3RvckZvcmNlID0gJS4xNWxlZjsKADE2YjJQcmlzbWF0aWNKb2ludAAgIGIyUHVsbGV5Sm9pbnREZWYgamQ7CgAgIGpkLmdyb3VuZEFuY2hvckEuU2V0KCUuMTVsZWYsICUuMTVsZWYpOwoAICBqZC5ncm91bmRBbmNob3JCLlNldCglLjE1bGVmLCAlLjE1bGVmKTsKACAgamQubGVuZ3RoQSA9ICUuMTVsZWY7CgAgIGpkLmxlbmd0aEIgPSAlLjE1bGVmOwoAICBqZC5yYXRpbyA9ICUuMTVsZWY7CgAxM2IyUHVsbGV5Sm9pbnQAICBiMlJldm9sdXRlSm9pbnREZWYgamQ7CgAgIGpkLmVuYWJsZUxpbWl0ID0gYm9vbCglZCk7CgAgIGpkLmxvd2VyQW5nbGUgPSAlLjE1bGVmOwoAICBqZC51cHBlckFuZ2xlID0gJS4xNWxlZjsKADE1YjJSZXZvbHV0ZUpvaW50ACAgYjJSb3BlSm9pbnREZWYgamQ7CgAgIGpkLm1heExlbmd0aCA9ICUuMTVsZWY7CgAxMWIyUm9wZUpvaW50ACAgYjJXZWxkSm9pbnREZWYgamQ7CgAgIGpkLnJlZmVyZW5jZUFuZ2xlID0gJS4xNWxlZjsKADExYjJXZWxkSm9pbnQAICBiMldoZWVsSm9pbnREZWYgamQ7CgAgIGpkLmJvZHlBID0gYm9kaWVzWyVkXTsKACAgamQuYm9keUIgPSBib2RpZXNbJWRdOwoAICBqZC5jb2xsaWRlQ29ubmVjdGVkID0gYm9vbCglZCk7CgAgIGpkLmxvY2FsQW5jaG9yQS5TZXQoJS4xNWxlZiwgJS4xNWxlZik7CgAgIGpkLmxvY2FsQW5jaG9yQi5TZXQoJS4xNWxlZiwgJS4xNWxlZik7CgAgIGpkLmxvY2FsQXhpc0EuU2V0KCUuMTVsZWYsICUuMTVsZWYpOwoAICBqZC5lbmFibGVNb3RvciA9IGJvb2woJWQpOwoAICBqZC5tb3RvclNwZWVkID0gJS4xNWxlZjsKACAgamQubWF4TW90b3JUb3JxdWUgPSAlLjE1bGVmOwoAICBqZC5mcmVxdWVuY3lIeiA9ICUuMTVsZWY7CgAgIGpkLmRhbXBpbmdSYXRpbyA9ICUuMTVsZWY7CgAgIGpvaW50c1slZF0gPSBtX3dvcmxkLT5DcmVhdGVKb2ludCgmamQpOwoAMTJiMldoZWVsSm9pbnQAZGVmLT5ib2R5QSAhPSBkZWYtPmJvZHlCAEJveDJEX3YyLjMuMS9Cb3gyRC9EeW5hbWljcy9Kb2ludHMvYjJKb2ludC5jcHAAYjJKb2ludAAvLyBEdW1wIGlzIG5vdCBzdXBwb3J0ZWQgZm9yIHRoaXMgam9pbnQgdHlwZS4KAEJveDJEX3YyLjMuMS9Cb3gyRC9EeW5hbWljcy9Kb2ludHMvYjJNb3RvckpvaW50LmNwcABiMklzVmFsaWQoZmFjdG9yKSAmJiAwLjBmIDw9IGZhY3RvciAmJiBmYWN0b3IgPD0gMS4wZgBTZXRDb3JyZWN0aW9uRmFjdG9yAGNoaWxkMSAhPSAoLTEpAEJveDJEX3YyLjMuMS9Cb3gyRC9Db2xsaXNpb24vYjJEeW5hbWljVHJlZS5jcHAASW5zZXJ0TGVhZgBjaGlsZDIgIT0gKC0xKQBpQSAhPSAoLTEpAEJhbGFuY2UAMCA8PSBpQiAmJiBpQiA8IG1fbm9kZUNhcGFjaXR5ADAgPD0gaUMgJiYgaUMgPCBtX25vZGVDYXBhY2l0eQAwIDw9IGlGICYmIGlGIDwgbV9ub2RlQ2FwYWNpdHkAMCA8PSBpRyAmJiBpRyA8IG1fbm9kZUNhcGFjaXR5AG1fbm9kZXNbQy0+cGFyZW50XS5jaGlsZDIgPT0gaUEAMCA8PSBpRCAmJiBpRCA8IG1fbm9kZUNhcGFjaXR5ADAgPD0gaUUgJiYgaUUgPCBtX25vZGVDYXBhY2l0eQBtX25vZGVzW0ItPnBhcmVudF0uY2hpbGQyID09IGlBAG1fbm9kZUNvdW50ID09IG1fbm9kZUNhcGFjaXR5AEFsbG9jYXRlTm9kZQBEZXN0cm95UHJveHkAbV9ub2Rlc1twcm94eUlkXS5Jc0xlYWYoKQAwIDw9IG5vZGVJZCAmJiBub2RlSWQgPCBtX25vZGVDYXBhY2l0eQBGcmVlTm9kZQAwIDwgbV9ub2RlQ291bnQATW92ZVByb3h5AEJveDJEX3YyLjMuMS9Cb3gyRC9Db2xsaXNpb24vYjJEaXN0YW5jZS5jcHAAYjJEaXN0YW5jZQBHZXRXaXRuZXNzUG9pbnRzAEdldE1ldHJpYwBjYWNoZS0+Y291bnQgPD0gMwBSZWFkQ2FjaGUAMCA8PSBpbmRleCAmJiBpbmRleCA8IGNoYWluLT5tX2NvdW50AG5vZGUtPklzTGVhZigpID09IGZhbHNlAEdldE1heEJhbGFuY2UAdGFyZ2V0ID4gdG9sZXJhbmNlAEJveDJEX3YyLjMuMS9Cb3gyRC9Db2xsaXNpb24vYjJUaW1lT2ZJbXBhY3QuY3BwAGIyVGltZU9mSW1wYWN0ADAgPD0gaW5kZXggJiYgaW5kZXggPCBtX2NvdW50AEJveDJEX3YyLjMuMS9Cb3gyRC9Db2xsaXNpb24vYjJEaXN0YW5jZS5oAEdldFZlcnRleABFdmFsdWF0ZQBGaW5kTWluU2VwYXJhdGlvbgAwIDwgY291bnQgJiYgY291bnQgPCAzAENyZWF0ZUxvb3AAYjJEaXN0YW5jZVNxdWFyZWQodjEsIHYyKSA+IDAuMDA1ZiAqIDAuMDA1ZgAzIDw9IGNvdW50ICYmIGNvdW50IDw9IDgAU2V0AGNvdW50ID49IDMAQ29tcHV0ZUNlbnRyb2lkAGVkZ2UuTGVuZ3RoU3F1YXJlZCgpID4gMS4xOTIwOTI4OTU1MDc4MTI1ZS0wN0YgKiAxLjE5MjA5Mjg5NTUwNzgxMjVlLTA3RgBqIDwgYjJfYmxvY2tTaXplcwBiMkJsb2NrQWxsb2NhdG9yAG1faW5kZXggPT0gMABCb3gyRF92Mi4zLjEvQm94MkQvQ29tbW9uL2IyU3RhY2tBbGxvY2F0b3IuY3BwAH5iMlN0YWNrQWxsb2NhdG9yAG1fZW50cnlDb3VudCA9PSAwAG1fZW50cnlDb3VudCA8IGIyX21heFN0YWNrRW50cmllcwBBbGxvY2F0ZQBtX2VudHJ5Q291bnQgPiAwAEZyZWUAcCA9PSBlbnRyeS0+ZGF0YQBiZC0+cG9zaXRpb24uSXNWYWxpZCgpAEJveDJEX3YyLjMuMS9Cb3gyRC9EeW5hbWljcy9iMkJvZHkuY3BwAGIyQm9keQBiZC0+bGluZWFyVmVsb2NpdHkuSXNWYWxpZCgpAGIySXNWYWxpZChiZC0+YW5nbGUpAGIySXNWYWxpZChiZC0+YW5ndWxhclZlbG9jaXR5KQBiMklzVmFsaWQoYmQtPmFuZ3VsYXJEYW1waW5nKSAmJiBiZC0+YW5ndWxhckRhbXBpbmcgPj0gMC4wZgBiMklzVmFsaWQoYmQtPmxpbmVhckRhbXBpbmcpICYmIGJkLT5saW5lYXJEYW1waW5nID49IDAuMGYAbV93b3JsZC0+SXNMb2NrZWQoKSA9PSBmYWxzZQBTZXRUeXBlAHNfaW5pdGlhbGl6ZWQgPT0gdHJ1ZQBCb3gyRF92Mi4zLjEvQm94MkQvRHluYW1pY3MvQ29udGFjdHMvYjJDb250YWN0LmNwcAAwIDw9IHR5cGVBICYmIHR5cGVCIDwgYjJTaGFwZTo6ZV90eXBlQ291bnQAbV90eXBlID09IGIyX2R5bmFtaWNCb2R5AFJlc2V0TWFzc0RhdGEAbV9JID4gMC4wZgBDcmVhdGVGaXh0dXJlAG1fcHJveHlDb3VudCA9PSAwAEJveDJEX3YyLjMuMS9Cb3gyRC9EeW5hbWljcy9iMkZpeHR1cmUuY3BwAENyZWF0ZVByb3hpZXMARGVzdHJveUZpeHR1cmUAZml4dHVyZS0+bV9ib2R5ID09IHRoaXMAbV9maXh0dXJlQ291bnQgPiAwAGZvdW5kAFNldE1hc3NEYXRhAFNldFRyYW5zZm9ybQBTZXRBY3RpdmUAICBiMkJvZHlEZWYgYmQ7CgAgIGJkLnR5cGUgPSBiMkJvZHlUeXBlKCVkKTsKACAgYmQucG9zaXRpb24uU2V0KCUuMTVsZWYsICUuMTVsZWYpOwoAICBiZC5hbmdsZSA9ICUuMTVsZWY7CgAgIGJkLmxpbmVhclZlbG9jaXR5LlNldCglLjE1bGVmLCAlLjE1bGVmKTsKACAgYmQuYW5ndWxhclZlbG9jaXR5ID0gJS4xNWxlZjsKACAgYmQubGluZWFyRGFtcGluZyA9ICUuMTVsZWY7CgAgIGJkLmFuZ3VsYXJEYW1waW5nID0gJS4xNWxlZjsKACAgYmQuYWxsb3dTbGVlcCA9IGJvb2woJWQpOwoAICBiZC5hd2FrZSA9IGJvb2woJWQpOwoAICBiZC5maXhlZFJvdGF0aW9uID0gYm9vbCglZCk7CgAgIGJkLmJ1bGxldCA9IGJvb2woJWQpOwoAICBiZC5hY3RpdmUgPSBib29sKCVkKTsKACAgYmQuZ3Jhdml0eVNjYWxlID0gJS4xNWxlZjsKACAgYm9kaWVzWyVkXSA9IG1fd29ybGQtPkNyZWF0ZUJvZHkoJmJkKTsKACAgewoAICB9CgAgICAgYjJGaXh0dXJlRGVmIGZkOwoAICAgIGZkLmZyaWN0aW9uID0gJS4xNWxlZjsKACAgICBmZC5yZXN0aXR1dGlvbiA9ICUuMTVsZWY7CgAgICAgZmQuZGVuc2l0eSA9ICUuMTVsZWY7CgAgICAgZmQuaXNTZW5zb3IgPSBib29sKCVkKTsKACAgICBmZC5maWx0ZXIuY2F0ZWdvcnlCaXRzID0gdWludDE2KCVkKTsKACAgICBmZC5maWx0ZXIubWFza0JpdHMgPSB1aW50MTYoJWQpOwoAICAgIGZkLmZpbHRlci5ncm91cEluZGV4ID0gaW50MTYoJWQpOwoAICAgIGIyQ2lyY2xlU2hhcGUgc2hhcGU7CgAgICAgc2hhcGUubV9yYWRpdXMgPSAlLjE1bGVmOwoAICAgIHNoYXBlLm1fcC5TZXQoJS4xNWxlZiwgJS4xNWxlZik7CgAgICAgYjJFZGdlU2hhcGUgc2hhcGU7CgAgICAgc2hhcGUubV92ZXJ0ZXgwLlNldCglLjE1bGVmLCAlLjE1bGVmKTsKACAgICBzaGFwZS5tX3ZlcnRleDEuU2V0KCUuMTVsZWYsICUuMTVsZWYpOwoAICAgIHNoYXBlLm1fdmVydGV4Mi5TZXQoJS4xNWxlZiwgJS4xNWxlZik7CgAgICAgc2hhcGUubV92ZXJ0ZXgzLlNldCglLjE1bGVmLCAlLjE1bGVmKTsKACAgICBzaGFwZS5tX2hhc1ZlcnRleDAgPSBib29sKCVkKTsKACAgICBzaGFwZS5tX2hhc1ZlcnRleDMgPSBib29sKCVkKTsKACAgICBiMlBvbHlnb25TaGFwZSBzaGFwZTsKACAgICBiMlZlYzIgdnNbJWRdOwoAICAgIHNoYXBlLlNldCh2cywgJWQpOwoAICAgIHZzWyVkXS5TZXQoJS4xNWxlZiwgJS4xNWxlZik7CgAgICAgYjJDaGFpblNoYXBlIHNoYXBlOwoAICAgIHNoYXBlLkNyZWF0ZUNoYWluKHZzLCAlZCk7CgAgICAgc2hhcGUubV9wcmV2VmVydGV4LlNldCglLjE1bGVmLCAlLjE1bGVmKTsKACAgICBzaGFwZS5tX25leHRWZXJ0ZXguU2V0KCUuMTVsZWYsICUuMTVsZWYpOwoAICAgIHNoYXBlLm1faGFzUHJldlZlcnRleCA9IGJvb2woJWQpOwoAICAgIHNoYXBlLm1faGFzTmV4dFZlcnRleCA9IGJvb2woJWQpOwoACgAgICAgZmQuc2hhcGUgPSAmc2hhcGU7CgAgICAgYm9kaWVzWyVkXS0+Q3JlYXRlRml4dHVyZSgmZmQpOwoAMCA8PSB0eXBlMSAmJiB0eXBlMSA8IGIyU2hhcGU6OmVfdHlwZUNvdW50ADAgPD0gdHlwZTIgJiYgdHlwZTIgPCBiMlNoYXBlOjplX3R5cGVDb3VudABCb3gyRF92Mi4zLjEvQm94MkQvRHluYW1pY3MvQ29udGFjdHMvYjJDaGFpbkFuZFBvbHlnb25Db250YWN0LmNwcABiMkNoYWluQW5kUG9seWdvbkNvbnRhY3QAbV9maXh0dXJlQS0+R2V0VHlwZSgpID09IGIyU2hhcGU6OmVfY2hhaW4AQm94MkRfdjIuMy4xL0JveDJEL0R5bmFtaWNzL0NvbnRhY3RzL2IyQ2hhaW5BbmRDaXJjbGVDb250YWN0LmNwcABiMkNoYWluQW5kQ2lyY2xlQ29udGFjdABCb3gyRF92Mi4zLjEvQm94MkQvRHluYW1pY3MvQ29udGFjdHMvYjJFZGdlQW5kUG9seWdvbkNvbnRhY3QuY3BwAGIyRWRnZUFuZFBvbHlnb25Db250YWN0AG1fZml4dHVyZUEtPkdldFR5cGUoKSA9PSBiMlNoYXBlOjplX2VkZ2UAQm94MkRfdjIuMy4xL0JveDJEL0R5bmFtaWNzL0NvbnRhY3RzL2IyRWRnZUFuZENpcmNsZUNvbnRhY3QuY3BwAGIyRWRnZUFuZENpcmNsZUNvbnRhY3QAQm94MkRfdjIuMy4xL0JveDJEL0R5bmFtaWNzL0NvbnRhY3RzL2IyUG9seWdvbkNvbnRhY3QuY3BwAGIyUG9seWdvbkNvbnRhY3QAbV9maXh0dXJlQi0+R2V0VHlwZSgpID09IGIyU2hhcGU6OmVfcG9seWdvbgBtX2ZpeHR1cmVBLT5HZXRUeXBlKCkgPT0gYjJTaGFwZTo6ZV9wb2x5Z29uAEJveDJEX3YyLjMuMS9Cb3gyRC9EeW5hbWljcy9Db250YWN0cy9iMlBvbHlnb25BbmRDaXJjbGVDb250YWN0LmNwcABiMlBvbHlnb25BbmRDaXJjbGVDb250YWN0AG1fZml4dHVyZUEtPkdldFR5cGUoKSA9PSBiMlNoYXBlOjplX2NpcmNsZQBCb3gyRF92Mi4zLjEvQm94MkQvRHluYW1pY3MvQ29udGFjdHMvYjJDaXJjbGVDb250YWN0LmNwcABiMkNpcmNsZUNvbnRhY3QAbV9maXh0dXJlQi0+R2V0VHlwZSgpID09IGIyU2hhcGU6OmVfY2lyY2xlAHBjLT5wb2ludENvdW50ID4gMABCb3gyRF92Mi4zLjEvQm94MkQvRHluYW1pY3MvQ29udGFjdHMvYjJDb250YWN0U29sdmVyLmNwcABwb2ludENvdW50ID09IDEgfHwgcG9pbnRDb3VudCA9PSAyAFNvbHZlVmVsb2NpdHlDb25zdHJhaW50cwBhLnggPj0gMC4wZiAmJiBhLnkgPj0gMC4wZgBtYW5pZm9sZC0+cG9pbnRDb3VudCA+IDAASW5pdGlhbGl6ZVZlbG9jaXR5Q29uc3RyYWludHMAcG9pbnRDb3VudCA+IDAAYjJDb250YWN0U29sdmVyAHRvaUluZGV4QSA8IG1fYm9keUNvdW50AEJveDJEX3YyLjMuMS9Cb3gyRC9EeW5hbWljcy9iMklzbGFuZC5jcHAAdG9pSW5kZXhCIDwgbV9ib2R5Q291bnQASXNMb2NrZWQoKSA9PSBmYWxzZQBCb3gyRF92Mi4zLjEvQm94MkQvRHluYW1pY3MvYjJXb3JsZC5jcHAAQ3JlYXRlQm9keQBtX2JvZHlDb3VudCA+IDAARGVzdHJveUJvZHkARGVzdHJveUpvaW50AG1fam9pbnRDb3VudCA+IDAAZmFsc2UARGVzdHJveQBDcmVhdGVKb2ludABDcmVhdGUAbV90eXBlQSA9PSBlX3Jldm9sdXRlSm9pbnQgfHwgbV90eXBlQSA9PSBlX3ByaXNtYXRpY0pvaW50AEJveDJEX3YyLjMuMS9Cb3gyRC9EeW5hbWljcy9Kb2ludHMvYjJHZWFySm9pbnQuY3BwAGIyR2VhckpvaW50AG1fdHlwZUIgPT0gZV9yZXZvbHV0ZUpvaW50IHx8IG1fdHlwZUIgPT0gZV9wcmlzbWF0aWNKb2ludABkZWYtPnJhdGlvICE9IDAuMGYAQm94MkRfdjIuMy4xL0JveDJEL0R5bmFtaWNzL0pvaW50cy9iMlB1bGxleUpvaW50LmNwcABiMlB1bGxleUpvaW50AGRlZi0+dGFyZ2V0LklzVmFsaWQoKQBiMk1vdXNlSm9pbnQAYjJJc1ZhbGlkKGRlZi0+bWF4Rm9yY2UpICYmIGRlZi0+bWF4Rm9yY2UgPj0gMC4wZgBiMklzVmFsaWQoZGVmLT5mcmVxdWVuY3lIeikgJiYgZGVmLT5mcmVxdWVuY3lIeiA+PSAwLjBmAGIySXNWYWxpZChkZWYtPmRhbXBpbmdSYXRpbykgJiYgZGVmLT5kYW1waW5nUmF0aW8gPj0gMC4wZgBiLT5Jc0FjdGl2ZSgpID09IHRydWUAU29sdmUAbV9ib2R5Q291bnQgPCBtX2JvZHlDYXBhY2l0eQBCb3gyRF92Mi4zLjEvQm94MkQvRHluYW1pY3MvYjJJc2xhbmQuaABBZGQAbV9jb250YWN0Q291bnQgPCBtX2NvbnRhY3RDYXBhY2l0eQBzdGFja0NvdW50IDwgc3RhY2tTaXplAG1fam9pbnRDb3VudCA8IG1fam9pbnRDYXBhY2l0eQB0eXBlQSA9PSBiMl9keW5hbWljQm9keSB8fCB0eXBlQiA9PSBiMl9keW5hbWljQm9keQBTb2x2ZVRPSQBhbHBoYTAgPCAxLjBmAEJveDJEX3YyLjMuMS9Cb3gyRC9Db21tb24vYjJNYXRoLmgAQWR2YW5jZQAwIDw9IHByb3h5SWQgJiYgcHJveHlJZCA8IG1fbm9kZUNhcGFjaXR5AEJveDJEX3YyLjMuMS9Cb3gyRC9Db2xsaXNpb24vYjJEeW5hbWljVHJlZS5oAEdldFVzZXJEYXRhAHIuTGVuZ3RoU3F1YXJlZCgpID4gMC4wZgBSYXlDYXN0AHZlcnRleENvdW50IDw9IDgARHJhd1NoYXBlAEdldEZhdEFBQkIAYjJWZWMyIGcoJS4xNWxlZiwgJS4xNWxlZik7CgBtX3dvcmxkLT5TZXRHcmF2aXR5KGcpOwoAYjJCb2R5KiogYm9kaWVzID0gKGIyQm9keSoqKWIyQWxsb2MoJWQgKiBzaXplb2YoYjJCb2R5KikpOwoAYjJKb2ludCoqIGpvaW50cyA9IChiMkpvaW50KiopYjJBbGxvYyglZCAqIHNpemVvZihiMkpvaW50KikpOwoAewoAfQoAYjJGcmVlKGpvaW50cyk7CgBiMkZyZWUoYm9kaWVzKTsKAGpvaW50cyA9IE5VTEw7CgBib2RpZXMgPSBOVUxMOwoAYjJJc1ZhbGlkKGZvcmNlKSAmJiBmb3JjZSA+PSAwLjBmAEJveDJEX3YyLjMuMS9Cb3gyRC9EeW5hbWljcy9Kb2ludHMvYjJGcmljdGlvbkpvaW50LmNwcABTZXRNYXhGb3JjZQBiMklzVmFsaWQodG9ycXVlKSAmJiB0b3JxdWUgPj0gMC4wZgBTZXRNYXhUb3JxdWUAYjJJc1ZhbGlkKHJhdGlvKQBTZXRSYXRpbwBCb3gyRF92Mi4zLjEvQm94MkQvRHluYW1pY3MvSm9pbnRzL2IyUHJpc21hdGljSm9pbnQuY3BwAHJhdGlvID4gMS4xOTIwOTI4OTU1MDc4MTI1ZS0wN0YASW5pdGlhbGl6ZQBsb3dlciA8PSB1cHBlcgBCb3gyRF92Mi4zLjEvQm94MkQvRHluYW1pY3MvSm9pbnRzL2IyUmV2b2x1dGVKb2ludC5jcHAAU2V0TGltaXRzABEACgAREREAAAAABQAAAAAAAAkAAAAACwBBkIQBCyERAA8KERERAwoHAAETCQsLAAAJBgsAAAsABhEAAAAREREAQcGEAQsBCwBByoQBCxgRAAoKERERAAoAAAIACQsAAAAJAAsAAAsAQfuEAQsBDABBh4UBCxUMAAAAAAwAAAAACQwAAAAAAAwAAAwAQbWFAQsBDgBBwYUBCxUNAAAABA0AAAAACQ4AAAAAAA4AAA4AQe+FAQsBEABB+4UBCx4PAAAAAA8AAAAACRAAAAAAABAAABAAABIAAAASEhIAQbKGAQsOEgAAABISEgAAAAAAAAkAQeOGAQsBCwBB74YBCxUKAAAAAAoAAAAACQsAAAAAAAsAAAsAQZ2HAQsBDABBqYcBC/8TDAAAAAAMAAAAAAkMAAAAAAAMAAAMAAAtKyAgIDBYMHgAKG51bGwpAC0wWCswWCAwWC0weCsweCAweABpbmYASU5GAG5hbgBOQU4AMDEyMzQ1Njc4OUFCQ0RFRi4AVCEiGQ0BAgMRSxwMEAQLHRIeJ2hub3BxYiAFBg8TFBUaCBYHKCQXGAkKDhsfJSODgn0mKis8PT4/Q0dKTVhZWltcXV5fYGFjZGVmZ2lqa2xyc3R5ent8AElsbGVnYWwgYnl0ZSBzZXF1ZW5jZQBEb21haW4gZXJyb3IAUmVzdWx0IG5vdCByZXByZXNlbnRhYmxlAE5vdCBhIHR0eQBQZXJtaXNzaW9uIGRlbmllZABPcGVyYXRpb24gbm90IHBlcm1pdHRlZABObyBzdWNoIGZpbGUgb3IgZGlyZWN0b3J5AE5vIHN1Y2ggcHJvY2VzcwBGaWxlIGV4aXN0cwBWYWx1ZSB0b28gbGFyZ2UgZm9yIGRhdGEgdHlwZQBObyBzcGFjZSBsZWZ0IG9uIGRldmljZQBPdXQgb2YgbWVtb3J5AFJlc291cmNlIGJ1c3kASW50ZXJydXB0ZWQgc3lzdGVtIGNhbGwAUmVzb3VyY2UgdGVtcG9yYXJpbHkgdW5hdmFpbGFibGUASW52YWxpZCBzZWVrAENyb3NzLWRldmljZSBsaW5rAFJlYWQtb25seSBmaWxlIHN5c3RlbQBEaXJlY3Rvcnkgbm90IGVtcHR5AENvbm5lY3Rpb24gcmVzZXQgYnkgcGVlcgBPcGVyYXRpb24gdGltZWQgb3V0AENvbm5lY3Rpb24gcmVmdXNlZABIb3N0IGlzIGRvd24ASG9zdCBpcyB1bnJlYWNoYWJsZQBBZGRyZXNzIGluIHVzZQBCcm9rZW4gcGlwZQBJL08gZXJyb3IATm8gc3VjaCBkZXZpY2Ugb3IgYWRkcmVzcwBCbG9jayBkZXZpY2UgcmVxdWlyZWQATm8gc3VjaCBkZXZpY2UATm90IGEgZGlyZWN0b3J5AElzIGEgZGlyZWN0b3J5AFRleHQgZmlsZSBidXN5AEV4ZWMgZm9ybWF0IGVycm9yAEludmFsaWQgYXJndW1lbnQAQXJndW1lbnQgbGlzdCB0b28gbG9uZwBTeW1ib2xpYyBsaW5rIGxvb3AARmlsZW5hbWUgdG9vIGxvbmcAVG9vIG1hbnkgb3BlbiBmaWxlcyBpbiBzeXN0ZW0ATm8gZmlsZSBkZXNjcmlwdG9ycyBhdmFpbGFibGUAQmFkIGZpbGUgZGVzY3JpcHRvcgBObyBjaGlsZCBwcm9jZXNzAEJhZCBhZGRyZXNzAEZpbGUgdG9vIGxhcmdlAFRvbyBtYW55IGxpbmtzAE5vIGxvY2tzIGF2YWlsYWJsZQBSZXNvdXJjZSBkZWFkbG9jayB3b3VsZCBvY2N1cgBTdGF0ZSBub3QgcmVjb3ZlcmFibGUAUHJldmlvdXMgb3duZXIgZGllZABPcGVyYXRpb24gY2FuY2VsZWQARnVuY3Rpb24gbm90IGltcGxlbWVudGVkAE5vIG1lc3NhZ2Ugb2YgZGVzaXJlZCB0eXBlAElkZW50aWZpZXIgcmVtb3ZlZABEZXZpY2Ugbm90IGEgc3RyZWFtAE5vIGRhdGEgYXZhaWxhYmxlAERldmljZSB0aW1lb3V0AE91dCBvZiBzdHJlYW1zIHJlc291cmNlcwBMaW5rIGhhcyBiZWVuIHNldmVyZWQAUHJvdG9jb2wgZXJyb3IAQmFkIG1lc3NhZ2UARmlsZSBkZXNjcmlwdG9yIGluIGJhZCBzdGF0ZQBOb3QgYSBzb2NrZXQARGVzdGluYXRpb24gYWRkcmVzcyByZXF1aXJlZABNZXNzYWdlIHRvbyBsYXJnZQBQcm90b2NvbCB3cm9uZyB0eXBlIGZvciBzb2NrZXQAUHJvdG9jb2wgbm90IGF2YWlsYWJsZQBQcm90b2NvbCBub3Qgc3VwcG9ydGVkAFNvY2tldCB0eXBlIG5vdCBzdXBwb3J0ZWQATm90IHN1cHBvcnRlZABQcm90b2NvbCBmYW1pbHkgbm90IHN1cHBvcnRlZABBZGRyZXNzIGZhbWlseSBub3Qgc3VwcG9ydGVkIGJ5IHByb3RvY29sAEFkZHJlc3Mgbm90IGF2YWlsYWJsZQBOZXR3b3JrIGlzIGRvd24ATmV0d29yayB1bnJlYWNoYWJsZQBDb25uZWN0aW9uIHJlc2V0IGJ5IG5ldHdvcmsAQ29ubmVjdGlvbiBhYm9ydGVkAE5vIGJ1ZmZlciBzcGFjZSBhdmFpbGFibGUAU29ja2V0IGlzIGNvbm5lY3RlZABTb2NrZXQgbm90IGNvbm5lY3RlZABDYW5ub3Qgc2VuZCBhZnRlciBzb2NrZXQgc2h1dGRvd24AT3BlcmF0aW9uIGFscmVhZHkgaW4gcHJvZ3Jlc3MAT3BlcmF0aW9uIGluIHByb2dyZXNzAFN0YWxlIGZpbGUgaGFuZGxlAFJlbW90ZSBJL08gZXJyb3IAUXVvdGEgZXhjZWVkZWQATm8gbWVkaXVtIGZvdW5kAFdyb25nIG1lZGl1bSB0eXBlAE5vIGVycm9yIGluZm9ybWF0aW9uAAB0ZXJtaW5hdGluZyB3aXRoICVzIGV4Y2VwdGlvbiBvZiB0eXBlICVzOiAlcwB0ZXJtaW5hdGluZyB3aXRoICVzIGV4Y2VwdGlvbiBvZiB0eXBlICVzAHRlcm1pbmF0aW5nIHdpdGggJXMgZm9yZWlnbiBleGNlcHRpb24AdGVybWluYXRpbmcAdW5jYXVnaHQAU3Q5ZXhjZXB0aW9uAE4xMF9fY3h4YWJpdjExNl9fc2hpbV90eXBlX2luZm9FAFN0OXR5cGVfaW5mbwBOMTBfX2N4eGFiaXYxMjBfX3NpX2NsYXNzX3R5cGVfaW5mb0UATjEwX19jeHhhYml2MTE3X19jbGFzc190eXBlX2luZm9FAHB0aHJlYWRfb25jZSBmYWlsdXJlIGluIF9fY3hhX2dldF9nbG9iYWxzX2Zhc3QoKQBjYW5ub3QgY3JlYXRlIHB0aHJlYWQga2V5IGZvciBfX2N4YV9nZXRfZ2xvYmFscygpAGNhbm5vdCB6ZXJvIG91dCB0aHJlYWQgdmFsdWUgZm9yIF9fY3hhX2dldF9nbG9iYWxzKCkAdGVybWluYXRlX2hhbmRsZXIgdW5leHBlY3RlZGx5IHJldHVybmVkAE4xMF9fY3h4YWJpdjExOV9fcG9pbnRlcl90eXBlX2luZm9FAE4xMF9fY3h4YWJpdjExN19fcGJhc2VfdHlwZV9pbmZvRQBOMTBfX2N4eGFiaXYxMjFfX3ZtaV9jbGFzc190eXBlX2luZm9F")

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {

module.exports = function (base64Data) {
  var isBrowser = typeof window !== 'undefined' && typeof window.atob === 'function'
  var binary = isBrowser ? window.atob(base64Data) : new Buffer(base64Data, 'base64').toString('binary')
  var bytes = new Uint8Array(binary.length)

  for (var i = 0; i < binary.length; ++i) {
    bytes[i] = binary.charCodeAt(i)
  }

  return bytes.buffer
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13).Buffer))

/***/ }),
/* 10 */
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
/* 11 */
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
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function placeHoldersCount (b64) {
  var len = b64.length
  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // the number of equal signs (place holders)
  // if there are two placeholders, than the two characters before it
  // represent one byte
  // if there is only one, then the three characters before it represent 2 bytes
  // this is just a cheap hack to not do indexOf twice
  return b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0
}

function byteLength (b64) {
  // base64 is 4/3 + up to two characters of the original data
  return b64.length * 3 / 4 - placeHoldersCount(b64)
}

function toByteArray (b64) {
  var i, j, l, tmp, placeHolders, arr
  var len = b64.length
  placeHolders = placeHoldersCount(b64)

  arr = new Arr(len * 3 / 4 - placeHolders)

  // if there are placeholders, only get up to the last complete 4 chars
  l = placeHolders > 0 ? len - 4 : len

  var L = 0

  for (i = 0, j = 0; i < l; i += 4, j += 3) {
    tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)]
    arr[L++] = (tmp >> 16) & 0xFF
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  if (placeHolders === 2) {
    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[L++] = tmp & 0xFF
  } else if (placeHolders === 1) {
    tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var output = ''
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    output += lookup[tmp >> 2]
    output += lookup[(tmp << 4) & 0x3F]
    output += '=='
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + (uint8[len - 1])
    output += lookup[tmp >> 10]
    output += lookup[(tmp >> 4) & 0x3F]
    output += lookup[(tmp << 2) & 0x3F]
    output += '='
  }

  parts.push(output)

  return parts.join('')
}


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(12)
var ieee754 = __webpack_require__(15)
var isArray = __webpack_require__(16)

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(19)))

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {var Box2D = function(Box2D) {
  Box2D = Box2D || {};
  var Module = Box2D;

var b;b||(b=eval("(function() { try { return Box2D || {} } catch(e) { return {} } })()"));var aa={},ba;for(ba in b)b.hasOwnProperty(ba)&&(aa[ba]=b[ba]);var ca=!1,da=!1,ea=!1,fa=!1;
if(b.ENVIRONMENT)if("WEB"===b.ENVIRONMENT)ca=!0;else if("WORKER"===b.ENVIRONMENT)da=!0;else if("NODE"===b.ENVIRONMENT)ea=!0;else if("SHELL"===b.ENVIRONMENT)fa=!0;else throw Error("The provided Module['ENVIRONMENT'] value is not valid. It must be one of: WEB|WORKER|NODE|SHELL.");else ca="object"===typeof window,da="function"===typeof importScripts,ea="object"===typeof process&&"function"==="function"&&!ca&&!da,fa=!ca&&!ea&&!da;
if(ea){b.print||(b.print=console.log);b.printErr||(b.printErr=console.warn);var ga,ha;b.read=function(a,c){ga||(ga=__webpack_require__(17));ha||(ha=__webpack_require__(18));a=ha.normalize(a);var d=ga.readFileSync(a);return c?d:d.toString()};b.readBinary=function(a){a=b.read(a,!0);a.buffer||(a=new Uint8Array(a));assert(a.buffer);return a};b.load=function(a){ia(read(a))};b.thisProgram||(b.thisProgram=1<process.argv.length?process.argv[1].replace(/\\/g,"/"):"unknown-program");b.arguments=process.argv.slice(2);"undefined"!==
typeof module&&(module.exports=b);process.on("uncaughtException",function(a){if(!(a instanceof ja))throw a;});b.inspect=function(){return"[Emscripten Module object]"}}else if(fa)b.print||(b.print=print),"undefined"!=typeof printErr&&(b.printErr=printErr),b.read="undefined"!=typeof read?read:function(){throw"no read() available";},b.readBinary=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");assert("object"===typeof a);return a},"undefined"!=typeof scriptArgs?
b.arguments=scriptArgs:"undefined"!=typeof arguments&&(b.arguments=arguments),"function"===typeof quit&&(b.quit=function(a){quit(a)}),eval("if (typeof gc === 'function' && gc.toString().indexOf('[native code]') > 0) var gc = undefined");else if(ca||da)b.read=function(a){var c=new XMLHttpRequest;c.open("GET",a,!1);c.send(null);return c.responseText},da&&(b.readBinary=function(a){var c=new XMLHttpRequest;c.open("GET",a,!1);c.responseType="arraybuffer";c.send(null);return c.response}),b.readAsync=function(a,
c,d){var e=new XMLHttpRequest;e.open("GET",a,!0);e.responseType="arraybuffer";e.onload=function(){200==e.status||0==e.status&&e.response?c(e.response):d()};e.onerror=d;e.send(null)},"undefined"!=typeof arguments&&(b.arguments=arguments),"undefined"!==typeof console?(b.print||(b.print=function(a){console.log(a)}),b.printErr||(b.printErr=function(a){console.warn(a)})):b.print||(b.print=function(){}),da&&(b.load=importScripts),"undefined"===typeof b.setWindowTitle&&(b.setWindowTitle=function(a){document.title=
a});else throw"Unknown runtime environment. Where are we?";function ia(a){eval.call(null,a)}!b.load&&b.read&&(b.load=function(a){ia(b.read(a))});b.print||(b.print=function(){});b.printErr||(b.printErr=b.print);b.arguments||(b.arguments=[]);b.thisProgram||(b.thisProgram="./this.program");b.quit||(b.quit=function(a,c){throw c;});b.print=b.print;b.h=b.printErr;b.preRun=[];b.postRun=[];for(ba in aa)aa.hasOwnProperty(ba)&&(b[ba]=aa[ba]);
var aa=void 0,f={f:function(a){return tempRet0=a},H:function(){return tempRet0},L:function(){return la},K:function(a){la=a},s:function(a){switch(a){case "i1":case "i8":return 1;case "i16":return 2;case "i32":return 4;case "i64":return 8;case "float":return 4;case "double":return 8;default:return"*"===a[a.length-1]?f.j:"i"===a[0]?(a=parseInt(a.substr(1)),assert(0===a%8),a/8):0}},F:function(a){return Math.max(f.s(a),f.j)},M:16,aa:function(a,c){"double"===c||"i64"===c?a&7&&(assert(4===(a&7)),a+=4):assert(0===
(a&3));return a},T:function(a,c,d){return d||"i64"!=a&&"double"!=a?a?Math.min(c||(a?f.F(a):0),f.j):Math.min(c,8):8},l:function(a,c,d){return d&&d.length?b["dynCall_"+a].apply(null,[c].concat(d)):b["dynCall_"+a].call(null,c)},d:[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],v:function(a){for(var c=0;c<f.d.length;c++)if(!f.d[c])return f.d[c]=a,2*(1+c);throw"Finished up all reserved function pointers. Use a higher value for RESERVED_FUNCTION_POINTERS.";
},J:function(a){f.d[(a-2)/2]=null},g:function(a){f.g.n||(f.g.n={});f.g.n[a]||(f.g.n[a]=1,b.h(a))},m:{},V:function(a,c){assert(c);f.m[c]||(f.m[c]={});var d=f.m[c];d[a]||(d[a]=1===c.length?function(){return f.l(c,a)}:2===c.length?function(d){return f.l(c,a,[d])}:function(){return f.l(c,a,Array.prototype.slice.call(arguments))});return d[a]},U:function(){throw"You must build with -s RETAIN_COMPILER_SETTINGS=1 for Runtime.getCompilerSetting or emscripten_get_compiler_setting to work";},t:function(a){var c=
la;la=la+a|0;la=la+15&-16;return c},u:function(a){var c=ma;ma=ma+a|0;ma=ma+15&-16;return c},D:function(a){var c=oa[qa>>2];a=(c+a+15|0)&-16;oa[qa>>2]=a;if(a=a>=ra)sa(),a=!0;return a?(oa[qa>>2]=c,0):c},p:function(a,c){return Math.ceil(a/(c?c:16))*(c?c:16)},$:function(a,c,d){return d?+(a>>>0)+4294967296*+(c>>>0):+(a>>>0)+4294967296*+(c|0)},i:1024,j:4,N:0};f.addFunction=f.v;f.removeFunction=f.J;var ua=0;function assert(a,c){a||va("Assertion failed: "+c)}
function wa(a){var c;c="i32";"*"===c.charAt(c.length-1)&&(c="i32");switch(c){case "i1":return xa[a>>0];case "i8":return xa[a>>0];case "i16":return ya[a>>1];case "i32":return oa[a>>2];case "i64":return oa[a>>2];case "float":return za[a>>2];case "double":return Aa[a>>3];default:va("invalid type for setValue: "+c)}return null}
function Ba(a,c,d){var e,h,l;"number"===typeof a?(h=!0,l=a):(h=!1,l=a.length);var m="string"===typeof c?c:null;d=4==d?e:["function"===typeof Ca?Ca:f.u,f.t,f.u,f.D][void 0===d?2:d](Math.max(l,m?1:c.length));if(h){e=d;assert(0==(d&3));for(a=d+(l&-4);e<a;e+=4)oa[e>>2]=0;for(a=d+l;e<a;)xa[e++>>0]=0;return d}if("i8"===m)return a.subarray||a.slice?Ea.set(a,d):Ea.set(new Uint8Array(a),d),d;e=0;for(var K,Da;e<l;){var O=a[e];"function"===typeof O&&(O=f.W(O));h=m||c[e];if(0===h)e++;else{"i64"==h&&(h="i32");
var na=d+e,pa=h,pa=pa||"i8";"*"===pa.charAt(pa.length-1)&&(pa="i32");switch(pa){case "i1":xa[na>>0]=O;break;case "i8":xa[na>>0]=O;break;case "i16":ya[na>>1]=O;break;case "i32":oa[na>>2]=O;break;case "i64":tempI64=[O>>>0,(tempDouble=O,1<=+Fa(tempDouble)?0<tempDouble?(Ga(+Ha(tempDouble/4294967296),4294967295)|0)>>>0:~~+Ia((tempDouble-+(~~tempDouble>>>0))/4294967296)>>>0:0)];oa[na>>2]=tempI64[0];oa[na+4>>2]=tempI64[1];break;case "float":za[na>>2]=O;break;case "double":Aa[na>>3]=O;break;default:va("invalid type for setValue: "+
pa)}Da!==h&&(K=f.s(h),Da=h);e+=K}}return d}function Ja(a){var c;if(0===c||!a)return"";for(var d=0,e,h=0;;){e=Ea[a+h>>0];d|=e;if(0==e&&!c)break;h++;if(c&&h==c)break}c||(c=h);e="";if(128>d){for(;0<c;)d=String.fromCharCode.apply(String,Ea.subarray(a,a+Math.min(c,1024))),e=e?e+d:d,a+=1024,c-=1024;return e}return b.UTF8ToString(a)}var Ma="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function Na(a,c,d,e){if(0<e){e=d+e-1;for(var h=0;h<a.length;++h){var l=a.charCodeAt(h);55296<=l&&57343>=l&&(l=65536+((l&1023)<<10)|a.charCodeAt(++h)&1023);if(127>=l){if(d>=e)break;c[d++]=l}else{if(2047>=l){if(d+1>=e)break;c[d++]=192|l>>6}else{if(65535>=l){if(d+2>=e)break;c[d++]=224|l>>12}else{if(2097151>=l){if(d+3>=e)break;c[d++]=240|l>>18}else{if(67108863>=l){if(d+4>=e)break;c[d++]=248|l>>24}else{if(d+5>=e)break;c[d++]=252|l>>30;c[d++]=128|l>>24&63}c[d++]=128|l>>18&63}c[d++]=128|l>>12&63}c[d++]=
128|l>>6&63}c[d++]=128|l&63}}c[d]=0}}function Oa(a){for(var c=0,d=0;d<a.length;++d){var e=a.charCodeAt(d);55296<=e&&57343>=e&&(e=65536+((e&1023)<<10)|a.charCodeAt(++d)&1023);127>=e?++c:c=2047>=e?c+2:65535>=e?c+3:2097151>=e?c+4:67108863>=e?c+5:c+6}return c}"undefined"!==typeof TextDecoder&&new TextDecoder("utf-16le");
function Pa(a){return a.replace(/__Z[\w\d_]+/g,function(a){var d;a:{var e=b.___cxa_demangle||b.__cxa_demangle;if(e)try{var h=a.substr(1),l=Oa(h)+1,m=Ca(l);Na(h,Ea,m,l);var K=Ca(4),Da=e(m,0,0,K);if(0===wa(K)&&Da){d=Ja(Da);break a}}catch(O){}finally{m&&Qa(m),K&&Qa(K),Da&&Qa(Da)}else f.g("warning: build with  -s DEMANGLE_SUPPORT=1  to link in libcxxabi demangling");d=a}return a===d?a:a+" ["+d+"]"})}
function Ra(){var a;a:{a=Error();if(!a.stack){try{throw Error(0);}catch(c){a=c}if(!a.stack){a="(no stack trace available)";break a}}a=a.stack.toString()}b.extraStackTrace&&(a+="\n"+b.extraStackTrace());return Pa(a)}var buffer,xa,Ea,ya,Sa,oa,Ta,za,Aa;
function Ua(){b.HEAP8=xa=new Int8Array(buffer);b.HEAP16=ya=new Int16Array(buffer);b.HEAP32=oa=new Int32Array(buffer);b.HEAPU8=Ea=new Uint8Array(buffer);b.HEAPU16=Sa=new Uint16Array(buffer);b.HEAPU32=Ta=new Uint32Array(buffer);b.HEAPF32=za=new Float32Array(buffer);b.HEAPF64=Aa=new Float64Array(buffer)}var Va,ma,Wa,la,Za,$a,qa;Va=ma=Wa=la=Za=$a=qa=0;
function sa(){va("Cannot enlarge memory arrays. Either (1) compile with  -s TOTAL_MEMORY=X  with X higher than the current value "+ra+", (2) compile with  -s ALLOW_MEMORY_GROWTH=1  which allows increasing the size at runtime, or (3) if you want malloc to return NULL (0) instead of this abort, compile with  -s ABORTING_MALLOC=0 ")}var ab=b.TOTAL_STACK||5242880,ra=b.TOTAL_MEMORY||16777216;ra<ab&&b.h("TOTAL_MEMORY should be larger than TOTAL_STACK, was "+ra+"! (TOTAL_STACK="+ab+")");
b.buffer?buffer=b.buffer:"object"===typeof WebAssembly&&"function"===typeof WebAssembly.Memory?(b.wasmMemory=new WebAssembly.Memory({initial:ra/65536,maximum:ra/65536}),buffer=b.wasmMemory.buffer):buffer=new ArrayBuffer(ra);Ua();oa[0]=1668509029;ya[1]=25459;if(115!==Ea[2]||99!==Ea[3])throw"Runtime error: expected the system to be little-endian!";b.HEAP=void 0;b.buffer=buffer;b.HEAP8=xa;b.HEAP16=ya;b.HEAP32=oa;b.HEAPU8=Ea;b.HEAPU16=Sa;b.HEAPU32=Ta;b.HEAPF32=za;b.HEAPF64=Aa;
function bb(a){for(;0<a.length;){var c=a.shift();if("function"==typeof c)c();else{var d=c.S;"number"===typeof d?void 0===c.k?b.dynCall_v(d):b.dynCall_vi(d,c.k):d(void 0===c.k?null:c.k)}}}var cb=[],db=[],eb=[],fb=[],gb=[],hb=!1;function ib(){var a=b.preRun.shift();cb.unshift(a)}function jb(a){var c=Array(Oa(a)+1);Na(a,c,0,c.length);return c}Math.imul&&-5===Math.imul(4294967295,5)||(Math.imul=function(a,c){var d=a&65535,e=c&65535;return d*e+((a>>>16)*e+d*(c>>>16)<<16)|0});Math.Y=Math.imul;
if(!Math.fround){var kb=new Float32Array(1);Math.fround=function(a){kb[0]=a;return kb[0]}}Math.R=Math.fround;Math.clz32||(Math.clz32=function(a){a=a>>>0;for(var c=0;32>c;c++)if(a&1<<31-c)return c;return 32});Math.P=Math.clz32;Math.trunc||(Math.trunc=function(a){return 0>a?Math.ceil(a):Math.floor(a)});Math.trunc=Math.trunc;var Fa=Math.abs,Ia=Math.ceil,Ha=Math.floor,Ga=Math.min,mb=0,nb=null,ob=null;function pb(){mb++;b.monitorRunDependencies&&b.monitorRunDependencies(mb)}
function qb(){mb--;b.monitorRunDependencies&&b.monitorRunDependencies(mb);if(0==mb&&(null!==nb&&(clearInterval(nb),nb=null),ob)){var a=ob;ob=null;a()}}b.preloadedImages={};b.preloadedAudios={};var rb=null;
(function(a){function c(a,c){var d=pa;if(0>a.indexOf("."))d=(d||{})[a];else var e=a.split("."),d=(d||{})[e[0]],d=(d||{})[e[1]];c&&(d=(d||{})[c]);void 0===d&&va("bad lookupImport to ("+a+")."+c);return d}function d(c){var d=a.buffer;c.byteLength<d.byteLength&&a.printErr("the new buffer in mergeMemory is smaller than the previous one. in native wasm, we should grow memory here");var d=new Int8Array(d),e=new Int8Array(c);rb||d.set(e.subarray(a.STATIC_BASE,a.STATIC_BASE+a.STATIC_BUMP),a.STATIC_BASE);
e.set(d);b.buffer=buffer=c;Ua()}function e(){var c;if(a.wasmBinary)c=a.wasmBinary,c=new Uint8Array(c);else if(a.readBinary)c=a.readBinary(O);else throw"on the web, we need the wasm binary to be preloaded and set on Module['wasmBinary']. emcc.py will do that for you when generating HTML (but not JS)";return c}function h(){return a.wasmBinary||"function"!==typeof fetch?new Promise(function(a){a(e())}):fetch(O).then(function(a){return a.arrayBuffer()})}function l(c,d,e){if("function"!==typeof a.asm||
a.asm===Ya)a.asmPreload?a.asm=a.asmPreload:eval(a.read(na));return"function"!==typeof a.asm?(a.printErr("asm evalling did not set the module properly"),!1):a.asm(c,d,e)}function m(c,e){function l(c){lb=c.exports;lb.memory&&d(lb.memory);a.asm=lb;a.usingWasm=!0;qb()}if("object"!==typeof WebAssembly)return a.printErr("no native wasm support detected"),!1;if(!(a.wasmMemory instanceof WebAssembly.Memory))return a.printErr("no native wasm Memory in use"),!1;e.memory=a.wasmMemory;pa.global={NaN:NaN,Infinity:Infinity};
pa["global.Math"]=c.Math;pa.env=e;pb();if(a.instantiateWasm)try{return a.instantiateWasm(pa,l)}catch(m){return a.printErr("Module.instantiateWasm callback failed with error: "+m),!1}a.printErr("asynchronously preparing wasm");h().then(function(a){return WebAssembly.instantiate(a,pa)}).then(function(a){l(a.instance)}).catch(function(c){a.printErr("failed to asynchronously prepare wasm: "+c);a.quit(1,c)});return{}}var K=a.wasmJSMethod||"native-wasm";a.wasmJSMethod=K;var Da=a.wasmTextFile||"Box2D_v2.3.1_min.wasm.wast",
O=a.wasmBinaryFile||"Box2D_v2.3.1_min.wasm.wasm",na=a.asmjsCodeFile||"Box2D_v2.3.1_min.wasm.temp.asm.js",pa={global:null,env:null,asm2wasm:{"f64-rem":function(a,c){return a%c},"f64-to-int":function(a){return a|0},"i32s-div":function(a,c){return(a|0)/(c|0)|0},"i32u-div":function(a,c){return(a>>>0)/(c>>>0)>>>0},"i32s-rem":function(a,c){return(a|0)%(c|0)|0},"i32u-rem":function(a,c){return(a>>>0)%(c>>>0)>>>0},"debugger":function(){debugger}},parent:a},lb=null;a.asmPreload=a.asm;a.reallocBuffer=function(c){var d=
a.usingWasm?65536:16777216;0<c%d&&(c+=d-c%d);var d=a.buffer,e=d.byteLength;if(a.usingWasm)try{return-1!==a.wasmMemory.X((c-e)/65536)?a.buffer=a.wasmMemory.buffer:null}catch(h){return null}else return lb.__growWasmMemory((c-e)/65536),a.buffer!==d?a.buffer:null};a.asm=function(h,Ka,O){if(!Ka.table){var Xa=a.wasmTableSize;void 0===Xa&&(Xa=1024);var Ya=a.wasmMaxTableSize;Ka.table="object"===typeof WebAssembly&&"function"===typeof WebAssembly.Table?void 0!==Ya?new WebAssembly.Table({initial:Xa,maximum:Ya,
element:"anyfunc"}):new WebAssembly.Table({initial:Xa,element:"anyfunc"}):Array(Xa);a.wasmTable=Ka.table}Ka.memoryBase||(Ka.memoryBase=a.STATIC_BASE);Ka.tableBase||(Ka.tableBase=0);for(var P,Xa=K.split(","),Ya=0;Ya<Xa.length;Ya++)if(P=Xa[Ya],a.printErr("trying binaryen method: "+P),"native-wasm"===P){if(P=m(h,Ka))break}else if("asmjs"===P){if(P=l(h,Ka,O))break}else if("interpret-asm2wasm"===P||"interpret-s-expr"===P||"interpret-binary"===P){var La=h,ka=Ka,Nb=O;if("function"!==typeof WasmJS)a.printErr("WasmJS not detected - polyfill not bundled?"),
P=!1;else{var ta=WasmJS({});ta.outside=a;ta.info=pa;ta.lookupImport=c;assert(Nb===a.buffer);pa.global=La;pa.env=ka;assert(Nb===a.buffer);ka.memory=Nb;assert(ka.memory instanceof ArrayBuffer);ta.providedTotalMemory=a.buffer.byteLength;La=void 0;La="interpret-binary"===P?e():a.read("interpret-asm2wasm"==P?na:Da);ka=void 0;if("interpret-asm2wasm"==P)ka=ta._malloc(La.length+1),ta.writeAsciiToMemory(La,ka),ta._load_asm2wasm(ka);else if("interpret-s-expr"===P)ka=ta._malloc(La.length+1),ta.writeAsciiToMemory(La,
ka),ta._load_s_expr2wasm(ka);else if("interpret-binary"===P)ka=ta._malloc(La.length),ta.HEAPU8.set(La,ka),ta._load_binary2wasm(ka,La.length);else throw"what? "+P;ta._free(ka);ta._instantiate(ka);a.newBuffer&&(d(a.newBuffer),a.newBuffer=null);P=lb=ta.asmExports}if(P)break}else throw"bad method: "+P;if(!P)throw"no binaryen method succeeded. consider enabling more options, like interpreting, if you want that: https://github.com/kripken/emscripten/wiki/WebAssembly#binaryen-methods";a.printErr("binaryen method succeeded.");
return P};var Ya=a.asm})(b);
var sb=[function(a,c){var d=b.getCache(b.JSDestructionListener)[a];if(!d.hasOwnProperty("SayGoodbyeJoint"))throw"a JSImplementation must implement all functions, you forgot JSDestructionListener::SayGoodbyeJoint.";d.SayGoodbyeJoint(c)},function(a,c){var d=b.getCache(b.JSDestructionListener)[a];if(!d.hasOwnProperty("SayGoodbyeFixture"))throw"a JSImplementation must implement all functions, you forgot JSDestructionListener::SayGoodbyeFixture.";d.SayGoodbyeFixture(c)},function(a,c){var d=b.getCache(b.JSQueryCallback)[a];
if(!d.hasOwnProperty("ReportFixture"))throw"a JSImplementation must implement all functions, you forgot JSQueryCallback::ReportFixture.";return d.ReportFixture(c)},function(a,c,d,e,h){a=b.getCache(b.JSRayCastCallback)[a];if(!a.hasOwnProperty("ReportFixture"))throw"a JSImplementation must implement all functions, you forgot JSRayCastCallback::ReportFixture.";return a.ReportFixture(c,d,e,h)},function(a,c){var d=b.getCache(b.JSContactListener)[a];if(!d.hasOwnProperty("BeginContact"))throw"a JSImplementation must implement all functions, you forgot JSContactListener::BeginContact.";
d.BeginContact(c)},function(a,c){var d=b.getCache(b.JSContactListener)[a];if(!d.hasOwnProperty("EndContact"))throw"a JSImplementation must implement all functions, you forgot JSContactListener::EndContact.";d.EndContact(c)},function(a,c,d){a=b.getCache(b.JSContactListener)[a];if(!a.hasOwnProperty("PreSolve"))throw"a JSImplementation must implement all functions, you forgot JSContactListener::PreSolve.";a.PreSolve(c,d)},function(a,c,d){a=b.getCache(b.JSContactListener)[a];if(!a.hasOwnProperty("PostSolve"))throw"a JSImplementation must implement all functions, you forgot JSContactListener::PostSolve.";
a.PostSolve(c,d)},function(a,c,d){a=b.getCache(b.JSContactFilter)[a];if(!a.hasOwnProperty("ShouldCollide"))throw"a JSImplementation must implement all functions, you forgot JSContactFilter::ShouldCollide.";return a.ShouldCollide(c,d)},function(a,c,d,e){a=b.getCache(b.JSDraw)[a];if(!a.hasOwnProperty("DrawPolygon"))throw"a JSImplementation must implement all functions, you forgot JSDraw::DrawPolygon.";a.DrawPolygon(c,d,e)},function(a,c,d,e){a=b.getCache(b.JSDraw)[a];if(!a.hasOwnProperty("DrawSolidPolygon"))throw"a JSImplementation must implement all functions, you forgot JSDraw::DrawSolidPolygon.";
a.DrawSolidPolygon(c,d,e)},function(a,c,d,e){a=b.getCache(b.JSDraw)[a];if(!a.hasOwnProperty("DrawCircle"))throw"a JSImplementation must implement all functions, you forgot JSDraw::DrawCircle.";a.DrawCircle(c,d,e)},function(a,c,d,e,h){a=b.getCache(b.JSDraw)[a];if(!a.hasOwnProperty("DrawSolidCircle"))throw"a JSImplementation must implement all functions, you forgot JSDraw::DrawSolidCircle.";a.DrawSolidCircle(c,d,e,h)},function(a,c,d,e){a=b.getCache(b.JSDraw)[a];if(!a.hasOwnProperty("DrawSegment"))throw"a JSImplementation must implement all functions, you forgot JSDraw::DrawSegment.";
a.DrawSegment(c,d,e)},function(a,c){var d=b.getCache(b.JSDraw)[a];if(!d.hasOwnProperty("DrawTransform"))throw"a JSImplementation must implement all functions, you forgot JSDraw::DrawTransform.";d.DrawTransform(c)}];Va=f.i;ma=Va+23264;db.push();rb=0<=b.wasmJSMethod.indexOf("asmjs")||0<=b.wasmJSMethod.indexOf("interpret-asm2wasm")?"Box2D_v2.3.1_min.wasm.js.mem":null;b.STATIC_BASE=Va;b.STATIC_BUMP=23264;var tb=ma;ma+=16;b._memset=ub;function vb(){return!!vb.e}var wb=0,xb=[],yb={};
function zb(a,c){zb.e||(zb.e={});a in zb.e||(b.dynCall_v(c),zb.e[a]=1)}b._memcpy=Ab;var Bb=0;function Cb(){Bb+=4;return oa[Bb-4>>2]}var Db={},Eb={};b._sbrk=Fb;var Gb=1;
function Hb(){var a=wb;if(!a)return(f.f(0),0)|0;var c=yb[a],d=c.type;if(!d)return(f.f(0),a)|0;var e=Array.prototype.slice.call(arguments);b.___cxa_is_pointer_type(d);Hb.buffer||(Hb.buffer=Ca(4));oa[Hb.buffer>>2]=a;for(var a=Hb.buffer,h=0;h<e.length;h++)if(e[h]&&b.___cxa_can_catch(e[h],d,a))return a=oa[a>>2],c.w=a,(f.f(e[h]),a)|0;a=oa[a>>2];return(f.f(d),a)|0}b._llvm_bswap_i32=Ib;
function Jb(a,c){Bb=c;try{var d=Cb(),e=Cb(),h=Cb(),l=0;Jb.buffer||(Jb.e=[null,[],[]],Jb.q=function(a,c){var d=Jb.e[a];assert(d);if(0===c||10===c){var e=1===a?b.print:b.printErr,h;a:{for(var l=h=0;d[l];)++l;if(16<l-h&&d.subarray&&Ma)h=Ma.decode(d.subarray(h,l));else for(var m,K,P,O,ka,na,l="";;){m=d[h++];if(!m){h=l;break a}m&128?(K=d[h++]&63,192==(m&224)?l+=String.fromCharCode((m&31)<<6|K):(P=d[h++]&63,224==(m&240)?m=(m&15)<<12|K<<6|P:(O=d[h++]&63,240==(m&248)?m=(m&7)<<18|K<<12|P<<6|O:(ka=d[h++]&63,
248==(m&252)?m=(m&3)<<24|K<<18|P<<12|O<<6|ka:(na=d[h++]&63,m=(m&1)<<30|K<<24|P<<18|O<<12|ka<<6|na))),65536>m?l+=String.fromCharCode(m):(m-=65536,l+=String.fromCharCode(55296|m>>10,56320|m&1023)))):l+=String.fromCharCode(m)}}e(h);d.length=0}else d.push(c)});for(var m=0;m<h;m++){for(var K=oa[e+8*m>>2],Da=oa[e+(8*m+4)>>2],O=0;O<Da;O++)Jb.q(d,Ea[K+O]);l+=Da}return l}catch(na){return"undefined"!==typeof FS&&na instanceof FS.o||va(na),-na.r}}
fb.push(function(){var a=b._fflush;a&&a(0);if(a=Jb.q){var c=Jb.e;c[1].length&&a(1,10);c[2].length&&a(2,10)}});qa=Ba(1,"i32",2);Wa=la=f.p(ma);Za=Wa+ab;$a=f.p(Za);oa[qa>>2]=$a;b.wasmTableSize=1152;b.wasmMaxTableSize=1152;b.A={Math:Math,Int8Array:Int8Array,Int16Array:Int16Array,Int32Array:Int32Array,Uint8Array:Uint8Array,Uint16Array:Uint16Array,Uint32Array:Uint32Array,Float32Array:Float32Array,Float64Array:Float64Array,NaN:NaN,Infinity:Infinity};
b.B={abort:va,assert:assert,enlargeMemory:function(){sa()},getTotalMemory:function(){return ra},abortOnCannotGrowMemory:sa,invoke_iiii:function(a,c,d,e){try{return b.dynCall_iiii(a,c,d,e)}catch(h){if("number"!==typeof h&&"longjmp"!==h)throw h;b.setThrew(1,0)}},jsCall_iiii:function(a,c,d,e){return f.d[a](c,d,e)},invoke_viifii:function(a,c,d,e,h,l){try{b.dynCall_viifii(a,c,d,e,h,l)}catch(m){if("number"!==typeof m&&"longjmp"!==m)throw m;b.setThrew(1,0)}},jsCall_viifii:function(a,c,d,e,h,l){f.d[a](c,
d,e,h,l)},invoke_viiiii:function(a,c,d,e,h,l){try{b.dynCall_viiiii(a,c,d,e,h,l)}catch(m){if("number"!==typeof m&&"longjmp"!==m)throw m;b.setThrew(1,0)}},jsCall_viiiii:function(a,c,d,e,h,l){f.d[a](c,d,e,h,l)},invoke_vi:function(a,c){try{b.dynCall_vi(a,c)}catch(d){if("number"!==typeof d&&"longjmp"!==d)throw d;b.setThrew(1,0)}},jsCall_vi:function(a,c){f.d[a](c)},invoke_vii:function(a,c,d){try{b.dynCall_vii(a,c,d)}catch(e){if("number"!==typeof e&&"longjmp"!==e)throw e;b.setThrew(1,0)}},jsCall_vii:function(a,
c,d){f.d[a](c,d)},invoke_ii:function(a,c){try{return b.dynCall_ii(a,c)}catch(d){if("number"!==typeof d&&"longjmp"!==d)throw d;b.setThrew(1,0)}},jsCall_ii:function(a,c){return f.d[a](c)},invoke_fif:function(a,c,d){try{return b.dynCall_fif(a,c,d)}catch(e){if("number"!==typeof e&&"longjmp"!==e)throw e;b.setThrew(1,0)}},jsCall_fif:function(a,c,d){return f.d[a](c,d)},invoke_viii:function(a,c,d,e){try{b.dynCall_viii(a,c,d,e)}catch(h){if("number"!==typeof h&&"longjmp"!==h)throw h;b.setThrew(1,0)}},jsCall_viii:function(a,
c,d,e){f.d[a](c,d,e)},invoke_viifi:function(a,c,d,e,h){try{b.dynCall_viifi(a,c,d,e,h)}catch(l){if("number"!==typeof l&&"longjmp"!==l)throw l;b.setThrew(1,0)}},jsCall_viifi:function(a,c,d,e,h){f.d[a](c,d,e,h)},invoke_v:function(a){try{b.dynCall_v(a)}catch(c){if("number"!==typeof c&&"longjmp"!==c)throw c;b.setThrew(1,0)}},jsCall_v:function(a){f.d[a]()},invoke_viif:function(a,c,d,e){try{b.dynCall_viif(a,c,d,e)}catch(h){if("number"!==typeof h&&"longjmp"!==h)throw h;b.setThrew(1,0)}},jsCall_viif:function(a,
c,d,e){f.d[a](c,d,e)},invoke_viiiiii:function(a,c,d,e,h,l,m){try{b.dynCall_viiiiii(a,c,d,e,h,l,m)}catch(K){if("number"!==typeof K&&"longjmp"!==K)throw K;b.setThrew(1,0)}},jsCall_viiiiii:function(a,c,d,e,h,l,m){f.d[a](c,d,e,h,l,m)},invoke_iii:function(a,c,d){try{return b.dynCall_iii(a,c,d)}catch(e){if("number"!==typeof e&&"longjmp"!==e)throw e;b.setThrew(1,0)}},jsCall_iii:function(a,c,d){return f.d[a](c,d)},invoke_iiiiii:function(a,c,d,e,h,l){try{return b.dynCall_iiiiii(a,c,d,e,h,l)}catch(m){if("number"!==
typeof m&&"longjmp"!==m)throw m;b.setThrew(1,0)}},jsCall_iiiiii:function(a,c,d,e,h,l){return f.d[a](c,d,e,h,l)},invoke_fiiiif:function(a,c,d,e,h,l){try{return b.dynCall_fiiiif(a,c,d,e,h,l)}catch(m){if("number"!==typeof m&&"longjmp"!==m)throw m;b.setThrew(1,0)}},jsCall_fiiiif:function(a,c,d,e,h,l){return f.d[a](c,d,e,h,l)},invoke_viiii:function(a,c,d,e,h){try{b.dynCall_viiii(a,c,d,e,h)}catch(l){if("number"!==typeof l&&"longjmp"!==l)throw l;b.setThrew(1,0)}},jsCall_viiii:function(a,c,d,e,h){f.d[a](c,
d,e,h)},_emscripten_asm_const_iiiii:function(a,c,d,e,h){return sb[a](c,d,e,h)},_emscripten_asm_const_diiiid:function(a,c,d,e,h,l){return sb[a](c,d,e,h,l)},_pthread_key_create:function(a){if(0==a)return 22;oa[a>>2]=Gb;Eb[Gb]=0;Gb++;return 0},_abort:function(){b.abort()},___gxx_personality_v0:function(){},_emscripten_asm_const_iiidii:function(a,c,d,e,h,l){return sb[a](c,d,e,h,l)},___assert_fail:function(a,c,d,e){ua=!0;throw"Assertion failed: "+Ja(a)+", at: "+[c?Ja(c):"unknown filename",d,e?Ja(e):"unknown function"]+
" at "+Ra();},__ZSt18uncaught_exceptionv:vb,___setErrNo:function(a){b.___errno_location&&(oa[b.___errno_location()>>2]=a);return a},___cxa_begin_catch:function(a){var c=yb[a];c&&!c.C&&(c.C=!0,vb.e--);c&&(c.da=!1);xb.push(a);a:{if(a&&!yb[a])for(var d in yb)if(yb[d].w===a){c=d;break a}c=a}c&&yb[c].ba++;return a},_emscripten_memcpy_big:function(a,c,d){Ea.set(Ea.subarray(c,c+d),a);return a},___resumeException:function(a){wb||(wb=a);throw a+" - Exception catching is disabled, this exception cannot be caught. Compile with -s DISABLE_EXCEPTION_CATCHING=0 or DISABLE_EXCEPTION_CATCHING=2 to catch.";
},___cxa_find_matching_catch:Hb,_pthread_getspecific:function(a){return Eb[a]||0},_pthread_once:zb,___syscall54:function(a,c){Bb=c;return 0},_emscripten_asm_const_iii:function(a,c,d){return sb[a](c,d)},_emscripten_asm_const_iiidi:function(a,c,d,e,h){return sb[a](c,d,e,h)},_pthread_setspecific:function(a,c){if(!(a in Eb))return 22;Eb[a]=c;return 0},_emscripten_asm_const_iiii:function(a,c,d,e){return sb[a](c,d,e)},___syscall6:function(a,c){Bb=c;try{var d=Db.G();FS.close(d);return 0}catch(e){return"undefined"!==
typeof FS&&e instanceof FS.o||va(e),-e.r}},___syscall140:function(a,c){Bb=c;try{var d=Db.G(),e=Cb(),h=Cb(),l=Cb(),m=Cb();assert(0===e);FS.Z(d,h,m);oa[l>>2]=d.position;d.I&&0===h&&0===m&&(d.I=null);return 0}catch(K){return"undefined"!==typeof FS&&K instanceof FS.o||va(K),-K.r}},___cxa_pure_virtual:function(){ua=!0;throw"Pure virtual function called!";},___syscall146:Jb,DYNAMICTOP_PTR:qa,tempDoublePtr:tb,ABORT:ua,STACKTOP:la,STACK_MAX:Za};var Kb=b.asm(b.A,b.B,buffer);b.asm=Kb;
var Lb=b._emscripten_bind_b2WheelJoint_GetSpringDampingRatio_0=function(){return b.asm._emscripten_bind_b2WheelJoint_GetSpringDampingRatio_0.apply(null,arguments)},Mb=b._emscripten_bind_b2ContactEdge_set_next_1=function(){return b.asm._emscripten_bind_b2ContactEdge_set_next_1.apply(null,arguments)},Ob=b._emscripten_bind_b2ChainShape_get_m_count_0=function(){return b.asm._emscripten_bind_b2ChainShape_get_m_count_0.apply(null,arguments)},Pb=b._emscripten_bind_b2PrismaticJointDef_get_motorSpeed_0=function(){return b.asm._emscripten_bind_b2PrismaticJointDef_get_motorSpeed_0.apply(null,
arguments)},Qb=b._emscripten_bind_b2PulleyJoint_SetUserData_1=function(){return b.asm._emscripten_bind_b2PulleyJoint_SetUserData_1.apply(null,arguments)},Rb=b._emscripten_bind_b2Shape_ComputeAABB_3=function(){return b.asm._emscripten_bind_b2Shape_ComputeAABB_3.apply(null,arguments)},Sb=b._emscripten_bind_b2FrictionJointDef_set_userData_1=function(){return b.asm._emscripten_bind_b2FrictionJointDef_set_userData_1.apply(null,arguments)},Tb=b._emscripten_bind_b2MouseJoint_IsActive_0=function(){return b.asm._emscripten_bind_b2MouseJoint_IsActive_0.apply(null,
arguments)},Ub=b._emscripten_bind_b2World_IsLocked_0=function(){return b.asm._emscripten_bind_b2World_IsLocked_0.apply(null,arguments)},Vb=b._emscripten_bind_b2Draw_GetFlags_0=function(){return b.asm._emscripten_bind_b2Draw_GetFlags_0.apply(null,arguments)},Wb=b._emscripten_bind_b2FrictionJoint_IsActive_0=function(){return b.asm._emscripten_bind_b2FrictionJoint_IsActive_0.apply(null,arguments)},Xb=b._emscripten_bind_b2Color_set_g_1=function(){return b.asm._emscripten_bind_b2Color_set_g_1.apply(null,
arguments)},Yb=b._emscripten_bind_b2PolygonShape_RayCast_4=function(){return b.asm._emscripten_bind_b2PolygonShape_RayCast_4.apply(null,arguments)},Zb=b._emscripten_bind_b2World_GetTreeBalance_0=function(){return b.asm._emscripten_bind_b2World_GetTreeBalance_0.apply(null,arguments)},$b=b._emscripten_bind_b2ChainShape_get_m_vertices_0=function(){return b.asm._emscripten_bind_b2ChainShape_get_m_vertices_0.apply(null,arguments)},ac=b._emscripten_bind_JSDraw_DrawSolidCircle_4=function(){return b.asm._emscripten_bind_JSDraw_DrawSolidCircle_4.apply(null,
arguments)},bc=b._emscripten_bind_b2RevoluteJoint_GetLocalAnchorA_0=function(){return b.asm._emscripten_bind_b2RevoluteJoint_GetLocalAnchorA_0.apply(null,arguments)},cc=b._emscripten_bind_b2FixtureDef_get_filter_0=function(){return b.asm._emscripten_bind_b2FixtureDef_get_filter_0.apply(null,arguments)},dc=b._emscripten_bind_b2FrictionJointDef_get_type_0=function(){return b.asm._emscripten_bind_b2FrictionJointDef_get_type_0.apply(null,arguments)},ec=b._emscripten_bind_b2MotorJointDef_set_type_1=function(){return b.asm._emscripten_bind_b2MotorJointDef_set_type_1.apply(null,
arguments)},fc=b._emscripten_bind_b2FixtureDef_set_userData_1=function(){return b.asm._emscripten_bind_b2FixtureDef_set_userData_1.apply(null,arguments)},gc=b._emscripten_bind_b2EdgeShape_set_m_hasVertex3_1=function(){return b.asm._emscripten_bind_b2EdgeShape_set_m_hasVertex3_1.apply(null,arguments)},hc=b._emscripten_bind_b2JointEdge_set_joint_1=function(){return b.asm._emscripten_bind_b2JointEdge_set_joint_1.apply(null,arguments)},ic=b._emscripten_bind_b2Fixture___destroy___0=function(){return b.asm._emscripten_bind_b2Fixture___destroy___0.apply(null,
arguments)},jc=b._emscripten_bind_b2World_SetWarmStarting_1=function(){return b.asm._emscripten_bind_b2World_SetWarmStarting_1.apply(null,arguments)},kc=b._emscripten_bind_JSDraw_DrawCircle_3=function(){return b.asm._emscripten_bind_JSDraw_DrawCircle_3.apply(null,arguments)},lc=b._emscripten_bind_b2WeldJoint_IsActive_0=function(){return b.asm._emscripten_bind_b2WeldJoint_IsActive_0.apply(null,arguments)},mc=b._emscripten_bind_b2DestructionListener___destroy___0=function(){return b.asm._emscripten_bind_b2DestructionListener___destroy___0.apply(null,
arguments)},nc=b._emscripten_bind_b2BodyDef_set_type_1=function(){return b.asm._emscripten_bind_b2BodyDef_set_type_1.apply(null,arguments)},oc=b._emscripten_bind_b2ChainShape_ComputeAABB_3=function(){return b.asm._emscripten_bind_b2ChainShape_ComputeAABB_3.apply(null,arguments)},pc=b._emscripten_bind_b2PulleyJoint_GetUserData_0=function(){return b.asm._emscripten_bind_b2PulleyJoint_GetUserData_0.apply(null,arguments)},qc=b._emscripten_bind_b2WeldJoint_GetReactionTorque_1=function(){return b.asm._emscripten_bind_b2WeldJoint_GetReactionTorque_1.apply(null,
arguments)},rc=b._emscripten_bind_b2MotorJointDef_get_maxForce_0=function(){return b.asm._emscripten_bind_b2MotorJointDef_get_maxForce_0.apply(null,arguments)},sc=b._emscripten_bind_b2DistanceJointDef_get_userData_0=function(){return b.asm._emscripten_bind_b2DistanceJointDef_get_userData_0.apply(null,arguments)},tc=b._emscripten_bind_b2BodyDef_get_position_0=function(){return b.asm._emscripten_bind_b2BodyDef_get_position_0.apply(null,arguments)},uc=b._emscripten_bind_b2RevoluteJointDef_set_userData_1=
function(){return b.asm._emscripten_bind_b2RevoluteJointDef_set_userData_1.apply(null,arguments)},vc=b._emscripten_bind_b2World_SetContactFilter_1=function(){return b.asm._emscripten_bind_b2World_SetContactFilter_1.apply(null,arguments)},wc=b._emscripten_bind_b2WheelJointDef_get_collideConnected_0=function(){return b.asm._emscripten_bind_b2WheelJointDef_get_collideConnected_0.apply(null,arguments)},xc=b._emscripten_bind_b2MouseJointDef_set_userData_1=function(){return b.asm._emscripten_bind_b2MouseJointDef_set_userData_1.apply(null,
arguments)};b.stackSave=function(){return b.asm.stackSave.apply(null,arguments)};
var yc=b._emscripten_bind_b2FixtureDef_set_restitution_1=function(){return b.asm._emscripten_bind_b2FixtureDef_set_restitution_1.apply(null,arguments)},zc=b._emscripten_bind_b2RevoluteJoint_GetUserData_0=function(){return b.asm._emscripten_bind_b2RevoluteJoint_GetUserData_0.apply(null,arguments)},Ac=b._emscripten_bind_b2Mat33_get_ey_0=function(){return b.asm._emscripten_bind_b2Mat33_get_ey_0.apply(null,arguments)},Bc=b._emscripten_bind_b2MouseJoint_GetCollideConnected_0=function(){return b.asm._emscripten_bind_b2MouseJoint_GetCollideConnected_0.apply(null,
arguments)},Cc=b._emscripten_bind_b2World_GetGravity_0=function(){return b.asm._emscripten_bind_b2World_GetGravity_0.apply(null,arguments)},Dc=b._emscripten_bind_b2Mat33_set_ey_1=function(){return b.asm._emscripten_bind_b2Mat33_set_ey_1.apply(null,arguments)},Ec=b._emscripten_bind_b2Profile_get_broadphase_0=function(){return b.asm._emscripten_bind_b2Profile_get_broadphase_0.apply(null,arguments)},Fc=b._emscripten_bind_b2PulleyJointDef_get_bodyA_0=function(){return b.asm._emscripten_bind_b2PulleyJointDef_get_bodyA_0.apply(null,
arguments)},Gc=b._emscripten_bind_b2PrismaticJoint_SetLimits_2=function(){return b.asm._emscripten_bind_b2PrismaticJoint_SetLimits_2.apply(null,arguments)},Hc=b._emscripten_bind_b2PulleyJointDef_get_localAnchorA_0=function(){return b.asm._emscripten_bind_b2PulleyJointDef_get_localAnchorA_0.apply(null,arguments)},Ic=b._emscripten_bind_b2DistanceJoint_GetAnchorA_0=function(){return b.asm._emscripten_bind_b2DistanceJoint_GetAnchorA_0.apply(null,arguments)},Jc=b._emscripten_bind_b2DistanceJointDef_set_userData_1=
function(){return b.asm._emscripten_bind_b2DistanceJointDef_set_userData_1.apply(null,arguments)},Kc=b._emscripten_bind_b2DistanceJointDef_set_dampingRatio_1=function(){return b.asm._emscripten_bind_b2DistanceJointDef_set_dampingRatio_1.apply(null,arguments)},Lc=b._emscripten_bind_b2RopeJointDef_set_collideConnected_1=function(){return b.asm._emscripten_bind_b2RopeJointDef_set_collideConnected_1.apply(null,arguments)},Mc=b._emscripten_bind_b2ChainShape_set_m_nextVertex_1=function(){return b.asm._emscripten_bind_b2ChainShape_set_m_nextVertex_1.apply(null,
arguments)},Nc=b._emscripten_bind_JSContactListener_EndContact_1=function(){return b.asm._emscripten_bind_JSContactListener_EndContact_1.apply(null,arguments)},Oc=b._emscripten_bind_b2MassData_set_mass_1=function(){return b.asm._emscripten_bind_b2MassData_set_mass_1.apply(null,arguments)},Pc=b._emscripten_bind_b2Vec3_get_x_0=function(){return b.asm._emscripten_bind_b2Vec3_get_x_0.apply(null,arguments)},Qc=b._emscripten_bind_b2ChainShape_CreateChain_2=function(){return b.asm._emscripten_bind_b2ChainShape_CreateChain_2.apply(null,
arguments)},Rc=b._emscripten_bind_b2RopeJoint_GetUserData_0=function(){return b.asm._emscripten_bind_b2RopeJoint_GetUserData_0.apply(null,arguments)},Sc=b._emscripten_bind_b2World_DestroyBody_1=function(){return b.asm._emscripten_bind_b2World_DestroyBody_1.apply(null,arguments)},Tc=b._emscripten_bind_b2Profile_get_solvePosition_0=function(){return b.asm._emscripten_bind_b2Profile_get_solvePosition_0.apply(null,arguments)},Uc=b._emscripten_bind_b2Shape_RayCast_4=function(){return b.asm._emscripten_bind_b2Shape_RayCast_4.apply(null,
arguments)},Vc=b._emscripten_bind_b2PulleyJoint_GetGroundAnchorA_0=function(){return b.asm._emscripten_bind_b2PulleyJoint_GetGroundAnchorA_0.apply(null,arguments)},Wc=b._emscripten_bind_b2Mat33___destroy___0=function(){return b.asm._emscripten_bind_b2Mat33___destroy___0.apply(null,arguments)},Xc=b._emscripten_bind_b2GearJoint_GetReactionTorque_1=function(){return b.asm._emscripten_bind_b2GearJoint_GetReactionTorque_1.apply(null,arguments)},Yc=b._emscripten_bind_b2WeldJointDef_set_collideConnected_1=
function(){return b.asm._emscripten_bind_b2WeldJointDef_set_collideConnected_1.apply(null,arguments)},Zc=b._emscripten_bind_b2JointDef_get_collideConnected_0=function(){return b.asm._emscripten_bind_b2JointDef_get_collideConnected_0.apply(null,arguments)};b.getTempRet0=function(){return b.asm.getTempRet0.apply(null,arguments)};
var $c=b._emscripten_bind_b2FrictionJointDef_get_maxTorque_0=function(){return b.asm._emscripten_bind_b2FrictionJointDef_get_maxTorque_0.apply(null,arguments)},ad=b._emscripten_bind_JSQueryCallback_JSQueryCallback_0=function(){return b.asm._emscripten_bind_JSQueryCallback_JSQueryCallback_0.apply(null,arguments)},bd=b._emscripten_bind_b2World_SetAutoClearForces_1=function(){return b.asm._emscripten_bind_b2World_SetAutoClearForces_1.apply(null,arguments)},cd=b._emscripten_bind_b2PrismaticJointDef_set_lowerTranslation_1=
function(){return b.asm._emscripten_bind_b2PrismaticJointDef_set_lowerTranslation_1.apply(null,arguments)},dd=b._emscripten_bind_b2Contact_GetTangentSpeed_0=function(){return b.asm._emscripten_bind_b2Contact_GetTangentSpeed_0.apply(null,arguments)},ed=b._emscripten_bind_b2BodyDef_set_position_1=function(){return b.asm._emscripten_bind_b2BodyDef_set_position_1.apply(null,arguments)},fd=b._emscripten_bind_b2Transform_get_q_0=function(){return b.asm._emscripten_bind_b2Transform_get_q_0.apply(null,arguments)},
gd=b._emscripten_bind_b2PolygonShape_set_m_count_1=function(){return b.asm._emscripten_bind_b2PolygonShape_set_m_count_1.apply(null,arguments)},hd=b._emscripten_bind_b2Contact_GetNext_0=function(){return b.asm._emscripten_bind_b2Contact_GetNext_0.apply(null,arguments)},id=b._emscripten_bind_b2MotorJointDef_set_userData_1=function(){return b.asm._emscripten_bind_b2MotorJointDef_set_userData_1.apply(null,arguments)},jd=b._emscripten_bind_b2GearJoint_GetJoint1_0=function(){return b.asm._emscripten_bind_b2GearJoint_GetJoint1_0.apply(null,
arguments)},kd=b._emscripten_bind_b2World_GetProxyCount_0=function(){return b.asm._emscripten_bind_b2World_GetProxyCount_0.apply(null,arguments)},ld=b._emscripten_bind_b2MotorJoint_SetMaxTorque_1=function(){return b.asm._emscripten_bind_b2MotorJoint_SetMaxTorque_1.apply(null,arguments)},md=b._emscripten_bind_b2GearJoint_GetAnchorA_0=function(){return b.asm._emscripten_bind_b2GearJoint_GetAnchorA_0.apply(null,arguments)},nd=b._emscripten_bind_b2MouseJointDef_set_bodyA_1=function(){return b.asm._emscripten_bind_b2MouseJointDef_set_bodyA_1.apply(null,
arguments)},od=b._emscripten_bind_b2World_SetContactListener_1=function(){return b.asm._emscripten_bind_b2World_SetContactListener_1.apply(null,arguments)},pd=b._emscripten_bind_b2Body_IsAwake_0=function(){return b.asm._emscripten_bind_b2Body_IsAwake_0.apply(null,arguments)},qd=b._emscripten_bind_b2JointEdge_set_other_1=function(){return b.asm._emscripten_bind_b2JointEdge_set_other_1.apply(null,arguments)},rd=b._emscripten_bind_b2MouseJointDef_set_target_1=function(){return b.asm._emscripten_bind_b2MouseJointDef_set_target_1.apply(null,
arguments)},sd=b._emscripten_bind_b2MotorJoint_SetCorrectionFactor_1=function(){return b.asm._emscripten_bind_b2MotorJoint_SetCorrectionFactor_1.apply(null,arguments)},td=b._emscripten_bind_b2FixtureDef_get_density_0=function(){return b.asm._emscripten_bind_b2FixtureDef_get_density_0.apply(null,arguments)},ud=b._emscripten_bind_b2GearJoint_GetRatio_0=function(){return b.asm._emscripten_bind_b2GearJoint_GetRatio_0.apply(null,arguments)},vd=b._emscripten_bind_b2PrismaticJointDef_get_upperTranslation_0=
function(){return b.asm._emscripten_bind_b2PrismaticJointDef_get_upperTranslation_0.apply(null,arguments)},wd=b._emscripten_bind_b2RevoluteJoint_GetReferenceAngle_0=function(){return b.asm._emscripten_bind_b2RevoluteJoint_GetReferenceAngle_0.apply(null,arguments)},xd=b._emscripten_bind_b2MotorJointDef_get_collideConnected_0=function(){return b.asm._emscripten_bind_b2MotorJointDef_get_collideConnected_0.apply(null,arguments)},yd=b._emscripten_enum_b2ManifoldType_e_circles=function(){return b.asm._emscripten_enum_b2ManifoldType_e_circles.apply(null,
arguments)},zd=b._emscripten_bind_b2PulleyJointDef_set_localAnchorB_1=function(){return b.asm._emscripten_bind_b2PulleyJointDef_set_localAnchorB_1.apply(null,arguments)},Ad=b._emscripten_bind_b2RevoluteJointDef_Initialize_3=function(){return b.asm._emscripten_bind_b2RevoluteJointDef_Initialize_3.apply(null,arguments)},Bd=b._emscripten_bind_b2FixtureDef_get_userData_0=function(){return b.asm._emscripten_bind_b2FixtureDef_get_userData_0.apply(null,arguments)},Cd=b._emscripten_bind_b2DistanceJoint_GetUserData_0=
function(){return b.asm._emscripten_bind_b2DistanceJoint_GetUserData_0.apply(null,arguments)},Dd=b._emscripten_bind_b2FrictionJointDef_set_collideConnected_1=function(){return b.asm._emscripten_bind_b2FrictionJointDef_set_collideConnected_1.apply(null,arguments)},Ed=b._emscripten_bind_b2PrismaticJointDef_get_lowerTranslation_0=function(){return b.asm._emscripten_bind_b2PrismaticJointDef_get_lowerTranslation_0.apply(null,arguments)},Fd=b._emscripten_bind_b2GearJoint_GetCollideConnected_0=function(){return b.asm._emscripten_bind_b2GearJoint_GetCollideConnected_0.apply(null,
arguments)},Gd=b._emscripten_bind_b2Filter_b2Filter_0=function(){return b.asm._emscripten_bind_b2Filter_b2Filter_0.apply(null,arguments)},Hd=b._emscripten_bind_b2MouseJointDef_set_type_1=function(){return b.asm._emscripten_bind_b2MouseJointDef_set_type_1.apply(null,arguments)},Id=b._emscripten_bind_b2Body_ApplyAngularImpulse_2=function(){return b.asm._emscripten_bind_b2Body_ApplyAngularImpulse_2.apply(null,arguments)},Jd=b._emscripten_enum_b2JointType_e_frictionJoint=function(){return b.asm._emscripten_enum_b2JointType_e_frictionJoint.apply(null,
arguments)},Kd=b._emscripten_bind_b2RayCastOutput_set_fraction_1=function(){return b.asm._emscripten_bind_b2RayCastOutput_set_fraction_1.apply(null,arguments)},Ld=b._emscripten_bind_b2Color_set_r_1=function(){return b.asm._emscripten_bind_b2Color_set_r_1.apply(null,arguments)},Md=b._emscripten_bind_b2DistanceJointDef_get_length_0=function(){return b.asm._emscripten_bind_b2DistanceJointDef_get_length_0.apply(null,arguments)},Nd=b._emscripten_bind_b2PulleyJoint_GetBodyB_0=function(){return b.asm._emscripten_bind_b2PulleyJoint_GetBodyB_0.apply(null,
arguments)},Od=b._emscripten_bind_b2WheelJointDef_set_type_1=function(){return b.asm._emscripten_bind_b2WheelJointDef_set_type_1.apply(null,arguments)},Pd=b._emscripten_bind_b2World_GetTreeQuality_0=function(){return b.asm._emscripten_bind_b2World_GetTreeQuality_0.apply(null,arguments)},Qd=b._emscripten_bind_b2BodyDef_set_gravityScale_1=function(){return b.asm._emscripten_bind_b2BodyDef_set_gravityScale_1.apply(null,arguments)},Rd=b._emscripten_bind_b2RopeJointDef_set_bodyB_1=function(){return b.asm._emscripten_bind_b2RopeJointDef_set_bodyB_1.apply(null,
arguments)},Sd=b._emscripten_bind_b2PrismaticJoint_GetLowerLimit_0=function(){return b.asm._emscripten_bind_b2PrismaticJoint_GetLowerLimit_0.apply(null,arguments)},Td=b._emscripten_bind_b2AABB_get_lowerBound_0=function(){return b.asm._emscripten_bind_b2AABB_get_lowerBound_0.apply(null,arguments)},Ud=b._emscripten_bind_b2WheelJoint_SetMotorSpeed_1=function(){return b.asm._emscripten_bind_b2WheelJoint_SetMotorSpeed_1.apply(null,arguments)},Vd=b._emscripten_bind_b2PrismaticJointDef_get_referenceAngle_0=
function(){return b.asm._emscripten_bind_b2PrismaticJointDef_get_referenceAngle_0.apply(null,arguments)},Wd=b._emscripten_bind_b2Body_SetMassData_1=function(){return b.asm._emscripten_bind_b2Body_SetMassData_1.apply(null,arguments)},Xd=b._emscripten_bind_b2BodyDef_get_angularVelocity_0=function(){return b.asm._emscripten_bind_b2BodyDef_get_angularVelocity_0.apply(null,arguments)},Yd=b._emscripten_bind_b2WeldJoint_SetDampingRatio_1=function(){return b.asm._emscripten_bind_b2WeldJoint_SetDampingRatio_1.apply(null,
arguments)},Zd=b._emscripten_bind_b2PrismaticJointDef___destroy___0=function(){return b.asm._emscripten_bind_b2PrismaticJointDef___destroy___0.apply(null,arguments)},$d=b._emscripten_bind_b2Contact_IsTouching_0=function(){return b.asm._emscripten_bind_b2Contact_IsTouching_0.apply(null,arguments)},ae=b._emscripten_bind_b2Draw_SetFlags_1=function(){return b.asm._emscripten_bind_b2Draw_SetFlags_1.apply(null,arguments)},be=b._emscripten_bind_b2AABB_Contains_1=function(){return b.asm._emscripten_bind_b2AABB_Contains_1.apply(null,
arguments)},ce=b._emscripten_bind_b2DistanceJoint_GetNext_0=function(){return b.asm._emscripten_bind_b2DistanceJoint_GetNext_0.apply(null,arguments)},de=b._emscripten_bind_b2EdgeShape_set_m_radius_1=function(){return b.asm._emscripten_bind_b2EdgeShape_set_m_radius_1.apply(null,arguments)},ee=b._emscripten_bind_b2DistanceJointDef_get_dampingRatio_0=function(){return b.asm._emscripten_bind_b2DistanceJointDef_get_dampingRatio_0.apply(null,arguments)},fe=b._emscripten_bind_b2DistanceJoint_GetLocalAnchorA_0=
function(){return b.asm._emscripten_bind_b2DistanceJoint_GetLocalAnchorA_0.apply(null,arguments)},ge=b._emscripten_bind_b2PrismaticJoint_GetType_0=function(){return b.asm._emscripten_bind_b2PrismaticJoint_GetType_0.apply(null,arguments)},he=b._emscripten_bind_b2Fixture_GetRestitution_0=function(){return b.asm._emscripten_bind_b2Fixture_GetRestitution_0.apply(null,arguments)},ie=b._emscripten_bind_b2Transform_set_q_1=function(){return b.asm._emscripten_bind_b2Transform_set_q_1.apply(null,arguments)},
je=b._emscripten_bind_b2PolygonShape___destroy___0=function(){return b.asm._emscripten_bind_b2PolygonShape___destroy___0.apply(null,arguments)},ke=b._emscripten_bind_b2AABB_get_upperBound_0=function(){return b.asm._emscripten_bind_b2AABB_get_upperBound_0.apply(null,arguments)},le=b._emscripten_bind_b2Transform___destroy___0=function(){return b.asm._emscripten_bind_b2Transform___destroy___0.apply(null,arguments)},me=b._emscripten_bind_b2Body_GetLinearVelocity_0=function(){return b.asm._emscripten_bind_b2Body_GetLinearVelocity_0.apply(null,
arguments)},ne=b._emscripten_bind_b2CircleShape_set_m_radius_1=function(){return b.asm._emscripten_bind_b2CircleShape_set_m_radius_1.apply(null,arguments)},oe=b._emscripten_bind_b2EdgeShape_set_m_hasVertex0_1=function(){return b.asm._emscripten_bind_b2EdgeShape_set_m_hasVertex0_1.apply(null,arguments)},pe=b._emscripten_bind_b2RopeJoint_GetMaxLength_0=function(){return b.asm._emscripten_bind_b2RopeJoint_GetMaxLength_0.apply(null,arguments)},qe=b._emscripten_bind_b2GearJoint_GetUserData_0=function(){return b.asm._emscripten_bind_b2GearJoint_GetUserData_0.apply(null,
arguments)},re=b._emscripten_bind_b2MotorJoint_GetCollideConnected_0=function(){return b.asm._emscripten_bind_b2MotorJoint_GetCollideConnected_0.apply(null,arguments)},se=b._emscripten_bind_b2GearJointDef_set_type_1=function(){return b.asm._emscripten_bind_b2GearJointDef_set_type_1.apply(null,arguments)},te=b._emscripten_bind_b2DistanceJoint_SetDampingRatio_1=function(){return b.asm._emscripten_bind_b2DistanceJoint_SetDampingRatio_1.apply(null,arguments)},ue=b._emscripten_bind_b2Contact_GetFixtureA_0=
function(){return b.asm._emscripten_bind_b2Contact_GetFixtureA_0.apply(null,arguments)},ve=b._emscripten_bind_b2PulleyJointDef_get_ratio_0=function(){return b.asm._emscripten_bind_b2PulleyJointDef_get_ratio_0.apply(null,arguments)},we=b._emscripten_bind_b2PrismaticJointDef_get_localAnchorB_0=function(){return b.asm._emscripten_bind_b2PrismaticJointDef_get_localAnchorB_0.apply(null,arguments)},xe=b._emscripten_bind_b2CircleShape_set_m_type_1=function(){return b.asm._emscripten_bind_b2CircleShape_set_m_type_1.apply(null,
arguments)},ye=b._emscripten_bind_b2DistanceJointDef_set_localAnchorA_1=function(){return b.asm._emscripten_bind_b2DistanceJointDef_set_localAnchorA_1.apply(null,arguments)},ze=b._emscripten_bind_b2RopeJoint_GetAnchorB_0=function(){return b.asm._emscripten_bind_b2RopeJoint_GetAnchorB_0.apply(null,arguments)},Ae=b._emscripten_bind_b2AABB_set_upperBound_1=function(){return b.asm._emscripten_bind_b2AABB_set_upperBound_1.apply(null,arguments)},Be=b._emscripten_bind_JSRayCastCallback_ReportFixture_4=function(){return b.asm._emscripten_bind_JSRayCastCallback_ReportFixture_4.apply(null,
arguments)},Ce=b._emscripten_bind_b2ContactImpulse___destroy___0=function(){return b.asm._emscripten_bind_b2ContactImpulse___destroy___0.apply(null,arguments)},De=b._emscripten_bind_b2FrictionJointDef_get_localAnchorB_0=function(){return b.asm._emscripten_bind_b2FrictionJointDef_get_localAnchorB_0.apply(null,arguments)},Ee=b._emscripten_bind_b2PulleyJointDef_set_lengthB_1=function(){return b.asm._emscripten_bind_b2PulleyJointDef_set_lengthB_1.apply(null,arguments)},Fe=b._emscripten_bind_b2RayCastInput___destroy___0=
function(){return b.asm._emscripten_bind_b2RayCastInput___destroy___0.apply(null,arguments)},Ge=b._emscripten_bind_b2Body_ApplyForceToCenter_2=function(){return b.asm._emscripten_bind_b2Body_ApplyForceToCenter_2.apply(null,arguments)},He=b._emscripten_bind_JSDestructionListener_JSDestructionListener_0=function(){return b.asm._emscripten_bind_JSDestructionListener_JSDestructionListener_0.apply(null,arguments)},Ie=b._emscripten_bind_b2WheelJointDef_set_localAnchorA_1=function(){return b.asm._emscripten_bind_b2WheelJointDef_set_localAnchorA_1.apply(null,
arguments)},Je=b._emscripten_bind_b2FrictionJoint_GetBodyB_0=function(){return b.asm._emscripten_bind_b2FrictionJoint_GetBodyB_0.apply(null,arguments)},Ke=b._emscripten_bind_b2WeldJointDef_set_bodyA_1=function(){return b.asm._emscripten_bind_b2WeldJointDef_set_bodyA_1.apply(null,arguments)},Le=b._emscripten_bind_b2DistanceJoint_GetBodyB_0=function(){return b.asm._emscripten_bind_b2DistanceJoint_GetBodyB_0.apply(null,arguments)},Me=b._emscripten_enum_b2JointType_e_wheelJoint=function(){return b.asm._emscripten_enum_b2JointType_e_wheelJoint.apply(null,
arguments)},Ne=b._emscripten_bind_b2JointDef___destroy___0=function(){return b.asm._emscripten_bind_b2JointDef___destroy___0.apply(null,arguments)},Oe=b._emscripten_bind_b2ContactEdge___destroy___0=function(){return b.asm._emscripten_bind_b2ContactEdge___destroy___0.apply(null,arguments)},Pe=b._emscripten_bind_b2Filter_get_groupIndex_0=function(){return b.asm._emscripten_bind_b2Filter_get_groupIndex_0.apply(null,arguments)},Qe=b._emscripten_bind_b2FrictionJointDef_get_localAnchorA_0=function(){return b.asm._emscripten_bind_b2FrictionJointDef_get_localAnchorA_0.apply(null,
arguments)},Re=b._emscripten_bind_b2CircleShape_GetChildCount_0=function(){return b.asm._emscripten_bind_b2CircleShape_GetChildCount_0.apply(null,arguments)},Se=b._emscripten_bind_b2BodyDef_get_bullet_0=function(){return b.asm._emscripten_bind_b2BodyDef_get_bullet_0.apply(null,arguments)},Te=b._emscripten_bind_b2Color_set_b_1=function(){return b.asm._emscripten_bind_b2Color_set_b_1.apply(null,arguments)},Ue=b._emscripten_bind_b2Mat33_get_ez_0=function(){return b.asm._emscripten_bind_b2Mat33_get_ez_0.apply(null,
arguments)},Ve=b._emscripten_bind_b2MassData_get_center_0=function(){return b.asm._emscripten_bind_b2MassData_get_center_0.apply(null,arguments)},We=b._emscripten_bind_b2WeldJoint_GetBodyB_0=function(){return b.asm._emscripten_bind_b2WeldJoint_GetBodyB_0.apply(null,arguments)},Xe=b._emscripten_bind_b2WheelJoint_GetReactionForce_1=function(){return b.asm._emscripten_bind_b2WheelJoint_GetReactionForce_1.apply(null,arguments)},Ye=b._emscripten_bind_b2World_SetSubStepping_1=function(){return b.asm._emscripten_bind_b2World_SetSubStepping_1.apply(null,
arguments)},Ze=b._emscripten_bind_b2Vec2_op_add_1=function(){return b.asm._emscripten_bind_b2Vec2_op_add_1.apply(null,arguments)},$e=b._emscripten_bind_JSDraw_DrawSegment_3=function(){return b.asm._emscripten_bind_JSDraw_DrawSegment_3.apply(null,arguments)},af=b._emscripten_bind_b2Joint_GetCollideConnected_0=function(){return b.asm._emscripten_bind_b2Joint_GetCollideConnected_0.apply(null,arguments)},bf=b._emscripten_bind_b2MotorJoint_GetReactionTorque_1=function(){return b.asm._emscripten_bind_b2MotorJoint_GetReactionTorque_1.apply(null,
arguments)},cf=b._emscripten_bind_b2FrictionJointDef_get_bodyB_0=function(){return b.asm._emscripten_bind_b2FrictionJointDef_get_bodyB_0.apply(null,arguments)},df=b._emscripten_bind_b2WheelJointDef___destroy___0=function(){return b.asm._emscripten_bind_b2WheelJointDef___destroy___0.apply(null,arguments)},ef=b._emscripten_bind_b2BodyDef_get_gravityScale_0=function(){return b.asm._emscripten_bind_b2BodyDef_get_gravityScale_0.apply(null,arguments)},ff=b._emscripten_bind_b2Vec3_SetZero_0=function(){return b.asm._emscripten_bind_b2Vec3_SetZero_0.apply(null,
arguments)},gf=b._emscripten_enum_b2JointType_e_pulleyJoint=function(){return b.asm._emscripten_enum_b2JointType_e_pulleyJoint.apply(null,arguments)},hf=b._emscripten_bind_b2ChainShape_get_m_nextVertex_0=function(){return b.asm._emscripten_bind_b2ChainShape_get_m_nextVertex_0.apply(null,arguments)},jf=b._emscripten_bind_b2Contact_SetEnabled_1=function(){return b.asm._emscripten_bind_b2Contact_SetEnabled_1.apply(null,arguments)},kf=b._emscripten_bind_b2Shape_set_m_radius_1=function(){return b.asm._emscripten_bind_b2Shape_set_m_radius_1.apply(null,
arguments)},lf=b._emscripten_bind_b2World_SetDebugDraw_1=function(){return b.asm._emscripten_bind_b2World_SetDebugDraw_1.apply(null,arguments)},mf=b._emscripten_bind_b2ContactID_set_key_1=function(){return b.asm._emscripten_bind_b2ContactID_set_key_1.apply(null,arguments)},Ca=b._malloc=function(){return b.asm._malloc.apply(null,arguments)},nf=b._emscripten_bind_b2WheelJoint_GetMaxMotorTorque_0=function(){return b.asm._emscripten_bind_b2WheelJoint_GetMaxMotorTorque_0.apply(null,arguments)},of=b._emscripten_bind_b2Vec2_Normalize_0=
function(){return b.asm._emscripten_bind_b2Vec2_Normalize_0.apply(null,arguments)},pf=b._emscripten_bind_b2WheelJoint_GetJointSpeed_0=function(){return b.asm._emscripten_bind_b2WheelJoint_GetJointSpeed_0.apply(null,arguments)},qf=b._emscripten_bind_b2FrictionJointDef_set_localAnchorA_1=function(){return b.asm._emscripten_bind_b2FrictionJointDef_set_localAnchorA_1.apply(null,arguments)},rf=b._emscripten_bind_b2ChainShape_set_m_vertices_1=function(){return b.asm._emscripten_bind_b2ChainShape_set_m_vertices_1.apply(null,
arguments)},sf=b._emscripten_bind_JSRayCastCallback_JSRayCastCallback_0=function(){return b.asm._emscripten_bind_JSRayCastCallback_JSRayCastCallback_0.apply(null,arguments)},tf=b._emscripten_bind_b2RayCastInput_set_p2_1=function(){return b.asm._emscripten_bind_b2RayCastInput_set_p2_1.apply(null,arguments)},uf=b._emscripten_bind_b2RevoluteJointDef_get_motorSpeed_0=function(){return b.asm._emscripten_bind_b2RevoluteJointDef_get_motorSpeed_0.apply(null,arguments)},vf=b._emscripten_bind_b2Manifold_get_pointCount_0=
function(){return b.asm._emscripten_bind_b2Manifold_get_pointCount_0.apply(null,arguments)},wf=b._emscripten_bind_b2RayCastOutput_get_normal_0=function(){return b.asm._emscripten_bind_b2RayCastOutput_get_normal_0.apply(null,arguments)},xf=b._emscripten_bind_b2WeldJoint_GetBodyA_0=function(){return b.asm._emscripten_bind_b2WeldJoint_GetBodyA_0.apply(null,arguments)},yf=b._emscripten_enum_b2DrawFlag_e_jointBit=function(){return b.asm._emscripten_enum_b2DrawFlag_e_jointBit.apply(null,arguments)},zf=
b._emscripten_bind_b2FixtureDef_get_isSensor_0=function(){return b.asm._emscripten_bind_b2FixtureDef_get_isSensor_0.apply(null,arguments)},Af=b._emscripten_bind_b2PrismaticJointDef_Initialize_4=function(){return b.asm._emscripten_bind_b2PrismaticJointDef_Initialize_4.apply(null,arguments)},Bf=b._emscripten_bind_b2PulleyJointDef_set_bodyB_1=function(){return b.asm._emscripten_bind_b2PulleyJointDef_set_bodyB_1.apply(null,arguments)},Cf=b._emscripten_bind_b2WheelJoint_EnableMotor_1=function(){return b.asm._emscripten_bind_b2WheelJoint_EnableMotor_1.apply(null,
arguments)},Df=b._emscripten_bind_b2RevoluteJoint_GetJointSpeed_0=function(){return b.asm._emscripten_bind_b2RevoluteJoint_GetJointSpeed_0.apply(null,arguments)},Ef=b._emscripten_bind_JSDraw_DrawSolidPolygon_3=function(){return b.asm._emscripten_bind_JSDraw_DrawSolidPolygon_3.apply(null,arguments)},Ff=b._emscripten_bind_b2Rot_Set_1=function(){return b.asm._emscripten_bind_b2Rot_Set_1.apply(null,arguments)},Gf=b._emscripten_bind_b2RevoluteJoint_GetJointAngle_0=function(){return b.asm._emscripten_bind_b2RevoluteJoint_GetJointAngle_0.apply(null,
arguments)},Hf=b._emscripten_bind_JSDraw___destroy___0=function(){return b.asm._emscripten_bind_JSDraw___destroy___0.apply(null,arguments)},If=b._emscripten_bind_b2MouseJointDef___destroy___0=function(){return b.asm._emscripten_bind_b2MouseJointDef___destroy___0.apply(null,arguments)},Jf=b._emscripten_bind_b2Mat33_Solve22_1=function(){return b.asm._emscripten_bind_b2Mat33_Solve22_1.apply(null,arguments)},Kf=b._emscripten_bind_b2Profile_set_solvePosition_1=function(){return b.asm._emscripten_bind_b2Profile_set_solvePosition_1.apply(null,
arguments)},Lf=b._emscripten_bind_b2ContactFilter___destroy___0=function(){return b.asm._emscripten_bind_b2ContactFilter___destroy___0.apply(null,arguments)},Mf=b._emscripten_bind_b2WheelJoint_GetLocalAnchorA_0=function(){return b.asm._emscripten_bind_b2WheelJoint_GetLocalAnchorA_0.apply(null,arguments)},Nf=b._emscripten_bind_b2ChainShape_set_m_hasPrevVertex_1=function(){return b.asm._emscripten_bind_b2ChainShape_set_m_hasPrevVertex_1.apply(null,arguments)},Of=b._emscripten_bind_b2DistanceJoint_SetUserData_1=
function(){return b.asm._emscripten_bind_b2DistanceJoint_SetUserData_1.apply(null,arguments)},Pf=b._emscripten_bind_b2PrismaticJoint___destroy___0=function(){return b.asm._emscripten_bind_b2PrismaticJoint___destroy___0.apply(null,arguments)},Qf=b._emscripten_bind_b2RopeJointDef_set_bodyA_1=function(){return b.asm._emscripten_bind_b2RopeJointDef_set_bodyA_1.apply(null,arguments)},Rf=b._emscripten_bind_b2GearJoint___destroy___0=function(){return b.asm._emscripten_bind_b2GearJoint___destroy___0.apply(null,
arguments)},Sf=b._emscripten_bind_b2PrismaticJoint_GetJointTranslation_0=function(){return b.asm._emscripten_bind_b2PrismaticJoint_GetJointTranslation_0.apply(null,arguments)},Tf=b._emscripten_bind_b2ManifoldPoint_get_id_0=function(){return b.asm._emscripten_bind_b2ManifoldPoint_get_id_0.apply(null,arguments)},Uf=b._emscripten_bind_b2CircleShape_get_m_radius_0=function(){return b.asm._emscripten_bind_b2CircleShape_get_m_radius_0.apply(null,arguments)},Vf=b._emscripten_bind_b2PrismaticJoint_GetMotorSpeed_0=
function(){return b.asm._emscripten_bind_b2PrismaticJoint_GetMotorSpeed_0.apply(null,arguments)},Wf=b._emscripten_bind_b2PulleyJoint_GetGroundAnchorB_0=function(){return b.asm._emscripten_bind_b2PulleyJoint_GetGroundAnchorB_0.apply(null,arguments)},Xf=b._emscripten_bind_b2Vec3_op_add_1=function(){return b.asm._emscripten_bind_b2Vec3_op_add_1.apply(null,arguments)},Yf=b._emscripten_bind_b2FrictionJoint_GetType_0=function(){return b.asm._emscripten_bind_b2FrictionJoint_GetType_0.apply(null,arguments)},
Zf=b._emscripten_bind_b2MouseJoint_GetMaxForce_0=function(){return b.asm._emscripten_bind_b2MouseJoint_GetMaxForce_0.apply(null,arguments)},$f=b._emscripten_bind_b2MouseJoint_SetTarget_1=function(){return b.asm._emscripten_bind_b2MouseJoint_SetTarget_1.apply(null,arguments)},ag=b._emscripten_bind_b2MouseJointDef_get_dampingRatio_0=function(){return b.asm._emscripten_bind_b2MouseJointDef_get_dampingRatio_0.apply(null,arguments)},bg=b._emscripten_bind_b2RevoluteJoint_GetMotorSpeed_0=function(){return b.asm._emscripten_bind_b2RevoluteJoint_GetMotorSpeed_0.apply(null,
arguments)},cg=b._emscripten_bind_b2ChainShape_set_m_type_1=function(){return b.asm._emscripten_bind_b2ChainShape_set_m_type_1.apply(null,arguments)},dg=b._emscripten_bind_b2RevoluteJointDef_set_bodyB_1=function(){return b.asm._emscripten_bind_b2RevoluteJointDef_set_bodyB_1.apply(null,arguments)},eg=b._emscripten_bind_b2Rot_GetXAxis_0=function(){return b.asm._emscripten_bind_b2Rot_GetXAxis_0.apply(null,arguments)},fg=b._emscripten_bind_b2Mat33_b2Mat33_0=function(){return b.asm._emscripten_bind_b2Mat33_b2Mat33_0.apply(null,
arguments)},gg=b._emscripten_bind_b2MouseJointDef_get_bodyB_0=function(){return b.asm._emscripten_bind_b2MouseJointDef_get_bodyB_0.apply(null,arguments)},hg=b._emscripten_bind_b2Body_GetWorldVector_1=function(){return b.asm._emscripten_bind_b2Body_GetWorldVector_1.apply(null,arguments)},ig=b._emscripten_bind_b2WeldJointDef_get_frequencyHz_0=function(){return b.asm._emscripten_bind_b2WeldJointDef_get_frequencyHz_0.apply(null,arguments)},jg=b._emscripten_bind_b2GearJointDef_set_ratio_1=function(){return b.asm._emscripten_bind_b2GearJointDef_set_ratio_1.apply(null,
arguments)},kg=b._emscripten_bind_b2Manifold___destroy___0=function(){return b.asm._emscripten_bind_b2Manifold___destroy___0.apply(null,arguments)},lg=b._emscripten_bind_b2PulleyJointDef_set_lengthA_1=function(){return b.asm._emscripten_bind_b2PulleyJointDef_set_lengthA_1.apply(null,arguments)},mg=b._emscripten_bind_b2Contact_IsEnabled_0=function(){return b.asm._emscripten_bind_b2Contact_IsEnabled_0.apply(null,arguments)};b.stackRestore=function(){return b.asm.stackRestore.apply(null,arguments)};
var ng=b._emscripten_bind_b2World_CreateJoint_1=function(){return b.asm._emscripten_bind_b2World_CreateJoint_1.apply(null,arguments)},og=b._emscripten_bind_b2PulleyJointDef_set_ratio_1=function(){return b.asm._emscripten_bind_b2PulleyJointDef_set_ratio_1.apply(null,arguments)},pg=b._emscripten_bind_b2JointEdge_set_prev_1=function(){return b.asm._emscripten_bind_b2JointEdge_set_prev_1.apply(null,arguments)},qg=b._emscripten_bind_b2PrismaticJoint_GetReactionTorque_1=function(){return b.asm._emscripten_bind_b2PrismaticJoint_GetReactionTorque_1.apply(null,
arguments)},rg=b._emscripten_bind_b2Body_GetLocalPoint_1=function(){return b.asm._emscripten_bind_b2Body_GetLocalPoint_1.apply(null,arguments)},sg=b._emscripten_bind_b2PrismaticJoint_GetCollideConnected_0=function(){return b.asm._emscripten_bind_b2PrismaticJoint_GetCollideConnected_0.apply(null,arguments)},tg=b._emscripten_bind_b2DistanceJoint_IsActive_0=function(){return b.asm._emscripten_bind_b2DistanceJoint_IsActive_0.apply(null,arguments)},ug=b._emscripten_bind_b2RopeJoint_GetLimitState_0=function(){return b.asm._emscripten_bind_b2RopeJoint_GetLimitState_0.apply(null,
arguments)},vg=b._emscripten_bind_b2Profile_get_solveTOI_0=function(){return b.asm._emscripten_bind_b2Profile_get_solveTOI_0.apply(null,arguments)},wg=b._emscripten_bind_b2Vec2_b2Vec2_0=function(){return b.asm._emscripten_bind_b2Vec2_b2Vec2_0.apply(null,arguments)},xg=b._emscripten_bind_b2DistanceJoint_GetAnchorB_0=function(){return b.asm._emscripten_bind_b2DistanceJoint_GetAnchorB_0.apply(null,arguments)},yg=b._emscripten_bind_b2WheelJointDef_get_maxMotorTorque_0=function(){return b.asm._emscripten_bind_b2WheelJointDef_get_maxMotorTorque_0.apply(null,
arguments)},zg=b._emscripten_bind_b2Vec2_op_sub_1=function(){return b.asm._emscripten_bind_b2Vec2_op_sub_1.apply(null,arguments)},Ag=b._emscripten_bind_b2CircleShape_get_m_p_0=function(){return b.asm._emscripten_bind_b2CircleShape_get_m_p_0.apply(null,arguments)},Bg=b._emscripten_bind_b2ContactFeature_get_indexA_0=function(){return b.asm._emscripten_bind_b2ContactFeature_get_indexA_0.apply(null,arguments)},Cg=b._emscripten_bind_b2MotorJointDef_b2MotorJointDef_0=function(){return b.asm._emscripten_bind_b2MotorJointDef_b2MotorJointDef_0.apply(null,
arguments)},Dg=b._emscripten_bind_b2RevoluteJoint_EnableLimit_1=function(){return b.asm._emscripten_bind_b2RevoluteJoint_EnableLimit_1.apply(null,arguments)},Eg=b._emscripten_bind_b2ContactEdge_get_next_0=function(){return b.asm._emscripten_bind_b2ContactEdge_get_next_0.apply(null,arguments)},Fg=b._emscripten_bind_b2AABB_GetPerimeter_0=function(){return b.asm._emscripten_bind_b2AABB_GetPerimeter_0.apply(null,arguments)},Gg=b._emscripten_bind_b2RevoluteJoint_GetCollideConnected_0=function(){return b.asm._emscripten_bind_b2RevoluteJoint_GetCollideConnected_0.apply(null,
arguments)},Hg=b._emscripten_bind_b2Mat33_get_ex_0=function(){return b.asm._emscripten_bind_b2Mat33_get_ex_0.apply(null,arguments)},Ig=b._emscripten_bind_b2Body_GetPosition_0=function(){return b.asm._emscripten_bind_b2Body_GetPosition_0.apply(null,arguments)},Jg=b._emscripten_bind_b2Profile___destroy___0=function(){return b.asm._emscripten_bind_b2Profile___destroy___0.apply(null,arguments)},Kg=b._emscripten_bind_b2ContactEdge_get_prev_0=function(){return b.asm._emscripten_bind_b2ContactEdge_get_prev_0.apply(null,
arguments)},Lg=b._emscripten_bind_b2DistanceJoint_SetFrequency_1=function(){return b.asm._emscripten_bind_b2DistanceJoint_SetFrequency_1.apply(null,arguments)},Mg=b._emscripten_bind_b2Fixture_GetBody_0=function(){return b.asm._emscripten_bind_b2Fixture_GetBody_0.apply(null,arguments)},Ng=b._emscripten_bind_b2ContactImpulse_set_count_1=function(){return b.asm._emscripten_bind_b2ContactImpulse_set_count_1.apply(null,arguments)},Og=b._emscripten_bind_b2FixtureDef_set_shape_1=function(){return b.asm._emscripten_bind_b2FixtureDef_set_shape_1.apply(null,
arguments)},Pg=b._emscripten_bind_b2PulleyJointDef_get_bodyB_0=function(){return b.asm._emscripten_bind_b2PulleyJointDef_get_bodyB_0.apply(null,arguments)},Qg=b._emscripten_bind_b2ChainShape_GetChildCount_0=function(){return b.asm._emscripten_bind_b2ChainShape_GetChildCount_0.apply(null,arguments)},Rg=b._emscripten_bind_b2CircleShape_b2CircleShape_0=function(){return b.asm._emscripten_bind_b2CircleShape_b2CircleShape_0.apply(null,arguments)},Sg=b._emscripten_bind_b2RevoluteJoint_GetReactionTorque_1=
function(){return b.asm._emscripten_bind_b2RevoluteJoint_GetReactionTorque_1.apply(null,arguments)},Tg=b._emscripten_bind_b2Fixture_SetDensity_1=function(){return b.asm._emscripten_bind_b2Fixture_SetDensity_1.apply(null,arguments)},Ug=b._emscripten_bind_b2ChainShape_get_m_prevVertex_0=function(){return b.asm._emscripten_bind_b2ChainShape_get_m_prevVertex_0.apply(null,arguments)},Vg=b._emscripten_bind_b2AABB_GetExtents_0=function(){return b.asm._emscripten_bind_b2AABB_GetExtents_0.apply(null,arguments)},
Wg=b._emscripten_bind_b2World_ClearForces_0=function(){return b.asm._emscripten_bind_b2World_ClearForces_0.apply(null,arguments)},Xg=b._emscripten_bind_b2Vec3___destroy___0=function(){return b.asm._emscripten_bind_b2Vec3___destroy___0.apply(null,arguments)},Yg=b._emscripten_bind_b2WheelJointDef_set_userData_1=function(){return b.asm._emscripten_bind_b2WheelJointDef_set_userData_1.apply(null,arguments)},Zg=b._emscripten_bind_b2WeldJoint_SetFrequency_1=function(){return b.asm._emscripten_bind_b2WeldJoint_SetFrequency_1.apply(null,
arguments)},$g=b._emscripten_bind_JSContactListener_PreSolve_2=function(){return b.asm._emscripten_bind_JSContactListener_PreSolve_2.apply(null,arguments)},ah=b._emscripten_bind_b2Body_SetFixedRotation_1=function(){return b.asm._emscripten_bind_b2Body_SetFixedRotation_1.apply(null,arguments)},bh=b._emscripten_bind_b2RayCastOutput_set_normal_1=function(){return b.asm._emscripten_bind_b2RayCastOutput_set_normal_1.apply(null,arguments)},ch=b._emscripten_bind_b2DistanceJoint_GetDampingRatio_0=function(){return b.asm._emscripten_bind_b2DistanceJoint_GetDampingRatio_0.apply(null,
arguments)},dh=b._emscripten_bind_b2RevoluteJoint_SetMaxMotorTorque_1=function(){return b.asm._emscripten_bind_b2RevoluteJoint_SetMaxMotorTorque_1.apply(null,arguments)},eh=b._emscripten_bind_b2RevoluteJoint_EnableMotor_1=function(){return b.asm._emscripten_bind_b2RevoluteJoint_EnableMotor_1.apply(null,arguments)},fh=b._emscripten_bind_b2Contact_GetChildIndexB_0=function(){return b.asm._emscripten_bind_b2Contact_GetChildIndexB_0.apply(null,arguments)},gh=b._emscripten_bind_b2MouseJointDef_set_bodyB_1=
function(){return b.asm._emscripten_bind_b2MouseJointDef_set_bodyB_1.apply(null,arguments)},hh=b._emscripten_bind_b2CircleShape_GetType_0=function(){return b.asm._emscripten_bind_b2CircleShape_GetType_0.apply(null,arguments)},ih=b._emscripten_bind_b2PolygonShape_GetType_0=function(){return b.asm._emscripten_bind_b2PolygonShape_GetType_0.apply(null,arguments)},jh=b._emscripten_bind_b2PrismaticJointDef_set_referenceAngle_1=function(){return b.asm._emscripten_bind_b2PrismaticJointDef_set_referenceAngle_1.apply(null,
arguments)},kh=b._emscripten_bind_b2RopeJointDef_get_collideConnected_0=function(){return b.asm._emscripten_bind_b2RopeJointDef_get_collideConnected_0.apply(null,arguments)},lh=b._emscripten_bind_b2FixtureDef_set_filter_1=function(){return b.asm._emscripten_bind_b2FixtureDef_set_filter_1.apply(null,arguments)},mh=b._emscripten_bind_b2Body_ApplyTorque_2=function(){return b.asm._emscripten_bind_b2Body_ApplyTorque_2.apply(null,arguments)},nh=b._emscripten_bind_b2RevoluteJoint___destroy___0=function(){return b.asm._emscripten_bind_b2RevoluteJoint___destroy___0.apply(null,
arguments)},oh=b._emscripten_bind_b2FrictionJointDef_get_userData_0=function(){return b.asm._emscripten_bind_b2FrictionJointDef_get_userData_0.apply(null,arguments)},ph=b._emscripten_bind_b2RayCastCallback___destroy___0=function(){return b.asm._emscripten_bind_b2RayCastCallback___destroy___0.apply(null,arguments)},qh=b._emscripten_bind_b2RevoluteJointDef_set_bodyA_1=function(){return b.asm._emscripten_bind_b2RevoluteJointDef_set_bodyA_1.apply(null,arguments)},rh=b._emscripten_bind_b2MotorJoint_SetUserData_1=
function(){return b.asm._emscripten_bind_b2MotorJoint_SetUserData_1.apply(null,arguments)},sh=b._emscripten_bind_b2PrismaticJoint_GetLocalAxisA_0=function(){return b.asm._emscripten_bind_b2PrismaticJoint_GetLocalAxisA_0.apply(null,arguments)},th=b._emscripten_bind_b2MotorJoint_GetBodyB_0=function(){return b.asm._emscripten_bind_b2MotorJoint_GetBodyB_0.apply(null,arguments)},uh=b._emscripten_bind_b2Transform_Set_2=function(){return b.asm._emscripten_bind_b2Transform_Set_2.apply(null,arguments)},vh=
b._emscripten_bind_b2MotorJoint_GetBodyA_0=function(){return b.asm._emscripten_bind_b2MotorJoint_GetBodyA_0.apply(null,arguments)};b.stackAlloc=function(){return b.asm.stackAlloc.apply(null,arguments)};
var wh=b._emscripten_bind_b2Draw_AppendFlags_1=function(){return b.asm._emscripten_bind_b2Draw_AppendFlags_1.apply(null,arguments)},xh=b._emscripten_bind_b2EdgeShape_GetChildCount_0=function(){return b.asm._emscripten_bind_b2EdgeShape_GetChildCount_0.apply(null,arguments)},yh=b._emscripten_bind_b2Contact_ResetFriction_0=function(){return b.asm._emscripten_bind_b2Contact_ResetFriction_0.apply(null,arguments)},zh=b._emscripten_bind_b2Profile_set_solveTOI_1=function(){return b.asm._emscripten_bind_b2Profile_set_solveTOI_1.apply(null,
arguments)},Ah=b._emscripten_bind_b2PrismaticJointDef_set_type_1=function(){return b.asm._emscripten_bind_b2PrismaticJointDef_set_type_1.apply(null,arguments)},Bh=b._emscripten_bind_b2AABB_GetCenter_0=function(){return b.asm._emscripten_bind_b2AABB_GetCenter_0.apply(null,arguments)},Ch=b._emscripten_bind_b2WheelJoint_SetSpringFrequencyHz_1=function(){return b.asm._emscripten_bind_b2WheelJoint_SetSpringFrequencyHz_1.apply(null,arguments)},Dh=b._emscripten_bind_b2FrictionJointDef___destroy___0=function(){return b.asm._emscripten_bind_b2FrictionJointDef___destroy___0.apply(null,
arguments)},Eh=b._emscripten_bind_b2PrismaticJoint_GetReactionForce_1=function(){return b.asm._emscripten_bind_b2PrismaticJoint_GetReactionForce_1.apply(null,arguments)},Fh=b._emscripten_bind_b2Transform_b2Transform_0=function(){return b.asm._emscripten_bind_b2Transform_b2Transform_0.apply(null,arguments)},Gh=b._emscripten_enum_b2LimitState_e_equalLimits=function(){return b.asm._emscripten_enum_b2LimitState_e_equalLimits.apply(null,arguments)},Hh=b._emscripten_bind_b2ManifoldPoint_set_normalImpulse_1=
function(){return b.asm._emscripten_bind_b2ManifoldPoint_set_normalImpulse_1.apply(null,arguments)},Ih=b._emscripten_bind_b2Body_IsFixedRotation_0=function(){return b.asm._emscripten_bind_b2Body_IsFixedRotation_0.apply(null,arguments)},Jh=b._emscripten_enum_b2DrawFlag_e_shapeBit=function(){return b.asm._emscripten_enum_b2DrawFlag_e_shapeBit.apply(null,arguments)},Kh=b._emscripten_bind_b2Contact_GetFriction_0=function(){return b.asm._emscripten_bind_b2Contact_GetFriction_0.apply(null,arguments)},Lh=
b._emscripten_bind_b2Body_GetContactList_0=function(){return b.asm._emscripten_bind_b2Body_GetContactList_0.apply(null,arguments)},Mh=b._emscripten_bind_b2DistanceJointDef_set_length_1=function(){return b.asm._emscripten_bind_b2DistanceJointDef_set_length_1.apply(null,arguments)},Nh=b._emscripten_bind_b2DistanceJoint_GetLocalAnchorB_0=function(){return b.asm._emscripten_bind_b2DistanceJoint_GetLocalAnchorB_0.apply(null,arguments)},Oh=b._emscripten_bind_b2FrictionJoint_GetLocalAnchorB_0=function(){return b.asm._emscripten_bind_b2FrictionJoint_GetLocalAnchorB_0.apply(null,
arguments)},Ph=b._emscripten_bind_b2World_b2World_1=function(){return b.asm._emscripten_bind_b2World_b2World_1.apply(null,arguments)},Qh=b._emscripten_bind_b2PrismaticJoint_IsLimitEnabled_0=function(){return b.asm._emscripten_bind_b2PrismaticJoint_IsLimitEnabled_0.apply(null,arguments)},Rh=b._emscripten_bind_b2DistanceJointDef_get_type_0=function(){return b.asm._emscripten_bind_b2DistanceJointDef_get_type_0.apply(null,arguments)},Sh=b._emscripten_bind_b2Draw_ClearFlags_1=function(){return b.asm._emscripten_bind_b2Draw_ClearFlags_1.apply(null,
arguments)},Th=b._emscripten_bind_b2Body_SetAngularDamping_1=function(){return b.asm._emscripten_bind_b2Body_SetAngularDamping_1.apply(null,arguments)},Uh=b._emscripten_bind_b2Body_IsActive_0=function(){return b.asm._emscripten_bind_b2Body_IsActive_0.apply(null,arguments)},Vh=b._emscripten_bind_b2Contact_ResetRestitution_0=function(){return b.asm._emscripten_bind_b2Contact_ResetRestitution_0.apply(null,arguments)},Wh=b._emscripten_bind_b2World_GetAllowSleeping_0=function(){return b.asm._emscripten_bind_b2World_GetAllowSleeping_0.apply(null,
arguments)},Xh=b._emscripten_bind_b2ManifoldPoint_b2ManifoldPoint_0=function(){return b.asm._emscripten_bind_b2ManifoldPoint_b2ManifoldPoint_0.apply(null,arguments)},Yh=b._emscripten_bind_b2EdgeShape_set_m_type_1=function(){return b.asm._emscripten_bind_b2EdgeShape_set_m_type_1.apply(null,arguments)},Zh=b._emscripten_enum_b2JointType_e_unknownJoint=function(){return b.asm._emscripten_enum_b2JointType_e_unknownJoint.apply(null,arguments)},$h=b._emscripten_bind_b2RevoluteJointDef_set_enableMotor_1=
function(){return b.asm._emscripten_bind_b2RevoluteJointDef_set_enableMotor_1.apply(null,arguments)},ai=b._emscripten_bind_b2PulleyJoint_IsActive_0=function(){return b.asm._emscripten_bind_b2PulleyJoint_IsActive_0.apply(null,arguments)},bi=b._emscripten_bind_b2MouseJoint_GetNext_0=function(){return b.asm._emscripten_bind_b2MouseJoint_GetNext_0.apply(null,arguments)},ci=b._emscripten_bind_b2RevoluteJoint_SetUserData_1=function(){return b.asm._emscripten_bind_b2RevoluteJoint_SetUserData_1.apply(null,
arguments)},di=b._emscripten_bind_b2Manifold_get_localPoint_0=function(){return b.asm._emscripten_bind_b2Manifold_get_localPoint_0.apply(null,arguments)},ei=b._emscripten_bind_b2PulleyJointDef_get_lengthB_0=function(){return b.asm._emscripten_bind_b2PulleyJointDef_get_lengthB_0.apply(null,arguments)},fi=b._emscripten_bind_b2WeldJoint_SetUserData_1=function(){return b.asm._emscripten_bind_b2WeldJoint_SetUserData_1.apply(null,arguments)},gi=b._emscripten_bind_b2ChainShape_CreateLoop_2=function(){return b.asm._emscripten_bind_b2ChainShape_CreateLoop_2.apply(null,
arguments)},hi=b._emscripten_bind_b2GearJointDef_get_joint1_0=function(){return b.asm._emscripten_bind_b2GearJointDef_get_joint1_0.apply(null,arguments)},ii=b._emscripten_bind_b2PrismaticJoint_GetMotorForce_1=function(){return b.asm._emscripten_bind_b2PrismaticJoint_GetMotorForce_1.apply(null,arguments)},ji=b._emscripten_bind_b2Body_SetUserData_1=function(){return b.asm._emscripten_bind_b2Body_SetUserData_1.apply(null,arguments)},ki=b._emscripten_bind_b2GearJoint_IsActive_0=function(){return b.asm._emscripten_bind_b2GearJoint_IsActive_0.apply(null,
arguments)},li=b._emscripten_bind_b2EdgeShape_get_m_vertex0_0=function(){return b.asm._emscripten_bind_b2EdgeShape_get_m_vertex0_0.apply(null,arguments)},mi=b._emscripten_enum_b2JointType_e_revoluteJoint=function(){return b.asm._emscripten_enum_b2JointType_e_revoluteJoint.apply(null,arguments)},ni=b._emscripten_bind_b2Vec2_get_x_0=function(){return b.asm._emscripten_bind_b2Vec2_get_x_0.apply(null,arguments)},oi=b._emscripten_bind_b2WeldJointDef_get_collideConnected_0=function(){return b.asm._emscripten_bind_b2WeldJointDef_get_collideConnected_0.apply(null,
arguments)},pi=b._emscripten_bind_b2FrictionJoint_GetMaxTorque_0=function(){return b.asm._emscripten_bind_b2FrictionJoint_GetMaxTorque_0.apply(null,arguments)},qi=b._emscripten_bind_b2EdgeShape_RayCast_4=function(){return b.asm._emscripten_bind_b2EdgeShape_RayCast_4.apply(null,arguments)},ri=b._emscripten_bind_b2BodyDef_set_allowSleep_1=function(){return b.asm._emscripten_bind_b2BodyDef_set_allowSleep_1.apply(null,arguments)},si=b._emscripten_bind_b2PulleyJoint_GetType_0=function(){return b.asm._emscripten_bind_b2PulleyJoint_GetType_0.apply(null,
arguments)},ti=b._emscripten_bind_b2WeldJointDef_set_localAnchorA_1=function(){return b.asm._emscripten_bind_b2WeldJointDef_set_localAnchorA_1.apply(null,arguments)},ui=b._emscripten_bind_b2Profile_set_step_1=function(){return b.asm._emscripten_bind_b2Profile_set_step_1.apply(null,arguments)},vi=b._emscripten_bind_b2ContactEdge_set_other_1=function(){return b.asm._emscripten_bind_b2ContactEdge_set_other_1.apply(null,arguments)},wi=b._emscripten_bind_b2PulleyJoint_GetCurrentLengthB_0=function(){return b.asm._emscripten_bind_b2PulleyJoint_GetCurrentLengthB_0.apply(null,
arguments)},xi=b._emscripten_bind_b2Vec2_op_mul_1=function(){return b.asm._emscripten_bind_b2Vec2_op_mul_1.apply(null,arguments)},yi=b._emscripten_bind_b2PrismaticJointDef_get_localAnchorA_0=function(){return b.asm._emscripten_bind_b2PrismaticJointDef_get_localAnchorA_0.apply(null,arguments)},zi=b._emscripten_bind_b2EdgeShape___destroy___0=function(){return b.asm._emscripten_bind_b2EdgeShape___destroy___0.apply(null,arguments)},Ai=b._emscripten_bind_b2PolygonShape_get_m_count_0=function(){return b.asm._emscripten_bind_b2PolygonShape_get_m_count_0.apply(null,
arguments)},Bi=b._emscripten_bind_b2RopeJoint_GetAnchorA_0=function(){return b.asm._emscripten_bind_b2RopeJoint_GetAnchorA_0.apply(null,arguments)},Ci=b._emscripten_bind_b2DistanceJointDef_get_bodyA_0=function(){return b.asm._emscripten_bind_b2DistanceJointDef_get_bodyA_0.apply(null,arguments)},Di=b._emscripten_bind_b2AABB_Combine_2=function(){return b.asm._emscripten_bind_b2AABB_Combine_2.apply(null,arguments)},Ei=b._emscripten_bind_b2ManifoldPoint_set_tangentImpulse_1=function(){return b.asm._emscripten_bind_b2ManifoldPoint_set_tangentImpulse_1.apply(null,
arguments)},Fi=b._emscripten_bind_b2BodyDef_get_allowSleep_0=function(){return b.asm._emscripten_bind_b2BodyDef_get_allowSleep_0.apply(null,arguments)},Gi=b._emscripten_bind_b2ContactEdge_get_other_0=function(){return b.asm._emscripten_bind_b2ContactEdge_get_other_0.apply(null,arguments)},Hi=b._emscripten_bind_b2RopeJoint_GetLocalAnchorB_0=function(){return b.asm._emscripten_bind_b2RopeJoint_GetLocalAnchorB_0.apply(null,arguments)},Ii=b._emscripten_bind_b2PulleyJointDef___destroy___0=function(){return b.asm._emscripten_bind_b2PulleyJointDef___destroy___0.apply(null,
arguments)},Ji=b._emscripten_bind_b2MouseJoint_GetBodyB_0=function(){return b.asm._emscripten_bind_b2MouseJoint_GetBodyB_0.apply(null,arguments)},Ki=b._emscripten_bind_b2PolygonShape_TestPoint_2=function(){return b.asm._emscripten_bind_b2PolygonShape_TestPoint_2.apply(null,arguments)},Li=b._emscripten_bind_b2JointEdge_get_other_0=function(){return b.asm._emscripten_bind_b2JointEdge_get_other_0.apply(null,arguments)},Mi=b._emscripten_bind_b2PolygonShape_b2PolygonShape_0=function(){return b.asm._emscripten_bind_b2PolygonShape_b2PolygonShape_0.apply(null,
arguments)},Ni=b._emscripten_bind_b2PolygonShape_Set_2=function(){return b.asm._emscripten_bind_b2PolygonShape_Set_2.apply(null,arguments)},Oi=b._emscripten_bind_b2GearJoint_GetReactionForce_1=function(){return b.asm._emscripten_bind_b2GearJoint_GetReactionForce_1.apply(null,arguments)},Pi=b._emscripten_bind_b2DistanceJointDef_get_localAnchorA_0=function(){return b.asm._emscripten_bind_b2DistanceJointDef_get_localAnchorA_0.apply(null,arguments)},Qi=b._emscripten_bind_b2Fixture_SetUserData_1=function(){return b.asm._emscripten_bind_b2Fixture_SetUserData_1.apply(null,
arguments)},Ri=b._emscripten_bind_b2Contact_SetTangentSpeed_1=function(){return b.asm._emscripten_bind_b2Contact_SetTangentSpeed_1.apply(null,arguments)},Si=b._emscripten_bind_b2PrismaticJointDef_b2PrismaticJointDef_0=function(){return b.asm._emscripten_bind_b2PrismaticJointDef_b2PrismaticJointDef_0.apply(null,arguments)},Ti=b._emscripten_bind_b2BodyDef_get_active_0=function(){return b.asm._emscripten_bind_b2BodyDef_get_active_0.apply(null,arguments)},Ui=b._emscripten_bind_b2Body_GetAngularVelocity_0=
function(){return b.asm._emscripten_bind_b2Body_GetAngularVelocity_0.apply(null,arguments)},Vi=b._emscripten_bind_b2CircleShape_set_m_p_1=function(){return b.asm._emscripten_bind_b2CircleShape_set_m_p_1.apply(null,arguments)},Wi=b._emscripten_bind_b2Draw___destroy___0=function(){return b.asm._emscripten_bind_b2Draw___destroy___0.apply(null,arguments)},Xi=b._emscripten_bind_b2WheelJointDef_Initialize_4=function(){return b.asm._emscripten_bind_b2WheelJointDef_Initialize_4.apply(null,arguments)},Yi=
b._emscripten_bind_b2WeldJointDef_set_dampingRatio_1=function(){return b.asm._emscripten_bind_b2WeldJointDef_set_dampingRatio_1.apply(null,arguments)},Zi=b._emscripten_bind_b2ChainShape_b2ChainShape_0=function(){return b.asm._emscripten_bind_b2ChainShape_b2ChainShape_0.apply(null,arguments)},$i=b._emscripten_bind_b2Joint_GetAnchorB_0=function(){return b.asm._emscripten_bind_b2Joint_GetAnchorB_0.apply(null,arguments)},aj=b._emscripten_bind_b2PrismaticJointDef_get_userData_0=function(){return b.asm._emscripten_bind_b2PrismaticJointDef_get_userData_0.apply(null,
arguments)},bj=b._emscripten_bind_b2MotorJoint_GetMaxForce_0=function(){return b.asm._emscripten_bind_b2MotorJoint_GetMaxForce_0.apply(null,arguments)},cj=b._emscripten_bind_b2RevoluteJoint_GetBodyA_0=function(){return b.asm._emscripten_bind_b2RevoluteJoint_GetBodyA_0.apply(null,arguments)},dj=b._emscripten_bind_b2ContactID_set_cf_1=function(){return b.asm._emscripten_bind_b2ContactID_set_cf_1.apply(null,arguments)},ej=b._emscripten_bind_b2Body_GetGravityScale_0=function(){return b.asm._emscripten_bind_b2Body_GetGravityScale_0.apply(null,
arguments)},fj=b._emscripten_bind_b2Vec3_Set_3=function(){return b.asm._emscripten_bind_b2Vec3_Set_3.apply(null,arguments)},gj=b._emscripten_bind_b2RevoluteJointDef_set_localAnchorA_1=function(){return b.asm._emscripten_bind_b2RevoluteJointDef_set_localAnchorA_1.apply(null,arguments)},hj=b._emscripten_bind_b2FrictionJointDef_set_localAnchorB_1=function(){return b.asm._emscripten_bind_b2FrictionJointDef_set_localAnchorB_1.apply(null,arguments)},ij=b._emscripten_bind_b2PulleyJoint_GetNext_0=function(){return b.asm._emscripten_bind_b2PulleyJoint_GetNext_0.apply(null,
arguments)},jj=b._emscripten_bind_b2ChainShape_get_m_type_0=function(){return b.asm._emscripten_bind_b2ChainShape_get_m_type_0.apply(null,arguments)},kj=b._emscripten_bind_b2PulleyJointDef_get_groundAnchorB_0=function(){return b.asm._emscripten_bind_b2PulleyJointDef_get_groundAnchorB_0.apply(null,arguments)},lj=b._emscripten_bind_JSDraw_DrawTransform_1=function(){return b.asm._emscripten_bind_JSDraw_DrawTransform_1.apply(null,arguments)},mj=b._emscripten_bind_b2GearJointDef_get_bodyA_0=function(){return b.asm._emscripten_bind_b2GearJointDef_get_bodyA_0.apply(null,
arguments)},nj=b._emscripten_bind_b2DistanceJointDef_set_frequencyHz_1=function(){return b.asm._emscripten_bind_b2DistanceJointDef_set_frequencyHz_1.apply(null,arguments)},oj=b._emscripten_bind_b2RevoluteJointDef_get_localAnchorB_0=function(){return b.asm._emscripten_bind_b2RevoluteJointDef_get_localAnchorB_0.apply(null,arguments)},pj=b._emscripten_bind_b2RevoluteJointDef_get_referenceAngle_0=function(){return b.asm._emscripten_bind_b2RevoluteJointDef_get_referenceAngle_0.apply(null,arguments)},qj=
b._emscripten_bind_JSContactFilter___destroy___0=function(){return b.asm._emscripten_bind_JSContactFilter___destroy___0.apply(null,arguments)},rj=b._emscripten_bind_b2RevoluteJointDef_get_enableMotor_0=function(){return b.asm._emscripten_bind_b2RevoluteJointDef_get_enableMotor_0.apply(null,arguments)},ub=b._memset=function(){return b.asm._memset.apply(null,arguments)},sj=b._emscripten_bind_b2PolygonShape_get_m_radius_0=function(){return b.asm._emscripten_bind_b2PolygonShape_get_m_radius_0.apply(null,
arguments)},tj=b._emscripten_enum_b2BodyType_b2_kinematicBody=function(){return b.asm._emscripten_enum_b2BodyType_b2_kinematicBody.apply(null,arguments)},uj=b._emscripten_bind_b2Rot_set_s_1=function(){return b.asm._emscripten_bind_b2Rot_set_s_1.apply(null,arguments)},vj=b._emscripten_enum_b2ManifoldType_e_faceA=function(){return b.asm._emscripten_enum_b2ManifoldType_e_faceA.apply(null,arguments)},wj=b._emscripten_enum_b2ManifoldType_e_faceB=function(){return b.asm._emscripten_enum_b2ManifoldType_e_faceB.apply(null,
arguments)},xj=b._emscripten_bind_b2RevoluteJointDef_get_bodyB_0=function(){return b.asm._emscripten_bind_b2RevoluteJointDef_get_bodyB_0.apply(null,arguments)},yj=b._emscripten_bind_b2FixtureDef_b2FixtureDef_0=function(){return b.asm._emscripten_bind_b2FixtureDef_b2FixtureDef_0.apply(null,arguments)},zj=b._emscripten_bind_b2PrismaticJoint_SetUserData_1=function(){return b.asm._emscripten_bind_b2PrismaticJoint_SetUserData_1.apply(null,arguments)},Aj=b._emscripten_bind_b2EdgeShape_get_m_hasVertex3_0=
function(){return b.asm._emscripten_bind_b2EdgeShape_get_m_hasVertex3_0.apply(null,arguments)},Bj=b._emscripten_enum_b2ShapeType_e_edge=function(){return b.asm._emscripten_enum_b2ShapeType_e_edge.apply(null,arguments)},Cj=b._emscripten_bind_b2RevoluteJoint_GetMaxMotorTorque_0=function(){return b.asm._emscripten_bind_b2RevoluteJoint_GetMaxMotorTorque_0.apply(null,arguments)},Dj=b._emscripten_bind_b2BodyDef_set_active_1=function(){return b.asm._emscripten_bind_b2BodyDef_set_active_1.apply(null,arguments)},
Ej=b._emscripten_bind_b2EdgeShape_Set_2=function(){return b.asm._emscripten_bind_b2EdgeShape_Set_2.apply(null,arguments)},Fj=b._emscripten_bind_b2FixtureDef_set_isSensor_1=function(){return b.asm._emscripten_bind_b2FixtureDef_set_isSensor_1.apply(null,arguments)},Gj=b._emscripten_bind_b2Body_GetWorldPoint_1=function(){return b.asm._emscripten_bind_b2Body_GetWorldPoint_1.apply(null,arguments)},Hj=b._emscripten_bind_b2ManifoldPoint_get_normalImpulse_0=function(){return b.asm._emscripten_bind_b2ManifoldPoint_get_normalImpulse_0.apply(null,
arguments)},Ij=b._emscripten_bind_JSContactFilter_ShouldCollide_2=function(){return b.asm._emscripten_bind_JSContactFilter_ShouldCollide_2.apply(null,arguments)},Jj=b._emscripten_bind_b2Joint_GetReactionTorque_1=function(){return b.asm._emscripten_bind_b2Joint_GetReactionTorque_1.apply(null,arguments)},Kj=b._emscripten_bind_b2RevoluteJointDef_set_type_1=function(){return b.asm._emscripten_bind_b2RevoluteJointDef_set_type_1.apply(null,arguments)},Lj=b._emscripten_bind_b2RayCastInput_set_p1_1=function(){return b.asm._emscripten_bind_b2RayCastInput_set_p1_1.apply(null,
arguments)},Mj=b._emscripten_bind_b2RopeJointDef_b2RopeJointDef_0=function(){return b.asm._emscripten_bind_b2RopeJointDef_b2RopeJointDef_0.apply(null,arguments)},Nj=b._emscripten_bind_b2BodyDef_get_linearDamping_0=function(){return b.asm._emscripten_bind_b2BodyDef_get_linearDamping_0.apply(null,arguments)},Oj=b._emscripten_bind_b2World_Step_3=function(){return b.asm._emscripten_bind_b2World_Step_3.apply(null,arguments)},Pj=b._emscripten_bind_b2CircleShape_RayCast_4=function(){return b.asm._emscripten_bind_b2CircleShape_RayCast_4.apply(null,
arguments)},Qj=b._emscripten_bind_b2Profile_get_step_0=function(){return b.asm._emscripten_bind_b2Profile_get_step_0.apply(null,arguments)},Rj=b._emscripten_bind_b2AABB_RayCast_2=function(){return b.asm._emscripten_bind_b2AABB_RayCast_2.apply(null,arguments)},Sj=b._emscripten_bind_b2Mat22_SetZero_0=function(){return b.asm._emscripten_bind_b2Mat22_SetZero_0.apply(null,arguments)};b.setTempRet0=function(){return b.asm.setTempRet0.apply(null,arguments)};
var Tj=b._emscripten_bind_b2DistanceJoint_GetLength_0=function(){return b.asm._emscripten_bind_b2DistanceJoint_GetLength_0.apply(null,arguments)},Uj=b._emscripten_bind_b2PulleyJoint_GetLengthB_0=function(){return b.asm._emscripten_bind_b2PulleyJoint_GetLengthB_0.apply(null,arguments)},Vj=b._emscripten_bind_b2PrismaticJoint_GetUpperLimit_0=function(){return b.asm._emscripten_bind_b2PrismaticJoint_GetUpperLimit_0.apply(null,arguments)},Wj=b._emscripten_bind_b2WheelJoint_SetMaxMotorTorque_1=function(){return b.asm._emscripten_bind_b2WheelJoint_SetMaxMotorTorque_1.apply(null,
arguments)},Xj=b._emscripten_bind_b2MotorJoint_GetUserData_0=function(){return b.asm._emscripten_bind_b2MotorJoint_GetUserData_0.apply(null,arguments)},Yj=b._emscripten_bind_b2FrictionJoint_GetReactionTorque_1=function(){return b.asm._emscripten_bind_b2FrictionJoint_GetReactionTorque_1.apply(null,arguments)},Zj=b._emscripten_bind_b2Shape_get_m_type_0=function(){return b.asm._emscripten_bind_b2Shape_get_m_type_0.apply(null,arguments)},ak=b._emscripten_bind_b2MouseJoint_SetDampingRatio_1=function(){return b.asm._emscripten_bind_b2MouseJoint_SetDampingRatio_1.apply(null,
arguments)},bk=b._emscripten_bind_b2World_GetAutoClearForces_0=function(){return b.asm._emscripten_bind_b2World_GetAutoClearForces_0.apply(null,arguments)},ck=b._emscripten_enum_b2ShapeType_e_circle=function(){return b.asm._emscripten_enum_b2ShapeType_e_circle.apply(null,arguments)},dk=b._emscripten_bind_b2BodyDef_set_fixedRotation_1=function(){return b.asm._emscripten_bind_b2BodyDef_set_fixedRotation_1.apply(null,arguments)},ek=b._emscripten_bind_b2Vec2_b2Vec2_2=function(){return b.asm._emscripten_bind_b2Vec2_b2Vec2_2.apply(null,
arguments)},fk=b._emscripten_bind_b2Manifold_get_type_0=function(){return b.asm._emscripten_bind_b2Manifold_get_type_0.apply(null,arguments)},gk=b._emscripten_bind_b2Body_Dump_0=function(){return b.asm._emscripten_bind_b2Body_Dump_0.apply(null,arguments)},hk=b._emscripten_bind_b2RevoluteJoint_GetLowerLimit_0=function(){return b.asm._emscripten_bind_b2RevoluteJoint_GetLowerLimit_0.apply(null,arguments)},ik=b._emscripten_bind_b2Body_GetWorldCenter_0=function(){return b.asm._emscripten_bind_b2Body_GetWorldCenter_0.apply(null,
arguments)},jk=b._emscripten_bind_b2WheelJointDef_set_maxMotorTorque_1=function(){return b.asm._emscripten_bind_b2WheelJointDef_set_maxMotorTorque_1.apply(null,arguments)},kk=b._emscripten_bind_b2BodyDef_set_linearVelocity_1=function(){return b.asm._emscripten_bind_b2BodyDef_set_linearVelocity_1.apply(null,arguments)},lk=b._emscripten_bind_b2JointDef_set_collideConnected_1=function(){return b.asm._emscripten_bind_b2JointDef_set_collideConnected_1.apply(null,arguments)},mk=b._emscripten_bind_b2MotorJoint___destroy___0=
function(){return b.asm._emscripten_bind_b2MotorJoint___destroy___0.apply(null,arguments)},nk=b._emscripten_bind_b2Body_GetUserData_0=function(){return b.asm._emscripten_bind_b2Body_GetUserData_0.apply(null,arguments)},ok=b._emscripten_bind_b2Body_GetAngularDamping_0=function(){return b.asm._emscripten_bind_b2Body_GetAngularDamping_0.apply(null,arguments)},pk=b._emscripten_bind_b2Fixture_RayCast_3=function(){return b.asm._emscripten_bind_b2Fixture_RayCast_3.apply(null,arguments)},qk=b._emscripten_bind_b2JointDef_set_bodyA_1=
function(){return b.asm._emscripten_bind_b2JointDef_set_bodyA_1.apply(null,arguments)},rk=b._emscripten_bind_b2GearJointDef_get_collideConnected_0=function(){return b.asm._emscripten_bind_b2GearJointDef_get_collideConnected_0.apply(null,arguments)},sk=b._emscripten_bind_b2RopeJointDef_get_maxLength_0=function(){return b.asm._emscripten_bind_b2RopeJointDef_get_maxLength_0.apply(null,arguments)},tk=b._emscripten_bind_b2MouseJointDef_get_bodyA_0=function(){return b.asm._emscripten_bind_b2MouseJointDef_get_bodyA_0.apply(null,
arguments)},uk=b._emscripten_bind_b2Body_SetBullet_1=function(){return b.asm._emscripten_bind_b2Body_SetBullet_1.apply(null,arguments)},vk=b._emscripten_bind_b2DistanceJoint_GetType_0=function(){return b.asm._emscripten_bind_b2DistanceJoint_GetType_0.apply(null,arguments)},wk=b._emscripten_bind_b2FixtureDef_get_restitution_0=function(){return b.asm._emscripten_bind_b2FixtureDef_get_restitution_0.apply(null,arguments)},xk=b._emscripten_bind_b2Fixture_GetType_0=function(){return b.asm._emscripten_bind_b2Fixture_GetType_0.apply(null,
arguments)},yk=b._emscripten_bind_b2WheelJointDef_set_enableMotor_1=function(){return b.asm._emscripten_bind_b2WheelJointDef_set_enableMotor_1.apply(null,arguments)},zk=b._emscripten_bind_b2RevoluteJoint_GetBodyB_0=function(){return b.asm._emscripten_bind_b2RevoluteJoint_GetBodyB_0.apply(null,arguments)},Ak=b._emscripten_bind_b2Profile_set_solveInit_1=function(){return b.asm._emscripten_bind_b2Profile_set_solveInit_1.apply(null,arguments)},Bk=b._emscripten_bind_b2RopeJointDef_set_type_1=function(){return b.asm._emscripten_bind_b2RopeJointDef_set_type_1.apply(null,
arguments)},Ck=b._emscripten_bind_b2PrismaticJointDef_get_bodyB_0=function(){return b.asm._emscripten_bind_b2PrismaticJointDef_get_bodyB_0.apply(null,arguments)},Dk=b._emscripten_bind_b2GearJoint_GetJoint2_0=function(){return b.asm._emscripten_bind_b2GearJoint_GetJoint2_0.apply(null,arguments)},Ek=b._emscripten_bind_b2PulleyJointDef_get_userData_0=function(){return b.asm._emscripten_bind_b2PulleyJointDef_get_userData_0.apply(null,arguments)},Fk=b._emscripten_bind_b2PrismaticJointDef_set_bodyB_1=function(){return b.asm._emscripten_bind_b2PrismaticJointDef_set_bodyB_1.apply(null,
arguments)},Gk=b._emscripten_bind_b2FrictionJointDef_b2FrictionJointDef_0=function(){return b.asm._emscripten_bind_b2FrictionJointDef_b2FrictionJointDef_0.apply(null,arguments)},Hk=b._emscripten_bind_b2PulleyJoint_GetCurrentLengthA_0=function(){return b.asm._emscripten_bind_b2PulleyJoint_GetCurrentLengthA_0.apply(null,arguments)},Ik=b._emscripten_bind_b2Manifold_get_localNormal_0=function(){return b.asm._emscripten_bind_b2Manifold_get_localNormal_0.apply(null,arguments)},Jk=b._emscripten_bind_b2Vec3_b2Vec3_0=
function(){return b.asm._emscripten_bind_b2Vec3_b2Vec3_0.apply(null,arguments)},Kk=b._emscripten_bind_b2Body_SetSleepingAllowed_1=function(){return b.asm._emscripten_bind_b2Body_SetSleepingAllowed_1.apply(null,arguments)},Lk=b._emscripten_bind_b2DistanceJoint___destroy___0=function(){return b.asm._emscripten_bind_b2DistanceJoint___destroy___0.apply(null,arguments)},Mk=b._emscripten_bind_b2PrismaticJoint_GetAnchorA_0=function(){return b.asm._emscripten_bind_b2PrismaticJoint_GetAnchorA_0.apply(null,
arguments)},Nk=b._emscripten_bind_b2Manifold_set_pointCount_1=function(){return b.asm._emscripten_bind_b2Manifold_set_pointCount_1.apply(null,arguments)},Ok=b._emscripten_bind_b2PrismaticJoint_IsMotorEnabled_0=function(){return b.asm._emscripten_bind_b2PrismaticJoint_IsMotorEnabled_0.apply(null,arguments)},Pk=b._emscripten_bind_b2WeldJoint_GetFrequency_0=function(){return b.asm._emscripten_bind_b2WeldJoint_GetFrequency_0.apply(null,arguments)},Qk=b._emscripten_bind_b2Joint_GetUserData_0=function(){return b.asm._emscripten_bind_b2Joint_GetUserData_0.apply(null,
arguments)},Rk=b._emscripten_bind_b2RevoluteJointDef_get_lowerAngle_0=function(){return b.asm._emscripten_bind_b2RevoluteJointDef_get_lowerAngle_0.apply(null,arguments)},Sk=b._emscripten_bind_b2Manifold_set_type_1=function(){return b.asm._emscripten_bind_b2Manifold_set_type_1.apply(null,arguments)},Tk=b._emscripten_bind_b2Vec3_b2Vec3_3=function(){return b.asm._emscripten_bind_b2Vec3_b2Vec3_3.apply(null,arguments)},Uk=b._emscripten_bind_b2RopeJointDef_set_maxLength_1=function(){return b.asm._emscripten_bind_b2RopeJointDef_set_maxLength_1.apply(null,
arguments)},Vk=b._emscripten_bind_b2ChainShape_TestPoint_2=function(){return b.asm._emscripten_bind_b2ChainShape_TestPoint_2.apply(null,arguments)},Wk=b._emscripten_bind_b2PrismaticJoint_GetReferenceAngle_0=function(){return b.asm._emscripten_bind_b2PrismaticJoint_GetReferenceAngle_0.apply(null,arguments)},Xk=b._emscripten_bind_b2RayCastInput_get_p2_0=function(){return b.asm._emscripten_bind_b2RayCastInput_get_p2_0.apply(null,arguments)},Yk=b._emscripten_bind_b2BodyDef_set_angle_1=function(){return b.asm._emscripten_bind_b2BodyDef_set_angle_1.apply(null,
arguments)},Zk=b._emscripten_bind_b2WeldJoint_GetUserData_0=function(){return b.asm._emscripten_bind_b2WeldJoint_GetUserData_0.apply(null,arguments)},$k=b._emscripten_bind_b2WheelJointDef_get_localAnchorA_0=function(){return b.asm._emscripten_bind_b2WheelJointDef_get_localAnchorA_0.apply(null,arguments)},al=b._emscripten_bind_b2PulleyJointDef_set_type_1=function(){return b.asm._emscripten_bind_b2PulleyJointDef_set_type_1.apply(null,arguments)},bl=b._emscripten_bind_b2Body_IsBullet_0=function(){return b.asm._emscripten_bind_b2Body_IsBullet_0.apply(null,
arguments)},cl=b._emscripten_bind_b2MotorJointDef_set_bodyA_1=function(){return b.asm._emscripten_bind_b2MotorJointDef_set_bodyA_1.apply(null,arguments)},dl=b._emscripten_bind_b2Fixture_TestPoint_1=function(){return b.asm._emscripten_bind_b2Fixture_TestPoint_1.apply(null,arguments)},el=b._emscripten_bind_b2Mat33_GetSymInverse33_1=function(){return b.asm._emscripten_bind_b2Mat33_GetSymInverse33_1.apply(null,arguments)},fl=b._emscripten_bind_JSDraw_DrawPolygon_3=function(){return b.asm._emscripten_bind_JSDraw_DrawPolygon_3.apply(null,
arguments)},gl=b._emscripten_bind_b2PolygonShape_ComputeMass_2=function(){return b.asm._emscripten_bind_b2PolygonShape_ComputeMass_2.apply(null,arguments)},hl=b._emscripten_bind_b2PrismaticJoint_EnableMotor_1=function(){return b.asm._emscripten_bind_b2PrismaticJoint_EnableMotor_1.apply(null,arguments)},il=b._emscripten_bind_b2PrismaticJointDef_set_upperTranslation_1=function(){return b.asm._emscripten_bind_b2PrismaticJointDef_set_upperTranslation_1.apply(null,arguments)},jl=b._emscripten_bind_b2MouseJoint_SetFrequency_1=
function(){return b.asm._emscripten_bind_b2MouseJoint_SetFrequency_1.apply(null,arguments)},kl=b._emscripten_bind_b2EdgeShape_get_m_vertex1_0=function(){return b.asm._emscripten_bind_b2EdgeShape_get_m_vertex1_0.apply(null,arguments)},ll=b._emscripten_bind_b2BodyDef_set_awake_1=function(){return b.asm._emscripten_bind_b2BodyDef_set_awake_1.apply(null,arguments)},ml=b._emscripten_bind_b2Vec2_get_y_0=function(){return b.asm._emscripten_bind_b2Vec2_get_y_0.apply(null,arguments)},nl=b._emscripten_bind_b2Filter_set_categoryBits_1=
function(){return b.asm._emscripten_bind_b2Filter_set_categoryBits_1.apply(null,arguments)},ol=b._emscripten_bind_b2Body_CreateFixture_2=function(){return b.asm._emscripten_bind_b2Body_CreateFixture_2.apply(null,arguments)},pl=b._emscripten_bind_b2Body_SetActive_1=function(){return b.asm._emscripten_bind_b2Body_SetActive_1.apply(null,arguments)},ql=b._emscripten_bind_b2ContactFeature_get_indexB_0=function(){return b.asm._emscripten_bind_b2ContactFeature_get_indexB_0.apply(null,arguments)},rl=b._emscripten_bind_b2Fixture_GetUserData_0=
function(){return b.asm._emscripten_bind_b2Fixture_GetUserData_0.apply(null,arguments)},sl=b._emscripten_bind_b2PolygonShape_ComputeAABB_3=function(){return b.asm._emscripten_bind_b2PolygonShape_ComputeAABB_3.apply(null,arguments)},tl=b._emscripten_bind_b2ContactFeature_get_typeA_0=function(){return b.asm._emscripten_bind_b2ContactFeature_get_typeA_0.apply(null,arguments)},ul=b._emscripten_bind_b2MouseJointDef_set_maxForce_1=function(){return b.asm._emscripten_bind_b2MouseJointDef_set_maxForce_1.apply(null,
arguments)},vl=b._emscripten_bind_b2PrismaticJoint_GetLocalAnchorA_0=function(){return b.asm._emscripten_bind_b2PrismaticJoint_GetLocalAnchorA_0.apply(null,arguments)},wl=b._emscripten_bind_b2EdgeShape_TestPoint_2=function(){return b.asm._emscripten_bind_b2EdgeShape_TestPoint_2.apply(null,arguments)},xl=b._emscripten_bind_b2PolygonShape_get_m_centroid_0=function(){return b.asm._emscripten_bind_b2PolygonShape_get_m_centroid_0.apply(null,arguments)},yl=b._emscripten_bind_b2ChainShape___destroy___0=
function(){return b.asm._emscripten_bind_b2ChainShape___destroy___0.apply(null,arguments)},zl=b._emscripten_bind_b2GearJoint_SetUserData_1=function(){return b.asm._emscripten_bind_b2GearJoint_SetUserData_1.apply(null,arguments)},Al=b._emscripten_bind_b2Vec3_set_z_1=function(){return b.asm._emscripten_bind_b2Vec3_set_z_1.apply(null,arguments)},Bl=b._emscripten_bind_b2PrismaticJointDef_set_enableLimit_1=function(){return b.asm._emscripten_bind_b2PrismaticJointDef_set_enableLimit_1.apply(null,arguments)},
Cl=b._emscripten_bind_b2DistanceJoint_GetFrequency_0=function(){return b.asm._emscripten_bind_b2DistanceJoint_GetFrequency_0.apply(null,arguments)},Dl=b._emscripten_bind_b2PrismaticJointDef_get_collideConnected_0=function(){return b.asm._emscripten_bind_b2PrismaticJointDef_get_collideConnected_0.apply(null,arguments)},El=b._emscripten_bind_b2Body_SetGravityScale_1=function(){return b.asm._emscripten_bind_b2Body_SetGravityScale_1.apply(null,arguments)},Fl=b._emscripten_enum_b2ContactFeatureType_e_face=
function(){return b.asm._emscripten_enum_b2ContactFeatureType_e_face.apply(null,arguments)},Gl=b._emscripten_bind_b2RevoluteJoint_GetUpperLimit_0=function(){return b.asm._emscripten_bind_b2RevoluteJoint_GetUpperLimit_0.apply(null,arguments)},Hl=b._emscripten_bind_b2PulleyJointDef_get_lengthA_0=function(){return b.asm._emscripten_bind_b2PulleyJointDef_get_lengthA_0.apply(null,arguments)},Il=b._emscripten_bind_b2Vec3_set_x_1=function(){return b.asm._emscripten_bind_b2Vec3_set_x_1.apply(null,arguments)},
Jl=b._emscripten_bind_b2PulleyJointDef_get_type_0=function(){return b.asm._emscripten_bind_b2PulleyJointDef_get_type_0.apply(null,arguments)},Kl=b._emscripten_bind_JSDestructionListener_SayGoodbyeJoint_1=function(){return b.asm._emscripten_bind_JSDestructionListener_SayGoodbyeJoint_1.apply(null,arguments)},Ll=b._emscripten_bind_b2Shape___destroy___0=function(){return b.asm._emscripten_bind_b2Shape___destroy___0.apply(null,arguments)},Ml=b._emscripten_bind_b2Joint_GetReactionForce_1=function(){return b.asm._emscripten_bind_b2Joint_GetReactionForce_1.apply(null,
arguments)},Nl=b._emscripten_bind_b2FixtureDef_set_friction_1=function(){return b.asm._emscripten_bind_b2FixtureDef_set_friction_1.apply(null,arguments)},Ol=b._emscripten_bind_b2ContactID___destroy___0=function(){return b.asm._emscripten_bind_b2ContactID___destroy___0.apply(null,arguments)},Pl=b._emscripten_bind_b2EdgeShape_get_m_hasVertex0_0=function(){return b.asm._emscripten_bind_b2EdgeShape_get_m_hasVertex0_0.apply(null,arguments)},Ql=b._emscripten_bind_b2World_GetBodyCount_0=function(){return b.asm._emscripten_bind_b2World_GetBodyCount_0.apply(null,
arguments)},Rl=b._emscripten_bind_b2JointEdge_get_prev_0=function(){return b.asm._emscripten_bind_b2JointEdge_get_prev_0.apply(null,arguments)},Sl=b._emscripten_bind_b2MotorJointDef_get_linearOffset_0=function(){return b.asm._emscripten_bind_b2MotorJointDef_get_linearOffset_0.apply(null,arguments)},Tl=b._emscripten_bind_b2MotorJointDef_Initialize_2=function(){return b.asm._emscripten_bind_b2MotorJointDef_Initialize_2.apply(null,arguments)},Ul=b._emscripten_bind_b2PrismaticJoint_GetAnchorB_0=function(){return b.asm._emscripten_bind_b2PrismaticJoint_GetAnchorB_0.apply(null,
arguments)},Vl=b._emscripten_bind_b2Body_SetLinearVelocity_1=function(){return b.asm._emscripten_bind_b2Body_SetLinearVelocity_1.apply(null,arguments)},Wl=b._emscripten_enum_b2BodyType_b2_staticBody=function(){return b.asm._emscripten_enum_b2BodyType_b2_staticBody.apply(null,arguments)},Xl=b._emscripten_bind_b2RevoluteJointDef_set_upperAngle_1=function(){return b.asm._emscripten_bind_b2RevoluteJointDef_set_upperAngle_1.apply(null,arguments)},Yl=b._emscripten_bind_b2RevoluteJointDef_get_type_0=function(){return b.asm._emscripten_bind_b2RevoluteJointDef_get_type_0.apply(null,
arguments)},Zl=b._emscripten_bind_b2GearJointDef_get_type_0=function(){return b.asm._emscripten_bind_b2GearJointDef_get_type_0.apply(null,arguments)},$l=b._emscripten_bind_b2ChainShape_GetType_0=function(){return b.asm._emscripten_bind_b2ChainShape_GetType_0.apply(null,arguments)},am=b._emscripten_bind_b2RayCastInput_get_maxFraction_0=function(){return b.asm._emscripten_bind_b2RayCastInput_get_maxFraction_0.apply(null,arguments)},bm=b._emscripten_bind_b2GearJoint_GetBodyA_0=function(){return b.asm._emscripten_bind_b2GearJoint_GetBodyA_0.apply(null,
arguments)},cm=b._emscripten_bind_b2Body_GetLocalVector_1=function(){return b.asm._emscripten_bind_b2Body_GetLocalVector_1.apply(null,arguments)},dm=b._emscripten_bind_b2PrismaticJoint_EnableLimit_1=function(){return b.asm._emscripten_bind_b2PrismaticJoint_EnableLimit_1.apply(null,arguments)},em=b._emscripten_bind_b2FrictionJointDef_get_maxForce_0=function(){return b.asm._emscripten_bind_b2FrictionJointDef_get_maxForce_0.apply(null,arguments)},fm=b._emscripten_bind_b2BodyDef_set_angularVelocity_1=
function(){return b.asm._emscripten_bind_b2BodyDef_set_angularVelocity_1.apply(null,arguments)},gm=b._emscripten_bind_b2Body_SetLinearDamping_1=function(){return b.asm._emscripten_bind_b2Body_SetLinearDamping_1.apply(null,arguments)},hm=b._emscripten_bind_b2WheelJoint_GetBodyB_0=function(){return b.asm._emscripten_bind_b2WheelJoint_GetBodyB_0.apply(null,arguments)},im=b._emscripten_bind_b2GearJointDef_get_joint2_0=function(){return b.asm._emscripten_bind_b2GearJointDef_get_joint2_0.apply(null,arguments)},
jm=b._emscripten_bind_b2PrismaticJoint_IsActive_0=function(){return b.asm._emscripten_bind_b2PrismaticJoint_IsActive_0.apply(null,arguments)},km=b._emscripten_bind_b2Vec3_get_z_0=function(){return b.asm._emscripten_bind_b2Vec3_get_z_0.apply(null,arguments)},lm=b._emscripten_bind_b2Filter_get_categoryBits_0=function(){return b.asm._emscripten_bind_b2Filter_get_categoryBits_0.apply(null,arguments)},mm=b._emscripten_enum_b2JointType_e_weldJoint=function(){return b.asm._emscripten_enum_b2JointType_e_weldJoint.apply(null,
arguments)},nm=b._emscripten_bind_b2World_SetContinuousPhysics_1=function(){return b.asm._emscripten_bind_b2World_SetContinuousPhysics_1.apply(null,arguments)},om=b._emscripten_bind_b2MouseJointDef_get_target_0=function(){return b.asm._emscripten_bind_b2MouseJointDef_get_target_0.apply(null,arguments)},pm=b._emscripten_bind_b2Body_SetTransform_2=function(){return b.asm._emscripten_bind_b2Body_SetTransform_2.apply(null,arguments)},qm=b._emscripten_bind_b2PulleyJointDef_set_userData_1=function(){return b.asm._emscripten_bind_b2PulleyJointDef_set_userData_1.apply(null,
arguments)},rm=b._emscripten_bind_b2FrictionJointDef_set_maxForce_1=function(){return b.asm._emscripten_bind_b2FrictionJointDef_set_maxForce_1.apply(null,arguments)},sm=b._emscripten_bind_b2DistanceJointDef_b2DistanceJointDef_0=function(){return b.asm._emscripten_bind_b2DistanceJointDef_b2DistanceJointDef_0.apply(null,arguments)},tm=b._emscripten_bind_b2BodyDef_get_type_0=function(){return b.asm._emscripten_bind_b2BodyDef_get_type_0.apply(null,arguments)},um=b._emscripten_bind_b2Mat33_GetInverse22_1=
function(){return b.asm._emscripten_bind_b2Mat33_GetInverse22_1.apply(null,arguments)},wm=b._emscripten_bind_b2PulleyJoint_GetAnchorB_0=function(){return b.asm._emscripten_bind_b2PulleyJoint_GetAnchorB_0.apply(null,arguments)},xm=b._emscripten_bind_b2WheelJoint_GetReactionTorque_1=function(){return b.asm._emscripten_bind_b2WheelJoint_GetReactionTorque_1.apply(null,arguments)},ym=b._emscripten_bind_b2RevoluteJointDef_b2RevoluteJointDef_0=function(){return b.asm._emscripten_bind_b2RevoluteJointDef_b2RevoluteJointDef_0.apply(null,
arguments)},zm=b._emscripten_bind_b2ContactFeature_set_typeA_1=function(){return b.asm._emscripten_bind_b2ContactFeature_set_typeA_1.apply(null,arguments)},Am=b._emscripten_bind_b2Fixture_Dump_1=function(){return b.asm._emscripten_bind_b2Fixture_Dump_1.apply(null,arguments)},Bm=b._emscripten_bind_b2RevoluteJointDef_get_enableLimit_0=function(){return b.asm._emscripten_bind_b2RevoluteJointDef_get_enableLimit_0.apply(null,arguments)},Cm=b._emscripten_bind_b2Manifold_set_localPoint_1=function(){return b.asm._emscripten_bind_b2Manifold_set_localPoint_1.apply(null,
arguments)},Dm=b._emscripten_bind_b2JointDef_get_userData_0=function(){return b.asm._emscripten_bind_b2JointDef_get_userData_0.apply(null,arguments)},Em=b._emscripten_bind_b2BodyDef_set_bullet_1=function(){return b.asm._emscripten_bind_b2BodyDef_set_bullet_1.apply(null,arguments)},Fm=b._emscripten_bind_b2RayCastOutput___destroy___0=function(){return b.asm._emscripten_bind_b2RayCastOutput___destroy___0.apply(null,arguments)},Gm=b._emscripten_bind_JSContactListener___destroy___0=function(){return b.asm._emscripten_bind_JSContactListener___destroy___0.apply(null,
arguments)},Hm=b._emscripten_bind_b2World_DrawDebugData_0=function(){return b.asm._emscripten_bind_b2World_DrawDebugData_0.apply(null,arguments)};b.___cxa_can_catch=function(){return b.asm.___cxa_can_catch.apply(null,arguments)};
var Im=b._emscripten_bind_b2RopeJointDef_get_localAnchorA_0=function(){return b.asm._emscripten_bind_b2RopeJointDef_get_localAnchorA_0.apply(null,arguments)},Jm=b._emscripten_bind_b2Profile_set_solveVelocity_1=function(){return b.asm._emscripten_bind_b2Profile_set_solveVelocity_1.apply(null,arguments)},Km=b._emscripten_bind_b2GearJointDef_get_userData_0=function(){return b.asm._emscripten_bind_b2GearJointDef_get_userData_0.apply(null,arguments)},Lm=b._emscripten_bind_b2Filter_set_groupIndex_1=function(){return b.asm._emscripten_bind_b2Filter_set_groupIndex_1.apply(null,
arguments)},Mm=b._emscripten_bind_b2JointDef_b2JointDef_0=function(){return b.asm._emscripten_bind_b2JointDef_b2JointDef_0.apply(null,arguments)},Nm=b._emscripten_bind_b2Rot_set_c_1=function(){return b.asm._emscripten_bind_b2Rot_set_c_1.apply(null,arguments)},Om=b._emscripten_bind_b2GearJointDef_b2GearJointDef_0=function(){return b.asm._emscripten_bind_b2GearJointDef_b2GearJointDef_0.apply(null,arguments)},Pm=b._emscripten_bind_b2JointDef_get_bodyB_0=function(){return b.asm._emscripten_bind_b2JointDef_get_bodyB_0.apply(null,
arguments)},Qm=b._emscripten_bind_b2DistanceJoint_GetReactionForce_1=function(){return b.asm._emscripten_bind_b2DistanceJoint_GetReactionForce_1.apply(null,arguments)},Rm=b._emscripten_bind_b2PrismaticJoint_GetJointSpeed_0=function(){return b.asm._emscripten_bind_b2PrismaticJoint_GetJointSpeed_0.apply(null,arguments)},Sm=b._emscripten_bind_b2MouseJointDef_set_frequencyHz_1=function(){return b.asm._emscripten_bind_b2MouseJointDef_set_frequencyHz_1.apply(null,arguments)},Tm=b._emscripten_bind_b2PulleyJointDef_get_groundAnchorA_0=
function(){return b.asm._emscripten_bind_b2PulleyJointDef_get_groundAnchorA_0.apply(null,arguments)},Um=b._emscripten_bind_b2Joint_GetAnchorA_0=function(){return b.asm._emscripten_bind_b2Joint_GetAnchorA_0.apply(null,arguments)},Vm=b._emscripten_bind_b2Contact_GetRestitution_0=function(){return b.asm._emscripten_bind_b2Contact_GetRestitution_0.apply(null,arguments)},Wm=b._emscripten_bind_b2ContactEdge_get_contact_0=function(){return b.asm._emscripten_bind_b2ContactEdge_get_contact_0.apply(null,arguments)},
Xm=b._emscripten_bind_b2RevoluteJointDef_get_userData_0=function(){return b.asm._emscripten_bind_b2RevoluteJointDef_get_userData_0.apply(null,arguments)},Ym=b._emscripten_bind_b2Body_ResetMassData_0=function(){return b.asm._emscripten_bind_b2Body_ResetMassData_0.apply(null,arguments)},Zm=b._emscripten_bind_b2Fixture_GetAABB_1=function(){return b.asm._emscripten_bind_b2Fixture_GetAABB_1.apply(null,arguments)},$m=b._emscripten_bind_b2PrismaticJointDef_set_collideConnected_1=function(){return b.asm._emscripten_bind_b2PrismaticJointDef_set_collideConnected_1.apply(null,
arguments)},an=b._emscripten_bind_b2Body_GetMassData_1=function(){return b.asm._emscripten_bind_b2Body_GetMassData_1.apply(null,arguments)},bn=b._emscripten_bind_b2RevoluteJointDef_get_localAnchorA_0=function(){return b.asm._emscripten_bind_b2RevoluteJointDef_get_localAnchorA_0.apply(null,arguments)},cn=b._emscripten_bind_b2EdgeShape_ComputeMass_2=function(){return b.asm._emscripten_bind_b2EdgeShape_ComputeMass_2.apply(null,arguments)},dn=b._emscripten_bind_b2GearJointDef_get_bodyB_0=function(){return b.asm._emscripten_bind_b2GearJointDef_get_bodyB_0.apply(null,
arguments)},en=b._emscripten_enum_b2LimitState_e_atLowerLimit=function(){return b.asm._emscripten_enum_b2LimitState_e_atLowerLimit.apply(null,arguments)},fn=b._emscripten_bind_b2ManifoldPoint_set_id_1=function(){return b.asm._emscripten_bind_b2ManifoldPoint_set_id_1.apply(null,arguments)},gn=b._emscripten_bind_b2WheelJointDef_get_bodyB_0=function(){return b.asm._emscripten_bind_b2WheelJointDef_get_bodyB_0.apply(null,arguments)},hn=b._emscripten_bind_b2WeldJoint_GetLocalAnchorB_0=function(){return b.asm._emscripten_bind_b2WeldJoint_GetLocalAnchorB_0.apply(null,
arguments)},jn=b._emscripten_bind_b2RevoluteJointDef_set_localAnchorB_1=function(){return b.asm._emscripten_bind_b2RevoluteJointDef_set_localAnchorB_1.apply(null,arguments)},kn=b._emscripten_bind_b2Body_DestroyFixture_1=function(){return b.asm._emscripten_bind_b2Body_DestroyFixture_1.apply(null,arguments)},ln=b._emscripten_bind_b2Profile_set_broadphase_1=function(){return b.asm._emscripten_bind_b2Profile_set_broadphase_1.apply(null,arguments)},mn=b._emscripten_bind_b2WheelJointDef_get_localAnchorB_0=
function(){return b.asm._emscripten_bind_b2WheelJointDef_get_localAnchorB_0.apply(null,arguments)},nn=b._emscripten_bind_b2ContactImpulse_get_count_0=function(){return b.asm._emscripten_bind_b2ContactImpulse_get_count_0.apply(null,arguments)},on=b._emscripten_bind_b2World_GetJointCount_0=function(){return b.asm._emscripten_bind_b2World_GetJointCount_0.apply(null,arguments)},pn=b._emscripten_bind_b2WheelJoint_GetMotorSpeed_0=function(){return b.asm._emscripten_bind_b2WheelJoint_GetMotorSpeed_0.apply(null,
arguments)},qn=b._emscripten_bind_b2WheelJointDef_get_dampingRatio_0=function(){return b.asm._emscripten_bind_b2WheelJointDef_get_dampingRatio_0.apply(null,arguments)},rn=b._emscripten_bind_b2RayCastOutput_get_fraction_0=function(){return b.asm._emscripten_bind_b2RayCastOutput_get_fraction_0.apply(null,arguments)},sn=b._emscripten_bind_b2AABB___destroy___0=function(){return b.asm._emscripten_bind_b2AABB___destroy___0.apply(null,arguments)},tn=b._emscripten_bind_b2GearJoint_SetRatio_1=function(){return b.asm._emscripten_bind_b2GearJoint_SetRatio_1.apply(null,
arguments)},un=b._emscripten_bind_b2Body_ApplyLinearImpulse_3=function(){return b.asm._emscripten_bind_b2Body_ApplyLinearImpulse_3.apply(null,arguments)},vn=b._emscripten_bind_b2Filter___destroy___0=function(){return b.asm._emscripten_bind_b2Filter___destroy___0.apply(null,arguments)},wn=b._emscripten_bind_b2RopeJointDef_get_userData_0=function(){return b.asm._emscripten_bind_b2RopeJointDef_get_userData_0.apply(null,arguments)};
b.___cxa_is_pointer_type=function(){return b.asm.___cxa_is_pointer_type.apply(null,arguments)};
var xn=b._emscripten_bind_b2BodyDef_get_fixedRotation_0=function(){return b.asm._emscripten_bind_b2BodyDef_get_fixedRotation_0.apply(null,arguments)},yn=b._emscripten_bind_b2PrismaticJointDef_set_motorSpeed_1=function(){return b.asm._emscripten_bind_b2PrismaticJointDef_set_motorSpeed_1.apply(null,arguments)},zn=b._emscripten_bind_b2ChainShape_SetPrevVertex_1=function(){return b.asm._emscripten_bind_b2ChainShape_SetPrevVertex_1.apply(null,arguments)},An=b._emscripten_bind_b2MotorJoint_IsActive_0=function(){return b.asm._emscripten_bind_b2MotorJoint_IsActive_0.apply(null,
arguments)},Bn=b._emscripten_bind_b2MouseJoint_GetReactionTorque_1=function(){return b.asm._emscripten_bind_b2MouseJoint_GetReactionTorque_1.apply(null,arguments)},Cn=b._emscripten_bind_b2DistanceJointDef_set_collideConnected_1=function(){return b.asm._emscripten_bind_b2DistanceJointDef_set_collideConnected_1.apply(null,arguments)},Dn=b._emscripten_bind_b2WheelJoint_GetUserData_0=function(){return b.asm._emscripten_bind_b2WheelJoint_GetUserData_0.apply(null,arguments)},En=b._emscripten_bind_b2Vec3_op_sub_1=
function(){return b.asm._emscripten_bind_b2Vec3_op_sub_1.apply(null,arguments)},Fn=b._emscripten_bind_b2WheelJoint_GetNext_0=function(){return b.asm._emscripten_bind_b2WheelJoint_GetNext_0.apply(null,arguments)},Gn=b._emscripten_bind_b2Shape_GetType_0=function(){return b.asm._emscripten_bind_b2Shape_GetType_0.apply(null,arguments)},Hn=b._emscripten_bind_b2AABB_IsValid_0=function(){return b.asm._emscripten_bind_b2AABB_IsValid_0.apply(null,arguments)},In=b._emscripten_bind_b2WheelJoint_GetBodyA_0=function(){return b.asm._emscripten_bind_b2WheelJoint_GetBodyA_0.apply(null,
arguments)},Jn=b._emscripten_enum_b2ShapeType_e_chain=function(){return b.asm._emscripten_enum_b2ShapeType_e_chain.apply(null,arguments)},Kn=b._emscripten_bind_b2PulleyJoint_GetLengthA_0=function(){return b.asm._emscripten_bind_b2PulleyJoint_GetLengthA_0.apply(null,arguments)},Ln=b._emscripten_bind_b2DistanceJointDef_get_frequencyHz_0=function(){return b.asm._emscripten_bind_b2DistanceJointDef_get_frequencyHz_0.apply(null,arguments)},Mn=b._emscripten_bind_b2RevoluteJoint_SetMotorSpeed_1=function(){return b.asm._emscripten_bind_b2RevoluteJoint_SetMotorSpeed_1.apply(null,
arguments)},Nn=b._emscripten_bind_b2World___destroy___0=function(){return b.asm._emscripten_bind_b2World___destroy___0.apply(null,arguments)},On=b._emscripten_bind_b2ChainShape_set_m_prevVertex_1=function(){return b.asm._emscripten_bind_b2ChainShape_set_m_prevVertex_1.apply(null,arguments)},Pn=b._emscripten_bind_b2ChainShape_get_m_hasNextVertex_0=function(){return b.asm._emscripten_bind_b2ChainShape_get_m_hasNextVertex_0.apply(null,arguments)},Qn=b._emscripten_bind_b2ChainShape_SetNextVertex_1=function(){return b.asm._emscripten_bind_b2ChainShape_SetNextVertex_1.apply(null,
arguments)},Rn=b._emscripten_bind_b2Body_SetType_1=function(){return b.asm._emscripten_bind_b2Body_SetType_1.apply(null,arguments)},Sn=b._emscripten_bind_b2Body_GetMass_0=function(){return b.asm._emscripten_bind_b2Body_GetMass_0.apply(null,arguments)},Tn=b._emscripten_bind_b2Rot_b2Rot_0=function(){return b.asm._emscripten_bind_b2Rot_b2Rot_0.apply(null,arguments)},Un=b._emscripten_bind_b2Rot_b2Rot_1=function(){return b.asm._emscripten_bind_b2Rot_b2Rot_1.apply(null,arguments)},Vn=b._emscripten_enum_b2JointType_e_distanceJoint=
function(){return b.asm._emscripten_enum_b2JointType_e_distanceJoint.apply(null,arguments)},Wn=b._emscripten_bind_b2WheelJoint_SetSpringDampingRatio_1=function(){return b.asm._emscripten_bind_b2WheelJoint_SetSpringDampingRatio_1.apply(null,arguments)},Xn=b._emscripten_bind_b2MouseJoint_GetType_0=function(){return b.asm._emscripten_bind_b2MouseJoint_GetType_0.apply(null,arguments)},Yn=b._emscripten_bind_b2MouseJoint_GetTarget_0=function(){return b.asm._emscripten_bind_b2MouseJoint_GetTarget_0.apply(null,
arguments)},Zn=b._emscripten_bind_JSQueryCallback___destroy___0=function(){return b.asm._emscripten_bind_JSQueryCallback___destroy___0.apply(null,arguments)},$n=b._emscripten_bind_b2Fixture_Refilter_0=function(){return b.asm._emscripten_bind_b2Fixture_Refilter_0.apply(null,arguments)},ao=b._emscripten_bind_b2RevoluteJointDef_set_lowerAngle_1=function(){return b.asm._emscripten_bind_b2RevoluteJointDef_set_lowerAngle_1.apply(null,arguments)},bo=b._emscripten_bind_b2JointEdge___destroy___0=function(){return b.asm._emscripten_bind_b2JointEdge___destroy___0.apply(null,
arguments)},co=b._emscripten_bind_b2PulleyJoint_GetRatio_0=function(){return b.asm._emscripten_bind_b2PulleyJoint_GetRatio_0.apply(null,arguments)},eo=b._emscripten_bind_JSContactListener_BeginContact_1=function(){return b.asm._emscripten_bind_JSContactListener_BeginContact_1.apply(null,arguments)},fo=b._emscripten_bind_b2MotorJointDef_set_linearOffset_1=function(){return b.asm._emscripten_bind_b2MotorJointDef_set_linearOffset_1.apply(null,arguments)},go=b._emscripten_enum_b2JointType_e_motorJoint=
function(){return b.asm._emscripten_enum_b2JointType_e_motorJoint.apply(null,arguments)},ho=b._emscripten_bind_b2EdgeShape_get_m_vertex2_0=function(){return b.asm._emscripten_bind_b2EdgeShape_get_m_vertex2_0.apply(null,arguments)},io=b._emscripten_bind_b2JointEdge_get_next_0=function(){return b.asm._emscripten_bind_b2JointEdge_get_next_0.apply(null,arguments)},jo=b._emscripten_bind_b2RayCastInput_set_maxFraction_1=function(){return b.asm._emscripten_bind_b2RayCastInput_set_maxFraction_1.apply(null,
arguments)},ko=b._emscripten_bind_b2MouseJoint_GetBodyA_0=function(){return b.asm._emscripten_bind_b2MouseJoint_GetBodyA_0.apply(null,arguments)},lo=b._emscripten_bind_b2BodyDef_get_awake_0=function(){return b.asm._emscripten_bind_b2BodyDef_get_awake_0.apply(null,arguments)},mo=b._emscripten_bind_b2AABB_b2AABB_0=function(){return b.asm._emscripten_bind_b2AABB_b2AABB_0.apply(null,arguments)},no=b._emscripten_bind_b2Fixture_SetFriction_1=function(){return b.asm._emscripten_bind_b2Fixture_SetFriction_1.apply(null,
arguments)},oo=b._emscripten_enum_b2DrawFlag_e_centerOfMassBit=function(){return b.asm._emscripten_enum_b2DrawFlag_e_centerOfMassBit.apply(null,arguments)},po=b._emscripten_bind_b2World_CreateBody_1=function(){return b.asm._emscripten_bind_b2World_CreateBody_1.apply(null,arguments)},qo=b._emscripten_bind_b2RopeJointDef_set_userData_1=function(){return b.asm._emscripten_bind_b2RopeJointDef_set_userData_1.apply(null,arguments)},ro=b._emscripten_bind_b2WeldJoint_GetNext_0=function(){return b.asm._emscripten_bind_b2WeldJoint_GetNext_0.apply(null,
arguments)},so=b._emscripten_bind_b2WeldJoint_GetType_0=function(){return b.asm._emscripten_bind_b2WeldJoint_GetType_0.apply(null,arguments)},to=b._emscripten_enum_b2ContactFeatureType_e_vertex=function(){return b.asm._emscripten_enum_b2ContactFeatureType_e_vertex.apply(null,arguments)},uo=b._emscripten_bind_b2Rot___destroy___0=function(){return b.asm._emscripten_bind_b2Rot___destroy___0.apply(null,arguments)},vo=b._emscripten_bind_b2Filter_get_maskBits_0=function(){return b.asm._emscripten_bind_b2Filter_get_maskBits_0.apply(null,
arguments)},wo=b._emscripten_bind_b2Mat22_get_ex_0=function(){return b.asm._emscripten_bind_b2Mat22_get_ex_0.apply(null,arguments)},xo=b._emscripten_bind_b2Body_GetFixtureList_0=function(){return b.asm._emscripten_bind_b2Body_GetFixtureList_0.apply(null,arguments)},yo=b._emscripten_bind_b2PulleyJoint___destroy___0=function(){return b.asm._emscripten_bind_b2PulleyJoint___destroy___0.apply(null,arguments)},zo=b._emscripten_bind_b2MouseJointDef_set_dampingRatio_1=function(){return b.asm._emscripten_bind_b2MouseJointDef_set_dampingRatio_1.apply(null,
arguments)},Ao=b._emscripten_bind_JSRayCastCallback___destroy___0=function(){return b.asm._emscripten_bind_JSRayCastCallback___destroy___0.apply(null,arguments)},Bo=b._emscripten_bind_b2ContactListener___destroy___0=function(){return b.asm._emscripten_bind_b2ContactListener___destroy___0.apply(null,arguments)},Co=b._emscripten_bind_b2PrismaticJointDef_set_localAnchorB_1=function(){return b.asm._emscripten_bind_b2PrismaticJointDef_set_localAnchorB_1.apply(null,arguments)};
b.establishStackSpace=function(){return b.asm.establishStackSpace.apply(null,arguments)};
var Do=b._emscripten_bind_b2FrictionJoint___destroy___0=function(){return b.asm._emscripten_bind_b2FrictionJoint___destroy___0.apply(null,arguments)},Eo=b._emscripten_bind_b2WeldJoint_Dump_0=function(){return b.asm._emscripten_bind_b2WeldJoint_Dump_0.apply(null,arguments)},Fo=b._emscripten_bind_b2MotorJoint_SetMaxForce_1=function(){return b.asm._emscripten_bind_b2MotorJoint_SetMaxForce_1.apply(null,arguments)},Go=b._emscripten_bind_b2MouseJoint_GetFrequency_0=function(){return b.asm._emscripten_bind_b2MouseJoint_GetFrequency_0.apply(null,
arguments)},Ho=b._emscripten_bind_b2FrictionJoint_GetLocalAnchorA_0=function(){return b.asm._emscripten_bind_b2FrictionJoint_GetLocalAnchorA_0.apply(null,arguments)},Io=b._emscripten_bind_b2RevoluteJointDef_set_collideConnected_1=function(){return b.asm._emscripten_bind_b2RevoluteJointDef_set_collideConnected_1.apply(null,arguments)},Jo=b._emscripten_bind_b2GearJointDef_set_collideConnected_1=function(){return b.asm._emscripten_bind_b2GearJointDef_set_collideConnected_1.apply(null,arguments)},Ko=
b._emscripten_bind_b2Vec2_IsValid_0=function(){return b.asm._emscripten_bind_b2Vec2_IsValid_0.apply(null,arguments)},Lo=b._emscripten_bind_b2PrismaticJointDef_set_bodyA_1=function(){return b.asm._emscripten_bind_b2PrismaticJointDef_set_bodyA_1.apply(null,arguments)},Mo=b._emscripten_bind_b2World_GetWarmStarting_0=function(){return b.asm._emscripten_bind_b2World_GetWarmStarting_0.apply(null,arguments)},No=b._emscripten_bind_b2RevoluteJointDef_set_enableLimit_1=function(){return b.asm._emscripten_bind_b2RevoluteJointDef_set_enableLimit_1.apply(null,
arguments)},Oo=b._emscripten_bind_b2WeldJointDef___destroy___0=function(){return b.asm._emscripten_bind_b2WeldJointDef___destroy___0.apply(null,arguments)},Po=b._emscripten_bind_b2Mat22_Solve_1=function(){return b.asm._emscripten_bind_b2Mat22_Solve_1.apply(null,arguments)},Qo=b._emscripten_bind_b2Color_get_g_0=function(){return b.asm._emscripten_bind_b2Color_get_g_0.apply(null,arguments)},Ro=b._emscripten_bind_VoidPtr___destroy___0=function(){return b.asm._emscripten_bind_VoidPtr___destroy___0.apply(null,
arguments)},So=b._emscripten_bind_b2RopeJoint_GetNext_0=function(){return b.asm._emscripten_bind_b2RopeJoint_GetNext_0.apply(null,arguments)},To=b._emscripten_bind_b2EdgeShape_get_m_type_0=function(){return b.asm._emscripten_bind_b2EdgeShape_get_m_type_0.apply(null,arguments)},Uo=b._emscripten_bind_b2PolygonShape_GetChildCount_0=function(){return b.asm._emscripten_bind_b2PolygonShape_GetChildCount_0.apply(null,arguments)},Vo=b._emscripten_bind_b2GearJointDef_get_ratio_0=function(){return b.asm._emscripten_bind_b2GearJointDef_get_ratio_0.apply(null,
arguments)},Wo=b._emscripten_bind_b2Mat33_Solve33_1=function(){return b.asm._emscripten_bind_b2Mat33_Solve33_1.apply(null,arguments)},Xo=b._emscripten_bind_b2WeldJointDef_set_userData_1=function(){return b.asm._emscripten_bind_b2WeldJointDef_set_userData_1.apply(null,arguments)},Yo=b._emscripten_bind_b2PrismaticJoint_GetLocalAnchorB_0=function(){return b.asm._emscripten_bind_b2PrismaticJoint_GetLocalAnchorB_0.apply(null,arguments)},Zo=b._emscripten_bind_b2RevoluteJointDef___destroy___0=function(){return b.asm._emscripten_bind_b2RevoluteJointDef___destroy___0.apply(null,
arguments)},$o=b._emscripten_bind_b2MotorJointDef_get_correctionFactor_0=function(){return b.asm._emscripten_bind_b2MotorJointDef_get_correctionFactor_0.apply(null,arguments)},ap=b._emscripten_bind_b2ContactFeature_get_typeB_0=function(){return b.asm._emscripten_bind_b2ContactFeature_get_typeB_0.apply(null,arguments)},bp=b._emscripten_bind_b2ContactID_get_key_0=function(){return b.asm._emscripten_bind_b2ContactID_get_key_0.apply(null,arguments)},cp=b._emscripten_bind_b2MotorJoint_GetReactionForce_1=
function(){return b.asm._emscripten_bind_b2MotorJoint_GetReactionForce_1.apply(null,arguments)},dp=b._emscripten_bind_b2Rot_GetAngle_0=function(){return b.asm._emscripten_bind_b2Rot_GetAngle_0.apply(null,arguments)},ep=b._emscripten_bind_b2World_SetAllowSleeping_1=function(){return b.asm._emscripten_bind_b2World_SetAllowSleeping_1.apply(null,arguments)},fp=b._emscripten_bind_b2RopeJoint_GetType_0=function(){return b.asm._emscripten_bind_b2RopeJoint_GetType_0.apply(null,arguments)},gp=b._emscripten_bind_b2MotorJoint_SetAngularOffset_1=
function(){return b.asm._emscripten_bind_b2MotorJoint_SetAngularOffset_1.apply(null,arguments)},hp=b._emscripten_bind_b2MotorJoint_GetLinearOffset_0=function(){return b.asm._emscripten_bind_b2MotorJoint_GetLinearOffset_0.apply(null,arguments)},ip=b._emscripten_bind_b2FrictionJoint_GetCollideConnected_0=function(){return b.asm._emscripten_bind_b2FrictionJoint_GetCollideConnected_0.apply(null,arguments)},jp=b._emscripten_bind_b2WheelJointDef_set_motorSpeed_1=function(){return b.asm._emscripten_bind_b2WheelJointDef_set_motorSpeed_1.apply(null,
arguments)},kp=b._emscripten_bind_b2MotorJoint_GetAnchorA_0=function(){return b.asm._emscripten_bind_b2MotorJoint_GetAnchorA_0.apply(null,arguments)},lp=b._emscripten_bind_b2Fixture_GetDensity_0=function(){return b.asm._emscripten_bind_b2Fixture_GetDensity_0.apply(null,arguments)},mp=b._emscripten_bind_b2MouseJointDef_get_type_0=function(){return b.asm._emscripten_bind_b2MouseJointDef_get_type_0.apply(null,arguments)},np=b._emscripten_bind_b2Vec2_Set_2=function(){return b.asm._emscripten_bind_b2Vec2_Set_2.apply(null,
arguments)},op=b._emscripten_bind_b2WeldJointDef_get_type_0=function(){return b.asm._emscripten_bind_b2WeldJointDef_get_type_0.apply(null,arguments)},pp=b._emscripten_bind_b2MouseJointDef_b2MouseJointDef_0=function(){return b.asm._emscripten_bind_b2MouseJointDef_b2MouseJointDef_0.apply(null,arguments)},qp=b._emscripten_bind_b2Rot_get_s_0=function(){return b.asm._emscripten_bind_b2Rot_get_s_0.apply(null,arguments)},rp=b._emscripten_bind_b2FrictionJoint_SetMaxTorque_1=function(){return b.asm._emscripten_bind_b2FrictionJoint_SetMaxTorque_1.apply(null,
arguments)},sp=b._emscripten_bind_b2MouseJointDef_get_frequencyHz_0=function(){return b.asm._emscripten_bind_b2MouseJointDef_get_frequencyHz_0.apply(null,arguments)},tp=b._emscripten_bind_b2FrictionJoint_SetUserData_1=function(){return b.asm._emscripten_bind_b2FrictionJoint_SetUserData_1.apply(null,arguments)},up=b._emscripten_bind_b2RayCastInput_get_p1_0=function(){return b.asm._emscripten_bind_b2RayCastInput_get_p1_0.apply(null,arguments)},vp=b._emscripten_bind_b2DistanceJointDef_get_collideConnected_0=
function(){return b.asm._emscripten_bind_b2DistanceJointDef_get_collideConnected_0.apply(null,arguments)},wp=b._emscripten_bind_b2RevoluteJointDef_set_referenceAngle_1=function(){return b.asm._emscripten_bind_b2RevoluteJointDef_set_referenceAngle_1.apply(null,arguments)},xp=b._emscripten_bind_b2ContactFeature___destroy___0=function(){return b.asm._emscripten_bind_b2ContactFeature___destroy___0.apply(null,arguments)},yp=b._emscripten_bind_b2Color___destroy___0=function(){return b.asm._emscripten_bind_b2Color___destroy___0.apply(null,
arguments)},zp=b._emscripten_bind_b2DistanceJointDef_set_bodyB_1=function(){return b.asm._emscripten_bind_b2DistanceJointDef_set_bodyB_1.apply(null,arguments)},Ap=b._emscripten_bind_b2ChainShape_get_m_hasPrevVertex_0=function(){return b.asm._emscripten_bind_b2ChainShape_get_m_hasPrevVertex_0.apply(null,arguments)},Bp=b._emscripten_bind_b2PulleyJointDef_b2PulleyJointDef_0=function(){return b.asm._emscripten_bind_b2PulleyJointDef_b2PulleyJointDef_0.apply(null,arguments)},Cp=b._emscripten_bind_b2RevoluteJoint_GetType_0=
function(){return b.asm._emscripten_bind_b2RevoluteJoint_GetType_0.apply(null,arguments)},Dp=b._emscripten_bind_b2MassData_b2MassData_0=function(){return b.asm._emscripten_bind_b2MassData_b2MassData_0.apply(null,arguments)},Ep=b._emscripten_bind_b2Vec3_set_y_1=function(){return b.asm._emscripten_bind_b2Vec3_set_y_1.apply(null,arguments)},Fp=b._emscripten_bind_b2BodyDef_set_angularDamping_1=function(){return b.asm._emscripten_bind_b2BodyDef_set_angularDamping_1.apply(null,arguments)},Gp=b._emscripten_bind_b2AABB_Combine_1=
function(){return b.asm._emscripten_bind_b2AABB_Combine_1.apply(null,arguments)},Hp=b._emscripten_bind_b2WheelJointDef_set_bodyB_1=function(){return b.asm._emscripten_bind_b2WheelJointDef_set_bodyB_1.apply(null,arguments)},Ip=b._emscripten_bind_b2PrismaticJoint_GetBodyA_0=function(){return b.asm._emscripten_bind_b2PrismaticJoint_GetBodyA_0.apply(null,arguments)},Jp=b._emscripten_bind_b2PrismaticJoint_GetMaxMotorForce_0=function(){return b.asm._emscripten_bind_b2PrismaticJoint_GetMaxMotorForce_0.apply(null,
arguments)},Kp=b._emscripten_bind_b2RevoluteJointDef_get_upperAngle_0=function(){return b.asm._emscripten_bind_b2RevoluteJointDef_get_upperAngle_0.apply(null,arguments)},Lp=b._emscripten_bind_b2Body_IsSleepingAllowed_0=function(){return b.asm._emscripten_bind_b2Body_IsSleepingAllowed_0.apply(null,arguments)},Mp=b._emscripten_bind_b2MotorJoint_GetCorrectionFactor_0=function(){return b.asm._emscripten_bind_b2MotorJoint_GetCorrectionFactor_0.apply(null,arguments)},Np=b._emscripten_bind_b2Profile_get_solve_0=
function(){return b.asm._emscripten_bind_b2Profile_get_solve_0.apply(null,arguments)},Op=b._emscripten_bind_JSDestructionListener_SayGoodbyeFixture_1=function(){return b.asm._emscripten_bind_JSDestructionListener_SayGoodbyeFixture_1.apply(null,arguments)},Pp=b._emscripten_bind_b2PolygonShape_GetVertexCount_0=function(){return b.asm._emscripten_bind_b2PolygonShape_GetVertexCount_0.apply(null,arguments)},Qp=b._emscripten_bind_b2Rot_get_c_0=function(){return b.asm._emscripten_bind_b2Rot_get_c_0.apply(null,
arguments)},Rp=b._emscripten_bind_b2AABB_set_lowerBound_1=function(){return b.asm._emscripten_bind_b2AABB_set_lowerBound_1.apply(null,arguments)},Sp=b._emscripten_bind_b2Fixture_SetFilterData_1=function(){return b.asm._emscripten_bind_b2Fixture_SetFilterData_1.apply(null,arguments)},Tp=b._emscripten_bind_b2MouseJoint_SetMaxForce_1=function(){return b.asm._emscripten_bind_b2MouseJoint_SetMaxForce_1.apply(null,arguments)},Up=b._emscripten_bind_b2WheelJoint_IsMotorEnabled_0=function(){return b.asm._emscripten_bind_b2WheelJoint_IsMotorEnabled_0.apply(null,
arguments)},Vp=b._emscripten_bind_b2JointDef_set_userData_1=function(){return b.asm._emscripten_bind_b2JointDef_set_userData_1.apply(null,arguments)},Wp=b._emscripten_bind_b2ManifoldPoint_get_tangentImpulse_0=function(){return b.asm._emscripten_bind_b2ManifoldPoint_get_tangentImpulse_0.apply(null,arguments)},Xp=b._emscripten_bind_b2RevoluteJointDef_get_maxMotorTorque_0=function(){return b.asm._emscripten_bind_b2RevoluteJointDef_get_maxMotorTorque_0.apply(null,arguments)},Yp=b._emscripten_bind_b2WeldJointDef_get_dampingRatio_0=
function(){return b.asm._emscripten_bind_b2WeldJointDef_get_dampingRatio_0.apply(null,arguments)},Zp=b._emscripten_bind_b2Rot_SetIdentity_0=function(){return b.asm._emscripten_bind_b2Rot_SetIdentity_0.apply(null,arguments)},$p=b._emscripten_bind_b2EdgeShape_b2EdgeShape_0=function(){return b.asm._emscripten_bind_b2EdgeShape_b2EdgeShape_0.apply(null,arguments)},aq=b._emscripten_bind_b2FrictionJoint_GetReactionForce_1=function(){return b.asm._emscripten_bind_b2FrictionJoint_GetReactionForce_1.apply(null,
arguments)},bq=b._emscripten_bind_b2MouseJoint_GetUserData_0=function(){return b.asm._emscripten_bind_b2MouseJoint_GetUserData_0.apply(null,arguments)},cq=b._emscripten_bind_b2DistanceJointDef_set_type_1=function(){return b.asm._emscripten_bind_b2DistanceJointDef_set_type_1.apply(null,arguments)},dq=b._emscripten_bind_b2WeldJoint_GetAnchorA_0=function(){return b.asm._emscripten_bind_b2WeldJoint_GetAnchorA_0.apply(null,arguments)},eq=b._emscripten_bind_b2WeldJoint___destroy___0=function(){return b.asm._emscripten_bind_b2WeldJoint___destroy___0.apply(null,
arguments)},fq=b._emscripten_bind_b2Manifold_b2Manifold_0=function(){return b.asm._emscripten_bind_b2Manifold_b2Manifold_0.apply(null,arguments)},gq=b._emscripten_bind_JSContactListener_PostSolve_2=function(){return b.asm._emscripten_bind_JSContactListener_PostSolve_2.apply(null,arguments)},hq=b._emscripten_bind_b2PulleyJoint_GetBodyA_0=function(){return b.asm._emscripten_bind_b2PulleyJoint_GetBodyA_0.apply(null,arguments)},iq=b._emscripten_bind_b2RopeJointDef_get_type_0=function(){return b.asm._emscripten_bind_b2RopeJointDef_get_type_0.apply(null,
arguments)},jq=b._emscripten_bind_b2CircleShape_ComputeMass_2=function(){return b.asm._emscripten_bind_b2CircleShape_ComputeMass_2.apply(null,arguments)},kq=b._emscripten_bind_b2DistanceJointDef_get_localAnchorB_0=function(){return b.asm._emscripten_bind_b2DistanceJointDef_get_localAnchorB_0.apply(null,arguments)},lq=b._emscripten_bind_b2GearJointDef___destroy___0=function(){return b.asm._emscripten_bind_b2GearJointDef___destroy___0.apply(null,arguments)},mq=b._emscripten_bind_b2PulleyJointDef_set_localAnchorA_1=
function(){return b.asm._emscripten_bind_b2PulleyJointDef_set_localAnchorA_1.apply(null,arguments)},nq=b._emscripten_bind_b2CircleShape_TestPoint_2=function(){return b.asm._emscripten_bind_b2CircleShape_TestPoint_2.apply(null,arguments)},oq=b._emscripten_bind_b2MotorJointDef_get_maxTorque_0=function(){return b.asm._emscripten_bind_b2MotorJointDef_get_maxTorque_0.apply(null,arguments)},pq=b._emscripten_bind_b2Body_GetLinearVelocityFromLocalPoint_1=function(){return b.asm._emscripten_bind_b2Body_GetLinearVelocityFromLocalPoint_1.apply(null,
arguments)},qq=b._emscripten_bind_b2FrictionJointDef_set_bodyB_1=function(){return b.asm._emscripten_bind_b2FrictionJointDef_set_bodyB_1.apply(null,arguments)},rq=b._emscripten_bind_b2MouseJoint_GetAnchorB_0=function(){return b.asm._emscripten_bind_b2MouseJoint_GetAnchorB_0.apply(null,arguments)},sq=b._emscripten_bind_b2RopeJointDef_get_localAnchorB_0=function(){return b.asm._emscripten_bind_b2RopeJointDef_get_localAnchorB_0.apply(null,arguments)},tq=b._emscripten_bind_b2GearJoint_GetBodyB_0=function(){return b.asm._emscripten_bind_b2GearJoint_GetBodyB_0.apply(null,
arguments)},uq=b._emscripten_bind_b2ChainShape_Clear_0=function(){return b.asm._emscripten_bind_b2ChainShape_Clear_0.apply(null,arguments)},vq=b._emscripten_bind_b2CircleShape___destroy___0=function(){return b.asm._emscripten_bind_b2CircleShape___destroy___0.apply(null,arguments)},wq=b._emscripten_bind_b2MotorJoint_GetType_0=function(){return b.asm._emscripten_bind_b2MotorJoint_GetType_0.apply(null,arguments)},xq=b._emscripten_bind_b2World_GetContactCount_0=function(){return b.asm._emscripten_bind_b2World_GetContactCount_0.apply(null,
arguments)},yq=b._emscripten_bind_b2Contact_SetRestitution_1=function(){return b.asm._emscripten_bind_b2Contact_SetRestitution_1.apply(null,arguments)},zq=b._emscripten_bind_b2BodyDef_get_angularDamping_0=function(){return b.asm._emscripten_bind_b2BodyDef_get_angularDamping_0.apply(null,arguments)},Aq=b._emscripten_bind_b2EdgeShape_get_m_vertex3_0=function(){return b.asm._emscripten_bind_b2EdgeShape_get_m_vertex3_0.apply(null,arguments)},Bq=b._emscripten_bind_b2MassData_set_center_1=function(){return b.asm._emscripten_bind_b2MassData_set_center_1.apply(null,
arguments)},Cq=b._emscripten_bind_b2Transform_SetIdentity_0=function(){return b.asm._emscripten_bind_b2Transform_SetIdentity_0.apply(null,arguments)},Dq=b._emscripten_bind_b2GearJointDef_set_joint1_1=function(){return b.asm._emscripten_bind_b2GearJointDef_set_joint1_1.apply(null,arguments)},Eq=b._emscripten_bind_b2EdgeShape_set_m_vertex2_1=function(){return b.asm._emscripten_bind_b2EdgeShape_set_m_vertex2_1.apply(null,arguments)},Fq=b._emscripten_bind_b2Contact_SetFriction_1=function(){return b.asm._emscripten_bind_b2Contact_SetFriction_1.apply(null,
arguments)},Gq=b._emscripten_bind_b2MouseJointDef_set_collideConnected_1=function(){return b.asm._emscripten_bind_b2MouseJointDef_set_collideConnected_1.apply(null,arguments)},Hq=b._emscripten_bind_b2ContactFeature_set_indexB_1=function(){return b.asm._emscripten_bind_b2ContactFeature_set_indexB_1.apply(null,arguments)},Iq=b._emscripten_bind_b2Body_GetLinearVelocityFromWorldPoint_1=function(){return b.asm._emscripten_bind_b2Body_GetLinearVelocityFromWorldPoint_1.apply(null,arguments)},Jq=b._emscripten_bind_b2WeldJoint_GetCollideConnected_0=
function(){return b.asm._emscripten_bind_b2WeldJoint_GetCollideConnected_0.apply(null,arguments)},Kq=b._emscripten_bind_b2Mat22_GetInverse_0=function(){return b.asm._emscripten_bind_b2Mat22_GetInverse_0.apply(null,arguments)},Lq=b._emscripten_bind_b2WheelJointDef_set_frequencyHz_1=function(){return b.asm._emscripten_bind_b2WheelJointDef_set_frequencyHz_1.apply(null,arguments)},Mq=b._emscripten_bind_b2World_GetSubStepping_0=function(){return b.asm._emscripten_bind_b2World_GetSubStepping_0.apply(null,
arguments)},Nq=b._emscripten_bind_b2Rot_GetYAxis_0=function(){return b.asm._emscripten_bind_b2Rot_GetYAxis_0.apply(null,arguments)};b._emscripten_get_global_libc=function(){return b.asm._emscripten_get_global_libc.apply(null,arguments)};
var Oq=b._emscripten_bind_b2WheelJointDef_get_localAxisA_0=function(){return b.asm._emscripten_bind_b2WheelJointDef_get_localAxisA_0.apply(null,arguments)},Pq=b._emscripten_bind_b2RopeJoint_GetBodyB_0=function(){return b.asm._emscripten_bind_b2RopeJoint_GetBodyB_0.apply(null,arguments)},Qq=b._emscripten_bind_b2EdgeShape_GetType_0=function(){return b.asm._emscripten_bind_b2EdgeShape_GetType_0.apply(null,arguments)},Rq=b._emscripten_bind_b2Mat22_set_ex_1=function(){return b.asm._emscripten_bind_b2Mat22_set_ex_1.apply(null,
arguments)},Sq=b._emscripten_bind_b2ManifoldPoint___destroy___0=function(){return b.asm._emscripten_bind_b2ManifoldPoint___destroy___0.apply(null,arguments)},Tq=b._emscripten_enum_b2JointType_e_prismaticJoint=function(){return b.asm._emscripten_enum_b2JointType_e_prismaticJoint.apply(null,arguments)},Uq=b._emscripten_bind_b2WeldJointDef_get_referenceAngle_0=function(){return b.asm._emscripten_bind_b2WeldJointDef_get_referenceAngle_0.apply(null,arguments)},Vq=b._emscripten_bind_b2Vec2_Length_0=function(){return b.asm._emscripten_bind_b2Vec2_Length_0.apply(null,
arguments)},Wq=b._emscripten_bind_b2Vec2_SetZero_0=function(){return b.asm._emscripten_bind_b2Vec2_SetZero_0.apply(null,arguments)},Xq=b._emscripten_bind_b2RopeJoint___destroy___0=function(){return b.asm._emscripten_bind_b2RopeJoint___destroy___0.apply(null,arguments)},Yq=b._emscripten_bind_b2World_DestroyJoint_1=function(){return b.asm._emscripten_bind_b2World_DestroyJoint_1.apply(null,arguments)},Zq=b._emscripten_bind_b2JointDef_set_bodyB_1=function(){return b.asm._emscripten_bind_b2JointDef_set_bodyB_1.apply(null,
arguments)},$q=b._emscripten_bind_b2Mat22_Set_2=function(){return b.asm._emscripten_bind_b2Mat22_Set_2.apply(null,arguments)},ar=b._emscripten_bind_b2JointEdge_set_next_1=function(){return b.asm._emscripten_bind_b2JointEdge_set_next_1.apply(null,arguments)},br=b._emscripten_bind_b2WeldJoint_GetAnchorB_0=function(){return b.asm._emscripten_bind_b2WeldJoint_GetAnchorB_0.apply(null,arguments)},cr=b._emscripten_enum_b2DrawFlag_e_aabbBit=function(){return b.asm._emscripten_enum_b2DrawFlag_e_aabbBit.apply(null,
arguments)},dr=b._emscripten_bind_b2EdgeShape_ComputeAABB_3=function(){return b.asm._emscripten_bind_b2EdgeShape_ComputeAABB_3.apply(null,arguments)},er=b._emscripten_bind_b2PolygonShape_set_m_centroid_1=function(){return b.asm._emscripten_bind_b2PolygonShape_set_m_centroid_1.apply(null,arguments)},fr=b._emscripten_bind_b2WheelJointDef_set_collideConnected_1=function(){return b.asm._emscripten_bind_b2WheelJointDef_set_collideConnected_1.apply(null,arguments)},gr=b._emscripten_bind_b2World_GetJointList_0=
function(){return b.asm._emscripten_bind_b2World_GetJointList_0.apply(null,arguments)},hr=b._emscripten_bind_b2MotorJointDef_get_type_0=function(){return b.asm._emscripten_bind_b2MotorJointDef_get_type_0.apply(null,arguments)},ir=b._emscripten_bind_b2RopeJoint_GetLocalAnchorA_0=function(){return b.asm._emscripten_bind_b2RopeJoint_GetLocalAnchorA_0.apply(null,arguments)},jr=b._emscripten_bind_b2BodyDef_set_linearDamping_1=function(){return b.asm._emscripten_bind_b2BodyDef_set_linearDamping_1.apply(null,
arguments)},kr=b._emscripten_bind_b2FrictionJoint_GetUserData_0=function(){return b.asm._emscripten_bind_b2FrictionJoint_GetUserData_0.apply(null,arguments)},lr=b._emscripten_bind_b2Shape_TestPoint_2=function(){return b.asm._emscripten_bind_b2Shape_TestPoint_2.apply(null,arguments)},mr=b._emscripten_bind_b2Manifold_set_localNormal_1=function(){return b.asm._emscripten_bind_b2Manifold_set_localNormal_1.apply(null,arguments)},nr=b._emscripten_bind_b2JointDef_get_bodyA_0=function(){return b.asm._emscripten_bind_b2JointDef_get_bodyA_0.apply(null,
arguments)},or=b._emscripten_bind_b2Body_GetLinearDamping_0=function(){return b.asm._emscripten_bind_b2Body_GetLinearDamping_0.apply(null,arguments)},pr=b._emscripten_bind_b2WeldJointDef_set_frequencyHz_1=function(){return b.asm._emscripten_bind_b2WeldJointDef_set_frequencyHz_1.apply(null,arguments)},qr=b._emscripten_bind_b2BodyDef_set_userData_1=function(){return b.asm._emscripten_bind_b2BodyDef_set_userData_1.apply(null,arguments)},rr=b._emscripten_bind_b2PrismaticJointDef_set_enableMotor_1=function(){return b.asm._emscripten_bind_b2PrismaticJointDef_set_enableMotor_1.apply(null,
arguments)},sr=b._emscripten_bind_b2Vec2_Skew_0=function(){return b.asm._emscripten_bind_b2Vec2_Skew_0.apply(null,arguments)},tr=b._emscripten_bind_b2MouseJoint_GetDampingRatio_0=function(){return b.asm._emscripten_bind_b2MouseJoint_GetDampingRatio_0.apply(null,arguments)},ur=b._emscripten_bind_b2RevoluteJoint_GetAnchorA_0=function(){return b.asm._emscripten_bind_b2RevoluteJoint_GetAnchorA_0.apply(null,arguments)},vr=b._emscripten_bind_b2ContactFeature_set_typeB_1=function(){return b.asm._emscripten_bind_b2ContactFeature_set_typeB_1.apply(null,
arguments)},wr=b._emscripten_bind_b2WheelJoint_GetAnchorA_0=function(){return b.asm._emscripten_bind_b2WheelJoint_GetAnchorA_0.apply(null,arguments)},xr=b._emscripten_bind_b2MotorJoint_GetMaxTorque_0=function(){return b.asm._emscripten_bind_b2MotorJoint_GetMaxTorque_0.apply(null,arguments)};b.setThrew=function(){return b.asm.setThrew.apply(null,arguments)};
var yr=b._emscripten_bind_b2PrismaticJointDef_set_userData_1=function(){return b.asm._emscripten_bind_b2PrismaticJointDef_set_userData_1.apply(null,arguments)},zr=b._emscripten_bind_b2FrictionJointDef_set_type_1=function(){return b.asm._emscripten_bind_b2FrictionJointDef_set_type_1.apply(null,arguments)},Ar=b._emscripten_bind_b2FrictionJointDef_Initialize_3=function(){return b.asm._emscripten_bind_b2FrictionJointDef_Initialize_3.apply(null,arguments)},Fb=b._sbrk=function(){return b.asm._sbrk.apply(null,
arguments)},Br=b._emscripten_bind_b2FrictionJointDef_get_collideConnected_0=function(){return b.asm._emscripten_bind_b2FrictionJointDef_get_collideConnected_0.apply(null,arguments)},Ab=b._memcpy=function(){return b.asm._memcpy.apply(null,arguments)},Cr=b._emscripten_bind_b2FrictionJoint_GetAnchorA_0=function(){return b.asm._emscripten_bind_b2FrictionJoint_GetAnchorA_0.apply(null,arguments)},Dr=b._emscripten_enum_b2DrawFlag_e_pairBit=function(){return b.asm._emscripten_enum_b2DrawFlag_e_pairBit.apply(null,
arguments)},Er=b._emscripten_bind_b2MassData_get_I_0=function(){return b.asm._emscripten_bind_b2MassData_get_I_0.apply(null,arguments)},Fr=b._emscripten_bind_b2WheelJointDef_get_motorSpeed_0=function(){return b.asm._emscripten_bind_b2WheelJointDef_get_motorSpeed_0.apply(null,arguments)},Gr=b._emscripten_bind_b2Filter_set_maskBits_1=function(){return b.asm._emscripten_bind_b2Filter_set_maskBits_1.apply(null,arguments)},Hr=b._emscripten_bind_b2WheelJoint_GetCollideConnected_0=function(){return b.asm._emscripten_bind_b2WheelJoint_GetCollideConnected_0.apply(null,
arguments)},Ir=b._emscripten_bind_b2EdgeShape_get_m_radius_0=function(){return b.asm._emscripten_bind_b2EdgeShape_get_m_radius_0.apply(null,arguments)},Jr=b._emscripten_bind_b2World_GetTreeHeight_0=function(){return b.asm._emscripten_bind_b2World_GetTreeHeight_0.apply(null,arguments)},Kr=b._emscripten_bind_b2Mat22_b2Mat22_2=function(){return b.asm._emscripten_bind_b2Mat22_b2Mat22_2.apply(null,arguments)},Lr=b._emscripten_bind_b2PrismaticJoint_GetNext_0=function(){return b.asm._emscripten_bind_b2PrismaticJoint_GetNext_0.apply(null,
arguments)},Mr=b._emscripten_bind_b2Mat22_b2Mat22_0=function(){return b.asm._emscripten_bind_b2Mat22_b2Mat22_0.apply(null,arguments)},Nr=b._emscripten_bind_b2PrismaticJointDef_get_bodyA_0=function(){return b.asm._emscripten_bind_b2PrismaticJointDef_get_bodyA_0.apply(null,arguments)},Or=b._emscripten_bind_b2RopeJointDef_set_localAnchorA_1=function(){return b.asm._emscripten_bind_b2RopeJointDef_set_localAnchorA_1.apply(null,arguments)},Pr=b._emscripten_bind_b2ChainShape_set_m_hasNextVertex_1=function(){return b.asm._emscripten_bind_b2ChainShape_set_m_hasNextVertex_1.apply(null,
arguments)},Qr=b._emscripten_bind_b2Mat22_set_ey_1=function(){return b.asm._emscripten_bind_b2Mat22_set_ey_1.apply(null,arguments)},Rr=b._emscripten_bind_b2MotorJointDef_set_angularOffset_1=function(){return b.asm._emscripten_bind_b2MotorJointDef_set_angularOffset_1.apply(null,arguments)},Sr=b._emscripten_bind_b2CircleShape_get_m_type_0=function(){return b.asm._emscripten_bind_b2CircleShape_get_m_type_0.apply(null,arguments)},Tr=b._emscripten_bind_b2Body_GetType_0=function(){return b.asm._emscripten_bind_b2Body_GetType_0.apply(null,
arguments)},Ur=b._emscripten_bind_b2ContactEdge_b2ContactEdge_0=function(){return b.asm._emscripten_bind_b2ContactEdge_b2ContactEdge_0.apply(null,arguments)},Vr=b._emscripten_bind_b2BodyDef___destroy___0=function(){return b.asm._emscripten_bind_b2BodyDef___destroy___0.apply(null,arguments)},Wr=b._emscripten_bind_b2FrictionJointDef_set_maxTorque_1=function(){return b.asm._emscripten_bind_b2FrictionJointDef_set_maxTorque_1.apply(null,arguments)},Qa=b._free=function(){return b.asm._free.apply(null,arguments)},
Xr=b._emscripten_bind_b2PulleyJointDef_set_groundAnchorB_1=function(){return b.asm._emscripten_bind_b2PulleyJointDef_set_groundAnchorB_1.apply(null,arguments)},Yr=b._emscripten_bind_b2RevoluteJointDef_get_collideConnected_0=function(){return b.asm._emscripten_bind_b2RevoluteJointDef_get_collideConnected_0.apply(null,arguments)},Zr=b._emscripten_bind_b2DistanceJointDef_set_bodyA_1=function(){return b.asm._emscripten_bind_b2DistanceJointDef_set_bodyA_1.apply(null,arguments)};
b.runPostSets=function(){return b.asm.runPostSets.apply(null,arguments)};
var $r=b._emscripten_bind_b2RevoluteJoint_SetLimits_2=function(){return b.asm._emscripten_bind_b2RevoluteJoint_SetLimits_2.apply(null,arguments)},as=b._emscripten_bind_b2WeldJointDef_set_type_1=function(){return b.asm._emscripten_bind_b2WeldJointDef_set_type_1.apply(null,arguments)},bs=b._emscripten_bind_b2MotorJointDef___destroy___0=function(){return b.asm._emscripten_bind_b2MotorJointDef___destroy___0.apply(null,arguments)},cs=b._emscripten_bind_b2FrictionJoint_GetNext_0=function(){return b.asm._emscripten_bind_b2FrictionJoint_GetNext_0.apply(null,
arguments)},ds=b._emscripten_bind_b2Shape_set_m_type_1=function(){return b.asm._emscripten_bind_b2Shape_set_m_type_1.apply(null,arguments)},es=b._emscripten_bind_b2WheelJoint_GetJointTranslation_0=function(){return b.asm._emscripten_bind_b2WheelJoint_GetJointTranslation_0.apply(null,arguments)},gs=b._emscripten_bind_b2WheelJoint_GetMotorTorque_1=function(){return b.asm._emscripten_bind_b2WheelJoint_GetMotorTorque_1.apply(null,arguments)},hs=b._emscripten_bind_b2RopeJoint_SetUserData_1=function(){return b.asm._emscripten_bind_b2RopeJoint_SetUserData_1.apply(null,
arguments)},is=b._emscripten_bind_b2RopeJointDef___destroy___0=function(){return b.asm._emscripten_bind_b2RopeJointDef___destroy___0.apply(null,arguments)},js=b._emscripten_bind_b2WheelJoint_IsActive_0=function(){return b.asm._emscripten_bind_b2WheelJoint_IsActive_0.apply(null,arguments)},ks=b._emscripten_bind_b2PrismaticJointDef_get_enableMotor_0=function(){return b.asm._emscripten_bind_b2PrismaticJointDef_get_enableMotor_0.apply(null,arguments)},ls=b._emscripten_bind_b2MotorJointDef_set_bodyB_1=
function(){return b.asm._emscripten_bind_b2MotorJointDef_set_bodyB_1.apply(null,arguments)},ms=b._emscripten_bind_JSDestructionListener___destroy___0=function(){return b.asm._emscripten_bind_JSDestructionListener___destroy___0.apply(null,arguments)},ns=b._emscripten_bind_b2Transform_b2Transform_2=function(){return b.asm._emscripten_bind_b2Transform_b2Transform_2.apply(null,arguments)},ps=b._emscripten_bind_b2WeldJoint_GetReactionForce_1=function(){return b.asm._emscripten_bind_b2WeldJoint_GetReactionForce_1.apply(null,
arguments)},qs=b._emscripten_bind_b2ChainShape_RayCast_4=function(){return b.asm._emscripten_bind_b2ChainShape_RayCast_4.apply(null,arguments)},rs=b._emscripten_bind_b2Vec2_set_y_1=function(){return b.asm._emscripten_bind_b2Vec2_set_y_1.apply(null,arguments)},ss=b._emscripten_bind_b2PrismaticJoint_SetMotorSpeed_1=function(){return b.asm._emscripten_bind_b2PrismaticJoint_SetMotorSpeed_1.apply(null,arguments)},ts=b._emscripten_bind_b2ContactID_get_cf_0=function(){return b.asm._emscripten_bind_b2ContactID_get_cf_0.apply(null,
arguments)},us=b._emscripten_bind_b2DistanceJointDef_Initialize_4=function(){return b.asm._emscripten_bind_b2DistanceJointDef_Initialize_4.apply(null,arguments)},vs=b._emscripten_bind_b2ChainShape_get_m_radius_0=function(){return b.asm._emscripten_bind_b2ChainShape_get_m_radius_0.apply(null,arguments)},xs=b._emscripten_bind_b2WeldJointDef_set_localAnchorB_1=function(){return b.asm._emscripten_bind_b2WeldJointDef_set_localAnchorB_1.apply(null,arguments)},ys=b._emscripten_bind_b2ChainShape_set_m_radius_1=
function(){return b.asm._emscripten_bind_b2ChainShape_set_m_radius_1.apply(null,arguments)},zs=b._emscripten_bind_b2DistanceJoint_GetReactionTorque_1=function(){return b.asm._emscripten_bind_b2DistanceJoint_GetReactionTorque_1.apply(null,arguments)},As=b._emscripten_bind_b2World_Dump_0=function(){return b.asm._emscripten_bind_b2World_Dump_0.apply(null,arguments)},Bs=b._emscripten_bind_b2RevoluteJoint_GetLocalAnchorB_0=function(){return b.asm._emscripten_bind_b2RevoluteJoint_GetLocalAnchorB_0.apply(null,
arguments)},Cs=b._emscripten_bind_JSContactFilter_JSContactFilter_0=function(){return b.asm._emscripten_bind_JSContactFilter_JSContactFilter_0.apply(null,arguments)},Ds=b._emscripten_bind_b2Profile_set_solve_1=function(){return b.asm._emscripten_bind_b2Profile_set_solve_1.apply(null,arguments)},Es=b._emscripten_bind_b2FixtureDef_set_density_1=function(){return b.asm._emscripten_bind_b2FixtureDef_set_density_1.apply(null,arguments)},Fs=b._emscripten_bind_b2WeldJoint_GetDampingRatio_0=function(){return b.asm._emscripten_bind_b2WeldJoint_GetDampingRatio_0.apply(null,
arguments)},Gs=b._emscripten_bind_b2Color_get_b_0=function(){return b.asm._emscripten_bind_b2Color_get_b_0.apply(null,arguments)},Hs=b._emscripten_bind_b2MouseJointDef_get_userData_0=function(){return b.asm._emscripten_bind_b2MouseJointDef_get_userData_0.apply(null,arguments)},Is=b._emscripten_bind_b2CircleShape_ComputeAABB_3=function(){return b.asm._emscripten_bind_b2CircleShape_ComputeAABB_3.apply(null,arguments)},Js=b._emscripten_bind_b2RopeJoint_GetReactionForce_1=function(){return b.asm._emscripten_bind_b2RopeJoint_GetReactionForce_1.apply(null,
arguments)},Ks=b._emscripten_bind_b2PrismaticJointDef_get_enableLimit_0=function(){return b.asm._emscripten_bind_b2PrismaticJointDef_get_enableLimit_0.apply(null,arguments)},Ls=b._emscripten_bind_b2ManifoldPoint_set_localPoint_1=function(){return b.asm._emscripten_bind_b2ManifoldPoint_set_localPoint_1.apply(null,arguments)},Ms=b._emscripten_bind_b2Fixture_GetFilterData_0=function(){return b.asm._emscripten_bind_b2Fixture_GetFilterData_0.apply(null,arguments)},Ns=b._emscripten_bind_b2World_GetBodyList_0=
function(){return b.asm._emscripten_bind_b2World_GetBodyList_0.apply(null,arguments)},Os=b._emscripten_bind_b2Body_GetJointList_0=function(){return b.asm._emscripten_bind_b2Body_GetJointList_0.apply(null,arguments)},Ps=b._emscripten_bind_b2Joint_GetNext_0=function(){return b.asm._emscripten_bind_b2Joint_GetNext_0.apply(null,arguments)},Qs=b._emscripten_bind_b2Joint_GetType_0=function(){return b.asm._emscripten_bind_b2Joint_GetType_0.apply(null,arguments)},Rs=b._emscripten_bind_b2World_RayCast_3=function(){return b.asm._emscripten_bind_b2World_RayCast_3.apply(null,
arguments)},Ss=b._emscripten_bind_b2MassData_set_I_1=function(){return b.asm._emscripten_bind_b2MassData_set_I_1.apply(null,arguments)},Ts=b._emscripten_bind_b2MassData___destroy___0=function(){return b.asm._emscripten_bind_b2MassData___destroy___0.apply(null,arguments)},Us=b._emscripten_bind_b2Profile_get_collide_0=function(){return b.asm._emscripten_bind_b2Profile_get_collide_0.apply(null,arguments)},Vs=b._emscripten_bind_b2Color_b2Color_3=function(){return b.asm._emscripten_bind_b2Color_b2Color_3.apply(null,
arguments)},Ws=b._emscripten_bind_b2Color_b2Color_0=function(){return b.asm._emscripten_bind_b2Color_b2Color_0.apply(null,arguments)},Xs=b._emscripten_bind_b2WheelJointDef_get_frequencyHz_0=function(){return b.asm._emscripten_bind_b2WheelJointDef_get_frequencyHz_0.apply(null,arguments)},Ys=b._emscripten_bind_b2WeldJointDef_Initialize_3=function(){return b.asm._emscripten_bind_b2WeldJointDef_Initialize_3.apply(null,arguments)},Zs=b._emscripten_bind_b2RevoluteJoint_GetMotorTorque_1=function(){return b.asm._emscripten_bind_b2RevoluteJoint_GetMotorTorque_1.apply(null,
arguments)},$s=b._emscripten_enum_b2JointType_e_gearJoint=function(){return b.asm._emscripten_enum_b2JointType_e_gearJoint.apply(null,arguments)},at=b._emscripten_bind_b2FixtureDef_get_friction_0=function(){return b.asm._emscripten_bind_b2FixtureDef_get_friction_0.apply(null,arguments)},bt=b._emscripten_bind_b2PrismaticJointDef_set_localAnchorA_1=function(){return b.asm._emscripten_bind_b2PrismaticJointDef_set_localAnchorA_1.apply(null,arguments)},ct=b._emscripten_bind_b2Contact_GetManifold_0=function(){return b.asm._emscripten_bind_b2Contact_GetManifold_0.apply(null,
arguments)},dt=b._emscripten_bind_b2QueryCallback___destroy___0=function(){return b.asm._emscripten_bind_b2QueryCallback___destroy___0.apply(null,arguments)},et=b._emscripten_bind_b2WeldJointDef_get_localAnchorA_0=function(){return b.asm._emscripten_bind_b2WeldJointDef_get_localAnchorA_0.apply(null,arguments)},ft=b._emscripten_bind_b2MouseJoint_SetUserData_1=function(){return b.asm._emscripten_bind_b2MouseJoint_SetUserData_1.apply(null,arguments)},gt=b._emscripten_bind_b2MotorJointDef_set_correctionFactor_1=
function(){return b.asm._emscripten_bind_b2MotorJointDef_set_correctionFactor_1.apply(null,arguments)},ht=b._emscripten_bind_b2ChainShape_GetChildEdge_2=function(){return b.asm._emscripten_bind_b2ChainShape_GetChildEdge_2.apply(null,arguments)},it=b._emscripten_enum_b2JointType_e_mouseJoint=function(){return b.asm._emscripten_enum_b2JointType_e_mouseJoint.apply(null,arguments)},jt=b._emscripten_bind_b2MotorJointDef_get_angularOffset_0=function(){return b.asm._emscripten_bind_b2MotorJointDef_get_angularOffset_0.apply(null,
arguments)},kt=b._emscripten_bind_b2WheelJoint_SetUserData_1=function(){return b.asm._emscripten_bind_b2WheelJoint_SetUserData_1.apply(null,arguments)},lt=b._emscripten_bind_b2Body_ApplyForce_3=function(){return b.asm._emscripten_bind_b2Body_ApplyForce_3.apply(null,arguments)},mt=b._emscripten_bind_b2ChainShape_set_m_count_1=function(){return b.asm._emscripten_bind_b2ChainShape_set_m_count_1.apply(null,arguments)},nt=b._emscripten_bind_b2DistanceJoint_GetCollideConnected_0=function(){return b.asm._emscripten_bind_b2DistanceJoint_GetCollideConnected_0.apply(null,
arguments)},ot=b._emscripten_bind_b2RevoluteJoint_IsMotorEnabled_0=function(){return b.asm._emscripten_bind_b2RevoluteJoint_IsMotorEnabled_0.apply(null,arguments)},pt=b._emscripten_bind_b2PolygonShape_GetVertex_1=function(){return b.asm._emscripten_bind_b2PolygonShape_GetVertex_1.apply(null,arguments)},qt=b._emscripten_bind_b2World_SetGravity_1=function(){return b.asm._emscripten_bind_b2World_SetGravity_1.apply(null,arguments)},rt=b._emscripten_bind_b2MouseJointDef_get_collideConnected_0=function(){return b.asm._emscripten_bind_b2MouseJointDef_get_collideConnected_0.apply(null,
arguments)},Ib=b._llvm_bswap_i32=function(){return b.asm._llvm_bswap_i32.apply(null,arguments)},st=b._emscripten_bind_b2Fixture_SetRestitution_1=function(){return b.asm._emscripten_bind_b2Fixture_SetRestitution_1.apply(null,arguments)},tt=b._emscripten_bind_b2Body_GetTransform_0=function(){return b.asm._emscripten_bind_b2Body_GetTransform_0.apply(null,arguments)},ut=b._emscripten_enum_b2ShapeType_e_typeCount=function(){return b.asm._emscripten_enum_b2ShapeType_e_typeCount.apply(null,arguments)},vt=
b._emscripten_bind_b2Mat33_set_ex_1=function(){return b.asm._emscripten_bind_b2Mat33_set_ex_1.apply(null,arguments)},wt=b._emscripten_bind_b2PulleyJointDef_get_localAnchorB_0=function(){return b.asm._emscripten_bind_b2PulleyJointDef_get_localAnchorB_0.apply(null,arguments)},xt=b._emscripten_bind_b2RevoluteJointDef_get_bodyA_0=function(){return b.asm._emscripten_bind_b2RevoluteJointDef_get_bodyA_0.apply(null,arguments)},yt=b._emscripten_bind_b2PrismaticJoint_GetBodyB_0=function(){return b.asm._emscripten_bind_b2PrismaticJoint_GetBodyB_0.apply(null,
arguments)},zt=b._emscripten_bind_b2WheelJointDef_set_bodyA_1=function(){return b.asm._emscripten_bind_b2WheelJointDef_set_bodyA_1.apply(null,arguments)},At=b._emscripten_bind_b2MotorJointDef_set_maxForce_1=function(){return b.asm._emscripten_bind_b2MotorJointDef_set_maxForce_1.apply(null,arguments)},Bt=b._emscripten_bind_b2BodyDef_get_angle_0=function(){return b.asm._emscripten_bind_b2BodyDef_get_angle_0.apply(null,arguments)},Ct=b._emscripten_bind_b2FixtureDef_get_shape_0=function(){return b.asm._emscripten_bind_b2FixtureDef_get_shape_0.apply(null,
arguments)},Dt=b._emscripten_bind_b2Body_SetAngularVelocity_1=function(){return b.asm._emscripten_bind_b2Body_SetAngularVelocity_1.apply(null,arguments)},Et=b._emscripten_bind_b2WeldJointDef_get_userData_0=function(){return b.asm._emscripten_bind_b2WeldJointDef_get_userData_0.apply(null,arguments)},Ft=b._emscripten_bind_b2FrictionJoint_SetMaxForce_1=function(){return b.asm._emscripten_bind_b2FrictionJoint_SetMaxForce_1.apply(null,arguments)},Gt=b._emscripten_bind_b2Mat33_b2Mat33_3=function(){return b.asm._emscripten_bind_b2Mat33_b2Mat33_3.apply(null,
arguments)},Ht=b._emscripten_bind_b2Vec3_get_y_0=function(){return b.asm._emscripten_bind_b2Vec3_get_y_0.apply(null,arguments)},It=b._emscripten_bind_b2JointDef_get_type_0=function(){return b.asm._emscripten_bind_b2JointDef_get_type_0.apply(null,arguments)},Jt=b._emscripten_bind_JSQueryCallback_ReportFixture_1=function(){return b.asm._emscripten_bind_JSQueryCallback_ReportFixture_1.apply(null,arguments)},Kt=b._emscripten_bind_b2PulleyJoint_GetCollideConnected_0=function(){return b.asm._emscripten_bind_b2PulleyJoint_GetCollideConnected_0.apply(null,
arguments)},Lt=b._emscripten_bind_b2Body_CreateFixture_1=function(){return b.asm._emscripten_bind_b2Body_CreateFixture_1.apply(null,arguments)},Mt=b._emscripten_bind_JSDraw_JSDraw_0=function(){return b.asm._emscripten_bind_JSDraw_JSDraw_0.apply(null,arguments)},Nt=b._emscripten_bind_b2MouseJoint_GetAnchorA_0=function(){return b.asm._emscripten_bind_b2MouseJoint_GetAnchorA_0.apply(null,arguments)},Ot=b._emscripten_bind_b2Transform_get_p_0=function(){return b.asm._emscripten_bind_b2Transform_get_p_0.apply(null,
arguments)},Pt=b._emscripten_enum_b2BodyType_b2_dynamicBody=function(){return b.asm._emscripten_enum_b2BodyType_b2_dynamicBody.apply(null,arguments)},Qt=b._emscripten_bind_b2World_GetProfile_0=function(){return b.asm._emscripten_bind_b2World_GetProfile_0.apply(null,arguments)},Rt=b._emscripten_bind_b2DistanceJointDef___destroy___0=function(){return b.asm._emscripten_bind_b2DistanceJointDef___destroy___0.apply(null,arguments)},St=b._emscripten_bind_b2GearJointDef_set_bodyA_1=function(){return b.asm._emscripten_bind_b2GearJointDef_set_bodyA_1.apply(null,
arguments)},Tt=b._emscripten_bind_b2JointDef_set_type_1=function(){return b.asm._emscripten_bind_b2JointDef_set_type_1.apply(null,arguments)},Ut=b._emscripten_bind_b2ContactEdge_set_contact_1=function(){return b.asm._emscripten_bind_b2ContactEdge_set_contact_1.apply(null,arguments)},Vt=b._emscripten_bind_b2MotorJointDef_get_userData_0=function(){return b.asm._emscripten_bind_b2MotorJointDef_get_userData_0.apply(null,arguments)},Wt=b._emscripten_bind_b2World_GetContactList_0=function(){return b.asm._emscripten_bind_b2World_GetContactList_0.apply(null,
arguments)},Xt=b._emscripten_bind_b2Mat33_set_ez_1=function(){return b.asm._emscripten_bind_b2Mat33_set_ez_1.apply(null,arguments)},Yt=b._emscripten_bind_b2JointEdge_b2JointEdge_0=function(){return b.asm._emscripten_bind_b2JointEdge_b2JointEdge_0.apply(null,arguments)},Zt=b._emscripten_bind_b2FrictionJointDef_get_bodyA_0=function(){return b.asm._emscripten_bind_b2FrictionJointDef_get_bodyA_0.apply(null,arguments)},$t=b._emscripten_bind_b2WheelJointDef_get_type_0=function(){return b.asm._emscripten_bind_b2WheelJointDef_get_type_0.apply(null,
arguments)},au=b._emscripten_bind_b2RevoluteJoint_GetReactionForce_1=function(){return b.asm._emscripten_bind_b2RevoluteJoint_GetReactionForce_1.apply(null,arguments)},bu=b._emscripten_bind_b2PulleyJointDef_set_collideConnected_1=function(){return b.asm._emscripten_bind_b2PulleyJointDef_set_collideConnected_1.apply(null,arguments)},cu=b._emscripten_bind_b2RopeJoint_GetCollideConnected_0=function(){return b.asm._emscripten_bind_b2RopeJoint_GetCollideConnected_0.apply(null,arguments)},du=b._emscripten_bind_b2GearJointDef_set_joint2_1=
function(){return b.asm._emscripten_bind_b2GearJointDef_set_joint2_1.apply(null,arguments)},eu=b._emscripten_bind_b2EdgeShape_set_m_vertex3_1=function(){return b.asm._emscripten_bind_b2EdgeShape_set_m_vertex3_1.apply(null,arguments)},fu=b._emscripten_bind_b2GearJoint_GetAnchorB_0=function(){return b.asm._emscripten_bind_b2GearJoint_GetAnchorB_0.apply(null,arguments)},gu=b._emscripten_bind_b2RopeJoint_IsActive_0=function(){return b.asm._emscripten_bind_b2RopeJoint_IsActive_0.apply(null,arguments)},
hu=b._emscripten_bind_b2Fixture_GetFriction_0=function(){return b.asm._emscripten_bind_b2Fixture_GetFriction_0.apply(null,arguments)},iu=b._emscripten_bind_b2Fixture_GetNext_0=function(){return b.asm._emscripten_bind_b2Fixture_GetNext_0.apply(null,arguments)},ju=b._emscripten_bind_b2RopeJointDef_get_bodyA_0=function(){return b.asm._emscripten_bind_b2RopeJointDef_get_bodyA_0.apply(null,arguments)},ku=b._emscripten_bind_b2WeldJointDef_get_localAnchorB_0=function(){return b.asm._emscripten_bind_b2WeldJointDef_get_localAnchorB_0.apply(null,
arguments)},lu=b._emscripten_bind_b2WeldJointDef_set_referenceAngle_1=function(){return b.asm._emscripten_bind_b2WeldJointDef_set_referenceAngle_1.apply(null,arguments)},mu=b._emscripten_bind_b2DistanceJointDef_set_localAnchorB_1=function(){return b.asm._emscripten_bind_b2DistanceJointDef_set_localAnchorB_1.apply(null,arguments)},nu=b._emscripten_bind_b2Mat33_SetZero_0=function(){return b.asm._emscripten_bind_b2Mat33_SetZero_0.apply(null,arguments)},ou=b._emscripten_bind_b2MotorJointDef_get_bodyB_0=
function(){return b.asm._emscripten_bind_b2MotorJointDef_get_bodyB_0.apply(null,arguments)},pu=b._emscripten_bind_b2WheelJointDef_b2WheelJointDef_0=function(){return b.asm._emscripten_bind_b2WheelJointDef_b2WheelJointDef_0.apply(null,arguments)},qu=b._emscripten_bind_b2PrismaticJointDef_get_localAxisA_0=function(){return b.asm._emscripten_bind_b2PrismaticJointDef_get_localAxisA_0.apply(null,arguments)},ru=b._emscripten_bind_b2Mat22_get_ey_0=function(){return b.asm._emscripten_bind_b2Mat22_get_ey_0.apply(null,
arguments)},su=b._emscripten_bind_b2Mat22_SetIdentity_0=function(){return b.asm._emscripten_bind_b2Mat22_SetIdentity_0.apply(null,arguments)},tu=b._emscripten_bind_b2Joint_IsActive_0=function(){return b.asm._emscripten_bind_b2Joint_IsActive_0.apply(null,arguments)},uu=b._emscripten_bind_b2PulleyJoint_GetReactionForce_1=function(){return b.asm._emscripten_bind_b2PulleyJoint_GetReactionForce_1.apply(null,arguments)},vu=b._emscripten_bind_b2Shape_get_m_radius_0=function(){return b.asm._emscripten_bind_b2Shape_get_m_radius_0.apply(null,
arguments)},wu=b._emscripten_bind_b2Mat22_b2Mat22_4=function(){return b.asm._emscripten_bind_b2Mat22_b2Mat22_4.apply(null,arguments)},xu=b._emscripten_bind_b2PrismaticJointDef_set_localAxisA_1=function(){return b.asm._emscripten_bind_b2PrismaticJointDef_set_localAxisA_1.apply(null,arguments)},yu=b._emscripten_bind_b2PolygonShape_SetAsBox_4=function(){return b.asm._emscripten_bind_b2PolygonShape_SetAsBox_4.apply(null,arguments)},zu=b._emscripten_bind_b2EdgeShape_set_m_vertex1_1=function(){return b.asm._emscripten_bind_b2EdgeShape_set_m_vertex1_1.apply(null,
arguments)},Au=b._emscripten_bind_b2Body_GetWorld_0=function(){return b.asm._emscripten_bind_b2Body_GetWorld_0.apply(null,arguments)},Bu=b._emscripten_enum_b2LimitState_e_inactiveLimit=function(){return b.asm._emscripten_enum_b2LimitState_e_inactiveLimit.apply(null,arguments)},Cu=b._emscripten_bind_b2Vec2_set_x_1=function(){return b.asm._emscripten_bind_b2Vec2_set_x_1.apply(null,arguments)},Du=b._emscripten_bind_b2Body_SetAwake_1=function(){return b.asm._emscripten_bind_b2Body_SetAwake_1.apply(null,
arguments)},Eu=b._emscripten_bind_b2WeldJoint_GetLocalAnchorA_0=function(){return b.asm._emscripten_bind_b2WeldJoint_GetLocalAnchorA_0.apply(null,arguments)},Fu=b._emscripten_bind_b2Vec2___destroy___0=function(){return b.asm._emscripten_bind_b2Vec2___destroy___0.apply(null,arguments)},Gu=b._emscripten_enum_b2ShapeType_e_polygon=function(){return b.asm._emscripten_enum_b2ShapeType_e_polygon.apply(null,arguments)},Hu=b._emscripten_bind_b2Body_GetInertia_0=function(){return b.asm._emscripten_bind_b2Body_GetInertia_0.apply(null,
arguments)},Iu=b._emscripten_bind_b2PulleyJoint_GetAnchorA_0=function(){return b.asm._emscripten_bind_b2PulleyJoint_GetAnchorA_0.apply(null,arguments)},Ju=b._emscripten_bind_b2BodyDef_get_linearVelocity_0=function(){return b.asm._emscripten_bind_b2BodyDef_get_linearVelocity_0.apply(null,arguments)},Ku=b._emscripten_bind_b2DistanceJointDef_get_bodyB_0=function(){return b.asm._emscripten_bind_b2DistanceJointDef_get_bodyB_0.apply(null,arguments)},Lu=b._emscripten_bind_b2Mat22___destroy___0=function(){return b.asm._emscripten_bind_b2Mat22___destroy___0.apply(null,
arguments)},Mu=b._emscripten_bind_b2RevoluteJoint_GetNext_0=function(){return b.asm._emscripten_bind_b2RevoluteJoint_GetNext_0.apply(null,arguments)},Nu=b._emscripten_bind_b2WeldJointDef_get_bodyA_0=function(){return b.asm._emscripten_bind_b2WeldJointDef_get_bodyA_0.apply(null,arguments)},Ou=b._emscripten_bind_b2MotorJoint_GetAnchorB_0=function(){return b.asm._emscripten_bind_b2MotorJoint_GetAnchorB_0.apply(null,arguments)},Pu=b._emscripten_bind_b2Fixture_GetShape_0=function(){return b.asm._emscripten_bind_b2Fixture_GetShape_0.apply(null,
arguments)},Qu=b._emscripten_bind_b2PulleyJoint_GetReactionTorque_1=function(){return b.asm._emscripten_bind_b2PulleyJoint_GetReactionTorque_1.apply(null,arguments)},Ru=b._emscripten_bind_b2Vec3_op_mul_1=function(){return b.asm._emscripten_bind_b2Vec3_op_mul_1.apply(null,arguments)},Su=b._emscripten_bind_b2PolygonShape_set_m_type_1=function(){return b.asm._emscripten_bind_b2PolygonShape_set_m_type_1.apply(null,arguments)},Tu=b._emscripten_bind_b2WheelJoint_GetType_0=function(){return b.asm._emscripten_bind_b2WheelJoint_GetType_0.apply(null,
arguments)},Uu=b._emscripten_bind_b2MotorJoint_GetAngularOffset_0=function(){return b.asm._emscripten_bind_b2MotorJoint_GetAngularOffset_0.apply(null,arguments)},Vu=b._emscripten_bind_b2RevoluteJoint_IsActive_0=function(){return b.asm._emscripten_bind_b2RevoluteJoint_IsActive_0.apply(null,arguments)},Wu=b._emscripten_bind_b2GearJoint_GetNext_0=function(){return b.asm._emscripten_bind_b2GearJoint_GetNext_0.apply(null,arguments)},Xu=b._emscripten_bind_b2MouseJointDef_get_maxForce_0=function(){return b.asm._emscripten_bind_b2MouseJointDef_get_maxForce_0.apply(null,
arguments)},Yu=b._emscripten_bind_b2DestructionListenerWrapper___destroy___0=function(){return b.asm._emscripten_bind_b2DestructionListenerWrapper___destroy___0.apply(null,arguments)},Zu=b._emscripten_bind_b2PrismaticJointDef_set_maxMotorForce_1=function(){return b.asm._emscripten_bind_b2PrismaticJointDef_set_maxMotorForce_1.apply(null,arguments)},$u=b._emscripten_bind_b2WheelJoint_GetLocalAxisA_0=function(){return b.asm._emscripten_bind_b2WheelJoint_GetLocalAxisA_0.apply(null,arguments)},av=b._emscripten_bind_b2Body_GetNext_0=
function(){return b.asm._emscripten_bind_b2Body_GetNext_0.apply(null,arguments)},bv=b._emscripten_bind_b2MouseJoint_GetReactionForce_1=function(){return b.asm._emscripten_bind_b2MouseJoint_GetReactionForce_1.apply(null,arguments)},cv=b._emscripten_bind_b2RopeJoint_GetBodyA_0=function(){return b.asm._emscripten_bind_b2RopeJoint_GetBodyA_0.apply(null,arguments)},dv=b._emscripten_bind_b2ContactFeature_set_indexA_1=function(){return b.asm._emscripten_bind_b2ContactFeature_set_indexA_1.apply(null,arguments)},
ev=b._emscripten_bind_b2Profile_get_solveInit_0=function(){return b.asm._emscripten_bind_b2Profile_get_solveInit_0.apply(null,arguments)},fv=b._emscripten_bind_b2Fixture_IsSensor_0=function(){return b.asm._emscripten_bind_b2Fixture_IsSensor_0.apply(null,arguments)},gv=b._emscripten_bind_b2FrictionJoint_GetAnchorB_0=function(){return b.asm._emscripten_bind_b2FrictionJoint_GetAnchorB_0.apply(null,arguments)},hv=b._emscripten_bind_b2World_QueryAABB_2=function(){return b.asm._emscripten_bind_b2World_QueryAABB_2.apply(null,
arguments)},iv=b._emscripten_bind_b2Profile_set_collide_1=function(){return b.asm._emscripten_bind_b2Profile_set_collide_1.apply(null,arguments)},jv=b._emscripten_bind_b2BodyDef_get_userData_0=function(){return b.asm._emscripten_bind_b2BodyDef_get_userData_0.apply(null,arguments)},kv=b._emscripten_bind_b2MotorJoint_SetLinearOffset_1=function(){return b.asm._emscripten_bind_b2MotorJoint_SetLinearOffset_1.apply(null,arguments)},lv=b._emscripten_bind_b2FrictionJoint_GetMaxForce_0=function(){return b.asm._emscripten_bind_b2FrictionJoint_GetMaxForce_0.apply(null,
arguments)},mv=b._emscripten_bind_b2WheelJointDef_get_userData_0=function(){return b.asm._emscripten_bind_b2WheelJointDef_get_userData_0.apply(null,arguments)},nv=b._emscripten_bind_b2RevoluteJoint_IsLimitEnabled_0=function(){return b.asm._emscripten_bind_b2RevoluteJoint_IsLimitEnabled_0.apply(null,arguments)},ov=b._emscripten_bind_b2World_SetDestructionListener_1=function(){return b.asm._emscripten_bind_b2World_SetDestructionListener_1.apply(null,arguments)},pv=b._emscripten_bind_b2RevoluteJointDef_set_maxMotorTorque_1=
function(){return b.asm._emscripten_bind_b2RevoluteJointDef_set_maxMotorTorque_1.apply(null,arguments)},qv=b._emscripten_bind_b2WeldJointDef_set_bodyB_1=function(){return b.asm._emscripten_bind_b2WeldJointDef_set_bodyB_1.apply(null,arguments)},rv=b._emscripten_bind_b2Transform_set_p_1=function(){return b.asm._emscripten_bind_b2Transform_set_p_1.apply(null,arguments)},sv=b._emscripten_bind_b2DistanceJoint_SetLength_1=function(){return b.asm._emscripten_bind_b2DistanceJoint_SetLength_1.apply(null,arguments)},
tv=b._emscripten_bind_b2ManifoldPoint_get_localPoint_0=function(){return b.asm._emscripten_bind_b2ManifoldPoint_get_localPoint_0.apply(null,arguments)},uv=b._emscripten_bind_b2JointEdge_get_joint_0=function(){return b.asm._emscripten_bind_b2JointEdge_get_joint_0.apply(null,arguments)},vv=b._emscripten_bind_b2Body_GetLocalCenter_0=function(){return b.asm._emscripten_bind_b2Body_GetLocalCenter_0.apply(null,arguments)},wv=b._emscripten_bind_b2FixtureDef___destroy___0=function(){return b.asm._emscripten_bind_b2FixtureDef___destroy___0.apply(null,
arguments)},xv=b._emscripten_bind_b2MouseJoint___destroy___0=function(){return b.asm._emscripten_bind_b2MouseJoint___destroy___0.apply(null,arguments)},yv=b._emscripten_enum_b2JointType_e_ropeJoint=function(){return b.asm._emscripten_enum_b2JointType_e_ropeJoint.apply(null,arguments)},zv=b._emscripten_bind_b2Profile_get_solveVelocity_0=function(){return b.asm._emscripten_bind_b2Profile_get_solveVelocity_0.apply(null,arguments)},Av=b._emscripten_bind_b2WeldJointDef_get_bodyB_0=function(){return b.asm._emscripten_bind_b2WeldJointDef_get_bodyB_0.apply(null,
arguments)},Bv=b._emscripten_bind_b2World_GetContinuousPhysics_0=function(){return b.asm._emscripten_bind_b2World_GetContinuousPhysics_0.apply(null,arguments)},Cv=b._emscripten_bind_b2Joint_GetBodyA_0=function(){return b.asm._emscripten_bind_b2Joint_GetBodyA_0.apply(null,arguments)},Dv=b._emscripten_bind_b2MotorJointDef_set_maxTorque_1=function(){return b.asm._emscripten_bind_b2MotorJointDef_set_maxTorque_1.apply(null,arguments)},Ev=b._emscripten_bind_b2PulleyJointDef_Initialize_7=function(){return b.asm._emscripten_bind_b2PulleyJointDef_Initialize_7.apply(null,
arguments)},Fv=b._emscripten_bind_b2GearJointDef_set_bodyB_1=function(){return b.asm._emscripten_bind_b2GearJointDef_set_bodyB_1.apply(null,arguments)},Gv=b._emscripten_bind_b2RopeJoint_GetReactionTorque_1=function(){return b.asm._emscripten_bind_b2RopeJoint_GetReactionTorque_1.apply(null,arguments)},Hv=b._emscripten_bind_b2WheelJointDef_set_dampingRatio_1=function(){return b.asm._emscripten_bind_b2WheelJointDef_set_dampingRatio_1.apply(null,arguments)},Iv=b._emscripten_bind_b2GearJoint_GetType_0=
function(){return b.asm._emscripten_bind_b2GearJoint_GetType_0.apply(null,arguments)},Jv=b._emscripten_bind_b2MotorJoint_GetNext_0=function(){return b.asm._emscripten_bind_b2MotorJoint_GetNext_0.apply(null,arguments)},Kv=b._emscripten_bind_b2EdgeShape_set_m_vertex0_1=function(){return b.asm._emscripten_bind_b2EdgeShape_set_m_vertex0_1.apply(null,arguments)},Lv=b._emscripten_bind_b2RevoluteJoint_GetAnchorB_0=function(){return b.asm._emscripten_bind_b2RevoluteJoint_GetAnchorB_0.apply(null,arguments)},
Mv=b._emscripten_bind_b2RopeJointDef_set_localAnchorB_1=function(){return b.asm._emscripten_bind_b2RopeJointDef_set_localAnchorB_1.apply(null,arguments)},Nv=b._emscripten_bind_b2PrismaticJoint_GetUserData_0=function(){return b.asm._emscripten_bind_b2PrismaticJoint_GetUserData_0.apply(null,arguments)},Ov=b._emscripten_bind_b2GearJointDef_set_userData_1=function(){return b.asm._emscripten_bind_b2GearJointDef_set_userData_1.apply(null,arguments)},Pv=b._emscripten_bind_b2Fixture_SetSensor_1=function(){return b.asm._emscripten_bind_b2Fixture_SetSensor_1.apply(null,
arguments)},Qv=b._emscripten_bind_b2MotorJointDef_set_collideConnected_1=function(){return b.asm._emscripten_bind_b2MotorJointDef_set_collideConnected_1.apply(null,arguments)},Rv=b._emscripten_bind_b2Contact_GetFixtureB_0=function(){return b.asm._emscripten_bind_b2Contact_GetFixtureB_0.apply(null,arguments)},Sv=b._emscripten_bind_b2ChainShape_ComputeMass_2=function(){return b.asm._emscripten_bind_b2ChainShape_ComputeMass_2.apply(null,arguments)},Tv=b._emscripten_bind_b2WeldJointDef_b2WeldJointDef_0=
function(){return b.asm._emscripten_bind_b2WeldJointDef_b2WeldJointDef_0.apply(null,arguments)},Uv=b._emscripten_bind_b2Contact_GetChildIndexA_0=function(){return b.asm._emscripten_bind_b2Contact_GetChildIndexA_0.apply(null,arguments)},Vv=b._emscripten_bind_b2RopeJointDef_get_bodyB_0=function(){return b.asm._emscripten_bind_b2RopeJointDef_get_bodyB_0.apply(null,arguments)},Wv=b._emscripten_bind_b2BodyDef_b2BodyDef_0=function(){return b.asm._emscripten_bind_b2BodyDef_b2BodyDef_0.apply(null,arguments)},
Xv=b._emscripten_bind_b2MassData_get_mass_0=function(){return b.asm._emscripten_bind_b2MassData_get_mass_0.apply(null,arguments)},Yv=b._emscripten_bind_b2Joint_SetUserData_1=function(){return b.asm._emscripten_bind_b2Joint_SetUserData_1.apply(null,arguments)},Zv=b._emscripten_bind_b2Joint_GetBodyB_0=function(){return b.asm._emscripten_bind_b2Joint_GetBodyB_0.apply(null,arguments)},$v=b._emscripten_bind_b2Shape_GetChildCount_0=function(){return b.asm._emscripten_bind_b2Shape_GetChildCount_0.apply(null,
arguments)},aw=b._emscripten_bind_b2WheelJointDef_set_localAxisA_1=function(){return b.asm._emscripten_bind_b2WheelJointDef_set_localAxisA_1.apply(null,arguments)},bw=b._emscripten_bind_b2Joint_Dump_0=function(){return b.asm._emscripten_bind_b2Joint_Dump_0.apply(null,arguments)},cw=b._emscripten_bind_b2Color_get_r_0=function(){return b.asm._emscripten_bind_b2Color_get_r_0.apply(null,arguments)},dw=b._emscripten_bind_b2RevoluteJointDef_set_motorSpeed_1=function(){return b.asm._emscripten_bind_b2RevoluteJointDef_set_motorSpeed_1.apply(null,
arguments)},ew=b._emscripten_bind_b2MotorJointDef_get_bodyA_0=function(){return b.asm._emscripten_bind_b2MotorJointDef_get_bodyA_0.apply(null,arguments)},fw=b._emscripten_bind_b2WheelJointDef_get_enableMotor_0=function(){return b.asm._emscripten_bind_b2WheelJointDef_get_enableMotor_0.apply(null,arguments)},gw=b._emscripten_bind_b2Vec2_LengthSquared_0=function(){return b.asm._emscripten_bind_b2Vec2_LengthSquared_0.apply(null,arguments)},hw=b._emscripten_bind_b2FrictionJointDef_set_bodyA_1=function(){return b.asm._emscripten_bind_b2FrictionJointDef_set_bodyA_1.apply(null,
arguments)},iw=b._emscripten_bind_b2WheelJoint_GetSpringFrequencyHz_0=function(){return b.asm._emscripten_bind_b2WheelJoint_GetSpringFrequencyHz_0.apply(null,arguments)},jw=b._emscripten_bind_b2ContactEdge_set_prev_1=function(){return b.asm._emscripten_bind_b2ContactEdge_set_prev_1.apply(null,arguments)},kw=b._emscripten_bind_b2Shape_ComputeMass_2=function(){return b.asm._emscripten_bind_b2Shape_ComputeMass_2.apply(null,arguments)},lw=b._emscripten_bind_b2FrictionJoint_GetBodyA_0=function(){return b.asm._emscripten_bind_b2FrictionJoint_GetBodyA_0.apply(null,
arguments)},mw=b._emscripten_bind_b2WheelJointDef_set_localAnchorB_1=function(){return b.asm._emscripten_bind_b2WheelJointDef_set_localAnchorB_1.apply(null,arguments)},nw=b._emscripten_bind_b2Body_GetAngle_0=function(){return b.asm._emscripten_bind_b2Body_GetAngle_0.apply(null,arguments)},ow=b._emscripten_bind_b2PrismaticJointDef_get_maxMotorForce_0=function(){return b.asm._emscripten_bind_b2PrismaticJointDef_get_maxMotorForce_0.apply(null,arguments)},pw=b._emscripten_bind_b2DistanceJoint_GetBodyA_0=
function(){return b.asm._emscripten_bind_b2DistanceJoint_GetBodyA_0.apply(null,arguments)},qw=b._emscripten_bind_b2WheelJoint_GetLocalAnchorB_0=function(){return b.asm._emscripten_bind_b2WheelJoint_GetLocalAnchorB_0.apply(null,arguments)},rw=b._emscripten_bind_b2PulleyJointDef_set_bodyA_1=function(){return b.asm._emscripten_bind_b2PulleyJointDef_set_bodyA_1.apply(null,arguments)},sw=b._emscripten_bind_b2WheelJoint_GetAnchorB_0=function(){return b.asm._emscripten_bind_b2WheelJoint_GetAnchorB_0.apply(null,
arguments)},tw=b._emscripten_bind_b2PolygonShape_SetAsBox_2=function(){return b.asm._emscripten_bind_b2PolygonShape_SetAsBox_2.apply(null,arguments)},uw=b._emscripten_bind_b2PrismaticJointDef_get_type_0=function(){return b.asm._emscripten_bind_b2PrismaticJointDef_get_type_0.apply(null,arguments)},vw=b._emscripten_bind_b2Color_Set_3=function(){return b.asm._emscripten_bind_b2Color_Set_3.apply(null,arguments)},ww=b._emscripten_bind_b2WheelJointDef_get_bodyA_0=function(){return b.asm._emscripten_bind_b2WheelJointDef_get_bodyA_0.apply(null,
arguments)},xw=b._emscripten_enum_b2LimitState_e_atUpperLimit=function(){return b.asm._emscripten_enum_b2LimitState_e_atUpperLimit.apply(null,arguments)},yw=b._emscripten_bind_b2PulleyJointDef_set_groundAnchorA_1=function(){return b.asm._emscripten_bind_b2PulleyJointDef_set_groundAnchorA_1.apply(null,arguments)},zw=b._emscripten_bind_b2PolygonShape_get_m_type_0=function(){return b.asm._emscripten_bind_b2PolygonShape_get_m_type_0.apply(null,arguments)},Aw=b._emscripten_bind_b2PrismaticJoint_SetMaxMotorForce_1=
function(){return b.asm._emscripten_bind_b2PrismaticJoint_SetMaxMotorForce_1.apply(null,arguments)},Bw=b._emscripten_bind_b2PulleyJointDef_get_collideConnected_0=function(){return b.asm._emscripten_bind_b2PulleyJointDef_get_collideConnected_0.apply(null,arguments)},Cw=b._emscripten_bind_JSContactListener_JSContactListener_0=function(){return b.asm._emscripten_bind_JSContactListener_JSContactListener_0.apply(null,arguments)},Dw=b._emscripten_bind_b2WheelJoint___destroy___0=function(){return b.asm._emscripten_bind_b2WheelJoint___destroy___0.apply(null,
arguments)},Ew=b._emscripten_bind_b2PolygonShape_set_m_radius_1=function(){return b.asm._emscripten_bind_b2PolygonShape_set_m_radius_1.apply(null,arguments)},Fw=b._emscripten_bind_b2Fixture_GetMassData_1=function(){return b.asm._emscripten_bind_b2Fixture_GetMassData_1.apply(null,arguments)},Gw=b._emscripten_bind_b2RopeJoint_SetMaxLength_1=function(){return b.asm._emscripten_bind_b2RopeJoint_SetMaxLength_1.apply(null,arguments)};b.dynCall_iiii=function(){return b.asm.dynCall_iiii.apply(null,arguments)};
b.dynCall_viifii=function(){return b.asm.dynCall_viifii.apply(null,arguments)};b.dynCall_viiiii=function(){return b.asm.dynCall_viiiii.apply(null,arguments)};b.dynCall_vi=function(){return b.asm.dynCall_vi.apply(null,arguments)};b.dynCall_vii=function(){return b.asm.dynCall_vii.apply(null,arguments)};b.dynCall_ii=function(){return b.asm.dynCall_ii.apply(null,arguments)};b.dynCall_fif=function(){return b.asm.dynCall_fif.apply(null,arguments)};
b.dynCall_viii=function(){return b.asm.dynCall_viii.apply(null,arguments)};b.dynCall_viifi=function(){return b.asm.dynCall_viifi.apply(null,arguments)};b.dynCall_v=function(){return b.asm.dynCall_v.apply(null,arguments)};b.dynCall_viif=function(){return b.asm.dynCall_viif.apply(null,arguments)};b.dynCall_viiiiii=function(){return b.asm.dynCall_viiiiii.apply(null,arguments)};b.dynCall_iii=function(){return b.asm.dynCall_iii.apply(null,arguments)};
b.dynCall_iiiiii=function(){return b.asm.dynCall_iiiiii.apply(null,arguments)};b.dynCall_fiiiif=function(){return b.asm.dynCall_fiiiif.apply(null,arguments)};b.dynCall_viiii=function(){return b.asm.dynCall_viiii.apply(null,arguments)};f.t=b.stackAlloc;f.L=b.stackSave;f.K=b.stackRestore;f.Q=b.establishStackSpace;f.f=b.setTempRet0;f.H=b.getTempRet0;b.asm=Kb;
if(rb)if("function"===typeof b.locateFile?rb=b.locateFile(rb):b.memoryInitializerPrefixURL&&(rb=b.memoryInitializerPrefixURL+rb),ea||fa){var Hw=b.readBinary(rb);Ea.set(Hw,f.i)}else{var Jw=function(){b.readAsync(rb,Iw,function(){throw"could not load memory initializer "+rb;})};pb();var Iw=function(a){a.byteLength&&(a=new Uint8Array(a));Ea.set(a,f.i);b.memoryInitializerRequest&&delete b.memoryInitializerRequest.response;qb()};if(b.memoryInitializerRequest){var Kw=function(){var a=b.memoryInitializerRequest;
200!==a.status&&0!==a.status?(console.warn("a problem seems to have happened with Module.memoryInitializerRequest, status: "+a.status+", retrying "+rb),Jw()):Iw(a.response)};b.memoryInitializerRequest.response?setTimeout(Kw,0):b.memoryInitializerRequest.addEventListener("load",Kw)}else Jw()}b.then=function(a){if(b.calledRun)a(b);else{var c=b.onRuntimeInitialized;b.onRuntimeInitialized=function(){c&&c();a(b)}}return b};
function ja(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}ja.prototype=Error();ja.prototype.constructor=ja;var Lw=null,ob=function Mw(){b.calledRun||Nw();b.calledRun||(ob=Mw)};
b.callMain=b.O=function(a){function c(){for(var a=0;3>a;a++)e.push(0)}a=a||[];hb||(hb=!0,bb(db));var d=a.length+1,e=[Ba(jb(b.thisProgram),"i8",0)];c();for(var h=0;h<d-1;h+=1)e.push(Ba(jb(a[h]),"i8",0)),c();e.push(0);e=Ba(e,"i32",0);try{var l=b._main(d,e,0);Ow(l,!0)}catch(m){m instanceof ja||("SimulateInfiniteLoop"==m?b.noExitRuntime=!0:((a=m)&&"object"===typeof m&&m.stack&&(a=[m,m.stack]),b.h("exception thrown: "+a),b.quit(1,m)))}finally{}};
function Nw(a){function c(){if(!b.calledRun&&(b.calledRun=!0,!ua)){hb||(hb=!0,bb(db));bb(eb);if(b.onRuntimeInitialized)b.onRuntimeInitialized();b._main&&Pw&&b.callMain(a);if(b.postRun)for("function"==typeof b.postRun&&(b.postRun=[b.postRun]);b.postRun.length;){var c=b.postRun.shift();gb.unshift(c)}bb(gb)}}a=a||b.arguments;null===Lw&&(Lw=Date.now());if(!(0<mb)){if(b.preRun)for("function"==typeof b.preRun&&(b.preRun=[b.preRun]);b.preRun.length;)ib();bb(cb);0<mb||b.calledRun||(b.setStatus?(b.setStatus("Running..."),
setTimeout(function(){setTimeout(function(){b.setStatus("")},1);c()},1)):c())}}b.run=b.run=Nw;function Ow(a,c){if(!c||!b.noExitRuntime){if(!b.noExitRuntime&&(ua=!0,la=void 0,bb(fb),b.onExit))b.onExit(a);ea&&process.exit(a);b.quit(a,new ja(a))}}b.exit=b.exit=Ow;var Qw=[];
function va(a){void 0!==a?(b.print(a),b.h(a),a=JSON.stringify(a)):a="";ua=!0;var c="abort("+a+") at "+Ra()+"\nIf this abort() is unexpected, build with -s ASSERTIONS=1 which can give more information.";Qw&&Qw.forEach(function(d){c=d(c,a)});throw c;}b.abort=b.abort=va;if(b.preInit)for("function"==typeof b.preInit&&(b.preInit=[b.preInit]);0<b.preInit.length;)b.preInit.pop()();var Pw=!0;b.noInitialRun&&(Pw=!1);b.noExitRuntime=!0;Nw();function g(){}g.prototype=Object.create(g.prototype);
g.prototype.constructor=g;g.prototype.b=g;g.c={};b.WrapperObject=g;function k(a){return(a||g).c}b.getCache=k;function n(a,c){var d=k(c),e=d[a];if(e)return e;e=Object.create((c||g).prototype);e.a=a;return d[a]=e}b.wrapPointer=n;b.castObject=function(a,c){return n(a.a,c)};b.NULL=n(0);b.destroy=function(a){if(!a.__destroy__)throw"Error: Cannot destroy object. (Did you create it yourself?)";a.__destroy__();delete k(a.b)[a.a]};b.compare=function(a,c){return a.a===c.a};b.getPointer=function(a){return a.a};
b.getClass=function(a){return a.b};function Rw(){throw"cannot construct a b2DestructionListenerWrapper, no constructor in IDL";}Rw.prototype=Object.create(g.prototype);Rw.prototype.constructor=Rw;Rw.prototype.b=Rw;Rw.c={};b.b2DestructionListenerWrapper=Rw;Rw.prototype.__destroy__=function(){Yu(this.a)};function Sw(){throw"cannot construct a b2Draw, no constructor in IDL";}Sw.prototype=Object.create(g.prototype);Sw.prototype.constructor=Sw;Sw.prototype.b=Sw;Sw.c={};b.b2Draw=Sw;
Sw.prototype.SetFlags=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);ae(c,a)};Sw.prototype.GetFlags=function(){return Vb(this.a)};Sw.prototype.AppendFlags=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);wh(c,a)};Sw.prototype.ClearFlags=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Sh(c,a)};Sw.prototype.__destroy__=function(){Wi(this.a)};function p(){throw"cannot construct a b2Joint, no constructor in IDL";}p.prototype=Object.create(g.prototype);
p.prototype.constructor=p;p.prototype.b=p;p.c={};b.b2Joint=p;p.prototype.GetType=function(){return Qs(this.a)};p.prototype.GetBodyA=function(){return n(Cv(this.a),q)};p.prototype.GetBodyB=function(){return n(Zv(this.a),q)};p.prototype.GetAnchorA=function(){return n(Um(this.a),r)};p.prototype.GetAnchorB=function(){return n($i(this.a),r)};p.prototype.GetReactionForce=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);return n(Ml(c,a),r)};
p.prototype.GetReactionTorque=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);return Jj(c,a)};p.prototype.GetNext=function(){return n(Ps(this.a),p)};p.prototype.GetUserData=function(){return Qk(this.a)};p.prototype.SetUserData=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Yv(c,a)};p.prototype.IsActive=function(){return!!tu(this.a)};p.prototype.GetCollideConnected=function(){return!!af(this.a)};p.prototype.Dump=function(){bw(this.a)};
function Tw(){throw"cannot construct a b2RayCastCallback, no constructor in IDL";}Tw.prototype=Object.create(g.prototype);Tw.prototype.constructor=Tw;Tw.prototype.b=Tw;Tw.c={};b.b2RayCastCallback=Tw;Tw.prototype.__destroy__=function(){ph(this.a)};function Uw(){throw"cannot construct a b2ContactListener, no constructor in IDL";}Uw.prototype=Object.create(g.prototype);Uw.prototype.constructor=Uw;Uw.prototype.b=Uw;Uw.c={};b.b2ContactListener=Uw;Uw.prototype.__destroy__=function(){Bo(this.a)};
function Vw(){throw"cannot construct a b2QueryCallback, no constructor in IDL";}Vw.prototype=Object.create(g.prototype);Vw.prototype.constructor=Vw;Vw.prototype.b=Vw;Vw.c={};b.b2QueryCallback=Vw;Vw.prototype.__destroy__=function(){dt(this.a)};function t(){this.a=Mm();k(t)[this.a]=this}t.prototype=Object.create(g.prototype);t.prototype.constructor=t;t.prototype.b=t;t.c={};b.b2JointDef=t;t.prototype.get_type=function(){return It(this.a)};
t.prototype.set_type=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Tt(c,a)};t.prototype.get_userData=function(){return Dm(this.a)};t.prototype.set_userData=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Vp(c,a)};t.prototype.get_bodyA=function(){return n(nr(this.a),q)};t.prototype.set_bodyA=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);qk(c,a)};t.prototype.get_bodyB=function(){return n(Pm(this.a),q)};
t.prototype.set_bodyB=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Zq(c,a)};t.prototype.get_collideConnected=function(){return!!Zc(this.a)};t.prototype.set_collideConnected=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);lk(c,a)};t.prototype.__destroy__=function(){Ne(this.a)};function Ww(){throw"cannot construct a b2Shape, no constructor in IDL";}Ww.prototype=Object.create(g.prototype);Ww.prototype.constructor=Ww;Ww.prototype.b=Ww;Ww.c={};b.b2Shape=Ww;Ww.prototype.GetType=function(){return Gn(this.a)};
Ww.prototype.GetChildCount=function(){return $v(this.a)};Ww.prototype.TestPoint=function(a,c){var d=this.a;a&&"object"===typeof a&&(a=a.a);c&&"object"===typeof c&&(c=c.a);return!!lr(d,a,c)};Ww.prototype.RayCast=function(a,c,d,e){var h=this.a;a&&"object"===typeof a&&(a=a.a);c&&"object"===typeof c&&(c=c.a);d&&"object"===typeof d&&(d=d.a);e&&"object"===typeof e&&(e=e.a);return!!Uc(h,a,c,d,e)};
Ww.prototype.ComputeAABB=function(a,c,d){var e=this.a;a&&"object"===typeof a&&(a=a.a);c&&"object"===typeof c&&(c=c.a);d&&"object"===typeof d&&(d=d.a);Rb(e,a,c,d)};Ww.prototype.ComputeMass=function(a,c){var d=this.a;a&&"object"===typeof a&&(a=a.a);c&&"object"===typeof c&&(c=c.a);kw(d,a,c)};Ww.prototype.get_m_type=function(){return Zj(this.a)};Ww.prototype.set_m_type=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);ds(c,a)};Ww.prototype.get_m_radius=function(){return vu(this.a)};
Ww.prototype.set_m_radius=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);kf(c,a)};Ww.prototype.__destroy__=function(){Ll(this.a)};function Xw(){throw"cannot construct a b2ContactFilter, no constructor in IDL";}Xw.prototype=Object.create(g.prototype);Xw.prototype.constructor=Xw;Xw.prototype.b=Xw;Xw.c={};b.b2ContactFilter=Xw;Xw.prototype.__destroy__=function(){Lf(this.a)};function Yw(){this.a=He();k(Yw)[this.a]=this}Yw.prototype=Object.create(Rw.prototype);Yw.prototype.constructor=Yw;
Yw.prototype.b=Yw;Yw.c={};b.JSDestructionListener=Yw;Yw.prototype.SayGoodbyeJoint=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Kl(c,a)};Yw.prototype.SayGoodbyeFixture=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Op(c,a)};Yw.prototype.__destroy__=function(){ms(this.a)};function Zw(){throw"cannot construct a b2ContactImpulse, no constructor in IDL";}Zw.prototype=Object.create(g.prototype);Zw.prototype.constructor=Zw;Zw.prototype.b=Zw;Zw.c={};b.b2ContactImpulse=Zw;
Zw.prototype.get_count=function(){return nn(this.a)};Zw.prototype.set_count=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Ng(c,a)};Zw.prototype.__destroy__=function(){Ce(this.a)};function u(){throw"cannot construct a b2DistanceJoint, no constructor in IDL";}u.prototype=Object.create(p.prototype);u.prototype.constructor=u;u.prototype.b=u;u.c={};b.b2DistanceJoint=u;u.prototype.GetLocalAnchorA=function(){return n(fe(this.a),r)};u.prototype.GetLocalAnchorB=function(){return n(Nh(this.a),r)};
u.prototype.SetLength=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);sv(c,a)};u.prototype.GetLength=function(){return Tj(this.a)};u.prototype.SetFrequency=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Lg(c,a)};u.prototype.GetFrequency=function(){return Cl(this.a)};u.prototype.SetDampingRatio=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);te(c,a)};u.prototype.GetDampingRatio=function(){return ch(this.a)};u.prototype.GetType=function(){return vk(this.a)};
u.prototype.GetBodyA=function(){return n(pw(this.a),q)};u.prototype.GetBodyB=function(){return n(Le(this.a),q)};u.prototype.GetAnchorA=function(){return n(Ic(this.a),r)};u.prototype.GetAnchorB=function(){return n(xg(this.a),r)};u.prototype.GetReactionForce=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);return n(Qm(c,a),r)};u.prototype.GetReactionTorque=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);return zs(c,a)};u.prototype.GetNext=function(){return n(ce(this.a),p)};
u.prototype.GetUserData=function(){return Cd(this.a)};u.prototype.SetUserData=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Of(c,a)};u.prototype.IsActive=function(){return!!tg(this.a)};u.prototype.GetCollideConnected=function(){return!!nt(this.a)};u.prototype.__destroy__=function(){Lk(this.a)};
function $w(a,c,d){a&&"object"===typeof a&&(a=a.a);c&&"object"===typeof c&&(c=c.a);d&&"object"===typeof d&&(d=d.a);this.a=void 0===a?fg():void 0===c?_emscripten_bind_b2Mat33_b2Mat33_1(a):void 0===d?_emscripten_bind_b2Mat33_b2Mat33_2(a,c):Gt(a,c,d);k($w)[this.a]=this}$w.prototype=Object.create(g.prototype);$w.prototype.constructor=$w;$w.prototype.b=$w;$w.c={};b.b2Mat33=$w;$w.prototype.SetZero=function(){nu(this.a)};
$w.prototype.Solve33=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);return n(Wo(c,a),ax)};$w.prototype.Solve22=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);return n(Jf(c,a),r)};$w.prototype.GetInverse22=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);um(c,a)};$w.prototype.GetSymInverse33=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);el(c,a)};$w.prototype.get_ex=function(){return n(Hg(this.a),ax)};
$w.prototype.set_ex=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);vt(c,a)};$w.prototype.get_ey=function(){return n(Ac(this.a),ax)};$w.prototype.set_ey=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Dc(c,a)};$w.prototype.get_ez=function(){return n(Ue(this.a),ax)};$w.prototype.set_ez=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Xt(c,a)};$w.prototype.__destroy__=function(){Wc(this.a)};function v(){throw"cannot construct a b2Fixture, no constructor in IDL";}
v.prototype=Object.create(g.prototype);v.prototype.constructor=v;v.prototype.b=v;v.c={};b.b2Fixture=v;v.prototype.GetType=function(){return xk(this.a)};v.prototype.GetShape=function(){return n(Pu(this.a),Ww)};v.prototype.SetSensor=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Pv(c,a)};v.prototype.IsSensor=function(){return!!fv(this.a)};v.prototype.SetFilterData=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Sp(c,a)};v.prototype.GetFilterData=function(){return n(Ms(this.a),bx)};
v.prototype.Refilter=function(){$n(this.a)};v.prototype.GetBody=function(){return n(Mg(this.a),q)};v.prototype.GetNext=function(){return n(iu(this.a),v)};v.prototype.GetUserData=function(){return rl(this.a)};v.prototype.SetUserData=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Qi(c,a)};v.prototype.TestPoint=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);return!!dl(c,a)};
v.prototype.RayCast=function(a,c,d){var e=this.a;a&&"object"===typeof a&&(a=a.a);c&&"object"===typeof c&&(c=c.a);d&&"object"===typeof d&&(d=d.a);return!!pk(e,a,c,d)};v.prototype.GetMassData=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Fw(c,a)};v.prototype.SetDensity=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Tg(c,a)};v.prototype.GetDensity=function(){return lp(this.a)};v.prototype.GetFriction=function(){return hu(this.a)};
v.prototype.SetFriction=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);no(c,a)};v.prototype.GetRestitution=function(){return he(this.a)};v.prototype.SetRestitution=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);st(c,a)};v.prototype.GetAABB=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);return n(Zm(c,a),cx)};v.prototype.Dump=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Am(c,a)};v.prototype.__destroy__=function(){ic(this.a)};
function bx(){this.a=Gd();k(bx)[this.a]=this}bx.prototype=Object.create(g.prototype);bx.prototype.constructor=bx;bx.prototype.b=bx;bx.c={};b.b2Filter=bx;bx.prototype.get_categoryBits=function(){return lm(this.a)};bx.prototype.set_categoryBits=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);nl(c,a)};bx.prototype.get_maskBits=function(){return vo(this.a)};bx.prototype.set_maskBits=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Gr(c,a)};bx.prototype.get_groupIndex=function(){return Pe(this.a)};
bx.prototype.set_groupIndex=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Lm(c,a)};bx.prototype.__destroy__=function(){vn(this.a)};function dx(){this.a=ad();k(dx)[this.a]=this}dx.prototype=Object.create(Vw.prototype);dx.prototype.constructor=dx;dx.prototype.b=dx;dx.c={};b.JSQueryCallback=dx;dx.prototype.ReportFixture=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);return!!Jt(c,a)};dx.prototype.__destroy__=function(){Zn(this.a)};
function w(){throw"cannot construct a b2MouseJoint, no constructor in IDL";}w.prototype=Object.create(p.prototype);w.prototype.constructor=w;w.prototype.b=w;w.c={};b.b2MouseJoint=w;w.prototype.SetTarget=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);$f(c,a)};w.prototype.GetTarget=function(){return n(Yn(this.a),r)};w.prototype.SetMaxForce=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Tp(c,a)};w.prototype.GetMaxForce=function(){return Zf(this.a)};
w.prototype.SetFrequency=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);jl(c,a)};w.prototype.GetFrequency=function(){return Go(this.a)};w.prototype.SetDampingRatio=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);ak(c,a)};w.prototype.GetDampingRatio=function(){return tr(this.a)};w.prototype.GetType=function(){return Xn(this.a)};w.prototype.GetBodyA=function(){return n(ko(this.a),q)};w.prototype.GetBodyB=function(){return n(Ji(this.a),q)};
w.prototype.GetAnchorA=function(){return n(Nt(this.a),r)};w.prototype.GetAnchorB=function(){return n(rq(this.a),r)};w.prototype.GetReactionForce=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);return n(bv(c,a),r)};w.prototype.GetReactionTorque=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);return Bn(c,a)};w.prototype.GetNext=function(){return n(bi(this.a),p)};w.prototype.GetUserData=function(){return bq(this.a)};
w.prototype.SetUserData=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);ft(c,a)};w.prototype.IsActive=function(){return!!Tb(this.a)};w.prototype.GetCollideConnected=function(){return!!Bc(this.a)};w.prototype.__destroy__=function(){xv(this.a)};function ex(a){a&&"object"===typeof a&&(a=a.a);this.a=void 0===a?Tn():Un(a);k(ex)[this.a]=this}ex.prototype=Object.create(g.prototype);ex.prototype.constructor=ex;ex.prototype.b=ex;ex.c={};b.b2Rot=ex;
ex.prototype.Set=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Ff(c,a)};ex.prototype.SetIdentity=function(){Zp(this.a)};ex.prototype.GetAngle=function(){return dp(this.a)};ex.prototype.GetXAxis=function(){return n(eg(this.a),r)};ex.prototype.GetYAxis=function(){return n(Nq(this.a),r)};ex.prototype.get_s=function(){return qp(this.a)};ex.prototype.set_s=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);uj(c,a)};ex.prototype.get_c=function(){return Qp(this.a)};
ex.prototype.set_c=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Nm(c,a)};ex.prototype.__destroy__=function(){uo(this.a)};function x(){throw"cannot construct a b2MotorJoint, no constructor in IDL";}x.prototype=Object.create(p.prototype);x.prototype.constructor=x;x.prototype.b=x;x.c={};b.b2MotorJoint=x;x.prototype.SetLinearOffset=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);kv(c,a)};x.prototype.GetLinearOffset=function(){return n(hp(this.a),r)};
x.prototype.SetAngularOffset=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);gp(c,a)};x.prototype.GetAngularOffset=function(){return Uu(this.a)};x.prototype.SetMaxForce=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Fo(c,a)};x.prototype.GetMaxForce=function(){return bj(this.a)};x.prototype.SetMaxTorque=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);ld(c,a)};x.prototype.GetMaxTorque=function(){return xr(this.a)};
x.prototype.SetCorrectionFactor=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);sd(c,a)};x.prototype.GetCorrectionFactor=function(){return Mp(this.a)};x.prototype.GetType=function(){return wq(this.a)};x.prototype.GetBodyA=function(){return n(vh(this.a),q)};x.prototype.GetBodyB=function(){return n(th(this.a),q)};x.prototype.GetAnchorA=function(){return n(kp(this.a),r)};x.prototype.GetAnchorB=function(){return n(Ou(this.a),r)};
x.prototype.GetReactionForce=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);return n(cp(c,a),r)};x.prototype.GetReactionTorque=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);return bf(c,a)};x.prototype.GetNext=function(){return n(Jv(this.a),p)};x.prototype.GetUserData=function(){return Xj(this.a)};x.prototype.SetUserData=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);rh(c,a)};x.prototype.IsActive=function(){return!!An(this.a)};x.prototype.GetCollideConnected=function(){return!!re(this.a)};
x.prototype.__destroy__=function(){mk(this.a)};function y(){throw"cannot construct a b2Profile, no constructor in IDL";}y.prototype=Object.create(g.prototype);y.prototype.constructor=y;y.prototype.b=y;y.c={};b.b2Profile=y;y.prototype.get_step=function(){return Qj(this.a)};y.prototype.set_step=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);ui(c,a)};y.prototype.get_collide=function(){return Us(this.a)};y.prototype.set_collide=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);iv(c,a)};
y.prototype.get_solve=function(){return Np(this.a)};y.prototype.set_solve=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Ds(c,a)};y.prototype.get_solveInit=function(){return ev(this.a)};y.prototype.set_solveInit=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Ak(c,a)};y.prototype.get_solveVelocity=function(){return zv(this.a)};y.prototype.set_solveVelocity=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Jm(c,a)};y.prototype.get_solvePosition=function(){return Tc(this.a)};
y.prototype.set_solvePosition=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Kf(c,a)};y.prototype.get_broadphase=function(){return Ec(this.a)};y.prototype.set_broadphase=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);ln(c,a)};y.prototype.get_solveTOI=function(){return vg(this.a)};y.prototype.set_solveTOI=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);zh(c,a)};y.prototype.__destroy__=function(){Jg(this.a)};
function fx(){throw"cannot construct a VoidPtr, no constructor in IDL";}fx.prototype=Object.create(g.prototype);fx.prototype.constructor=fx;fx.prototype.b=fx;fx.c={};b.VoidPtr=fx;fx.prototype.__destroy__=function(){Ro(this.a)};function z(){this.a=Wv();k(z)[this.a]=this}z.prototype=Object.create(g.prototype);z.prototype.constructor=z;z.prototype.b=z;z.c={};b.b2BodyDef=z;z.prototype.get_type=function(){return tm(this.a)};
z.prototype.set_type=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);nc(c,a)};z.prototype.get_position=function(){return n(tc(this.a),r)};z.prototype.set_position=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);ed(c,a)};z.prototype.get_angle=function(){return Bt(this.a)};z.prototype.set_angle=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Yk(c,a)};z.prototype.get_linearVelocity=function(){return n(Ju(this.a),r)};
z.prototype.set_linearVelocity=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);kk(c,a)};z.prototype.get_angularVelocity=function(){return Xd(this.a)};z.prototype.set_angularVelocity=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);fm(c,a)};z.prototype.get_linearDamping=function(){return Nj(this.a)};z.prototype.set_linearDamping=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);jr(c,a)};z.prototype.get_angularDamping=function(){return zq(this.a)};
z.prototype.set_angularDamping=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Fp(c,a)};z.prototype.get_allowSleep=function(){return!!Fi(this.a)};z.prototype.set_allowSleep=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);ri(c,a)};z.prototype.get_awake=function(){return!!lo(this.a)};z.prototype.set_awake=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);ll(c,a)};z.prototype.get_fixedRotation=function(){return!!xn(this.a)};
z.prototype.set_fixedRotation=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);dk(c,a)};z.prototype.get_bullet=function(){return!!Se(this.a)};z.prototype.set_bullet=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Em(c,a)};z.prototype.get_active=function(){return!!Ti(this.a)};z.prototype.set_active=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Dj(c,a)};z.prototype.get_userData=function(){return jv(this.a)};
z.prototype.set_userData=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);qr(c,a)};z.prototype.get_gravityScale=function(){return ef(this.a)};z.prototype.set_gravityScale=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Qd(c,a)};z.prototype.__destroy__=function(){Vr(this.a)};function gx(){this.a=sf();k(gx)[this.a]=this}gx.prototype=Object.create(Tw.prototype);gx.prototype.constructor=gx;gx.prototype.b=gx;gx.c={};b.JSRayCastCallback=gx;
gx.prototype.ReportFixture=function(a,c,d,e){var h=this.a;a&&"object"===typeof a&&(a=a.a);c&&"object"===typeof c&&(c=c.a);d&&"object"===typeof d&&(d=d.a);e&&"object"===typeof e&&(e=e.a);return Be(h,a,c,d,e)};gx.prototype.__destroy__=function(){Ao(this.a)};function hx(){throw"cannot construct a b2ContactFeature, no constructor in IDL";}hx.prototype=Object.create(g.prototype);hx.prototype.constructor=hx;hx.prototype.b=hx;hx.c={};b.b2ContactFeature=hx;hx.prototype.get_indexA=function(){return Bg(this.a)};
hx.prototype.set_indexA=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);dv(c,a)};hx.prototype.get_indexB=function(){return ql(this.a)};hx.prototype.set_indexB=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Hq(c,a)};hx.prototype.get_typeA=function(){return tl(this.a)};hx.prototype.set_typeA=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);zm(c,a)};hx.prototype.get_typeB=function(){return ap(this.a)};
hx.prototype.set_typeB=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);vr(c,a)};hx.prototype.__destroy__=function(){xp(this.a)};function r(a,c){a&&"object"===typeof a&&(a=a.a);c&&"object"===typeof c&&(c=c.a);this.a=void 0===a?wg():void 0===c?_emscripten_bind_b2Vec2_b2Vec2_1(a):ek(a,c);k(r)[this.a]=this}r.prototype=Object.create(g.prototype);r.prototype.constructor=r;r.prototype.b=r;r.c={};b.b2Vec2=r;r.prototype.SetZero=function(){Wq(this.a)};
r.prototype.Set=function(a,c){var d=this.a;a&&"object"===typeof a&&(a=a.a);c&&"object"===typeof c&&(c=c.a);np(d,a,c)};r.prototype.op_add=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Ze(c,a)};r.prototype.op_sub=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);zg(c,a)};r.prototype.op_mul=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);xi(c,a)};r.prototype.Length=function(){return Vq(this.a)};r.prototype.LengthSquared=function(){return gw(this.a)};r.prototype.Normalize=function(){return of(this.a)};
r.prototype.IsValid=function(){return!!Ko(this.a)};r.prototype.Skew=function(){return n(sr(this.a),r)};r.prototype.get_x=function(){return ni(this.a)};r.prototype.set_x=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Cu(c,a)};r.prototype.get_y=function(){return ml(this.a)};r.prototype.set_y=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);rs(c,a)};r.prototype.__destroy__=function(){Fu(this.a)};
function ax(a,c,d){a&&"object"===typeof a&&(a=a.a);c&&"object"===typeof c&&(c=c.a);d&&"object"===typeof d&&(d=d.a);this.a=void 0===a?Jk():void 0===c?_emscripten_bind_b2Vec3_b2Vec3_1(a):void 0===d?_emscripten_bind_b2Vec3_b2Vec3_2(a,c):Tk(a,c,d);k(ax)[this.a]=this}ax.prototype=Object.create(g.prototype);ax.prototype.constructor=ax;ax.prototype.b=ax;ax.c={};b.b2Vec3=ax;ax.prototype.SetZero=function(){ff(this.a)};
ax.prototype.Set=function(a,c,d){var e=this.a;a&&"object"===typeof a&&(a=a.a);c&&"object"===typeof c&&(c=c.a);d&&"object"===typeof d&&(d=d.a);fj(e,a,c,d)};ax.prototype.op_add=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Xf(c,a)};ax.prototype.op_sub=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);En(c,a)};ax.prototype.op_mul=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Ru(c,a)};ax.prototype.get_x=function(){return Pc(this.a)};
ax.prototype.set_x=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Il(c,a)};ax.prototype.get_y=function(){return Ht(this.a)};ax.prototype.set_y=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Ep(c,a)};ax.prototype.get_z=function(){return km(this.a)};ax.prototype.set_z=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Al(c,a)};ax.prototype.__destroy__=function(){Xg(this.a)};function cx(){this.a=mo();k(cx)[this.a]=this}cx.prototype=Object.create(g.prototype);
cx.prototype.constructor=cx;cx.prototype.b=cx;cx.c={};b.b2AABB=cx;cx.prototype.IsValid=function(){return!!Hn(this.a)};cx.prototype.GetCenter=function(){return n(Bh(this.a),r)};cx.prototype.GetExtents=function(){return n(Vg(this.a),r)};cx.prototype.GetPerimeter=function(){return Fg(this.a)};cx.prototype.Combine=function(a,c){var d=this.a;a&&"object"===typeof a&&(a=a.a);c&&"object"===typeof c&&(c=c.a);void 0===c?Gp(d,a):Di(d,a,c)};
cx.prototype.Contains=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);return!!be(c,a)};cx.prototype.RayCast=function(a,c){var d=this.a;a&&"object"===typeof a&&(a=a.a);c&&"object"===typeof c&&(c=c.a);return!!Rj(d,a,c)};cx.prototype.get_lowerBound=function(){return n(Td(this.a),r)};cx.prototype.set_lowerBound=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Rp(c,a)};cx.prototype.get_upperBound=function(){return n(ke(this.a),r)};
cx.prototype.set_upperBound=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Ae(c,a)};cx.prototype.__destroy__=function(){sn(this.a)};function ix(){this.a=yj();k(ix)[this.a]=this}ix.prototype=Object.create(g.prototype);ix.prototype.constructor=ix;ix.prototype.b=ix;ix.c={};b.b2FixtureDef=ix;ix.prototype.get_shape=function(){return n(Ct(this.a),Ww)};ix.prototype.set_shape=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Og(c,a)};ix.prototype.get_userData=function(){return Bd(this.a)};
ix.prototype.set_userData=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);fc(c,a)};ix.prototype.get_friction=function(){return at(this.a)};ix.prototype.set_friction=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Nl(c,a)};ix.prototype.get_restitution=function(){return wk(this.a)};ix.prototype.set_restitution=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);yc(c,a)};ix.prototype.get_density=function(){return td(this.a)};
ix.prototype.set_density=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Es(c,a)};ix.prototype.get_isSensor=function(){return!!zf(this.a)};ix.prototype.set_isSensor=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Fj(c,a)};ix.prototype.get_filter=function(){return n(cc(this.a),bx)};ix.prototype.set_filter=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);lh(c,a)};ix.prototype.__destroy__=function(){wv(this.a)};function A(){this.a=Gk();k(A)[this.a]=this}A.prototype=Object.create(t.prototype);
A.prototype.constructor=A;A.prototype.b=A;A.c={};b.b2FrictionJointDef=A;A.prototype.Initialize=function(a,c,d){var e=this.a;a&&"object"===typeof a&&(a=a.a);c&&"object"===typeof c&&(c=c.a);d&&"object"===typeof d&&(d=d.a);Ar(e,a,c,d)};A.prototype.get_localAnchorA=function(){return n(Qe(this.a),r)};A.prototype.set_localAnchorA=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);qf(c,a)};A.prototype.get_localAnchorB=function(){return n(De(this.a),r)};
A.prototype.set_localAnchorB=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);hj(c,a)};A.prototype.get_maxForce=function(){return em(this.a)};A.prototype.set_maxForce=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);rm(c,a)};A.prototype.get_maxTorque=function(){return $c(this.a)};A.prototype.set_maxTorque=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Wr(c,a)};A.prototype.get_type=function(){return dc(this.a)};
A.prototype.set_type=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);zr(c,a)};A.prototype.get_userData=function(){return oh(this.a)};A.prototype.set_userData=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Sb(c,a)};A.prototype.get_bodyA=function(){return n(Zt(this.a),q)};A.prototype.set_bodyA=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);hw(c,a)};A.prototype.get_bodyB=function(){return n(cf(this.a),q)};
A.prototype.set_bodyB=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);qq(c,a)};A.prototype.get_collideConnected=function(){return!!Br(this.a)};A.prototype.set_collideConnected=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Dd(c,a)};A.prototype.__destroy__=function(){Dh(this.a)};function jx(){this.a=fq();k(jx)[this.a]=this}jx.prototype=Object.create(g.prototype);jx.prototype.constructor=jx;jx.prototype.b=jx;jx.c={};b.b2Manifold=jx;
jx.prototype.get_localNormal=function(){return n(Ik(this.a),r)};jx.prototype.set_localNormal=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);mr(c,a)};jx.prototype.get_localPoint=function(){return n(di(this.a),r)};jx.prototype.set_localPoint=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Cm(c,a)};jx.prototype.get_type=function(){return fk(this.a)};jx.prototype.set_type=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Sk(c,a)};jx.prototype.get_pointCount=function(){return vf(this.a)};
jx.prototype.set_pointCount=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Nk(c,a)};jx.prototype.__destroy__=function(){kg(this.a)};function B(){this.a=Si();k(B)[this.a]=this}B.prototype=Object.create(t.prototype);B.prototype.constructor=B;B.prototype.b=B;B.c={};b.b2PrismaticJointDef=B;B.prototype.Initialize=function(a,c,d,e){var h=this.a;a&&"object"===typeof a&&(a=a.a);c&&"object"===typeof c&&(c=c.a);d&&"object"===typeof d&&(d=d.a);e&&"object"===typeof e&&(e=e.a);Af(h,a,c,d,e)};
B.prototype.get_localAnchorA=function(){return n(yi(this.a),r)};B.prototype.set_localAnchorA=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);bt(c,a)};B.prototype.get_localAnchorB=function(){return n(we(this.a),r)};B.prototype.set_localAnchorB=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Co(c,a)};B.prototype.get_localAxisA=function(){return n(qu(this.a),r)};B.prototype.set_localAxisA=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);xu(c,a)};
B.prototype.get_referenceAngle=function(){return Vd(this.a)};B.prototype.set_referenceAngle=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);jh(c,a)};B.prototype.get_enableLimit=function(){return!!Ks(this.a)};B.prototype.set_enableLimit=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Bl(c,a)};B.prototype.get_lowerTranslation=function(){return Ed(this.a)};B.prototype.set_lowerTranslation=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);cd(c,a)};
B.prototype.get_upperTranslation=function(){return vd(this.a)};B.prototype.set_upperTranslation=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);il(c,a)};B.prototype.get_enableMotor=function(){return!!ks(this.a)};B.prototype.set_enableMotor=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);rr(c,a)};B.prototype.get_maxMotorForce=function(){return ow(this.a)};B.prototype.set_maxMotorForce=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Zu(c,a)};B.prototype.get_motorSpeed=function(){return Pb(this.a)};
B.prototype.set_motorSpeed=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);yn(c,a)};B.prototype.get_type=function(){return uw(this.a)};B.prototype.set_type=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Ah(c,a)};B.prototype.get_userData=function(){return aj(this.a)};B.prototype.set_userData=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);yr(c,a)};B.prototype.get_bodyA=function(){return n(Nr(this.a),q)};
B.prototype.set_bodyA=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Lo(c,a)};B.prototype.get_bodyB=function(){return n(Ck(this.a),q)};B.prototype.set_bodyB=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Fk(c,a)};B.prototype.get_collideConnected=function(){return!!Dl(this.a)};B.prototype.set_collideConnected=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);$m(c,a)};B.prototype.__destroy__=function(){Zd(this.a)};
function C(a){a&&"object"===typeof a&&(a=a.a);this.a=Ph(a);k(C)[this.a]=this}C.prototype=Object.create(g.prototype);C.prototype.constructor=C;C.prototype.b=C;C.c={};b.b2World=C;C.prototype.SetDestructionListener=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);ov(c,a)};C.prototype.SetContactFilter=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);vc(c,a)};C.prototype.SetContactListener=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);od(c,a)};
C.prototype.SetDebugDraw=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);lf(c,a)};C.prototype.CreateBody=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);return n(po(c,a),q)};C.prototype.DestroyBody=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Sc(c,a)};C.prototype.CreateJoint=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);return n(ng(c,a),p)};C.prototype.DestroyJoint=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Yq(c,a)};
C.prototype.Step=function(a,c,d){var e=this.a;a&&"object"===typeof a&&(a=a.a);c&&"object"===typeof c&&(c=c.a);d&&"object"===typeof d&&(d=d.a);Oj(e,a,c,d)};C.prototype.ClearForces=function(){Wg(this.a)};C.prototype.DrawDebugData=function(){Hm(this.a)};C.prototype.QueryAABB=function(a,c){var d=this.a;a&&"object"===typeof a&&(a=a.a);c&&"object"===typeof c&&(c=c.a);hv(d,a,c)};
C.prototype.RayCast=function(a,c,d){var e=this.a;a&&"object"===typeof a&&(a=a.a);c&&"object"===typeof c&&(c=c.a);d&&"object"===typeof d&&(d=d.a);Rs(e,a,c,d)};C.prototype.GetBodyList=function(){return n(Ns(this.a),q)};C.prototype.GetJointList=function(){return n(gr(this.a),p)};C.prototype.GetContactList=function(){return n(Wt(this.a),D)};C.prototype.SetAllowSleeping=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);ep(c,a)};C.prototype.GetAllowSleeping=function(){return!!Wh(this.a)};
C.prototype.SetWarmStarting=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);jc(c,a)};C.prototype.GetWarmStarting=function(){return!!Mo(this.a)};C.prototype.SetContinuousPhysics=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);nm(c,a)};C.prototype.GetContinuousPhysics=function(){return!!Bv(this.a)};C.prototype.SetSubStepping=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Ye(c,a)};C.prototype.GetSubStepping=function(){return!!Mq(this.a)};C.prototype.GetProxyCount=function(){return kd(this.a)};
C.prototype.GetBodyCount=function(){return Ql(this.a)};C.prototype.GetJointCount=function(){return on(this.a)};C.prototype.GetContactCount=function(){return xq(this.a)};C.prototype.GetTreeHeight=function(){return Jr(this.a)};C.prototype.GetTreeBalance=function(){return Zb(this.a)};C.prototype.GetTreeQuality=function(){return Pd(this.a)};C.prototype.SetGravity=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);qt(c,a)};C.prototype.GetGravity=function(){return n(Cc(this.a),r)};
C.prototype.IsLocked=function(){return!!Ub(this.a)};C.prototype.SetAutoClearForces=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);bd(c,a)};C.prototype.GetAutoClearForces=function(){return!!bk(this.a)};C.prototype.GetProfile=function(){return n(Qt(this.a),y)};C.prototype.Dump=function(){As(this.a)};C.prototype.__destroy__=function(){Nn(this.a)};function E(){throw"cannot construct a b2PrismaticJoint, no constructor in IDL";}E.prototype=Object.create(p.prototype);E.prototype.constructor=E;
E.prototype.b=E;E.c={};b.b2PrismaticJoint=E;E.prototype.GetLocalAnchorA=function(){return n(vl(this.a),r)};E.prototype.GetLocalAnchorB=function(){return n(Yo(this.a),r)};E.prototype.GetLocalAxisA=function(){return n(sh(this.a),r)};E.prototype.GetReferenceAngle=function(){return Wk(this.a)};E.prototype.GetJointTranslation=function(){return Sf(this.a)};E.prototype.GetJointSpeed=function(){return Rm(this.a)};E.prototype.IsLimitEnabled=function(){return!!Qh(this.a)};
E.prototype.EnableLimit=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);dm(c,a)};E.prototype.GetLowerLimit=function(){return Sd(this.a)};E.prototype.GetUpperLimit=function(){return Vj(this.a)};E.prototype.SetLimits=function(a,c){var d=this.a;a&&"object"===typeof a&&(a=a.a);c&&"object"===typeof c&&(c=c.a);Gc(d,a,c)};E.prototype.IsMotorEnabled=function(){return!!Ok(this.a)};E.prototype.EnableMotor=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);hl(c,a)};
E.prototype.SetMotorSpeed=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);ss(c,a)};E.prototype.GetMotorSpeed=function(){return Vf(this.a)};E.prototype.SetMaxMotorForce=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Aw(c,a)};E.prototype.GetMaxMotorForce=function(){return Jp(this.a)};E.prototype.GetMotorForce=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);return ii(c,a)};E.prototype.GetType=function(){return ge(this.a)};
E.prototype.GetBodyA=function(){return n(Ip(this.a),q)};E.prototype.GetBodyB=function(){return n(yt(this.a),q)};E.prototype.GetAnchorA=function(){return n(Mk(this.a),r)};E.prototype.GetAnchorB=function(){return n(Ul(this.a),r)};E.prototype.GetReactionForce=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);return n(Eh(c,a),r)};E.prototype.GetReactionTorque=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);return qg(c,a)};E.prototype.GetNext=function(){return n(Lr(this.a),p)};
E.prototype.GetUserData=function(){return Nv(this.a)};E.prototype.SetUserData=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);zj(c,a)};E.prototype.IsActive=function(){return!!jm(this.a)};E.prototype.GetCollideConnected=function(){return!!sg(this.a)};E.prototype.__destroy__=function(){Pf(this.a)};function kx(){throw"cannot construct a b2RayCastOutput, no constructor in IDL";}kx.prototype=Object.create(g.prototype);kx.prototype.constructor=kx;kx.prototype.b=kx;kx.c={};b.b2RayCastOutput=kx;
kx.prototype.get_normal=function(){return n(wf(this.a),r)};kx.prototype.set_normal=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);bh(c,a)};kx.prototype.get_fraction=function(){return rn(this.a)};kx.prototype.set_fraction=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Kd(c,a)};kx.prototype.__destroy__=function(){Fm(this.a)};function lx(){throw"cannot construct a b2ContactID, no constructor in IDL";}lx.prototype=Object.create(g.prototype);lx.prototype.constructor=lx;
lx.prototype.b=lx;lx.c={};b.b2ContactID=lx;lx.prototype.get_cf=function(){return n(ts(this.a),hx)};lx.prototype.set_cf=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);dj(c,a)};lx.prototype.get_key=function(){return bp(this.a)};lx.prototype.set_key=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);mf(c,a)};lx.prototype.__destroy__=function(){Ol(this.a)};function mx(){this.a=Cw();k(mx)[this.a]=this}mx.prototype=Object.create(Uw.prototype);mx.prototype.constructor=mx;mx.prototype.b=mx;
mx.c={};b.JSContactListener=mx;mx.prototype.BeginContact=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);eo(c,a)};mx.prototype.EndContact=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Nc(c,a)};mx.prototype.PreSolve=function(a,c){var d=this.a;a&&"object"===typeof a&&(a=a.a);c&&"object"===typeof c&&(c=c.a);$g(d,a,c)};mx.prototype.PostSolve=function(a,c){var d=this.a;a&&"object"===typeof a&&(a=a.a);c&&"object"===typeof c&&(c=c.a);gq(d,a,c)};mx.prototype.__destroy__=function(){Gm(this.a)};
function nx(a,c,d,e){a&&"object"===typeof a&&(a=a.a);c&&"object"===typeof c&&(c=c.a);d&&"object"===typeof d&&(d=d.a);e&&"object"===typeof e&&(e=e.a);this.a=void 0===a?Mr():void 0===c?_emscripten_bind_b2Mat22_b2Mat22_1(a):void 0===d?Kr(a,c):void 0===e?_emscripten_bind_b2Mat22_b2Mat22_3(a,c,d):wu(a,c,d,e);k(nx)[this.a]=this}nx.prototype=Object.create(g.prototype);nx.prototype.constructor=nx;nx.prototype.b=nx;nx.c={};b.b2Mat22=nx;
nx.prototype.Set=function(a,c){var d=this.a;a&&"object"===typeof a&&(a=a.a);c&&"object"===typeof c&&(c=c.a);$q(d,a,c)};nx.prototype.SetIdentity=function(){su(this.a)};nx.prototype.SetZero=function(){Sj(this.a)};nx.prototype.GetInverse=function(){return n(Kq(this.a),nx)};nx.prototype.Solve=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);return n(Po(c,a),r)};nx.prototype.get_ex=function(){return n(wo(this.a),r)};
nx.prototype.set_ex=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Rq(c,a)};nx.prototype.get_ey=function(){return n(ru(this.a),r)};nx.prototype.set_ey=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Qr(c,a)};nx.prototype.__destroy__=function(){Lu(this.a)};function F(){this.a=pu();k(F)[this.a]=this}F.prototype=Object.create(t.prototype);F.prototype.constructor=F;F.prototype.b=F;F.c={};b.b2WheelJointDef=F;
F.prototype.Initialize=function(a,c,d,e){var h=this.a;a&&"object"===typeof a&&(a=a.a);c&&"object"===typeof c&&(c=c.a);d&&"object"===typeof d&&(d=d.a);e&&"object"===typeof e&&(e=e.a);Xi(h,a,c,d,e)};F.prototype.get_localAnchorA=function(){return n($k(this.a),r)};F.prototype.set_localAnchorA=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Ie(c,a)};F.prototype.get_localAnchorB=function(){return n(mn(this.a),r)};
F.prototype.set_localAnchorB=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);mw(c,a)};F.prototype.get_localAxisA=function(){return n(Oq(this.a),r)};F.prototype.set_localAxisA=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);aw(c,a)};F.prototype.get_enableMotor=function(){return!!fw(this.a)};F.prototype.set_enableMotor=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);yk(c,a)};F.prototype.get_maxMotorTorque=function(){return yg(this.a)};
F.prototype.set_maxMotorTorque=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);jk(c,a)};F.prototype.get_motorSpeed=function(){return Fr(this.a)};F.prototype.set_motorSpeed=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);jp(c,a)};F.prototype.get_frequencyHz=function(){return Xs(this.a)};F.prototype.set_frequencyHz=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Lq(c,a)};F.prototype.get_dampingRatio=function(){return qn(this.a)};
F.prototype.set_dampingRatio=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Hv(c,a)};F.prototype.get_type=function(){return $t(this.a)};F.prototype.set_type=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Od(c,a)};F.prototype.get_userData=function(){return mv(this.a)};F.prototype.set_userData=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Yg(c,a)};F.prototype.get_bodyA=function(){return n(ww(this.a),q)};
F.prototype.set_bodyA=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);zt(c,a)};F.prototype.get_bodyB=function(){return n(gn(this.a),q)};F.prototype.set_bodyB=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Hp(c,a)};F.prototype.get_collideConnected=function(){return!!wc(this.a)};F.prototype.set_collideConnected=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);fr(c,a)};F.prototype.__destroy__=function(){df(this.a)};function ox(){this.a=Rg();k(ox)[this.a]=this}
ox.prototype=Object.create(Ww.prototype);ox.prototype.constructor=ox;ox.prototype.b=ox;ox.c={};b.b2CircleShape=ox;ox.prototype.GetType=function(){return hh(this.a)};ox.prototype.GetChildCount=function(){return Re(this.a)};ox.prototype.TestPoint=function(a,c){var d=this.a;a&&"object"===typeof a&&(a=a.a);c&&"object"===typeof c&&(c=c.a);return!!nq(d,a,c)};
ox.prototype.RayCast=function(a,c,d,e){var h=this.a;a&&"object"===typeof a&&(a=a.a);c&&"object"===typeof c&&(c=c.a);d&&"object"===typeof d&&(d=d.a);e&&"object"===typeof e&&(e=e.a);return!!Pj(h,a,c,d,e)};ox.prototype.ComputeAABB=function(a,c,d){var e=this.a;a&&"object"===typeof a&&(a=a.a);c&&"object"===typeof c&&(c=c.a);d&&"object"===typeof d&&(d=d.a);Is(e,a,c,d)};ox.prototype.ComputeMass=function(a,c){var d=this.a;a&&"object"===typeof a&&(a=a.a);c&&"object"===typeof c&&(c=c.a);jq(d,a,c)};
ox.prototype.get_m_p=function(){return n(Ag(this.a),r)};ox.prototype.set_m_p=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Vi(c,a)};ox.prototype.get_m_type=function(){return Sr(this.a)};ox.prototype.set_m_type=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);xe(c,a)};ox.prototype.get_m_radius=function(){return Uf(this.a)};ox.prototype.set_m_radius=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);ne(c,a)};ox.prototype.__destroy__=function(){vq(this.a)};
function G(){this.a=Tv();k(G)[this.a]=this}G.prototype=Object.create(t.prototype);G.prototype.constructor=G;G.prototype.b=G;G.c={};b.b2WeldJointDef=G;G.prototype.Initialize=function(a,c,d){var e=this.a;a&&"object"===typeof a&&(a=a.a);c&&"object"===typeof c&&(c=c.a);d&&"object"===typeof d&&(d=d.a);Ys(e,a,c,d)};G.prototype.get_localAnchorA=function(){return n(et(this.a),r)};G.prototype.set_localAnchorA=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);ti(c,a)};
G.prototype.get_localAnchorB=function(){return n(ku(this.a),r)};G.prototype.set_localAnchorB=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);xs(c,a)};G.prototype.get_referenceAngle=function(){return Uq(this.a)};G.prototype.set_referenceAngle=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);lu(c,a)};G.prototype.get_frequencyHz=function(){return ig(this.a)};G.prototype.set_frequencyHz=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);pr(c,a)};G.prototype.get_dampingRatio=function(){return Yp(this.a)};
G.prototype.set_dampingRatio=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Yi(c,a)};G.prototype.get_type=function(){return op(this.a)};G.prototype.set_type=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);as(c,a)};G.prototype.get_userData=function(){return Et(this.a)};G.prototype.set_userData=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Xo(c,a)};G.prototype.get_bodyA=function(){return n(Nu(this.a),q)};
G.prototype.set_bodyA=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Ke(c,a)};G.prototype.get_bodyB=function(){return n(Av(this.a),q)};G.prototype.set_bodyB=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);qv(c,a)};G.prototype.get_collideConnected=function(){return!!oi(this.a)};G.prototype.set_collideConnected=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Yc(c,a)};G.prototype.__destroy__=function(){Oo(this.a)};function px(){this.a=Dp();k(px)[this.a]=this}
px.prototype=Object.create(g.prototype);px.prototype.constructor=px;px.prototype.b=px;px.c={};b.b2MassData=px;px.prototype.get_mass=function(){return Xv(this.a)};px.prototype.set_mass=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Oc(c,a)};px.prototype.get_center=function(){return n(Ve(this.a),r)};px.prototype.set_center=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Bq(c,a)};px.prototype.get_I=function(){return Er(this.a)};
px.prototype.set_I=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Ss(c,a)};px.prototype.__destroy__=function(){Ts(this.a)};function qx(){throw"cannot construct a b2GearJoint, no constructor in IDL";}qx.prototype=Object.create(p.prototype);qx.prototype.constructor=qx;qx.prototype.b=qx;qx.c={};b.b2GearJoint=qx;qx.prototype.GetJoint1=function(){return n(jd(this.a),p)};qx.prototype.GetJoint2=function(){return n(Dk(this.a),p)};
qx.prototype.SetRatio=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);tn(c,a)};qx.prototype.GetRatio=function(){return ud(this.a)};qx.prototype.GetType=function(){return Iv(this.a)};qx.prototype.GetBodyA=function(){return n(bm(this.a),q)};qx.prototype.GetBodyB=function(){return n(tq(this.a),q)};qx.prototype.GetAnchorA=function(){return n(md(this.a),r)};qx.prototype.GetAnchorB=function(){return n(fu(this.a),r)};
qx.prototype.GetReactionForce=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);return n(Oi(c,a),r)};qx.prototype.GetReactionTorque=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);return Xc(c,a)};qx.prototype.GetNext=function(){return n(Wu(this.a),p)};qx.prototype.GetUserData=function(){return qe(this.a)};qx.prototype.SetUserData=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);zl(c,a)};qx.prototype.IsActive=function(){return!!ki(this.a)};qx.prototype.GetCollideConnected=function(){return!!Fd(this.a)};
qx.prototype.__destroy__=function(){Rf(this.a)};function H(){throw"cannot construct a b2WeldJoint, no constructor in IDL";}H.prototype=Object.create(p.prototype);H.prototype.constructor=H;H.prototype.b=H;H.c={};b.b2WeldJoint=H;H.prototype.GetLocalAnchorA=function(){return n(Eu(this.a),r)};H.prototype.GetLocalAnchorB=function(){return n(hn(this.a),r)};H.prototype.SetFrequency=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Zg(c,a)};H.prototype.GetFrequency=function(){return Pk(this.a)};
H.prototype.SetDampingRatio=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Yd(c,a)};H.prototype.GetDampingRatio=function(){return Fs(this.a)};H.prototype.Dump=function(){Eo(this.a)};H.prototype.GetType=function(){return so(this.a)};H.prototype.GetBodyA=function(){return n(xf(this.a),q)};H.prototype.GetBodyB=function(){return n(We(this.a),q)};H.prototype.GetAnchorA=function(){return n(dq(this.a),r)};H.prototype.GetAnchorB=function(){return n(br(this.a),r)};
H.prototype.GetReactionForce=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);return n(ps(c,a),r)};H.prototype.GetReactionTorque=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);return qc(c,a)};H.prototype.GetNext=function(){return n(ro(this.a),p)};H.prototype.GetUserData=function(){return Zk(this.a)};H.prototype.SetUserData=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);fi(c,a)};H.prototype.IsActive=function(){return!!lc(this.a)};H.prototype.GetCollideConnected=function(){return!!Jq(this.a)};
H.prototype.__destroy__=function(){eq(this.a)};function rx(){this.a=Yt();k(rx)[this.a]=this}rx.prototype=Object.create(g.prototype);rx.prototype.constructor=rx;rx.prototype.b=rx;rx.c={};b.b2JointEdge=rx;rx.prototype.get_other=function(){return n(Li(this.a),q)};rx.prototype.set_other=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);qd(c,a)};rx.prototype.get_joint=function(){return n(uv(this.a),p)};rx.prototype.set_joint=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);hc(c,a)};
rx.prototype.get_prev=function(){return n(Rl(this.a),rx)};rx.prototype.set_prev=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);pg(c,a)};rx.prototype.get_next=function(){return n(io(this.a),rx)};rx.prototype.set_next=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);ar(c,a)};rx.prototype.__destroy__=function(){bo(this.a)};function I(){this.a=Bp();k(I)[this.a]=this}I.prototype=Object.create(t.prototype);I.prototype.constructor=I;I.prototype.b=I;I.c={};b.b2PulleyJointDef=I;
I.prototype.Initialize=function(a,c,d,e,h,l,m){var K=this.a;a&&"object"===typeof a&&(a=a.a);c&&"object"===typeof c&&(c=c.a);d&&"object"===typeof d&&(d=d.a);e&&"object"===typeof e&&(e=e.a);h&&"object"===typeof h&&(h=h.a);l&&"object"===typeof l&&(l=l.a);m&&"object"===typeof m&&(m=m.a);Ev(K,a,c,d,e,h,l,m)};I.prototype.get_groundAnchorA=function(){return n(Tm(this.a),r)};I.prototype.set_groundAnchorA=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);yw(c,a)};
I.prototype.get_groundAnchorB=function(){return n(kj(this.a),r)};I.prototype.set_groundAnchorB=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Xr(c,a)};I.prototype.get_localAnchorA=function(){return n(Hc(this.a),r)};I.prototype.set_localAnchorA=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);mq(c,a)};I.prototype.get_localAnchorB=function(){return n(wt(this.a),r)};I.prototype.set_localAnchorB=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);zd(c,a)};
I.prototype.get_lengthA=function(){return Hl(this.a)};I.prototype.set_lengthA=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);lg(c,a)};I.prototype.get_lengthB=function(){return ei(this.a)};I.prototype.set_lengthB=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Ee(c,a)};I.prototype.get_ratio=function(){return ve(this.a)};I.prototype.set_ratio=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);og(c,a)};I.prototype.get_type=function(){return Jl(this.a)};
I.prototype.set_type=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);al(c,a)};I.prototype.get_userData=function(){return Ek(this.a)};I.prototype.set_userData=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);qm(c,a)};I.prototype.get_bodyA=function(){return n(Fc(this.a),q)};I.prototype.set_bodyA=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);rw(c,a)};I.prototype.get_bodyB=function(){return n(Pg(this.a),q)};
I.prototype.set_bodyB=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Bf(c,a)};I.prototype.get_collideConnected=function(){return!!Bw(this.a)};I.prototype.set_collideConnected=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);bu(c,a)};I.prototype.__destroy__=function(){Ii(this.a)};function sx(){this.a=Xh();k(sx)[this.a]=this}sx.prototype=Object.create(g.prototype);sx.prototype.constructor=sx;sx.prototype.b=sx;sx.c={};b.b2ManifoldPoint=sx;
sx.prototype.get_localPoint=function(){return n(tv(this.a),r)};sx.prototype.set_localPoint=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Ls(c,a)};sx.prototype.get_normalImpulse=function(){return Hj(this.a)};sx.prototype.set_normalImpulse=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Hh(c,a)};sx.prototype.get_tangentImpulse=function(){return Wp(this.a)};sx.prototype.set_tangentImpulse=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Ei(c,a)};
sx.prototype.get_id=function(){return n(Tf(this.a),lx)};sx.prototype.set_id=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);fn(c,a)};sx.prototype.__destroy__=function(){Sq(this.a)};function tx(a,c){a&&"object"===typeof a&&(a=a.a);c&&"object"===typeof c&&(c=c.a);this.a=void 0===a?Fh():void 0===c?_emscripten_bind_b2Transform_b2Transform_1(a):ns(a,c);k(tx)[this.a]=this}tx.prototype=Object.create(g.prototype);tx.prototype.constructor=tx;tx.prototype.b=tx;tx.c={};b.b2Transform=tx;
tx.prototype.SetIdentity=function(){Cq(this.a)};tx.prototype.Set=function(a,c){var d=this.a;a&&"object"===typeof a&&(a=a.a);c&&"object"===typeof c&&(c=c.a);uh(d,a,c)};tx.prototype.get_p=function(){return n(Ot(this.a),r)};tx.prototype.set_p=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);rv(c,a)};tx.prototype.get_q=function(){return n(fd(this.a),ex)};tx.prototype.set_q=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);ie(c,a)};tx.prototype.__destroy__=function(){le(this.a)};
function J(){this.a=Zi();k(J)[this.a]=this}J.prototype=Object.create(Ww.prototype);J.prototype.constructor=J;J.prototype.b=J;J.c={};b.b2ChainShape=J;J.prototype.Clear=function(){uq(this.a)};J.prototype.CreateLoop=function(a,c){var d=this.a;a&&"object"===typeof a&&(a=a.a);c&&"object"===typeof c&&(c=c.a);gi(d,a,c)};J.prototype.CreateChain=function(a,c){var d=this.a;a&&"object"===typeof a&&(a=a.a);c&&"object"===typeof c&&(c=c.a);Qc(d,a,c)};
J.prototype.SetPrevVertex=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);zn(c,a)};J.prototype.SetNextVertex=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Qn(c,a)};J.prototype.GetChildEdge=function(a,c){var d=this.a;a&&"object"===typeof a&&(a=a.a);c&&"object"===typeof c&&(c=c.a);ht(d,a,c)};J.prototype.GetType=function(){return $l(this.a)};J.prototype.GetChildCount=function(){return Qg(this.a)};
J.prototype.TestPoint=function(a,c){var d=this.a;a&&"object"===typeof a&&(a=a.a);c&&"object"===typeof c&&(c=c.a);return!!Vk(d,a,c)};J.prototype.RayCast=function(a,c,d,e){var h=this.a;a&&"object"===typeof a&&(a=a.a);c&&"object"===typeof c&&(c=c.a);d&&"object"===typeof d&&(d=d.a);e&&"object"===typeof e&&(e=e.a);return!!qs(h,a,c,d,e)};J.prototype.ComputeAABB=function(a,c,d){var e=this.a;a&&"object"===typeof a&&(a=a.a);c&&"object"===typeof c&&(c=c.a);d&&"object"===typeof d&&(d=d.a);oc(e,a,c,d)};
J.prototype.ComputeMass=function(a,c){var d=this.a;a&&"object"===typeof a&&(a=a.a);c&&"object"===typeof c&&(c=c.a);Sv(d,a,c)};J.prototype.get_m_vertices=function(){return n($b(this.a),r)};J.prototype.set_m_vertices=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);rf(c,a)};J.prototype.get_m_count=function(){return Ob(this.a)};J.prototype.set_m_count=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);mt(c,a)};J.prototype.get_m_prevVertex=function(){return n(Ug(this.a),r)};
J.prototype.set_m_prevVertex=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);On(c,a)};J.prototype.get_m_nextVertex=function(){return n(hf(this.a),r)};J.prototype.set_m_nextVertex=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Mc(c,a)};J.prototype.get_m_hasPrevVertex=function(){return!!Ap(this.a)};J.prototype.set_m_hasPrevVertex=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Nf(c,a)};J.prototype.get_m_hasNextVertex=function(){return!!Pn(this.a)};
J.prototype.set_m_hasNextVertex=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Pr(c,a)};J.prototype.get_m_type=function(){return jj(this.a)};J.prototype.set_m_type=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);cg(c,a)};J.prototype.get_m_radius=function(){return vs(this.a)};J.prototype.set_m_radius=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);ys(c,a)};J.prototype.__destroy__=function(){yl(this.a)};
function ux(a,c,d){a&&"object"===typeof a&&(a=a.a);c&&"object"===typeof c&&(c=c.a);d&&"object"===typeof d&&(d=d.a);this.a=void 0===a?Ws():void 0===c?_emscripten_bind_b2Color_b2Color_1(a):void 0===d?_emscripten_bind_b2Color_b2Color_2(a,c):Vs(a,c,d);k(ux)[this.a]=this}ux.prototype=Object.create(g.prototype);ux.prototype.constructor=ux;ux.prototype.b=ux;ux.c={};b.b2Color=ux;
ux.prototype.Set=function(a,c,d){var e=this.a;a&&"object"===typeof a&&(a=a.a);c&&"object"===typeof c&&(c=c.a);d&&"object"===typeof d&&(d=d.a);vw(e,a,c,d)};ux.prototype.get_r=function(){return cw(this.a)};ux.prototype.set_r=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Ld(c,a)};ux.prototype.get_g=function(){return Qo(this.a)};ux.prototype.set_g=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Xb(c,a)};ux.prototype.get_b=function(){return Gs(this.a)};
ux.prototype.set_b=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Te(c,a)};ux.prototype.__destroy__=function(){yp(this.a)};function L(){throw"cannot construct a b2RopeJoint, no constructor in IDL";}L.prototype=Object.create(p.prototype);L.prototype.constructor=L;L.prototype.b=L;L.c={};b.b2RopeJoint=L;L.prototype.GetLocalAnchorA=function(){return n(ir(this.a),r)};L.prototype.GetLocalAnchorB=function(){return n(Hi(this.a),r)};
L.prototype.SetMaxLength=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Gw(c,a)};L.prototype.GetMaxLength=function(){return pe(this.a)};L.prototype.GetLimitState=function(){return ug(this.a)};L.prototype.GetType=function(){return fp(this.a)};L.prototype.GetBodyA=function(){return n(cv(this.a),q)};L.prototype.GetBodyB=function(){return n(Pq(this.a),q)};L.prototype.GetAnchorA=function(){return n(Bi(this.a),r)};L.prototype.GetAnchorB=function(){return n(ze(this.a),r)};
L.prototype.GetReactionForce=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);return n(Js(c,a),r)};L.prototype.GetReactionTorque=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);return Gv(c,a)};L.prototype.GetNext=function(){return n(So(this.a),p)};L.prototype.GetUserData=function(){return Rc(this.a)};L.prototype.SetUserData=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);hs(c,a)};L.prototype.IsActive=function(){return!!gu(this.a)};L.prototype.GetCollideConnected=function(){return!!cu(this.a)};
L.prototype.__destroy__=function(){Xq(this.a)};function vx(){throw"cannot construct a b2RayCastInput, no constructor in IDL";}vx.prototype=Object.create(g.prototype);vx.prototype.constructor=vx;vx.prototype.b=vx;vx.c={};b.b2RayCastInput=vx;vx.prototype.get_p1=function(){return n(up(this.a),r)};vx.prototype.set_p1=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Lj(c,a)};vx.prototype.get_p2=function(){return n(Xk(this.a),r)};
vx.prototype.set_p2=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);tf(c,a)};vx.prototype.get_maxFraction=function(){return am(this.a)};vx.prototype.set_maxFraction=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);jo(c,a)};vx.prototype.__destroy__=function(){Fe(this.a)};function M(){this.a=Mi();k(M)[this.a]=this}M.prototype=Object.create(Ww.prototype);M.prototype.constructor=M;M.prototype.b=M;M.c={};b.b2PolygonShape=M;
M.prototype.Set=function(a,c){var d=this.a;a&&"object"===typeof a&&(a=a.a);c&&"object"===typeof c&&(c=c.a);Ni(d,a,c)};M.prototype.SetAsBox=function(a,c,d,e){var h=this.a;a&&"object"===typeof a&&(a=a.a);c&&"object"===typeof c&&(c=c.a);d&&"object"===typeof d&&(d=d.a);e&&"object"===typeof e&&(e=e.a);void 0===d?tw(h,a,c):void 0===e?_emscripten_bind_b2PolygonShape_SetAsBox_3(h,a,c,d):yu(h,a,c,d,e)};M.prototype.GetVertexCount=function(){return Pp(this.a)};
M.prototype.GetVertex=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);return n(pt(c,a),r)};M.prototype.GetType=function(){return ih(this.a)};M.prototype.GetChildCount=function(){return Uo(this.a)};M.prototype.TestPoint=function(a,c){var d=this.a;a&&"object"===typeof a&&(a=a.a);c&&"object"===typeof c&&(c=c.a);return!!Ki(d,a,c)};
M.prototype.RayCast=function(a,c,d,e){var h=this.a;a&&"object"===typeof a&&(a=a.a);c&&"object"===typeof c&&(c=c.a);d&&"object"===typeof d&&(d=d.a);e&&"object"===typeof e&&(e=e.a);return!!Yb(h,a,c,d,e)};M.prototype.ComputeAABB=function(a,c,d){var e=this.a;a&&"object"===typeof a&&(a=a.a);c&&"object"===typeof c&&(c=c.a);d&&"object"===typeof d&&(d=d.a);sl(e,a,c,d)};M.prototype.ComputeMass=function(a,c){var d=this.a;a&&"object"===typeof a&&(a=a.a);c&&"object"===typeof c&&(c=c.a);gl(d,a,c)};
M.prototype.get_m_centroid=function(){return n(xl(this.a),r)};M.prototype.set_m_centroid=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);er(c,a)};M.prototype.get_m_count=function(){return Ai(this.a)};M.prototype.set_m_count=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);gd(c,a)};M.prototype.get_m_type=function(){return zw(this.a)};M.prototype.set_m_type=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Su(c,a)};M.prototype.get_m_radius=function(){return sj(this.a)};
M.prototype.set_m_radius=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Ew(c,a)};M.prototype.__destroy__=function(){je(this.a)};function N(){this.a=$p();k(N)[this.a]=this}N.prototype=Object.create(Ww.prototype);N.prototype.constructor=N;N.prototype.b=N;N.c={};b.b2EdgeShape=N;N.prototype.Set=function(a,c){var d=this.a;a&&"object"===typeof a&&(a=a.a);c&&"object"===typeof c&&(c=c.a);Ej(d,a,c)};N.prototype.GetType=function(){return Qq(this.a)};N.prototype.GetChildCount=function(){return xh(this.a)};
N.prototype.TestPoint=function(a,c){var d=this.a;a&&"object"===typeof a&&(a=a.a);c&&"object"===typeof c&&(c=c.a);return!!wl(d,a,c)};N.prototype.RayCast=function(a,c,d,e){var h=this.a;a&&"object"===typeof a&&(a=a.a);c&&"object"===typeof c&&(c=c.a);d&&"object"===typeof d&&(d=d.a);e&&"object"===typeof e&&(e=e.a);return!!qi(h,a,c,d,e)};N.prototype.ComputeAABB=function(a,c,d){var e=this.a;a&&"object"===typeof a&&(a=a.a);c&&"object"===typeof c&&(c=c.a);d&&"object"===typeof d&&(d=d.a);dr(e,a,c,d)};
N.prototype.ComputeMass=function(a,c){var d=this.a;a&&"object"===typeof a&&(a=a.a);c&&"object"===typeof c&&(c=c.a);cn(d,a,c)};N.prototype.get_m_vertex1=function(){return n(kl(this.a),r)};N.prototype.set_m_vertex1=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);zu(c,a)};N.prototype.get_m_vertex2=function(){return n(ho(this.a),r)};N.prototype.set_m_vertex2=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Eq(c,a)};N.prototype.get_m_vertex0=function(){return n(li(this.a),r)};
N.prototype.set_m_vertex0=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Kv(c,a)};N.prototype.get_m_vertex3=function(){return n(Aq(this.a),r)};N.prototype.set_m_vertex3=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);eu(c,a)};N.prototype.get_m_hasVertex0=function(){return!!Pl(this.a)};N.prototype.set_m_hasVertex0=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);oe(c,a)};N.prototype.get_m_hasVertex3=function(){return!!Aj(this.a)};
N.prototype.set_m_hasVertex3=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);gc(c,a)};N.prototype.get_m_type=function(){return To(this.a)};N.prototype.set_m_type=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Yh(c,a)};N.prototype.get_m_radius=function(){return Ir(this.a)};N.prototype.set_m_radius=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);de(c,a)};N.prototype.__destroy__=function(){zi(this.a)};function wx(){this.a=Cs();k(wx)[this.a]=this}wx.prototype=Object.create(Xw.prototype);
wx.prototype.constructor=wx;wx.prototype.b=wx;wx.c={};b.JSContactFilter=wx;wx.prototype.ShouldCollide=function(a,c){var d=this.a;a&&"object"===typeof a&&(a=a.a);c&&"object"===typeof c&&(c=c.a);return!!Ij(d,a,c)};wx.prototype.__destroy__=function(){qj(this.a)};function Q(){this.a=ym();k(Q)[this.a]=this}Q.prototype=Object.create(t.prototype);Q.prototype.constructor=Q;Q.prototype.b=Q;Q.c={};b.b2RevoluteJointDef=Q;
Q.prototype.Initialize=function(a,c,d){var e=this.a;a&&"object"===typeof a&&(a=a.a);c&&"object"===typeof c&&(c=c.a);d&&"object"===typeof d&&(d=d.a);Ad(e,a,c,d)};Q.prototype.get_localAnchorA=function(){return n(bn(this.a),r)};Q.prototype.set_localAnchorA=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);gj(c,a)};Q.prototype.get_localAnchorB=function(){return n(oj(this.a),r)};Q.prototype.set_localAnchorB=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);jn(c,a)};
Q.prototype.get_referenceAngle=function(){return pj(this.a)};Q.prototype.set_referenceAngle=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);wp(c,a)};Q.prototype.get_enableLimit=function(){return!!Bm(this.a)};Q.prototype.set_enableLimit=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);No(c,a)};Q.prototype.get_lowerAngle=function(){return Rk(this.a)};Q.prototype.set_lowerAngle=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);ao(c,a)};Q.prototype.get_upperAngle=function(){return Kp(this.a)};
Q.prototype.set_upperAngle=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Xl(c,a)};Q.prototype.get_enableMotor=function(){return!!rj(this.a)};Q.prototype.set_enableMotor=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);$h(c,a)};Q.prototype.get_motorSpeed=function(){return uf(this.a)};Q.prototype.set_motorSpeed=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);dw(c,a)};Q.prototype.get_maxMotorTorque=function(){return Xp(this.a)};
Q.prototype.set_maxMotorTorque=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);pv(c,a)};Q.prototype.get_type=function(){return Yl(this.a)};Q.prototype.set_type=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Kj(c,a)};Q.prototype.get_userData=function(){return Xm(this.a)};Q.prototype.set_userData=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);uc(c,a)};Q.prototype.get_bodyA=function(){return n(xt(this.a),q)};
Q.prototype.set_bodyA=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);qh(c,a)};Q.prototype.get_bodyB=function(){return n(xj(this.a),q)};Q.prototype.set_bodyB=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);dg(c,a)};Q.prototype.get_collideConnected=function(){return!!Yr(this.a)};Q.prototype.set_collideConnected=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Io(c,a)};Q.prototype.__destroy__=function(){Zo(this.a)};function xx(){this.a=Mt();k(xx)[this.a]=this}
xx.prototype=Object.create(Sw.prototype);xx.prototype.constructor=xx;xx.prototype.b=xx;xx.c={};b.JSDraw=xx;xx.prototype.DrawPolygon=function(a,c,d){var e=this.a;a&&"object"===typeof a&&(a=a.a);c&&"object"===typeof c&&(c=c.a);d&&"object"===typeof d&&(d=d.a);fl(e,a,c,d)};xx.prototype.DrawSolidPolygon=function(a,c,d){var e=this.a;a&&"object"===typeof a&&(a=a.a);c&&"object"===typeof c&&(c=c.a);d&&"object"===typeof d&&(d=d.a);Ef(e,a,c,d)};
xx.prototype.DrawCircle=function(a,c,d){var e=this.a;a&&"object"===typeof a&&(a=a.a);c&&"object"===typeof c&&(c=c.a);d&&"object"===typeof d&&(d=d.a);kc(e,a,c,d)};xx.prototype.DrawSolidCircle=function(a,c,d,e){var h=this.a;a&&"object"===typeof a&&(a=a.a);c&&"object"===typeof c&&(c=c.a);d&&"object"===typeof d&&(d=d.a);e&&"object"===typeof e&&(e=e.a);ac(h,a,c,d,e)};
xx.prototype.DrawSegment=function(a,c,d){var e=this.a;a&&"object"===typeof a&&(a=a.a);c&&"object"===typeof c&&(c=c.a);d&&"object"===typeof d&&(d=d.a);$e(e,a,c,d)};xx.prototype.DrawTransform=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);lj(c,a)};xx.prototype.__destroy__=function(){Hf(this.a)};function R(){throw"cannot construct a b2WheelJoint, no constructor in IDL";}R.prototype=Object.create(p.prototype);R.prototype.constructor=R;R.prototype.b=R;R.c={};b.b2WheelJoint=R;
R.prototype.GetLocalAnchorA=function(){return n(Mf(this.a),r)};R.prototype.GetLocalAnchorB=function(){return n(qw(this.a),r)};R.prototype.GetLocalAxisA=function(){return n($u(this.a),r)};R.prototype.GetJointTranslation=function(){return es(this.a)};R.prototype.GetJointSpeed=function(){return pf(this.a)};R.prototype.IsMotorEnabled=function(){return!!Up(this.a)};R.prototype.EnableMotor=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Cf(c,a)};
R.prototype.SetMotorSpeed=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Ud(c,a)};R.prototype.GetMotorSpeed=function(){return pn(this.a)};R.prototype.SetMaxMotorTorque=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Wj(c,a)};R.prototype.GetMaxMotorTorque=function(){return nf(this.a)};R.prototype.GetMotorTorque=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);return gs(c,a)};R.prototype.SetSpringFrequencyHz=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Ch(c,a)};
R.prototype.GetSpringFrequencyHz=function(){return iw(this.a)};R.prototype.SetSpringDampingRatio=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Wn(c,a)};R.prototype.GetSpringDampingRatio=function(){return Lb(this.a)};R.prototype.GetType=function(){return Tu(this.a)};R.prototype.GetBodyA=function(){return n(In(this.a),q)};R.prototype.GetBodyB=function(){return n(hm(this.a),q)};R.prototype.GetAnchorA=function(){return n(wr(this.a),r)};
R.prototype.GetAnchorB=function(){return n(sw(this.a),r)};R.prototype.GetReactionForce=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);return n(Xe(c,a),r)};R.prototype.GetReactionTorque=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);return xm(c,a)};R.prototype.GetNext=function(){return n(Fn(this.a),p)};R.prototype.GetUserData=function(){return Dn(this.a)};R.prototype.SetUserData=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);kt(c,a)};R.prototype.IsActive=function(){return!!js(this.a)};
R.prototype.GetCollideConnected=function(){return!!Hr(this.a)};R.prototype.__destroy__=function(){Dw(this.a)};function S(){throw"cannot construct a b2PulleyJoint, no constructor in IDL";}S.prototype=Object.create(p.prototype);S.prototype.constructor=S;S.prototype.b=S;S.c={};b.b2PulleyJoint=S;S.prototype.GetGroundAnchorA=function(){return n(Vc(this.a),r)};S.prototype.GetGroundAnchorB=function(){return n(Wf(this.a),r)};S.prototype.GetLengthA=function(){return Kn(this.a)};S.prototype.GetLengthB=function(){return Uj(this.a)};
S.prototype.GetRatio=function(){return co(this.a)};S.prototype.GetCurrentLengthA=function(){return Hk(this.a)};S.prototype.GetCurrentLengthB=function(){return wi(this.a)};S.prototype.GetType=function(){return si(this.a)};S.prototype.GetBodyA=function(){return n(hq(this.a),q)};S.prototype.GetBodyB=function(){return n(Nd(this.a),q)};S.prototype.GetAnchorA=function(){return n(Iu(this.a),r)};S.prototype.GetAnchorB=function(){return n(wm(this.a),r)};
S.prototype.GetReactionForce=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);return n(uu(c,a),r)};S.prototype.GetReactionTorque=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);return Qu(c,a)};S.prototype.GetNext=function(){return n(ij(this.a),p)};S.prototype.GetUserData=function(){return pc(this.a)};S.prototype.SetUserData=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Qb(c,a)};S.prototype.IsActive=function(){return!!ai(this.a)};S.prototype.GetCollideConnected=function(){return!!Kt(this.a)};
S.prototype.__destroy__=function(){yo(this.a)};function T(){this.a=pp();k(T)[this.a]=this}T.prototype=Object.create(t.prototype);T.prototype.constructor=T;T.prototype.b=T;T.c={};b.b2MouseJointDef=T;T.prototype.get_target=function(){return n(om(this.a),r)};T.prototype.set_target=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);rd(c,a)};T.prototype.get_maxForce=function(){return Xu(this.a)};T.prototype.set_maxForce=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);ul(c,a)};
T.prototype.get_frequencyHz=function(){return sp(this.a)};T.prototype.set_frequencyHz=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Sm(c,a)};T.prototype.get_dampingRatio=function(){return ag(this.a)};T.prototype.set_dampingRatio=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);zo(c,a)};T.prototype.get_type=function(){return mp(this.a)};T.prototype.set_type=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Hd(c,a)};T.prototype.get_userData=function(){return Hs(this.a)};
T.prototype.set_userData=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);xc(c,a)};T.prototype.get_bodyA=function(){return n(tk(this.a),q)};T.prototype.set_bodyA=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);nd(c,a)};T.prototype.get_bodyB=function(){return n(gg(this.a),q)};T.prototype.set_bodyB=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);gh(c,a)};T.prototype.get_collideConnected=function(){return!!rt(this.a)};
T.prototype.set_collideConnected=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Gq(c,a)};T.prototype.__destroy__=function(){If(this.a)};function D(){throw"cannot construct a b2Contact, no constructor in IDL";}D.prototype=Object.create(g.prototype);D.prototype.constructor=D;D.prototype.b=D;D.c={};b.b2Contact=D;D.prototype.GetManifold=function(){return n(ct(this.a),jx)};D.prototype.IsTouching=function(){return!!$d(this.a)};
D.prototype.SetEnabled=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);jf(c,a)};D.prototype.IsEnabled=function(){return!!mg(this.a)};D.prototype.GetNext=function(){return n(hd(this.a),D)};D.prototype.GetFixtureA=function(){return n(ue(this.a),v)};D.prototype.GetChildIndexA=function(){return Uv(this.a)};D.prototype.GetFixtureB=function(){return n(Rv(this.a),v)};D.prototype.GetChildIndexB=function(){return fh(this.a)};
D.prototype.SetFriction=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Fq(c,a)};D.prototype.GetFriction=function(){return Kh(this.a)};D.prototype.ResetFriction=function(){yh(this.a)};D.prototype.SetRestitution=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);yq(c,a)};D.prototype.GetRestitution=function(){return Vm(this.a)};D.prototype.ResetRestitution=function(){Vh(this.a)};D.prototype.SetTangentSpeed=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Ri(c,a)};
D.prototype.GetTangentSpeed=function(){return dd(this.a)};function U(){this.a=sm();k(U)[this.a]=this}U.prototype=Object.create(t.prototype);U.prototype.constructor=U;U.prototype.b=U;U.c={};b.b2DistanceJointDef=U;U.prototype.Initialize=function(a,c,d,e){var h=this.a;a&&"object"===typeof a&&(a=a.a);c&&"object"===typeof c&&(c=c.a);d&&"object"===typeof d&&(d=d.a);e&&"object"===typeof e&&(e=e.a);us(h,a,c,d,e)};U.prototype.get_localAnchorA=function(){return n(Pi(this.a),r)};
U.prototype.set_localAnchorA=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);ye(c,a)};U.prototype.get_localAnchorB=function(){return n(kq(this.a),r)};U.prototype.set_localAnchorB=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);mu(c,a)};U.prototype.get_length=function(){return Md(this.a)};U.prototype.set_length=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Mh(c,a)};U.prototype.get_frequencyHz=function(){return Ln(this.a)};
U.prototype.set_frequencyHz=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);nj(c,a)};U.prototype.get_dampingRatio=function(){return ee(this.a)};U.prototype.set_dampingRatio=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Kc(c,a)};U.prototype.get_type=function(){return Rh(this.a)};U.prototype.set_type=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);cq(c,a)};U.prototype.get_userData=function(){return sc(this.a)};
U.prototype.set_userData=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Jc(c,a)};U.prototype.get_bodyA=function(){return n(Ci(this.a),q)};U.prototype.set_bodyA=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Zr(c,a)};U.prototype.get_bodyB=function(){return n(Ku(this.a),q)};U.prototype.set_bodyB=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);zp(c,a)};U.prototype.get_collideConnected=function(){return!!vp(this.a)};
U.prototype.set_collideConnected=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Cn(c,a)};U.prototype.__destroy__=function(){Rt(this.a)};function q(){throw"cannot construct a b2Body, no constructor in IDL";}q.prototype=Object.create(g.prototype);q.prototype.constructor=q;q.prototype.b=q;q.c={};b.b2Body=q;q.prototype.CreateFixture=function(a,c){var d=this.a;a&&"object"===typeof a&&(a=a.a);c&&"object"===typeof c&&(c=c.a);return void 0===c?n(Lt(d,a),v):n(ol(d,a,c),v)};
q.prototype.DestroyFixture=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);kn(c,a)};q.prototype.SetTransform=function(a,c){var d=this.a;a&&"object"===typeof a&&(a=a.a);c&&"object"===typeof c&&(c=c.a);pm(d,a,c)};q.prototype.GetTransform=function(){return n(tt(this.a),tx)};q.prototype.GetPosition=function(){return n(Ig(this.a),r)};q.prototype.GetAngle=function(){return nw(this.a)};q.prototype.GetWorldCenter=function(){return n(ik(this.a),r)};
q.prototype.GetLocalCenter=function(){return n(vv(this.a),r)};q.prototype.SetLinearVelocity=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Vl(c,a)};q.prototype.GetLinearVelocity=function(){return n(me(this.a),r)};q.prototype.SetAngularVelocity=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Dt(c,a)};q.prototype.GetAngularVelocity=function(){return Ui(this.a)};
q.prototype.ApplyForce=function(a,c,d){var e=this.a;a&&"object"===typeof a&&(a=a.a);c&&"object"===typeof c&&(c=c.a);d&&"object"===typeof d&&(d=d.a);lt(e,a,c,d)};q.prototype.ApplyForceToCenter=function(a,c){var d=this.a;a&&"object"===typeof a&&(a=a.a);c&&"object"===typeof c&&(c=c.a);Ge(d,a,c)};q.prototype.ApplyTorque=function(a,c){var d=this.a;a&&"object"===typeof a&&(a=a.a);c&&"object"===typeof c&&(c=c.a);mh(d,a,c)};
q.prototype.ApplyLinearImpulse=function(a,c,d){var e=this.a;a&&"object"===typeof a&&(a=a.a);c&&"object"===typeof c&&(c=c.a);d&&"object"===typeof d&&(d=d.a);un(e,a,c,d)};q.prototype.ApplyAngularImpulse=function(a,c){var d=this.a;a&&"object"===typeof a&&(a=a.a);c&&"object"===typeof c&&(c=c.a);Id(d,a,c)};q.prototype.GetMass=function(){return Sn(this.a)};q.prototype.GetInertia=function(){return Hu(this.a)};q.prototype.GetMassData=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);an(c,a)};
q.prototype.SetMassData=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Wd(c,a)};q.prototype.ResetMassData=function(){Ym(this.a)};q.prototype.GetWorldPoint=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);return n(Gj(c,a),r)};q.prototype.GetWorldVector=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);return n(hg(c,a),r)};q.prototype.GetLocalPoint=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);return n(rg(c,a),r)};
q.prototype.GetLocalVector=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);return n(cm(c,a),r)};q.prototype.GetLinearVelocityFromWorldPoint=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);return n(Iq(c,a),r)};q.prototype.GetLinearVelocityFromLocalPoint=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);return n(pq(c,a),r)};q.prototype.GetLinearDamping=function(){return or(this.a)};q.prototype.SetLinearDamping=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);gm(c,a)};
q.prototype.GetAngularDamping=function(){return ok(this.a)};q.prototype.SetAngularDamping=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Th(c,a)};q.prototype.GetGravityScale=function(){return ej(this.a)};q.prototype.SetGravityScale=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);El(c,a)};q.prototype.SetType=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Rn(c,a)};q.prototype.GetType=function(){return Tr(this.a)};
q.prototype.SetBullet=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);uk(c,a)};q.prototype.IsBullet=function(){return!!bl(this.a)};q.prototype.SetSleepingAllowed=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Kk(c,a)};q.prototype.IsSleepingAllowed=function(){return!!Lp(this.a)};q.prototype.SetAwake=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Du(c,a)};q.prototype.IsAwake=function(){return!!pd(this.a)};
q.prototype.SetActive=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);pl(c,a)};q.prototype.IsActive=function(){return!!Uh(this.a)};q.prototype.SetFixedRotation=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);ah(c,a)};q.prototype.IsFixedRotation=function(){return!!Ih(this.a)};q.prototype.GetFixtureList=function(){return n(xo(this.a),v)};q.prototype.GetJointList=function(){return n(Os(this.a),rx)};q.prototype.GetContactList=function(){return n(Lh(this.a),yx)};
q.prototype.GetNext=function(){return n(av(this.a),q)};q.prototype.GetUserData=function(){return nk(this.a)};q.prototype.SetUserData=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);ji(c,a)};q.prototype.GetWorld=function(){return n(Au(this.a),C)};q.prototype.Dump=function(){gk(this.a)};function V(){throw"cannot construct a b2FrictionJoint, no constructor in IDL";}V.prototype=Object.create(p.prototype);V.prototype.constructor=V;V.prototype.b=V;V.c={};b.b2FrictionJoint=V;
V.prototype.GetLocalAnchorA=function(){return n(Ho(this.a),r)};V.prototype.GetLocalAnchorB=function(){return n(Oh(this.a),r)};V.prototype.SetMaxForce=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Ft(c,a)};V.prototype.GetMaxForce=function(){return lv(this.a)};V.prototype.SetMaxTorque=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);rp(c,a)};V.prototype.GetMaxTorque=function(){return pi(this.a)};V.prototype.GetType=function(){return Yf(this.a)};
V.prototype.GetBodyA=function(){return n(lw(this.a),q)};V.prototype.GetBodyB=function(){return n(Je(this.a),q)};V.prototype.GetAnchorA=function(){return n(Cr(this.a),r)};V.prototype.GetAnchorB=function(){return n(gv(this.a),r)};V.prototype.GetReactionForce=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);return n(aq(c,a),r)};V.prototype.GetReactionTorque=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);return Yj(c,a)};V.prototype.GetNext=function(){return n(cs(this.a),p)};
V.prototype.GetUserData=function(){return kr(this.a)};V.prototype.SetUserData=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);tp(c,a)};V.prototype.IsActive=function(){return!!Wb(this.a)};V.prototype.GetCollideConnected=function(){return!!ip(this.a)};V.prototype.__destroy__=function(){Do(this.a)};function zx(){throw"cannot construct a b2DestructionListener, no constructor in IDL";}zx.prototype=Object.create(g.prototype);zx.prototype.constructor=zx;zx.prototype.b=zx;zx.c={};
b.b2DestructionListener=zx;zx.prototype.__destroy__=function(){mc(this.a)};function W(){this.a=Om();k(W)[this.a]=this}W.prototype=Object.create(t.prototype);W.prototype.constructor=W;W.prototype.b=W;W.c={};b.b2GearJointDef=W;W.prototype.get_joint1=function(){return n(hi(this.a),p)};W.prototype.set_joint1=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Dq(c,a)};W.prototype.get_joint2=function(){return n(im(this.a),p)};
W.prototype.set_joint2=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);du(c,a)};W.prototype.get_ratio=function(){return Vo(this.a)};W.prototype.set_ratio=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);jg(c,a)};W.prototype.get_type=function(){return Zl(this.a)};W.prototype.set_type=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);se(c,a)};W.prototype.get_userData=function(){return Km(this.a)};
W.prototype.set_userData=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Ov(c,a)};W.prototype.get_bodyA=function(){return n(mj(this.a),q)};W.prototype.set_bodyA=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);St(c,a)};W.prototype.get_bodyB=function(){return n(dn(this.a),q)};W.prototype.set_bodyB=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Fv(c,a)};W.prototype.get_collideConnected=function(){return!!rk(this.a)};
W.prototype.set_collideConnected=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Jo(c,a)};W.prototype.__destroy__=function(){lq(this.a)};function X(){throw"cannot construct a b2RevoluteJoint, no constructor in IDL";}X.prototype=Object.create(p.prototype);X.prototype.constructor=X;X.prototype.b=X;X.c={};b.b2RevoluteJoint=X;X.prototype.GetLocalAnchorA=function(){return n(bc(this.a),r)};X.prototype.GetLocalAnchorB=function(){return n(Bs(this.a),r)};X.prototype.GetReferenceAngle=function(){return wd(this.a)};
X.prototype.GetJointAngle=function(){return Gf(this.a)};X.prototype.GetJointSpeed=function(){return Df(this.a)};X.prototype.IsLimitEnabled=function(){return!!nv(this.a)};X.prototype.EnableLimit=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Dg(c,a)};X.prototype.GetLowerLimit=function(){return hk(this.a)};X.prototype.GetUpperLimit=function(){return Gl(this.a)};X.prototype.SetLimits=function(a,c){var d=this.a;a&&"object"===typeof a&&(a=a.a);c&&"object"===typeof c&&(c=c.a);$r(d,a,c)};
X.prototype.IsMotorEnabled=function(){return!!ot(this.a)};X.prototype.EnableMotor=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);eh(c,a)};X.prototype.SetMotorSpeed=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Mn(c,a)};X.prototype.GetMotorSpeed=function(){return bg(this.a)};X.prototype.SetMaxMotorTorque=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);dh(c,a)};X.prototype.GetMaxMotorTorque=function(){return Cj(this.a)};
X.prototype.GetMotorTorque=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);return Zs(c,a)};X.prototype.GetType=function(){return Cp(this.a)};X.prototype.GetBodyA=function(){return n(cj(this.a),q)};X.prototype.GetBodyB=function(){return n(zk(this.a),q)};X.prototype.GetAnchorA=function(){return n(ur(this.a),r)};X.prototype.GetAnchorB=function(){return n(Lv(this.a),r)};X.prototype.GetReactionForce=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);return n(au(c,a),r)};
X.prototype.GetReactionTorque=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);return Sg(c,a)};X.prototype.GetNext=function(){return n(Mu(this.a),p)};X.prototype.GetUserData=function(){return zc(this.a)};X.prototype.SetUserData=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);ci(c,a)};X.prototype.IsActive=function(){return!!Vu(this.a)};X.prototype.GetCollideConnected=function(){return!!Gg(this.a)};X.prototype.__destroy__=function(){nh(this.a)};
function yx(){this.a=Ur();k(yx)[this.a]=this}yx.prototype=Object.create(g.prototype);yx.prototype.constructor=yx;yx.prototype.b=yx;yx.c={};b.b2ContactEdge=yx;yx.prototype.get_other=function(){return n(Gi(this.a),q)};yx.prototype.set_other=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);vi(c,a)};yx.prototype.get_contact=function(){return n(Wm(this.a),D)};yx.prototype.set_contact=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Ut(c,a)};
yx.prototype.get_prev=function(){return n(Kg(this.a),yx)};yx.prototype.set_prev=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);jw(c,a)};yx.prototype.get_next=function(){return n(Eg(this.a),yx)};yx.prototype.set_next=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Mb(c,a)};yx.prototype.__destroy__=function(){Oe(this.a)};function Y(){this.a=Mj();k(Y)[this.a]=this}Y.prototype=Object.create(t.prototype);Y.prototype.constructor=Y;Y.prototype.b=Y;Y.c={};b.b2RopeJointDef=Y;
Y.prototype.get_localAnchorA=function(){return n(Im(this.a),r)};Y.prototype.set_localAnchorA=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Or(c,a)};Y.prototype.get_localAnchorB=function(){return n(sq(this.a),r)};Y.prototype.set_localAnchorB=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Mv(c,a)};Y.prototype.get_maxLength=function(){return sk(this.a)};Y.prototype.set_maxLength=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Uk(c,a)};Y.prototype.get_type=function(){return iq(this.a)};
Y.prototype.set_type=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Bk(c,a)};Y.prototype.get_userData=function(){return wn(this.a)};Y.prototype.set_userData=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);qo(c,a)};Y.prototype.get_bodyA=function(){return n(ju(this.a),q)};Y.prototype.set_bodyA=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Qf(c,a)};Y.prototype.get_bodyB=function(){return n(Vv(this.a),q)};
Y.prototype.set_bodyB=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Rd(c,a)};Y.prototype.get_collideConnected=function(){return!!kh(this.a)};Y.prototype.set_collideConnected=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Lc(c,a)};Y.prototype.__destroy__=function(){is(this.a)};function Z(){this.a=Cg();k(Z)[this.a]=this}Z.prototype=Object.create(t.prototype);Z.prototype.constructor=Z;Z.prototype.b=Z;Z.c={};b.b2MotorJointDef=Z;
Z.prototype.Initialize=function(a,c){var d=this.a;a&&"object"===typeof a&&(a=a.a);c&&"object"===typeof c&&(c=c.a);Tl(d,a,c)};Z.prototype.get_linearOffset=function(){return n(Sl(this.a),r)};Z.prototype.set_linearOffset=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);fo(c,a)};Z.prototype.get_angularOffset=function(){return jt(this.a)};Z.prototype.set_angularOffset=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Rr(c,a)};Z.prototype.get_maxForce=function(){return rc(this.a)};
Z.prototype.set_maxForce=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);At(c,a)};Z.prototype.get_maxTorque=function(){return oq(this.a)};Z.prototype.set_maxTorque=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Dv(c,a)};Z.prototype.get_correctionFactor=function(){return $o(this.a)};Z.prototype.set_correctionFactor=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);gt(c,a)};Z.prototype.get_type=function(){return hr(this.a)};
Z.prototype.set_type=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);ec(c,a)};Z.prototype.get_userData=function(){return Vt(this.a)};Z.prototype.set_userData=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);id(c,a)};Z.prototype.get_bodyA=function(){return n(ew(this.a),q)};Z.prototype.set_bodyA=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);cl(c,a)};Z.prototype.get_bodyB=function(){return n(ou(this.a),q)};
Z.prototype.set_bodyB=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);ls(c,a)};Z.prototype.get_collideConnected=function(){return!!xd(this.a)};Z.prototype.set_collideConnected=function(a){var c=this.a;a&&"object"===typeof a&&(a=a.a);Qv(c,a)};Z.prototype.__destroy__=function(){bs(this.a)};
(function(){function a(){b.b2Shape.e_circle=ck();b.b2Shape.e_edge=Bj();b.b2Shape.e_polygon=Gu();b.b2Shape.e_chain=Jn();b.b2Shape.e_typeCount=ut();b.e_unknownJoint=Zh();b.e_revoluteJoint=mi();b.e_prismaticJoint=Tq();b.e_distanceJoint=Vn();b.e_pulleyJoint=gf();b.e_mouseJoint=it();b.e_gearJoint=$s();b.e_wheelJoint=Me();b.e_weldJoint=mm();b.e_frictionJoint=Jd();b.e_ropeJoint=yv();b.e_motorJoint=go();b.e_inactiveLimit=Bu();b.e_atLowerLimit=en();b.e_atUpperLimit=xw();b.e_equalLimits=Gh();b.b2Manifold.e_circles=
yd();b.b2Manifold.e_faceA=vj();b.b2Manifold.e_faceB=wj();b.b2_staticBody=Wl();b.b2_kinematicBody=tj();b.b2_dynamicBody=Pt();b.b2Draw.e_shapeBit=Jh();b.b2Draw.e_jointBit=yf();b.b2Draw.e_aabbBit=cr();b.b2Draw.e_pairBit=Dr();b.b2Draw.e_centerOfMassBit=oo();b.b2ContactFeature.e_vertex=to();b.b2ContactFeature.e_face=Fl()}b.calledRun?a():eb.unshift(a)})();

  return Box2D;
};


/*** EXPORTS FROM exports-loader ***/
module.exports = Box2D;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 15 */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),
/* 16 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),
/* 17 */
/***/ (function(module, exports) {



/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe =
    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
var splitPath = function(filename) {
  return splitPathRe.exec(filename).slice(1);
};

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function(path) {
  var result = splitPath(path),
      root = result[0],
      dir = result[1];

  if (!root && !dir) {
    // No dirname whatsoever
    return '.';
  }

  if (dir) {
    // It has a dirname, strip trailing slash
    dir = dir.substr(0, dir.length - 1);
  }

  return root + dir;
};


exports.basename = function(path, ext) {
  var f = splitPath(path)[2];
  // TODO: make this comparison case-insensitive on windows?
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};


exports.extname = function(path) {
  return splitPath(path)[3];
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 19 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__box2d_box2d__ = __webpack_require__(0);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Box2D", function() { return __WEBPACK_IMPORTED_MODULE_0__box2d_box2d__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__box2d_debugDraw__ = __webpack_require__(5);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "DebugDraw", function() { return __WEBPACK_IMPORTED_MODULE_1__box2d_debugDraw__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__box2d_world__ = __webpack_require__(6);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "World", function() { return __WEBPACK_IMPORTED_MODULE_2__box2d_world__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rube_RubeLoader__ = __webpack_require__(2);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "RubeLoader", function() { return __WEBPACK_IMPORTED_MODULE_3__rube_RubeLoader__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__rube_RubeScene__ = __webpack_require__(3);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "RubeScene", function() { return __WEBPACK_IMPORTED_MODULE_4__rube_RubeScene__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__rube_rubeAssetLoader__ = __webpack_require__(7);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "RubeAssetLoader", function() { return __WEBPACK_IMPORTED_MODULE_5__rube_rubeAssetLoader__["a"]; });
// box2d
 // this is a shim

// debug draw


// world


// rube




/* harmony default export */ __webpack_exports__["default"] = function (a) {
  // TODO: Make this a ludic plugin and then create a LudicApp.ready to instantiate it
  console.log(a);
};

/***/ })
/******/ ]);
});
//# sourceMappingURL=ludic-box2d.umd.js.map