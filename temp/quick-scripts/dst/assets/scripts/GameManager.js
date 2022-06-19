
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
                else if (this.player.gunType == "sniper") {
                    this.player.line.getComponent("TrajectoryLine").drawStraightLine(this.shootAngle, 400); // draw trajectory line
                }
                else if (this.player.gunType == "shotgun") {
                    this.player.line.getComponent("TrajectoryLine").drawCircle(this.shootAngle, 100); // draw trajectory line
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcR2FtZU1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUNBQTZCO0FBQzdCLDJCQUFxQjtBQUVmLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXlDLCtCQUFZO0lBQXJEO1FBQUEscUVBb2FDO1FBamFHLGFBQU8sR0FBVyxJQUFJLENBQUM7UUFHdkIsYUFBTyxHQUFXLElBQUksQ0FBQztRQUd2QixhQUFPLEdBQVcsSUFBSSxDQUFDO1FBR3ZCLGFBQU8sR0FBVyxJQUFJLENBQUM7UUFHdkIsUUFBRSxHQUFPLElBQUksQ0FBQztRQUdkLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFHdkIsU0FBRyxHQUFpQixJQUFJLENBQUM7UUFHekIsZ0JBQVUsR0FBWSxJQUFJLENBQUE7UUFHbEIsbUJBQWEsR0FBbUIsSUFBSSxDQUFDO1FBR3JDLG1CQUFhLEdBQW1CLElBQUksQ0FBQztRQUdyQyxtQkFBYSxHQUFtQixJQUFJLENBQUM7UUFHckMsbUJBQWEsR0FBbUIsSUFBSSxDQUFDO1FBR3JDLG1CQUFhLEdBQW1CLElBQUksQ0FBQztRQUc3QyxpQkFBVyxHQUFXLEdBQUcsQ0FBQztRQUVsQixZQUFNLEdBQUcsSUFBSSxDQUFDO1FBRWQsY0FBUSxHQUFZLEtBQUssQ0FBQztRQUUxQixjQUFRLEdBQVksS0FBSyxDQUFDO1FBRTFCLFdBQUssR0FBWSxLQUFLLENBQUM7UUFJdkIsaUJBQVcsR0FBVyxDQUFDLENBQUM7UUFFeEIsaUJBQVcsR0FBRyxJQUFJLENBQUM7UUFFbkIsZ0JBQVUsR0FBRyxJQUFJLENBQUM7UUFFbEIsZUFBUyxHQUFHLElBQUksQ0FBQztRQUV6QixnQ0FBZ0M7UUFFeEIsY0FBUSxHQUFZLEtBQUssQ0FBQztRQUUxQixnQkFBVSxHQUFXLGlCQUFpQixDQUFD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RzFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7c0RBQ29CO0lBRzdDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7c0RBQ29CO0lBRzdDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7c0RBQ29CO0lBRzdDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7c0RBQ29CO0lBRzdDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7c0RBQ29CO0lBRzdDO1FBREMsUUFBUSxFQUFFO29EQUNlO0lBMUNULFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0FvYS9CO0lBQUQsa0JBQUM7Q0FwYUQsQUFvYUMsQ0FwYXdDLEVBQUUsQ0FBQyxTQUFTLEdBb2FwRDtrQkFwYW9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGxheWVyIGZyb20gXCIuL1BsYXllclwiXHJcbmltcG9ydCBVSSBmcm9tIFwiLi9VSVwiXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVNYW5hZ2VyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoUGxheWVyKVxyXG4gICAgcGxheWVyMTogUGxheWVyID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoUGxheWVyKVxyXG4gICAgcGxheWVyMjogUGxheWVyID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoUGxheWVyKVxyXG4gICAgcGxheWVyMzogUGxheWVyID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoUGxheWVyKVxyXG4gICAgcGxheWVyNDogUGxheWVyID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoVUkpXHJcbiAgICBVSTogVUkgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgY2FtZXJhOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgYmdtOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYmFja2dyb3VuZDogY2MuTm9kZSA9IG51bGxcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXHJcbiAgICBwcml2YXRlIHdlYXBvblNwcml0ZTA6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcclxuICAgIFxyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxyXG4gICAgcHJpdmF0ZSB3ZWFwb25TcHJpdGUxOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XHJcbiAgICBcclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcclxuICAgIHByaXZhdGUgd2VhcG9uU3ByaXRlMjogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcclxuICAgIHByaXZhdGUgd2VhcG9uU3ByaXRlMzogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcclxuICAgIHByaXZhdGUgd2VhcG9uU3ByaXRlNDogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSgpXHJcbiAgICBjYW1lcmFTcGVlZDogbnVtYmVyID0gMzAwO1xyXG5cclxuICAgIHByaXZhdGUgcGxheWVyID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGFLZXlEb3duOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgcHJpdmF0ZSBkS2V5RG93bjogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHByaXZhdGUgc2hvb3Q6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBwcml2YXRlIGN1cnJQbGF5ZXI6IG51bWJlcjtcclxuXHJcbiAgICBwcml2YXRlIHRvdGFsUGxheWVyOiBudW1iZXIgPSAyO1xyXG5cclxuICAgIHByaXZhdGUgYWxpdmVQbGF5ZXIgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgc2hvb3RBbmdsZSA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBwbGF5ZXJOdW0gPSBudWxsO1xyXG5cclxuICAgIC8vIHByaXZhdGUgY3VyclBsYXllclBvcyA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBpc1BhdXNlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHByaXZhdGUgcGxheWVyUGF0aDogc3RyaW5nID0gXCJDYW52YXMvUGxheWVycy9cIjtcclxuXHJcbiAgICBwcml2YXRlIHdpbm5lcjtcclxuXHJcbiAgICBwcml2YXRlIGNhbWVyYUFuY2hvcjogbnVtYmVyID0gMDtcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCkuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKS5ncmF2aXR5ID0gY2MudjIoMCwgLTk4MCk7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLCB0aGlzLm9uS2V5RG93biwgdGhpcyk7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9VUCwgdGhpcy5vbktleVVwLCB0aGlzKTtcclxuICAgICAgICB0aGlzLnBsYXllck51bSA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlBsYXllck51bVwiKTtcclxuICAgICAgICB0aGlzLmFsaXZlUGxheWVyID0gdGhpcy50b3RhbFBsYXllcjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIC8vdGhpcy5wbGF5QkdNKCk7XHJcbiAgICAgICAgdGhpcy5sb2FkUGxheWVyKCk7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VQbGF5ZXIoMCk7XHJcbiAgICAgICAgdGhpcy5pbml0UmVzdW1lQnRuKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlIChkdCkge1xyXG4gICAgICAgIGlmKHRoaXMud2lubmVyID09IG51bGwpe1xyXG4gICAgICAgICAgICB2YXIgcGxheWVyUG9zID0gdGhpcy5wbGF5ZXIubm9kZS5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgICAgICB2YXIgY2FtZXJhUG9zID0gdGhpcy5jYW1lcmEuZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICAgICAgdmFyIHByZXZDYW1Qb3MgPSB0aGlzLmNhbWVyYS5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgICAgICBpZih0aGlzLmNhbWVyYUFuY2hvciA9PSAxIHx8IHRoaXMuY2FtZXJhQW5jaG9yID09IC0xKXtcclxuICAgICAgICAgICAgICAgIGNhbWVyYVBvcy54ICs9IHRoaXMuY2FtZXJhQW5jaG9yICogdGhpcy5jYW1lcmFTcGVlZCAqIGR0O1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5jYW1lcmFBbmNob3IsIFwidXBkYXRlXCIpO1xyXG4gICAgICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICAgICAgICBjYW1lcmFQb3MubGVycChwbGF5ZXJQb3MsIDAuMSwgY2FtZXJhUG9zKTtcclxuICAgICAgICAgICAgICAgIGNhbWVyYVBvcy55ID0gY2MubWlzYy5jbGFtcGYocGxheWVyUG9zLnksIDAsIDIwMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoY2FtZXJhUG9zLnkgPiAxMDApe1xyXG4gICAgICAgICAgICAgICAgY2FtZXJhUG9zLnkgPSAxMDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoY2FtZXJhUG9zLnggPCAtMzUpIHtcclxuICAgICAgICAgICAgICAgIGNhbWVyYVBvcy54ID0gLTM1O1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYoY2FtZXJhUG9zLnggPiAyMDMzKzM1KSB7XHJcbiAgICAgICAgICAgICAgICBjYW1lcmFQb3MueCA9IDIwMzMrMzU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5jYW1lcmEuc2V0UG9zaXRpb24oY2FtZXJhUG9zKTtcclxuICAgICAgICAgICAgLy8gaWYodGhpcy5iYWNrZ3JvdW5kKXtcclxuICAgICAgICAgICAgLy8gICAgIHRoaXMuYmFja2dyb3VuZC5zZXRQb3NpdGlvbihjYW1lcmFQb3MueCA8IHByZXZDYW1Qb3MueCA/IFxyXG4gICAgICAgICAgICAvLyAgICAgICAgICgoY2FtZXJhUG9zLnggLSBwcmV2Q2FtUG9zLngpLzMgKyB0aGlzLmJhY2tncm91bmQueCkgOiBcclxuICAgICAgICAgICAgLy8gICAgICAgICAodGhpcy5iYWNrZ3JvdW5kLnggLSAocHJldkNhbVBvcy54IC0gY2FtZXJhUG9zLngpLzMpLCBcclxuICAgICAgICAgICAgLy8gICAgICAgICBjYW1lcmFQb3MueSA8IHByZXZDYW1Qb3MueSA/IFxyXG4gICAgICAgICAgICAvLyAgICAgICAgICgoY2FtZXJhUG9zLnkgLSBwcmV2Q2FtUG9zLnkpLzMgKyB0aGlzLmJhY2tncm91bmQueSkgOlxyXG4gICAgICAgICAgICAvLyAgICAgICAgICh0aGlzLmJhY2tncm91bmQueSAtIChwcmV2Q2FtUG9zLnkgLSBjYW1lcmFQb3MueSkvMykpO1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIGlmKHRoaXMuVUkudGltZXJWYWwgPCAwIHx8IHRoaXMucGxheWVyLmlzRGllKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuVUkudGltZXJWYWwgPSAyMDtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlUGxheWVyKHRoaXMuY3VyclBsYXllciArIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuaXNXaW4oKTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVXZWFwb25VaSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsb2FkUGxheWVyKCkge1xyXG4gICAgICAgIHRoaXMudG90YWxQbGF5ZXIgPSBwYXJzZUludCh0aGlzLnBsYXllck51bSk7XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLnRvdGFsUGxheWVyKSB7XHJcbiAgICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgICAgIGNjLmZpbmQodGhpcy5wbGF5ZXJQYXRoICsgXCJQbGF5ZXIgNFwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICBjYy5maW5kKHRoaXMucGxheWVyUGF0aCArIFwiUGxheWVyIDNcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgY2MuZmluZCh0aGlzLnBsYXllclBhdGggKyBcIlBsYXllciAyXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBjYy5maW5kKHRoaXMucGxheWVyUGF0aCArIFwiUGxheWVyIDFcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlzV2luKCl7XHJcbiAgICAgICAgbGV0IGFsaXZlID0gdGhpcy50b3RhbFBsYXllcjtcclxuICAgICAgICBpZiAodGhpcy50b3RhbFBsYXllciA9PSAyKXtcclxuICAgICAgICAgICAgaWYodGhpcy5wbGF5ZXIxLmlzRGllKVxyXG4gICAgICAgICAgICAgICAgYWxpdmUtLTtcclxuICAgICAgICAgICAgaWYodGhpcy5wbGF5ZXIyLmlzRGllKVxyXG4gICAgICAgICAgICAgICAgYWxpdmUtLTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy50b3RhbFBsYXllciA9PSAzKXtcclxuICAgICAgICAgICAgaWYodGhpcy5wbGF5ZXIxLmlzRGllKVxyXG4gICAgICAgICAgICAgICAgYWxpdmUtLTtcclxuICAgICAgICAgICAgaWYodGhpcy5wbGF5ZXIyLmlzRGllKVxyXG4gICAgICAgICAgICAgICAgYWxpdmUtLTtcclxuICAgICAgICAgICAgaWYodGhpcy5wbGF5ZXIzLmlzRGllKVxyXG4gICAgICAgICAgICAgICAgYWxpdmUtLTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy50b3RhbFBsYXllciA9PSA0KXtcclxuICAgICAgICAgICAgaWYodGhpcy5wbGF5ZXIxLmlzRGllKVxyXG4gICAgICAgICAgICAgICAgYWxpdmUtLTtcclxuICAgICAgICAgICAgaWYodGhpcy5wbGF5ZXIyLmlzRGllKVxyXG4gICAgICAgICAgICAgICAgYWxpdmUtLTtcclxuICAgICAgICAgICAgaWYodGhpcy5wbGF5ZXIzLmlzRGllKVxyXG4gICAgICAgICAgICAgICAgYWxpdmUtLTtcclxuICAgICAgICAgICAgaWYodGhpcy5wbGF5ZXI0LmlzRGllKVxyXG4gICAgICAgICAgICAgICAgYWxpdmUtLTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hbGl2ZVBsYXllciA9IGFsaXZlO1xyXG4gICAgICAgIGlmICh0aGlzLmFsaXZlUGxheWVyID09IDEpe1xyXG4gICAgICAgICAgICB0aGlzLndpbm5lciA9IHRoaXMucGxheWVyLnBsYXllck5hbWUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmc7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMud2lubmVyKTtcclxuICAgICAgICAgICAgLy90aGlzLlVJLnBhdXNlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZVBsYXllcihudW0pIHtcclxuICAgICAgICB0aGlzLmN1cnJQbGF5ZXIgPSBudW0gJSB0aGlzLnRvdGFsUGxheWVyO1xyXG4gICAgICAgIGlmKCh0aGlzLnBsYXllciAmJiAhdGhpcy5wbGF5ZXIuaXNEaWUpKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyLnNldFBsYXllck1vdmVEaXJlY3Rpb24oMCk7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyLnNldFBsYXllckp1bXAoZmFsc2UpO1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllci5saW5lLmdldENvbXBvbmVudChcIlRyYWplY3RvcnlMaW5lXCIpLmNsZWFyTGluZSgpO1xyXG4gICAgICAgICAgICB0aGlzLm9uRGlzYWJsZSgpO1xyXG4gICAgICAgIH0gXHJcbiAgICAgICAgc3dpdGNoICh0aGlzLmN1cnJQbGF5ZXIpIHtcclxuICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIgPSB0aGlzLnBsYXllcjE7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIgPSB0aGlzLnBsYXllcjI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIgPSB0aGlzLnBsYXllcjM7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZighdGhpcy5wbGF5ZXIuaXNEaWUpIHtcclxuICAgICAgICAgICAgdGhpcy5vbkVuYWJsZSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlUGxheWVyKG51bSsxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcGxheUJHTSgpIHtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWModGhpcy5iZ20sIHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBvbkVuYWJsZSgpOiB2b2lkIHtcclxuICAgICAgICBpZih0aGlzLnBsYXllcikge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllci5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm9uRXZlbnRTdGFydCwgdGhpcyk7ICAgIC8vIHRvdWNoZWRcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLm9uRXZlbnRNb3ZlLCB0aGlzKTsgICAgICAvLyBhaW1cclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIHRoaXMub25FdmVudENhbmNlbCwgdGhpcyk7ICAvLyBzaG9vdFxyXG4gICAgICAgICAgICB0aGlzLnBsYXllci5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vbkV2ZW50RW5kLCB0aGlzKTsgICAgICAgIC8vIGNhbmNlbCBzaG9vdFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25EaXNhYmxlKCk6IHZvaWQge1xyXG4gICAgICAgIGlmKHRoaXMucGxheWVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyLm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm9uRXZlbnRTdGFydCwgdGhpcyk7ICAgLy8gdG91Y2hlZFxyXG4gICAgICAgICAgICB0aGlzLnBsYXllci5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLm9uRXZlbnRNb3ZlLCB0aGlzKTsgICAgIC8vIGFpbVxyXG4gICAgICAgICAgICB0aGlzLnBsYXllci5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIHRoaXMub25FdmVudENhbmNlbCwgdGhpcyk7IC8vIHNob290XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uRXZlbnRFbmQsIHRoaXMpOyAgICAgICAgLy8gY2FuY2VsIHNob290XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uS2V5RG93bihlKSB7XHJcbiAgICAgICAgc3dpdGNoIChlLmtleUNvZGUpIHtcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuYTogICAgICAgIC8vIG1vdmUgbGVmdFxyXG4gICAgICAgICAgICAgICAgdGhpcy5hS2V5RG93biA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5zZXRQbGF5ZXJNb3ZlRGlyZWN0aW9uKC0xKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5kOiAgICAgICAgLy8gbW92ZSByaWdodFxyXG4gICAgICAgICAgICAgICAgdGhpcy5kS2V5RG93biA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5zZXRQbGF5ZXJNb3ZlRGlyZWN0aW9uKDEpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnNwYWNlOiAgICAvLyBqdW1wXHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5zZXRQbGF5ZXJKdW1wKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmVzY2FwZTpcclxuICAgICAgICAgICAgICAgIHRoaXMucGF1c2VHYW1lKCk7XHJcbiAgICAgICAgICAgICAgICAvL3RoaXMuVUkucGF1c2UoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5wOiAgICAgICAgLy8gcGFzc1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VQbGF5ZXIodGhpcy5jdXJyUGxheWVyICsgMSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlVJLnRpbWVyVmFsID0gMjA7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbktleVVwKGUpIHtcclxuICAgICAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5hOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5hS2V5RG93biA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5kS2V5RG93bikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLnNldFBsYXllck1vdmVEaXJlY3Rpb24oMSk7ICAvLyBtb3ZlIHJpZ2h0XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLnNldFBsYXllck1vdmVEaXJlY3Rpb24oMCk7ICAvLyBzdG9wIG1vdmluZ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRLZXlEb3duID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLmFLZXlEb3duKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIuc2V0UGxheWVyTW92ZURpcmVjdGlvbigtMSk7IC8vIG1vdmUgbGVmdFxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5zZXRQbGF5ZXJNb3ZlRGlyZWN0aW9uKDApOyAgLy8gc3RvcCBtb3ZpbmdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5zcGFjZTpcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLnNldFBsYXllckp1bXAoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmY6ICAgICAgICAvLyBzaG9vdCAoYnVsbGV0KSAgICBcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLndlYXBvbiA9IFwiZ3VuXCI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkucjogICAgICAgIC8vIGJvbWJcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLndlYXBvbiA9IFwiYm9tYlwiXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkV2ZW50U3RhcnQgKGV2ZW50KSB7ICAvLyB0b3VjaGVkXHJcbiAgICAgICAgaWYgKCF0aGlzLmVuYWJsZWRJbkhpZXJhcmNoeSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZighdGhpcy5zaG9vdCkge1xyXG4gICAgICAgICAgICAvLyB0aGlzLnN0YXJ0UG9zID0gdGhpcy5ub2RlLnBvc2l0aW9uO1xyXG4gICAgICAgICAgICAvLyB0aGlzLm1vdG9ySm9pbnQuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAvLyB0aGlzLnJiLmdyYXZpdHlTY2FsZSA9IDA7XHJcbiAgICAgICAgICAgIC8vIHRoaXMucmIubGluZWFyVmVsb2NpdHkgPSBjYy5WZWMyLlpFUk87XHJcbiAgICAgICAgICAgIC8vIHRoaXMucmIuYW5ndWxhclZlbG9jaXR5ID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIG9uRXZlbnRNb3ZlIChldmVudCkgeyAgIC8vIGFpbVxyXG4gICAgICAgIGlmICghdGhpcy5lbmFibGVkSW5IaWVyYXJjaHkpIHJldHVybjtcclxuXHJcbiAgICAgICAgdmFyIHBsYXllclBvcyA9IGV2ZW50LmdldFN0YXJ0TG9jYXRpb24oKTtcclxuICAgICAgICB2YXIgbW91c2VQb3MgPSBldmVudC5nZXRMb2NhdGlvbigpO1xyXG4gICAgICAgIHZhciBkaWZmWCA9IG1vdXNlUG9zLnggLSBwbGF5ZXJQb3MueDtcclxuICAgICAgICB2YXIgZGlmZlkgPSBwbGF5ZXJQb3MueSAtIG1vdXNlUG9zLnk7XHJcbiAgICAgICAgdGhpcy5zaG9vdEFuZ2xlID0gTWF0aC5hdGFuMihNYXRoLmFicyhkaWZmWSksIE1hdGguYWJzKGRpZmZYKSk7IC8vIGFuZ2xlIGluIHJhZGlhblxyXG4gICAgICAgIGlmKGRpZmZYID49IDApIHsgICAgLy8gY2hhbmdlIHBsYXllciBkaXJlY3Rpb25cclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIuc2V0UGxheWVyQ2hhbmdlRGlyZWN0aW9uKC0xKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllci5zZXRQbGF5ZXJDaGFuZ2VEaXJlY3Rpb24oMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGRpZmZZIDwgMCkge1xyXG4gICAgICAgICAgICB0aGlzLnNob290QW5nbGUgKj0gLTE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCF0aGlzLnNob290KXtcclxuICAgICAgICAgICAgaWYodGhpcy5wbGF5ZXIud2VhcG9uID09IFwiZ3VuXCIpIHtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMucGxheWVyLmd1blR5cGUgPT0gXCJub3JtYWxcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLmxpbmUuZ2V0Q29tcG9uZW50KFwiVHJhamVjdG9yeUxpbmVcIikuZHJhd1N0cmFpZ2h0TGluZSh0aGlzLnNob290QW5nbGUsIDMwMCk7IC8vIGRyYXcgdHJhamVjdG9yeSBsaW5lXHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYodGhpcy5wbGF5ZXIuZ3VuVHlwZSA9PSBcImJ1cnN0XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5saW5lLmdldENvbXBvbmVudChcIlRyYWplY3RvcnlMaW5lXCIpLmRyYXdTdHJhaWdodExpbmUodGhpcy5zaG9vdEFuZ2xlLCAyMDApOyAvLyBkcmF3IHRyYWplY3RvcnkgbGluZVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKHRoaXMucGxheWVyLmd1blR5cGUgPT0gXCJzbmlwZXJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLmxpbmUuZ2V0Q29tcG9uZW50KFwiVHJhamVjdG9yeUxpbmVcIikuZHJhd1N0cmFpZ2h0TGluZSh0aGlzLnNob290QW5nbGUsIDQwMCk7IC8vIGRyYXcgdHJhamVjdG9yeSBsaW5lXHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYodGhpcy5wbGF5ZXIuZ3VuVHlwZSA9PSBcInNob3RndW5cIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLmxpbmUuZ2V0Q29tcG9uZW50KFwiVHJhamVjdG9yeUxpbmVcIikuZHJhd0NpcmNsZSh0aGlzLnNob290QW5nbGUsIDEwMCk7IC8vIGRyYXcgdHJhamVjdG9yeSBsaW5lXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZih0aGlzLnBsYXllci53ZWFwb24gPT0gXCJib21iXCIpIHtcclxuICAgICAgICAgICAgICAgIGxldCBwb3dlciA9IChNYXRoLmFicyhkaWZmWSkgPj0gTWF0aC5hYnMoZGlmZlgpID8gTWF0aC5hYnMoZGlmZlkpIDogTWF0aC5hYnMoZGlmZlgpKSBcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLmxpbmUuZ2V0Q29tcG9uZW50KFwiVHJhamVjdG9yeUxpbmVcIikuZHJhd0N1cnZlTGluZSh0aGlzLnNob290QW5nbGUsIHBvd2VyKjIpOyAvLyBkcmF3IGFycm93XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5wb3dlciA9IChwb3dlciAqIDIgPiAxMDApID8gMTAwIDogcG93ZXIgKiAyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkV2ZW50Q2FuY2VsIChldmVudCkgeyAvLyBzaG9vdFxyXG4gICAgICAgIGlmICghdGhpcy5lbmFibGVkSW5IaWVyYXJjaHkpIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5oYXZlU2hvdCgpO1xyXG4gICAgXHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIG9uRXZlbnRFbmQgKGV2ZW50KSB7ICAvLyBjYW5jZWwgc2hvb3RcclxuICAgICAgICBpZiAoIXRoaXMuZW5hYmxlZEluSGllcmFyY2h5KSByZXR1cm47XHJcbiAgICBcclxuICAgICAgICB0aGlzLmhhdmVTaG90KCk7XHJcbiAgICBcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH1cclxuXHJcbiAgICBoYXZlU2hvdCgpIHtcclxuICAgICAgICBpZih0aGlzLnNob290KSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIubGluZS5nZXRDb21wb25lbnQoXCJUcmFqZWN0b3J5TGluZVwiKS5jbGVhckxpbmUoKTtcclxuICAgICAgICAvLyB0aGlzLnNob290ID0gdHJ1ZTtcclxuICAgICAgICBpZih0aGlzLnBsYXllci53ZWFwb24gPT0gXCJndW5cIikge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllci5zZXRQbGF5ZXJTaG9vdCh0aGlzLnNob290QW5nbGUpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5wbGF5ZXIud2VhcG9uID09IFwiYm9tYlwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyLnNldFBsYXllckJvbWIodGhpcy5zaG9vdEFuZ2xlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIuc2V0UGxheWVyQ2hhbmdlRGlyZWN0aW9uKDApO1xyXG4gICAgfVxyXG5cclxuICAgIHBhdXNlR2FtZSgpIHtcclxuICAgICAgICBpZihjYy5kaXJlY3Rvci5pc1BhdXNlZCgpKSB7XHJcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLnJlc3VtZSgpO1xyXG4gICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzL01haW4gQ2FtZXJhL1BhdXNlIE1lbnVcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5wYXVzZSgpO1xyXG4gICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzL01haW4gQ2FtZXJhL1BhdXNlIE1lbnVcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUGF1c2UgTWVudSBCdXR0b25zXHJcblxyXG4gICAgaW5pdFJlc3VtZUJ0bigpIHtcclxuICAgICAgICBsZXQgY2xpY2tFdmVudEhhbmRsZXIgPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xyXG4gICAgICAgIGNsaWNrRXZlbnRIYW5kbGVyLnRhcmdldCA9IHRoaXMubm9kZTtcclxuICAgICAgICBjbGlja0V2ZW50SGFuZGxlci5jb21wb25lbnQgPSBcIkdhbWVNYW5hZ2VyXCI7XHJcbiAgICAgICAgY2xpY2tFdmVudEhhbmRsZXIuaGFuZGxlciA9IFwicmVzdW1lXCI7XHJcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9NYWluIENhbWVyYS9QYXVzZSBNZW51L0JpZyBMYXlvdXQvcmVzdW1lQnRuXCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2goY2xpY2tFdmVudEhhbmRsZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc3VtZSgpIHtcclxuICAgICAgICBjYy5kaXJlY3Rvci5yZXN1bWUoKTtcclxuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL01haW4gQ2FtZXJhL1BhdXNlIE1lbnVcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q2FtZXJhQW5jaG9yKHZhbHVlKXtcclxuICAgICAgICB0aGlzLmNhbWVyYUFuY2hvciA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVdlYXBvblVpKCl7XHJcbiAgICAgICAgLy8gdmFyIHdlYXBvblNwcml0ZSA9IGNjLmZpbmQoXCJDYW52YXMvTWFpbiBDYW1lcmEvV2VhcG9uVWlcIikuZ2V0Q2hpbGRCeU5hbWUoXCJTcHJpdGVcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgaWYodGhpcy5wbGF5ZXIpe1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMucGxheWVyLmdldEN1cnJXZWFwb25OdW0oKSl7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiMFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXMvTWFpbiBDYW1lcmEvV2VhcG9uVWlcIikuZ2V0Q2hpbGRCeU5hbWUoXCJTcHJpdGVcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLndlYXBvblNwcml0ZTA7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cod2VhcG9uU3ByaXRlLCBcInVwZGF0ZXdlYXBvblVpXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIjFcIjpcclxuICAgICAgICAgICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzL01haW4gQ2FtZXJhL1dlYXBvblVpXCIpLmdldENoaWxkQnlOYW1lKFwiU3ByaXRlXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy53ZWFwb25TcHJpdGUxO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIjJcIjpcclxuICAgICAgICAgICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzL01haW4gQ2FtZXJhL1dlYXBvblVpXCIpLmdldENoaWxkQnlOYW1lKFwiU3ByaXRlXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy53ZWFwb25TcHJpdGUyO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIjNcIjpcclxuICAgICAgICAgICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzL01haW4gQ2FtZXJhL1dlYXBvblVpXCIpLmdldENoaWxkQnlOYW1lKFwiU3ByaXRlXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy53ZWFwb25TcHJpdGUzO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIjRcIjpcclxuICAgICAgICAgICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzL01haW4gQ2FtZXJhL1dlYXBvblVpXCIpLmdldENoaWxkQnlOYW1lKFwiU3ByaXRlXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy53ZWFwb25TcHJpdGU0O1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzL01haW4gQ2FtZXJhL1dlYXBvblVpXCIpLmdldENoaWxkQnlOYW1lKFwiU3ByaXRlXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy53ZWFwb25TcHJpdGUzO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==