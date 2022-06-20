
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
        this.playBGM();
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
        cc.director.end();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcTWVudS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFrQyx3QkFBWTtJQUE5QztRQUFBLHFFQXFLQztRQWxLRyxTQUFHLEdBQWlCLElBQUksQ0FBQzs7SUFrSzdCLENBQUM7SUE1SkcscUJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNmLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztJQUNuQyxDQUFDO0lBRUQsb0JBQUssR0FBTCxjQUFVLENBQUM7SUFFWCxzQkFBTyxHQUFQO1FBQ0ksRUFBRSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUssNEJBQWEsR0FBbkI7Ozs7Ozs7d0JBQ1EsSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxXQUFXLENBQUM7NkJBQ3BDLElBQUksRUFBSix3QkFBSTt3QkFDQyxLQUFLLEdBQUcsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUM1RCxxQkFBTSxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLFFBQVE7Z0NBQ3BDLEtBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxLQUFLLEVBQzdFLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsS0FBSyxFQUNoRSxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUUsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsT0FBTyxFQUN0RixRQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUE7NEJBQ2pHLENBQUMsQ0FBQyxFQUFBOzt3QkFMRixTQUtFLENBQUE7Ozt3QkFFRixJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQzs7Ozs7O0tBRTVHO0lBRUQsMEJBQVcsR0FBWCxVQUFZLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxRQUFRO1FBQzNHLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDMUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztRQUN4QyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzVDLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDNUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztRQUM1QyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzVDLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDMUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN0QyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ2hELEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDaEQsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUM5QyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzlDLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDOUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRUQs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ZW50IjpbImRlY2xhcmUgY29uc3QgZmlyZWJhc2U6IGFueTtcclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgYmdtOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAgICAgRWRpdF9Cb3g6IGNjLkVkaXRCb3gsXHJcbiAgICB9XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMucGxheUJHTSgpO1xyXG4gICAgICAgIHRoaXMuaW5pdE1lbnVCdXR0b25zKCk7XHJcbiAgICAgICAgdGhpcy5pbml0U2V0dGluZ3NNZW51QnV0dG9ucygpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0ICgpIHt9XHJcblxyXG4gICAgcGxheUJHTSgpIHtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWModGhpcy5iZ20sIHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGxvYWRVc2VyU3RhdHMoKSB7XHJcbiAgICAgICAgdmFyIHVzZXIgPSBmaXJlYmFzZS5hdXRoKCkuY3VycmVudFVzZXI7XHJcbiAgICAgICAgaWYodXNlcikge1xyXG4gICAgICAgICAgICB2YXIgc3RhdHMgPSBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZihcInVzZXJEYXRhL1wiICsgdXNlci51aWQpO1xyXG4gICAgICAgICAgICBhd2FpdCBzdGF0cy5vbmNlKFwidmFsdWVcIikudGhlbigoc25hcHNob3QpPT57XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFVzZXJTdGF0KHNuYXBzaG90LnZhbCgpLmNvaW4sIHNuYXBzaG90LnZhbCgpLmdlbSxzbmFwc2hvdC52YWwoKS5jaGFyMSxcclxuICAgICAgICAgICAgICAgIHNuYXBzaG90LnZhbCgpLmNoYXIyLCBzbmFwc2hvdC52YWwoKS5jaGFyMywgc25hcHNob3QudmFsKCkuY2hhcjQsXHJcbiAgICAgICAgICAgICAgICBzbmFwc2hvdC52YWwoKS5BSzQ3LCBzbmFwc2hvdC52YWwoKS5BUiwgc25hcHNob3QudmFsKCkuZ3JlbmFkZSwgc25hcHNob3QudmFsKCkuc2hvdGd1bixcclxuICAgICAgICAgICAgICAgIHNuYXBzaG90LnZhbCgpLnNuaXBlciwgc25hcHNob3QudmFsKCkucHVycGxlLCBzbmFwc2hvdC52YWwoKS5mb3Jlc3QsIHNuYXBzaG90LnZhbCgpLnVzZXJuYW1lKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0VXNlclN0YXQoMCwgMCwgdHJ1ZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgdHJ1ZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIHRydWUsIGZhbHNlLCBcIlwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VXNlclN0YXQoY29pbiwgZ2VtLCBjaGFyMSwgY2hhcjIsIGNoYXIzLCBjaGFyNCwgQUs0NywgQVIsIGdyZW5hZGUsIHNob3RndW4sIHNuaXBlciwgcHVycGxlLCBmb3Jlc3QsIHVzZXJuYW1lKSB7XHJcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY29pblwiLCBjb2luKTtcclxuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJnZW1cIiwgZ2VtKTtcclxuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjaGFyMVwiLCBjaGFyMSk7XHJcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2hhcjJcIiwgY2hhcjIpO1xyXG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNoYXIzXCIsIGNoYXIzKTtcclxuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjaGFyNFwiLCBjaGFyNCk7XHJcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiQUs0N1wiLCBBSzQ3KTtcclxuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJBUlwiLCBBUik7XHJcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZ3JlbmFkZVwiLCBncmVuYWRlKTtcclxuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzaG90Z3VuXCIsIHNob3RndW4pO1xyXG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInNuaXBlclwiLCBzbmlwZXIpO1xyXG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInB1cnBsZVwiLCBwdXJwbGUpO1xyXG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImZvcmVzdFwiLCBmb3Jlc3QpO1xyXG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXJuYW1lXCIsIHVzZXJuYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0TWVudUJ1dHRvbnMoKSB7XHJcbiAgICAgICAgbGV0IGluc3RyYnRuID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcclxuICAgICAgICBpbnN0cmJ0bi50YXJnZXQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgaW5zdHJidG4uY29tcG9uZW50ID0gXCJNZW51XCI7XHJcbiAgICAgICAgaW5zdHJidG4uaGFuZGxlciA9IFwibG9hZEluc3RydWN0aW9uc1wiO1xyXG4gICAgICAgIGNjLmZpbmQoXCJIb3dUb1BsYXlcIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuY2xpY2tFdmVudHMucHVzaChpbnN0cmJ0bik7XHJcblxyXG4gICAgICAgIGxldCBwbGF5YnRuID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcclxuICAgICAgICBwbGF5YnRuLnRhcmdldCA9IHRoaXMubm9kZTtcclxuICAgICAgICBwbGF5YnRuLmNvbXBvbmVudCA9IFwiTWVudVwiO1xyXG4gICAgICAgIHBsYXlidG4uaGFuZGxlciA9IFwibG9hZFBsYXlJbnN0cnVjdGlvbnNcIjtcclxuICAgICAgICBjYy5maW5kKFwiWWVsbG93QnV0dG9uXCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2gocGxheWJ0bik7XHJcblxyXG4gICAgICAgIGxldCBwbGF5MmJ0biA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgcGxheTJidG4udGFyZ2V0ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIHBsYXkyYnRuLmNvbXBvbmVudCA9IFwiTWVudVwiO1xyXG4gICAgICAgIHBsYXkyYnRuLmhhbmRsZXIgPSBcImxvYWRQbGF5SW5zdHJ1Y3Rpb25zXCI7XHJcbiAgICAgICAgY2MuZmluZChcIlllbGxvd0J1dHRvbi9QbGF5XCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2gocGxheTJidG4pO1xyXG5cclxuICAgICAgICBsZXQgc2V0dGluZ3NfY2xpY2tFdmVudEhhbmRsZXIgPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xyXG4gICAgICAgIHNldHRpbmdzX2NsaWNrRXZlbnRIYW5kbGVyLnRhcmdldCA9IHRoaXMubm9kZTtcclxuICAgICAgICBzZXR0aW5nc19jbGlja0V2ZW50SGFuZGxlci5jb21wb25lbnQgPSBcIk1lbnVcIjtcclxuICAgICAgICBzZXR0aW5nc19jbGlja0V2ZW50SGFuZGxlci5oYW5kbGVyID0gXCJzZXR0aW5nc1wiO1xyXG4gICAgICAgIGNjLmZpbmQoXCJTZXR0aW5nc0J0blwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5jbGlja0V2ZW50cy5wdXNoKHNldHRpbmdzX2NsaWNrRXZlbnRIYW5kbGVyKTtcclxuXHJcbiAgICAgICAgbGV0IHNob3BidG4gPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xyXG4gICAgICAgIHNob3BidG4udGFyZ2V0ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIHNob3BidG4uY29tcG9uZW50ID0gXCJNZW51XCI7XHJcbiAgICAgICAgc2hvcGJ0bi5oYW5kbGVyID0gXCJsb2FkU2hvcFwiO1xyXG4gICAgICAgIGNjLmZpbmQoXCJzaG9wXCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2goc2hvcGJ0bik7XHJcblxyXG4gICAgICAgIGxldCB4YnRuID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcclxuICAgICAgICB4YnRuLnRhcmdldCA9IHRoaXMubm9kZTtcclxuICAgICAgICB4YnRuLmNvbXBvbmVudCA9IFwiTWVudVwiO1xyXG4gICAgICAgIHhidG4uaGFuZGxlciA9IFwibG9hZFF1aXRHYW1lXCI7XHJcbiAgICAgICAgY2MuZmluZChcIlggYnV0dG9uXCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2goeGJ0bik7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZFNob3AoKXtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJzaG9wXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWRRdWl0R2FtZSgpe1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmVuZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWRJbnN0cnVjdGlvbnMoKXtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJpbnN0cnVjdGlvbnNcIik7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZFBsYXlJbnN0cnVjdGlvbnMoKXtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJwbGF5ZXIgY2hvb3NlXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldHRpbmdzKCkge1xyXG4gICAgICAgIGNjLmZpbmQoXCJTZXR0aW5ncyBNZW51XCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdFNldHRpbmdzTWVudUJ1dHRvbnMoKSB7XHJcbiAgICAgICAgbGV0IGNsb3NlX2NsaWNrRXZlbnRIYW5kbGVyID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcclxuICAgICAgICBjbG9zZV9jbGlja0V2ZW50SGFuZGxlci50YXJnZXQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgY2xvc2VfY2xpY2tFdmVudEhhbmRsZXIuY29tcG9uZW50ID0gXCJNZW51XCI7XHJcbiAgICAgICAgY2xvc2VfY2xpY2tFdmVudEhhbmRsZXIuaGFuZGxlciA9IFwiY2xvc2VcIjtcclxuICAgICAgICBjYy5maW5kKFwiU2V0dGluZ3MgTWVudS9jbG9zZUJ0blwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5jbGlja0V2ZW50cy5wdXNoKGNsb3NlX2NsaWNrRXZlbnRIYW5kbGVyKTtcclxuXHJcbiAgICAgICAgbGV0IGJnbXV0ZV9jbGlja0V2ZW50SGFuZGxlciA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgYmdtdXRlX2NsaWNrRXZlbnRIYW5kbGVyLnRhcmdldCA9IHRoaXMubm9kZTtcclxuICAgICAgICBiZ211dGVfY2xpY2tFdmVudEhhbmRsZXIuY29tcG9uZW50ID0gXCJNZW51XCI7XHJcbiAgICAgICAgYmdtdXRlX2NsaWNrRXZlbnRIYW5kbGVyLmhhbmRsZXIgPSBcImJnTXV0ZVwiO1xyXG4gICAgICAgIGNjLmZpbmQoXCJTZXR0aW5ncyBNZW51L0JpZyBMYXlvdXQvQkcgTXV0ZS9iZ011dGVCdG5cIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuY2xpY2tFdmVudHMucHVzaChiZ211dGVfY2xpY2tFdmVudEhhbmRsZXIpO1xyXG5cclxuICAgICAgICBsZXQgc2Z4bXV0ZV9jbGlja0V2ZW50SGFuZGxlciA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgc2Z4bXV0ZV9jbGlja0V2ZW50SGFuZGxlci50YXJnZXQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgc2Z4bXV0ZV9jbGlja0V2ZW50SGFuZGxlci5jb21wb25lbnQgPSBcIk1lbnVcIjtcclxuICAgICAgICBzZnhtdXRlX2NsaWNrRXZlbnRIYW5kbGVyLmhhbmRsZXIgPSBcInNmeE11dGVcIjtcclxuICAgICAgICBjYy5maW5kKFwiU2V0dGluZ3MgTWVudS9CaWcgTGF5b3V0L1NGWCBNdXRlL3NmeE11dGVCdG5cIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuY2xpY2tFdmVudHMucHVzaChzZnhtdXRlX2NsaWNrRXZlbnRIYW5kbGVyKTtcclxuICAgIFxyXG4gICAgICAgIGxldCBiZ19zbGlkZXJFdmVudEhhbmRsZXIgPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xyXG4gICAgICAgIGJnX3NsaWRlckV2ZW50SGFuZGxlci50YXJnZXQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgYmdfc2xpZGVyRXZlbnRIYW5kbGVyLmNvbXBvbmVudCA9IFwiTWVudVwiO1xyXG4gICAgICAgIGJnX3NsaWRlckV2ZW50SGFuZGxlci5oYW5kbGVyID0gXCJjaGFuZ2VCZ1ZvbFwiO1xyXG4gICAgICAgIGNjLmZpbmQoXCJTZXR0aW5ncyBNZW51L0JpZyBMYXlvdXQvQkcgVm9sdW1lL2JnU2xpZGVyXCIpLmdldENvbXBvbmVudChjYy5TbGlkZXIpLnNsaWRlRXZlbnRzLnB1c2goYmdfc2xpZGVyRXZlbnRIYW5kbGVyKTtcclxuXHJcbiAgICAgICAgbGV0IHNmeF9zbGlkZXJFdmVudEhhbmRsZXIgPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xyXG4gICAgICAgIHNmeF9zbGlkZXJFdmVudEhhbmRsZXIudGFyZ2V0ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIHNmeF9zbGlkZXJFdmVudEhhbmRsZXIuY29tcG9uZW50ID0gXCJNZW51XCI7XHJcbiAgICAgICAgc2Z4X3NsaWRlckV2ZW50SGFuZGxlci5oYW5kbGVyID0gXCJjaGFuZ2VTZnhWb2xcIjtcclxuICAgICAgICBjYy5maW5kKFwiU2V0dGluZ3MgTWVudS9CaWcgTGF5b3V0L1NGWCBWb2x1bWUvc2Z4U2xpZGVyXCIpLmdldENvbXBvbmVudChjYy5TbGlkZXIpLnNsaWRlRXZlbnRzLnB1c2goc2Z4X3NsaWRlckV2ZW50SGFuZGxlcik7XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2UoKSB7XHJcbiAgICAgICAgY2MuZmluZChcIlNldHRpbmdzIE1lbnVcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgYmdNdXRlKCkge1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldE11c2ljVm9sdW1lKDApO1xyXG4gICAgfVxyXG5cclxuICAgIHNmeE11dGUoKSB7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0RWZmZWN0c1ZvbHVtZSgwKTtcclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VCZ1ZvbCgpIHtcclxuICAgICAgICBsZXQgdmFsdWUgPSBjYy5maW5kKFwiU2V0dGluZ3MgTWVudS9CaWcgTGF5b3V0L0JHIFZvbHVtZS9iZ1NsaWRlclwiKS5nZXRDb21wb25lbnQoY2MuU2xpZGVyKS5wcm9ncmVzcztcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRNdXNpY1ZvbHVtZSh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlU2Z4Vm9sKCkge1xyXG4gICAgICAgIGxldCB2YWx1ZSA9IGNjLmZpbmQoXCJTZXR0aW5ncyBNZW51L0JpZyBMYXlvdXQvU0ZYIFZvbHVtZS9zZnhTbGlkZXJcIikuZ2V0Q29tcG9uZW50KGNjLlNsaWRlcikucHJvZ3Jlc3M7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0RWZmZWN0c1ZvbHVtZSh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG59Il19