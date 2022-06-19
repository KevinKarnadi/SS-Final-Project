"use strict";
cc._RF.push(module, '395d2AWB7BGAZmf42dY/OHG', 'ending');
// scripts/ending.ts

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
var Ending = /** @class */ (function (_super) {
    __extends(Ending, _super);
    function Ending() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.map = "map1";
        return _this;
    }
    Ending.prototype.onLoad = function () {
    };
    Ending.prototype.start = function () {
        this.mainMenuBtn();
        this.quitBtn();
        this.replayBtn();
        console.log(this.map);
    };
    // update (dt) {}
    Ending.prototype.mainMenuBtn = function () {
        var clickEventHandler = new cc.Component.EventHandler();
        clickEventHandler.target = this.node;
        clickEventHandler.component = "ending";
        clickEventHandler.handler = "loadMainMenu";
        cc.find("Canvas/MainMenu").getComponent(cc.Button).clickEvents.push(clickEventHandler);
    };
    Ending.prototype.loadMainMenu = function () {
        cc.director.loadScene("main menu");
    };
    Ending.prototype.quitBtn = function () {
        var clickEventHandler = new cc.Component.EventHandler();
        clickEventHandler.target = this.node;
        clickEventHandler.component = "ending";
        clickEventHandler.handler = "quit";
        cc.find("Canvas/Quit").getComponent(cc.Button).clickEvents.push(clickEventHandler);
        // console.log(this.node.parent.getChildByName("Quit").getComponent(cc.Button)) ;
    };
    Ending.prototype.quit = function () {
        cc.game.end();
    };
    Ending.prototype.replayBtn = function () {
        var clickEventHandler = new cc.Component.EventHandler();
        clickEventHandler.target = this.node;
        clickEventHandler.component = "ending";
        clickEventHandler.handler = "loadMap";
        cc.find("Canvas/Replay").getComponent(cc.Button).clickEvents.push(clickEventHandler);
    };
    Ending.prototype.loadMap = function () {
        cc.director.loadScene("loading", function () {
            cc.director.loadScene("map1");
        });
    };
    Ending = __decorate([
        ccclass
    ], Ending);
    return Ending;
}(cc.Component));
exports.default = Ending;

cc._RF.pop();