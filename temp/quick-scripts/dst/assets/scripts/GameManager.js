
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
        _this.weaponSprite0 = null;
        _this.weaponSprite1 = null;
        _this.weaponSprite2 = null;
        _this.weaponSprite3 = null;
        _this.weaponSprite4 = null;
        _this.cameraSpeed = 300;
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
        _this.cameraAnchor = 0;
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
            if (this.cameraAnchor == 1 || this.cameraAnchor == -1) {
                cameraPos.x += this.cameraAnchor * this.cameraSpeed * dt;
                // console.log(this.cameraAnchor, "update");
            }
            else {
                cameraPos.lerp(playerPos, 0.1, cameraPos);
                cameraPos.y = cc.misc.clampf(playerPos.y, 0, 200);
            }
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
            // if(this.background){
            //     this.background.setPosition(cameraPos.x < prevCamPos.x ? 
            //         ((cameraPos.x - prevCamPos.x)/3 + this.background.x) : 
            //         (this.background.x - (prevCamPos.x - cameraPos.x)/3), 
            //         cameraPos.y < prevCamPos.y ? 
            //         ((cameraPos.y - prevCamPos.y)/3 + this.background.y) :
            //         (this.background.y - (prevCamPos.y - cameraPos.y)/3));
            // }
            if (this.UI.timerVal < 0 || this.player.isDie) {
                this.UI.timerVal = 20;
                this.changePlayer(this.currPlayer + 1);
            }
            this.isWin();
            this.updateWeaponUi();
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
                if (this.player.gunType == "normal") {
                    this.player.line.getComponent("TrajectoryLine").drawStraightLine(this.shootAngle, 300); // draw trajectory line
                }
                else if (this.player.gunType == "burst") {
                    this.player.line.getComponent("TrajectoryLine").drawStraightLine(this.shootAngle, 200); // draw trajectory line
                }
                else if (this.player.gunType == "shotgun") {
                    this.player.line.getComponent("TrajectoryLine").drawStraightLine(this.shootAngle, 100); // draw trajectory line
                }
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
    GameManager.prototype.setCameraAnchor = function (value) {
        this.cameraAnchor = value;
    };
    GameManager.prototype.updateWeaponUi = function () {
        // var weaponSprite = cc.find("Canvas/Main Camera/WeaponUi").getChildByName("Sprite").getComponent(cc.Sprite).spriteFrame;
        if (this.player) {
            switch (this.player.getCurrWeaponNum()) {
                case "0":
                    cc.find("Canvas/Main Camera/WeaponUi").getChildByName("Sprite").getComponent(cc.Sprite).spriteFrame = this.weaponSprite0;
                    // console.log(weaponSprite, "updateweaponUi");
                    break;
                case "1":
                    cc.find("Canvas/Main Camera/WeaponUi").getChildByName("Sprite").getComponent(cc.Sprite).spriteFrame = this.weaponSprite1;
                    break;
                case "2":
                    cc.find("Canvas/Main Camera/WeaponUi").getChildByName("Sprite").getComponent(cc.Sprite).spriteFrame = this.weaponSprite2;
                    break;
                case "3":
                    cc.find("Canvas/Main Camera/WeaponUi").getChildByName("Sprite").getComponent(cc.Sprite).spriteFrame = this.weaponSprite3;
                    break;
                case "4":
                    cc.find("Canvas/Main Camera/WeaponUi").getChildByName("Sprite").getComponent(cc.Sprite).spriteFrame = this.weaponSprite4;
                    break;
                default:
                    cc.find("Canvas/Main Camera/WeaponUi").getChildByName("Sprite").getComponent(cc.Sprite).spriteFrame = this.weaponSprite3;
                    break;
            }
        }
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
    __decorate([
        property(cc.SpriteFrame)
    ], GameManager.prototype, "weaponSprite0", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], GameManager.prototype, "weaponSprite1", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], GameManager.prototype, "weaponSprite2", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], GameManager.prototype, "weaponSprite3", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], GameManager.prototype, "weaponSprite4", void 0);
    __decorate([
        property()
    ], GameManager.prototype, "cameraSpeed", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcR2FtZU1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUNBQTZCO0FBQzdCLDJCQUFxQjtBQUVmLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXlDLCtCQUFZO0lBQXJEO1FBQUEscUVBa2FDO1FBL1pHLGFBQU8sR0FBVyxJQUFJLENBQUM7UUFHdkIsYUFBTyxHQUFXLElBQUksQ0FBQztRQUd2QixhQUFPLEdBQVcsSUFBSSxDQUFDO1FBR3ZCLGFBQU8sR0FBVyxJQUFJLENBQUM7UUFHdkIsUUFBRSxHQUFPLElBQUksQ0FBQztRQUdkLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFHdkIsU0FBRyxHQUFpQixJQUFJLENBQUM7UUFHekIsZ0JBQVUsR0FBWSxJQUFJLENBQUE7UUFHbEIsbUJBQWEsR0FBbUIsSUFBSSxDQUFDO1FBR3JDLG1CQUFhLEdBQW1CLElBQUksQ0FBQztRQUdyQyxtQkFBYSxHQUFtQixJQUFJLENBQUM7UUFHckMsbUJBQWEsR0FBbUIsSUFBSSxDQUFDO1FBR3JDLG1CQUFhLEdBQW1CLElBQUksQ0FBQztRQUc3QyxpQkFBVyxHQUFXLEdBQUcsQ0FBQztRQUVsQixZQUFNLEdBQUcsSUFBSSxDQUFDO1FBRWQsY0FBUSxHQUFZLEtBQUssQ0FBQztRQUUxQixjQUFRLEdBQVksS0FBSyxDQUFDO1FBRTFCLFdBQUssR0FBWSxLQUFLLENBQUM7UUFJdkIsaUJBQVcsR0FBVyxDQUFDLENBQUM7UUFFeEIsaUJBQVcsR0FBRyxJQUFJLENBQUM7UUFFbkIsZ0JBQVUsR0FBRyxJQUFJLENBQUM7UUFFbEIsZUFBUyxHQUFHLElBQUksQ0FBQztRQUV6QixnQ0FBZ0M7UUFFeEIsY0FBUSxHQUFZLEtBQUssQ0FBQztRQUUxQixnQkFBVSxHQUFXLGlCQUFpQixDQUFD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QUFDO3NEQUNvQjtJQUc3QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO3NEQUNvQjtJQUc3QztRQURDLFFBQVEsRUFBRTtvREFDZTtJQTFDVCxXQUFXO1FBRC9CLE9BQU87T0FDYSxXQUFXLENBa2EvQjtJQUFELGtCQUFDO0NBbGFELEFBa2FDLENBbGF3QyxFQUFFLENBQUMsU0FBUyxHQWthcEQ7a0JBbGFvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBsYXllciBmcm9tIFwiLi9QbGF5ZXJcIlxyXG5pbXBvcnQgVUkgZnJvbSBcIi4vVUlcIlxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lTWFuYWdlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KFBsYXllcilcclxuICAgIHBsYXllcjE6IFBsYXllciA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KFBsYXllcilcclxuICAgIHBsYXllcjI6IFBsYXllciA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KFBsYXllcilcclxuICAgIHBsYXllcjM6IFBsYXllciA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KFBsYXllcilcclxuICAgIHBsYXllcjQ6IFBsYXllciA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KFVJKVxyXG4gICAgVUk6IFVJID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGNhbWVyYTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIGJnbTogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJhY2tncm91bmQ6IGNjLk5vZGUgPSBudWxsXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxyXG4gICAgcHJpdmF0ZSB3ZWFwb25TcHJpdGUwOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XHJcbiAgICBcclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcclxuICAgIHByaXZhdGUgd2VhcG9uU3ByaXRlMTogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xyXG4gICAgXHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXHJcbiAgICBwcml2YXRlIHdlYXBvblNwcml0ZTI6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXHJcbiAgICBwcml2YXRlIHdlYXBvblNwcml0ZTM6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXHJcbiAgICBwcml2YXRlIHdlYXBvblNwcml0ZTQ6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoKVxyXG4gICAgY2FtZXJhU3BlZWQ6IG51bWJlciA9IDMwMDtcclxuXHJcbiAgICBwcml2YXRlIHBsYXllciA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBhS2V5RG93bjogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHByaXZhdGUgZEtleURvd246IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBwcml2YXRlIHNob290OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgcHJpdmF0ZSBjdXJyUGxheWVyOiBudW1iZXI7XHJcblxyXG4gICAgcHJpdmF0ZSB0b3RhbFBsYXllcjogbnVtYmVyID0gMjtcclxuXHJcbiAgICBwcml2YXRlIGFsaXZlUGxheWVyID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIHNob290QW5nbGUgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgcGxheWVyTnVtID0gbnVsbDtcclxuXHJcbiAgICAvLyBwcml2YXRlIGN1cnJQbGF5ZXJQb3MgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgaXNQYXVzZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBwcml2YXRlIHBsYXllclBhdGg6IHN0cmluZyA9IFwiQ2FudmFzL1BsYXllcnMvXCI7XHJcblxyXG4gICAgcHJpdmF0ZSB3aW5uZXI7XHJcblxyXG4gICAgcHJpdmF0ZSBjYW1lcmFBbmNob3I6IG51bWJlciA9IDA7XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCkuZ3Jhdml0eSA9IGNjLnYyKDAsIC05ODApO1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTiwgdGhpcy5vbktleURvd24sIHRoaXMpO1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfVVAsIHRoaXMub25LZXlVcCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJOdW0gPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJQbGF5ZXJOdW1cIik7XHJcbiAgICAgICAgdGhpcy5hbGl2ZVBsYXllciA9IHRoaXMudG90YWxQbGF5ZXI7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICAvL3RoaXMucGxheUJHTSgpO1xyXG4gICAgICAgIHRoaXMubG9hZFBsYXllcigpO1xyXG4gICAgICAgIHRoaXMuY2hhbmdlUGxheWVyKDApO1xyXG4gICAgICAgIHRoaXMuaW5pdFJlc3VtZUJ0bigpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgICAgICBpZih0aGlzLndpbm5lciA9PSBudWxsKXtcclxuICAgICAgICAgICAgdmFyIHBsYXllclBvcyA9IHRoaXMucGxheWVyLm5vZGUuZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICAgICAgdmFyIGNhbWVyYVBvcyA9IHRoaXMuY2FtZXJhLmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgICAgIHZhciBwcmV2Q2FtUG9zID0gdGhpcy5jYW1lcmEuZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICAgICAgaWYodGhpcy5jYW1lcmFBbmNob3IgPT0gMSB8fCB0aGlzLmNhbWVyYUFuY2hvciA9PSAtMSl7XHJcbiAgICAgICAgICAgICAgICBjYW1lcmFQb3MueCArPSB0aGlzLmNhbWVyYUFuY2hvciAqIHRoaXMuY2FtZXJhU3BlZWQgKiBkdDtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuY2FtZXJhQW5jaG9yLCBcInVwZGF0ZVwiKTtcclxuICAgICAgICAgICAgfSBlbHNle1xyXG4gICAgICAgICAgICAgICAgY2FtZXJhUG9zLmxlcnAocGxheWVyUG9zLCAwLjEsIGNhbWVyYVBvcyk7XHJcbiAgICAgICAgICAgICAgICBjYW1lcmFQb3MueSA9IGNjLm1pc2MuY2xhbXBmKHBsYXllclBvcy55LCAwLCAyMDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKGNhbWVyYVBvcy55ID4gMTAwKXtcclxuICAgICAgICAgICAgICAgIGNhbWVyYVBvcy55ID0gMTAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKGNhbWVyYVBvcy54IDwgLTM1KSB7XHJcbiAgICAgICAgICAgICAgICBjYW1lcmFQb3MueCA9IC0zNTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmKGNhbWVyYVBvcy54ID4gMjAzMyszNSkge1xyXG4gICAgICAgICAgICAgICAgY2FtZXJhUG9zLnggPSAyMDMzKzM1O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuY2FtZXJhLnNldFBvc2l0aW9uKGNhbWVyYVBvcyk7XHJcbiAgICAgICAgICAgIC8vIGlmKHRoaXMuYmFja2dyb3VuZCl7XHJcbiAgICAgICAgICAgIC8vICAgICB0aGlzLmJhY2tncm91bmQuc2V0UG9zaXRpb24oY2FtZXJhUG9zLnggPCBwcmV2Q2FtUG9zLnggPyBcclxuICAgICAgICAgICAgLy8gICAgICAgICAoKGNhbWVyYVBvcy54IC0gcHJldkNhbVBvcy54KS8zICsgdGhpcy5iYWNrZ3JvdW5kLngpIDogXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgKHRoaXMuYmFja2dyb3VuZC54IC0gKHByZXZDYW1Qb3MueCAtIGNhbWVyYVBvcy54KS8zKSwgXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgY2FtZXJhUG9zLnkgPCBwcmV2Q2FtUG9zLnkgPyBcclxuICAgICAgICAgICAgLy8gICAgICAgICAoKGNhbWVyYVBvcy55IC0gcHJldkNhbVBvcy55KS8zICsgdGhpcy5iYWNrZ3JvdW5kLnkpIDpcclxuICAgICAgICAgICAgLy8gICAgICAgICAodGhpcy5iYWNrZ3JvdW5kLnkgLSAocHJldkNhbVBvcy55IC0gY2FtZXJhUG9zLnkpLzMpKTtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICBpZih0aGlzLlVJLnRpbWVyVmFsIDwgMCB8fCB0aGlzLnBsYXllci5pc0RpZSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlVJLnRpbWVyVmFsID0gMjA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVBsYXllcih0aGlzLmN1cnJQbGF5ZXIgKyAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmlzV2luKCk7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlV2VhcG9uVWkoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZFBsYXllcigpIHtcclxuICAgICAgICB0aGlzLnRvdGFsUGxheWVyID0gcGFyc2VJbnQodGhpcy5wbGF5ZXJOdW0pO1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy50b3RhbFBsYXllcikge1xyXG4gICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICBjYy5maW5kKHRoaXMucGxheWVyUGF0aCArIFwiUGxheWVyIDRcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgY2MuZmluZCh0aGlzLnBsYXllclBhdGggKyBcIlBsYXllciAzXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgIGNjLmZpbmQodGhpcy5wbGF5ZXJQYXRoICsgXCJQbGF5ZXIgMlwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgY2MuZmluZCh0aGlzLnBsYXllclBhdGggKyBcIlBsYXllciAxXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpc1dpbigpe1xyXG4gICAgICAgIGxldCBhbGl2ZSA9IHRoaXMudG90YWxQbGF5ZXI7XHJcbiAgICAgICAgaWYgKHRoaXMudG90YWxQbGF5ZXIgPT0gMil7XHJcbiAgICAgICAgICAgIGlmKHRoaXMucGxheWVyMS5pc0RpZSlcclxuICAgICAgICAgICAgICAgIGFsaXZlLS07XHJcbiAgICAgICAgICAgIGlmKHRoaXMucGxheWVyMi5pc0RpZSlcclxuICAgICAgICAgICAgICAgIGFsaXZlLS07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMudG90YWxQbGF5ZXIgPT0gMyl7XHJcbiAgICAgICAgICAgIGlmKHRoaXMucGxheWVyMS5pc0RpZSlcclxuICAgICAgICAgICAgICAgIGFsaXZlLS07XHJcbiAgICAgICAgICAgIGlmKHRoaXMucGxheWVyMi5pc0RpZSlcclxuICAgICAgICAgICAgICAgIGFsaXZlLS07XHJcbiAgICAgICAgICAgIGlmKHRoaXMucGxheWVyMy5pc0RpZSlcclxuICAgICAgICAgICAgICAgIGFsaXZlLS07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMudG90YWxQbGF5ZXIgPT0gNCl7XHJcbiAgICAgICAgICAgIGlmKHRoaXMucGxheWVyMS5pc0RpZSlcclxuICAgICAgICAgICAgICAgIGFsaXZlLS07XHJcbiAgICAgICAgICAgIGlmKHRoaXMucGxheWVyMi5pc0RpZSlcclxuICAgICAgICAgICAgICAgIGFsaXZlLS07XHJcbiAgICAgICAgICAgIGlmKHRoaXMucGxheWVyMy5pc0RpZSlcclxuICAgICAgICAgICAgICAgIGFsaXZlLS07XHJcbiAgICAgICAgICAgIGlmKHRoaXMucGxheWVyNC5pc0RpZSlcclxuICAgICAgICAgICAgICAgIGFsaXZlLS07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYWxpdmVQbGF5ZXIgPSBhbGl2ZTtcclxuICAgICAgICBpZiAodGhpcy5hbGl2ZVBsYXllciA9PSAxKXtcclxuICAgICAgICAgICAgdGhpcy53aW5uZXIgPSB0aGlzLnBsYXllci5wbGF5ZXJOYW1lLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLndpbm5lcik7XHJcbiAgICAgICAgICAgIC8vdGhpcy5VSS5wYXVzZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VQbGF5ZXIobnVtKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyUGxheWVyID0gbnVtICUgdGhpcy50b3RhbFBsYXllcjtcclxuICAgICAgICBpZigodGhpcy5wbGF5ZXIgJiYgIXRoaXMucGxheWVyLmlzRGllKSkge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllci5zZXRQbGF5ZXJNb3ZlRGlyZWN0aW9uKDApO1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllci5zZXRQbGF5ZXJKdW1wKGZhbHNlKTtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIubGluZS5nZXRDb21wb25lbnQoXCJUcmFqZWN0b3J5TGluZVwiKS5jbGVhckxpbmUoKTtcclxuICAgICAgICAgICAgdGhpcy5vbkRpc2FibGUoKTtcclxuICAgICAgICB9IFxyXG4gICAgICAgIHN3aXRjaCAodGhpcy5jdXJyUGxheWVyKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyID0gdGhpcy5wbGF5ZXIxO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyID0gdGhpcy5wbGF5ZXIyO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyID0gdGhpcy5wbGF5ZXIzO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoIXRoaXMucGxheWVyLmlzRGllKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25FbmFibGUoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmNoYW5nZVBsYXllcihudW0rMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHBsYXlCR00oKSB7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheU11c2ljKHRoaXMuYmdtLCB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25FbmFibGUoKTogdm9pZCB7XHJcbiAgICAgICAgaWYodGhpcy5wbGF5ZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vbkV2ZW50U3RhcnQsIHRoaXMpOyAgICAvLyB0b3VjaGVkXHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy5vbkV2ZW50TW92ZSwgdGhpcyk7ICAgICAgLy8gYWltXHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCB0aGlzLm9uRXZlbnRDYW5jZWwsIHRoaXMpOyAgLy8gc2hvb3RcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25FdmVudEVuZCwgdGhpcyk7ICAgICAgICAvLyBjYW5jZWwgc2hvb3RcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uRGlzYWJsZSgpOiB2b2lkIHtcclxuICAgICAgICBpZih0aGlzLnBsYXllcikge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllci5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vbkV2ZW50U3RhcnQsIHRoaXMpOyAgIC8vIHRvdWNoZWRcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy5vbkV2ZW50TW92ZSwgdGhpcyk7ICAgICAvLyBhaW1cclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCB0aGlzLm9uRXZlbnRDYW5jZWwsIHRoaXMpOyAvLyBzaG9vdFxyXG4gICAgICAgICAgICB0aGlzLnBsYXllci5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vbkV2ZW50RW5kLCB0aGlzKTsgICAgICAgIC8vIGNhbmNlbCBzaG9vdFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbktleURvd24oZSkge1xyXG4gICAgICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmE6ICAgICAgICAvLyBtb3ZlIGxlZnRcclxuICAgICAgICAgICAgICAgIHRoaXMuYUtleURvd24gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIuc2V0UGxheWVyTW92ZURpcmVjdGlvbigtMSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuZDogICAgICAgIC8vIG1vdmUgcmlnaHRcclxuICAgICAgICAgICAgICAgIHRoaXMuZEtleURvd24gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIuc2V0UGxheWVyTW92ZURpcmVjdGlvbigxKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5zcGFjZTogICAgLy8ganVtcFxyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIuc2V0UGxheWVySnVtcCh0cnVlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5lc2NhcGU6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhdXNlR2FtZSgpO1xyXG4gICAgICAgICAgICAgICAgLy90aGlzLlVJLnBhdXNlKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkucDogICAgICAgIC8vIHBhc3NcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlUGxheWVyKHRoaXMuY3VyclBsYXllciArIDEpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5VSS50aW1lclZhbCA9IDIwO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25LZXlVcChlKSB7XHJcbiAgICAgICAgc3dpdGNoIChlLmtleUNvZGUpIHtcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuYTpcclxuICAgICAgICAgICAgICAgIHRoaXMuYUtleURvd24gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuZEtleURvd24pIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5zZXRQbGF5ZXJNb3ZlRGlyZWN0aW9uKDEpOyAgLy8gbW92ZSByaWdodFxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5zZXRQbGF5ZXJNb3ZlRGlyZWN0aW9uKDApOyAgLy8gc3RvcCBtb3ZpbmdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5kOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5kS2V5RG93biA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5hS2V5RG93bikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLnNldFBsYXllck1vdmVEaXJlY3Rpb24oLTEpOyAvLyBtb3ZlIGxlZnRcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIuc2V0UGxheWVyTW92ZURpcmVjdGlvbigwKTsgIC8vIHN0b3AgbW92aW5nXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuc3BhY2U6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5zZXRQbGF5ZXJKdW1wKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5mOiAgICAgICAgLy8gc2hvb3QgKGJ1bGxldCkgICAgXHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllci53ZWFwb24gPSBcImd1blwiO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnI6ICAgICAgICAvLyBib21iXHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllci53ZWFwb24gPSBcImJvbWJcIlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25FdmVudFN0YXJ0IChldmVudCkgeyAgLy8gdG91Y2hlZFxyXG4gICAgICAgIGlmICghdGhpcy5lbmFibGVkSW5IaWVyYXJjaHkpIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYoIXRoaXMuc2hvb3QpIHtcclxuICAgICAgICAgICAgLy8gdGhpcy5zdGFydFBvcyA9IHRoaXMubm9kZS5wb3NpdGlvbjtcclxuICAgICAgICAgICAgLy8gdGhpcy5tb3RvckpvaW50LmVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgLy8gdGhpcy5yYi5ncmF2aXR5U2NhbGUgPSAwO1xyXG4gICAgICAgICAgICAvLyB0aGlzLnJiLmxpbmVhclZlbG9jaXR5ID0gY2MuVmVjMi5aRVJPO1xyXG4gICAgICAgICAgICAvLyB0aGlzLnJiLmFuZ3VsYXJWZWxvY2l0eSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBvbkV2ZW50TW92ZSAoZXZlbnQpIHsgICAvLyBhaW1cclxuICAgICAgICBpZiAoIXRoaXMuZW5hYmxlZEluSGllcmFyY2h5KSByZXR1cm47XHJcblxyXG4gICAgICAgIHZhciBwbGF5ZXJQb3MgPSBldmVudC5nZXRTdGFydExvY2F0aW9uKCk7XHJcbiAgICAgICAgdmFyIG1vdXNlUG9zID0gZXZlbnQuZ2V0TG9jYXRpb24oKTtcclxuICAgICAgICB2YXIgZGlmZlggPSBtb3VzZVBvcy54IC0gcGxheWVyUG9zLng7XHJcbiAgICAgICAgdmFyIGRpZmZZID0gcGxheWVyUG9zLnkgLSBtb3VzZVBvcy55O1xyXG4gICAgICAgIHRoaXMuc2hvb3RBbmdsZSA9IE1hdGguYXRhbjIoTWF0aC5hYnMoZGlmZlkpLCBNYXRoLmFicyhkaWZmWCkpOyAvLyBhbmdsZSBpbiByYWRpYW5cclxuICAgICAgICBpZihkaWZmWCA+PSAwKSB7ICAgIC8vIGNoYW5nZSBwbGF5ZXIgZGlyZWN0aW9uXHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyLnNldFBsYXllckNoYW5nZURpcmVjdGlvbigtMSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIuc2V0UGxheWVyQ2hhbmdlRGlyZWN0aW9uKDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihkaWZmWSA8IDApIHtcclxuICAgICAgICAgICAgdGhpcy5zaG9vdEFuZ2xlICo9IC0xO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZighdGhpcy5zaG9vdCl7XHJcbiAgICAgICAgICAgIGlmKHRoaXMucGxheWVyLndlYXBvbiA9PSBcImd1blwiKSB7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLnBsYXllci5ndW5UeXBlID09IFwibm9ybWFsXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5saW5lLmdldENvbXBvbmVudChcIlRyYWplY3RvcnlMaW5lXCIpLmRyYXdTdHJhaWdodExpbmUodGhpcy5zaG9vdEFuZ2xlLCAzMDApOyAvLyBkcmF3IHRyYWplY3RvcnkgbGluZVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKHRoaXMucGxheWVyLmd1blR5cGUgPT0gXCJidXJzdFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIubGluZS5nZXRDb21wb25lbnQoXCJUcmFqZWN0b3J5TGluZVwiKS5kcmF3U3RyYWlnaHRMaW5lKHRoaXMuc2hvb3RBbmdsZSwgMjAwKTsgLy8gZHJhdyB0cmFqZWN0b3J5IGxpbmVcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZih0aGlzLnBsYXllci5ndW5UeXBlID09IFwic2hvdGd1blwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIubGluZS5nZXRDb21wb25lbnQoXCJUcmFqZWN0b3J5TGluZVwiKS5kcmF3U3RyYWlnaHRMaW5lKHRoaXMuc2hvb3RBbmdsZSwgMTAwKTsgLy8gZHJhdyB0cmFqZWN0b3J5IGxpbmVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmKHRoaXMucGxheWVyLndlYXBvbiA9PSBcImJvbWJcIikge1xyXG4gICAgICAgICAgICAgICAgbGV0IHBvd2VyID0gKE1hdGguYWJzKGRpZmZZKSA+PSBNYXRoLmFicyhkaWZmWCkgPyBNYXRoLmFicyhkaWZmWSkgOiBNYXRoLmFicyhkaWZmWCkpIFxyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIubGluZS5nZXRDb21wb25lbnQoXCJUcmFqZWN0b3J5TGluZVwiKS5kcmF3Q3VydmVMaW5lKHRoaXMuc2hvb3RBbmdsZSwgcG93ZXIqMik7IC8vIGRyYXcgYXJyb3dcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLnBvd2VyID0gKHBvd2VyICogMiA+IDEwMCkgPyAxMDAgOiBwb3dlciAqIDI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRXZlbnRDYW5jZWwgKGV2ZW50KSB7IC8vIHNob290XHJcbiAgICAgICAgaWYgKCF0aGlzLmVuYWJsZWRJbkhpZXJhcmNoeSkgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLmhhdmVTaG90KCk7XHJcbiAgICBcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgb25FdmVudEVuZCAoZXZlbnQpIHsgIC8vIGNhbmNlbCBzaG9vdFxyXG4gICAgICAgIGlmICghdGhpcy5lbmFibGVkSW5IaWVyYXJjaHkpIHJldHVybjtcclxuICAgIFxyXG4gICAgICAgIHRoaXMuaGF2ZVNob3QoKTtcclxuICAgIFxyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhdmVTaG90KCkge1xyXG4gICAgICAgIGlmKHRoaXMuc2hvb3QpIHJldHVybjtcclxuICAgICAgICB0aGlzLnBsYXllci5saW5lLmdldENvbXBvbmVudChcIlRyYWplY3RvcnlMaW5lXCIpLmNsZWFyTGluZSgpO1xyXG4gICAgICAgIC8vIHRoaXMuc2hvb3QgPSB0cnVlO1xyXG4gICAgICAgIGlmKHRoaXMucGxheWVyLndlYXBvbiA9PSBcImd1blwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyLnNldFBsYXllclNob290KHRoaXMuc2hvb3RBbmdsZSk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnBsYXllci53ZWFwb24gPT0gXCJib21iXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIuc2V0UGxheWVyQm9tYih0aGlzLnNob290QW5nbGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnBsYXllci5zZXRQbGF5ZXJDaGFuZ2VEaXJlY3Rpb24oMCk7XHJcbiAgICB9XHJcblxyXG4gICAgcGF1c2VHYW1lKCkge1xyXG4gICAgICAgIGlmKGNjLmRpcmVjdG9yLmlzUGF1c2VkKCkpIHtcclxuICAgICAgICAgICAgY2MuZGlyZWN0b3IucmVzdW1lKCk7XHJcbiAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXMvTWFpbiBDYW1lcmEvUGF1c2UgTWVudVwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLnBhdXNlKCk7XHJcbiAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXMvTWFpbiBDYW1lcmEvUGF1c2UgTWVudVwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBQYXVzZSBNZW51IEJ1dHRvbnNcclxuXHJcbiAgICBpbml0UmVzdW1lQnRuKCkge1xyXG4gICAgICAgIGxldCBjbGlja0V2ZW50SGFuZGxlciA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgY2xpY2tFdmVudEhhbmRsZXIudGFyZ2V0ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIGNsaWNrRXZlbnRIYW5kbGVyLmNvbXBvbmVudCA9IFwiR2FtZU1hbmFnZXJcIjtcclxuICAgICAgICBjbGlja0V2ZW50SGFuZGxlci5oYW5kbGVyID0gXCJyZXN1bWVcIjtcclxuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL01haW4gQ2FtZXJhL1BhdXNlIE1lbnUvQmlnIExheW91dC9yZXN1bWVCdG5cIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuY2xpY2tFdmVudHMucHVzaChjbGlja0V2ZW50SGFuZGxlcik7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzdW1lKCkge1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLnJlc3VtZSgpO1xyXG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvTWFpbiBDYW1lcmEvUGF1c2UgTWVudVwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRDYW1lcmFBbmNob3IodmFsdWUpe1xyXG4gICAgICAgIHRoaXMuY2FtZXJhQW5jaG9yID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlV2VhcG9uVWkoKXtcclxuICAgICAgICAvLyB2YXIgd2VhcG9uU3ByaXRlID0gY2MuZmluZChcIkNhbnZhcy9NYWluIENhbWVyYS9XZWFwb25VaVwiKS5nZXRDaGlsZEJ5TmFtZShcIlNwcml0ZVwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZTtcclxuICAgICAgICBpZih0aGlzLnBsYXllcil7XHJcbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy5wbGF5ZXIuZ2V0Q3VycldlYXBvbk51bSgpKXtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCIwXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhcy9NYWluIENhbWVyYS9XZWFwb25VaVwiKS5nZXRDaGlsZEJ5TmFtZShcIlNwcml0ZVwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMud2VhcG9uU3ByaXRlMDtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh3ZWFwb25TcHJpdGUsIFwidXBkYXRld2VhcG9uVWlcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiMVwiOlxyXG4gICAgICAgICAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXMvTWFpbiBDYW1lcmEvV2VhcG9uVWlcIikuZ2V0Q2hpbGRCeU5hbWUoXCJTcHJpdGVcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLndlYXBvblNwcml0ZTE7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiMlwiOlxyXG4gICAgICAgICAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXMvTWFpbiBDYW1lcmEvV2VhcG9uVWlcIikuZ2V0Q2hpbGRCeU5hbWUoXCJTcHJpdGVcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLndlYXBvblNwcml0ZTI7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiM1wiOlxyXG4gICAgICAgICAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXMvTWFpbiBDYW1lcmEvV2VhcG9uVWlcIikuZ2V0Q2hpbGRCeU5hbWUoXCJTcHJpdGVcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLndlYXBvblNwcml0ZTM7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiNFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXMvTWFpbiBDYW1lcmEvV2VhcG9uVWlcIikuZ2V0Q2hpbGRCeU5hbWUoXCJTcHJpdGVcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLndlYXBvblNwcml0ZTQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXMvTWFpbiBDYW1lcmEvV2VhcG9uVWlcIikuZ2V0Q2hpbGRCeU5hbWUoXCJTcHJpdGVcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLndlYXBvblNwcml0ZTM7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19