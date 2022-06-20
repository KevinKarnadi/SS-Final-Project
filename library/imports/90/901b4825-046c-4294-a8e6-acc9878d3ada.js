"use strict";
cc._RF.push(module, '901b4glBGxClKjmrMmHjTra', 'chooseMap');
// scripts/chooseMap.ts

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
var chooseMap = /** @class */ (function (_super) {
    __extends(chooseMap, _super);
    function chooseMap() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bgm = null;
        _this.click = null;
        _this.back = null;
        _this.map1btn = null;
        _this.map2btn = null;
        _this.map1 = "true";
        _this.map2 = "false";
        return _this;
    }
    chooseMap.prototype.onLoad = function () {
        if (!cc.audioEngine.isMusicPlaying()) {
            this.playBGM();
        }
        this.loadMapAsset();
        this.loadSelectMapBtn();
    };
    chooseMap.prototype.start = function () {
        this.menuMouseOn();
    };
    // update (dt) {}
    chooseMap.prototype.playBGM = function () {
        cc.audioEngine.playMusic(this.bgm, true);
    };
    chooseMap.prototype.loadMapAsset = function () {
        this.map1 = cc.sys.localStorage.getItem("purple");
        this.map2 = cc.sys.localStorage.getItem("forest");
    };
    chooseMap.prototype.loadSelectMapBtn = function () {
        if (this.map1 == "true") {
            this.lockBtn(this.map1btn);
        }
        if (this.map2 == "true") {
            this.lockBtn(this.map2btn);
        }
    };
    chooseMap.prototype.lockBtn = function (btn) {
        btn.node.getChildByName("LockedBackground").active = false;
    };
    chooseMap.prototype.menuMouseOn = function () {
        var _this = this;
        this.back.node.on(cc.Node.EventType.MOUSE_DOWN, function () {
            _this.playClickAudio();
            _this.loadScene("character choose");
        });
        this.map1btn.node.on(cc.Node.EventType.MOUSE_DOWN, function () {
            if (_this.map1 == "true") {
                _this.playClickAudio();
                _this.loadScene("map1");
            }
        });
        this.map2btn.node.on(cc.Node.EventType.MOUSE_DOWN, function () {
            if (_this.map2 == "true") {
                _this.playClickAudio();
                _this.loadScene("map2");
            }
        });
    };
    chooseMap.prototype.playClickAudio = function () {
        cc.audioEngine.playEffect(this.click, false);
    };
    chooseMap.prototype.loadScene = function (scene) {
        cc.audioEngine.stopAll();
        cc.director.loadScene("loading", function () {
            cc.director.loadScene(scene);
        });
    };
    __decorate([
        property(cc.AudioClip)
    ], chooseMap.prototype, "bgm", void 0);
    __decorate([
        property(cc.AudioClip)
    ], chooseMap.prototype, "click", void 0);
    __decorate([
        property(cc.Button)
    ], chooseMap.prototype, "back", void 0);
    __decorate([
        property(cc.Button)
    ], chooseMap.prototype, "map1btn", void 0);
    __decorate([
        property(cc.Button)
    ], chooseMap.prototype, "map2btn", void 0);
    chooseMap = __decorate([
        ccclass
    ], chooseMap);
    return chooseMap;
}(cc.Component));
exports.default = chooseMap;

cc._RF.pop();