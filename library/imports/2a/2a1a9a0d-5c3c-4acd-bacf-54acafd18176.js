"use strict";
cc._RF.push(module, '2a1a9oNXDxKzbrPVKyv0YF2', 'UI');
// scripts/UI.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
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
        _this.timer = null; // game timer
        _this.timeout = false; // game ended
        _this.isWin = false;
        _this.currPlayer = 1;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
        this.startTimer(300);
    };
    NewClass.prototype.update = function (dt) {
        this.timer.string = this.timerVal.toString();
    };
    NewClass.prototype.startTimer = function (time) {
        var _this = this;
        this.timerVal = time;
        setInterval(function () {
            if (!cc.game.isPaused() && !_this.isWin) {
                _this.timerVal--;
                if (_this.timerVal < 0) {
                    _this.timeout = true;
                }
            }
        }, 1000);
    };
    NewClass.prototype.isTimeOut = function () {
        return this.timeout;
    };
    NewClass.prototype.pause = function () {
        if (cc.game.isPaused()) {
            cc.game.resume();
        }
        else {
            cc.game.pause();
        }
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "timer", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();