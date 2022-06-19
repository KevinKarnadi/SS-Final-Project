
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/UI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
        _this.GameManager = null;
        _this.timeout = false; // game ended
        _this.isWin = false;
        _this.currPlayer = 1;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    UI.prototype.start = function () {
        this.startTimer(20);
    };
    UI.prototype.update = function (dt) {
        this.timer.string = this.timerVal.toString();
        if (this.GameManager.getComponent("GameManager").getWin()) {
            this.isWin = true;
            this.timer.string = "--";
        }
        this.unschedule(this.countTimer);
    };
    UI.prototype.startTimer = function (time) {
        var _this = this;
        this.timerVal = time;
        this.schedule(function () {
            _this.countTimer();
        }, 1);
    };
    UI.prototype.countTimer = function () {
        if (!cc.director.isPaused() && !this.isWin) {
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
    __decorate([
        property(cc.Label)
    ], UI.prototype, "timer", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Iiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICB0aW1lcjogY2MuTGFiZWwgPSBudWxsOyAvLyBnYW1lIHRpbWVyXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBHYW1lTWFuYWdlcjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgcHVibGljIHRpbWVyVmFsOiBudW1iZXI7ICAgLy8gZ2FtZSB0aW1lclxyXG5cclxuICAgIHByaXZhdGUgdGltZW91dDogYm9vbGVhbiA9IGZhbHNlOyAgIC8vIGdhbWUgZW5kZWRcclxuXHJcbiAgICBwcml2YXRlIGlzV2luOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgcHJpdmF0ZSBjdXJyUGxheWVyOiBudW1iZXIgPSAxO1xyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICB0aGlzLnN0YXJ0VGltZXIoMjApO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgICAgICB0aGlzLnRpbWVyLnN0cmluZyA9IHRoaXMudGltZXJWYWwudG9TdHJpbmcoKTtcclxuICAgICAgICBpZih0aGlzLkdhbWVNYW5hZ2VyLmdldENvbXBvbmVudChcIkdhbWVNYW5hZ2VyXCIpLmdldFdpbigpKXtcclxuICAgICAgICAgICAgdGhpcy5pc1dpbiA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMudGltZXIuc3RyaW5nID0gXCItLVwiXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLmNvdW50VGltZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0VGltZXIodGltZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy50aW1lclZhbCA9IHRpbWU7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZSgoKT0+e1xyXG4gICAgICAgICAgICB0aGlzLmNvdW50VGltZXIoKTtcclxuICAgICAgICB9LCAxKTtcclxuICAgIH1cclxuXHJcbiAgICBjb3VudFRpbWVyKCl7XHJcbiAgICAgICAgaWYoIWNjLmRpcmVjdG9yLmlzUGF1c2VkKCkgJiYgIXRoaXMuaXNXaW4pIHtcclxuICAgICAgICAgICAgdGhpcy50aW1lclZhbC0tO1xyXG4gICAgICAgICAgICBpZih0aGlzLnRpbWVyVmFsIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aW1lb3V0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpc1RpbWVPdXQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGltZW91dDtcclxuICAgIH1cclxuXHJcbiAgICBwYXVzZSgpIHtcclxuICAgICAgICBpZihjYy5kaXJlY3Rvci5pc1BhdXNlZCgpKSB7XHJcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLnJlc3VtZSgpO1xyXG4gICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzL01haW4gQ2FtZXJhL1BhdXNlIE1lbnVcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2MuZGlyZWN0b3IucGF1c2UoKTtcclxuICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhcy9NYWluIENhbWVyYS9QYXVzZSBNZW51XCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldFRpbWUoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy50aW1lci5zdHJpbmc7XHJcbiAgICB9XHJcbn1cclxuIl19