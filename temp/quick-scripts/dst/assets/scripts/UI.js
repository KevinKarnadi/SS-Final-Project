
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcVUkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBZ0Msc0JBQVk7SUFBNUM7UUFBQSxxRUF5R0M7UUF0R0csV0FBSyxHQUFhLElBQUksQ0FBQyxDQUFDLGFBQWE7UUFHckMsZ0JBQVUsR0FBYSxJQUFJLENBQUM7UUFHNUIsZUFBUyxHQUFhLElBQUksQ0FBQztRQUczQixjQUFRLEdBQWEsSUFBSSxDQUFDO1FBRzFCLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBSXBCLGFBQU8sR0FBWSxLQUFLLENBQUMsQ0FBRyxhQUFhO1FBRXpDLFdBQUssR0FBWSxLQUFLLENBQUM7UUFFdkIsZ0JBQVUsR0FBVyxDQUFDLENBQUM7UUFFdkIsV0FBSyxHQUFXLENBQUMsQ0FBQztRQUVsQixVQUFJLEdBQVcsQ0FBQyxDQUFDO1FBRWpCLFNBQUcsR0FBVyxDQUFDLENBQUM7UUFFakIsWUFBTSxHQUFZLEtBQUssQ0FBQzs7SUEwRW5DLENBQUM7SUF4RUcsd0JBQXdCO0lBRXhCLGVBQWU7SUFFZixrQkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBRUQsbUJBQU0sR0FBTixVQUFRLEVBQUU7UUFDTixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzdDLElBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBQztZQUNuRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztZQUNsQixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7U0FDM0I7SUFFTCxDQUFDO0lBRUQsdUJBQVUsR0FBVixVQUFXLElBQVk7UUFDbkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRCx1QkFBVSxHQUFWO1FBQ0ksSUFBRyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUN2RCxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDaEIsSUFBRyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsRUFBRTtnQkFDbEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7YUFDdkI7U0FDSjtJQUNMLENBQUM7SUFFRCxzQkFBUyxHQUFUO1FBQ0ksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3hCLENBQUM7SUFFRCxrQkFBSyxHQUFMO1FBQ0ksSUFBRyxFQUFFLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxFQUFFO1lBQ3ZCLEVBQUUsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDckIsRUFBRSxDQUFDLElBQUksQ0FBQywrQkFBK0IsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7U0FDM0Q7YUFBTTtZQUNILEVBQUUsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDcEIsRUFBRSxDQUFDLElBQUksQ0FBQywrQkFBK0IsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7U0FDMUQ7SUFDTCxDQUFDO0lBRUQsb0JBQU8sR0FBUDtRQUNJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7SUFDN0IsQ0FBQztJQUVELHlCQUFZLEdBQVosVUFBYSxJQUFJLEVBQUUsS0FBSztRQUNwQixJQUFHLElBQUksSUFBSSxPQUFPLEVBQUM7WUFDZixJQUFJLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQztZQUNwQixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDaEU7YUFBTSxJQUFHLElBQUksSUFBSSxNQUFNLEVBQUM7WUFDckIsSUFBSSxDQUFDLElBQUksSUFBSSxLQUFLLENBQUM7WUFDbkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUM3QzthQUFNLElBQUcsSUFBSSxJQUFJLEtBQUssRUFBQztZQUNwQixJQUFJLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQztZQUNsQixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzNDO0lBQ0wsQ0FBQztJQUVELHNCQUFTLEdBQVQsVUFBVSxJQUFJO1FBQ1YsSUFBRyxJQUFJLElBQUksT0FBTyxFQUFDO1lBQ2YsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQ3JCO2FBQU0sSUFBRyxJQUFJLElBQUksTUFBTSxFQUFDO1lBQ3JCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztTQUNwQjthQUFNLElBQUcsSUFBSSxJQUFJLEtBQUssRUFBQztZQUNwQixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7U0FDbkI7SUFDTCxDQUFDO0lBckdEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7cUNBQ0k7SUFHdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzswQ0FDUztJQUc1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3lDQUNRO0lBRzNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7d0NBQ087SUFHMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsyQ0FDVTtJQWZYLEVBQUU7UUFEdEIsT0FBTztPQUNhLEVBQUUsQ0F5R3RCO0lBQUQsU0FBQztDQXpHRCxBQXlHQyxDQXpHK0IsRUFBRSxDQUFDLFNBQVMsR0F5RzNDO2tCQXpHb0IsRUFBRSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUkgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHRpbWVyOiBjYy5MYWJlbCA9IG51bGw7IC8vIGdhbWUgdGltZXJcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBzY29yZUxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgY29pbkxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgZ2VtTGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIEdhbWVNYW5hZ2VyOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBwdWJsaWMgdGltZXJWYWw6IG51bWJlcjsgICAvLyBnYW1lIHRpbWVyXHJcblxyXG4gICAgcHJpdmF0ZSB0aW1lb3V0OiBib29sZWFuID0gZmFsc2U7ICAgLy8gZ2FtZSBlbmRlZFxyXG5cclxuICAgIHByaXZhdGUgaXNXaW46IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBwcml2YXRlIGN1cnJQbGF5ZXI6IG51bWJlciA9IDE7XHJcblxyXG4gICAgcHJpdmF0ZSBzY29yZTogbnVtYmVyID0gMDtcclxuXHJcbiAgICBwcml2YXRlIGNvaW46IG51bWJlciA9IDA7XHJcblxyXG4gICAgcHJpdmF0ZSBnZW06IG51bWJlciA9IDA7XHJcblxyXG4gICAgcHVibGljIGZyZWV6ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICB0aGlzLnN0YXJ0VGltZXIoMjApO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgICAgICB0aGlzLnRpbWVyLnN0cmluZyA9IHRoaXMudGltZXJWYWwudG9TdHJpbmcoKTtcclxuICAgICAgICBpZihjYy5maW5kKFwiQ2FudmFzL0dhbWUgTWFuYWdlclwiKS5nZXRDb21wb25lbnQoXCJHYW1lTWFuYWdlclwiKS5nZXRXaW4oKSl7XHJcbiAgICAgICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLmNvdW50VGltZXIpO1xyXG4gICAgICAgICAgICB0aGlzLmlzV2luID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy50aW1lci5zdHJpbmcgPSBcIi0tXCJcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0VGltZXIodGltZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy50aW1lclZhbCA9IHRpbWU7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLmNvdW50VGltZXIsIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvdW50VGltZXIoKXtcclxuICAgICAgICBpZighY2MuZGlyZWN0b3IuaXNQYXVzZWQoKSAmJiAhdGhpcy5pc1dpbiAmJiAhdGhpcy5mcmVlemUpIHtcclxuICAgICAgICAgICAgdGhpcy50aW1lclZhbC0tO1xyXG4gICAgICAgICAgICBpZih0aGlzLnRpbWVyVmFsIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aW1lb3V0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpc1RpbWVPdXQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGltZW91dDtcclxuICAgIH1cclxuXHJcbiAgICBwYXVzZSgpIHtcclxuICAgICAgICBpZihjYy5kaXJlY3Rvci5pc1BhdXNlZCgpKSB7XHJcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLnJlc3VtZSgpO1xyXG4gICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzL01haW4gQ2FtZXJhL1BhdXNlIE1lbnVcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2MuZGlyZWN0b3IucGF1c2UoKTtcclxuICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhcy9NYWluIENhbWVyYS9QYXVzZSBNZW51XCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldFRpbWUoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy50aW1lci5zdHJpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlUmVjb3JkKHR5cGUsIHZhbHVlKXtcclxuICAgICAgICBpZih0eXBlID09IFwic2NvcmVcIil7XHJcbiAgICAgICAgICAgIHRoaXMuc2NvcmUgKz0gdmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMuc2NvcmVMYWJlbC5zdHJpbmcgPSBTdHJpbmcodGhpcy5zY29yZSkucGFkU3RhcnQoOCwgJzAnKTtcclxuICAgICAgICB9IGVsc2UgaWYodHlwZSA9PSBcImNvaW5cIil7XHJcbiAgICAgICAgICAgIHRoaXMuY29pbiArPSB2YWx1ZTtcclxuICAgICAgICAgICAgdGhpcy5jb2luTGFiZWwuc3RyaW5nID0gU3RyaW5nKHRoaXMuY29pbik7XHJcbiAgICAgICAgfSBlbHNlIGlmKHR5cGUgPT0gXCJnZW1cIil7XHJcbiAgICAgICAgICAgIHRoaXMuZ2VtICs9IHZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLmdlbUxhYmVsLnN0cmluZyA9IFN0cmluZyh0aGlzLmdlbSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldFJlY29yZCh0eXBlKXtcclxuICAgICAgICBpZih0eXBlID09IFwic2NvcmVcIil7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNjb3JlO1xyXG4gICAgICAgIH0gZWxzZSBpZih0eXBlID09IFwiY29pblwiKXtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29pbjtcclxuICAgICAgICB9IGVsc2UgaWYodHlwZSA9PSBcImdlbVwiKXtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2VtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=