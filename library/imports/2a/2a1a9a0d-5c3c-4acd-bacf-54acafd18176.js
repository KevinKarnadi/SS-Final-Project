"use strict";
cc._RF.push(module, '2a1a9oNXDxKzbrPVKyv0YF2', 'UI');
// scripts/UI.ts

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
var UI = /** @class */ (function (_super) {
    __extends(UI, _super);
    function UI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.timer = null; // game timer
        _this.scoreLabel = null;
        _this.coinLabel = null;
        _this.gemLabel = null;
        _this.GameManager = null;
        _this.timeout = false; // game ended
        _this.isWin = false;
        _this.currPlayer = 1;
        _this.score = 0;
        _this.coin = 0;
        _this.gem = 0;
        _this.freeze = false;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    UI.prototype.start = function () {
        this.startTimer(20);
    };
    UI.prototype.update = function (dt) {
        this.timer.string = this.timerVal.toString();
        if (cc.find("Canvas/Game Manager").getComponent("GameManager").getWin()) {
            this.unschedule(this.countTimer);
            this.isWin = true;
            this.timer.string = "--";
        }
    };
    UI.prototype.startTimer = function (time) {
        this.timerVal = time;
        this.schedule(this.countTimer, 1);
    };
    UI.prototype.countTimer = function () {
        if (!cc.director.isPaused() && !this.isWin && !this.freeze) {
            this.timerVal--;
            if (this.timerVal < 0) {
                this.timeout = true;
            }
        }
    };
    UI.prototype.isTimeOut = function () {
        return this.timeout;
    };
    UI.prototype.pause = function () {
        if (cc.director.isPaused()) {
            cc.director.resume();
            cc.find("Canvas/Main Camera/Pause Menu").active = false;
        }
        else {
            cc.director.pause();
            cc.find("Canvas/Main Camera/Pause Menu").active = true;
        }
    };
    UI.prototype.getTime = function () {
        return this.timer.string;
    };
    UI.prototype.updateRecord = function (type, value) {
        if (type == "score") {
            this.score += value;
            this.scoreLabel.string = String(this.score).padStart(8, '0');
        }
        else if (type == "coin") {
            this.coin += value;
            this.coinLabel.string = String(this.coin);
        }
        else if (type == "gem") {
            this.gem += value;
            this.gemLabel.string = String(this.gem);
        }
    };
    UI.prototype.getRecord = function (type) {
        if (type == "score") {
            return this.score;
        }
        else if (type == "coin") {
            return this.coin;
        }
        else if (type == "gem") {
            return this.gem;
        }
    };
    __decorate([
        property(cc.Label)
    ], UI.prototype, "timer", void 0);
    __decorate([
        property(cc.Label)
    ], UI.prototype, "scoreLabel", void 0);
    __decorate([
        property(cc.Label)
    ], UI.prototype, "coinLabel", void 0);
    __decorate([
        property(cc.Label)
    ], UI.prototype, "gemLabel", void 0);
    __decorate([
        property(cc.Node)
    ], UI.prototype, "GameManager", void 0);
    UI = __decorate([
        ccclass
    ], UI);
    return UI;
}(cc.Component));
exports.default = UI;

cc._RF.pop();