
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Menu.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4c768amPVpFL4Dw/rwyD4dp', 'Menu');
// scripts/Menu.ts

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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Menu = /** @class */ (function (_super) {
    __extends(Menu, _super);
    function Menu() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bgm = null;
        return _this;
    }
    Menu.prototype.onLoad = function () {
        if (!cc.audioEngine.isMusicPlaying()) {
            this.playBGM();
        }
        this.loadUserStats();
        this.initMenuButtons();
        this.initSettingsMenuButtons();
    };
    Menu.prototype.start = function () { };
    Menu.prototype.playBGM = function () {
        cc.audioEngine.playMusic(this.bgm, true);
    };
    Menu.prototype.loadUserStats = function () {
        return __awaiter(this, void 0, void 0, function () {
            var user, stats;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        user = firebase.auth().currentUser;
                        if (!user) return [3 /*break*/, 2];
                        stats = firebase.database().ref("userData/" + user.uid);
                        return [4 /*yield*/, stats.once("value").then(function (snapshot) {
                                _this.setUserStat(snapshot.val().coin, snapshot.val().gem, snapshot.val().char1, snapshot.val().char2, snapshot.val().char3, snapshot.val().char4, snapshot.val().AK47, snapshot.val().AR, snapshot.val().grenade, snapshot.val().shotgun, snapshot.val().sniper, snapshot.val().purple, snapshot.val().forest, snapshot.val().username);
                            })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        this.setUserStat(0, 0, true, false, false, false, true, false, false, false, false, true, false, "");
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Menu.prototype.setUserStat = function (coin, gem, char1, char2, char3, char4, AK47, AR, grenade, shotgun, sniper, purple, forest, username) {
        cc.sys.localStorage.setItem("coin", coin);
        cc.sys.localStorage.setItem("gem", gem);
        cc.sys.localStorage.setItem("char1", char1);
        cc.sys.localStorage.setItem("char2", char2);
        cc.sys.localStorage.setItem("char3", char3);
        cc.sys.localStorage.setItem("char4", char4);
        cc.sys.localStorage.setItem("AK47", AK47);
        cc.sys.localStorage.setItem("AR", AR);
        cc.sys.localStorage.setItem("grenade", grenade);
        cc.sys.localStorage.setItem("shotgun", shotgun);
        cc.sys.localStorage.setItem("sniper", sniper);
        cc.sys.localStorage.setItem("purple", purple);
        cc.sys.localStorage.setItem("forest", forest);
        cc.sys.localStorage.setItem("username", username);
    };
    Menu.prototype.initMenuButtons = function () {
        var instrbtn = new cc.Component.EventHandler();
        instrbtn.target = this.node;
        instrbtn.component = "Menu";
        instrbtn.handler = "loadInstructions";
        cc.find("HowToPlay").getComponent(cc.Button).clickEvents.push(instrbtn);
        var playbtn = new cc.Component.EventHandler();
        playbtn.target = this.node;
        playbtn.component = "Menu";
        playbtn.handler = "loadPlayInstructions";
        cc.find("YellowButton").getComponent(cc.Button).clickEvents.push(playbtn);
        var play2btn = new cc.Component.EventHandler();
        play2btn.target = this.node;
        play2btn.component = "Menu";
        play2btn.handler = "loadPlayInstructions";
        cc.find("YellowButton/Play").getComponent(cc.Button).clickEvents.push(play2btn);
        var settings_clickEventHandler = new cc.Component.EventHandler();
        settings_clickEventHandler.target = this.node;
        settings_clickEventHandler.component = "Menu";
        settings_clickEventHandler.handler = "settings";
        cc.find("SettingsBtn").getComponent(cc.Button).clickEvents.push(settings_clickEventHandler);
        var shopbtn = new cc.Component.EventHandler();
        shopbtn.target = this.node;
        shopbtn.component = "Menu";
        shopbtn.handler = "loadShop";
        cc.find("shop").getComponent(cc.Button).clickEvents.push(shopbtn);
        var xbtn = new cc.Component.EventHandler();
        xbtn.target = this.node;
        xbtn.component = "Menu";
        xbtn.handler = "loadQuitGame";
        cc.find("X button").getComponent(cc.Button).clickEvents.push(xbtn);
    };
    Menu.prototype.loadShop = function () {
        cc.director.loadScene("shop");
    };
    Menu.prototype.loadQuitGame = function () {
        firebase.auth().signOut()
            .then(function () {
            cc.director.loadScene("main menu");
        });
    };
    Menu.prototype.loadInstructions = function () {
        cc.director.loadScene("instructions");
    };
    Menu.prototype.loadPlayInstructions = function () {
        cc.director.loadScene("player choose");
    };
    Menu.prototype.settings = function () {
        cc.find("Settings Menu").active = true;
    };
    Menu.prototype.initSettingsMenuButtons = function () {
        var close_clickEventHandler = new cc.Component.EventHandler();
        close_clickEventHandler.target = this.node;
        close_clickEventHandler.component = "Menu";
        close_clickEventHandler.handler = "close";
        cc.find("Settings Menu/closeBtn").getComponent(cc.Button).clickEvents.push(close_clickEventHandler);
        var bgmute_clickEventHandler = new cc.Component.EventHandler();
        bgmute_clickEventHandler.target = this.node;
        bgmute_clickEventHandler.component = "Menu";
        bgmute_clickEventHandler.handler = "bgMute";
        cc.find("Settings Menu/Big Layout/BG Mute/bgMuteBtn").getComponent(cc.Button).clickEvents.push(bgmute_clickEventHandler);
        var sfxmute_clickEventHandler = new cc.Component.EventHandler();
        sfxmute_clickEventHandler.target = this.node;
        sfxmute_clickEventHandler.component = "Menu";
        sfxmute_clickEventHandler.handler = "sfxMute";
        cc.find("Settings Menu/Big Layout/SFX Mute/sfxMuteBtn").getComponent(cc.Button).clickEvents.push(sfxmute_clickEventHandler);
        var bg_sliderEventHandler = new cc.Component.EventHandler();
        bg_sliderEventHandler.target = this.node;
        bg_sliderEventHandler.component = "Menu";
        bg_sliderEventHandler.handler = "changeBgVol";
        cc.find("Settings Menu/Big Layout/BG Volume/bgSlider").getComponent(cc.Slider).slideEvents.push(bg_sliderEventHandler);
        var sfx_sliderEventHandler = new cc.Component.EventHandler();
        sfx_sliderEventHandler.target = this.node;
        sfx_sliderEventHandler.component = "Menu";
        sfx_sliderEventHandler.handler = "changeSfxVol";
        cc.find("Settings Menu/Big Layout/SFX Volume/sfxSlider").getComponent(cc.Slider).slideEvents.push(sfx_sliderEventHandler);
    };
    Menu.prototype.close = function () {
        cc.find("Settings Menu").active = false;
    };
    Menu.prototype.bgMute = function () {
        cc.audioEngine.setMusicVolume(0);
    };
    Menu.prototype.sfxMute = function () {
        cc.audioEngine.setEffectsVolume(0);
    };
    Menu.prototype.changeBgVol = function () {
        var value = cc.find("Settings Menu/Big Layout/BG Volume/bgSlider").getComponent(cc.Slider).progress;
        cc.audioEngine.setMusicVolume(value);
    };
    Menu.prototype.changeSfxVol = function () {
        var value = cc.find("Settings Menu/Big Layout/SFX Volume/sfxSlider").getComponent(cc.Slider).progress;
        cc.audioEngine.setEffectsVolume(value);
    };
    __decorate([
        property(cc.AudioClip)
    ], Menu.prototype, "bgm", void 0);
    Menu = __decorate([
        ccclass
    ], Menu);
    return Menu;
}(cc.Component));
exports.default = Menu;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcTWVudS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFrQyx3QkFBWTtJQUE5QztRQUFBLHFFQTJLQztRQXhLRyxTQUFHLEdBQWlCLElBQUksQ0FBQzs7SUF3SzdCLENBQUM7SUFsS0cscUJBQU0sR0FBTjtRQUNJLElBQUcsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLGNBQWMsRUFBRSxFQUFFO1lBQ2pDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUNsQjtRQUNELElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLHVCQUF1QixFQUFFLENBQUM7SUFDbkMsQ0FBQztJQUVELG9CQUFLLEdBQUwsY0FBVSxDQUFDO0lBRVgsc0JBQU8sR0FBUDtRQUNJLEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVLLDRCQUFhLEdBQW5COzs7Ozs7O3dCQUNRLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsV0FBVyxDQUFDOzZCQUNwQyxJQUFJLEVBQUosd0JBQUk7d0JBQ0MsS0FBSyxHQUFHLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxHQUFHLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDNUQscUJBQU0sS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxRQUFRO2dDQUNwQyxLQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBQyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsS0FBSyxFQUM3RSxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDLEtBQUssRUFDaEUsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDLE9BQU8sRUFDdEYsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFBOzRCQUNqRyxDQUFDLENBQUMsRUFBQTs7d0JBTEYsU0FLRSxDQUFBOzs7d0JBRUYsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7Ozs7OztLQUU1RztJQUVELDBCQUFXLEdBQVgsVUFBWSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsUUFBUTtRQUMzRyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDeEMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztRQUM1QyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzVDLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDNUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztRQUM1QyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDdEMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNoRCxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ2hELEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDOUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUM5QyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFD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LENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztxQ0FDRTtJQUhSLElBQUk7UUFEeEIsT0FBTztPQUNhLElBQUksQ0EyS3hCO0lBQUQsV0FBQztDQTNLRCxBQTJLQyxDQTNLaUMsRUFBRSxDQUFDLFNBQVMsR0EySzdDO2tCQTNLb0IsSUFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImRlY2xhcmUgY29uc3QgZmlyZWJhc2U6IGFueTtcclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgYmdtOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAgICAgRWRpdF9Cb3g6IGNjLkVkaXRCb3gsXHJcbiAgICB9XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIGlmKCFjYy5hdWRpb0VuZ2luZS5pc011c2ljUGxheWluZygpKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGxheUJHTSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmxvYWRVc2VyU3RhdHMoKTtcclxuICAgICAgICB0aGlzLmluaXRNZW51QnV0dG9ucygpO1xyXG4gICAgICAgIHRoaXMuaW5pdFNldHRpbmdzTWVudUJ1dHRvbnMoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCAoKSB7fVxyXG5cclxuICAgIHBsYXlCR00oKSB7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheU11c2ljKHRoaXMuYmdtLCB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBsb2FkVXNlclN0YXRzKCkge1xyXG4gICAgICAgIHZhciB1c2VyID0gZmlyZWJhc2UuYXV0aCgpLmN1cnJlbnRVc2VyO1xyXG4gICAgICAgIGlmKHVzZXIpIHtcclxuICAgICAgICAgICAgdmFyIHN0YXRzID0gZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoXCJ1c2VyRGF0YS9cIiArIHVzZXIudWlkKTtcclxuICAgICAgICAgICAgYXdhaXQgc3RhdHMub25jZShcInZhbHVlXCIpLnRoZW4oKHNuYXBzaG90KT0+e1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRVc2VyU3RhdChzbmFwc2hvdC52YWwoKS5jb2luLCBzbmFwc2hvdC52YWwoKS5nZW0sc25hcHNob3QudmFsKCkuY2hhcjEsXHJcbiAgICAgICAgICAgICAgICBzbmFwc2hvdC52YWwoKS5jaGFyMiwgc25hcHNob3QudmFsKCkuY2hhcjMsIHNuYXBzaG90LnZhbCgpLmNoYXI0LFxyXG4gICAgICAgICAgICAgICAgc25hcHNob3QudmFsKCkuQUs0Nywgc25hcHNob3QudmFsKCkuQVIsIHNuYXBzaG90LnZhbCgpLmdyZW5hZGUsIHNuYXBzaG90LnZhbCgpLnNob3RndW4sXHJcbiAgICAgICAgICAgICAgICBzbmFwc2hvdC52YWwoKS5zbmlwZXIsIHNuYXBzaG90LnZhbCgpLnB1cnBsZSwgc25hcHNob3QudmFsKCkuZm9yZXN0LCBzbmFwc2hvdC52YWwoKS51c2VybmFtZSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldFVzZXJTdGF0KDAsIDAsIHRydWUsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIHRydWUsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCB0cnVlLCBmYWxzZSwgXCJcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldFVzZXJTdGF0KGNvaW4sIGdlbSwgY2hhcjEsIGNoYXIyLCBjaGFyMywgY2hhcjQsIEFLNDcsIEFSLCBncmVuYWRlLCBzaG90Z3VuLCBzbmlwZXIsIHB1cnBsZSwgZm9yZXN0LCB1c2VybmFtZSkge1xyXG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNvaW5cIiwgY29pbik7XHJcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZ2VtXCIsIGdlbSk7XHJcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2hhcjFcIiwgY2hhcjEpO1xyXG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNoYXIyXCIsIGNoYXIyKTtcclxuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjaGFyM1wiLCBjaGFyMyk7XHJcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2hhcjRcIiwgY2hhcjQpO1xyXG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIkFLNDdcIiwgQUs0Nyk7XHJcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiQVJcIiwgQVIpO1xyXG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImdyZW5hZGVcIiwgZ3JlbmFkZSk7XHJcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic2hvdGd1blwiLCBzaG90Z3VuKTtcclxuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzbmlwZXJcIiwgc25pcGVyKTtcclxuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwdXJwbGVcIiwgcHVycGxlKTtcclxuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJmb3Jlc3RcIiwgZm9yZXN0KTtcclxuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VybmFtZVwiLCB1c2VybmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdE1lbnVCdXR0b25zKCkge1xyXG4gICAgICAgIGxldCBpbnN0cmJ0biA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgaW5zdHJidG4udGFyZ2V0ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIGluc3RyYnRuLmNvbXBvbmVudCA9IFwiTWVudVwiO1xyXG4gICAgICAgIGluc3RyYnRuLmhhbmRsZXIgPSBcImxvYWRJbnN0cnVjdGlvbnNcIjtcclxuICAgICAgICBjYy5maW5kKFwiSG93VG9QbGF5XCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2goaW5zdHJidG4pO1xyXG5cclxuICAgICAgICBsZXQgcGxheWJ0biA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgcGxheWJ0bi50YXJnZXQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgcGxheWJ0bi5jb21wb25lbnQgPSBcIk1lbnVcIjtcclxuICAgICAgICBwbGF5YnRuLmhhbmRsZXIgPSBcImxvYWRQbGF5SW5zdHJ1Y3Rpb25zXCI7XHJcbiAgICAgICAgY2MuZmluZChcIlllbGxvd0J1dHRvblwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5jbGlja0V2ZW50cy5wdXNoKHBsYXlidG4pO1xyXG5cclxuICAgICAgICBsZXQgcGxheTJidG4gPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xyXG4gICAgICAgIHBsYXkyYnRuLnRhcmdldCA9IHRoaXMubm9kZTtcclxuICAgICAgICBwbGF5MmJ0bi5jb21wb25lbnQgPSBcIk1lbnVcIjtcclxuICAgICAgICBwbGF5MmJ0bi5oYW5kbGVyID0gXCJsb2FkUGxheUluc3RydWN0aW9uc1wiO1xyXG4gICAgICAgIGNjLmZpbmQoXCJZZWxsb3dCdXR0b24vUGxheVwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5jbGlja0V2ZW50cy5wdXNoKHBsYXkyYnRuKTtcclxuXHJcbiAgICAgICAgbGV0IHNldHRpbmdzX2NsaWNrRXZlbnRIYW5kbGVyID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcclxuICAgICAgICBzZXR0aW5nc19jbGlja0V2ZW50SGFuZGxlci50YXJnZXQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgc2V0dGluZ3NfY2xpY2tFdmVudEhhbmRsZXIuY29tcG9uZW50ID0gXCJNZW51XCI7XHJcbiAgICAgICAgc2V0dGluZ3NfY2xpY2tFdmVudEhhbmRsZXIuaGFuZGxlciA9IFwic2V0dGluZ3NcIjtcclxuICAgICAgICBjYy5maW5kKFwiU2V0dGluZ3NCdG5cIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuY2xpY2tFdmVudHMucHVzaChzZXR0aW5nc19jbGlja0V2ZW50SGFuZGxlcik7XHJcblxyXG4gICAgICAgIGxldCBzaG9wYnRuID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcclxuICAgICAgICBzaG9wYnRuLnRhcmdldCA9IHRoaXMubm9kZTtcclxuICAgICAgICBzaG9wYnRuLmNvbXBvbmVudCA9IFwiTWVudVwiO1xyXG4gICAgICAgIHNob3BidG4uaGFuZGxlciA9IFwibG9hZFNob3BcIjtcclxuICAgICAgICBjYy5maW5kKFwic2hvcFwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5jbGlja0V2ZW50cy5wdXNoKHNob3BidG4pO1xyXG5cclxuICAgICAgICBsZXQgeGJ0biA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgeGJ0bi50YXJnZXQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgeGJ0bi5jb21wb25lbnQgPSBcIk1lbnVcIjtcclxuICAgICAgICB4YnRuLmhhbmRsZXIgPSBcImxvYWRRdWl0R2FtZVwiO1xyXG4gICAgICAgIGNjLmZpbmQoXCJYIGJ1dHRvblwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5jbGlja0V2ZW50cy5wdXNoKHhidG4pO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWRTaG9wKCl7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwic2hvcFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkUXVpdEdhbWUoKXtcclxuICAgICAgICBmaXJlYmFzZS5hdXRoKCkuc2lnbk91dCgpXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIm1haW4gbWVudVwiKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZEluc3RydWN0aW9ucygpe1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImluc3RydWN0aW9uc1wiKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkUGxheUluc3RydWN0aW9ucygpe1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcInBsYXllciBjaG9vc2VcIik7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0dGluZ3MoKSB7XHJcbiAgICAgICAgY2MuZmluZChcIlNldHRpbmdzIE1lbnVcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0U2V0dGluZ3NNZW51QnV0dG9ucygpIHtcclxuICAgICAgICBsZXQgY2xvc2VfY2xpY2tFdmVudEhhbmRsZXIgPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xyXG4gICAgICAgIGNsb3NlX2NsaWNrRXZlbnRIYW5kbGVyLnRhcmdldCA9IHRoaXMubm9kZTtcclxuICAgICAgICBjbG9zZV9jbGlja0V2ZW50SGFuZGxlci5jb21wb25lbnQgPSBcIk1lbnVcIjtcclxuICAgICAgICBjbG9zZV9jbGlja0V2ZW50SGFuZGxlci5oYW5kbGVyID0gXCJjbG9zZVwiO1xyXG4gICAgICAgIGNjLmZpbmQoXCJTZXR0aW5ncyBNZW51L2Nsb3NlQnRuXCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2goY2xvc2VfY2xpY2tFdmVudEhhbmRsZXIpO1xyXG5cclxuICAgICAgICBsZXQgYmdtdXRlX2NsaWNrRXZlbnRIYW5kbGVyID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcclxuICAgICAgICBiZ211dGVfY2xpY2tFdmVudEhhbmRsZXIudGFyZ2V0ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIGJnbXV0ZV9jbGlja0V2ZW50SGFuZGxlci5jb21wb25lbnQgPSBcIk1lbnVcIjtcclxuICAgICAgICBiZ211dGVfY2xpY2tFdmVudEhhbmRsZXIuaGFuZGxlciA9IFwiYmdNdXRlXCI7XHJcbiAgICAgICAgY2MuZmluZChcIlNldHRpbmdzIE1lbnUvQmlnIExheW91dC9CRyBNdXRlL2JnTXV0ZUJ0blwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5jbGlja0V2ZW50cy5wdXNoKGJnbXV0ZV9jbGlja0V2ZW50SGFuZGxlcik7XHJcblxyXG4gICAgICAgIGxldCBzZnhtdXRlX2NsaWNrRXZlbnRIYW5kbGVyID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcclxuICAgICAgICBzZnhtdXRlX2NsaWNrRXZlbnRIYW5kbGVyLnRhcmdldCA9IHRoaXMubm9kZTtcclxuICAgICAgICBzZnhtdXRlX2NsaWNrRXZlbnRIYW5kbGVyLmNvbXBvbmVudCA9IFwiTWVudVwiO1xyXG4gICAgICAgIHNmeG11dGVfY2xpY2tFdmVudEhhbmRsZXIuaGFuZGxlciA9IFwic2Z4TXV0ZVwiO1xyXG4gICAgICAgIGNjLmZpbmQoXCJTZXR0aW5ncyBNZW51L0JpZyBMYXlvdXQvU0ZYIE11dGUvc2Z4TXV0ZUJ0blwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5jbGlja0V2ZW50cy5wdXNoKHNmeG11dGVfY2xpY2tFdmVudEhhbmRsZXIpO1xyXG4gICAgXHJcbiAgICAgICAgbGV0IGJnX3NsaWRlckV2ZW50SGFuZGxlciA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgYmdfc2xpZGVyRXZlbnRIYW5kbGVyLnRhcmdldCA9IHRoaXMubm9kZTtcclxuICAgICAgICBiZ19zbGlkZXJFdmVudEhhbmRsZXIuY29tcG9uZW50ID0gXCJNZW51XCI7XHJcbiAgICAgICAgYmdfc2xpZGVyRXZlbnRIYW5kbGVyLmhhbmRsZXIgPSBcImNoYW5nZUJnVm9sXCI7XHJcbiAgICAgICAgY2MuZmluZChcIlNldHRpbmdzIE1lbnUvQmlnIExheW91dC9CRyBWb2x1bWUvYmdTbGlkZXJcIikuZ2V0Q29tcG9uZW50KGNjLlNsaWRlcikuc2xpZGVFdmVudHMucHVzaChiZ19zbGlkZXJFdmVudEhhbmRsZXIpO1xyXG5cclxuICAgICAgICBsZXQgc2Z4X3NsaWRlckV2ZW50SGFuZGxlciA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgc2Z4X3NsaWRlckV2ZW50SGFuZGxlci50YXJnZXQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgc2Z4X3NsaWRlckV2ZW50SGFuZGxlci5jb21wb25lbnQgPSBcIk1lbnVcIjtcclxuICAgICAgICBzZnhfc2xpZGVyRXZlbnRIYW5kbGVyLmhhbmRsZXIgPSBcImNoYW5nZVNmeFZvbFwiO1xyXG4gICAgICAgIGNjLmZpbmQoXCJTZXR0aW5ncyBNZW51L0JpZyBMYXlvdXQvU0ZYIFZvbHVtZS9zZnhTbGlkZXJcIikuZ2V0Q29tcG9uZW50KGNjLlNsaWRlcikuc2xpZGVFdmVudHMucHVzaChzZnhfc2xpZGVyRXZlbnRIYW5kbGVyKTtcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZSgpIHtcclxuICAgICAgICBjYy5maW5kKFwiU2V0dGluZ3MgTWVudVwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBiZ011dGUoKSB7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0TXVzaWNWb2x1bWUoMCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2Z4TXV0ZSgpIHtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRFZmZlY3RzVm9sdW1lKDApO1xyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZUJnVm9sKCkge1xyXG4gICAgICAgIGxldCB2YWx1ZSA9IGNjLmZpbmQoXCJTZXR0aW5ncyBNZW51L0JpZyBMYXlvdXQvQkcgVm9sdW1lL2JnU2xpZGVyXCIpLmdldENvbXBvbmVudChjYy5TbGlkZXIpLnByb2dyZXNzO1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldE11c2ljVm9sdW1lKHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VTZnhWb2woKSB7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gY2MuZmluZChcIlNldHRpbmdzIE1lbnUvQmlnIExheW91dC9TRlggVm9sdW1lL3NmeFNsaWRlclwiKS5nZXRDb21wb25lbnQoY2MuU2xpZGVyKS5wcm9ncmVzcztcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRFZmZlY3RzVm9sdW1lKHZhbHVlKTtcclxuICAgIH1cclxuXHJcbn1cclxuIl19