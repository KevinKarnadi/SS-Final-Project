
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
        _this.timeout = false; // game ended
        _this.isWin = false;
        _this.currPlayer = 1;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    UI.prototype.start = function () {
        this.startTimer(300);
    };
    UI.prototype.update = function (dt) {
        this.timer.string = this.timerVal.toString();
    };
    UI.prototype.startTimer = function (time) {
        var _this = this;
        this.timerVal = time;
        setInterval(function () {
            if (!cc.director.isPaused() && !_this.isWin) {
                _this.timerVal--;
                if (_this.timerVal < 0) {
                    _this.timeout = true;
                }
            }
        }, 1000);
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
    __decorate([
        property(cc.Label)
    ], UI.prototype, "timer", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcVUkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBZ0Msc0JBQVk7SUFBNUM7UUFBQSxxRUFrREM7UUEvQ0csV0FBSyxHQUFhLElBQUksQ0FBQyxDQUFDLGFBQWE7UUFJN0IsYUFBTyxHQUFZLEtBQUssQ0FBQyxDQUFHLGFBQWE7UUFFekMsV0FBSyxHQUFZLEtBQUssQ0FBQztRQUV2QixnQkFBVSxHQUFXLENBQUMsQ0FBQzs7SUF1Q25DLENBQUM7SUFyQ0csd0JBQXdCO0lBRXhCLGVBQWU7SUFFZixrQkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBRUQsbUJBQU0sR0FBTixVQUFRLEVBQUU7UUFDTixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2pELENBQUM7SUFFRCx1QkFBVSxHQUFWLFVBQVcsSUFBWTtRQUF2QixpQkFVQztRQVRHLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLFdBQVcsQ0FBQztZQUNSLElBQUcsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSSxDQUFDLEtBQUssRUFBRTtnQkFDdkMsS0FBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUNoQixJQUFHLEtBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxFQUFFO29CQUNsQixLQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztpQkFDdkI7YUFDSjtRQUNMLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNiLENBQUM7SUFFRCxzQkFBUyxHQUFUO1FBQ0ksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3hCLENBQUM7SUFFRCxrQkFBSyxHQUFMO1FBQ0ksSUFBRyxFQUFFLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxFQUFFO1lBQ3ZCLEVBQUUsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDckIsRUFBRSxDQUFDLElBQUksQ0FBQywrQkFBK0IsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7U0FDM0Q7YUFBTTtZQUNILEVBQUUsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDcEIsRUFBRSxDQUFDLElBQUksQ0FBQywrQkFBK0IsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7U0FDMUQ7SUFDTCxDQUFDO0lBOUNEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7cUNBQ0k7SUFITixFQUFFO1FBRHRCLE9BQU87T0FDYSxFQUFFLENBa0R0QjtJQUFELFNBQUM7Q0FsREQsQUFrREMsQ0FsRCtCLEVBQUUsQ0FBQyxTQUFTLEdBa0QzQztrQkFsRG9CLEVBQUUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICB0aW1lcjogY2MuTGFiZWwgPSBudWxsOyAvLyBnYW1lIHRpbWVyXHJcblxyXG4gICAgcHJpdmF0ZSB0aW1lclZhbDogbnVtYmVyOyAgIC8vIGdhbWUgdGltZXJcclxuXHJcbiAgICBwcml2YXRlIHRpbWVvdXQ6IGJvb2xlYW4gPSBmYWxzZTsgICAvLyBnYW1lIGVuZGVkXHJcblxyXG4gICAgcHJpdmF0ZSBpc1dpbjogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHByaXZhdGUgY3VyclBsYXllcjogbnVtYmVyID0gMTtcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgdGhpcy5zdGFydFRpbWVyKDMwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlIChkdCkge1xyXG4gICAgICAgIHRoaXMudGltZXIuc3RyaW5nID0gdGhpcy50aW1lclZhbC50b1N0cmluZygpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0VGltZXIodGltZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy50aW1lclZhbCA9IHRpbWU7XHJcbiAgICAgICAgc2V0SW50ZXJ2YWwoKCk9PntcclxuICAgICAgICAgICAgaWYoIWNjLmRpcmVjdG9yLmlzUGF1c2VkKCkgJiYgIXRoaXMuaXNXaW4pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGltZXJWYWwtLTtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMudGltZXJWYWwgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aW1lb3V0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDEwMDApO1xyXG4gICAgfVxyXG5cclxuICAgIGlzVGltZU91dCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50aW1lb3V0O1xyXG4gICAgfVxyXG5cclxuICAgIHBhdXNlKCkge1xyXG4gICAgICAgIGlmKGNjLmRpcmVjdG9yLmlzUGF1c2VkKCkpIHtcclxuICAgICAgICAgICAgY2MuZGlyZWN0b3IucmVzdW1lKCk7XHJcbiAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXMvTWFpbiBDYW1lcmEvUGF1c2UgTWVudVwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5wYXVzZSgpO1xyXG4gICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzL01haW4gQ2FtZXJhL1BhdXNlIE1lbnVcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19