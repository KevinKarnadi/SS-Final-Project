
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
        _this.bgm1 = null;
        _this.bgm2 = null;
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
        // this.playerNum = 4;
        // this.alivePlayer = this.totalPlayer;
        this.alivePlayer = parseInt(this.playerNum);
        cc.audioEngine.stopMusic();
        this.playBGM();
        this.loadPlayer();
        this.changePlayer(0);
        this.initPauseMenuButtons();
        this.initSettingsMenuButtons();
    };
    GameManager.prototype.start = function () { };
    GameManager.prototype.update = function (dt) {
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
        this.updateWeaponUi();
        if (this.winner == null) {
            if (this.UI.timerVal < 0 || this.player.isDie) {
                this.UI.timerVal = 20;
                this.changePlayer(this.currPlayer + 1);
            }
            // this.isWin();
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
        // this.alivePlayer = alive;
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
            case 3:
                this.player = this.player4;
                break;
            default:
                break;
        }
        if (!this.player.isDie) {
            this.onEnable();
            this.changePlayerUi();
        }
        else {
            // console.log(this.currPlayer, "change");
            this.changePlayer(num + 1);
        }
    };
    GameManager.prototype.playBGM = function () {
        var sceneName = cc.director.getScene().name;
        if (sceneName == "map1")
            cc.audioEngine.playMusic(this.bgm1, true);
        else if (sceneName == "map2")
            cc.audioEngine.playMusic(this.bgm2, true);
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
            this.player.aim = true;
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
                    this.player.line.getComponent("TrajectoryLine").drawCircle(this.shootAngle); // draw trajectory line
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
    GameManager.prototype.initPauseMenuButtons = function () {
        var resume_clickEventHandler = new cc.Component.EventHandler();
        resume_clickEventHandler.target = this.node;
        resume_clickEventHandler.component = "GameManager";
        resume_clickEventHandler.handler = "resume";
        cc.find("Canvas/Main Camera/Pause Menu/Big Layout/resumeBtn").getComponent(cc.Button).clickEvents.push(resume_clickEventHandler);
        var restart_clickEventHandler = new cc.Component.EventHandler();
        restart_clickEventHandler.target = this.node;
        restart_clickEventHandler.component = "GameManager";
        restart_clickEventHandler.handler = "restart";
        cc.find("Canvas/Main Camera/Pause Menu/Big Layout/restartBtn").getComponent(cc.Button).clickEvents.push(restart_clickEventHandler);
        var settings_clickEventHandler = new cc.Component.EventHandler();
        settings_clickEventHandler.target = this.node;
        settings_clickEventHandler.component = "GameManager";
        settings_clickEventHandler.handler = "settings";
        cc.find("Canvas/Main Camera/Pause Menu/Big Layout/settingsBtn").getComponent(cc.Button).clickEvents.push(settings_clickEventHandler);
        var exit_clickEventHandler = new cc.Component.EventHandler();
        exit_clickEventHandler.target = this.node;
        exit_clickEventHandler.component = "GameManager";
        exit_clickEventHandler.handler = "exit";
        cc.find("Canvas/Main Camera/Pause Menu/Big Layout/exitBtn").getComponent(cc.Button).clickEvents.push(exit_clickEventHandler);
    };
    GameManager.prototype.resume = function () {
        cc.director.resume();
        cc.find("Canvas/Main Camera/Pause Menu").active = false;
    };
    GameManager.prototype.restart = function () {
        cc.director.resume();
        var sceneName = cc.director.getScene().name;
        cc.director.loadScene("loading", function () {
            cc.director.loadScene(sceneName);
        });
    };
    GameManager.prototype.settings = function () {
        cc.find("Canvas/Main Camera/Settings Menu").active = true;
    };
    GameManager.prototype.exit = function () {
        cc.audioEngine.stopAll();
        cc.director.loadScene("loading", function () {
            cc.director.loadScene("menu");
        });
    };
    // Settings Menu Buttons
    GameManager.prototype.initSettingsMenuButtons = function () {
        var close_clickEventHandler = new cc.Component.EventHandler();
        close_clickEventHandler.target = this.node;
        close_clickEventHandler.component = "GameManager";
        close_clickEventHandler.handler = "close";
        cc.find("Canvas/Main Camera/Settings Menu/closeBtn").getComponent(cc.Button).clickEvents.push(close_clickEventHandler);
        var bgmute_clickEventHandler = new cc.Component.EventHandler();
        bgmute_clickEventHandler.target = this.node;
        bgmute_clickEventHandler.component = "GameManager";
        bgmute_clickEventHandler.handler = "bgMute";
        cc.find("Canvas/Main Camera/Settings Menu/Big Layout/BG Mute/bgMuteBtn").getComponent(cc.Button).clickEvents.push(bgmute_clickEventHandler);
        var sfxmute_clickEventHandler = new cc.Component.EventHandler();
        sfxmute_clickEventHandler.target = this.node;
        sfxmute_clickEventHandler.component = "GameManager";
        sfxmute_clickEventHandler.handler = "sfxMute";
        cc.find("Canvas/Main Camera/Settings Menu/Big Layout/SFX Mute/sfxMuteBtn").getComponent(cc.Button).clickEvents.push(sfxmute_clickEventHandler);
        var bg_sliderEventHandler = new cc.Component.EventHandler();
        bg_sliderEventHandler.target = this.node;
        bg_sliderEventHandler.component = "GameManager";
        bg_sliderEventHandler.handler = "changeBgVol";
        cc.find("Canvas/Main Camera/Settings Menu/Big Layout/BG Volume/bgSlider").getComponent(cc.Slider).slideEvents.push(bg_sliderEventHandler);
        var sfx_sliderEventHandler = new cc.Component.EventHandler();
        sfx_sliderEventHandler.target = this.node;
        sfx_sliderEventHandler.component = "GameManager";
        sfx_sliderEventHandler.handler = "changeSfxVol";
        cc.find("Canvas/Main Camera/Settings Menu/Big Layout/SFX Volume/sfxSlider").getComponent(cc.Slider).slideEvents.push(sfx_sliderEventHandler);
    };
    GameManager.prototype.close = function () {
        cc.find("Canvas/Main Camera/Settings Menu").active = false;
    };
    GameManager.prototype.bgMute = function () {
        cc.audioEngine.setMusicVolume(0);
    };
    GameManager.prototype.sfxMute = function () {
        cc.audioEngine.setEffectsVolume(0);
    };
    GameManager.prototype.changeBgVol = function () {
        var value = cc.find("Canvas/Main Camera/Settings Menu/Big Layout/BG Volume/bgSlider").getComponent(cc.Slider).progress;
        cc.audioEngine.setMusicVolume(value);
    };
    GameManager.prototype.changeSfxVol = function () {
        var value = cc.find("Canvas/Main Camera/Settings Menu/Big Layout/SFX Volume/sfxSlider").getComponent(cc.Slider).progress;
        cc.audioEngine.setEffectsVolume(value);
    };
    GameManager.prototype.setCameraAnchor = function (value) {
        this.cameraAnchor = value;
    };
    GameManager.prototype.getWin = function () {
        return (this.winner != null);
    };
    GameManager.prototype.updateWeaponUi = function () {
        // var weaponSprite = cc.find("Canvas/Main Camera/WeaponUi").getChildByName("Sprite").getComponent(cc.Sprite).spriteFrame;
        if (this.player) {
            switch (this.player.getCurrWeaponNum()) {
                case "0":
                    cc.find("Canvas/Main Camera/UI/WeaponUi").getChildByName("Sprite").getComponent(cc.Sprite).spriteFrame = this.weaponSprite0;
                    // console.log(weaponSprite, "updateweaponUi");
                    break;
                case "1":
                    cc.find("Canvas/Main Camera/UI/WeaponUi").getChildByName("Sprite").getComponent(cc.Sprite).spriteFrame = this.weaponSprite1;
                    break;
                case "2":
                    cc.find("Canvas/Main Camera/UI/WeaponUi").getChildByName("Sprite").getComponent(cc.Sprite).spriteFrame = this.weaponSprite2;
                    break;
                case "3":
                    cc.find("Canvas/Main Camera/UI/WeaponUi").getChildByName("Sprite").getComponent(cc.Sprite).spriteFrame = this.weaponSprite3;
                    break;
                case "4":
                    cc.find("Canvas/Main Camera/UI/WeaponUi").getChildByName("Sprite").getComponent(cc.Sprite).spriteFrame = this.weaponSprite4;
                    break;
                default:
                    cc.find("Canvas/Main Camera/UI/WeaponUi").getChildByName("Sprite").getComponent(cc.Sprite).spriteFrame = this.weaponSprite3;
                    break;
            }
        }
    };
    GameManager.prototype.playerDie = function () {
        this.alivePlayer -= 1;
        if (this.alivePlayer == 1) {
            this.UI.timerVal = 20;
            this.winner = this.player.playerName.getComponent(cc.Label).string;
            // console.log(this.winner);
            // console.log(this.player.isDie, "die");
            this.changePlayer(this.currPlayer + 1);
            //this.UI.pause();
        }
    };
    GameManager.prototype.changePlayerUi = function () {
        cc.find("Canvas/Main Camera/UI/Profile/name").getComponent(cc.Label).string = this.player.playerName.getComponent(cc.Label).string;
        switch (this.player.playerChar) {
            case "char1":
                cc.find("Canvas/Main Camera/UI/Profile/face0").active = true;
                cc.find("Canvas/Main Camera/UI/Profile/face1").active = false;
                cc.find("Canvas/Main Camera/UI/Profile/face2").active = false;
                cc.find("Canvas/Main Camera/UI/Profile/face3").active = false;
                break;
            case "char2":
                cc.find("Canvas/Main Camera/UI/Profile/face0").active = false;
                cc.find("Canvas/Main Camera/UI/Profile/face1").active = true;
                cc.find("Canvas/Main Camera/UI/Profile/face2").active = false;
                cc.find("Canvas/Main Camera/UI/Profile/face3").active = false;
                break;
            case "char3":
                cc.find("Canvas/Main Camera/UI/Profile/face0").active = false;
                cc.find("Canvas/Main Camera/UI/Profile/face1").active = false;
                cc.find("Canvas/Main Camera/UI/Profile/face2").active = true;
                cc.find("Canvas/Main Camera/UI/Profile/face3").active = false;
                break;
            case "char4":
                cc.find("Canvas/Main Camera/UI/Profile/face0").active = false;
                cc.find("Canvas/Main Camera/UI/Profile/face1").active = false;
                cc.find("Canvas/Main Camera/UI/Profile/face2").active = false;
                cc.find("Canvas/Main Camera/UI/Profile/face3").active = true;
                break;
            default:
                cc.find("Canvas/Main Camera/UI/Profile/face0").active = true;
                cc.find("Canvas/Main Camera/UI/Profile/face1").active = false;
                cc.find("Canvas/Main Camera/UI/Profile/face2").active = false;
                cc.find("Canvas/Main Camera/UI/Profile/face3").active = false;
                break;
        }
    };
    GameManager.prototype.getCurrPlayer = function () {
        return this.currPlayer;
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
    ], GameManager.prototype, "bgm1", void 0);
    __decorate([
        property(cc.AudioClip)
    ], GameManager.prototype, "bgm2", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcR2FtZU1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUNBQTZCO0FBQzdCLDJCQUFxQjtBQUVmLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXlDLCtCQUFZO0lBQXJEO1FBQUEscUVBNGtCQztRQXprQkcsYUFBTyxHQUFXLElBQUksQ0FBQztRQUd2QixhQUFPLEdBQVcsSUFBSSxDQUFDO1FBR3ZCLGFBQU8sR0FBVyxJQUFJLENBQUM7UUFHdkIsYUFBTyxHQUFXLElBQUksQ0FBQztRQUd2QixRQUFFLEdBQU8sSUFBSSxDQUFDO1FBR2QsWUFBTSxHQUFZLElBQUksQ0FBQztRQUd2QixVQUFJLEdBQWlCLElBQUksQ0FBQztRQUcxQixVQUFJLEdBQWlCLElBQUksQ0FBQztRQUcxQixnQkFBVSxHQUFZLElBQUksQ0FBQTtRQUdsQixtQkFBYSxHQUFtQixJQUFJLENBQUM7UUFHckMsbUJBQWEsR0FBbUIsSUFBSSxDQUFDO1FBR3JDLG1CQUFhLEdBQW1CLElBQUksQ0FBQztRQUdyQyxtQkFBYSxHQUFtQixJQUFJLENBQUM7UUFHckMsbUJBQWEsR0FBbUIsSUFBSSxDQUFDO1FBRzdDLGlCQUFXLEdBQVcsR0FBRyxDQUFDO1FBRWxCLFlBQU0sR0FBRyxJQUFJLENBQUM7UUFFZCxjQUFRLEdBQVksS0FBSyxDQUFDO1FBRTFCLGNBQVEsR0FBWSxLQUFLLENBQUM7UUFFMUIsV0FBSyxHQUFZLEtBQUssQ0FBQztRQUl2QixpQkFBVyxHQUFXLENBQUMsQ0FBQztRQUV4QixpQkFBVyxHQUFHLElBQUksQ0FBQztRQUVuQixnQkFBVSxHQUFHLElBQUksQ0FBQztRQUVsQixlQUFTLEdBQUcsSUFBSSxDQUFDO1FBRXpCLGdDQUFnQztRQUV4QixjQUFRLEdBQVksS0FBSyxDQUFD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LENBQUM7c0RBQ29CO0lBRzdDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7c0RBQ29CO0lBRzdDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7c0RBQ29CO0lBRzdDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7c0RBQ29CO0lBRzdDO1FBREMsUUFBUSxFQUFFO29EQUNlO0lBN0NULFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0E0a0IvQjtJQUFELGtCQUFDO0NBNWtCRCxBQTRrQkMsQ0E1a0J3QyxFQUFFLENBQUMsU0FBUyxHQTRrQnBEO2tCQTVrQm9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGxheWVyIGZyb20gXCIuL1BsYXllclwiXHJcbmltcG9ydCBVSSBmcm9tIFwiLi9VSVwiXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVNYW5hZ2VyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoUGxheWVyKVxyXG4gICAgcGxheWVyMTogUGxheWVyID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoUGxheWVyKVxyXG4gICAgcGxheWVyMjogUGxheWVyID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoUGxheWVyKVxyXG4gICAgcGxheWVyMzogUGxheWVyID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoUGxheWVyKVxyXG4gICAgcGxheWVyNDogUGxheWVyID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoVUkpXHJcbiAgICBVSTogVUkgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgY2FtZXJhOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgYmdtMTogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgYmdtMjogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJhY2tncm91bmQ6IGNjLk5vZGUgPSBudWxsXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxyXG4gICAgcHJpdmF0ZSB3ZWFwb25TcHJpdGUwOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XHJcbiAgICBcclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcclxuICAgIHByaXZhdGUgd2VhcG9uU3ByaXRlMTogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xyXG4gICAgXHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXHJcbiAgICBwcml2YXRlIHdlYXBvblNwcml0ZTI6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXHJcbiAgICBwcml2YXRlIHdlYXBvblNwcml0ZTM6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXHJcbiAgICBwcml2YXRlIHdlYXBvblNwcml0ZTQ6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoKVxyXG4gICAgY2FtZXJhU3BlZWQ6IG51bWJlciA9IDMwMDtcclxuXHJcbiAgICBwcml2YXRlIHBsYXllciA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBhS2V5RG93bjogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHByaXZhdGUgZEtleURvd246IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBwcml2YXRlIHNob290OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgcHJpdmF0ZSBjdXJyUGxheWVyOiBudW1iZXI7XHJcblxyXG4gICAgcHJpdmF0ZSB0b3RhbFBsYXllcjogbnVtYmVyID0gMjtcclxuXHJcbiAgICBwcml2YXRlIGFsaXZlUGxheWVyID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIHNob290QW5nbGUgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgcGxheWVyTnVtID0gbnVsbDtcclxuXHJcbiAgICAvLyBwcml2YXRlIGN1cnJQbGF5ZXJQb3MgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgaXNQYXVzZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBwcml2YXRlIHBsYXllclBhdGg6IHN0cmluZyA9IFwiQ2FudmFzL1BsYXllcnMvXCI7XHJcblxyXG4gICAgcHJpdmF0ZSB3aW5uZXI7XHJcblxyXG4gICAgcHJpdmF0ZSBjYW1lcmFBbmNob3I6IG51bWJlciA9IDA7XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCkuZ3Jhdml0eSA9IGNjLnYyKDAsIC05ODApO1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTiwgdGhpcy5vbktleURvd24sIHRoaXMpO1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfVVAsIHRoaXMub25LZXlVcCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJOdW0gPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJQbGF5ZXJOdW1cIik7XHJcbiAgICAgICAgLy8gdGhpcy5wbGF5ZXJOdW0gPSA0O1xyXG4gICAgICAgIC8vIHRoaXMuYWxpdmVQbGF5ZXIgPSB0aGlzLnRvdGFsUGxheWVyO1xyXG4gICAgICAgIHRoaXMuYWxpdmVQbGF5ZXIgPSBwYXJzZUludCh0aGlzLnBsYXllck51bSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcE11c2ljKCk7XHJcbiAgICAgICAgdGhpcy5wbGF5QkdNKCk7XHJcbiAgICAgICAgdGhpcy5sb2FkUGxheWVyKCk7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VQbGF5ZXIoMCk7XHJcbiAgICAgICAgdGhpcy5pbml0UGF1c2VNZW51QnV0dG9ucygpO1xyXG4gICAgICAgIHRoaXMuaW5pdFNldHRpbmdzTWVudUJ1dHRvbnMoKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgc3RhcnQgKCkge31cclxuXHJcbiAgICB1cGRhdGUgKGR0KSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIHBsYXllclBvcyA9IHRoaXMucGxheWVyLm5vZGUuZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICB2YXIgY2FtZXJhUG9zID0gdGhpcy5jYW1lcmEuZ2V0UG9zaXRpb24oKTtcclxuICAgICAgICB2YXIgcHJldkNhbVBvcyA9IHRoaXMuY2FtZXJhLmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgaWYodGhpcy5jYW1lcmFBbmNob3IgPT0gMSB8fCB0aGlzLmNhbWVyYUFuY2hvciA9PSAtMSl7XHJcbiAgICAgICAgICAgIGNhbWVyYVBvcy54ICs9IHRoaXMuY2FtZXJhQW5jaG9yICogdGhpcy5jYW1lcmFTcGVlZCAqIGR0O1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmNhbWVyYUFuY2hvciwgXCJ1cGRhdGVcIik7XHJcbiAgICAgICAgfSBlbHNle1xyXG4gICAgICAgICAgICBjYW1lcmFQb3MubGVycChwbGF5ZXJQb3MsIDAuMSwgY2FtZXJhUG9zKTtcclxuICAgICAgICAgICAgY2FtZXJhUG9zLnkgPSBjYy5taXNjLmNsYW1wZihwbGF5ZXJQb3MueSwgMCwgMjAwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoY2FtZXJhUG9zLnkgPiAxMDApe1xyXG4gICAgICAgICAgICBjYW1lcmFQb3MueSA9IDEwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoY2FtZXJhUG9zLnggPCAtMzUpIHtcclxuICAgICAgICAgICAgY2FtZXJhUG9zLnggPSAtMzU7XHJcbiAgICAgICAgfSBlbHNlIGlmKGNhbWVyYVBvcy54ID4gMjAzMyszNSkge1xyXG4gICAgICAgICAgICBjYW1lcmFQb3MueCA9IDIwMzMrMzU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2FtZXJhLnNldFBvc2l0aW9uKGNhbWVyYVBvcyk7XHJcbiAgICAgICAgLy8gaWYodGhpcy5iYWNrZ3JvdW5kKXtcclxuICAgICAgICAvLyAgICAgdGhpcy5iYWNrZ3JvdW5kLnNldFBvc2l0aW9uKGNhbWVyYVBvcy54IDwgcHJldkNhbVBvcy54ID8gXHJcbiAgICAgICAgLy8gICAgICAgICAoKGNhbWVyYVBvcy54IC0gcHJldkNhbVBvcy54KS8zICsgdGhpcy5iYWNrZ3JvdW5kLngpIDogXHJcbiAgICAgICAgLy8gICAgICAgICAodGhpcy5iYWNrZ3JvdW5kLnggLSAocHJldkNhbVBvcy54IC0gY2FtZXJhUG9zLngpLzMpLCBcclxuICAgICAgICAvLyAgICAgICAgIGNhbWVyYVBvcy55IDwgcHJldkNhbVBvcy55ID8gXHJcbiAgICAgICAgLy8gICAgICAgICAoKGNhbWVyYVBvcy55IC0gcHJldkNhbVBvcy55KS8zICsgdGhpcy5iYWNrZ3JvdW5kLnkpIDpcclxuICAgICAgICAvLyAgICAgICAgICh0aGlzLmJhY2tncm91bmQueSAtIChwcmV2Q2FtUG9zLnkgLSBjYW1lcmFQb3MueSkvMykpO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICB0aGlzLnVwZGF0ZVdlYXBvblVpKCk7XHJcbiAgICAgICAgaWYodGhpcy53aW5uZXIgPT0gbnVsbCl7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuVUkudGltZXJWYWwgPCAwIHx8IHRoaXMucGxheWVyLmlzRGllKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuVUkudGltZXJWYWwgPSAyMDtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlUGxheWVyKHRoaXMuY3VyclBsYXllciArIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIHRoaXMuaXNXaW4oKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZFBsYXllcigpIHtcclxuICAgICAgICB0aGlzLnRvdGFsUGxheWVyID0gcGFyc2VJbnQodGhpcy5wbGF5ZXJOdW0pO1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy50b3RhbFBsYXllcikge1xyXG4gICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICBjYy5maW5kKHRoaXMucGxheWVyUGF0aCArIFwiUGxheWVyIDRcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgY2MuZmluZCh0aGlzLnBsYXllclBhdGggKyBcIlBsYXllciAzXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgIGNjLmZpbmQodGhpcy5wbGF5ZXJQYXRoICsgXCJQbGF5ZXIgMlwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgY2MuZmluZCh0aGlzLnBsYXllclBhdGggKyBcIlBsYXllciAxXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpc1dpbigpe1xyXG4gICAgICAgIGxldCBhbGl2ZSA9IHRoaXMudG90YWxQbGF5ZXI7XHJcbiAgICAgICAgaWYgKHRoaXMudG90YWxQbGF5ZXIgPT0gMil7XHJcbiAgICAgICAgICAgIGlmKHRoaXMucGxheWVyMS5pc0RpZSlcclxuICAgICAgICAgICAgICAgIGFsaXZlLS07XHJcbiAgICAgICAgICAgIGlmKHRoaXMucGxheWVyMi5pc0RpZSlcclxuICAgICAgICAgICAgICAgIGFsaXZlLS07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMudG90YWxQbGF5ZXIgPT0gMyl7XHJcbiAgICAgICAgICAgIGlmKHRoaXMucGxheWVyMS5pc0RpZSlcclxuICAgICAgICAgICAgICAgIGFsaXZlLS07XHJcbiAgICAgICAgICAgIGlmKHRoaXMucGxheWVyMi5pc0RpZSlcclxuICAgICAgICAgICAgICAgIGFsaXZlLS07XHJcbiAgICAgICAgICAgIGlmKHRoaXMucGxheWVyMy5pc0RpZSlcclxuICAgICAgICAgICAgICAgIGFsaXZlLS07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMudG90YWxQbGF5ZXIgPT0gNCl7XHJcbiAgICAgICAgICAgIGlmKHRoaXMucGxheWVyMS5pc0RpZSlcclxuICAgICAgICAgICAgICAgIGFsaXZlLS07XHJcbiAgICAgICAgICAgIGlmKHRoaXMucGxheWVyMi5pc0RpZSlcclxuICAgICAgICAgICAgICAgIGFsaXZlLS07XHJcbiAgICAgICAgICAgIGlmKHRoaXMucGxheWVyMy5pc0RpZSlcclxuICAgICAgICAgICAgICAgIGFsaXZlLS07XHJcbiAgICAgICAgICAgIGlmKHRoaXMucGxheWVyNC5pc0RpZSlcclxuICAgICAgICAgICAgICAgIGFsaXZlLS07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHRoaXMuYWxpdmVQbGF5ZXIgPSBhbGl2ZTtcclxuICAgICAgICBpZiAodGhpcy5hbGl2ZVBsYXllciA9PSAxKXtcclxuICAgICAgICAgICAgdGhpcy53aW5uZXIgPSB0aGlzLnBsYXllci5wbGF5ZXJOYW1lLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLndpbm5lcik7XHJcbiAgICAgICAgICAgIC8vdGhpcy5VSS5wYXVzZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VQbGF5ZXIobnVtKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyUGxheWVyID0gbnVtICUgdGhpcy50b3RhbFBsYXllcjtcclxuICAgICAgICBpZigodGhpcy5wbGF5ZXIgJiYgIXRoaXMucGxheWVyLmlzRGllKSkge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllci5zZXRQbGF5ZXJNb3ZlRGlyZWN0aW9uKDApO1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllci5zZXRQbGF5ZXJKdW1wKGZhbHNlKTtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIubGluZS5nZXRDb21wb25lbnQoXCJUcmFqZWN0b3J5TGluZVwiKS5jbGVhckxpbmUoKTtcclxuICAgICAgICAgICAgdGhpcy5vbkRpc2FibGUoKTtcclxuICAgICAgICB9IFxyXG4gICAgICAgIHN3aXRjaCAodGhpcy5jdXJyUGxheWVyKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyID0gdGhpcy5wbGF5ZXIxO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyID0gdGhpcy5wbGF5ZXIyO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyID0gdGhpcy5wbGF5ZXIzO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyID0gdGhpcy5wbGF5ZXI0O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoIXRoaXMucGxheWVyLmlzRGllKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25FbmFibGUoKTtcclxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VQbGF5ZXJVaSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuY3VyclBsYXllciwgXCJjaGFuZ2VcIik7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlUGxheWVyKG51bSsxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcGxheUJHTSgpIHtcclxuICAgICAgICBsZXQgc2NlbmVOYW1lID0gY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5uYW1lO1xyXG4gICAgICAgIGlmKHNjZW5lTmFtZSA9PSBcIm1hcDFcIilcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheU11c2ljKHRoaXMuYmdtMSwgdHJ1ZSk7XHJcbiAgICAgICAgZWxzZSBpZihzY2VuZU5hbWUgPT0gXCJtYXAyXCIpXHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlNdXNpYyh0aGlzLmJnbTIsIHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBvbkVuYWJsZSgpOiB2b2lkIHtcclxuICAgICAgICBpZih0aGlzLnBsYXllcikge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllci5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm9uRXZlbnRTdGFydCwgdGhpcyk7ICAgIC8vIHRvdWNoZWRcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLm9uRXZlbnRNb3ZlLCB0aGlzKTsgICAgICAvLyBhaW1cclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIHRoaXMub25FdmVudENhbmNlbCwgdGhpcyk7ICAvLyBzaG9vdFxyXG4gICAgICAgICAgICB0aGlzLnBsYXllci5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vbkV2ZW50RW5kLCB0aGlzKTsgICAgICAgIC8vIGNhbmNlbCBzaG9vdFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25EaXNhYmxlKCk6IHZvaWQge1xyXG4gICAgICAgIGlmKHRoaXMucGxheWVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyLm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm9uRXZlbnRTdGFydCwgdGhpcyk7ICAgLy8gdG91Y2hlZFxyXG4gICAgICAgICAgICB0aGlzLnBsYXllci5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLm9uRXZlbnRNb3ZlLCB0aGlzKTsgICAgIC8vIGFpbVxyXG4gICAgICAgICAgICB0aGlzLnBsYXllci5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIHRoaXMub25FdmVudENhbmNlbCwgdGhpcyk7IC8vIHNob290XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uRXZlbnRFbmQsIHRoaXMpOyAgICAgICAgLy8gY2FuY2VsIHNob290XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uS2V5RG93bihlKSB7XHJcbiAgICAgICAgc3dpdGNoIChlLmtleUNvZGUpIHtcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuYTogICAgICAgIC8vIG1vdmUgbGVmdFxyXG4gICAgICAgICAgICAgICAgdGhpcy5hS2V5RG93biA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5zZXRQbGF5ZXJNb3ZlRGlyZWN0aW9uKC0xKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5kOiAgICAgICAgLy8gbW92ZSByaWdodFxyXG4gICAgICAgICAgICAgICAgdGhpcy5kS2V5RG93biA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5zZXRQbGF5ZXJNb3ZlRGlyZWN0aW9uKDEpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnNwYWNlOiAgICAvLyBqdW1wXHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5zZXRQbGF5ZXJKdW1wKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmVzY2FwZTpcclxuICAgICAgICAgICAgICAgIHRoaXMucGF1c2VHYW1lKCk7XHJcbiAgICAgICAgICAgICAgICAvL3RoaXMuVUkucGF1c2UoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5wOiAgICAgICAgLy8gcGFzc1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VQbGF5ZXIodGhpcy5jdXJyUGxheWVyICsgMSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlVJLnRpbWVyVmFsID0gMjA7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbktleVVwKGUpIHtcclxuICAgICAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5hOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5hS2V5RG93biA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5kS2V5RG93bikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLnNldFBsYXllck1vdmVEaXJlY3Rpb24oMSk7ICAvLyBtb3ZlIHJpZ2h0XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLnNldFBsYXllck1vdmVEaXJlY3Rpb24oMCk7ICAvLyBzdG9wIG1vdmluZ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRLZXlEb3duID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLmFLZXlEb3duKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIuc2V0UGxheWVyTW92ZURpcmVjdGlvbigtMSk7IC8vIG1vdmUgbGVmdFxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5zZXRQbGF5ZXJNb3ZlRGlyZWN0aW9uKDApOyAgLy8gc3RvcCBtb3ZpbmdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5zcGFjZTpcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLnNldFBsYXllckp1bXAoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmY6ICAgICAgICAvLyBzaG9vdCAoYnVsbGV0KSAgICBcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLndlYXBvbiA9IFwiZ3VuXCI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkucjogICAgICAgIC8vIGJvbWJcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLndlYXBvbiA9IFwiYm9tYlwiXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkV2ZW50U3RhcnQgKGV2ZW50KSB7ICAvLyB0b3VjaGVkXHJcbiAgICAgICAgaWYgKCF0aGlzLmVuYWJsZWRJbkhpZXJhcmNoeSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZighdGhpcy5zaG9vdCkge1xyXG4gICAgICAgICAgICAvLyB0aGlzLnN0YXJ0UG9zID0gdGhpcy5ub2RlLnBvc2l0aW9uO1xyXG4gICAgICAgICAgICAvLyB0aGlzLm1vdG9ySm9pbnQuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAvLyB0aGlzLnJiLmdyYXZpdHlTY2FsZSA9IDA7XHJcbiAgICAgICAgICAgIC8vIHRoaXMucmIubGluZWFyVmVsb2NpdHkgPSBjYy5WZWMyLlpFUk87XHJcbiAgICAgICAgICAgIC8vIHRoaXMucmIuYW5ndWxhclZlbG9jaXR5ID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIG9uRXZlbnRNb3ZlIChldmVudCkgeyAgIC8vIGFpbVxyXG4gICAgICAgIGlmICghdGhpcy5lbmFibGVkSW5IaWVyYXJjaHkpIHJldHVybjtcclxuXHJcbiAgICAgICAgdmFyIHBsYXllclBvcyA9IGV2ZW50LmdldFN0YXJ0TG9jYXRpb24oKTtcclxuICAgICAgICB2YXIgbW91c2VQb3MgPSBldmVudC5nZXRMb2NhdGlvbigpO1xyXG4gICAgICAgIHZhciBkaWZmWCA9IG1vdXNlUG9zLnggLSBwbGF5ZXJQb3MueDtcclxuICAgICAgICB2YXIgZGlmZlkgPSBwbGF5ZXJQb3MueSAtIG1vdXNlUG9zLnk7XHJcbiAgICAgICAgdGhpcy5zaG9vdEFuZ2xlID0gTWF0aC5hdGFuMihNYXRoLmFicyhkaWZmWSksIE1hdGguYWJzKGRpZmZYKSk7IC8vIGFuZ2xlIGluIHJhZGlhblxyXG4gICAgICAgIGlmKGRpZmZYID49IDApIHsgICAgLy8gY2hhbmdlIHBsYXllciBkaXJlY3Rpb25cclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIuc2V0UGxheWVyQ2hhbmdlRGlyZWN0aW9uKC0xKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllci5zZXRQbGF5ZXJDaGFuZ2VEaXJlY3Rpb24oMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGRpZmZZIDwgMCkge1xyXG4gICAgICAgICAgICB0aGlzLnNob290QW5nbGUgKj0gLTE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCF0aGlzLnNob290KXtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIuYWltID0gdHJ1ZTtcclxuICAgICAgICAgICAgaWYodGhpcy5wbGF5ZXIud2VhcG9uID09IFwiZ3VuXCIpIHtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMucGxheWVyLmd1blR5cGUgPT0gXCJub3JtYWxcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLmxpbmUuZ2V0Q29tcG9uZW50KFwiVHJhamVjdG9yeUxpbmVcIikuZHJhd1N0cmFpZ2h0TGluZSh0aGlzLnNob290QW5nbGUsIDMwMCk7IC8vIGRyYXcgdHJhamVjdG9yeSBsaW5lXHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYodGhpcy5wbGF5ZXIuZ3VuVHlwZSA9PSBcImJ1cnN0XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5saW5lLmdldENvbXBvbmVudChcIlRyYWplY3RvcnlMaW5lXCIpLmRyYXdTdHJhaWdodExpbmUodGhpcy5zaG9vdEFuZ2xlLCAyMDApOyAvLyBkcmF3IHRyYWplY3RvcnkgbGluZVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKHRoaXMucGxheWVyLmd1blR5cGUgPT0gXCJzbmlwZXJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLmxpbmUuZ2V0Q29tcG9uZW50KFwiVHJhamVjdG9yeUxpbmVcIikuZHJhd1N0cmFpZ2h0TGluZSh0aGlzLnNob290QW5nbGUsIDQwMCk7IC8vIGRyYXcgdHJhamVjdG9yeSBsaW5lXHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYodGhpcy5wbGF5ZXIuZ3VuVHlwZSA9PSBcInNob3RndW5cIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLmxpbmUuZ2V0Q29tcG9uZW50KFwiVHJhamVjdG9yeUxpbmVcIikuZHJhd0NpcmNsZSh0aGlzLnNob290QW5nbGUpOyAvLyBkcmF3IHRyYWplY3RvcnkgbGluZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYodGhpcy5wbGF5ZXIud2VhcG9uID09IFwiYm9tYlwiKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcG93ZXIgPSAoTWF0aC5hYnMoZGlmZlkpID49IE1hdGguYWJzKGRpZmZYKSA/IE1hdGguYWJzKGRpZmZZKSA6IE1hdGguYWJzKGRpZmZYKSkgXHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5saW5lLmdldENvbXBvbmVudChcIlRyYWplY3RvcnlMaW5lXCIpLmRyYXdDdXJ2ZUxpbmUodGhpcy5zaG9vdEFuZ2xlLCBwb3dlcioyKTsgLy8gZHJhdyBhcnJvd1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIucG93ZXIgPSAocG93ZXIgKiAyID4gMTAwKSA/IDEwMCA6IHBvd2VyICogMjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25FdmVudENhbmNlbCAoZXZlbnQpIHsgLy8gc2hvb3RcclxuICAgICAgICBpZiAoIXRoaXMuZW5hYmxlZEluSGllcmFyY2h5KSByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMuaGF2ZVNob3QoKTtcclxuICAgIFxyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBvbkV2ZW50RW5kIChldmVudCkgeyAgLy8gY2FuY2VsIHNob290XHJcbiAgICAgICAgaWYgKCF0aGlzLmVuYWJsZWRJbkhpZXJhcmNoeSkgcmV0dXJuO1xyXG4gICAgXHJcbiAgICAgICAgdGhpcy5oYXZlU2hvdCgpO1xyXG4gICAgXHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaGF2ZVNob3QoKSB7XHJcbiAgICAgICAgaWYodGhpcy5zaG9vdCkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMucGxheWVyLmxpbmUuZ2V0Q29tcG9uZW50KFwiVHJhamVjdG9yeUxpbmVcIikuY2xlYXJMaW5lKCk7XHJcbiAgICAgICAgLy8gdGhpcy5zaG9vdCA9IHRydWU7XHJcbiAgICAgICAgaWYodGhpcy5wbGF5ZXIud2VhcG9uID09IFwiZ3VuXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIuc2V0UGxheWVyU2hvb3QodGhpcy5zaG9vdEFuZ2xlKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMucGxheWVyLndlYXBvbiA9PSBcImJvbWJcIikge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllci5zZXRQbGF5ZXJCb21iKHRoaXMuc2hvb3RBbmdsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucGxheWVyLnNldFBsYXllckNoYW5nZURpcmVjdGlvbigwKTtcclxuICAgIH1cclxuXHJcbiAgICBwYXVzZUdhbWUoKSB7XHJcbiAgICAgICAgaWYoY2MuZGlyZWN0b3IuaXNQYXVzZWQoKSkge1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5yZXN1bWUoKTtcclxuICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhcy9NYWluIENhbWVyYS9QYXVzZSBNZW51XCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY2MuZGlyZWN0b3IucGF1c2UoKTtcclxuICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhcy9NYWluIENhbWVyYS9QYXVzZSBNZW51XCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFBhdXNlIE1lbnUgQnV0dG9uc1xyXG5cclxuICAgIGluaXRQYXVzZU1lbnVCdXR0b25zKCkge1xyXG4gICAgICAgIGxldCByZXN1bWVfY2xpY2tFdmVudEhhbmRsZXIgPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xyXG4gICAgICAgIHJlc3VtZV9jbGlja0V2ZW50SGFuZGxlci50YXJnZXQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgcmVzdW1lX2NsaWNrRXZlbnRIYW5kbGVyLmNvbXBvbmVudCA9IFwiR2FtZU1hbmFnZXJcIjtcclxuICAgICAgICByZXN1bWVfY2xpY2tFdmVudEhhbmRsZXIuaGFuZGxlciA9IFwicmVzdW1lXCI7XHJcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9NYWluIENhbWVyYS9QYXVzZSBNZW51L0JpZyBMYXlvdXQvcmVzdW1lQnRuXCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2gocmVzdW1lX2NsaWNrRXZlbnRIYW5kbGVyKTtcclxuXHJcbiAgICAgICAgbGV0IHJlc3RhcnRfY2xpY2tFdmVudEhhbmRsZXIgPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xyXG4gICAgICAgIHJlc3RhcnRfY2xpY2tFdmVudEhhbmRsZXIudGFyZ2V0ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIHJlc3RhcnRfY2xpY2tFdmVudEhhbmRsZXIuY29tcG9uZW50ID0gXCJHYW1lTWFuYWdlclwiO1xyXG4gICAgICAgIHJlc3RhcnRfY2xpY2tFdmVudEhhbmRsZXIuaGFuZGxlciA9IFwicmVzdGFydFwiO1xyXG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvTWFpbiBDYW1lcmEvUGF1c2UgTWVudS9CaWcgTGF5b3V0L3Jlc3RhcnRCdG5cIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuY2xpY2tFdmVudHMucHVzaChyZXN0YXJ0X2NsaWNrRXZlbnRIYW5kbGVyKTtcclxuXHJcbiAgICAgICAgbGV0IHNldHRpbmdzX2NsaWNrRXZlbnRIYW5kbGVyID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcclxuICAgICAgICBzZXR0aW5nc19jbGlja0V2ZW50SGFuZGxlci50YXJnZXQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgc2V0dGluZ3NfY2xpY2tFdmVudEhhbmRsZXIuY29tcG9uZW50ID0gXCJHYW1lTWFuYWdlclwiO1xyXG4gICAgICAgIHNldHRpbmdzX2NsaWNrRXZlbnRIYW5kbGVyLmhhbmRsZXIgPSBcInNldHRpbmdzXCI7XHJcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9NYWluIENhbWVyYS9QYXVzZSBNZW51L0JpZyBMYXlvdXQvc2V0dGluZ3NCdG5cIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuY2xpY2tFdmVudHMucHVzaChzZXR0aW5nc19jbGlja0V2ZW50SGFuZGxlcik7XHJcblxyXG4gICAgICAgIGxldCBleGl0X2NsaWNrRXZlbnRIYW5kbGVyID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcclxuICAgICAgICBleGl0X2NsaWNrRXZlbnRIYW5kbGVyLnRhcmdldCA9IHRoaXMubm9kZTtcclxuICAgICAgICBleGl0X2NsaWNrRXZlbnRIYW5kbGVyLmNvbXBvbmVudCA9IFwiR2FtZU1hbmFnZXJcIjtcclxuICAgICAgICBleGl0X2NsaWNrRXZlbnRIYW5kbGVyLmhhbmRsZXIgPSBcImV4aXRcIjtcclxuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL01haW4gQ2FtZXJhL1BhdXNlIE1lbnUvQmlnIExheW91dC9leGl0QnRuXCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2goZXhpdF9jbGlja0V2ZW50SGFuZGxlcik7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzdW1lKCkge1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLnJlc3VtZSgpO1xyXG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvTWFpbiBDYW1lcmEvUGF1c2UgTWVudVwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICByZXN0YXJ0KCkge1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLnJlc3VtZSgpO1xyXG4gICAgICAgIGxldCBzY2VuZU5hbWUgPSBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpLm5hbWU7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwibG9hZGluZ1wiLCAoKT0+e1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoc2NlbmVOYW1lKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzZXR0aW5ncygpIHtcclxuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL01haW4gQ2FtZXJhL1NldHRpbmdzIE1lbnVcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBleGl0KCkge1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BBbGwoKTtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJsb2FkaW5nXCIsICgpPT57XHJcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIm1lbnVcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2V0dGluZ3MgTWVudSBCdXR0b25zXHJcblxyXG4gICAgaW5pdFNldHRpbmdzTWVudUJ1dHRvbnMoKSB7XHJcbiAgICAgICAgbGV0IGNsb3NlX2NsaWNrRXZlbnRIYW5kbGVyID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcclxuICAgICAgICBjbG9zZV9jbGlja0V2ZW50SGFuZGxlci50YXJnZXQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgY2xvc2VfY2xpY2tFdmVudEhhbmRsZXIuY29tcG9uZW50ID0gXCJHYW1lTWFuYWdlclwiO1xyXG4gICAgICAgIGNsb3NlX2NsaWNrRXZlbnRIYW5kbGVyLmhhbmRsZXIgPSBcImNsb3NlXCI7XHJcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9NYWluIENhbWVyYS9TZXR0aW5ncyBNZW51L2Nsb3NlQnRuXCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2goY2xvc2VfY2xpY2tFdmVudEhhbmRsZXIpO1xyXG5cclxuICAgICAgICBsZXQgYmdtdXRlX2NsaWNrRXZlbnRIYW5kbGVyID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcclxuICAgICAgICBiZ211dGVfY2xpY2tFdmVudEhhbmRsZXIudGFyZ2V0ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIGJnbXV0ZV9jbGlja0V2ZW50SGFuZGxlci5jb21wb25lbnQgPSBcIkdhbWVNYW5hZ2VyXCI7XHJcbiAgICAgICAgYmdtdXRlX2NsaWNrRXZlbnRIYW5kbGVyLmhhbmRsZXIgPSBcImJnTXV0ZVwiO1xyXG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvTWFpbiBDYW1lcmEvU2V0dGluZ3MgTWVudS9CaWcgTGF5b3V0L0JHIE11dGUvYmdNdXRlQnRuXCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2goYmdtdXRlX2NsaWNrRXZlbnRIYW5kbGVyKTtcclxuXHJcbiAgICAgICAgbGV0IHNmeG11dGVfY2xpY2tFdmVudEhhbmRsZXIgPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xyXG4gICAgICAgIHNmeG11dGVfY2xpY2tFdmVudEhhbmRsZXIudGFyZ2V0ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIHNmeG11dGVfY2xpY2tFdmVudEhhbmRsZXIuY29tcG9uZW50ID0gXCJHYW1lTWFuYWdlclwiO1xyXG4gICAgICAgIHNmeG11dGVfY2xpY2tFdmVudEhhbmRsZXIuaGFuZGxlciA9IFwic2Z4TXV0ZVwiO1xyXG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvTWFpbiBDYW1lcmEvU2V0dGluZ3MgTWVudS9CaWcgTGF5b3V0L1NGWCBNdXRlL3NmeE11dGVCdG5cIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuY2xpY2tFdmVudHMucHVzaChzZnhtdXRlX2NsaWNrRXZlbnRIYW5kbGVyKTtcclxuICAgIFxyXG4gICAgICAgIGxldCBiZ19zbGlkZXJFdmVudEhhbmRsZXIgPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xyXG4gICAgICAgIGJnX3NsaWRlckV2ZW50SGFuZGxlci50YXJnZXQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgYmdfc2xpZGVyRXZlbnRIYW5kbGVyLmNvbXBvbmVudCA9IFwiR2FtZU1hbmFnZXJcIjtcclxuICAgICAgICBiZ19zbGlkZXJFdmVudEhhbmRsZXIuaGFuZGxlciA9IFwiY2hhbmdlQmdWb2xcIjtcclxuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL01haW4gQ2FtZXJhL1NldHRpbmdzIE1lbnUvQmlnIExheW91dC9CRyBWb2x1bWUvYmdTbGlkZXJcIikuZ2V0Q29tcG9uZW50KGNjLlNsaWRlcikuc2xpZGVFdmVudHMucHVzaChiZ19zbGlkZXJFdmVudEhhbmRsZXIpO1xyXG5cclxuICAgICAgICBsZXQgc2Z4X3NsaWRlckV2ZW50SGFuZGxlciA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgc2Z4X3NsaWRlckV2ZW50SGFuZGxlci50YXJnZXQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgc2Z4X3NsaWRlckV2ZW50SGFuZGxlci5jb21wb25lbnQgPSBcIkdhbWVNYW5hZ2VyXCI7XHJcbiAgICAgICAgc2Z4X3NsaWRlckV2ZW50SGFuZGxlci5oYW5kbGVyID0gXCJjaGFuZ2VTZnhWb2xcIjtcclxuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL01haW4gQ2FtZXJhL1NldHRpbmdzIE1lbnUvQmlnIExheW91dC9TRlggVm9sdW1lL3NmeFNsaWRlclwiKS5nZXRDb21wb25lbnQoY2MuU2xpZGVyKS5zbGlkZUV2ZW50cy5wdXNoKHNmeF9zbGlkZXJFdmVudEhhbmRsZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlKCkge1xyXG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvTWFpbiBDYW1lcmEvU2V0dGluZ3MgTWVudVwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBiZ011dGUoKSB7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0TXVzaWNWb2x1bWUoMCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2Z4TXV0ZSgpIHtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRFZmZlY3RzVm9sdW1lKDApO1xyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZUJnVm9sKCkge1xyXG4gICAgICAgIGxldCB2YWx1ZSA9IGNjLmZpbmQoXCJDYW52YXMvTWFpbiBDYW1lcmEvU2V0dGluZ3MgTWVudS9CaWcgTGF5b3V0L0JHIFZvbHVtZS9iZ1NsaWRlclwiKS5nZXRDb21wb25lbnQoY2MuU2xpZGVyKS5wcm9ncmVzcztcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRNdXNpY1ZvbHVtZSh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlU2Z4Vm9sKCkge1xyXG4gICAgICAgIGxldCB2YWx1ZSA9IGNjLmZpbmQoXCJDYW52YXMvTWFpbiBDYW1lcmEvU2V0dGluZ3MgTWVudS9CaWcgTGF5b3V0L1NGWCBWb2x1bWUvc2Z4U2xpZGVyXCIpLmdldENvbXBvbmVudChjYy5TbGlkZXIpLnByb2dyZXNzO1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldEVmZmVjdHNWb2x1bWUodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldENhbWVyYUFuY2hvcih2YWx1ZSl7XHJcbiAgICAgICAgdGhpcy5jYW1lcmFBbmNob3IgPSB2YWx1ZTtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIGdldFdpbigpe1xyXG4gICAgICAgIHJldHVybiAodGhpcy53aW5uZXIgIT0gbnVsbCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlV2VhcG9uVWkoKXtcclxuICAgICAgICAvLyB2YXIgd2VhcG9uU3ByaXRlID0gY2MuZmluZChcIkNhbnZhcy9NYWluIENhbWVyYS9XZWFwb25VaVwiKS5nZXRDaGlsZEJ5TmFtZShcIlNwcml0ZVwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZTtcclxuICAgICAgICBpZih0aGlzLnBsYXllcil7XHJcbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy5wbGF5ZXIuZ2V0Q3VycldlYXBvbk51bSgpKXtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCIwXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhcy9NYWluIENhbWVyYS9VSS9XZWFwb25VaVwiKS5nZXRDaGlsZEJ5TmFtZShcIlNwcml0ZVwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMud2VhcG9uU3ByaXRlMDtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh3ZWFwb25TcHJpdGUsIFwidXBkYXRld2VhcG9uVWlcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiMVwiOlxyXG4gICAgICAgICAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXMvTWFpbiBDYW1lcmEvVUkvV2VhcG9uVWlcIikuZ2V0Q2hpbGRCeU5hbWUoXCJTcHJpdGVcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLndlYXBvblNwcml0ZTE7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiMlwiOlxyXG4gICAgICAgICAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXMvTWFpbiBDYW1lcmEvVUkvV2VhcG9uVWlcIikuZ2V0Q2hpbGRCeU5hbWUoXCJTcHJpdGVcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLndlYXBvblNwcml0ZTI7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiM1wiOlxyXG4gICAgICAgICAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXMvTWFpbiBDYW1lcmEvVUkvV2VhcG9uVWlcIikuZ2V0Q2hpbGRCeU5hbWUoXCJTcHJpdGVcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLndlYXBvblNwcml0ZTM7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiNFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXMvTWFpbiBDYW1lcmEvVUkvV2VhcG9uVWlcIikuZ2V0Q2hpbGRCeU5hbWUoXCJTcHJpdGVcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLndlYXBvblNwcml0ZTQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXMvTWFpbiBDYW1lcmEvVUkvV2VhcG9uVWlcIikuZ2V0Q2hpbGRCeU5hbWUoXCJTcHJpdGVcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLndlYXBvblNwcml0ZTM7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcGxheWVyRGllKCl7XHJcbiAgICAgICAgdGhpcy5hbGl2ZVBsYXllciAtPSAxO1xyXG4gICAgICAgIGlmICh0aGlzLmFsaXZlUGxheWVyID09IDEpe1xyXG4gICAgICAgICAgICB0aGlzLlVJLnRpbWVyVmFsID0gMjA7XHJcbiAgICAgICAgICAgIHRoaXMud2lubmVyID0gdGhpcy5wbGF5ZXIucGxheWVyTmFtZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZztcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy53aW5uZXIpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnBsYXllci5pc0RpZSwgXCJkaWVcIik7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlUGxheWVyKHRoaXMuY3VyclBsYXllciArIDEpO1xyXG4gICAgICAgICAgICAvL3RoaXMuVUkucGF1c2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlUGxheWVyVWkoKXtcclxuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL01haW4gQ2FtZXJhL1VJL1Byb2ZpbGUvbmFtZVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHRoaXMucGxheWVyLnBsYXllck5hbWUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmc7XHJcblxyXG4gICAgICAgIHN3aXRjaCh0aGlzLnBsYXllci5wbGF5ZXJDaGFyKXtcclxuICAgICAgICAgICAgY2FzZSBcImNoYXIxXCI6XHJcbiAgICAgICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzL01haW4gQ2FtZXJhL1VJL1Byb2ZpbGUvZmFjZTBcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXMvTWFpbiBDYW1lcmEvVUkvUHJvZmlsZS9mYWNlMVwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXMvTWFpbiBDYW1lcmEvVUkvUHJvZmlsZS9mYWNlMlwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXMvTWFpbiBDYW1lcmEvVUkvUHJvZmlsZS9mYWNlM1wiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiY2hhcjJcIjpcclxuICAgICAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXMvTWFpbiBDYW1lcmEvVUkvUHJvZmlsZS9mYWNlMFwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXMvTWFpbiBDYW1lcmEvVUkvUHJvZmlsZS9mYWNlMVwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhcy9NYWluIENhbWVyYS9VSS9Qcm9maWxlL2ZhY2UyXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhcy9NYWluIENhbWVyYS9VSS9Qcm9maWxlL2ZhY2UzXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjaGFyM1wiOlxyXG4gICAgICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhcy9NYWluIENhbWVyYS9VSS9Qcm9maWxlL2ZhY2UwXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhcy9NYWluIENhbWVyYS9VSS9Qcm9maWxlL2ZhY2UxXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhcy9NYWluIENhbWVyYS9VSS9Qcm9maWxlL2ZhY2UyXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzL01haW4gQ2FtZXJhL1VJL1Byb2ZpbGUvZmFjZTNcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImNoYXI0XCI6XHJcbiAgICAgICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzL01haW4gQ2FtZXJhL1VJL1Byb2ZpbGUvZmFjZTBcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzL01haW4gQ2FtZXJhL1VJL1Byb2ZpbGUvZmFjZTFcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzL01haW4gQ2FtZXJhL1VJL1Byb2ZpbGUvZmFjZTJcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzL01haW4gQ2FtZXJhL1VJL1Byb2ZpbGUvZmFjZTNcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhcy9NYWluIENhbWVyYS9VSS9Qcm9maWxlL2ZhY2UwXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzL01haW4gQ2FtZXJhL1VJL1Byb2ZpbGUvZmFjZTFcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzL01haW4gQ2FtZXJhL1VJL1Byb2ZpbGUvZmFjZTJcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzL01haW4gQ2FtZXJhL1VJL1Byb2ZpbGUvZmFjZTNcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q3VyclBsYXllcigpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJQbGF5ZXI7XHJcbiAgICB9XHJcbn1cclxuIl19