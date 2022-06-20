"use strict";
cc._RF.push(module, 'cff5fpUDuZEtoxJXIiDrgz5', 'Win');
// scripts/Win.ts

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
var Win = /** @class */ (function (_super) {
    __extends(Win, _super);
    function Win() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.playername = null;
        _this.playerimage = null;
        _this.winnerScore = null;
        _this.winnerGem = null;
        _this.winnerCoin = null;
        _this.GameManager = null;
        _this.UI = null;
        _this.char1 = null;
        _this.char2 = null;
        _this.char3 = null;
        _this.char4 = null;
        _this.gameover = false;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    Win.prototype.start = function () {
    };
    Win.prototype.update = function (dt) {
        if (!this.gameover) {
            if (cc.find("Canvas/Game Manager").getComponent("GameManager").getWin()) {
                this.gameover = true;
                this.playername.getComponent(cc.Label).string = cc.find("Canvas/Main Camera/UI/Profile/name").getComponent(cc.Label).string;
                this.winnerScore.string = cc.find("Canvas/Main Camera/UI").getComponent("UI").scoreLabel.string;
                this.winnerCoin.string = cc.find("Canvas/Main Camera/UI").getComponent("UI").coinLabel.string;
                this.winnerGem.string = cc.find("Canvas/Main Camera/UI").getComponent("UI").gemLabel.string;
                if (cc.find("Canvas/Main Camera/UI/Profile/face0").active) {
                    this.playerimage.getComponent(cc.Sprite).spriteFrame = this.char1;
                    //cc.find("Canvas/Main Camera/UI/Profile/face0").active = false;
                }
                if (cc.find("Canvas/Main Camera/UI/Profile/face1").active) {
                    this.playerimage.getComponent(cc.Sprite).spriteFrame = this.char2;
                    //cc.find("Canvas/Main Camera/UI/Profile/face1").active = false;
                }
                if (cc.find("Canvas/Main Camera/UI/Profile/face2").active) {
                    this.playerimage.getComponent(cc.Sprite).spriteFrame = this.char3;
                    //cc.find("Canvas/Main Camera/UI/Profile/face2").active = false;
                }
                if (cc.find("Canvas/Main Camera/UI/Profile/face3").active) {
                    this.playerimage.getComponent(cc.Sprite).spriteFrame = this.char4;
                    //cc.find("Canvas/Main Camera/UI/Profile/face3").active = false;
                }
                cc.find("Canvas/Main Camera/UI/Timer").active = false;
                cc.find("Canvas/Main Camera/UI/Record").active = false;
                cc.find("Canvas/Main Camera/UI/WeaponUi").active = false;
                cc.find("Canvas/Main Camera/UI/Profile").active = false;
                var action = cc.sequence(cc.fadeIn(2), cc.fadeOut(2));
                this.node.runAction(action);
            }
        }
        else {
            this.scheduleOnce(function () {
                cc.director.loadScene("ending");
            }, 6);
        }
    };
    __decorate([
        property(cc.Label)
    ], Win.prototype, "playername", void 0);
    __decorate([
        property(cc.Node)
    ], Win.prototype, "playerimage", void 0);
    __decorate([
        property(cc.Label)
    ], Win.prototype, "winnerScore", void 0);
    __decorate([
        property(cc.Label)
    ], Win.prototype, "winnerGem", void 0);
    __decorate([
        property(cc.Label)
    ], Win.prototype, "winnerCoin", void 0);
    __decorate([
        property(cc.Node)
    ], Win.prototype, "GameManager", void 0);
    __decorate([
        property(cc.Node)
    ], Win.prototype, "UI", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], Win.prototype, "char1", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], Win.prototype, "char2", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], Win.prototype, "char3", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], Win.prototype, "char4", void 0);
    Win = __decorate([
        ccclass
    ], Win);
    return Win;
}(cc.Component));
exports.default = Win;

cc._RF.pop();