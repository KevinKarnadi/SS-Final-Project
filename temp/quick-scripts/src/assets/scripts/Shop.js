"use strict";
cc._RF.push(module, '3373bG9WWpI86304iTsPnk6', 'Shop');
// scripts/Shop.ts

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
var Shop = /** @class */ (function (_super) {
    __extends(Shop, _super);
    function Shop() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bgm = null;
        _this.click = null;
        _this.coin = null;
        _this.gem = null;
        _this.back = null;
        _this.characters = null;
        _this.weapons = null;
        _this.maps = null;
        _this.char1btn = null;
        _this.char2btn = null;
        _this.char3btn = null;
        _this.char4btn = null;
        _this.AKbtn = null;
        _this.ARbtn = null;
        _this.grenadebtn = null;
        _this.shotgunbtn = null;
        _this.sniperbtn = null;
        _this.char1 = "true";
        _this.char2 = "false";
        _this.char3 = "false";
        _this.char4 = "false";
        _this.AK = "true";
        _this.AR = "false";
        _this.grenade = "false";
        _this.shotgun = "false";
        _this.sniper = "false";
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    Shop.prototype.onLoad = function () {
        if (!cc.audioEngine.isMusicPlaying()) {
            this.playBGM();
        }
        this.setUserStats();
    };
    Shop.prototype.start = function () {
        this.menuMouseOn();
    };
    // update (dt) {}
    Shop.prototype.playBGM = function () {
        cc.audioEngine.playMusic(this.bgm, true);
    };
    Shop.prototype.setUserStats = function () {
        // this.coin.string = cc.sys.localStorage.getItem("coin");
        // this.gem.string = cc.sys.localStorage.getItem("gem");
        this.char1 = cc.sys.localStorage.getItem("char1");
        this.char2 = cc.sys.localStorage.getItem("char2");
        this.char3 = cc.sys.localStorage.getItem("char3");
        this.char4 = cc.sys.localStorage.getItem("char4");
        this.AK = cc.sys.localStorage.getItem("AK47");
        this.AR = cc.sys.localStorage.getItem("AR");
        this.grenade = cc.sys.localStorage.getItem("grenade");
        this.sniper = cc.sys.localStorage.getItem("sniper");
        // cc.sys.localStorage.setItem("char1", false); // for debug
        // cc.sys.localStorage.setItem("char2", false);
        // cc.sys.localStorage.setItem("char3", false);
        // cc.sys.localStorage.setItem("char4", false);
        this.loadCharBtn();
    };
    Shop.prototype.menuMouseOn = function () {
        var _this = this;
        this.back.node.on(cc.Node.EventType.MOUSE_DOWN, function () {
            _this.playClickAudio();
            _this.loadScene("menu");
        });
        this.characters.on(cc.Node.EventType.MOUSE_DOWN, function () {
            _this.playClickAudio();
        });
        this.maps.on(cc.Node.EventType.MOUSE_DOWN, function () {
            _this.playClickAudio();
        });
        this.char1btn.node.on(cc.Node.EventType.MOUSE_DOWN, function () {
            if (_this.char1 != "true") {
                _this.playClickAudio();
                _this.buyItemGem(_this.char1btn, "char1");
            }
        });
        this.char2btn.node.on(cc.Node.EventType.MOUSE_DOWN, function () {
            if (_this.char2 != "true") {
                _this.playClickAudio();
                _this.buyItemGem(_this.char2btn, "char2");
            }
        });
        this.char3btn.node.on(cc.Node.EventType.MOUSE_DOWN, function () {
            if (_this.char3 != "true") {
                _this.playClickAudio();
                _this.buyItemGem(_this.char3btn, "char3");
            }
        });
        this.char4btn.node.on(cc.Node.EventType.MOUSE_DOWN, function () {
            if (_this.char4 != "true") {
                _this.playClickAudio();
                _this.buyItemGem(_this.char4btn, "char4");
            }
        });
        this.AKbtn.node.on(cc.Node.EventType.MOUSE_DOWN, function () {
            if (_this.AK != "true") {
                _this.playClickAudio();
                _this.buyItemGem(_this.AKbtn, "AK47");
            }
        });
        this.ARbtn.node.on(cc.Node.EventType.MOUSE_DOWN, function () {
            if (_this.AR != "true") {
                _this.playClickAudio();
                _this.buyItemGem(_this.ARbtn, "AR");
            }
        });
        this.grenadebtn.node.on(cc.Node.EventType.MOUSE_DOWN, function () {
            if (_this.grenade != "true") {
                _this.playClickAudio();
                _this.buyItemGem(_this.grenadebtn, "grenade");
            }
        });
        this.shotgunbtn.node.on(cc.Node.EventType.MOUSE_DOWN, function () {
            if (_this.AR != "true") {
                _this.playClickAudio();
                _this.buyItemGem(_this.shotgunbtn, "shotgun");
            }
        });
        this.sniperbtn.node.on(cc.Node.EventType.MOUSE_DOWN, function () {
            if (_this.sniper != "true") {
                _this.playClickAudio();
                _this.buyItemGem(_this.sniperbtn, "sniper");
            }
        });
    };
    Shop.prototype.playClickAudio = function () {
        cc.audioEngine.playEffect(this.click, false);
    };
    Shop.prototype.loadScene = function (scene) {
        cc.director.loadScene(scene);
    };
    Shop.prototype.loadCharBtn = function () {
        if (this.char1 == "true") {
            this.lockBtn(this.char1btn);
        }
        if (this.char2 == "true") {
            this.lockBtn(this.char2btn);
        }
        if (this.char3 == "true") {
            this.lockBtn(this.char3btn);
        }
        if (this.char4 == "true") {
            this.lockBtn(this.char4btn);
        }
        if (this.AK == "true") {
            this.lockBtn(this.AKbtn);
        }
        if (this.AR == "true") {
            this.lockBtn(this.ARbtn);
        }
        if (this.grenade == "true") {
            this.lockBtn(this.grenadebtn);
        }
        if (this.shotgun == "true") {
            this.lockBtn(this.shotgunbtn);
        }
        if (this.sniper == "true") {
            this.lockBtn(this.sniperbtn);
        }
    };
    Shop.prototype.lockBtn = function (btn) {
        btn.node.off(cc.Node.EventType.MOUSE_DOWN);
        btn.interactable = false;
        btn.enableAutoGrayEffect = true;
        this.changePrice(btn);
    };
    Shop.prototype.changePrice = function (btn) {
        btn.node.getChildByName("Background").getChildByName("Label").getComponent(cc.Label).string = "SOLD";
    };
    Shop.prototype.buyItemGem = function (btn, item) {
        var price = parseInt(btn.node.getChildByName("Background").getChildByName("Label").getComponent(cc.Label).string);
        var currGem = parseInt(this.gem.string);
        if (currGem >= price) {
            var remain = currGem - price;
            this.gem.string = remain.toString();
            cc.sys.localStorage.setItem("gem", this.gem.string);
            cc.sys.localStorage.setItem(item, true);
            this.setUserStats();
        }
    };
    __decorate([
        property(cc.AudioClip)
    ], Shop.prototype, "bgm", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Shop.prototype, "click", void 0);
    __decorate([
        property(cc.Label)
    ], Shop.prototype, "coin", void 0);
    __decorate([
        property(cc.Label)
    ], Shop.prototype, "gem", void 0);
    __decorate([
        property(cc.Button)
    ], Shop.prototype, "back", void 0);
    __decorate([
        property(cc.Node)
    ], Shop.prototype, "characters", void 0);
    __decorate([
        property(cc.Node)
    ], Shop.prototype, "weapons", void 0);
    __decorate([
        property(cc.Node)
    ], Shop.prototype, "maps", void 0);
    __decorate([
        property(cc.Button)
    ], Shop.prototype, "char1btn", void 0);
    __decorate([
        property(cc.Button)
    ], Shop.prototype, "char2btn", void 0);
    __decorate([
        property(cc.Button)
    ], Shop.prototype, "char3btn", void 0);
    __decorate([
        property(cc.Button)
    ], Shop.prototype, "char4btn", void 0);
    __decorate([
        property(cc.Button)
    ], Shop.prototype, "AKbtn", void 0);
    __decorate([
        property(cc.Button)
    ], Shop.prototype, "ARbtn", void 0);
    __decorate([
        property(cc.Button)
    ], Shop.prototype, "grenadebtn", void 0);
    __decorate([
        property(cc.Button)
    ], Shop.prototype, "shotgunbtn", void 0);
    __decorate([
        property(cc.Button)
    ], Shop.prototype, "sniperbtn", void 0);
    Shop = __decorate([
        ccclass
    ], Shop);
    return Shop;
}(cc.Component));
exports.default = Shop;

cc._RF.pop();