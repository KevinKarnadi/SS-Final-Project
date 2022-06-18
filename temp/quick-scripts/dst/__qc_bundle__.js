
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/scripts/Arrow');
require('./assets/scripts/Bomb');
require('./assets/scripts/Bullet');
require('./assets/scripts/GameManager');
require('./assets/scripts/Ground');
require('./assets/scripts/Ground2');
require('./assets/scripts/Instructions-option1');
require('./assets/scripts/Instructions-option2');
require('./assets/scripts/Instructions-win');
require('./assets/scripts/Instructions');
require('./assets/scripts/Lobby');
require('./assets/scripts/MainMenu');
require('./assets/scripts/Player');
require('./assets/scripts/PlayerName');
require('./assets/scripts/Playerchoose');
require('./assets/scripts/SignIn');
require('./assets/scripts/SignUp');
require('./assets/scripts/TrajectoryLine');
require('./assets/scripts/UI');
require('./assets/scripts/Welcome');
require('./assets/scripts/WelcomeTxt');
require('./assets/scripts/explosiveObj');
require('./assets/scripts/map');

                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Ground.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '27c01J847FL9JfMFwSZUf6Z', 'Ground');
// scripts/Ground.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Ground = /** @class */ (function (_super) {
    __extends(Ground, _super);
    function Ground() {
        // private anim = null;
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // private bulletManager = null;
        _this.isTriggered = false; // I add this to make the bullet kill one enemy at a time.
        return _this;
    }
    // private rigidBody: cc.RigidBody = null;
    // when created, the bullet need to be placed at correct position and play animation.
    Ground.prototype.init = function (node, index) {
        // this.anim = this.getComponent(cc.Animation);
        // this.rigidBody = this.getComponent(cc.RigidBody);
        this.setInitPos(node, index);
    };
    // this function is called when the bullet manager calls "get" API.
    Ground.prototype.reuse = function (bulletManager) {
        // this.bulletManager = bulletManager;
        // this.isTriggered = false;
    };
    //this function sets the bullet's initial position when it is reused.
    Ground.prototype.setInitPos = function (node, index) {
        this.node.parent = node;
        this.node.position = cc.v3(-480 + (15 * index) % (15 * 200), -320 + 15 * Math.floor(index / 200));
        this.node.position = this.node.position.addSelf(node.position);
    };
    Ground.prototype.onBeginContact = function (contact, self, other) {
        var _this = this;
        if (other.node.group == "bomb") {
            // console.log(other.node.group, "begin");
            this.node.getChildByName("particle").active = true;
            this.scheduleOnce(function () {
                _this.node.destroy();
            }, 0.1);
        }
        else if (other.node.group == "bullet") {
            this.node.getChildByName("particle").active = true;
            this.scheduleOnce(function () {
                _this.node.destroy();
            }, 0.05);
        }
    };
    Ground.prototype.onPreSolve = function (contact, self, other) {
        var _this = this;
        if (other.node.group == "explosiveObj") {
            this.node.getChildByName("particle").active = true;
            this.scheduleOnce(function () {
                _this.node.destroy();
            }, 0.35);
        }
    };
    Ground = __decorate([
        ccclass
    ], Ground);
    return Ground;
}(cc.Component));
exports.default = Ground;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcR3JvdW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQW9DLDBCQUFZO0lBQWhEO1FBR0ksdUJBQXVCO1FBSDNCLHFFQWdFQztRQTNERyxnQ0FBZ0M7UUFFekIsaUJBQVcsR0FBRyxLQUFLLENBQUMsQ0FBQywwREFBMEQ7O0lBeUQxRixDQUFDO0lBdkRHLDBDQUEwQztJQUUxQyxxRkFBcUY7SUFDOUUscUJBQUksR0FBWCxVQUFZLElBQWEsRUFBRSxLQUFhO1FBRXBDLCtDQUErQztRQUMvQyxvREFBb0Q7UUFFcEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVELG1FQUFtRTtJQUNuRSxzQkFBSyxHQUFMLFVBQU0sYUFBYTtRQUVmLHNDQUFzQztRQUV0Qyw0QkFBNEI7SUFDaEMsQ0FBQztJQUVELHFFQUFxRTtJQUM3RCwyQkFBVSxHQUFsQixVQUFtQixJQUFhLEVBQUUsS0FBYTtRQUUzQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFFeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEVBQUUsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUVsRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFFRCwrQkFBYyxHQUFkLFVBQWUsT0FBTyxFQUFFLElBQUksRUFBRSxLQUFLO1FBQW5DLGlCQWVDO1FBZEcsSUFBRyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxNQUFNLEVBQUU7WUFDM0IsMENBQTBDO1lBQzFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFFbkQsSUFBSSxDQUFDLFlBQVksQ0FBQztnQkFDZCxLQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3hCLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUVYO2FBQU0sSUFBRyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxRQUFRLEVBQUU7WUFDcEMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNuRCxJQUFJLENBQUMsWUFBWSxDQUFDO2dCQUNkLEtBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDeEIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ1o7SUFDTCxDQUFDO0lBRUQsMkJBQVUsR0FBVixVQUFXLE9BQU8sRUFBRSxJQUFJLEVBQUUsS0FBSztRQUEvQixpQkFRQztRQVBHLElBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksY0FBYyxFQUFDO1lBQ2xDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFFbkQsSUFBSSxDQUFDLFlBQVksQ0FBQztnQkFDZCxLQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3hCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUNaO0lBQ0wsQ0FBQztJQS9EZ0IsTUFBTTtRQUQxQixPQUFPO09BQ2EsTUFBTSxDQWdFMUI7SUFBRCxhQUFDO0NBaEVELEFBZ0VDLENBaEVtQyxFQUFFLENBQUMsU0FBUyxHQWdFL0M7a0JBaEVvQixNQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHcm91bmQgZXh0ZW5kcyBjYy5Db21wb25lbnQgXHJcbntcclxuXHJcbiAgICAvLyBwcml2YXRlIGFuaW0gPSBudWxsO1xyXG5cclxuICAgIC8vIHByaXZhdGUgYnVsbGV0TWFuYWdlciA9IG51bGw7XHJcblxyXG4gICAgcHVibGljIGlzVHJpZ2dlcmVkID0gZmFsc2U7IC8vIEkgYWRkIHRoaXMgdG8gbWFrZSB0aGUgYnVsbGV0IGtpbGwgb25lIGVuZW15IGF0IGEgdGltZS5cclxuXHJcbiAgICAvLyBwcml2YXRlIHJpZ2lkQm9keTogY2MuUmlnaWRCb2R5ID0gbnVsbDtcclxuXHJcbiAgICAvLyB3aGVuIGNyZWF0ZWQsIHRoZSBidWxsZXQgbmVlZCB0byBiZSBwbGFjZWQgYXQgY29ycmVjdCBwb3NpdGlvbiBhbmQgcGxheSBhbmltYXRpb24uXHJcbiAgICBwdWJsaWMgaW5pdChub2RlOiBjYy5Ob2RlLCBpbmRleDogbnVtYmVyKSBcclxuICAgIHtcclxuICAgICAgICAvLyB0aGlzLmFuaW0gPSB0aGlzLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pO1xyXG4gICAgICAgIC8vIHRoaXMucmlnaWRCb2R5ID0gdGhpcy5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRJbml0UG9zKG5vZGUsIGluZGV4KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB0aGlzIGZ1bmN0aW9uIGlzIGNhbGxlZCB3aGVuIHRoZSBidWxsZXQgbWFuYWdlciBjYWxscyBcImdldFwiIEFQSS5cclxuICAgIHJldXNlKGJ1bGxldE1hbmFnZXIpXHJcbiAgICB7XHJcbiAgICAgICAgLy8gdGhpcy5idWxsZXRNYW5hZ2VyID0gYnVsbGV0TWFuYWdlcjtcclxuXHJcbiAgICAgICAgLy8gdGhpcy5pc1RyaWdnZXJlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vdGhpcyBmdW5jdGlvbiBzZXRzIHRoZSBidWxsZXQncyBpbml0aWFsIHBvc2l0aW9uIHdoZW4gaXQgaXMgcmV1c2VkLlxyXG4gICAgcHJpdmF0ZSBzZXRJbml0UG9zKG5vZGU6IGNjLk5vZGUsIGluZGV4OiBudW1iZXIpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5ub2RlLnBhcmVudCA9IG5vZGU7XHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IGNjLnYzKC00ODAgKyAoMTUgKiBpbmRleCkgJSAoMTUgKiAyMDApLCAtMzIwICsgMTUgKiBNYXRoLmZsb29yKGluZGV4IC8gMjAwKSk7IFxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IHRoaXMubm9kZS5wb3NpdGlvbi5hZGRTZWxmKG5vZGUucG9zaXRpb24pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBvbkJlZ2luQ29udGFjdChjb250YWN0LCBzZWxmLCBvdGhlcikge1xyXG4gICAgICAgIGlmKG90aGVyLm5vZGUuZ3JvdXAgPT0gXCJib21iXCIpIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cob3RoZXIubm9kZS5ncm91cCwgXCJiZWdpblwiKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicGFydGljbGVcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpPT57XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB9LCAwLjEpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9IGVsc2UgaWYob3RoZXIubm9kZS5ncm91cCA9PSBcImJ1bGxldFwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInBhcnRpY2xlXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpPT57XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB9LCAwLjA1KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25QcmVTb2x2ZShjb250YWN0LCBzZWxmLCBvdGhlcil7XHJcbiAgICAgICAgaWYob3RoZXIubm9kZS5ncm91cCA9PSBcImV4cGxvc2l2ZU9ialwiKXtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicGFydGljbGVcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpPT57XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB9LCAwLjM1KTtcclxuICAgICAgICB9IFxyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Lobby.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e3d3fFcdjFPsb/d72VJtD3R', 'Lobby');
// scripts/Lobby.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.map1 = null;
        _this.map2 = null;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
        this.mouseOn();
    };
    // update (dt) {}
    NewClass.prototype.loadScene = function (scene) {
        cc.director.loadScene("loading", function () {
            cc.director.loadScene(scene);
        });
    };
    NewClass.prototype.mouseOn = function () {
        var _this = this;
        this.map1.node.on(cc.Node.EventType.MOUSE_DOWN, function () {
            _this.loadScene("map1");
        });
        this.map2.node.on(cc.Node.EventType.MOUSE_DOWN, function () {
            _this.loadScene("map2");
        });
    };
    __decorate([
        property(cc.Button)
    ], NewClass.prototype, "map1", void 0);
    __decorate([
        property(cc.Button)
    ], NewClass.prototype, "map2", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcTG9iYnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFnQ0M7UUE3QkcsVUFBSSxHQUFjLElBQUksQ0FBQztRQUd2QixVQUFJLEdBQWMsSUFBSSxDQUFDOztJQTBCM0IsQ0FBQztJQXhCRyx3QkFBd0I7SUFFeEIsZUFBZTtJQUVmLHdCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVELGlCQUFpQjtJQUVqQiw0QkFBUyxHQUFULFVBQVUsS0FBYTtRQUNuQixFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUU7WUFDN0IsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsMEJBQU8sR0FBUDtRQUFBLGlCQU9DO1FBTkcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRTtZQUM1QyxLQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRTtZQUM1QyxLQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQTVCRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzBDQUNHO0lBR3ZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7MENBQ0c7SUFOTixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBZ0M1QjtJQUFELGVBQUM7Q0FoQ0QsQUFnQ0MsQ0FoQ3FDLEVBQUUsQ0FBQyxTQUFTLEdBZ0NqRDtrQkFoQ29CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxyXG4gICAgbWFwMTogY2MuQnV0dG9uID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxyXG4gICAgbWFwMjogY2MuQnV0dG9uID0gbnVsbDtcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgdGhpcy5tb3VzZU9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxuXHJcbiAgICBsb2FkU2NlbmUoc2NlbmU6IHN0cmluZykge1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImxvYWRpbmdcIiwgKCk9PntcclxuICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKHNjZW5lKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBtb3VzZU9uKCkge1xyXG4gICAgICAgIHRoaXMubWFwMS5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0RPV04sICgpPT57XHJcbiAgICAgICAgICAgIHRoaXMubG9hZFNjZW5lKFwibWFwMVwiKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLm1hcDIubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9ET1dOLCAoKT0+e1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRTY2VuZShcIm1hcDJcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/GameManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'eecbbjN1SVLA6bQ8gyDdvsO', 'GameManager');
// scripts/GameManager.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Player_1 = require("./Player");
var UI_1 = require("./UI");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameManager = /** @class */ (function (_super) {
    __extends(GameManager, _super);
    function GameManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.player1 = null;
        _this.player2 = null;
        _this.player3 = null;
        _this.player4 = null;
        _this.UI = null;
        _this.camera = null;
        _this.bgm = null;
        _this.background = null;
        _this.player = null;
        _this.aKeyDown = false;
        _this.dKeyDown = false;
        _this.shoot = false;
        _this.totalPlayer = 2;
        _this.alivePlayer = null;
        _this.shootAngle = null;
        _this.playerNum = null;
        // private currPlayerPos = null;
        _this.isPaused = false;
        _this.playerPath = "Canvas/Players/";
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    GameManager.prototype.onLoad = function () {
        cc.director.getPhysicsManager().enabled = true;
        cc.director.getPhysicsManager().gravity = cc.v2(0, -980);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
        this.playerNum = cc.sys.localStorage.getItem("PlayerNum");
        this.alivePlayer = this.totalPlayer;
    };
    GameManager.prototype.start = function () {
        //this.playBGM();
        this.loadPlayer();
        this.changePlayer(0);
        this.initResumeBtn();
    };
    GameManager.prototype.update = function (dt) {
        if (this.winner == null) {
            var playerPos = this.player.node.getPosition();
            var cameraPos = this.camera.getPosition();
            var prevCamPos = this.camera.getPosition();
            cameraPos.lerp(playerPos, 0.1, cameraPos);
            cameraPos.y = cc.misc.clampf(playerPos.y, 0, 200);
            if (cameraPos.y > 100) {
                cameraPos.y = 100;
            }
            if (cameraPos.x < -35) {
                cameraPos.x = -35;
            }
            else if (cameraPos.x > 2033 + 35) {
                cameraPos.x = 2033 + 35;
            }
            this.camera.setPosition(cameraPos);
            if (this.background) {
                this.background.setPosition(cameraPos.x < prevCamPos.x ?
                    ((cameraPos.x - prevCamPos.x) / 3 + this.background.x) :
                    (this.background.x - (prevCamPos.x - cameraPos.x) / 3), cameraPos.y < prevCamPos.y ?
                    ((cameraPos.y - prevCamPos.y) / 3 + this.background.y) :
                    (this.background.y - (prevCamPos.y - cameraPos.y) / 3));
            }
            if (this.UI.timerVal < 0 || this.player.isDie) {
                this.UI.timerVal = 20;
                this.changePlayer(this.currPlayer + 1);
            }
            this.isWin();
        }
    };
    GameManager.prototype.loadPlayer = function () {
        this.totalPlayer = parseInt(this.playerNum);
        switch (this.totalPlayer) {
            case 4:
                cc.find(this.playerPath + "Player 4").active = true;
            case 3:
                cc.find(this.playerPath + "Player 3").active = true;
            case 2:
                cc.find(this.playerPath + "Player 2").active = true;
                cc.find(this.playerPath + "Player 1").active = true;
                break;
            default:
                break;
        }
    };
    GameManager.prototype.isWin = function () {
        var alive = this.totalPlayer;
        if (this.totalPlayer == 2) {
            if (this.player1.isDie)
                alive--;
            if (this.player2.isDie)
                alive--;
        }
        else if (this.totalPlayer == 3) {
            if (this.player1.isDie)
                alive--;
            if (this.player2.isDie)
                alive--;
            if (this.player3.isDie)
                alive--;
        }
        else if (this.totalPlayer == 4) {
            if (this.player1.isDie)
                alive--;
            if (this.player2.isDie)
                alive--;
            if (this.player3.isDie)
                alive--;
            if (this.player4.isDie)
                alive--;
        }
        this.alivePlayer = alive;
        if (this.alivePlayer == 1) {
            this.winner = this.player.playerName.getComponent(cc.Label).string;
            console.log(this.winner);
            //this.UI.pause();
        }
    };
    GameManager.prototype.changePlayer = function (num) {
        this.currPlayer = num % this.totalPlayer;
        if ((this.player && !this.player.isDie)) {
            this.player.setPlayerMoveDirection(0);
            this.player.setPlayerJump(false);
            this.player.line.getComponent("TrajectoryLine").clearLine();
            this.onDisable();
        }
        switch (this.currPlayer) {
            case 0:
                this.player = this.player1;
                break;
            case 1:
                this.player = this.player2;
                break;
            case 2:
                this.player = this.player3;
                break;
            default:
                break;
        }
        if (!this.player.isDie) {
            this.onEnable();
        }
        else {
            this.changePlayer(num + 1);
        }
    };
    GameManager.prototype.playBGM = function () {
        cc.audioEngine.playMusic(this.bgm, true);
    };
    GameManager.prototype.onEnable = function () {
        if (this.player) {
            this.player.node.on(cc.Node.EventType.TOUCH_START, this.onEventStart, this); // touched
            this.player.node.on(cc.Node.EventType.TOUCH_MOVE, this.onEventMove, this); // aim
            this.player.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onEventCancel, this); // shoot
            this.player.node.on(cc.Node.EventType.TOUCH_END, this.onEventEnd, this); // cancel shoot
        }
    };
    GameManager.prototype.onDisable = function () {
        if (this.player) {
            this.player.node.off(cc.Node.EventType.TOUCH_START, this.onEventStart, this); // touched
            this.player.node.off(cc.Node.EventType.TOUCH_MOVE, this.onEventMove, this); // aim
            this.player.node.off(cc.Node.EventType.TOUCH_CANCEL, this.onEventCancel, this); // shoot
            this.player.node.on(cc.Node.EventType.TOUCH_END, this.onEventEnd, this); // cancel shoot
        }
    };
    GameManager.prototype.onKeyDown = function (e) {
        switch (e.keyCode) {
            case cc.macro.KEY.a: // move left
                this.aKeyDown = true;
                this.player.setPlayerMoveDirection(-1);
                break;
            case cc.macro.KEY.d: // move right
                this.dKeyDown = true;
                this.player.setPlayerMoveDirection(1);
                break;
            case cc.macro.KEY.space: // jump
                this.player.setPlayerJump(true);
                break;
            case cc.macro.KEY.escape:
                this.pauseGame();
                //this.UI.pause();
                break;
            case cc.macro.KEY.p: // pass
                this.changePlayer(this.currPlayer + 1);
                this.UI.timerVal = 20;
                break;
            default:
                break;
        }
    };
    GameManager.prototype.onKeyUp = function (e) {
        switch (e.keyCode) {
            case cc.macro.KEY.a:
                this.aKeyDown = false;
                if (this.dKeyDown) {
                    this.player.setPlayerMoveDirection(1); // move right
                }
                else {
                    this.player.setPlayerMoveDirection(0); // stop moving
                }
                break;
            case cc.macro.KEY.d:
                this.dKeyDown = false;
                if (this.aKeyDown) {
                    this.player.setPlayerMoveDirection(-1); // move left
                }
                else {
                    this.player.setPlayerMoveDirection(0); // stop moving
                }
                break;
            case cc.macro.KEY.space:
                this.player.setPlayerJump(false);
                break;
            case cc.macro.KEY.f: // shoot (bullet)    
                this.player.weapon = "gun";
                break;
            case cc.macro.KEY.r: // bomb
                this.player.weapon = "bomb";
                break;
            default:
                break;
        }
    };
    GameManager.prototype.onEventStart = function (event) {
        if (!this.enabledInHierarchy)
            return;
        if (!this.shoot) {
            // this.startPos = this.node.position;
            // this.motorJoint.enabled = false;
            // this.rb.gravityScale = 0;
            // this.rb.linearVelocity = cc.Vec2.ZERO;
            // this.rb.angularVelocity = 0;
        }
        event.stopPropagation();
    };
    GameManager.prototype.onEventMove = function (event) {
        if (!this.enabledInHierarchy)
            return;
        var playerPos = event.getStartLocation();
        var mousePos = event.getLocation();
        var diffX = mousePos.x - playerPos.x;
        var diffY = playerPos.y - mousePos.y;
        this.shootAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)); // angle in radian
        if (diffX >= 0) { // change player direction
            this.player.setPlayerChangeDirection(-1);
        }
        else {
            this.player.setPlayerChangeDirection(1);
        }
        if (diffY < 0) {
            this.shootAngle *= -1;
        }
        if (!this.shoot) {
            if (this.player.weapon == "gun") {
                this.player.line.getComponent("TrajectoryLine").drawStraightLine(this.shootAngle); // draw trajectory line
            }
            else if (this.player.weapon == "bomb") {
                var power = (Math.abs(diffY) >= Math.abs(diffX) ? Math.abs(diffY) : Math.abs(diffX));
                this.player.line.getComponent("TrajectoryLine").drawCurveLine(this.shootAngle, power * 2); // draw arrow
                this.player.power = (power * 2 > 100) ? 100 : power * 2;
            }
        }
        event.stopPropagation();
    };
    GameManager.prototype.onEventCancel = function (event) {
        if (!this.enabledInHierarchy)
            return;
        this.haveShot();
        event.stopPropagation();
    };
    GameManager.prototype.onEventEnd = function (event) {
        if (!this.enabledInHierarchy)
            return;
        this.haveShot();
        event.stopPropagation();
    };
    GameManager.prototype.haveShot = function () {
        if (this.shoot)
            return;
        this.player.line.getComponent("TrajectoryLine").clearLine();
        // this.shoot = true;
        if (this.player.weapon == "gun") {
            this.player.setPlayerShoot(this.shootAngle);
        }
        else if (this.player.weapon == "bomb") {
            this.player.setPlayerBomb(this.shootAngle);
        }
        this.player.setPlayerChangeDirection(0);
    };
    GameManager.prototype.pauseGame = function () {
        if (cc.director.isPaused()) {
            cc.director.resume();
            cc.find("Canvas/Main Camera/Pause Menu").active = false;
        }
        else {
            cc.director.pause();
            cc.find("Canvas/Main Camera/Pause Menu").active = true;
        }
    };
    // Pause Menu Buttons
    GameManager.prototype.initResumeBtn = function () {
        var clickEventHandler = new cc.Component.EventHandler();
        clickEventHandler.target = this.node;
        clickEventHandler.component = "GameManager";
        clickEventHandler.handler = "resume";
        cc.find("Canvas/Main Camera/Pause Menu/Big Layout/resumeBtn").getComponent(cc.Button).clickEvents.push(clickEventHandler);
    };
    GameManager.prototype.resume = function () {
        cc.director.resume();
        cc.find("Canvas/Main Camera/Pause Menu").active = false;
    };
    __decorate([
        property(Player_1.default)
    ], GameManager.prototype, "player1", void 0);
    __decorate([
        property(Player_1.default)
    ], GameManager.prototype, "player2", void 0);
    __decorate([
        property(Player_1.default)
    ], GameManager.prototype, "player3", void 0);
    __decorate([
        property(Player_1.default)
    ], GameManager.prototype, "player4", void 0);
    __decorate([
        property(UI_1.default)
    ], GameManager.prototype, "UI", void 0);
    __decorate([
        property(cc.Node)
    ], GameManager.prototype, "camera", void 0);
    __decorate([
        property(cc.AudioClip)
    ], GameManager.prototype, "bgm", void 0);
    __decorate([
        property(cc.Node)
    ], GameManager.prototype, "background", void 0);
    GameManager = __decorate([
        ccclass
    ], GameManager);
    return GameManager;
}(cc.Component));
exports.default = GameManager;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcR2FtZU1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUNBQTZCO0FBQzdCLDJCQUFxQjtBQUVmLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXlDLCtCQUFZO0lBQXJEO1FBQUEscUVBb1dDO1FBaldHLGFBQU8sR0FBVyxJQUFJLENBQUM7UUFHdkIsYUFBTyxHQUFXLElBQUksQ0FBQztRQUd2QixhQUFPLEdBQVcsSUFBSSxDQUFDO1FBR3ZCLGFBQU8sR0FBVyxJQUFJLENBQUM7UUFHdkIsUUFBRSxHQUFPLElBQUksQ0FBQztRQUdkLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFHdkIsU0FBRyxHQUFpQixJQUFJLENBQUM7UUFHekIsZ0JBQVUsR0FBWSxJQUFJLENBQUE7UUFFbEIsWUFBTSxHQUFHLElBQUksQ0FBQztRQUVkLGNBQVEsR0FBWSxLQUFLLENBQUM7UUFFMUIsY0FBUSxHQUFZLEtBQUssQ0FBQztRQUUxQixXQUFLLEdBQVksS0FBSyxDQUFDO1FBSXZCLGlCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBRXhCLGlCQUFXLEdBQUcsSUFBSSxDQUFDO1FBRW5CLGdCQUFVLEdBQUcsSUFBSSxDQUFDO1FBRWxCLGVBQVMsR0FBRyxJQUFJLENBQUM7UUFFekIsZ0NBQWdDO1FBRXhCLGNBQVEsR0FBWSxLQUFLLENBQUM7UUFFMUIsZ0JBQVUsR0FBVyxpQkFBaUIsQ0FBQzs7SUFvVG5ELENBQUM7SUFoVEcsd0JBQXdCO0lBRXhCLDRCQUFNLEdBQU47UUFDSSxFQUFFLENBQUMsUUFBUSxDQUFDLGlCQUFpQixFQUFFLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUMvQyxFQUFFLENBQUMsUUFBUSxDQUFDLGlCQUFpQixFQUFFLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FB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QUFDLElBQUksQ0FBQzsrQ0FDSztJQUd2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOzRDQUNFO0lBR3pCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7bURBQ1E7SUF4QlQsV0FBVztRQUQvQixPQUFPO09BQ2EsV0FBVyxDQW9XL0I7SUFBRCxrQkFBQztDQXBXRCxBQW9XQyxDQXBXd0MsRUFBRSxDQUFDLFNBQVMsR0FvV3BEO2tCQXBXb0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vUGxheWVyXCJcclxuaW1wb3J0IFVJIGZyb20gXCIuL1VJXCJcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZU1hbmFnZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShQbGF5ZXIpXHJcbiAgICBwbGF5ZXIxOiBQbGF5ZXIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShQbGF5ZXIpXHJcbiAgICBwbGF5ZXIyOiBQbGF5ZXIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShQbGF5ZXIpXHJcbiAgICBwbGF5ZXIzOiBQbGF5ZXIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShQbGF5ZXIpXHJcbiAgICBwbGF5ZXI0OiBQbGF5ZXIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShVSSlcclxuICAgIFVJOiBVSSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBjYW1lcmE6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBiZ206IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBiYWNrZ3JvdW5kOiBjYy5Ob2RlID0gbnVsbFxyXG5cclxuICAgIHByaXZhdGUgcGxheWVyID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGFLZXlEb3duOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgcHJpdmF0ZSBkS2V5RG93bjogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHByaXZhdGUgc2hvb3Q6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBwcml2YXRlIGN1cnJQbGF5ZXI6IG51bWJlcjtcclxuXHJcbiAgICBwcml2YXRlIHRvdGFsUGxheWVyOiBudW1iZXIgPSAyO1xyXG5cclxuICAgIHByaXZhdGUgYWxpdmVQbGF5ZXIgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgc2hvb3RBbmdsZSA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBwbGF5ZXJOdW0gPSBudWxsO1xyXG5cclxuICAgIC8vIHByaXZhdGUgY3VyclBsYXllclBvcyA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBpc1BhdXNlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHByaXZhdGUgcGxheWVyUGF0aDogc3RyaW5nID0gXCJDYW52YXMvUGxheWVycy9cIjtcclxuXHJcbiAgICBwcml2YXRlIHdpbm5lcjtcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCkuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKS5ncmF2aXR5ID0gY2MudjIoMCwgLTk4MCk7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLCB0aGlzLm9uS2V5RG93biwgdGhpcyk7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9VUCwgdGhpcy5vbktleVVwLCB0aGlzKTtcclxuICAgICAgICB0aGlzLnBsYXllck51bSA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlBsYXllck51bVwiKTtcclxuICAgICAgICB0aGlzLmFsaXZlUGxheWVyID0gdGhpcy50b3RhbFBsYXllcjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIC8vdGhpcy5wbGF5QkdNKCk7XHJcbiAgICAgICAgdGhpcy5sb2FkUGxheWVyKCk7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VQbGF5ZXIoMCk7XHJcbiAgICAgICAgdGhpcy5pbml0UmVzdW1lQnRuKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlIChkdCkge1xyXG4gICAgICAgIGlmKHRoaXMud2lubmVyID09IG51bGwpe1xyXG4gICAgICAgICAgICB2YXIgcGxheWVyUG9zID0gdGhpcy5wbGF5ZXIubm9kZS5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgICAgICB2YXIgY2FtZXJhUG9zID0gdGhpcy5jYW1lcmEuZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICAgICAgdmFyIHByZXZDYW1Qb3MgPSB0aGlzLmNhbWVyYS5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgICAgICBjYW1lcmFQb3MubGVycChwbGF5ZXJQb3MsIDAuMSwgY2FtZXJhUG9zKTtcclxuICAgICAgICAgICAgY2FtZXJhUG9zLnkgPSBjYy5taXNjLmNsYW1wZihwbGF5ZXJQb3MueSwgMCwgMjAwKTtcclxuICAgICAgICAgICAgaWYoY2FtZXJhUG9zLnkgPiAxMDApe1xyXG4gICAgICAgICAgICAgICAgY2FtZXJhUG9zLnkgPSAxMDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoY2FtZXJhUG9zLnggPCAtMzUpIHtcclxuICAgICAgICAgICAgICAgIGNhbWVyYVBvcy54ID0gLTM1O1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYoY2FtZXJhUG9zLnggPiAyMDMzKzM1KSB7XHJcbiAgICAgICAgICAgICAgICBjYW1lcmFQb3MueCA9IDIwMzMrMzU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5jYW1lcmEuc2V0UG9zaXRpb24oY2FtZXJhUG9zKTtcclxuICAgICAgICAgICAgaWYodGhpcy5iYWNrZ3JvdW5kKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuYmFja2dyb3VuZC5zZXRQb3NpdGlvbihjYW1lcmFQb3MueCA8IHByZXZDYW1Qb3MueCA/IFxyXG4gICAgICAgICAgICAgICAgICAgICgoY2FtZXJhUG9zLnggLSBwcmV2Q2FtUG9zLngpLzMgKyB0aGlzLmJhY2tncm91bmQueCkgOiBcclxuICAgICAgICAgICAgICAgICAgICAodGhpcy5iYWNrZ3JvdW5kLnggLSAocHJldkNhbVBvcy54IC0gY2FtZXJhUG9zLngpLzMpLCBcclxuICAgICAgICAgICAgICAgICAgICBjYW1lcmFQb3MueSA8IHByZXZDYW1Qb3MueSA/IFxyXG4gICAgICAgICAgICAgICAgICAgICgoY2FtZXJhUG9zLnkgLSBwcmV2Q2FtUG9zLnkpLzMgKyB0aGlzLmJhY2tncm91bmQueSkgOlxyXG4gICAgICAgICAgICAgICAgICAgICh0aGlzLmJhY2tncm91bmQueSAtIChwcmV2Q2FtUG9zLnkgLSBjYW1lcmFQb3MueSkvMykpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKHRoaXMuVUkudGltZXJWYWwgPCAwIHx8IHRoaXMucGxheWVyLmlzRGllKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuVUkudGltZXJWYWwgPSAyMDtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlUGxheWVyKHRoaXMuY3VyclBsYXllciArIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuaXNXaW4oKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZFBsYXllcigpIHtcclxuICAgICAgICB0aGlzLnRvdGFsUGxheWVyID0gcGFyc2VJbnQodGhpcy5wbGF5ZXJOdW0pO1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy50b3RhbFBsYXllcikge1xyXG4gICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICBjYy5maW5kKHRoaXMucGxheWVyUGF0aCArIFwiUGxheWVyIDRcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgY2MuZmluZCh0aGlzLnBsYXllclBhdGggKyBcIlBsYXllciAzXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgIGNjLmZpbmQodGhpcy5wbGF5ZXJQYXRoICsgXCJQbGF5ZXIgMlwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgY2MuZmluZCh0aGlzLnBsYXllclBhdGggKyBcIlBsYXllciAxXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpc1dpbigpe1xyXG4gICAgICAgIGxldCBhbGl2ZSA9IHRoaXMudG90YWxQbGF5ZXI7XHJcbiAgICAgICAgaWYgKHRoaXMudG90YWxQbGF5ZXIgPT0gMil7XHJcbiAgICAgICAgICAgIGlmKHRoaXMucGxheWVyMS5pc0RpZSlcclxuICAgICAgICAgICAgICAgIGFsaXZlLS07XHJcbiAgICAgICAgICAgIGlmKHRoaXMucGxheWVyMi5pc0RpZSlcclxuICAgICAgICAgICAgICAgIGFsaXZlLS07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMudG90YWxQbGF5ZXIgPT0gMyl7XHJcbiAgICAgICAgICAgIGlmKHRoaXMucGxheWVyMS5pc0RpZSlcclxuICAgICAgICAgICAgICAgIGFsaXZlLS07XHJcbiAgICAgICAgICAgIGlmKHRoaXMucGxheWVyMi5pc0RpZSlcclxuICAgICAgICAgICAgICAgIGFsaXZlLS07XHJcbiAgICAgICAgICAgIGlmKHRoaXMucGxheWVyMy5pc0RpZSlcclxuICAgICAgICAgICAgICAgIGFsaXZlLS07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMudG90YWxQbGF5ZXIgPT0gNCl7XHJcbiAgICAgICAgICAgIGlmKHRoaXMucGxheWVyMS5pc0RpZSlcclxuICAgICAgICAgICAgICAgIGFsaXZlLS07XHJcbiAgICAgICAgICAgIGlmKHRoaXMucGxheWVyMi5pc0RpZSlcclxuICAgICAgICAgICAgICAgIGFsaXZlLS07XHJcbiAgICAgICAgICAgIGlmKHRoaXMucGxheWVyMy5pc0RpZSlcclxuICAgICAgICAgICAgICAgIGFsaXZlLS07XHJcbiAgICAgICAgICAgIGlmKHRoaXMucGxheWVyNC5pc0RpZSlcclxuICAgICAgICAgICAgICAgIGFsaXZlLS07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYWxpdmVQbGF5ZXIgPSBhbGl2ZTtcclxuICAgICAgICBpZiAodGhpcy5hbGl2ZVBsYXllciA9PSAxKXtcclxuICAgICAgICAgICAgdGhpcy53aW5uZXIgPSB0aGlzLnBsYXllci5wbGF5ZXJOYW1lLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLndpbm5lcik7XHJcbiAgICAgICAgICAgIC8vdGhpcy5VSS5wYXVzZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VQbGF5ZXIobnVtKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyUGxheWVyID0gbnVtICUgdGhpcy50b3RhbFBsYXllcjtcclxuICAgICAgICBpZigodGhpcy5wbGF5ZXIgJiYgIXRoaXMucGxheWVyLmlzRGllKSkge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllci5zZXRQbGF5ZXJNb3ZlRGlyZWN0aW9uKDApO1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllci5zZXRQbGF5ZXJKdW1wKGZhbHNlKTtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIubGluZS5nZXRDb21wb25lbnQoXCJUcmFqZWN0b3J5TGluZVwiKS5jbGVhckxpbmUoKTtcclxuICAgICAgICAgICAgdGhpcy5vbkRpc2FibGUoKTtcclxuICAgICAgICB9IFxyXG4gICAgICAgIHN3aXRjaCAodGhpcy5jdXJyUGxheWVyKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyID0gdGhpcy5wbGF5ZXIxO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyID0gdGhpcy5wbGF5ZXIyO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyID0gdGhpcy5wbGF5ZXIzO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoIXRoaXMucGxheWVyLmlzRGllKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25FbmFibGUoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmNoYW5nZVBsYXllcihudW0rMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHBsYXlCR00oKSB7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheU11c2ljKHRoaXMuYmdtLCB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25FbmFibGUoKTogdm9pZCB7XHJcbiAgICAgICAgaWYodGhpcy5wbGF5ZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vbkV2ZW50U3RhcnQsIHRoaXMpOyAgICAvLyB0b3VjaGVkXHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy5vbkV2ZW50TW92ZSwgdGhpcyk7ICAgICAgLy8gYWltXHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCB0aGlzLm9uRXZlbnRDYW5jZWwsIHRoaXMpOyAgLy8gc2hvb3RcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25FdmVudEVuZCwgdGhpcyk7ICAgICAgICAvLyBjYW5jZWwgc2hvb3RcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uRGlzYWJsZSgpOiB2b2lkIHtcclxuICAgICAgICBpZih0aGlzLnBsYXllcikge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllci5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vbkV2ZW50U3RhcnQsIHRoaXMpOyAgIC8vIHRvdWNoZWRcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy5vbkV2ZW50TW92ZSwgdGhpcyk7ICAgICAvLyBhaW1cclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCB0aGlzLm9uRXZlbnRDYW5jZWwsIHRoaXMpOyAvLyBzaG9vdFxyXG4gICAgICAgICAgICB0aGlzLnBsYXllci5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vbkV2ZW50RW5kLCB0aGlzKTsgICAgICAgIC8vIGNhbmNlbCBzaG9vdFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbktleURvd24oZSkge1xyXG4gICAgICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmE6ICAgICAgICAvLyBtb3ZlIGxlZnRcclxuICAgICAgICAgICAgICAgIHRoaXMuYUtleURvd24gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIuc2V0UGxheWVyTW92ZURpcmVjdGlvbigtMSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuZDogICAgICAgIC8vIG1vdmUgcmlnaHRcclxuICAgICAgICAgICAgICAgIHRoaXMuZEtleURvd24gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIuc2V0UGxheWVyTW92ZURpcmVjdGlvbigxKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5zcGFjZTogICAgLy8ganVtcFxyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIuc2V0UGxheWVySnVtcCh0cnVlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5lc2NhcGU6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhdXNlR2FtZSgpO1xyXG4gICAgICAgICAgICAgICAgLy90aGlzLlVJLnBhdXNlKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkucDogICAgICAgIC8vIHBhc3NcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlUGxheWVyKHRoaXMuY3VyclBsYXllciArIDEpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5VSS50aW1lclZhbCA9IDIwO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25LZXlVcChlKSB7XHJcbiAgICAgICAgc3dpdGNoIChlLmtleUNvZGUpIHtcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuYTpcclxuICAgICAgICAgICAgICAgIHRoaXMuYUtleURvd24gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuZEtleURvd24pIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5zZXRQbGF5ZXJNb3ZlRGlyZWN0aW9uKDEpOyAgLy8gbW92ZSByaWdodFxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5zZXRQbGF5ZXJNb3ZlRGlyZWN0aW9uKDApOyAgLy8gc3RvcCBtb3ZpbmdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5kOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5kS2V5RG93biA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5hS2V5RG93bikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLnNldFBsYXllck1vdmVEaXJlY3Rpb24oLTEpOyAvLyBtb3ZlIGxlZnRcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIuc2V0UGxheWVyTW92ZURpcmVjdGlvbigwKTsgIC8vIHN0b3AgbW92aW5nXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuc3BhY2U6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5zZXRQbGF5ZXJKdW1wKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5mOiAgICAgICAgLy8gc2hvb3QgKGJ1bGxldCkgICAgXHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllci53ZWFwb24gPSBcImd1blwiO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnI6ICAgICAgICAvLyBib21iXHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllci53ZWFwb24gPSBcImJvbWJcIlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25FdmVudFN0YXJ0IChldmVudCkgeyAgLy8gdG91Y2hlZFxyXG4gICAgICAgIGlmICghdGhpcy5lbmFibGVkSW5IaWVyYXJjaHkpIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYoIXRoaXMuc2hvb3QpIHtcclxuICAgICAgICAgICAgLy8gdGhpcy5zdGFydFBvcyA9IHRoaXMubm9kZS5wb3NpdGlvbjtcclxuICAgICAgICAgICAgLy8gdGhpcy5tb3RvckpvaW50LmVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgLy8gdGhpcy5yYi5ncmF2aXR5U2NhbGUgPSAwO1xyXG4gICAgICAgICAgICAvLyB0aGlzLnJiLmxpbmVhclZlbG9jaXR5ID0gY2MuVmVjMi5aRVJPO1xyXG4gICAgICAgICAgICAvLyB0aGlzLnJiLmFuZ3VsYXJWZWxvY2l0eSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBvbkV2ZW50TW92ZSAoZXZlbnQpIHsgICAvLyBhaW1cclxuICAgICAgICBpZiAoIXRoaXMuZW5hYmxlZEluSGllcmFyY2h5KSByZXR1cm47XHJcblxyXG4gICAgICAgIHZhciBwbGF5ZXJQb3MgPSBldmVudC5nZXRTdGFydExvY2F0aW9uKCk7XHJcbiAgICAgICAgdmFyIG1vdXNlUG9zID0gZXZlbnQuZ2V0TG9jYXRpb24oKTtcclxuICAgICAgICB2YXIgZGlmZlggPSBtb3VzZVBvcy54IC0gcGxheWVyUG9zLng7XHJcbiAgICAgICAgdmFyIGRpZmZZID0gcGxheWVyUG9zLnkgLSBtb3VzZVBvcy55O1xyXG4gICAgICAgIHRoaXMuc2hvb3RBbmdsZSA9IE1hdGguYXRhbjIoTWF0aC5hYnMoZGlmZlkpLCBNYXRoLmFicyhkaWZmWCkpOyAvLyBhbmdsZSBpbiByYWRpYW5cclxuICAgICAgICBpZihkaWZmWCA+PSAwKSB7ICAgIC8vIGNoYW5nZSBwbGF5ZXIgZGlyZWN0aW9uXHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyLnNldFBsYXllckNoYW5nZURpcmVjdGlvbigtMSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIuc2V0UGxheWVyQ2hhbmdlRGlyZWN0aW9uKDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihkaWZmWSA8IDApIHtcclxuICAgICAgICAgICAgdGhpcy5zaG9vdEFuZ2xlICo9IC0xO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZighdGhpcy5zaG9vdCl7XHJcbiAgICAgICAgICAgIGlmKHRoaXMucGxheWVyLndlYXBvbiA9PSBcImd1blwiKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5saW5lLmdldENvbXBvbmVudChcIlRyYWplY3RvcnlMaW5lXCIpLmRyYXdTdHJhaWdodExpbmUodGhpcy5zaG9vdEFuZ2xlKTsgLy8gZHJhdyB0cmFqZWN0b3J5IGxpbmVcclxuICAgICAgICAgICAgfSBlbHNlIGlmKHRoaXMucGxheWVyLndlYXBvbiA9PSBcImJvbWJcIikge1xyXG4gICAgICAgICAgICAgICAgbGV0IHBvd2VyID0gKE1hdGguYWJzKGRpZmZZKSA+PSBNYXRoLmFicyhkaWZmWCkgPyBNYXRoLmFicyhkaWZmWSkgOiBNYXRoLmFicyhkaWZmWCkpIFxyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIubGluZS5nZXRDb21wb25lbnQoXCJUcmFqZWN0b3J5TGluZVwiKS5kcmF3Q3VydmVMaW5lKHRoaXMuc2hvb3RBbmdsZSwgcG93ZXIqMik7IC8vIGRyYXcgYXJyb3dcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLnBvd2VyID0gKHBvd2VyICogMiA+IDEwMCkgPyAxMDAgOiBwb3dlciAqIDI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRXZlbnRDYW5jZWwgKGV2ZW50KSB7IC8vIHNob290XHJcbiAgICAgICAgaWYgKCF0aGlzLmVuYWJsZWRJbkhpZXJhcmNoeSkgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLmhhdmVTaG90KCk7XHJcbiAgICBcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgb25FdmVudEVuZCAoZXZlbnQpIHsgIC8vIGNhbmNlbCBzaG9vdFxyXG4gICAgICAgIGlmICghdGhpcy5lbmFibGVkSW5IaWVyYXJjaHkpIHJldHVybjtcclxuICAgIFxyXG4gICAgICAgIHRoaXMuaGF2ZVNob3QoKTtcclxuICAgIFxyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhdmVTaG90KCkge1xyXG4gICAgICAgIGlmKHRoaXMuc2hvb3QpIHJldHVybjtcclxuICAgICAgICB0aGlzLnBsYXllci5saW5lLmdldENvbXBvbmVudChcIlRyYWplY3RvcnlMaW5lXCIpLmNsZWFyTGluZSgpO1xyXG4gICAgICAgIC8vIHRoaXMuc2hvb3QgPSB0cnVlO1xyXG4gICAgICAgIGlmKHRoaXMucGxheWVyLndlYXBvbiA9PSBcImd1blwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyLnNldFBsYXllclNob290KHRoaXMuc2hvb3RBbmdsZSk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnBsYXllci53ZWFwb24gPT0gXCJib21iXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIuc2V0UGxheWVyQm9tYih0aGlzLnNob290QW5nbGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnBsYXllci5zZXRQbGF5ZXJDaGFuZ2VEaXJlY3Rpb24oMCk7XHJcbiAgICB9XHJcblxyXG4gICAgcGF1c2VHYW1lKCkge1xyXG4gICAgICAgIGlmKGNjLmRpcmVjdG9yLmlzUGF1c2VkKCkpIHtcclxuICAgICAgICAgICAgY2MuZGlyZWN0b3IucmVzdW1lKCk7XHJcbiAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXMvTWFpbiBDYW1lcmEvUGF1c2UgTWVudVwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLnBhdXNlKCk7XHJcbiAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXMvTWFpbiBDYW1lcmEvUGF1c2UgTWVudVwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBQYXVzZSBNZW51IEJ1dHRvbnNcclxuXHJcbiAgICBpbml0UmVzdW1lQnRuKCkge1xyXG4gICAgICAgIGxldCBjbGlja0V2ZW50SGFuZGxlciA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgY2xpY2tFdmVudEhhbmRsZXIudGFyZ2V0ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIGNsaWNrRXZlbnRIYW5kbGVyLmNvbXBvbmVudCA9IFwiR2FtZU1hbmFnZXJcIjtcclxuICAgICAgICBjbGlja0V2ZW50SGFuZGxlci5oYW5kbGVyID0gXCJyZXN1bWVcIjtcclxuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL01haW4gQ2FtZXJhL1BhdXNlIE1lbnUvQmlnIExheW91dC9yZXN1bWVCdG5cIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuY2xpY2tFdmVudHMucHVzaChjbGlja0V2ZW50SGFuZGxlcik7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzdW1lKCkge1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLnJlc3VtZSgpO1xyXG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvTWFpbiBDYW1lcmEvUGF1c2UgTWVudVwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Instructions-option1.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '717acDLmcNIiYT9UfpZAPhm', 'Instructions-option1');
// scripts/Instructions-option1.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var InstructionsMenuOption1 = /** @class */ (function (_super) {
    __extends(InstructionsMenuOption1, _super);
    function InstructionsMenuOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InstructionsMenuOption1.prototype.start = function () {
        var nextbtn = new cc.Component.EventHandler();
        nextbtn.target = this.node;
        nextbtn.component = "Instructions-option1";
        nextbtn.handler = "loadNextInstructions";
        cc.find("Next").getComponent(cc.Button).clickEvents.push(nextbtn);
        var prevbtn = new cc.Component.EventHandler();
        prevbtn.target = this.node;
        prevbtn.component = "Instructions-option1";
        prevbtn.handler = "loadPrevInstructions";
        cc.find("Prev").getComponent(cc.Button).clickEvents.push(prevbtn);
    };
    InstructionsMenuOption1.prototype.loadNextInstructions = function () {
        cc.director.loadScene("instructions - option 2");
    };
    InstructionsMenuOption1.prototype.loadPrevInstructions = function () {
        cc.director.loadScene("instructions");
    };
    InstructionsMenuOption1 = __decorate([
        ccclass
    ], InstructionsMenuOption1);
    return InstructionsMenuOption1;
}(cc.Component));
exports.default = InstructionsMenuOption1;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcSW5zdHJ1Y3Rpb25zLW9wdGlvbjEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBcUQsMkNBQVk7SUFBakU7O0lBa0NBLENBQUM7SUE1QkcsdUNBQUssR0FBTDtRQUNJLElBQUksT0FBTyxHQUFHLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUM5QyxPQUFPLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDM0IsT0FBTyxDQUFDLFNBQVMsR0FBRyxzQkFBc0IsQ0FBQztRQUMzQyxPQUFPLENBQUMsT0FBTyxHQUFHLHNCQUFzQixDQUFDO1FBR3pDLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBR2xFLElBQUksT0FBTyxHQUFHLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUM5QyxPQUFPLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDM0IsT0FBTyxDQUFDLFNBQVMsR0FBRyxzQkFBc0IsQ0FBQztRQUMzQyxPQUFPLENBQUMsT0FBTyxHQUFHLHNCQUFzQixDQUFDO1FBR3pDLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBRXRFLENBQUM7SUFFRCxzREFBb0IsR0FBcEI7UUFDSSxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFRCxzREFBb0IsR0FBcEI7UUFDSSxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBaENnQix1QkFBdUI7UUFEM0MsT0FBTztPQUNhLHVCQUF1QixDQWtDM0M7SUFBRCw4QkFBQztDQWxDRCxBQWtDQyxDQWxDb0QsRUFBRSxDQUFDLFNBQVMsR0FrQ2hFO2tCQWxDb0IsdUJBQXVCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnN0cnVjdGlvbnNNZW51T3B0aW9uMSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgICAgICBFZGl0X0JveDogY2MuRWRpdEJveCxcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgbGV0IG5leHRidG4gPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xyXG4gICAgICAgIG5leHRidG4udGFyZ2V0ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIG5leHRidG4uY29tcG9uZW50ID0gXCJJbnN0cnVjdGlvbnMtb3B0aW9uMVwiO1xyXG4gICAgICAgIG5leHRidG4uaGFuZGxlciA9IFwibG9hZE5leHRJbnN0cnVjdGlvbnNcIjtcclxuXHJcblxyXG4gICAgICAgIGNjLmZpbmQoXCJOZXh0XCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2gobmV4dGJ0bik7XHJcblxyXG5cclxuICAgICAgICBsZXQgcHJldmJ0biA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgcHJldmJ0bi50YXJnZXQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgcHJldmJ0bi5jb21wb25lbnQgPSBcIkluc3RydWN0aW9ucy1vcHRpb24xXCI7XHJcbiAgICAgICAgcHJldmJ0bi5oYW5kbGVyID0gXCJsb2FkUHJldkluc3RydWN0aW9uc1wiO1xyXG5cclxuXHJcbiAgICAgICAgY2MuZmluZChcIlByZXZcIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuY2xpY2tFdmVudHMucHVzaChwcmV2YnRuKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbG9hZE5leHRJbnN0cnVjdGlvbnMoKXtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJpbnN0cnVjdGlvbnMgLSBvcHRpb24gMlwiKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkUHJldkluc3RydWN0aW9ucygpe1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImluc3RydWN0aW9uc1wiKTtcclxuICAgIH1cclxuXHJcbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Instructions-option2.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cc30acpkBxLtKbIdxRprS2A', 'Instructions-option2');
// scripts/Instructions-option2.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var InstructionsMenuOption2 = /** @class */ (function (_super) {
    __extends(InstructionsMenuOption2, _super);
    function InstructionsMenuOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InstructionsMenuOption2.prototype.start = function () {
        var nextbtn = new cc.Component.EventHandler();
        nextbtn.target = this.node;
        nextbtn.component = "Instructions-option2";
        nextbtn.handler = "loadNextInstructions";
        cc.find("Canvas/Next").getComponent(cc.Button).clickEvents.push(nextbtn);
        var prevbtn = new cc.Component.EventHandler();
        prevbtn.target = this.node;
        prevbtn.component = "Instructions-option2";
        prevbtn.handler = "loadPrevInstructions";
        cc.find("Canvas/Prev").getComponent(cc.Button).clickEvents.push(prevbtn);
    };
    InstructionsMenuOption2.prototype.loadNextInstructions = function () {
        cc.director.loadScene("instructions - win");
    };
    InstructionsMenuOption2.prototype.loadPrevInstructions = function () {
        cc.director.loadScene("instructions - option 1");
    };
    InstructionsMenuOption2 = __decorate([
        ccclass
    ], InstructionsMenuOption2);
    return InstructionsMenuOption2;
}(cc.Component));
exports.default = InstructionsMenuOption2;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcSW5zdHJ1Y3Rpb25zLW9wdGlvbjIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBcUQsMkNBQVk7SUFBakU7O0lBa0NBLENBQUM7SUE1QkcsdUNBQUssR0FBTDtRQUNJLElBQUksT0FBTyxHQUFHLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUM5QyxPQUFPLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDM0IsT0FBTyxDQUFDLFNBQVMsR0FBRyxzQkFBc0IsQ0FBQztRQUMzQyxPQUFPLENBQUMsT0FBTyxHQUFHLHNCQUFzQixDQUFDO1FBR3pDLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBR3pFLElBQUksT0FBTyxHQUFHLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUM5QyxPQUFPLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDM0IsT0FBTyxDQUFDLFNBQVMsR0FBRyxzQkFBc0IsQ0FBQztRQUMzQyxPQUFPLENBQUMsT0FBTyxHQUFHLHNCQUFzQixDQUFDO1FBR3pDLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBRTdFLENBQUM7SUFFRCxzREFBb0IsR0FBcEI7UUFDSSxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFRCxzREFBb0IsR0FBcEI7UUFDSSxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFoQ2dCLHVCQUF1QjtRQUQzQyxPQUFPO09BQ2EsdUJBQXVCLENBa0MzQztJQUFELDhCQUFDO0NBbENELEFBa0NDLENBbENvRCxFQUFFLENBQUMsU0FBUyxHQWtDaEU7a0JBbENvQix1QkFBdUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluc3RydWN0aW9uc01lbnVPcHRpb24yIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgICAgIEVkaXRfQm94OiBjYy5FZGl0Qm94LFxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICBsZXQgbmV4dGJ0biA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgbmV4dGJ0bi50YXJnZXQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgbmV4dGJ0bi5jb21wb25lbnQgPSBcIkluc3RydWN0aW9ucy1vcHRpb24yXCI7XHJcbiAgICAgICAgbmV4dGJ0bi5oYW5kbGVyID0gXCJsb2FkTmV4dEluc3RydWN0aW9uc1wiO1xyXG5cclxuXHJcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9OZXh0XCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2gobmV4dGJ0bik7XHJcblxyXG5cclxuICAgICAgICBsZXQgcHJldmJ0biA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgcHJldmJ0bi50YXJnZXQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgcHJldmJ0bi5jb21wb25lbnQgPSBcIkluc3RydWN0aW9ucy1vcHRpb24yXCI7XHJcbiAgICAgICAgcHJldmJ0bi5oYW5kbGVyID0gXCJsb2FkUHJldkluc3RydWN0aW9uc1wiO1xyXG5cclxuXHJcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9QcmV2XCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2gocHJldmJ0bik7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGxvYWROZXh0SW5zdHJ1Y3Rpb25zKCl7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiaW5zdHJ1Y3Rpb25zIC0gd2luXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWRQcmV2SW5zdHJ1Y3Rpb25zKCl7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiaW5zdHJ1Y3Rpb25zIC0gb3B0aW9uIDFcIik7XHJcbiAgICB9XHJcblxyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Player.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '79d84uofUZJnoN7h0LOvIwJ', 'Player');
// scripts/Player.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.jumpAudio = null;
        _this.dieAudio = null;
        _this.bulletPrefab = null;
        _this.bombPrefab = null;
        _this.line = null;
        _this.playerName = null;
        _this.playerChar = null;
        _this.aimLabel = null;
        _this.moveSpeed = 300;
        _this.moveDirection = 0;
        _this.changeDirection = 0;
        _this.jumpVelocity = 2500;
        _this.jump = false;
        _this.isOnGround = false;
        _this.isDie = false;
        _this.isMove = false;
        _this.animation = null;
        _this.animationState = null;
        _this.rigidBody = null;
        _this.win = false;
        _this.shoot = false;
        _this.bombPool = null;
        _this.bomb = false;
        _this.angle = null;
        _this.power = null;
        _this.maxHP = 100;
        _this.HP = 100;
        _this.hurt = false;
        _this.weapon = "gun";
        _this.gunType = "shotgun";
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    Player.prototype.onLoad = function () {
        this.animation = this.node.getComponent(cc.Animation);
        this.rigidBody = this.node.getComponent(cc.RigidBody);
        this.playerName = this.node.getChildByName("Player Name");
        this.line = this.node.getChildByName("Trajectory Line");
        this.aimLabel = this.node.getChildByName("Aim Layout");
        ;
        this.setPlayerName();
        this.setPlayerChar();
        this.bombPool = new cc.NodePool('Bomb');
        var maxBombNum = 5;
        for (var i = 0; i < maxBombNum; i++) {
            var bomb = cc.instantiate(this.bombPrefab);
            this.bombPool.put(bomb);
        }
    };
    Player.prototype.start = function () {
    };
    Player.prototype.update = function (dt) {
        if (!this.win) {
            if (!this.isDie) {
                cc.find("Player Health/bar", this.node).width = (this.HP / this.maxHP) * 100;
                this.playerMove(dt);
                if (this.HP <= 0) {
                    this.playerDie();
                }
                else {
                    if (this.jump) {
                        this.playerJump();
                    }
                    if (this.shoot) {
                        this.createBullet(this.gunType);
                    }
                    else if (this.bomb) {
                        this.createBomb();
                    }
                    this.playerAnimation();
                }
            }
        }
    };
    Player.prototype.onBeginContact = function (contact, self, other) {
        var _this = this;
        if (contact.getWorldManifold().normal.y < 0) { // step on something
            this.isOnGround = true;
        }
        // if(other.tag == 1){     // on ground or props
        //     this.isOnGround = true;
        // }
        if (other.node.group == "bullet" || other.node.group == "explosiveObj" || other.node.group == "bomb") {
            if (!this.isDie) {
                this.HP -= 10;
                if (this.HP <= 0) {
                    this.HP = 0;
                }
                else {
                    this.hurt = true;
                    if (this.playerChar == "char1" && this.HP != 0) {
                        this.animationState = this.animation.play('char1hurt');
                    }
                    else if (this.playerChar == "char2" && this.HP != 0) {
                        this.animationState = this.animation.play('char2hurt');
                    }
                    else if (this.playerChar == "char3" && this.HP != 0) {
                        this.animationState = this.animation.play('char3hurt');
                    }
                    else if (this.playerChar == "char4" && this.HP != 0) {
                        this.animationState = this.animation.play('char4hurt');
                    }
                    this.scheduleOnce(function () {
                        _this.hurt = false;
                    }, 0.5);
                }
            }
        }
        else if (other.node.group == "wall") {
            if (other.node.name == "Die Boundary") {
                this.playerDie();
            }
        }
    };
    Player.prototype.playerMove = function (dt) {
        this.node.x += this.moveSpeed * this.moveDirection * dt; // player walking
        this.isMove = (this.moveDirection != 0) ? true : false;
        if (this.moveDirection == 1 || this.changeDirection == 1) { // change direction using scaling
            this.node.scaleX = 1;
            this.playerName.scaleX = 1;
            cc.find("Player Health", this.node).scaleX = 1;
            if (this.aimLabel.active) {
                this.aimLabel.scaleX = 1;
            }
        }
        else if (this.moveDirection == -1 || this.changeDirection == -1) {
            this.node.scaleX = -1;
            this.playerName.scaleX = -1;
            cc.find("Player Health", this.node).scaleX = -1;
            if (this.aimLabel.active) {
                this.aimLabel.scaleX = -1;
            }
        }
    };
    Player.prototype.playerJump = function () {
        if (this.isOnGround) { // player is on ground
            this.rigidBody.linearVelocity = cc.v2(0, this.jumpVelocity); // add jump velocity
            this.isOnGround = false;
            cc.audioEngine.playEffect(this.jumpAudio, false);
            this.animationState = this.animation.play('char1jump');
        }
    };
    Player.prototype.createBullet = function (mode) {
        this.shoot = false;
        if (mode == "normal") {
            var bullet = cc.instantiate(this.bulletPrefab);
            if (bullet != null) {
                bullet.getComponent('Bullet').setAngle(this.angle);
                bullet.getComponent('Bullet').init(this.node);
            }
        }
        else if (mode == "burst") {
            this.schedule(function () {
                console.log("boom");
                var bullet = cc.instantiate(this.bulletPrefab);
                if (bullet != null) {
                    bullet.getComponent('Bullet').setAngle(this.angle);
                    bullet.getComponent('Bullet').init(this.node);
                }
            }, 0.05, 2);
        }
        else if (mode == "shotgun") {
            var d_angle = -0.2;
            for (var i = 0; i < 5; i++) {
                var bullet = cc.instantiate(this.bulletPrefab);
                if (bullet != null) {
                    bullet.getComponent('Bullet').setAngle(this.angle + d_angle);
                    bullet.getComponent('Bullet').init(this.node);
                    d_angle += 0.1;
                }
            }
        }
    };
    Player.prototype.createBomb = function () {
        this.bomb = false;
        var bomb = null;
        if (this.bombPool.size() > 0)
            bomb = this.bombPool.get(this.bombPool);
        if (bomb != null) {
            bomb.getComponent('Bomb').setAnglePower(this.angle, this.power);
            bomb.getComponent('Bomb').init(this.node);
        }
    };
    Player.prototype.playerDie = function () {
        this.isDie = true;
        if (this.playerChar == "char1") {
            this.animation.stop('char1idle');
            this.animationState = this.animation.play('char1dead');
        }
        else if (this.playerChar == "char2") {
            this.animation.stop('char2idle');
            this.animationState = this.animation.play('char2dead');
        }
        else if (this.playerChar == "char3") {
            this.animation.stop('char3idle');
            this.animationState = this.animation.play('char3dead');
        }
        else if (this.playerChar == "char4") {
            this.animation.stop('char4idle');
            this.animationState = this.animation.play('char4dead');
        }
        this.scheduleOnce(function () {
            this.node.destroy();
            // this.node.getComponent(cc.PhysicsBoxCollider).enabled = false;
        }, 1);
        cc.audioEngine.playEffect(this.dieAudio, false);
    };
    Player.prototype.playerAnimation = function () {
        if (!this.isDie) { // animation for char1
            if (this.playerChar == "char1") { // MUST change to curPlayer == "Player 1"
                if (this.isOnGround && !this.isMove && !this.hurt && (!this.animationState || this.animationState.name != "char1idle")) {
                    this.animationState = this.animation.play("char1idle");
                }
                else if (this.isOnGround && this.isMove && (!this.animationState || this.animationState.name != "char1run")) {
                    this.animationState = this.animation.play("char1run");
                }
                else if (!this.isOnGround && (!this.animationState || this.animationState.name != "char1jump")) {
                    this.animationState = this.animation.play("char1jump");
                }
                // if (this.isOnGround && this.animation.getAnimationState('char1jump').isPlaying){
                //     this.animation.stop('char1jump');
                //     this.animationState = this.animation.play('char1idle');
                // }
                // if (this.isMove && !this.animation.getAnimationState('char1run').isPlaying && !this.animation.getAnimationState('char1jump').isPlaying){
                //     this.animationState = this.animation.play('char1run');
                // }
                // if (this.animationState == null || (!this.isMove && this.isOnGround && !this.animation.getAnimationState('char1idle').isPlaying)){
                //     this.animationState = this.animation.play('char1idle');
                // }          
            }
            else if (this.playerChar == "char2") {
                if (this.isOnGround && !this.isMove && !this.hurt && (!this.animationState || this.animationState.name != "char2idle")) {
                    this.animationState = this.animation.play("char2idle");
                }
                else if (this.isOnGround && this.isMove && (!this.animationState || this.animationState.name != "char2run")) {
                    this.animationState = this.animation.play("char2run");
                }
                else if (!this.isOnGround && (!this.animationState || this.animationState.name != "char2jump")) {
                    this.animationState = this.animation.play("char2jump");
                }
            }
            else if (this.playerChar == "char3") {
                if (this.isOnGround && !this.isMove && !this.hurt && (!this.animationState || this.animationState.name != "char3idle")) {
                    this.animationState = this.animation.play("char3idle");
                }
                else if (this.isOnGround && this.isMove && (!this.animationState || this.animationState.name != "char3run")) {
                    this.animationState = this.animation.play("char3run");
                }
                else if (!this.isOnGround && (!this.animationState || this.animationState.name != "char3jump")) {
                    this.animationState = this.animation.play("char3jump");
                }
            }
            else if (this.playerChar == "char4") {
                if (this.isOnGround && !this.isMove && !this.hurt && (!this.animationState || this.animationState.name != "char4idle")) {
                    this.animationState = this.animation.play("char4idle");
                }
                else if (this.isOnGround && this.isMove && (!this.animationState || this.animationState.name != "char4run")) {
                    this.animationState = this.animation.play("char4run");
                }
                else if (!this.isOnGround && (!this.animationState || this.animationState.name != "char4jump")) {
                    this.animationState = this.animation.play("char4jump");
                }
            }
        }
    };
    Player.prototype.setPlayerMoveDirection = function (dir) {
        this.moveDirection = dir;
    };
    Player.prototype.setPlayerChangeDirection = function (dir) {
        this.changeDirection = dir;
    };
    Player.prototype.setPlayerJump = function (val) {
        this.jump = val;
    };
    Player.prototype.setPlayerShoot = function (angle) {
        this.angle = angle;
        this.shoot = true;
    };
    Player.prototype.setPlayerBomb = function (angle) {
        this.angle = angle;
        this.bomb = true;
    };
    Player.prototype.setPlayerName = function () {
        if (this.node.name == "Player 1") {
            this.playerName.getComponent(cc.Label).string = cc.sys.localStorage.getItem("Player 1 Name");
        }
        else if (this.node.name == "Player 2") {
            this.playerName.getComponent(cc.Label).string = cc.sys.localStorage.getItem("Player 2 Name");
        }
        else if (this.node.name == "Player 3") {
            this.playerName.getComponent(cc.Label).string = cc.sys.localStorage.getItem("Player 3 Name");
        }
        else if (this.node.name == "Player 4") {
            this.playerName.getComponent(cc.Label).string = cc.sys.localStorage.getItem("Player 4 Name");
        }
    };
    Player.prototype.setPlayerChar = function () {
        if (this.node.name == "Player 1") {
            this.playerChar = cc.sys.localStorage.getItem("Player 1 Char");
            this.playerChar = "char1";
        }
        else if (this.node.name == "Player 2") {
            this.playerChar = cc.sys.localStorage.getItem("Player 2 Char");
            this.playerChar = "char2";
            //console.log("aaa")
        }
        else if (this.node.name == "Player 3") {
            this.playerChar = cc.sys.localStorage.getItem("Player 3 Char");
            this.playerChar = "char3";
        }
        else if (this.node.name == "Player 4") {
            this.playerChar = cc.sys.localStorage.getItem("Player 4 Char");
            this.playerChar = "char4";
        }
    };
    __decorate([
        property(cc.AudioClip)
    ], Player.prototype, "jumpAudio", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Player.prototype, "dieAudio", void 0);
    __decorate([
        property(cc.Prefab)
    ], Player.prototype, "bulletPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], Player.prototype, "bombPrefab", void 0);
    Player = __decorate([
        ccclass
    ], Player);
    return Player;
}(cc.Component));
exports.default = Player;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcUGxheWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQW9DLDBCQUFZO0lBQWhEO1FBQUEscUVBMFZDO1FBdlZHLGVBQVMsR0FBaUIsSUFBSSxDQUFDO1FBRy9CLGNBQVEsR0FBaUIsSUFBSSxDQUFDO1FBR3RCLGtCQUFZLEdBQWMsSUFBSSxDQUFDO1FBRy9CLGdCQUFVLEdBQWMsSUFBSSxDQUFDO1FBRTlCLFVBQUksR0FBRyxJQUFJLENBQUM7UUFFWixnQkFBVSxHQUFHLElBQUksQ0FBQztRQUVqQixnQkFBVSxHQUFXLElBQUksQ0FBQztRQUUxQixjQUFRLEdBQUcsSUFBSSxDQUFDO1FBRWhCLGVBQVMsR0FBVyxHQUFHLENBQUM7UUFFeEIsbUJBQWEsR0FBVyxDQUFDLENBQUM7UUFFMUIscUJBQWUsR0FBVyxDQUFDLENBQUM7UUFFNUIsa0JBQVksR0FBVyxJQUFJLENBQUM7UUFFNUIsVUFBSSxHQUFZLEtBQUssQ0FBQztRQUV0QixnQkFBVSxHQUFZLEtBQUssQ0FBQztRQUU3QixXQUFLLEdBQVksS0FBSyxDQUFDO1FBRXRCLFlBQU0sR0FBWSxLQUFLLENBQUM7UUFFeEIsZUFBUyxHQUFpQixJQUFJLENBQUM7UUFFL0Isb0JBQWMsR0FBRyxJQUFJLENBQUM7UUFFdEIsZUFBUyxHQUFpQixJQUFJLENBQUM7UUFFL0IsU0FBRyxHQUFZLEtBQUssQ0FBQztRQUVyQixXQUFLLEdBQVksS0FBSyxDQUFDO1FBRXZCLGNBQVEsR0FBRyxJQUFJLENBQUM7UUFFaEIsVUFBSSxHQUFZLEtBQUssQ0FBQztRQUV0QixXQUFLLEdBQUcsSUFBSSxDQUFDO1FBRWIsV0FBSyxHQUFXLElBQUksQ0FBQztRQUVyQixXQUFLLEdBQVcsR0FBRyxD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QUM7SUF0VkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzs2Q0FDUTtJQUcvQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOzRDQUNPO0lBRzlCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7Z0RBQ21CO0lBR3ZDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7OENBQ2lCO0lBWnBCLE1BQU07UUFEMUIsT0FBTztPQUNhLE1BQU0sQ0EwVjFCO0lBQUQsYUFBQztDQTFWRCxBQTBWQyxDQTFWbUMsRUFBRSxDQUFDLFNBQVMsR0EwVi9DO2tCQTFWb0IsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAganVtcEF1ZGlvOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBkaWVBdWRpbzogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgcHJpdmF0ZSBidWxsZXRQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHByaXZhdGUgYm9tYlByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBwdWJsaWMgbGluZSA9IG51bGw7XHJcblxyXG4gICAgcHVibGljIHBsYXllck5hbWUgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgcGxheWVyQ2hhcjogc3RyaW5nID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGFpbUxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIG1vdmVTcGVlZDogbnVtYmVyID0gMzAwO1xyXG5cclxuICAgIHByaXZhdGUgbW92ZURpcmVjdGlvbjogbnVtYmVyID0gMDtcclxuXHJcbiAgICBwcml2YXRlIGNoYW5nZURpcmVjdGlvbjogbnVtYmVyID0gMDtcclxuXHJcbiAgICBwcml2YXRlIGp1bXBWZWxvY2l0eTogbnVtYmVyID0gMjUwMDtcclxuXHJcbiAgICBwcml2YXRlIGp1bXA6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBwcml2YXRlIGlzT25Hcm91bmQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBwdWJsaWMgaXNEaWU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBwcml2YXRlIGlzTW92ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHByaXZhdGUgYW5pbWF0aW9uOiBjYy5BbmltYXRpb24gPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgYW5pbWF0aW9uU3RhdGUgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgcmlnaWRCb2R5OiBjYy5SaWdpZEJvZHkgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgd2luOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgcHJpdmF0ZSBzaG9vdDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHByaXZhdGUgYm9tYlBvb2wgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgYm9tYjogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHByaXZhdGUgYW5nbGUgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgcG93ZXI6IG51bWJlciA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBtYXhIUDogbnVtYmVyID0gMTAwO1xyXG5cclxuICAgIHByaXZhdGUgSFA6IG51bWJlciA9IDEwMDtcclxuXHJcbiAgICBwcml2YXRlIGh1cnQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBwdWJsaWMgd2VhcG9uOiBzdHJpbmcgPSBcImd1blwiO1xyXG5cclxuICAgIHB1YmxpYyBndW5UeXBlOiBzdHJpbmcgPSBcInNob3RndW5cIjtcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pO1xyXG4gICAgICAgIHRoaXMucmlnaWRCb2R5ID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG4gICAgICAgIHRoaXMucGxheWVyTmFtZSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIlBsYXllciBOYW1lXCIpO1xyXG4gICAgICAgIHRoaXMubGluZSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIlRyYWplY3RvcnkgTGluZVwiKTtcclxuICAgICAgICB0aGlzLmFpbUxhYmVsID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiQWltIExheW91dFwiKTs7XHJcbiAgICAgICAgdGhpcy5zZXRQbGF5ZXJOYW1lKCk7XHJcbiAgICAgICAgdGhpcy5zZXRQbGF5ZXJDaGFyKCk7XHJcbiAgICAgICAgdGhpcy5ib21iUG9vbCA9IG5ldyBjYy5Ob2RlUG9vbCgnQm9tYicpO1xyXG4gICAgICAgIGxldCBtYXhCb21iTnVtID0gNTtcclxuICAgICAgICBmb3IobGV0IGk6IG51bWJlciA9IDA7IGkgPCBtYXhCb21iTnVtOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGJvbWIgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmJvbWJQcmVmYWIpO1xyXG4gICAgICAgICAgICB0aGlzLmJvbWJQb29sLnB1dChib21iKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUgKGR0KSB7XHJcbiAgICAgICAgaWYoIXRoaXMud2luKSB7XHJcbiAgICAgICAgICAgIGlmKCF0aGlzLmlzRGllKSB7XHJcbiAgICAgICAgICAgICAgICBjYy5maW5kKFwiUGxheWVyIEhlYWx0aC9iYXJcIiwgdGhpcy5ub2RlKS53aWR0aCA9ICh0aGlzLkhQIC8gdGhpcy5tYXhIUCkgKiAxMDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllck1vdmUoZHQpO1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5IUCA8PSAwKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllckRpZSgpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmp1bXApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJKdW1wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuc2hvb3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVCdWxsZXQodGhpcy5ndW5UeXBlKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYodGhpcy5ib21iKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlQm9tYigpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllckFuaW1hdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uQmVnaW5Db250YWN0KGNvbnRhY3QsIHNlbGYsIG90aGVyKSB7XHJcbiAgICAgICAgaWYoY29udGFjdC5nZXRXb3JsZE1hbmlmb2xkKCkubm9ybWFsLnkgPCAwKSB7IC8vIHN0ZXAgb24gc29tZXRoaW5nXHJcbiAgICAgICAgICAgIHRoaXMuaXNPbkdyb3VuZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGlmKG90aGVyLnRhZyA9PSAxKXsgICAgIC8vIG9uIGdyb3VuZCBvciBwcm9wc1xyXG4gICAgICAgIC8vICAgICB0aGlzLmlzT25Hcm91bmQgPSB0cnVlO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICBpZihvdGhlci5ub2RlLmdyb3VwID09IFwiYnVsbGV0XCIgfHwgb3RoZXIubm9kZS5ncm91cCA9PSBcImV4cGxvc2l2ZU9ialwiIHx8IG90aGVyLm5vZGUuZ3JvdXAgPT0gXCJib21iXCIpIHtcclxuICAgICAgICAgICAgaWYoIXRoaXMuaXNEaWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuSFAgLT0gMTA7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLkhQIDw9IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLkhQID0gMDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5odXJ0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wbGF5ZXJDaGFyID09IFwiY2hhcjFcIiAmJiB0aGlzLkhQICE9IDApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFuaW1hdGlvblN0YXRlID0gdGhpcy5hbmltYXRpb24ucGxheSgnY2hhcjFodXJ0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMucGxheWVyQ2hhciA9PSBcImNoYXIyXCIgJiYgdGhpcy5IUCAhPSAwKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbmltYXRpb25TdGF0ZSA9IHRoaXMuYW5pbWF0aW9uLnBsYXkoJ2NoYXIyaHVydCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzLnBsYXllckNoYXIgPT0gXCJjaGFyM1wiICYmIHRoaXMuSFAgIT0gMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uU3RhdGUgPSB0aGlzLmFuaW1hdGlvbi5wbGF5KCdjaGFyM2h1cnQnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5wbGF5ZXJDaGFyID09IFwiY2hhcjRcIiAmJiB0aGlzLkhQICE9IDApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFuaW1hdGlvblN0YXRlID0gdGhpcy5hbmltYXRpb24ucGxheSgnY2hhcjRodXJ0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaHVydCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIDAuNSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZihvdGhlci5ub2RlLmdyb3VwID09IFwid2FsbFwiKSB7XHJcbiAgICAgICAgICAgIGlmKG90aGVyLm5vZGUubmFtZSA9PSBcIkRpZSBCb3VuZGFyeVwiKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllckRpZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHBsYXllck1vdmUoZHQpIHtcclxuICAgICAgICB0aGlzLm5vZGUueCArPSB0aGlzLm1vdmVTcGVlZCAqIHRoaXMubW92ZURpcmVjdGlvbiAqIGR0OyAgICAvLyBwbGF5ZXIgd2Fsa2luZ1xyXG4gICAgICAgIHRoaXMuaXNNb3ZlID0gKHRoaXMubW92ZURpcmVjdGlvbiAhPSAwKSA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICBpZih0aGlzLm1vdmVEaXJlY3Rpb24gPT0gMSB8fCB0aGlzLmNoYW5nZURpcmVjdGlvbiA9PSAxKSB7ICAgLy8gY2hhbmdlIGRpcmVjdGlvbiB1c2luZyBzY2FsaW5nXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5zY2FsZVggPSAxO1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllck5hbWUuc2NhbGVYID0gMTtcclxuICAgICAgICAgICAgY2MuZmluZChcIlBsYXllciBIZWFsdGhcIiwgdGhpcy5ub2RlKS5zY2FsZVggPSAxO1xyXG4gICAgICAgICAgICBpZih0aGlzLmFpbUxhYmVsLmFjdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5haW1MYWJlbC5zY2FsZVggPSAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMubW92ZURpcmVjdGlvbiA9PSAtMSB8fCB0aGlzLmNoYW5nZURpcmVjdGlvbiA9PSAtMSkge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGVYID0gLTE7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyTmFtZS5zY2FsZVggPSAtMTtcclxuICAgICAgICAgICAgY2MuZmluZChcIlBsYXllciBIZWFsdGhcIiwgdGhpcy5ub2RlKS5zY2FsZVggPSAtMTtcclxuICAgICAgICAgICAgaWYodGhpcy5haW1MYWJlbC5hY3RpdmUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWltTGFiZWwuc2NhbGVYID0gLTE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcGxheWVySnVtcCgpIHtcclxuICAgICAgICBpZih0aGlzLmlzT25Hcm91bmQpIHsgIC8vIHBsYXllciBpcyBvbiBncm91bmRcclxuICAgICAgICAgICAgdGhpcy5yaWdpZEJvZHkubGluZWFyVmVsb2NpdHkgPSBjYy52MigwLCB0aGlzLmp1bXBWZWxvY2l0eSk7ICAgIC8vIGFkZCBqdW1wIHZlbG9jaXR5XHJcbiAgICAgICAgICAgIHRoaXMuaXNPbkdyb3VuZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuanVtcEF1ZGlvLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uU3RhdGUgPSB0aGlzLmFuaW1hdGlvbi5wbGF5KCdjaGFyMWp1bXAnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjcmVhdGVCdWxsZXQobW9kZTogc3RyaW5nKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuc2hvb3QgPSBmYWxzZTtcclxuICAgICAgICBpZihtb2RlID09IFwibm9ybWFsXCIpIHtcclxuICAgICAgICAgICAgbGV0IGJ1bGxldCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuYnVsbGV0UHJlZmFiKTtcclxuICAgICAgICAgICAgaWYoYnVsbGV0ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGJ1bGxldC5nZXRDb21wb25lbnQoJ0J1bGxldCcpLnNldEFuZ2xlKHRoaXMuYW5nbGUpO1xyXG4gICAgICAgICAgICAgICAgYnVsbGV0LmdldENvbXBvbmVudCgnQnVsbGV0JykuaW5pdCh0aGlzLm5vZGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYobW9kZSA9PSBcImJ1cnN0XCIpIHtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZShmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYm9vbVwiKTtcclxuICAgICAgICAgICAgICAgIGxldCBidWxsZXQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmJ1bGxldFByZWZhYik7XHJcbiAgICAgICAgICAgICAgICBpZihidWxsZXQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJ1bGxldC5nZXRDb21wb25lbnQoJ0J1bGxldCcpLnNldEFuZ2xlKHRoaXMuYW5nbGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJ1bGxldC5nZXRDb21wb25lbnQoJ0J1bGxldCcpLmluaXQodGhpcy5ub2RlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgMC4wNSwgMik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYobW9kZSA9PSBcInNob3RndW5cIikge1xyXG4gICAgICAgICAgICBsZXQgZF9hbmdsZSA9IC0wLjI7XHJcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBidWxsZXQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmJ1bGxldFByZWZhYik7XHJcbiAgICAgICAgICAgICAgICBpZihidWxsZXQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJ1bGxldC5nZXRDb21wb25lbnQoJ0J1bGxldCcpLnNldEFuZ2xlKHRoaXMuYW5nbGUgKyBkX2FuZ2xlKTtcclxuICAgICAgICAgICAgICAgICAgICBidWxsZXQuZ2V0Q29tcG9uZW50KCdCdWxsZXQnKS5pbml0KHRoaXMubm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZF9hbmdsZSArPSAwLjE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjcmVhdGVCb21iKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLmJvbWIgPSBmYWxzZTtcclxuICAgICAgICBsZXQgYm9tYiA9IG51bGw7XHJcbiAgICAgICAgaWYgKHRoaXMuYm9tYlBvb2wuc2l6ZSgpID4gMCkgXHJcbiAgICAgICAgICAgIGJvbWIgPSB0aGlzLmJvbWJQb29sLmdldCh0aGlzLmJvbWJQb29sKTtcclxuXHJcbiAgICAgICAgaWYoYm9tYiAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGJvbWIuZ2V0Q29tcG9uZW50KCdCb21iJykuc2V0QW5nbGVQb3dlcih0aGlzLmFuZ2xlLCB0aGlzLnBvd2VyKTtcclxuICAgICAgICAgICAgYm9tYi5nZXRDb21wb25lbnQoJ0JvbWInKS5pbml0KHRoaXMubm9kZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHBsYXllckRpZSgpIHtcclxuICAgICAgICB0aGlzLmlzRGllID0gdHJ1ZTtcclxuICAgICAgICBpZiAodGhpcy5wbGF5ZXJDaGFyID09IFwiY2hhcjFcIil7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uLnN0b3AoJ2NoYXIxaWRsZScpO1xyXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGlvblN0YXRlID0gdGhpcy5hbmltYXRpb24ucGxheSgnY2hhcjFkZWFkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMucGxheWVyQ2hhciA9PSBcImNoYXIyXCIpe1xyXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGlvbi5zdG9wKCdjaGFyMmlkbGUnKTtcclxuICAgICAgICAgICAgdGhpcy5hbmltYXRpb25TdGF0ZSA9IHRoaXMuYW5pbWF0aW9uLnBsYXkoJ2NoYXIyZGVhZCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLnBsYXllckNoYXIgPT0gXCJjaGFyM1wiKXtcclxuICAgICAgICAgICAgdGhpcy5hbmltYXRpb24uc3RvcCgnY2hhcjNpZGxlJyk7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uU3RhdGUgPSB0aGlzLmFuaW1hdGlvbi5wbGF5KCdjaGFyM2RlYWQnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5wbGF5ZXJDaGFyID09IFwiY2hhcjRcIil7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uLnN0b3AoJ2NoYXI0aWRsZScpO1xyXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGlvblN0YXRlID0gdGhpcy5hbmltYXRpb24ucGxheSgnY2hhcjRkZWFkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIC8vIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuUGh5c2ljc0JveENvbGxpZGVyKS5lbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgfSwgMSk7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmRpZUF1ZGlvLCBmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcGxheWVyQW5pbWF0aW9uKCkge1xyXG4gICAgICAgIGlmKCF0aGlzLmlzRGllKXsgICAgLy8gYW5pbWF0aW9uIGZvciBjaGFyMVxyXG4gICAgICAgICAgICBpZih0aGlzLnBsYXllckNoYXIgPT0gXCJjaGFyMVwiKSB7ICAvLyBNVVNUIGNoYW5nZSB0byBjdXJQbGF5ZXIgPT0gXCJQbGF5ZXIgMVwiXHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLmlzT25Hcm91bmQgJiYgIXRoaXMuaXNNb3ZlICYmICF0aGlzLmh1cnQgJiYgKCF0aGlzLmFuaW1hdGlvblN0YXRlIHx8IHRoaXMuYW5pbWF0aW9uU3RhdGUubmFtZSAhPSBcImNoYXIxaWRsZVwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uU3RhdGUgPSB0aGlzLmFuaW1hdGlvbi5wbGF5KFwiY2hhcjFpZGxlXCIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKHRoaXMuaXNPbkdyb3VuZCAmJiB0aGlzLmlzTW92ZSAmJiAoIXRoaXMuYW5pbWF0aW9uU3RhdGUgfHwgdGhpcy5hbmltYXRpb25TdGF0ZS5uYW1lICE9IFwiY2hhcjFydW5cIikpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFuaW1hdGlvblN0YXRlID0gdGhpcy5hbmltYXRpb24ucGxheShcImNoYXIxcnVuXCIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKCF0aGlzLmlzT25Hcm91bmQgJiYgKCF0aGlzLmFuaW1hdGlvblN0YXRlIHx8IHRoaXMuYW5pbWF0aW9uU3RhdGUubmFtZSAhPSBcImNoYXIxanVtcFwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uU3RhdGUgPSB0aGlzLmFuaW1hdGlvbi5wbGF5KFwiY2hhcjFqdW1wXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gaWYgKHRoaXMuaXNPbkdyb3VuZCAmJiB0aGlzLmFuaW1hdGlvbi5nZXRBbmltYXRpb25TdGF0ZSgnY2hhcjFqdW1wJykuaXNQbGF5aW5nKXtcclxuICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLmFuaW1hdGlvbi5zdG9wKCdjaGFyMWp1bXAnKTtcclxuICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLmFuaW1hdGlvblN0YXRlID0gdGhpcy5hbmltYXRpb24ucGxheSgnY2hhcjFpZGxlJyk7XHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICAvLyBpZiAodGhpcy5pc01vdmUgJiYgIXRoaXMuYW5pbWF0aW9uLmdldEFuaW1hdGlvblN0YXRlKCdjaGFyMXJ1bicpLmlzUGxheWluZyAmJiAhdGhpcy5hbmltYXRpb24uZ2V0QW5pbWF0aW9uU3RhdGUoJ2NoYXIxanVtcCcpLmlzUGxheWluZyl7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5hbmltYXRpb25TdGF0ZSA9IHRoaXMuYW5pbWF0aW9uLnBsYXkoJ2NoYXIxcnVuJyk7XHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICAvLyBpZiAodGhpcy5hbmltYXRpb25TdGF0ZSA9PSBudWxsIHx8ICghdGhpcy5pc01vdmUgJiYgdGhpcy5pc09uR3JvdW5kICYmICF0aGlzLmFuaW1hdGlvbi5nZXRBbmltYXRpb25TdGF0ZSgnY2hhcjFpZGxlJykuaXNQbGF5aW5nKSl7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5hbmltYXRpb25TdGF0ZSA9IHRoaXMuYW5pbWF0aW9uLnBsYXkoJ2NoYXIxaWRsZScpO1xyXG4gICAgICAgICAgICAgICAgLy8gfSAgICAgICAgICBcclxuICAgICAgICAgICAgfSBlbHNlIGlmKHRoaXMucGxheWVyQ2hhciA9PSBcImNoYXIyXCIpIHtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuaXNPbkdyb3VuZCAmJiAhdGhpcy5pc01vdmUgJiYgIXRoaXMuaHVydCAmJiAoIXRoaXMuYW5pbWF0aW9uU3RhdGUgfHwgdGhpcy5hbmltYXRpb25TdGF0ZS5uYW1lICE9IFwiY2hhcjJpZGxlXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbmltYXRpb25TdGF0ZSA9IHRoaXMuYW5pbWF0aW9uLnBsYXkoXCJjaGFyMmlkbGVcIik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYodGhpcy5pc09uR3JvdW5kICYmIHRoaXMuaXNNb3ZlICYmICghdGhpcy5hbmltYXRpb25TdGF0ZSB8fCB0aGlzLmFuaW1hdGlvblN0YXRlLm5hbWUgIT0gXCJjaGFyMnJ1blwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uU3RhdGUgPSB0aGlzLmFuaW1hdGlvbi5wbGF5KFwiY2hhcjJydW5cIik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYoIXRoaXMuaXNPbkdyb3VuZCAmJiAoIXRoaXMuYW5pbWF0aW9uU3RhdGUgfHwgdGhpcy5hbmltYXRpb25TdGF0ZS5uYW1lICE9IFwiY2hhcjJqdW1wXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbmltYXRpb25TdGF0ZSA9IHRoaXMuYW5pbWF0aW9uLnBsYXkoXCJjaGFyMmp1bXBcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZih0aGlzLnBsYXllckNoYXIgPT0gXCJjaGFyM1wiKSB7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLmlzT25Hcm91bmQgJiYgIXRoaXMuaXNNb3ZlICYmICF0aGlzLmh1cnQgJiYgKCF0aGlzLmFuaW1hdGlvblN0YXRlIHx8IHRoaXMuYW5pbWF0aW9uU3RhdGUubmFtZSAhPSBcImNoYXIzaWRsZVwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uU3RhdGUgPSB0aGlzLmFuaW1hdGlvbi5wbGF5KFwiY2hhcjNpZGxlXCIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKHRoaXMuaXNPbkdyb3VuZCAmJiB0aGlzLmlzTW92ZSAmJiAoIXRoaXMuYW5pbWF0aW9uU3RhdGUgfHwgdGhpcy5hbmltYXRpb25TdGF0ZS5uYW1lICE9IFwiY2hhcjNydW5cIikpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFuaW1hdGlvblN0YXRlID0gdGhpcy5hbmltYXRpb24ucGxheShcImNoYXIzcnVuXCIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKCF0aGlzLmlzT25Hcm91bmQgJiYgKCF0aGlzLmFuaW1hdGlvblN0YXRlIHx8IHRoaXMuYW5pbWF0aW9uU3RhdGUubmFtZSAhPSBcImNoYXIzanVtcFwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uU3RhdGUgPSB0aGlzLmFuaW1hdGlvbi5wbGF5KFwiY2hhcjNqdW1wXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9ICBlbHNlIGlmKHRoaXMucGxheWVyQ2hhciA9PSBcImNoYXI0XCIpIHtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuaXNPbkdyb3VuZCAmJiAhdGhpcy5pc01vdmUgJiYgIXRoaXMuaHVydCAmJiAoIXRoaXMuYW5pbWF0aW9uU3RhdGUgfHwgdGhpcy5hbmltYXRpb25TdGF0ZS5uYW1lICE9IFwiY2hhcjRpZGxlXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbmltYXRpb25TdGF0ZSA9IHRoaXMuYW5pbWF0aW9uLnBsYXkoXCJjaGFyNGlkbGVcIik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYodGhpcy5pc09uR3JvdW5kICYmIHRoaXMuaXNNb3ZlICYmICghdGhpcy5hbmltYXRpb25TdGF0ZSB8fCB0aGlzLmFuaW1hdGlvblN0YXRlLm5hbWUgIT0gXCJjaGFyNHJ1blwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uU3RhdGUgPSB0aGlzLmFuaW1hdGlvbi5wbGF5KFwiY2hhcjRydW5cIik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYoIXRoaXMuaXNPbkdyb3VuZCAmJiAoIXRoaXMuYW5pbWF0aW9uU3RhdGUgfHwgdGhpcy5hbmltYXRpb25TdGF0ZS5uYW1lICE9IFwiY2hhcjRqdW1wXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbmltYXRpb25TdGF0ZSA9IHRoaXMuYW5pbWF0aW9uLnBsYXkoXCJjaGFyNGp1bXBcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ICAgXHJcbiAgICB9XHJcblxyXG4gICAgc2V0UGxheWVyTW92ZURpcmVjdGlvbihkaXI6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMubW92ZURpcmVjdGlvbiA9IGRpcjtcclxuICAgIH1cclxuXHJcbiAgICBzZXRQbGF5ZXJDaGFuZ2VEaXJlY3Rpb24oZGlyOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmNoYW5nZURpcmVjdGlvbiA9IGRpcjtcclxuICAgIH1cclxuXHJcbiAgICBzZXRQbGF5ZXJKdW1wKHZhbDogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuanVtcCA9IHZhbDtcclxuICAgIH1cclxuXHJcbiAgICBzZXRQbGF5ZXJTaG9vdChhbmdsZSkge1xyXG4gICAgICAgIHRoaXMuYW5nbGUgPSBhbmdsZTtcclxuICAgICAgICB0aGlzLnNob290ID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRQbGF5ZXJCb21iKGFuZ2xlKSB7XHJcbiAgICAgICAgdGhpcy5hbmdsZSA9IGFuZ2xlO1xyXG4gICAgICAgIHRoaXMuYm9tYiA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0UGxheWVyTmFtZSgpIHtcclxuICAgICAgICBpZih0aGlzLm5vZGUubmFtZSA9PSBcIlBsYXllciAxXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJOYW1lLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiUGxheWVyIDEgTmFtZVwiKTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5ub2RlLm5hbWUgPT0gXCJQbGF5ZXIgMlwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyTmFtZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlBsYXllciAyIE5hbWVcIik7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMubm9kZS5uYW1lID09IFwiUGxheWVyIDNcIikge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllck5hbWUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJQbGF5ZXIgMyBOYW1lXCIpO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLm5vZGUubmFtZSA9PSBcIlBsYXllciA0XCIpIHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJOYW1lLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiUGxheWVyIDQgTmFtZVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0UGxheWVyQ2hhcigpIHtcclxuICAgICAgICBpZih0aGlzLm5vZGUubmFtZSA9PSBcIlBsYXllciAxXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJDaGFyID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiUGxheWVyIDEgQ2hhclwiKTtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJDaGFyID0gXCJjaGFyMVwiO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLm5vZGUubmFtZSA9PSBcIlBsYXllciAyXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJDaGFyID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiUGxheWVyIDIgQ2hhclwiKTtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJDaGFyID0gXCJjaGFyMlwiO1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiYWFhXCIpXHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMubm9kZS5uYW1lID09IFwiUGxheWVyIDNcIikge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllckNoYXIgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJQbGF5ZXIgMyBDaGFyXCIpO1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllckNoYXIgPSBcImNoYXIzXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMubm9kZS5uYW1lID09IFwiUGxheWVyIDRcIikge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllckNoYXIgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJQbGF5ZXIgNCBDaGFyXCIpO1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllckNoYXIgPSBcImNoYXI0XCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Playerchoose.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '32f77ZjFDJJYqkCmT6dXvNX', 'Playerchoose');
// scripts/Playerchoose.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Playerchoose = /** @class */ (function (_super) {
    __extends(Playerchoose, _super);
    function Playerchoose() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Playerchoose.prototype.start = function () {
        var twobtn = new cc.Component.EventHandler();
        twobtn.target = this.node;
        twobtn.component = "Playerchoose";
        twobtn.handler = "loadTwoPlayers";
        cc.find("2button").getComponent(cc.Button).clickEvents.push(twobtn);
        var threebtn = new cc.Component.EventHandler();
        threebtn.target = this.node;
        threebtn.component = "Playerchoose";
        threebtn.handler = "loadThreePlayers";
        cc.find("3button").getComponent(cc.Button).clickEvents.push(threebtn);
        var fourbtn = new cc.Component.EventHandler();
        fourbtn.target = this.node;
        fourbtn.component = "Playerchoose";
        fourbtn.handler = "loadFourPlayers";
        cc.find("4button").getComponent(cc.Button).clickEvents.push(fourbtn);
        var teambtn = new cc.Component.EventHandler();
        teambtn.target = this.node;
        teambtn.component = "Playerchoose";
        teambtn.handler = "loadTeamPlayers";
        cc.find("teambutton").getComponent(cc.Button).clickEvents.push(teambtn);
    };
    Playerchoose.prototype.loadTwoPlayers = function () {
        cc.director.loadScene("instructions");
    };
    Playerchoose.prototype.loadThreePlayers = function () {
        cc.director.loadScene("instructions");
    };
    Playerchoose.prototype.loadFourPlayers = function () {
        cc.director.loadScene("instructions");
    };
    Playerchoose.prototype.loadTeamPlayers = function () {
        cc.director.loadScene("instructions");
    };
    Playerchoose = __decorate([
        ccclass
    ], Playerchoose);
    return Playerchoose;
}(cc.Component));
exports.default = Playerchoose;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcUGxheWVyY2hvb3NlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQTBDLGdDQUFZO0lBQXREOztJQTJEQSxDQUFDO0lBckRHLDRCQUFLLEdBQUw7UUFDSSxJQUFJLE1BQU0sR0FBRyxJQUFJLEVBQUUsQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDN0MsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQzFCLE1BQU0sQ0FBQyxTQUFTLEdBQUcsY0FBYyxDQUFDO1FBQ2xDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsZ0JBQWdCLENBQUM7UUFHbEMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFcEUsSUFBSSxRQUFRLEdBQUcsSUFBSSxFQUFFLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQy9DLFFBQVEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUM1QixRQUFRLENBQUMsU0FBUyxHQUFHLGNBQWMsQ0FBQztRQUNwQyxRQUFRLENBQUMsT0FBTyxHQUFHLGtCQUFrQixDQUFDO1FBR3RDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBR3RFLElBQUksT0FBTyxHQUFHLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUM5QyxPQUFPLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDM0IsT0FBTyxDQUFDLFNBQVMsR0FBRyxjQUFjLENBQUM7UUFDbkMsT0FBTyxDQUFDLE9BQU8sR0FBRyxpQkFBaUIsQ0FBQztRQUdwQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUdyRSxJQUFJLE9BQU8sR0FBRyxJQUFJLEVBQUUsQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDOUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQzNCLE9BQU8sQ0FBQyxTQUFTLEdBQUcsY0FBYyxDQUFDO1FBQ25DLE9BQU8sQ0FBQyxPQUFPLEdBQUcsaUJBQWlCLENBQUM7UUFHcEMsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFFNUUsQ0FBQztJQUVELHFDQUFjLEdBQWQ7UUFDSSxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsdUNBQWdCLEdBQWhCO1FBQ0ksRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELHNDQUFlLEdBQWY7UUFDSSxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsc0NBQWUsR0FBZjtRQUNJLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUF6RGdCLFlBQVk7UUFEaEMsT0FBTztPQUNhLFlBQVksQ0EyRGhDO0lBQUQsbUJBQUM7Q0EzREQsQUEyREMsQ0EzRHlDLEVBQUUsQ0FBQyxTQUFTLEdBMkRyRDtrQkEzRG9CLFlBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllcmNob29zZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgICAgICBFZGl0X0JveDogY2MuRWRpdEJveCxcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgbGV0IHR3b2J0biA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgdHdvYnRuLnRhcmdldCA9IHRoaXMubm9kZTtcclxuICAgICAgICB0d29idG4uY29tcG9uZW50ID0gXCJQbGF5ZXJjaG9vc2VcIjtcclxuICAgICAgICB0d29idG4uaGFuZGxlciA9IFwibG9hZFR3b1BsYXllcnNcIjtcclxuXHJcblxyXG4gICAgICAgIGNjLmZpbmQoXCIyYnV0dG9uXCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2godHdvYnRuKTtcclxuXHJcbiAgICAgICAgbGV0IHRocmVlYnRuID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcclxuICAgICAgICB0aHJlZWJ0bi50YXJnZXQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgdGhyZWVidG4uY29tcG9uZW50ID0gXCJQbGF5ZXJjaG9vc2VcIjtcclxuICAgICAgICB0aHJlZWJ0bi5oYW5kbGVyID0gXCJsb2FkVGhyZWVQbGF5ZXJzXCI7XHJcblxyXG5cclxuICAgICAgICBjYy5maW5kKFwiM2J1dHRvblwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5jbGlja0V2ZW50cy5wdXNoKHRocmVlYnRuKTtcclxuXHJcblxyXG4gICAgICAgIGxldCBmb3VyYnRuID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcclxuICAgICAgICBmb3VyYnRuLnRhcmdldCA9IHRoaXMubm9kZTtcclxuICAgICAgICBmb3VyYnRuLmNvbXBvbmVudCA9IFwiUGxheWVyY2hvb3NlXCI7XHJcbiAgICAgICAgZm91cmJ0bi5oYW5kbGVyID0gXCJsb2FkRm91clBsYXllcnNcIjtcclxuXHJcblxyXG4gICAgICAgIGNjLmZpbmQoXCI0YnV0dG9uXCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2goZm91cmJ0bik7XHJcblxyXG5cclxuICAgICAgICBsZXQgdGVhbWJ0biA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgdGVhbWJ0bi50YXJnZXQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgdGVhbWJ0bi5jb21wb25lbnQgPSBcIlBsYXllcmNob29zZVwiO1xyXG4gICAgICAgIHRlYW1idG4uaGFuZGxlciA9IFwibG9hZFRlYW1QbGF5ZXJzXCI7XHJcblxyXG5cclxuICAgICAgICBjYy5maW5kKFwidGVhbWJ1dHRvblwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5jbGlja0V2ZW50cy5wdXNoKHRlYW1idG4pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBsb2FkVHdvUGxheWVycygpe1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImluc3RydWN0aW9uc1wiKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkVGhyZWVQbGF5ZXJzKCl7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiaW5zdHJ1Y3Rpb25zXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWRGb3VyUGxheWVycygpe1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImluc3RydWN0aW9uc1wiKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkVGVhbVBsYXllcnMoKXtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJpbnN0cnVjdGlvbnNcIik7XHJcbiAgICB9XHJcblxyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/MainMenu.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7729bMu5yhNyIrF8qYicDpz', 'MainMenu');
// scripts/MainMenu.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var MainMenu = /** @class */ (function (_super) {
    __extends(MainMenu, _super);
    function MainMenu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainMenu.prototype.initSignUpBtn = function () {
        var clickEventHandler = new cc.Component.EventHandler();
        clickEventHandler.target = this.node;
        clickEventHandler.component = "MainMenu";
        clickEventHandler.handler = "signUp";
        cc.find("Canvas/menuBg/SignUpBtn").getComponent(cc.Button).clickEvents.push(clickEventHandler);
    };
    MainMenu.prototype.signUp = function () {
        cc.director.loadScene("sign up");
    };
    MainMenu.prototype.initSignInBtn = function () {
        var clickEventHandler = new cc.Component.EventHandler();
        clickEventHandler.target = this.node;
        clickEventHandler.component = "MainMenu";
        clickEventHandler.handler = "signIn";
        cc.find("Canvas/menuBg/SignInBtn").getComponent(cc.Button).clickEvents.push(clickEventHandler);
    };
    MainMenu.prototype.signIn = function () {
        cc.director.loadScene("sign in");
    };
    MainMenu.prototype.onLoad = function () { };
    MainMenu.prototype.start = function () {
        this.initSignUpBtn();
        this.initSignInBtn();
    };
    MainMenu.prototype.update = function (dt) { };
    MainMenu = __decorate([
        ccclass
    ], MainMenu);
    return MainMenu;
}(cc.Component));
exports.default = MainMenu;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcTWFpbk1lbnUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7O0lBbUNBLENBQUM7SUFqQ0csZ0NBQWEsR0FBYjtRQUNJLElBQUksaUJBQWlCLEdBQUcsSUFBSSxFQUFFLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3hELGlCQUFpQixDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3JDLGlCQUFpQixDQUFDLFNBQVMsR0FBRyxVQUFVLENBQUM7UUFDekMsaUJBQWlCLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQztRQUNyQyxFQUFFLENBQUMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDbkcsQ0FBQztJQUVELHlCQUFNLEdBQU47UUFDSSxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsZ0NBQWEsR0FBYjtRQUNJLElBQUksaUJBQWlCLEdBQUcsSUFBSSxFQUFFLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3hELGlCQUFpQixDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3JDLGlCQUFpQixDQUFDLFNBQVMsR0FBRyxVQUFVLENBQUM7UUFDekMsaUJBQWlCLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQztRQUNyQyxFQUFFLENBQUMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDbkcsQ0FBQztJQUVELHlCQUFNLEdBQU47UUFDSSxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQseUJBQU0sR0FBTixjQUFXLENBQUM7SUFFWix3QkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQseUJBQU0sR0FBTixVQUFRLEVBQUUsSUFBRyxDQUFDO0lBakNHLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FtQzVCO0lBQUQsZUFBQztDQW5DRCxBQW1DQyxDQW5DcUMsRUFBRSxDQUFDLFNBQVMsR0FtQ2pEO2tCQW5Db0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpbk1lbnUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIGluaXRTaWduVXBCdG4oKSB7XHJcbiAgICAgICAgbGV0IGNsaWNrRXZlbnRIYW5kbGVyID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcclxuICAgICAgICBjbGlja0V2ZW50SGFuZGxlci50YXJnZXQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgY2xpY2tFdmVudEhhbmRsZXIuY29tcG9uZW50ID0gXCJNYWluTWVudVwiO1xyXG4gICAgICAgIGNsaWNrRXZlbnRIYW5kbGVyLmhhbmRsZXIgPSBcInNpZ25VcFwiO1xyXG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvbWVudUJnL1NpZ25VcEJ0blwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5jbGlja0V2ZW50cy5wdXNoKGNsaWNrRXZlbnRIYW5kbGVyKTtcclxuICAgIH1cclxuXHJcbiAgICBzaWduVXAoKSB7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwic2lnbiB1cFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0U2lnbkluQnRuKCkge1xyXG4gICAgICAgIGxldCBjbGlja0V2ZW50SGFuZGxlciA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgY2xpY2tFdmVudEhhbmRsZXIudGFyZ2V0ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIGNsaWNrRXZlbnRIYW5kbGVyLmNvbXBvbmVudCA9IFwiTWFpbk1lbnVcIjtcclxuICAgICAgICBjbGlja0V2ZW50SGFuZGxlci5oYW5kbGVyID0gXCJzaWduSW5cIjtcclxuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL21lbnVCZy9TaWduSW5CdG5cIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuY2xpY2tFdmVudHMucHVzaChjbGlja0V2ZW50SGFuZGxlcik7XHJcbiAgICB9XHJcblxyXG4gICAgc2lnbkluKCkge1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcInNpZ24gaW5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgb25Mb2FkICgpIHt9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIHRoaXMuaW5pdFNpZ25VcEJ0bigpO1xyXG4gICAgICAgIHRoaXMuaW5pdFNpZ25JbkJ0bigpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSAoZHQpIHt9XHJcblxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Ground2.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c4825SrSX9Dg4uXzK4Qa7oU', 'Ground2');
// scripts/Ground2.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Ground2 = /** @class */ (function (_super) {
    __extends(Ground2, _super);
    function Ground2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.groundPrefab = null;
        _this.Bound = -223; // base
        _this.growDir = 0;
        return _this;
    }
    Ground2.prototype.onLoad = function () {
        this.createBlocks();
    };
    Ground2.prototype.start = function () {
    };
    Ground2.prototype.update = function (dt) {
    };
    Ground2.prototype.createBlocks = function () {
        var newY;
        var counter;
        if (this.growDir == 0) {
            newY = this.node.y - 15;
            counter = 1;
            while (newY >= this.Bound) {
                newY = this.node.y - (15 * counter);
                var newBlock = cc.instantiate(this.groundPrefab);
                newBlock.parent = this.node.parent;
                newBlock.setPosition(this.node.x, newY);
                counter++;
            }
        }
        else {
            newY = this.node.y + 15;
            counter = 1;
            while (newY <= this.Bound) {
                newY = this.node.y + (15 * counter) - 4;
                var newBlock = cc.instantiate(this.groundPrefab);
                newBlock.parent = this.node.parent;
                newBlock.setPosition(this.node.x, newY);
                counter++;
            }
        }
    };
    Ground2.prototype.onBeginContact = function (contact, self, other) {
        var _this = this;
        if (other.node.group == "bomb" || other.node.group == "explosiveObj") {
            this.node.getChildByName("particle").active = true;
            this.scheduleOnce(function () {
                _this.node.destroy();
            }, 0.1);
        }
        else if (other.node.group == "bullet") {
            this.node.getChildByName("particle").active = true;
            this.scheduleOnce(function () {
                _this.node.destroy();
            }, 0.05);
        }
    };
    __decorate([
        property(cc.Prefab)
    ], Ground2.prototype, "groundPrefab", void 0);
    __decorate([
        property()
    ], Ground2.prototype, "Bound", void 0);
    __decorate([
        property()
    ], Ground2.prototype, "growDir", void 0);
    Ground2 = __decorate([
        ccclass
    ], Ground2);
    return Ground2;
}(cc.Component));
exports.default = Ground2;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcR3JvdW5kMi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFxQywyQkFBWTtJQUFqRDtRQUFBLHFFQWdFQztRQTdEVyxrQkFBWSxHQUFjLElBQUksQ0FBQztRQUd2QyxXQUFLLEdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPO1FBRzdCLGFBQU8sR0FBVyxDQUFDLENBQUM7O0lBdUR4QixDQUFDO0lBckRHLHdCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVELHVCQUFLLEdBQUw7SUFFQSxDQUFDO0lBRUQsd0JBQU0sR0FBTixVQUFRLEVBQUU7SUFFVixDQUFDO0lBRUQsOEJBQVksR0FBWjtRQUNJLElBQUksSUFBSSxDQUFDO1FBQ1QsSUFBSSxPQUFPLENBQUM7UUFDWixJQUFHLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxFQUFDO1lBQ2pCLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDeEIsT0FBTyxHQUFHLENBQUMsQ0FBQztZQUNaLE9BQU0sSUFBSSxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUM7Z0JBQ3JCLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxPQUFPLENBQUMsQ0FBQztnQkFDcEMsSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQ2pELFFBQVEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7Z0JBQ25DLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQ3hDLE9BQU8sRUFBRSxDQUFDO2FBQ2I7U0FDSjthQUFLO1lBQ0YsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUN4QixPQUFPLEdBQUcsQ0FBQyxDQUFDO1lBQ1osT0FBTSxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssRUFBQztnQkFDckIsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDeEMsSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQ2pELFFBQVEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7Z0JBQ25DLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQ3hDLE9BQU8sRUFBRSxDQUFDO2FBQ2I7U0FDSjtJQUVMLENBQUM7SUFFRCxnQ0FBYyxHQUFkLFVBQWUsT0FBTyxFQUFFLElBQUksRUFBRSxLQUFLO1FBQW5DLGlCQWFDO1FBWkcsSUFBRyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxNQUFNLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksY0FBYyxFQUFFO1lBQ2pFLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDbkQsSUFBSSxDQUFDLFlBQVksQ0FBQztnQkFDZCxLQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3hCLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUVYO2FBQU0sSUFBRyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxRQUFRLEVBQUU7WUFDcEMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNuRCxJQUFJLENBQUMsWUFBWSxDQUFDO2dCQUNkLEtBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDeEIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ1o7SUFDTCxDQUFDO0lBNUREO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7aURBQ21CO0lBR3ZDO1FBREMsUUFBUSxFQUFFOzBDQUNVO0lBR3JCO1FBREMsUUFBUSxFQUFFOzRDQUNTO0lBVEgsT0FBTztRQUQzQixPQUFPO09BQ2EsT0FBTyxDQWdFM0I7SUFBRCxjQUFDO0NBaEVELEFBZ0VDLENBaEVvQyxFQUFFLENBQUMsU0FBUyxHQWdFaEQ7a0JBaEVvQixPQUFPIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHcm91bmQyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgcHJpdmF0ZSBncm91bmRQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KClcclxuICAgIEJvdW5kOiBudW1iZXIgPSAtMjIzOyAvLyBiYXNlXHJcblxyXG4gICAgQHByb3BlcnR5KClcclxuICAgIGdyb3dEaXI6IG51bWJlciA9IDA7XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICB0aGlzLmNyZWF0ZUJsb2NrcygpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlIChkdCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVCbG9ja3MoKXtcclxuICAgICAgICBsZXQgbmV3WTtcclxuICAgICAgICBsZXQgY291bnRlcjtcclxuICAgICAgICBpZih0aGlzLmdyb3dEaXIgPT0gMCl7XHJcbiAgICAgICAgICAgIG5ld1kgPSB0aGlzLm5vZGUueSAtIDE1O1xyXG4gICAgICAgICAgICBjb3VudGVyID0gMTtcclxuICAgICAgICAgICAgd2hpbGUobmV3WSA+PSB0aGlzLkJvdW5kKXtcclxuICAgICAgICAgICAgICAgIG5ld1kgPSB0aGlzLm5vZGUueSAtICgxNSAqIGNvdW50ZXIpO1xyXG4gICAgICAgICAgICAgICAgbGV0IG5ld0Jsb2NrID0gY2MuaW5zdGFudGlhdGUodGhpcy5ncm91bmRQcmVmYWIpO1xyXG4gICAgICAgICAgICAgICAgbmV3QmxvY2sucGFyZW50ID0gdGhpcy5ub2RlLnBhcmVudDtcclxuICAgICAgICAgICAgICAgIG5ld0Jsb2NrLnNldFBvc2l0aW9uKHRoaXMubm9kZS54LCBuZXdZKTtcclxuICAgICAgICAgICAgICAgIGNvdW50ZXIrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZXtcclxuICAgICAgICAgICAgbmV3WSA9IHRoaXMubm9kZS55ICsgMTU7XHJcbiAgICAgICAgICAgIGNvdW50ZXIgPSAxO1xyXG4gICAgICAgICAgICB3aGlsZShuZXdZIDw9IHRoaXMuQm91bmQpe1xyXG4gICAgICAgICAgICAgICAgbmV3WSA9IHRoaXMubm9kZS55ICsgKDE1ICogY291bnRlcikgLSA0O1xyXG4gICAgICAgICAgICAgICAgbGV0IG5ld0Jsb2NrID0gY2MuaW5zdGFudGlhdGUodGhpcy5ncm91bmRQcmVmYWIpO1xyXG4gICAgICAgICAgICAgICAgbmV3QmxvY2sucGFyZW50ID0gdGhpcy5ub2RlLnBhcmVudDtcclxuICAgICAgICAgICAgICAgIG5ld0Jsb2NrLnNldFBvc2l0aW9uKHRoaXMubm9kZS54LCBuZXdZKTtcclxuICAgICAgICAgICAgICAgIGNvdW50ZXIrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgb25CZWdpbkNvbnRhY3QoY29udGFjdCwgc2VsZiwgb3RoZXIpIHtcclxuICAgICAgICBpZihvdGhlci5ub2RlLmdyb3VwID09IFwiYm9tYlwiIHx8IG90aGVyLm5vZGUuZ3JvdXAgPT0gXCJleHBsb3NpdmVPYmpcIikge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwYXJ0aWNsZVwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKT0+e1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgfSwgMC4xKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSBlbHNlIGlmKG90aGVyLm5vZGUuZ3JvdXAgPT0gXCJidWxsZXRcIikge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwYXJ0aWNsZVwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKT0+e1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgfSwgMC4wNSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Instructions.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ac5774pRQxFAoe9Jsb1z4uA', 'Instructions');
// scripts/Instructions.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var InstructionsMenu = /** @class */ (function (_super) {
    __extends(InstructionsMenu, _super);
    function InstructionsMenu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InstructionsMenu.prototype.start = function () {
        var nextbtn = new cc.Component.EventHandler();
        nextbtn.target = this.node;
        nextbtn.component = "Instructions";
        nextbtn.handler = "loadNextInstructions";
        cc.find("Next").getComponent(cc.Button).clickEvents.push(nextbtn);
        var prevbtn = new cc.Component.EventHandler();
        prevbtn.target = this.node;
        prevbtn.component = "Instructions";
        prevbtn.handler = "loadPrevInstructions";
        cc.find("Prev").getComponent(cc.Button).clickEvents.push(prevbtn);
    };
    InstructionsMenu.prototype.loadNextInstructions = function () {
        cc.director.loadScene("instructions - option 1");
    };
    InstructionsMenu.prototype.loadPrevInstructions = function () {
        cc.director.loadScene("instructions");
    };
    InstructionsMenu = __decorate([
        ccclass
    ], InstructionsMenu);
    return InstructionsMenu;
}(cc.Component));
exports.default = InstructionsMenu;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcSW5zdHJ1Y3Rpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQThDLG9DQUFZO0lBQTFEOztJQWtDQSxDQUFDO0lBNUJHLGdDQUFLLEdBQUw7UUFDSSxJQUFJLE9BQU8sR0FBRyxJQUFJLEVBQUUsQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDOUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQzNCLE9BQU8sQ0FBQyxTQUFTLEdBQUcsY0FBYyxDQUFDO1FBQ25DLE9BQU8sQ0FBQyxPQUFPLEdBQUcsc0JBQXNCLENBQUM7UUFHekMsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFHbEUsSUFBSSxPQUFPLEdBQUcsSUFBSSxFQUFFLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzlDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUMzQixPQUFPLENBQUMsU0FBUyxHQUFHLGNBQWMsQ0FBQztRQUNuQyxPQUFPLENBQUMsT0FBTyxHQUFHLHNCQUFzQixDQUFDO1FBR3pDLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBRXRFLENBQUM7SUFFRCwrQ0FBb0IsR0FBcEI7UUFDSSxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFRCwrQ0FBb0IsR0FBcEI7UUFDSSxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBaENnQixnQkFBZ0I7UUFEcEMsT0FBTztPQUNhLGdCQUFnQixDQWtDcEM7SUFBRCx1QkFBQztDQWxDRCxBQWtDQyxDQWxDNkMsRUFBRSxDQUFDLFNBQVMsR0FrQ3pEO2tCQWxDb0IsZ0JBQWdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnN0cnVjdGlvbnNNZW51IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgICAgIEVkaXRfQm94OiBjYy5FZGl0Qm94LFxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICBsZXQgbmV4dGJ0biA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgbmV4dGJ0bi50YXJnZXQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgbmV4dGJ0bi5jb21wb25lbnQgPSBcIkluc3RydWN0aW9uc1wiO1xyXG4gICAgICAgIG5leHRidG4uaGFuZGxlciA9IFwibG9hZE5leHRJbnN0cnVjdGlvbnNcIjtcclxuXHJcblxyXG4gICAgICAgIGNjLmZpbmQoXCJOZXh0XCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2gobmV4dGJ0bik7XHJcblxyXG5cclxuICAgICAgICBsZXQgcHJldmJ0biA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgcHJldmJ0bi50YXJnZXQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgcHJldmJ0bi5jb21wb25lbnQgPSBcIkluc3RydWN0aW9uc1wiO1xyXG4gICAgICAgIHByZXZidG4uaGFuZGxlciA9IFwibG9hZFByZXZJbnN0cnVjdGlvbnNcIjtcclxuXHJcblxyXG4gICAgICAgIGNjLmZpbmQoXCJQcmV2XCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2gocHJldmJ0bik7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGxvYWROZXh0SW5zdHJ1Y3Rpb25zKCl7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiaW5zdHJ1Y3Rpb25zIC0gb3B0aW9uIDFcIik7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZFByZXZJbnN0cnVjdGlvbnMoKXtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJpbnN0cnVjdGlvbnNcIik7XHJcbiAgICB9XHJcblxyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Instructions-win.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '56f80q/EatFCbeSiWk7QmlG', 'Instructions-win');
// scripts/Instructions-win.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var InstructionsMenuWin = /** @class */ (function (_super) {
    __extends(InstructionsMenuWin, _super);
    function InstructionsMenuWin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InstructionsMenuWin.prototype.start = function () {
        var playbtn = new cc.Component.EventHandler();
        playbtn.target = this.node;
        playbtn.component = "Instructions-win";
        playbtn.handler = "loadNextInstructions";
        cc.find("Play").getComponent(cc.Button).clickEvents.push(playbtn);
        var prevbtn = new cc.Component.EventHandler();
        prevbtn.target = this.node;
        prevbtn.component = "Instructions-win";
        prevbtn.handler = "loadPrevInstructions";
        cc.find("Prev").getComponent(cc.Button).clickEvents.push(prevbtn);
    };
    InstructionsMenuWin.prototype.loadNextInstructions = function () {
        cc.director.loadScene("player choose");
    };
    InstructionsMenuWin.prototype.loadPrevInstructions = function () {
        cc.director.loadScene("instructions - option 2");
    };
    InstructionsMenuWin = __decorate([
        ccclass
    ], InstructionsMenuWin);
    return InstructionsMenuWin;
}(cc.Component));
exports.default = InstructionsMenuWin;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcSW5zdHJ1Y3Rpb25zLXdpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFpRCx1Q0FBWTtJQUE3RDs7SUFrQ0EsQ0FBQztJQTVCRyxtQ0FBSyxHQUFMO1FBQ0ksSUFBSSxPQUFPLEdBQUcsSUFBSSxFQUFFLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzlDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUMzQixPQUFPLENBQUMsU0FBUyxHQUFHLGtCQUFrQixDQUFDO1FBQ3ZDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsc0JBQXNCLENBQUM7UUFHekMsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFHbEUsSUFBSSxPQUFPLEdBQUcsSUFBSSxFQUFFLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzlDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUMzQixPQUFPLENBQUMsU0FBUyxHQUFHLGtCQUFrQixDQUFDO1FBQ3ZDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsc0JBQXNCLENBQUM7UUFHekMsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFFdEUsQ0FBQztJQUVELGtEQUFvQixHQUFwQjtRQUNJLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRCxrREFBb0IsR0FBcEI7UUFDSSxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFoQ2dCLG1CQUFtQjtRQUR2QyxPQUFPO09BQ2EsbUJBQW1CLENBa0N2QztJQUFELDBCQUFDO0NBbENELEFBa0NDLENBbENnRCxFQUFFLENBQUMsU0FBUyxHQWtDNUQ7a0JBbENvQixtQkFBbUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluc3RydWN0aW9uc01lbnVXaW4gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAgICAgRWRpdF9Cb3g6IGNjLkVkaXRCb3gsXHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIGxldCBwbGF5YnRuID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcclxuICAgICAgICBwbGF5YnRuLnRhcmdldCA9IHRoaXMubm9kZTtcclxuICAgICAgICBwbGF5YnRuLmNvbXBvbmVudCA9IFwiSW5zdHJ1Y3Rpb25zLXdpblwiO1xyXG4gICAgICAgIHBsYXlidG4uaGFuZGxlciA9IFwibG9hZE5leHRJbnN0cnVjdGlvbnNcIjtcclxuXHJcblxyXG4gICAgICAgIGNjLmZpbmQoXCJQbGF5XCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2gocGxheWJ0bik7XHJcblxyXG5cclxuICAgICAgICBsZXQgcHJldmJ0biA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgcHJldmJ0bi50YXJnZXQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgcHJldmJ0bi5jb21wb25lbnQgPSBcIkluc3RydWN0aW9ucy13aW5cIjtcclxuICAgICAgICBwcmV2YnRuLmhhbmRsZXIgPSBcImxvYWRQcmV2SW5zdHJ1Y3Rpb25zXCI7XHJcblxyXG5cclxuICAgICAgICBjYy5maW5kKFwiUHJldlwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5jbGlja0V2ZW50cy5wdXNoKHByZXZidG4pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBsb2FkTmV4dEluc3RydWN0aW9ucygpe1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcInBsYXllciBjaG9vc2VcIik7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZFByZXZJbnN0cnVjdGlvbnMoKXtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJpbnN0cnVjdGlvbnMgLSBvcHRpb24gMlwiKTtcclxuICAgIH1cclxuXHJcbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/UI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2a1a9oNXDxKzbrPVKyv0YF2', 'UI');
// scripts/UI.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UI = /** @class */ (function (_super) {
    __extends(UI, _super);
    function UI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.timer = null; // game timer
        _this.timeout = false; // game ended
        _this.isWin = false;
        _this.currPlayer = 1;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    UI.prototype.start = function () {
        this.startTimer(20);
    };
    UI.prototype.update = function (dt) {
        this.timer.string = this.timerVal.toString();
    };
    UI.prototype.startTimer = function (time) {
        var _this = this;
        this.timerVal = time;
        setInterval(function () {
            if (!cc.director.isPaused() && !_this.isWin) {
                _this.timerVal--;
                if (_this.timerVal < 0) {
                    _this.timeout = true;
                }
            }
        }, 1000);
    };
    UI.prototype.isTimeOut = function () {
        return this.timeout;
    };
    UI.prototype.pause = function () {
        if (cc.director.isPaused()) {
            cc.director.resume();
            cc.find("Canvas/Main Camera/Pause Menu").active = false;
        }
        else {
            cc.director.pause();
            cc.find("Canvas/Main Camera/Pause Menu").active = true;
        }
    };
    __decorate([
        property(cc.Label)
    ], UI.prototype, "timer", void 0);
    UI = __decorate([
        ccclass
    ], UI);
    return UI;
}(cc.Component));
exports.default = UI;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcVUkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBZ0Msc0JBQVk7SUFBNUM7UUFBQSxxRUFrREM7UUEvQ0csV0FBSyxHQUFhLElBQUksQ0FBQyxDQUFDLGFBQWE7UUFJN0IsYUFBTyxHQUFZLEtBQUssQ0FBQyxDQUFHLGFBQWE7UUFFekMsV0FBSyxHQUFZLEtBQUssQ0FBQztRQUV2QixnQkFBVSxHQUFXLENBQUMsQ0FBQzs7SUF1Q25DLENBQUM7SUFyQ0csd0JBQXdCO0lBRXhCLGVBQWU7SUFFZixrQkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBRUQsbUJBQU0sR0FBTixVQUFRLEVBQUU7UUFDTixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2pELENBQUM7SUFFRCx1QkFBVSxHQUFWLFVBQVcsSUFBWTtRQUF2QixpQkFVQztRQVRHLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLFdBQVcsQ0FBQztZQUNSLElBQUcsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSSxDQUFDLEtBQUssRUFBRTtnQkFDdkMsS0FBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUNoQixJQUFHLEtBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxFQUFFO29CQUNsQixLQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztpQkFDdkI7YUFDSjtRQUNMLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNiLENBQUM7SUFFRCxzQkFBUyxHQUFUO1FBQ0ksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3hCLENBQUM7SUFFRCxrQkFBSyxHQUFMO1FBQ0ksSUFBRyxFQUFFLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxFQUFFO1lBQ3ZCLEVBQUUsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDckIsRUFBRSxDQUFDLElBQUksQ0FBQywrQkFBK0IsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7U0FDM0Q7YUFBTTtZQUNILEVBQUUsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDcEIsRUFBRSxDQUFDLElBQUksQ0FBQywrQkFBK0IsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7U0FDMUQ7SUFDTCxDQUFDO0lBOUNEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7cUNBQ0k7SUFITixFQUFFO1FBRHRCLE9BQU87T0FDYSxFQUFFLENBa0R0QjtJQUFELFNBQUM7Q0FsREQsQUFrREMsQ0FsRCtCLEVBQUUsQ0FBQyxTQUFTLEdBa0QzQztrQkFsRG9CLEVBQUUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICB0aW1lcjogY2MuTGFiZWwgPSBudWxsOyAvLyBnYW1lIHRpbWVyXHJcblxyXG4gICAgcHVibGljIHRpbWVyVmFsOiBudW1iZXI7ICAgLy8gZ2FtZSB0aW1lclxyXG5cclxuICAgIHByaXZhdGUgdGltZW91dDogYm9vbGVhbiA9IGZhbHNlOyAgIC8vIGdhbWUgZW5kZWRcclxuXHJcbiAgICBwcml2YXRlIGlzV2luOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgcHJpdmF0ZSBjdXJyUGxheWVyOiBudW1iZXIgPSAxO1xyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICB0aGlzLnN0YXJ0VGltZXIoMjApO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgICAgICB0aGlzLnRpbWVyLnN0cmluZyA9IHRoaXMudGltZXJWYWwudG9TdHJpbmcoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydFRpbWVyKHRpbWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMudGltZXJWYWwgPSB0aW1lO1xyXG4gICAgICAgIHNldEludGVydmFsKCgpPT57XHJcbiAgICAgICAgICAgIGlmKCFjYy5kaXJlY3Rvci5pc1BhdXNlZCgpICYmICF0aGlzLmlzV2luKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVyVmFsLS07XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLnRpbWVyVmFsIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGltZW91dCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCAxMDAwKTtcclxuICAgIH1cclxuXHJcbiAgICBpc1RpbWVPdXQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGltZW91dDtcclxuICAgIH1cclxuXHJcbiAgICBwYXVzZSgpIHtcclxuICAgICAgICBpZihjYy5kaXJlY3Rvci5pc1BhdXNlZCgpKSB7XHJcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLnJlc3VtZSgpO1xyXG4gICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzL01haW4gQ2FtZXJhL1BhdXNlIE1lbnVcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2MuZGlyZWN0b3IucGF1c2UoKTtcclxuICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhcy9NYWluIENhbWVyYS9QYXVzZSBNZW51XCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/WelcomeTxt.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '046b0YkTu1HpZFfK/WiqXlN', 'WelcomeTxt');
// scripts/WelcomeTxt.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var WelcomeTxt = /** @class */ (function (_super) {
    __extends(WelcomeTxt, _super);
    function WelcomeTxt() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WelcomeTxt.prototype.onLoad = function () { };
    WelcomeTxt.prototype.start = function () {
        var action = cc.sequence(cc.fadeIn(2), cc.fadeOut(2));
        this.node.runAction(action);
    };
    WelcomeTxt.prototype.update = function (dt) { };
    WelcomeTxt = __decorate([
        ccclass
    ], WelcomeTxt);
    return WelcomeTxt;
}(cc.Component));
exports.default = WelcomeTxt;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcV2VsY29tZVR4dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUF3Qyw4QkFBWTtJQUFwRDs7SUFXQSxDQUFDO0lBVEcsMkJBQU0sR0FBTixjQUFXLENBQUM7SUFFWiwwQkFBSyxHQUFMO1FBQ0ksSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsMkJBQU0sR0FBTixVQUFRLEVBQUUsSUFBRyxDQUFDO0lBVEcsVUFBVTtRQUQ5QixPQUFPO09BQ2EsVUFBVSxDQVc5QjtJQUFELGlCQUFDO0NBWEQsQUFXQyxDQVh1QyxFQUFFLENBQUMsU0FBUyxHQVduRDtrQkFYb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2VsY29tZVR4dCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgb25Mb2FkICgpIHt9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIGxldCBhY3Rpb24gPSBjYy5zZXF1ZW5jZShjYy5mYWRlSW4oMiksIGNjLmZhZGVPdXQoMikpO1xyXG4gICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oYWN0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUgKGR0KSB7fVxyXG4gICAgXHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/SignIn.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '06ed0Oo1wFLHJ+J0nt3uw8e', 'SignIn');
// scripts/SignIn.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var SignIn = /** @class */ (function (_super) {
    __extends(SignIn, _super);
    function SignIn() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SignIn.prototype.initSignInBtn = function () {
        var clickEventHandler = new cc.Component.EventHandler();
        clickEventHandler.target = this.node;
        clickEventHandler.component = "SignIn";
        clickEventHandler.handler = "signIn";
        cc.find("Canvas/menuBg/SignInBtn").getComponent(cc.Button).clickEvents.push(clickEventHandler);
    };
    SignIn.prototype.signIn = function () {
        var emailBox = cc.find("Canvas/menuBg/email").getComponent(cc.EditBox);
        var passwordBox = cc.find("Canvas/menuBg/password").getComponent(cc.EditBox);
        var email = emailBox.string;
        var password = passwordBox.string;
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(function () {
            cc.director.loadScene("map1");
        }).catch(function (e) {
            alert(e.message);
        });
    };
    SignIn.prototype.initBackBtn = function () {
        var clickEventHandler = new cc.Component.EventHandler();
        clickEventHandler.target = this.node;
        clickEventHandler.component = "SignIn";
        clickEventHandler.handler = "back";
        cc.find("Canvas/menuBg/BackBtn").getComponent(cc.Button).clickEvents.push(clickEventHandler);
    };
    SignIn.prototype.back = function () {
        cc.director.loadScene("main menu");
    };
    SignIn.prototype.onLoad = function () { };
    SignIn.prototype.start = function () {
        this.initSignInBtn();
        this.initBackBtn();
    };
    SignIn.prototype.update = function (dt) { };
    SignIn = __decorate([
        ccclass
    ], SignIn);
    return SignIn;
}(cc.Component));
exports.default = SignIn;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcU2lnbkluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQW9DLDBCQUFZO0lBQWhEOztJQTRDQSxDQUFDO0lBMUNHLDhCQUFhLEdBQWI7UUFDSSxJQUFJLGlCQUFpQixHQUFHLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN4RCxpQkFBaUIsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUNyQyxpQkFBaUIsQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1FBQ3ZDLGlCQUFpQixDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUM7UUFDckMsRUFBRSxDQUFDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ25HLENBQUM7SUFFRCx1QkFBTSxHQUFOO1FBQ0ksSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdkUsSUFBSSxXQUFXLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDN0UsSUFBSSxLQUFLLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQztRQUM1QixJQUFJLFFBQVEsR0FBRyxXQUFXLENBQUMsTUFBTSxDQUFDO1FBQ2xDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDO2FBQ3RELElBQUksQ0FBQztZQUNGLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2xDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFDLENBQUM7WUFDUCxLQUFLLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JCLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVELDRCQUFXLEdBQVg7UUFDSSxJQUFJLGlCQUFpQixHQUFHLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN4RCxpQkFBaUIsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUNyQyxpQkFBaUIsQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1FBQ3ZDLGlCQUFpQixDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7UUFDbkMsRUFBRSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ2pHLENBQUM7SUFFRCxxQkFBSSxHQUFKO1FBQ0ksRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELHVCQUFNLEdBQU4sY0FBVyxDQUFDO0lBRVosc0JBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVELHVCQUFNLEdBQU4sVUFBUSxFQUFFLElBQUcsQ0FBQztJQTFDRyxNQUFNO1FBRDFCLE9BQU87T0FDYSxNQUFNLENBNEMxQjtJQUFELGFBQUM7Q0E1Q0QsQUE0Q0MsQ0E1Q21DLEVBQUUsQ0FBQyxTQUFTLEdBNEMvQztrQkE1Q29CLE1BQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpZ25JbiBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgaW5pdFNpZ25JbkJ0bigpIHtcclxuICAgICAgICBsZXQgY2xpY2tFdmVudEhhbmRsZXIgPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xyXG4gICAgICAgIGNsaWNrRXZlbnRIYW5kbGVyLnRhcmdldCA9IHRoaXMubm9kZTtcclxuICAgICAgICBjbGlja0V2ZW50SGFuZGxlci5jb21wb25lbnQgPSBcIlNpZ25JblwiO1xyXG4gICAgICAgIGNsaWNrRXZlbnRIYW5kbGVyLmhhbmRsZXIgPSBcInNpZ25JblwiO1xyXG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvbWVudUJnL1NpZ25JbkJ0blwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5jbGlja0V2ZW50cy5wdXNoKGNsaWNrRXZlbnRIYW5kbGVyKTtcclxuICAgIH1cclxuXHJcbiAgICBzaWduSW4oKSB7XHJcbiAgICAgICAgbGV0IGVtYWlsQm94ID0gY2MuZmluZChcIkNhbnZhcy9tZW51QmcvZW1haWxcIikuZ2V0Q29tcG9uZW50KGNjLkVkaXRCb3gpO1xyXG4gICAgICAgIGxldCBwYXNzd29yZEJveCA9IGNjLmZpbmQoXCJDYW52YXMvbWVudUJnL3Bhc3N3b3JkXCIpLmdldENvbXBvbmVudChjYy5FZGl0Qm94KTtcclxuICAgICAgICBsZXQgZW1haWwgPSBlbWFpbEJveC5zdHJpbmc7XHJcbiAgICAgICAgbGV0IHBhc3N3b3JkID0gcGFzc3dvcmRCb3guc3RyaW5nO1xyXG4gICAgICAgIGZpcmViYXNlLmF1dGgoKS5zaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIm1hcDFcIik7XHJcbiAgICAgICAgICAgIH0pLmNhdGNoKChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBhbGVydChlLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0QmFja0J0bigpIHtcclxuICAgICAgICBsZXQgY2xpY2tFdmVudEhhbmRsZXIgPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xyXG4gICAgICAgIGNsaWNrRXZlbnRIYW5kbGVyLnRhcmdldCA9IHRoaXMubm9kZTtcclxuICAgICAgICBjbGlja0V2ZW50SGFuZGxlci5jb21wb25lbnQgPSBcIlNpZ25JblwiO1xyXG4gICAgICAgIGNsaWNrRXZlbnRIYW5kbGVyLmhhbmRsZXIgPSBcImJhY2tcIjtcclxuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL21lbnVCZy9CYWNrQnRuXCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2goY2xpY2tFdmVudEhhbmRsZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIGJhY2soKSB7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwibWFpbiBtZW51XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTG9hZCAoKSB7fVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICB0aGlzLmluaXRTaWduSW5CdG4oKTtcclxuICAgICAgICB0aGlzLmluaXRCYWNrQnRuKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlIChkdCkge31cclxuXHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/SignUp.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7ec24PhK+tILbN1NyLkQ0+O', 'SignUp');
// scripts/SignUp.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var SignUp = /** @class */ (function (_super) {
    __extends(SignUp, _super);
    function SignUp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SignUp.prototype.initSignUpBtn = function () {
        var clickEventHandler = new cc.Component.EventHandler();
        clickEventHandler.target = this.node;
        clickEventHandler.component = "SignUp";
        clickEventHandler.handler = "signUp";
        cc.find("Canvas/menuBg/SignUpBtn").getComponent(cc.Button).clickEvents.push(clickEventHandler);
    };
    SignUp.prototype.signUp = function () {
        var emailBox = cc.find("Canvas/menuBg/email").getComponent(cc.EditBox);
        var usernameBox = cc.find("Canvas/menuBg/username").getComponent(cc.EditBox);
        var passwordBox = cc.find("Canvas/menuBg/password").getComponent(cc.EditBox);
        var email = emailBox.string;
        var username = usernameBox.string;
        var password = passwordBox.string;
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(function (userCredential) {
            alert("Sign Up Success!");
            emailBox.string = "";
            usernameBox.string = "";
            passwordBox.string = "";
        }).catch(function (e) {
            alert(e.message);
        });
    };
    SignUp.prototype.initBackBtn = function () {
        var clickEventHandler = new cc.Component.EventHandler();
        clickEventHandler.target = this.node;
        clickEventHandler.component = "SignUp";
        clickEventHandler.handler = "back";
        cc.find("Canvas/menuBg/BackBtn").getComponent(cc.Button).clickEvents.push(clickEventHandler);
    };
    SignUp.prototype.back = function () {
        cc.director.loadScene("main menu");
    };
    SignUp.prototype.onLoad = function () { };
    SignUp.prototype.start = function () {
        this.initSignUpBtn();
        this.initBackBtn();
    };
    SignUp.prototype.update = function (dt) { };
    SignUp = __decorate([
        ccclass
    ], SignUp);
    return SignUp;
}(cc.Component));
exports.default = SignUp;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcU2lnblVwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQW9DLDBCQUFZO0lBQWhEOztJQWlEQSxDQUFDO0lBL0NHLDhCQUFhLEdBQWI7UUFDSSxJQUFJLGlCQUFpQixHQUFHLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN4RCxpQkFBaUIsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUNyQyxpQkFBaUIsQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1FBQ3ZDLGlCQUFpQixDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUM7UUFDckMsRUFBRSxDQUFDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ25HLENBQUM7SUFFRCx1QkFBTSxHQUFOO1FBQ0ksSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdkUsSUFBSSxXQUFXLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDN0UsSUFBSSxXQUFXLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDN0UsSUFBSSxLQUFLLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQztRQUM1QixJQUFJLFFBQVEsR0FBRyxXQUFXLENBQUMsTUFBTSxDQUFDO1FBQ2xDLElBQUksUUFBUSxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUM7UUFDbEMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLDhCQUE4QixDQUFDLEtBQUssRUFBRSxRQUFRLENBQUM7YUFDMUQsSUFBSSxDQUFDLFVBQUMsY0FBYztZQUNqQixLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQztZQUMxQixRQUFRLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztZQUNyQixXQUFXLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztZQUN4QixXQUFXLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUM1QixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQyxDQUFDO1lBQ1AsS0FBSyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNyQixDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRCw0QkFBVyxHQUFYO1FBQ0ksSUFBSSxpQkFBaUIsR0FBRyxJQUFJLEVBQUUsQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDeEQsaUJBQWlCLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDckMsaUJBQWlCLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztRQUN2QyxpQkFBaUIsQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1FBQ25DLEVBQUUsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUNqRyxDQUFDO0lBRUQscUJBQUksR0FBSjtRQUNJLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCx1QkFBTSxHQUFOLGNBQVcsQ0FBQztJQUVaLHNCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCx1QkFBTSxHQUFOLFVBQVEsRUFBRSxJQUFHLENBQUM7SUEvQ0csTUFBTTtRQUQxQixPQUFPO09BQ2EsTUFBTSxDQWlEMUI7SUFBRCxhQUFDO0NBakRELEFBaURDLENBakRtQyxFQUFFLENBQUMsU0FBUyxHQWlEL0M7a0JBakRvQixNQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaWduVXAgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIGluaXRTaWduVXBCdG4oKSB7XHJcbiAgICAgICAgbGV0IGNsaWNrRXZlbnRIYW5kbGVyID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcclxuICAgICAgICBjbGlja0V2ZW50SGFuZGxlci50YXJnZXQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgY2xpY2tFdmVudEhhbmRsZXIuY29tcG9uZW50ID0gXCJTaWduVXBcIjtcclxuICAgICAgICBjbGlja0V2ZW50SGFuZGxlci5oYW5kbGVyID0gXCJzaWduVXBcIjtcclxuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL21lbnVCZy9TaWduVXBCdG5cIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuY2xpY2tFdmVudHMucHVzaChjbGlja0V2ZW50SGFuZGxlcik7XHJcbiAgICB9XHJcblxyXG4gICAgc2lnblVwKCkge1xyXG4gICAgICAgIGxldCBlbWFpbEJveCA9IGNjLmZpbmQoXCJDYW52YXMvbWVudUJnL2VtYWlsXCIpLmdldENvbXBvbmVudChjYy5FZGl0Qm94KTtcclxuICAgICAgICBsZXQgdXNlcm5hbWVCb3ggPSBjYy5maW5kKFwiQ2FudmFzL21lbnVCZy91c2VybmFtZVwiKS5nZXRDb21wb25lbnQoY2MuRWRpdEJveCk7XHJcbiAgICAgICAgbGV0IHBhc3N3b3JkQm94ID0gY2MuZmluZChcIkNhbnZhcy9tZW51QmcvcGFzc3dvcmRcIikuZ2V0Q29tcG9uZW50KGNjLkVkaXRCb3gpO1xyXG4gICAgICAgIGxldCBlbWFpbCA9IGVtYWlsQm94LnN0cmluZztcclxuICAgICAgICBsZXQgdXNlcm5hbWUgPSB1c2VybmFtZUJveC5zdHJpbmc7XHJcbiAgICAgICAgbGV0IHBhc3N3b3JkID0gcGFzc3dvcmRCb3guc3RyaW5nO1xyXG4gICAgICAgIGZpcmViYXNlLmF1dGgoKS5jcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKVxyXG4gICAgICAgICAgICAudGhlbigodXNlckNyZWRlbnRpYWwpID0+IHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwiU2lnbiBVcCBTdWNjZXNzIVwiKTtcclxuICAgICAgICAgICAgICAgIGVtYWlsQm94LnN0cmluZyA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICB1c2VybmFtZUJveC5zdHJpbmcgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgcGFzc3dvcmRCb3guc3RyaW5nID0gXCJcIjtcclxuICAgICAgICAgICAgfSkuY2F0Y2goKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KGUubWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRCYWNrQnRuKCkge1xyXG4gICAgICAgIGxldCBjbGlja0V2ZW50SGFuZGxlciA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgY2xpY2tFdmVudEhhbmRsZXIudGFyZ2V0ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIGNsaWNrRXZlbnRIYW5kbGVyLmNvbXBvbmVudCA9IFwiU2lnblVwXCI7XHJcbiAgICAgICAgY2xpY2tFdmVudEhhbmRsZXIuaGFuZGxlciA9IFwiYmFja1wiO1xyXG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvbWVudUJnL0JhY2tCdG5cIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuY2xpY2tFdmVudHMucHVzaChjbGlja0V2ZW50SGFuZGxlcik7XHJcbiAgICB9XHJcblxyXG4gICAgYmFjaygpIHtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJtYWluIG1lbnVcIik7XHJcbiAgICB9XHJcblxyXG4gICAgb25Mb2FkICgpIHt9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIHRoaXMuaW5pdFNpZ25VcEJ0bigpO1xyXG4gICAgICAgIHRoaXMuaW5pdEJhY2tCdG4oKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUgKGR0KSB7fVxyXG5cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/PlayerName.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2407dwrvvVBgI2Ai8hNPZ71', 'PlayerName');
// scripts/PlayerName.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.back = null;
        _this.selectMap = null;
        _this.player1 = null;
        _this.player2 = null;
        _this.player3 = null;
        _this.player4 = null;
        _this.playerNum = null;
        _this.editBoxPath = "Canvas/Frame/Layout/";
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onLoad = function () {
        this.playerNum = cc.sys.localStorage.getItem("PlayerNum");
        if (!this.playerNum) {
            this.playerNum = "2";
            cc.sys.localStorage.setItem("PlayerNum", 2);
        }
        this.loadEditBox();
    };
    NewClass.prototype.start = function () {
        this.mouseOn();
    };
    // update (dt) {}
    NewClass.prototype.loadEditBox = function () {
        console.log(this.playerNum);
        switch (this.playerNum) {
            case "4":
                cc.find(this.editBoxPath + 'Player4').active = true;
            case "3":
                cc.find(this.editBoxPath + 'Player3').active = true;
            default:
                break;
        }
    };
    NewClass.prototype.loadScene = function (scene) {
        cc.director.loadScene("loading", function () {
            cc.director.loadScene(scene);
        });
    };
    NewClass.prototype.mouseOn = function () {
        var _this = this;
        this.back.node.on(cc.Node.EventType.MOUSE_DOWN, function () {
            _this.loadScene("player choose");
        });
        this.selectMap.node.on(cc.Node.EventType.MOUSE_DOWN, function () {
            _this.setPlayerName();
            // this.loadScene("map choose");
            _this.loadScene("map1");
        });
    };
    NewClass.prototype.setPlayerName = function () {
        cc.sys.localStorage.setItem("Player 1 Name", this.player1.getComponentInChildren(cc.Label).string);
        cc.sys.localStorage.setItem("Player 2 Name", this.player2.getComponentInChildren(cc.Label).string);
        if (this.playerNum == "3" || this.playerNum == "4") {
            cc.sys.localStorage.setItem("Player 3 Name", this.player3.getComponentInChildren(cc.Label).string);
        }
        else if (this.playerNum == "4") {
            cc.sys.localStorage.setItem("Player 4 Name", this.player4.getComponentInChildren(cc.Label).string);
        }
    };
    __decorate([
        property(cc.Button)
    ], NewClass.prototype, "back", void 0);
    __decorate([
        property(cc.Button)
    ], NewClass.prototype, "selectMap", void 0);
    __decorate([
        property(cc.EditBox)
    ], NewClass.prototype, "player1", void 0);
    __decorate([
        property(cc.EditBox)
    ], NewClass.prototype, "player2", void 0);
    __decorate([
        property(cc.EditBox)
    ], NewClass.prototype, "player3", void 0);
    __decorate([
        property(cc.EditBox)
    ], NewClass.prototype, "player4", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcUGxheWVyTmFtZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQStFQztRQTVFRyxVQUFJLEdBQWMsSUFBSSxDQUFDO1FBR3ZCLGVBQVMsR0FBYyxJQUFJLENBQUM7UUFHNUIsYUFBTyxHQUFlLElBQUksQ0FBQztRQUczQixhQUFPLEdBQWUsSUFBSSxDQUFDO1FBRzNCLGFBQU8sR0FBZSxJQUFJLENBQUM7UUFHM0IsYUFBTyxHQUFlLElBQUksQ0FBQztRQUVuQixlQUFTLEdBQVcsSUFBSSxDQUFDO1FBRXpCLGlCQUFXLEdBQVcsc0JBQXNCLENBQUM7O0lBeUR6RCxDQUFDO0lBdkRHLHdCQUF3QjtJQUV4Qix5QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDMUQsSUFBRyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDaEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7WUFDckIsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUMvQztRQUNELElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUQsd0JBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRUQsaUJBQWlCO0lBRWpCLDhCQUFXLEdBQVg7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQTtRQUMzQixRQUFRLElBQUksQ0FB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QkEvRW9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxyXG4gICAgYmFjazogY2MuQnV0dG9uID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxyXG4gICAgc2VsZWN0TWFwOiBjYy5CdXR0b24gPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5FZGl0Qm94KVxyXG4gICAgcGxheWVyMTogY2MuRWRpdEJveCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkVkaXRCb3gpXHJcbiAgICBwbGF5ZXIyOiBjYy5FZGl0Qm94ID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuRWRpdEJveClcclxuICAgIHBsYXllcjM6IGNjLkVkaXRCb3ggPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5FZGl0Qm94KVxyXG4gICAgcGxheWVyNDogY2MuRWRpdEJveCA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBwbGF5ZXJOdW06IHN0cmluZyA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBlZGl0Qm94UGF0aDogc3RyaW5nID0gXCJDYW52YXMvRnJhbWUvTGF5b3V0L1wiO1xyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJOdW0gPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJQbGF5ZXJOdW1cIik7XHJcbiAgICAgICAgaWYoIXRoaXMucGxheWVyTnVtKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyTnVtID0gXCIyXCI7XHJcbiAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIlBsYXllck51bVwiLCAyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5sb2FkRWRpdEJveCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICB0aGlzLm1vdXNlT24oKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG5cclxuICAgIGxvYWRFZGl0Qm94KCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucGxheWVyTnVtKVxyXG4gICAgICAgIHN3aXRjaCAodGhpcy5wbGF5ZXJOdW0pIHtcclxuICAgICAgICAgICAgY2FzZSBcIjRcIjpcclxuICAgICAgICAgICAgICAgIGNjLmZpbmQodGhpcy5lZGl0Qm94UGF0aCArICdQbGF5ZXI0JykuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgY2FzZSBcIjNcIjpcclxuICAgICAgICAgICAgICAgIGNjLmZpbmQodGhpcy5lZGl0Qm94UGF0aCArICdQbGF5ZXIzJykuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsb2FkU2NlbmUoc2NlbmU6IHN0cmluZykge1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImxvYWRpbmdcIiwgKCk9PntcclxuICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKHNjZW5lKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBtb3VzZU9uKCkge1xyXG4gICAgICAgIHRoaXMuYmFjay5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0RPV04sICgpPT57XHJcbiAgICAgICAgICAgIHRoaXMubG9hZFNjZW5lKFwicGxheWVyIGNob29zZVwiKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnNlbGVjdE1hcC5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0RPV04sICgpPT57XHJcbiAgICAgICAgICAgIHRoaXMuc2V0UGxheWVyTmFtZSgpO1xyXG4gICAgICAgICAgICAvLyB0aGlzLmxvYWRTY2VuZShcIm1hcCBjaG9vc2VcIik7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZFNjZW5lKFwibWFwMVwiKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRQbGF5ZXJOYW1lKCkge1xyXG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIlBsYXllciAxIE5hbWVcIiwgdGhpcy5wbGF5ZXIxLmdldENvbXBvbmVudEluQ2hpbGRyZW4oY2MuTGFiZWwpLnN0cmluZyk7XHJcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiUGxheWVyIDIgTmFtZVwiLCB0aGlzLnBsYXllcjIuZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihjYy5MYWJlbCkuc3RyaW5nKTtcclxuICAgICAgICBpZih0aGlzLnBsYXllck51bSA9PSBcIjNcIiB8fCB0aGlzLnBsYXllck51bSA9PSBcIjRcIikge1xyXG4gICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJQbGF5ZXIgMyBOYW1lXCIsIHRoaXMucGxheWVyMy5nZXRDb21wb25lbnRJbkNoaWxkcmVuKGNjLkxhYmVsKS5zdHJpbmcpO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLnBsYXllck51bSA9PSBcIjRcIikge1xyXG4gICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJQbGF5ZXIgNCBOYW1lXCIsIHRoaXMucGxheWVyNC5nZXRDb21wb25lbnRJbkNoaWxkcmVuKGNjLkxhYmVsKS5zdHJpbmcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/explosiveObj.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '079e6bq3+FHv6zx/j8sH7XJ', 'explosiveObj');
// scripts/explosiveObj.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ExplosiveObj = /** @class */ (function (_super) {
    __extends(ExplosiveObj, _super);
    function ExplosiveObj() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.anim = null;
        return _this;
    }
    ExplosiveObj.prototype.onLoad = function () {
        this.anim = this.node.getComponent(cc.Animation);
    };
    ExplosiveObj.prototype.start = function () {
    };
    ExplosiveObj.prototype.update = function (dt) {
    };
    ExplosiveObj.prototype.onBeginContact = function (contact, self, other) {
        var _this = this;
        if (other.node.group == "bullet" || other.node.group == "explosiveObj" || other.node.group == "bomb") {
            // this.node.y += 1;
            // this.node.y -= 6;
            this.node.getComponent(cc.PhysicsCircleCollider).enabled = true;
            this.node.group = "explosiveObj";
            this.anim.play("explosion2");
            this.scheduleOnce(function () {
                _this.node.destroy();
            }, 0.7);
        }
    };
    ExplosiveObj = __decorate([
        ccclass
    ], ExplosiveObj);
    return ExplosiveObj;
}(cc.Component));
exports.default = ExplosiveObj;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcZXhwbG9zaXZlT2JqLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQTBDLGdDQUFZO0lBQXREO1FBQUEscUVBNEJDO1FBMUJXLFVBQUksR0FBaUIsSUFBSSxDQUFDOztJQTBCdEMsQ0FBQztJQXhCRyw2QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVELDRCQUFLLEdBQUw7SUFFQSxDQUFDO0lBRUQsNkJBQU0sR0FBTixVQUFRLEVBQUU7SUFFVixDQUFDO0lBRUQscUNBQWMsR0FBZCxVQUFlLE9BQU8sRUFBRSxJQUFJLEVBQUUsS0FBSztRQUFuQyxpQkFXQztRQVZHLElBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksUUFBUSxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLGNBQWMsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxNQUFNLEVBQUM7WUFDaEcsb0JBQW9CO1lBQ3BCLG9CQUFvQjtZQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMscUJBQXFCLENBQUMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBQ2hFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLGNBQWMsQ0FBQztZQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUM3QixJQUFJLENBQUMsWUFBWSxDQUFDO2dCQUNkLEtBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUE7WUFDdkIsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ1g7SUFDTCxDQUFDO0lBM0JnQixZQUFZO1FBRGhDLE9BQU87T0FDYSxZQUFZLENBNEJoQztJQUFELG1CQUFDO0NBNUJELEFBNEJDLENBNUJ5QyxFQUFFLENBQUMsU0FBUyxHQTRCckQ7a0JBNUJvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFeHBsb3NpdmVPYmogZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIHByaXZhdGUgYW5pbTogY2MuQW5pbWF0aW9uID0gbnVsbDtcclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIHRoaXMuYW5pbSA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgb25CZWdpbkNvbnRhY3QoY29udGFjdCwgc2VsZiwgb3RoZXIpe1xyXG4gICAgICAgIGlmKG90aGVyLm5vZGUuZ3JvdXAgPT0gXCJidWxsZXRcIiB8fCBvdGhlci5ub2RlLmdyb3VwID09IFwiZXhwbG9zaXZlT2JqXCIgfHwgb3RoZXIubm9kZS5ncm91cCA9PSBcImJvbWJcIil7XHJcbiAgICAgICAgICAgIC8vIHRoaXMubm9kZS55ICs9IDE7XHJcbiAgICAgICAgICAgIC8vIHRoaXMubm9kZS55IC09IDY7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuUGh5c2ljc0NpcmNsZUNvbGxpZGVyKS5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdyb3VwID0gXCJleHBsb3NpdmVPYmpcIjtcclxuICAgICAgICAgICAgdGhpcy5hbmltLnBsYXkoXCJleHBsb3Npb24yXCIpO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKT0+e1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKVxyXG4gICAgICAgICAgICB9LCAwLjcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Bullet.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '889b5Mpv+1HeZcVtW6D2TTK', 'Bullet');
// scripts/Bullet.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Bullet = /** @class */ (function (_super) {
    __extends(Bullet, _super);
    function Bullet() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isTriggered = false; // I add this to make the bullet kill one enemy at a time.
        _this.rigidBody = null;
        _this.shootAngle = null;
        _this.animation = null;
        return _this;
    }
    // when created, the bullet need to be placed at correct position and play animation.
    Bullet.prototype.init = function (node) {
        this.animation = this.getComponent(cc.Animation);
        this.rigidBody = this.getComponent(cc.RigidBody);
        this.setInitPos(node);
        this.animation.play('bullet1');
        this.bulletMove();
    };
    //this function sets the bullet's initial position when it is reused.
    Bullet.prototype.setInitPos = function (node) {
        this.node.parent = node.parent; // don't mount under the player, otherwise it will change direction when player move
        if (node.scaleX > 0) {
            this.node.position = cc.v3(35, 8);
            this.node.scaleX = 1;
        }
        else {
            this.node.position = cc.v3(-35, 8);
            this.node.scaleX = -1;
        }
        this.node.position = this.node.position.addSelf(node.position);
    };
    //make the bullet move from current position
    Bullet.prototype.bulletMove = function () {
        var moveDir = null;
        var speed = 1000;
        // decide bullet direction
        if (this.node.scaleX > 0) {
            moveDir = 1;
        }
        else {
            moveDir = -1;
        }
        this.rigidBody.linearVelocity = cc.v2(speed * moveDir, Math.sinh(this.shootAngle) * speed);
    };
    //detect collision
    Bullet.prototype.onBeginContact = function (contact, selfCollider, otherCollider) {
        this.node.stopAllActions();
        this.unscheduleAllCallbacks();
        // this.scheduleOnce(() => {
        this.animation.stop();
        this.node.destroy();
        // }, 0.1); // for better animation effect, I delay 0.1s when bullet hits the enemy
    };
    Bullet.prototype.setAngle = function (angle) {
        this.shootAngle = angle;
    };
    Bullet = __decorate([
        ccclass
    ], Bullet);
    return Bullet;
}(cc.Component));
exports.default = Bullet;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQnVsbGV0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQW9DLDBCQUFZO0lBQWhEO1FBQUEscUVBNkVDO1FBMUVVLGlCQUFXLEdBQUcsS0FBSyxDQUFDLENBQUMsMERBQTBEO1FBRTlFLGVBQVMsR0FBaUIsSUFBSSxDQUFDO1FBRS9CLGdCQUFVLEdBQUcsSUFBSSxDQUFDO1FBRWxCLGVBQVMsR0FBaUIsSUFBSSxDQUFDOztJQW9FM0MsQ0FBQztJQWxFRyxxRkFBcUY7SUFDOUUscUJBQUksR0FBWCxVQUFZLElBQWE7UUFFckIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRWpELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxxRUFBcUU7SUFDN0QsMkJBQVUsR0FBbEIsVUFBbUIsSUFBYTtRQUU1QixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsb0ZBQW9GO1FBRXBILElBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQ2xCO1lBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFFbEMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1NBQ3hCO2FBRUQ7WUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBRW5DLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ3pCO1FBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBRUQsNENBQTRDO0lBQ3BDLDJCQUFVLEdBQWxCO1FBRUksSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ25CLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQztRQUVqQiwwQkFBMEI7UUFDMUIsSUFBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDckIsT0FBTyxHQUFHLENBQUMsQ0FBQztTQUNmO2FBQU07WUFDSCxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDaEI7UUFDRCxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEtBQUssR0FBRyxPQUFPLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUM7SUFDL0YsQ0FBQztJQUVELGtCQUFrQjtJQUNsQiwrQkFBYyxHQUFkLFVBQWUsT0FBTyxFQUFFLFlBQVksRUFBRSxhQUFhO1FBRS9DLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFFM0IsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7UUFFOUIsNEJBQTRCO1FBRXhCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUV4QixtRkFBbUY7SUFDdkYsQ0FBQztJQUVELHlCQUFRLEdBQVIsVUFBUyxLQUFLO1FBQ1YsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7SUFDNUIsQ0FBQztJQTVFZ0IsTUFBTTtRQUQxQixPQUFPO09BQ2EsTUFBTSxDQTZFMUI7SUFBRCxhQUFDO0NBN0VELEFBNkVDLENBN0VtQyxFQUFFLENBQUMsU0FBUyxHQTZFL0M7a0JBN0VvQixNQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdWxsZXQgZXh0ZW5kcyBjYy5Db21wb25lbnQgXHJcbntcclxuXHJcbiAgICBwdWJsaWMgaXNUcmlnZ2VyZWQgPSBmYWxzZTsgLy8gSSBhZGQgdGhpcyB0byBtYWtlIHRoZSBidWxsZXQga2lsbCBvbmUgZW5lbXkgYXQgYSB0aW1lLlxyXG5cclxuICAgIHByaXZhdGUgcmlnaWRCb2R5OiBjYy5SaWdpZEJvZHkgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgc2hvb3RBbmdsZSA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBhbmltYXRpb246IGNjLkFuaW1hdGlvbiA9IG51bGw7XHJcblxyXG4gICAgLy8gd2hlbiBjcmVhdGVkLCB0aGUgYnVsbGV0IG5lZWQgdG8gYmUgcGxhY2VkIGF0IGNvcnJlY3QgcG9zaXRpb24gYW5kIHBsYXkgYW5pbWF0aW9uLlxyXG4gICAgcHVibGljIGluaXQobm9kZTogY2MuTm9kZSkgXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb24gPSB0aGlzLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pO1xyXG4gICAgICAgIHRoaXMucmlnaWRCb2R5ID0gdGhpcy5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRJbml0UG9zKG5vZGUpO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uLnBsYXkoJ2J1bGxldDEnKTtcclxuICAgICAgICB0aGlzLmJ1bGxldE1vdmUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvL3RoaXMgZnVuY3Rpb24gc2V0cyB0aGUgYnVsbGV0J3MgaW5pdGlhbCBwb3NpdGlvbiB3aGVuIGl0IGlzIHJldXNlZC5cclxuICAgIHByaXZhdGUgc2V0SW5pdFBvcyhub2RlOiBjYy5Ob2RlKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMubm9kZS5wYXJlbnQgPSBub2RlLnBhcmVudDsgLy8gZG9uJ3QgbW91bnQgdW5kZXIgdGhlIHBsYXllciwgb3RoZXJ3aXNlIGl0IHdpbGwgY2hhbmdlIGRpcmVjdGlvbiB3aGVuIHBsYXllciBtb3ZlXHJcblxyXG4gICAgICAgIGlmKG5vZGUuc2NhbGVYID4gMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IGNjLnYzKDM1LCA4KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5zY2FsZVggPSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24gPSBjYy52MygtMzUsIDgpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9IC0xO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLnBvc2l0aW9uID0gdGhpcy5ub2RlLnBvc2l0aW9uLmFkZFNlbGYobm9kZS5wb3NpdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgLy9tYWtlIHRoZSBidWxsZXQgbW92ZSBmcm9tIGN1cnJlbnQgcG9zaXRpb25cclxuICAgIHByaXZhdGUgYnVsbGV0TW92ZSgpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IG1vdmVEaXIgPSBudWxsO1xyXG4gICAgICAgIGxldCBzcGVlZCA9IDEwMDA7XHJcblxyXG4gICAgICAgIC8vIGRlY2lkZSBidWxsZXQgZGlyZWN0aW9uXHJcbiAgICAgICAgaWYodGhpcy5ub2RlLnNjYWxlWCA+IDApIHtcclxuICAgICAgICAgICAgbW92ZURpciA9IDE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbW92ZURpciA9IC0xO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnJpZ2lkQm9keS5saW5lYXJWZWxvY2l0eSA9IGNjLnYyKHNwZWVkICogbW92ZURpciwgTWF0aC5zaW5oKHRoaXMuc2hvb3RBbmdsZSkgKiBzcGVlZCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vZGV0ZWN0IGNvbGxpc2lvblxyXG4gICAgb25CZWdpbkNvbnRhY3QoY29udGFjdCwgc2VsZkNvbGxpZGVyLCBvdGhlckNvbGxpZGVyKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMubm9kZS5zdG9wQWxsQWN0aW9ucygpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMudW5zY2hlZHVsZUFsbENhbGxiYWNrcygpO1xyXG5cclxuICAgICAgICAvLyB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGlvbi5zdG9wKCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG5cclxuICAgICAgICAvLyB9LCAwLjEpOyAvLyBmb3IgYmV0dGVyIGFuaW1hdGlvbiBlZmZlY3QsIEkgZGVsYXkgMC4xcyB3aGVuIGJ1bGxldCBoaXRzIHRoZSBlbmVteVxyXG4gICAgfVxyXG5cclxuICAgIHNldEFuZ2xlKGFuZ2xlKSB7XHJcbiAgICAgICAgdGhpcy5zaG9vdEFuZ2xlID0gYW5nbGU7XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Welcome.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cf3a7BcFn9CcrrZ2a8UzeK4', 'Welcome');
// scripts/Welcome.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Welcome = /** @class */ (function (_super) {
    __extends(Welcome, _super);
    function Welcome() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Welcome.prototype.onLoad = function () { };
    Welcome.prototype.start = function () {
        this.schedule(function () {
            cc.director.loadScene("main menu");
        }, 4);
    };
    Welcome.prototype.update = function (dt) { };
    Welcome = __decorate([
        ccclass
    ], Welcome);
    return Welcome;
}(cc.Component));
exports.default = Welcome;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcV2VsY29tZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFxQywyQkFBWTtJQUFqRDs7SUFZQSxDQUFDO0lBVkcsd0JBQU0sR0FBTixjQUFXLENBQUM7SUFFWix1QkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUNWLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNWLENBQUM7SUFFRCx3QkFBTSxHQUFOLFVBQVEsRUFBRSxJQUFHLENBQUM7SUFWRyxPQUFPO1FBRDNCLE9BQU87T0FDYSxPQUFPLENBWTNCO0lBQUQsY0FBQztDQVpELEFBWUMsQ0Fab0MsRUFBRSxDQUFDLFNBQVMsR0FZaEQ7a0JBWm9CLE9BQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdlbGNvbWUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIG9uTG9hZCAoKSB7fVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJtYWluIG1lbnVcIik7XHJcbiAgICAgICAgfSwgNCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlIChkdCkge31cclxuXHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Bomb.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4bd3b5m3MVAcJrOIV77Ddig', 'Bomb');
// scripts/Bomb.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Bomb = /** @class */ (function (_super) {
    __extends(Bomb, _super);
    function Bomb() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bombManager = null;
        _this.isTriggered = false; // I add this to make the bullet kill one enemy at a time.
        _this.rigidBody = null;
        _this.shootAngle = null;
        _this.animation = null;
        _this.power = null;
        return _this;
    }
    // when created, the bullet need to be placed at correct position and play animation.
    Bomb.prototype.init = function (node) {
        this.animation = this.getComponent(cc.Animation);
        this.rigidBody = this.getComponent(cc.RigidBody);
        this.setInitPos(node);
        this.animation.play('grenade');
        this.bulletMove();
    };
    // this function is called when the bullet manager calls "get" API.
    Bomb.prototype.reuse = function (bulletManager) {
        this.bombManager = bulletManager;
        this.isTriggered = false;
    };
    //this function sets the bullet's initial position when it is reused.
    Bomb.prototype.setInitPos = function (node) {
        this.node.parent = node.parent; // don't mount under the player, otherwise it will change direction when player move
        if (node.scaleX > 0) {
            this.node.position = cc.v3(35, 8);
            this.node.scaleX = 1;
        }
        else {
            this.node.position = cc.v3(-35, 8);
            this.node.scaleX = -1;
        }
        this.node.position = this.node.position.addSelf(node.position);
    };
    //make the bullet move from current position
    Bomb.prototype.bulletMove = function () {
        var moveDir = null;
        // decide bullet direction
        if (this.node.scaleX >= 0) {
            moveDir = 1;
        }
        else {
            moveDir = -1;
        }
        var speed = 10 * this.power;
        // this.rigidBody.applyForceToCenter(cc.v2(Math.sin(shootAngle) * x, Math.cos(shootAngle) * x), true);
        // this.rigidBody.linearVelocity = cc.v2(Math.sin(this.shootAngle) * x * moveDir, Math.cos(this.shootAngle) * x);
        // this.rigidBody.linearVelocity = cc.v2(speed * moveDir * Math.sin(this.shootAngle), Math.sinh(this.shootAngle) * speed);
        if (this.shootAngle >= 0) {
            this.rigidBody.linearVelocity = cc.v2(speed * moveDir * Math.cos(this.shootAngle), Math.sin(this.shootAngle) * speed);
        }
        else {
            speed *= 0.75;
            this.rigidBody.linearVelocity = cc.v2(speed * moveDir, Math.sinh(this.shootAngle) * speed);
        }
        this.rigidBody.angularVelocity = 200 * moveDir;
    };
    //detect collision
    Bomb.prototype.onBeginContact = function (contact, selfCollider, otherCollider) {
        var _this = this;
        this.scheduleOnce(function () {
            _this.node.stopAllActions();
            _this.unscheduleAllCallbacks();
            _this.animation.stop();
            _this.bombManager.put(_this.node);
        }, 0.07);
    };
    Bomb.prototype.setAnglePower = function (angle, power) {
        this.shootAngle = angle;
        this.power = power;
    };
    Bomb = __decorate([
        ccclass
    ], Bomb);
    return Bomb;
}(cc.Component));
exports.default = Bomb;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQm9tYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFrQyx3QkFBWTtJQUE5QztRQUFBLHFFQTJGQztRQXpGVyxpQkFBVyxHQUFHLElBQUksQ0FBQztRQUVwQixpQkFBVyxHQUFHLEtBQUssQ0FBQyxDQUFDLDBEQUEwRDtRQUU5RSxlQUFTLEdBQWlCLElBQUksQ0FBQztRQUUvQixnQkFBVSxHQUFHLElBQUksQ0FBQztRQUVsQixlQUFTLEdBQWlCLElBQUksQ0FBQztRQUUvQixXQUFLLEdBQUcsSUFBSSxDQUFDOztJQStFekIsQ0FBQztJQTdFRyxxRkFBcUY7SUFDOUUsbUJBQUksR0FBWCxVQUFZLElBQWE7UUFFckIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFdEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxtRUFBbUU7SUFDbkUsb0JBQUssR0FBTCxVQUFNLGFBQWE7UUFFZixJQUFJLENBQUMsV0FBVyxHQUFHLGFBQWEsQ0FBQztRQUVqQyxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDO0lBRUQscUVBQXFFO0lBQzdELHlCQUFVLEdBQWxCLFVBQW1CLElBQWE7UUFFNUIsSUFBSSxDQUFDLElBQUks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Q29udGVudCI6WyJjb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvbWIgZXh0ZW5kcyBjYy5Db21wb25lbnQgXHJcbntcclxuICAgIHByaXZhdGUgYm9tYk1hbmFnZXIgPSBudWxsO1xyXG5cclxuICAgIHB1YmxpYyBpc1RyaWdnZXJlZCA9IGZhbHNlOyAvLyBJIGFkZCB0aGlzIHRvIG1ha2UgdGhlIGJ1bGxldCBraWxsIG9uZSBlbmVteSBhdCBhIHRpbWUuXHJcblxyXG4gICAgcHJpdmF0ZSByaWdpZEJvZHk6IGNjLlJpZ2lkQm9keSA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBzaG9vdEFuZ2xlID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGFuaW1hdGlvbjogY2MuQW5pbWF0aW9uID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIHBvd2VyID0gbnVsbDtcclxuXHJcbiAgICAvLyB3aGVuIGNyZWF0ZWQsIHRoZSBidWxsZXQgbmVlZCB0byBiZSBwbGFjZWQgYXQgY29ycmVjdCBwb3NpdGlvbiBhbmQgcGxheSBhbmltYXRpb24uXHJcbiAgICBwdWJsaWMgaW5pdChub2RlOiBjYy5Ob2RlKSBcclxuICAgIHtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbiA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7XHJcbiAgICAgICAgdGhpcy5yaWdpZEJvZHkgPSB0aGlzLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG4gICAgICAgIHRoaXMuc2V0SW5pdFBvcyhub2RlKTtcclxuXHJcbiAgICAgICAgdGhpcy5hbmltYXRpb24ucGxheSgnZ3JlbmFkZScpO1xyXG4gICAgICAgIHRoaXMuYnVsbGV0TW92ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkIHdoZW4gdGhlIGJ1bGxldCBtYW5hZ2VyIGNhbGxzIFwiZ2V0XCIgQVBJLlxyXG4gICAgcmV1c2UoYnVsbGV0TWFuYWdlcilcclxuICAgIHtcclxuICAgICAgICB0aGlzLmJvbWJNYW5hZ2VyID0gYnVsbGV0TWFuYWdlcjtcclxuXHJcbiAgICAgICAgdGhpcy5pc1RyaWdnZXJlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vdGhpcyBmdW5jdGlvbiBzZXRzIHRoZSBidWxsZXQncyBpbml0aWFsIHBvc2l0aW9uIHdoZW4gaXQgaXMgcmV1c2VkLlxyXG4gICAgcHJpdmF0ZSBzZXRJbml0UG9zKG5vZGU6IGNjLk5vZGUpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5ub2RlLnBhcmVudCA9IG5vZGUucGFyZW50OyAvLyBkb24ndCBtb3VudCB1bmRlciB0aGUgcGxheWVyLCBvdGhlcndpc2UgaXQgd2lsbCBjaGFuZ2UgZGlyZWN0aW9uIHdoZW4gcGxheWVyIG1vdmVcclxuXHJcbiAgICAgICAgaWYobm9kZS5zY2FsZVggPiAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnBvc2l0aW9uID0gY2MudjMoMzUsIDgpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IGNjLnYzKC0zNSwgOCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGVYID0gLTE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24gPSB0aGlzLm5vZGUucG9zaXRpb24uYWRkU2VsZihub2RlLnBvc2l0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICAvL21ha2UgdGhlIGJ1bGxldCBtb3ZlIGZyb20gY3VycmVudCBwb3NpdGlvblxyXG4gICAgcHJpdmF0ZSBidWxsZXRNb3ZlKClcclxuICAgIHtcclxuICAgICAgICBsZXQgbW92ZURpciA9IG51bGw7XHJcbiAgICAgICAgLy8gZGVjaWRlIGJ1bGxldCBkaXJlY3Rpb25cclxuICAgICAgICBpZih0aGlzLm5vZGUuc2NhbGVYID49IDApIHtcclxuICAgICAgICAgICAgbW92ZURpciA9IDE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbW92ZURpciA9IC0xO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgc3BlZWQgPSAxMCAqIHRoaXMucG93ZXI7XHJcbiAgICAgICAgLy8gdGhpcy5yaWdpZEJvZHkuYXBwbHlGb3JjZVRvQ2VudGVyKGNjLnYyKE1hdGguc2luKHNob290QW5nbGUpICogeCwgTWF0aC5jb3Moc2hvb3RBbmdsZSkgKiB4KSwgdHJ1ZSk7XHJcbiAgICAgICAgLy8gdGhpcy5yaWdpZEJvZHkubGluZWFyVmVsb2NpdHkgPSBjYy52MihNYXRoLnNpbih0aGlzLnNob290QW5nbGUpICogeCAqIG1vdmVEaXIsIE1hdGguY29zKHRoaXMuc2hvb3RBbmdsZSkgKiB4KTtcclxuICAgICAgICAvLyB0aGlzLnJpZ2lkQm9keS5saW5lYXJWZWxvY2l0eSA9IGNjLnYyKHNwZWVkICogbW92ZURpciAqIE1hdGguc2luKHRoaXMuc2hvb3RBbmdsZSksIE1hdGguc2luaCh0aGlzLnNob290QW5nbGUpICogc3BlZWQpO1xyXG4gICAgICAgIGlmKHRoaXMuc2hvb3RBbmdsZSA+PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmlnaWRCb2R5LmxpbmVhclZlbG9jaXR5ID0gY2MudjIoc3BlZWQgKiBtb3ZlRGlyICogTWF0aC5jb3ModGhpcy5zaG9vdEFuZ2xlKSwgTWF0aC5zaW4odGhpcy5zaG9vdEFuZ2xlKSAqIHNwZWVkKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzcGVlZCAqPSAwLjc1O1xyXG4gICAgICAgICAgICB0aGlzLnJpZ2lkQm9keS5saW5lYXJWZWxvY2l0eSA9IGNjLnYyKHNwZWVkICogbW92ZURpciwgTWF0aC5zaW5oKHRoaXMuc2hvb3RBbmdsZSkgKiBzcGVlZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucmlnaWRCb2R5LmFuZ3VsYXJWZWxvY2l0eSA9IDIwMCAqIG1vdmVEaXI7XHJcbiAgICB9XHJcbiAgICByXHJcbiAgICAvL2RldGVjdCBjb2xsaXNpb25cclxuICAgIG9uQmVnaW5Db250YWN0KGNvbnRhY3QsIHNlbGZDb2xsaWRlciwgb3RoZXJDb2xsaWRlcikge1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgICAgIHRoaXMudW5zY2hlZHVsZUFsbENhbGxiYWNrcygpO1xyXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGlvbi5zdG9wKCk7XHJcbiAgICAgICAgICAgIHRoaXMuYm9tYk1hbmFnZXIucHV0KHRoaXMubm9kZSk7XHJcbiAgICAgICAgfSwgMC4wNyk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0QW5nbGVQb3dlcihhbmdsZSwgcG93ZXIpIHtcclxuICAgICAgICB0aGlzLnNob290QW5nbGUgPSBhbmdsZTtcclxuICAgICAgICB0aGlzLnBvd2VyID0gcG93ZXI7XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/map.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '14f70EKnv9BG7VGuHVryKuY', 'map');
// scripts/map.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Map = /** @class */ (function (_super) {
    __extends(Map, _super);
    function Map() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.groundPrefab = null;
        _this.groundUpperPrefab = null;
        _this.firePrefab = null;
        _this.groundPool = null;
        _this.groundPool1 = null;
        _this.firePool = null;
        return _this;
    }
    Map.prototype.onLoad = function () {
        if (!this.groundUpperPrefab) {
            this.groundPool = new cc.NodePool('Ground');
            for (var i = 0; i < 1400; i++) {
                var ground = cc.instantiate(this.groundPrefab);
                this.groundPool.put(ground);
                // y.max = -222.5
            }
        }
        else {
            this.groundPool = new cc.NodePool('Ground');
            for (var i = 0; i < (1400 - 200); i++) {
                var ground = cc.instantiate(this.groundPrefab);
                this.groundPool.put(ground);
            }
            this.groundPool1 = new cc.NodePool('Ground1');
            for (var i = 0; i < 200; i++) {
                var ground = cc.instantiate(this.groundUpperPrefab);
                this.groundPool1.put(ground);
            }
        }
        this.firePool = new cc.NodePool('Fire');
        for (var i = 0; i < 200; i++) {
            var fire = cc.instantiate(this.firePrefab);
            this.firePool.put(fire);
            // y.max = -222.5
        }
    };
    Map.prototype.start = function () {
        this.createGround();
        this.createFire();
    };
    Map.prototype.createGround = function () {
        var ground = null;
        var i = 0;
        if (!this.groundUpperPrefab) {
            while (this.groundPool.size() > 0) {
                ground = this.groundPool.get(this.groundPool);
                ground.getComponent('Ground').init(this.node, i);
                i++;
            }
        }
        else {
            while (this.groundPool.size() > 0) {
                ground = this.groundPool.get(this.groundPool);
                ground.getComponent('Ground').init(this.node, i);
                i++;
            }
            ground = null;
            i = 1400 - 200;
            while (this.groundPool1.size() > 0) {
                ground = this.groundPool1.get(this.groundPool1);
                ground.getComponent('Ground').init(this.node, i);
                i++;
            }
        }
    };
    Map.prototype.createFire = function () {
        var index = 0;
        var fires = null;
        while (this.firePool.size() > 0) {
            fires = this.firePool.get(this.firePool);
            fires.parent = cc.find("Canvas/fire");
            fires.position = cc.v2(-518 + (16 * index), -320);
            fires.position = fires.position.addSelf(this.node.position);
            fires.getComponent(cc.Animation).play("fire");
            // fires.node.zIndex = 100;
            // console.log(fires.position.x, "fire");
            index++;
        }
    };
    __decorate([
        property(cc.Prefab)
    ], Map.prototype, "groundPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], Map.prototype, "groundUpperPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], Map.prototype, "firePrefab", void 0);
    Map = __decorate([
        ccclass
    ], Map);
    return Map;
}(cc.Component));
exports.default = Map;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbWFwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQWlDLHVCQUFZO0lBQTdDO1FBQUEscUVBMkZDO1FBeEZXLGtCQUFZLEdBQWMsSUFBSSxDQUFDO1FBRy9CLHVCQUFpQixHQUFjLElBQUksQ0FBQztRQUdwQyxnQkFBVSxHQUFjLElBQUksQ0FBQztRQUU3QixnQkFBVSxHQUFHLElBQUksQ0FBQztRQUNsQixpQkFBVyxHQUFHLElBQUksQ0FBQztRQUNuQixjQUFRLEdBQUcsSUFBSSxDQUFDOztJQThFNUIsQ0FBQztJQTVFRyxvQkFBTSxHQUFOO1FBQ0ksSUFBRyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBQztZQUN2QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksRUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUM1QyxLQUFJLElBQUksQ0FBQyxHQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUNsQyxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDL0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQzVCLGlCQUFpQjthQUNwQjtTQUNKO2FBQU07WUFDSCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksRUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUM1QyxLQUFJLElBQUksQ0FBQyxHQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQzFDLElBQUksTUFB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QUM7WUFDM0IsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUV6QyxLQUFLLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7WUFFdEMsS0FBSyxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRSxHQUFHLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7WUFFbEQsS0FBSyxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzVELEtBQUssQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM5QywyQkFBMkI7WUFDM0IseUNBQXlDO1lBQ3pDLEtBQUssRUFBRSxDQUFDO1NBQ1g7SUFDTCxDQUFDO0lBdkZEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7NkNBQ21CO0lBR3ZDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7a0RBQ3dCO0lBRzVDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7MkNBQ2lCO0lBVHBCLEdBQUc7UUFEdkIsT0FBTztPQUNhLEdBQUcsQ0EyRnZCO0lBQUQsVUFBQztDQTNGRCxBQTJGQyxDQTNGZ0MsRUFBRSxDQUFDLFNBQVMsR0EyRjVDO2tCQTNGb0IsR0FBRyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFwIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgcHJpdmF0ZSBncm91bmRQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHByaXZhdGUgZ3JvdW5kVXBwZXJQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHByaXZhdGUgZmlyZVByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGdyb3VuZFBvb2wgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBncm91bmRQb29sMSA9IG51bGw7XHJcbiAgICBwcml2YXRlIGZpcmVQb29sID0gbnVsbDtcclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIGlmKCF0aGlzLmdyb3VuZFVwcGVyUHJlZmFiKXtcclxuICAgICAgICAgICAgdGhpcy5ncm91bmRQb29sID0gbmV3IGNjLk5vZGVQb29sKCdHcm91bmQnKTtcclxuICAgICAgICAgICAgZm9yKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgMTQwMDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZ3JvdW5kID0gY2MuaW5zdGFudGlhdGUodGhpcy5ncm91bmRQcmVmYWIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ncm91bmRQb29sLnB1dChncm91bmQpO1xyXG4gICAgICAgICAgICAgICAgLy8geS5tYXggPSAtMjIyLjVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ3JvdW5kUG9vbCA9IG5ldyBjYy5Ob2RlUG9vbCgnR3JvdW5kJyk7XHJcbiAgICAgICAgICAgIGZvcihsZXQgaTogbnVtYmVyID0gMDsgaSA8ICgxNDAwIC0gMjAwKTsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZ3JvdW5kID0gY2MuaW5zdGFudGlhdGUodGhpcy5ncm91bmRQcmVmYWIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ncm91bmRQb29sLnB1dChncm91bmQpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5ncm91bmRQb29sMSA9IG5ldyBjYy5Ob2RlUG9vbCgnR3JvdW5kMScpO1xyXG4gICAgICAgICAgICBmb3IobGV0IGk6IG51bWJlciA9IDA7IGkgPCAyMDA7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGdyb3VuZCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZ3JvdW5kVXBwZXJQcmVmYWIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ncm91bmRQb29sMS5wdXQoZ3JvdW5kKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmZpcmVQb29sID0gbmV3IGNjLk5vZGVQb29sKCdGaXJlJyk7XHJcbiAgICAgICAgZm9yKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgMjAwOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGZpcmUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmZpcmVQcmVmYWIpO1xyXG4gICAgICAgICAgICB0aGlzLmZpcmVQb29sLnB1dChmaXJlKTtcclxuICAgICAgICAgICAgLy8geS5tYXggPSAtMjIyLjVcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICB0aGlzLmNyZWF0ZUdyb3VuZCgpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlRmlyZSgpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjcmVhdGVHcm91bmQoKSB7XHJcbiAgICAgICAgbGV0IGdyb3VuZCA9IG51bGw7XHJcbiAgICAgICAgbGV0IGkgPSAwO1xyXG4gICAgICAgIGlmKCF0aGlzLmdyb3VuZFVwcGVyUHJlZmFiKXtcclxuICAgICAgICAgICAgd2hpbGUodGhpcy5ncm91bmRQb29sLnNpemUoKSA+IDApIHtcclxuICAgICAgICAgICAgICAgIGdyb3VuZCA9IHRoaXMuZ3JvdW5kUG9vbC5nZXQodGhpcy5ncm91bmRQb29sKTtcclxuICAgICAgICAgICAgICAgIGdyb3VuZC5nZXRDb21wb25lbnQoJ0dyb3VuZCcpLmluaXQodGhpcy5ub2RlLCBpKTtcclxuICAgICAgICAgICAgICAgIGkrKzsgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICAgIHdoaWxlKHRoaXMuZ3JvdW5kUG9vbC5zaXplKCkgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBncm91bmQgPSB0aGlzLmdyb3VuZFBvb2wuZ2V0KHRoaXMuZ3JvdW5kUG9vbCk7XHJcbiAgICAgICAgICAgICAgICBncm91bmQuZ2V0Q29tcG9uZW50KCdHcm91bmQnKS5pbml0KHRoaXMubm9kZSwgaSk7XHJcbiAgICAgICAgICAgICAgICBpKys7IFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGdyb3VuZCA9IG51bGw7XHJcbiAgICAgICAgICAgIGkgPSAxNDAwLTIwMDtcclxuICAgICAgICAgICAgd2hpbGUodGhpcy5ncm91bmRQb29sMS5zaXplKCkgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBncm91bmQgPSB0aGlzLmdyb3VuZFBvb2wxLmdldCh0aGlzLmdyb3VuZFBvb2wxKTtcclxuICAgICAgICAgICAgICAgIGdyb3VuZC5nZXRDb21wb25lbnQoJ0dyb3VuZCcpLmluaXQodGhpcy5ub2RlLCBpKTtcclxuICAgICAgICAgICAgICAgIGkrKzsgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlRmlyZSgpe1xyXG4gICAgICAgIGxldCBpbmRleCA9IDA7XHJcbiAgICAgICAgbGV0IGZpcmVzID0gbnVsbDtcclxuICAgICAgICB3aGlsZSh0aGlzLmZpcmVQb29sLnNpemUoKSA+IDApe1xyXG4gICAgICAgICAgICBmaXJlcyA9IHRoaXMuZmlyZVBvb2wuZ2V0KHRoaXMuZmlyZVBvb2wpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZmlyZXMucGFyZW50ID0gY2MuZmluZChcIkNhbnZhcy9maXJlXCIpO1xyXG4gICAgXHJcbiAgICAgICAgICAgIGZpcmVzLnBvc2l0aW9uID0gY2MudjIoLTUxOCArICgxNiAqIGluZGV4KSwgLTMyMCk7IFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZmlyZXMucG9zaXRpb24gPSBmaXJlcy5wb3NpdGlvbi5hZGRTZWxmKHRoaXMubm9kZS5wb3NpdGlvbik7XHJcbiAgICAgICAgICAgIGZpcmVzLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJmaXJlXCIpO1xyXG4gICAgICAgICAgICAvLyBmaXJlcy5ub2RlLnpJbmRleCA9IDEwMDtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZmlyZXMucG9zaXRpb24ueCwgXCJmaXJlXCIpO1xyXG4gICAgICAgICAgICBpbmRleCsrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/TrajectoryLine.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1aa02tB/qNC9aTto6FFiTAI', 'TrajectoryLine');
// scripts/TrajectoryLine.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TrajectoryLine = /** @class */ (function (_super) {
    __extends(TrajectoryLine, _super);
    function TrajectoryLine() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.arrowPrefab = null;
        _this.angle = null;
        _this.power = null;
        _this.label = null;
        _this.line = null;
        _this.arrow = null;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    TrajectoryLine.prototype.onLoad = function () {
        this.line = this.node.getComponent(cc.Graphics);
    };
    TrajectoryLine.prototype.start = function () {
    };
    // update (dt) {}
    TrajectoryLine.prototype.drawStraightLine = function (angle) {
        this.line.clear();
        this.line.lineWidth = 5;
        this.line.lineCap = cc.Graphics.LineCap.ROUND;
        this.line.moveTo(35, 8);
        this.line.lineTo(35 + Math.cos(angle) * 300, 8 + Math.sin(angle) * 300);
        this.line.stroke();
    };
    TrajectoryLine.prototype.drawCurveLine = function (angle, power) {
        if (this.arrow) {
            if (power > 100)
                power = 100;
            var degree = angle * 180 / Math.PI;
            this.arrow.getComponent("Arrow").arrowMove(degree);
            this.angle.string = Math.floor(degree).toString();
            this.power.string = power.toString();
        }
        else {
            this.arrow = cc.instantiate(this.arrowPrefab);
            this.arrow.getComponent("Arrow").init(this.node);
            this.label.active = true;
        }
        // not accurate
        // this.line.clear();
        // this.line.lineWidth = 5;
        // this.line.lineCap = cc.Graphics.LineCap.ROUND;
        // this.line.moveTo(35, 8);
        // // this.line.quadraticCurveTo(35, Math.tan(angle) * 100, 35 + Math.sin(angle) * 1000, 8 + Math.cos(angle) * 100);
        // // this.line.quadraticCurveTo(35, Math.sin(angle) * 1000 + Math.tan(angle) * 100, 1000, 8);
        // // this.line.quadraticCurveTo(35, Math.tan(angle) * 100, Math.cos(angle) * 1000, 8);
        // this.line.quadraticCurveTo(35, Math.sin(angle) * 1000, 1000, 960);
        // this.line.stroke();
    };
    TrajectoryLine.prototype.clearLine = function () {
        this.line.clear();
        this.label.active = false;
        if (this.arrow) {
            this.arrow.destroy();
            this.arrow = null;
        }
    };
    __decorate([
        property(cc.Prefab)
    ], TrajectoryLine.prototype, "arrowPrefab", void 0);
    __decorate([
        property(cc.Label)
    ], TrajectoryLine.prototype, "angle", void 0);
    __decorate([
        property(cc.Label)
    ], TrajectoryLine.prototype, "power", void 0);
    __decorate([
        property(cc.Node)
    ], TrajectoryLine.prototype, "label", void 0);
    TrajectoryLine = __decorate([
        ccclass
    ], TrajectoryLine);
    return TrajectoryLine;
}(cc.Component));
exports.default = TrajectoryLine;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcVHJhamVjdG9yeUxpbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBNEMsa0NBQVk7SUFBeEQ7UUFBQSxxRUF1RUM7UUFwRUcsaUJBQVcsR0FBYyxJQUFJLENBQUM7UUFHOUIsV0FBSyxHQUFhLElBQUksQ0FBQztRQUd2QixXQUFLLEdBQWEsSUFBSSxDQUFDO1FBR3ZCLFdBQUssR0FBWSxJQUFJLENBQUM7UUFFZCxVQUFJLEdBQWdCLElBQUksQ0FBQztRQUV6QixXQUFLLEdBQUcsSUFBSSxDQUFDOztJQXVEekIsQ0FBQztJQXJERyx3QkFBd0I7SUFFeEIsK0JBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFRCw4QkFBSyxHQUFMO0lBRUEsQ0FBQztJQUVELGlCQUFpQjtJQUVWLHlDQUFnQixHQUF2QixVQUF3QixLQUFLO1FBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUM5QyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFBO1FBQ3ZFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVNLHNDQUFhLEdBQXBCLFVBQXFCLEtBQUssRUFBRSxLQUFLO1FBQzdCLElBQUcsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNYLElBQUcsS0FBSyxHQUFHLEdBQUc7Z0JBQUUsS0FBSyxHQUFHLEdBQUcsQ0FBQztZQUM1QixJQUFJLE1BQU0sR0FBRyxLQUFLLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7WUFDbkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ25ELElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDbEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ3hDO2FBQU07WUFDSCxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQzlDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDakQsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1NBQzVCO1FBQ0QsZUFBZTtRQUNmLHFCQUFxQjtRQUNyQiwyQkFBMkI7UUFDM0IsaURBQWlEO1FBQ2pELDJCQUEyQjtRQUMzQixvSEFBb0g7UUFDcEgsOEZBQThGO1FBQzlGLHVGQUF1RjtRQUN2RixxRUFBcUU7UUFDckUsc0JBQXNCO0lBQzFCLENBQUM7SUFFTSxrQ0FBUyxHQUFoQjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQzFCLElBQUcsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNYLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDckIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7U0FDckI7SUFDTCxDQUFDO0lBbkVEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7dURBQ1U7SUFHOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztpREFDSTtJQUd2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2lEQUNJO0lBR3ZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7aURBQ0k7SUFaTCxjQUFjO1FBRGxDLE9BQU87T0FDYSxjQUFjLENBdUVsQztJQUFELHFCQUFDO0NBdkVELEFBdUVDLENBdkUyQyxFQUFFLENBQUMsU0FBUyxHQXVFdkQ7a0JBdkVvQixjQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmFqZWN0b3J5TGluZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIGFycm93UHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGFuZ2xlOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgcG93ZXI6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxhYmVsOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGxpbmU6IGNjLkdyYXBoaWNzID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGFycm93ID0gbnVsbDtcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIHRoaXMubGluZSA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuR3JhcGhpY3MpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxuXHJcbiAgICBwdWJsaWMgZHJhd1N0cmFpZ2h0TGluZShhbmdsZSkge1xyXG4gICAgICAgIHRoaXMubGluZS5jbGVhcigpO1xyXG4gICAgICAgIHRoaXMubGluZS5saW5lV2lkdGggPSA1O1xyXG4gICAgICAgIHRoaXMubGluZS5saW5lQ2FwID0gY2MuR3JhcGhpY3MuTGluZUNhcC5ST1VORDtcclxuICAgICAgICB0aGlzLmxpbmUubW92ZVRvKDM1LCA4KTtcclxuICAgICAgICB0aGlzLmxpbmUubGluZVRvKDM1ICsgTWF0aC5jb3MoYW5nbGUpICogMzAwLCA4ICsgTWF0aC5zaW4oYW5nbGUpICogMzAwKVxyXG4gICAgICAgIHRoaXMubGluZS5zdHJva2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZHJhd0N1cnZlTGluZShhbmdsZSwgcG93ZXIpIHtcclxuICAgICAgICBpZih0aGlzLmFycm93KSB7XHJcbiAgICAgICAgICAgIGlmKHBvd2VyID4gMTAwKSBwb3dlciA9IDEwMDtcclxuICAgICAgICAgICAgbGV0IGRlZ3JlZSA9IGFuZ2xlICogMTgwIC8gTWF0aC5QSTtcclxuICAgICAgICAgICAgdGhpcy5hcnJvdy5nZXRDb21wb25lbnQoXCJBcnJvd1wiKS5hcnJvd01vdmUoZGVncmVlKTtcclxuICAgICAgICAgICAgdGhpcy5hbmdsZS5zdHJpbmcgPSBNYXRoLmZsb29yKGRlZ3JlZSkudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgdGhpcy5wb3dlci5zdHJpbmcgPSBwb3dlci50b1N0cmluZygpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXJyb3cgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmFycm93UHJlZmFiKTtcclxuICAgICAgICAgICAgdGhpcy5hcnJvdy5nZXRDb21wb25lbnQoXCJBcnJvd1wiKS5pbml0KHRoaXMubm9kZSk7XHJcbiAgICAgICAgICAgIHRoaXMubGFiZWwuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gbm90IGFjY3VyYXRlXHJcbiAgICAgICAgLy8gdGhpcy5saW5lLmNsZWFyKCk7XHJcbiAgICAgICAgLy8gdGhpcy5saW5lLmxpbmVXaWR0aCA9IDU7XHJcbiAgICAgICAgLy8gdGhpcy5saW5lLmxpbmVDYXAgPSBjYy5HcmFwaGljcy5MaW5lQ2FwLlJPVU5EO1xyXG4gICAgICAgIC8vIHRoaXMubGluZS5tb3ZlVG8oMzUsIDgpO1xyXG4gICAgICAgIC8vIC8vIHRoaXMubGluZS5xdWFkcmF0aWNDdXJ2ZVRvKDM1LCBNYXRoLnRhbihhbmdsZSkgKiAxMDAsIDM1ICsgTWF0aC5zaW4oYW5nbGUpICogMTAwMCwgOCArIE1hdGguY29zKGFuZ2xlKSAqIDEwMCk7XHJcbiAgICAgICAgLy8gLy8gdGhpcy5saW5lLnF1YWRyYXRpY0N1cnZlVG8oMzUsIE1hdGguc2luKGFuZ2xlKSAqIDEwMDAgKyBNYXRoLnRhbihhbmdsZSkgKiAxMDAsIDEwMDAsIDgpO1xyXG4gICAgICAgIC8vIC8vIHRoaXMubGluZS5xdWFkcmF0aWNDdXJ2ZVRvKDM1LCBNYXRoLnRhbihhbmdsZSkgKiAxMDAsIE1hdGguY29zKGFuZ2xlKSAqIDEwMDAsIDgpO1xyXG4gICAgICAgIC8vIHRoaXMubGluZS5xdWFkcmF0aWNDdXJ2ZVRvKDM1LCBNYXRoLnNpbihhbmdsZSkgKiAxMDAwLCAxMDAwLCA5NjApO1xyXG4gICAgICAgIC8vIHRoaXMubGluZS5zdHJva2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xlYXJMaW5lKCkge1xyXG4gICAgICAgIHRoaXMubGluZS5jbGVhcigpO1xyXG4gICAgICAgIHRoaXMubGFiZWwuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgaWYodGhpcy5hcnJvdykge1xyXG4gICAgICAgICAgICB0aGlzLmFycm93LmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgdGhpcy5hcnJvdyA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Arrow.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '59d65rCd65HeaNbiiLTA1TE', 'Arrow');
// scripts/Arrow.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Arrow = /** @class */ (function (_super) {
    __extends(Arrow, _super);
    function Arrow() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        return _this;
    }
    // when created, the bullet need to be placed at correct position and play animation.
    Arrow.prototype.init = function (node) {
        this.setInitPos(node);
    };
    //this function sets the arrow's initial position when it is reused.
    Arrow.prototype.setInitPos = function (node) {
        this.node.parent = node.parent; // don't mount under the player, otherwise it will change direction when player move
        if (node.scaleX > 0) {
            this.node.position = cc.v3(35, 8);
            this.node.scaleX = 1;
        }
        else {
            console.log("beda");
            this.node.position = cc.v3(-35, 8);
            this.node.scaleX = -1;
        }
        this.node.position = this.node.position.addSelf(node.position);
    };
    //make the arrow move according to the angle
    Arrow.prototype.arrowMove = function (angle) {
        this.node.angle = angle;
    };
    Arrow.prototype.destroyArrow = function () {
        this.node.destroy();
    };
    Arrow = __decorate([
        ccclass
    ], Arrow);
    return Arrow;
}(cc.Component));
exports.default = Arrow;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQXJyb3cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBbUMseUJBQVk7SUFBL0M7UUFBQSxxRUF5Q0M7UUF2Q1csV0FBSyxHQUFHLElBQUksQ0FBQzs7SUF1Q3pCLENBQUM7SUFyQ0cscUZBQXFGO0lBQzlFLG9CQUFJLEdBQVgsVUFBWSxJQUFhO1FBRXJCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVELG9FQUFvRTtJQUM1RCwwQkFBVSxHQUFsQixVQUFtQixJQUFhO1FBRTVCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxvRkFBb0Y7UUFFcEgsSUFBRyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFDbEI7WUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUVsQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7U0FDeEI7YUFFRDtZQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUE7WUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUVuQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztTQUN6QjtRQUVELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUVELDRDQUE0QztJQUNwQyx5QkFBUyxHQUFqQixVQUFrQixLQUFLO1FBRW5CLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUM1QixDQUFDO0lBRUQsNEJBQVksR0FBWjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQXhDZ0IsS0FBSztRQUR6QixPQUFPO09BQ2EsS0FBSyxDQXlDekI7SUFBRCxZQUFDO0NBekNELEFBeUNDLENBekNrQyxFQUFFLENBQUMsU0FBUyxHQXlDOUM7a0JBekNvQixLQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcnJvdyBleHRlbmRzIGNjLkNvbXBvbmVudCBcclxue1xyXG4gICAgcHJpdmF0ZSBsYWJlbCA9IG51bGw7XHJcblxyXG4gICAgLy8gd2hlbiBjcmVhdGVkLCB0aGUgYnVsbGV0IG5lZWQgdG8gYmUgcGxhY2VkIGF0IGNvcnJlY3QgcG9zaXRpb24gYW5kIHBsYXkgYW5pbWF0aW9uLlxyXG4gICAgcHVibGljIGluaXQobm9kZTogY2MuTm9kZSkgXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5zZXRJbml0UG9zKG5vZGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vdGhpcyBmdW5jdGlvbiBzZXRzIHRoZSBhcnJvdydzIGluaXRpYWwgcG9zaXRpb24gd2hlbiBpdCBpcyByZXVzZWQuXHJcbiAgICBwcml2YXRlIHNldEluaXRQb3Mobm9kZTogY2MuTm9kZSlcclxuICAgIHtcclxuICAgICAgICB0aGlzLm5vZGUucGFyZW50ID0gbm9kZS5wYXJlbnQ7IC8vIGRvbid0IG1vdW50IHVuZGVyIHRoZSBwbGF5ZXIsIG90aGVyd2lzZSBpdCB3aWxsIGNoYW5nZSBkaXJlY3Rpb24gd2hlbiBwbGF5ZXIgbW92ZVxyXG5cclxuICAgICAgICBpZihub2RlLnNjYWxlWCA+IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24gPSBjYy52MygzNSwgOCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGVYID0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJiZWRhXCIpXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IGNjLnYzKC0zNSwgOCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGVYID0gLTE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24gPSB0aGlzLm5vZGUucG9zaXRpb24uYWRkU2VsZihub2RlLnBvc2l0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICAvL21ha2UgdGhlIGFycm93IG1vdmUgYWNjb3JkaW5nIHRvIHRoZSBhbmdsZVxyXG4gICAgcHJpdmF0ZSBhcnJvd01vdmUoYW5nbGUpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFuZ2xlID0gYW5nbGU7XHJcbiAgICB9XHJcblxyXG4gICAgZGVzdHJveUFycm93KCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------
