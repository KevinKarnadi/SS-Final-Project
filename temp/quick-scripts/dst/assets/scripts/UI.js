
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcVUkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBZ0Msc0JBQVk7SUFBNUM7UUFBQSxxRUF1R0M7UUFwR0csV0FBSyxHQUFhLElBQUksQ0FBQyxDQUFDLGFBQWE7UUFHckMsZ0JBQVUsR0FBYSxJQUFJLENBQUM7UUFHNUIsZUFBUyxHQUFhLElBQUksQ0FBQztRQUczQixjQUFRLEdBQWEsSUFBSSxDQUFDO1FBRzFCLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBSXBCLGFBQU8sR0FBWSxLQUFLLENBQUMsQ0FBRyxhQUFhO1FBRXpDLFdBQUssR0FBWSxLQUFLLENBQUM7UUFFdkIsZ0JBQVUsR0FBVyxDQUFDLENBQUM7UUFFdkIsV0FBSyxHQUFXLENBQUMsQ0FBQztRQUVsQixVQUFJLEdBQVcsQ0FBQyxDQUFDO1FBRWpCLFNBQUcsR0FBVyxDQUFDLENBQUM7O0lBMEU1QixDQUFDO0lBeEVHLHdCQUF3QjtJQUV4QixlQUFlO0lBRWYsa0JBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQUVELG1CQUFNLEdBQU4sVUFBUSxFQUFFO1FBQ04sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUM3QyxJQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUM7WUFDbkUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7WUFD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QUksQ0FBQzsyQ0FDVTtJQWZYLEVBQUU7UUFEdEIsT0FBTztPQUNhLEVBQUUsQ0F1R3RCO0lBQUQsU0FBQztDQXZHRCxBQXVHQyxDQXZHK0IsRUFBRSxDQUFDLFNBQVMsR0F1RzNDO2tCQXZHb0IsRUFBRSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUkgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHRpbWVyOiBjYy5MYWJlbCA9IG51bGw7IC8vIGdhbWUgdGltZXJcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBzY29yZUxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgY29pbkxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgZ2VtTGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIEdhbWVNYW5hZ2VyOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBwdWJsaWMgdGltZXJWYWw6IG51bWJlcjsgICAvLyBnYW1lIHRpbWVyXHJcblxyXG4gICAgcHJpdmF0ZSB0aW1lb3V0OiBib29sZWFuID0gZmFsc2U7ICAgLy8gZ2FtZSBlbmRlZFxyXG5cclxuICAgIHByaXZhdGUgaXNXaW46IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBwcml2YXRlIGN1cnJQbGF5ZXI6IG51bWJlciA9IDE7XHJcblxyXG4gICAgcHJpdmF0ZSBzY29yZTogbnVtYmVyID0gMDtcclxuXHJcbiAgICBwcml2YXRlIGNvaW46IG51bWJlciA9IDA7XHJcblxyXG4gICAgcHJpdmF0ZSBnZW06IG51bWJlciA9IDA7XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIHRoaXMuc3RhcnRUaW1lcigyMCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlIChkdCkge1xyXG4gICAgICAgIHRoaXMudGltZXIuc3RyaW5nID0gdGhpcy50aW1lclZhbC50b1N0cmluZygpO1xyXG4gICAgICAgIGlmKGNjLmZpbmQoXCJDYW52YXMvR2FtZSBNYW5hZ2VyXCIpLmdldENvbXBvbmVudChcIkdhbWVNYW5hZ2VyXCIpLmdldFdpbigpKXtcclxuICAgICAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuY291bnRUaW1lcik7XHJcbiAgICAgICAgICAgIHRoaXMuaXNXaW4gPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnRpbWVyLnN0cmluZyA9IFwiLS1cIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnRUaW1lcih0aW1lOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnRpbWVyVmFsID0gdGltZTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMuY291bnRUaW1lciwgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgY291bnRUaW1lcigpe1xyXG4gICAgICAgIGlmKCFjYy5kaXJlY3Rvci5pc1BhdXNlZCgpICYmICF0aGlzLmlzV2luKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGltZXJWYWwtLTtcclxuICAgICAgICAgICAgaWYodGhpcy50aW1lclZhbCA8IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGltZW91dCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaXNUaW1lT3V0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRpbWVvdXQ7XHJcbiAgICB9XHJcblxyXG4gICAgcGF1c2UoKSB7XHJcbiAgICAgICAgaWYoY2MuZGlyZWN0b3IuaXNQYXVzZWQoKSkge1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5yZXN1bWUoKTtcclxuICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhcy9NYWluIENhbWVyYS9QYXVzZSBNZW51XCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLnBhdXNlKCk7XHJcbiAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXMvTWFpbiBDYW1lcmEvUGF1c2UgTWVudVwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRUaW1lKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGltZXIuc3RyaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVJlY29yZCh0eXBlLCB2YWx1ZSl7XHJcbiAgICAgICAgaWYodHlwZSA9PSBcInNjb3JlXCIpe1xyXG4gICAgICAgICAgICB0aGlzLnNjb3JlICs9IHZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLnNjb3JlTGFiZWwuc3RyaW5nID0gU3RyaW5nKHRoaXMuc2NvcmUpLnBhZFN0YXJ0KDgsICcwJyk7XHJcbiAgICAgICAgfSBlbHNlIGlmKHR5cGUgPT0gXCJjb2luXCIpe1xyXG4gICAgICAgICAgICB0aGlzLmNvaW4gKz0gdmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMuY29pbkxhYmVsLnN0cmluZyA9IFN0cmluZyh0aGlzLmNvaW4pO1xyXG4gICAgICAgIH0gZWxzZSBpZih0eXBlID09IFwiZ2VtXCIpe1xyXG4gICAgICAgICAgICB0aGlzLmdlbSArPSB2YWx1ZTtcclxuICAgICAgICAgICAgdGhpcy5nZW1MYWJlbC5zdHJpbmcgPSBTdHJpbmcodGhpcy5nZW0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRSZWNvcmQodHlwZSl7XHJcbiAgICAgICAgaWYodHlwZSA9PSBcInNjb3JlXCIpe1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zY29yZTtcclxuICAgICAgICB9IGVsc2UgaWYodHlwZSA9PSBcImNvaW5cIil7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvaW47XHJcbiAgICAgICAgfSBlbHNlIGlmKHR5cGUgPT0gXCJnZW1cIil7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdlbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19