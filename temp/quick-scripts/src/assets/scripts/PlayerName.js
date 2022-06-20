"use strict";
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
                cc.find(this.editBoxPath + 'Player3').active = true;
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
            _this.loadScene("map choose");
        });
    };
    NewClass.prototype.setPlayerName = function () {
        cc.sys.localStorage.setItem("Player 1 Name", this.player1.getComponentInChildren(cc.Label).string);
        cc.sys.localStorage.setItem("Player 2 Name", this.player2.getComponentInChildren(cc.Label).string);
        if (this.playerNum == "3" || this.playerNum == "4") {
            cc.sys.localStorage.setItem("Player 3 Name", this.player3.getComponentInChildren(cc.Label).string);
        }
        if (this.playerNum == "4") {
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