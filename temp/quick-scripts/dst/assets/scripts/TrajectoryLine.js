
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/TrajectoryLine.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1aa02tB/qNC9aTto6FFiTAI', 'TrajectoryLine');
// scripts/TrajectoryLine.ts

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
var TrajectoryLine = /** @class */ (function (_super) {
    __extends(TrajectoryLine, _super);
    function TrajectoryLine() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.arrowPrefab = null;
        _this.angle = null;
        _this.power = null;
        _this.label = null;
        _this.line = null;
        _this.arrow = null;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    TrajectoryLine.prototype.onLoad = function () {
        this.line = this.node.getComponent(cc.Graphics);
    };
    TrajectoryLine.prototype.start = function () {
    };
    // update (dt) {}
    TrajectoryLine.prototype.drawStraightLine = function (angle) {
        this.line.clear();
        this.line.lineWidth = 5;
        this.line.lineCap = cc.Graphics.LineCap.ROUND;
        this.line.moveTo(35, 8);
        this.line.lineTo(35 + Math.cos(angle) * 300, 8 + Math.sin(angle) * 300);
        this.line.stroke();
    };
    TrajectoryLine.prototype.drawCurveLine = function (angle, power) {
        if (this.arrow) {
            if (power > 100)
                power = 100;
            var degree = angle * 180 / Math.PI;
            this.arrow.getComponent("Arrow").arrowMove(degree);
            this.angle.string = Math.floor(degree).toString();
            this.power.string = power.toString();
        }
        else {
            this.arrow = cc.instantiate(this.arrowPrefab);
            this.arrow.getComponent("Arrow").init(this.node);
            this.label.active = true;
        }
        // not accurate
        // this.line.clear();
        // this.line.lineWidth = 5;
        // this.line.lineCap = cc.Graphics.LineCap.ROUND;
        // this.line.moveTo(35, 8);
        // // this.line.quadraticCurveTo(35, Math.tan(angle) * 100, 35 + Math.sin(angle) * 1000, 8 + Math.cos(angle) * 100);
        // // this.line.quadraticCurveTo(35, Math.sin(angle) * 1000 + Math.tan(angle) * 100, 1000, 8);
        // // this.line.quadraticCurveTo(35, Math.tan(angle) * 100, Math.cos(angle) * 1000, 8);
        // this.line.quadraticCurveTo(35, Math.sin(angle) * 1000, 1000, 960);
        // this.line.stroke();
    };
    TrajectoryLine.prototype.clearLine = function () {
        this.line.clear();
        this.label.active = false;
        if (this.arrow) {
            this.arrow.destroy();
            this.arrow = null;
        }
    };
    __decorate([
        property(cc.Prefab)
    ], TrajectoryLine.prototype, "arrowPrefab", void 0);
    __decorate([
        property(cc.Label)
    ], TrajectoryLine.prototype, "angle", void 0);
    __decorate([
        property(cc.Label)
    ], TrajectoryLine.prototype, "power", void 0);
    __decorate([
        property(cc.Node)
    ], TrajectoryLine.prototype, "label", void 0);
    TrajectoryLine = __decorate([
        ccclass
    ], TrajectoryLine);
    return TrajectoryLine;
}(cc.Component));
exports.default = TrajectoryLine;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcVHJhamVjdG9yeUxpbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBNEMsa0NBQVk7SUFBeEQ7UUFBQSxxRUF1RUM7UUFwRUcsaUJBQVcsR0FBYyxJQUFJLENBQUM7UUFHOUIsV0FBSyxHQUFhLElBQUksQ0FBQztRQUd2QixXQUFLLEdBQWEsSUFBSSxDQUFDO1FBR3ZCLFdBQUssR0FBWSxJQUFJLENBQUM7UUFFZCxVQUFJLEdBQWdCLElBQUksQ0FBQztRQUV6QixXQUFLLEdBQUcsSUFBSSxDQUFDOztJQXVEekIsQ0FBQztJQXJERyx3QkFBd0I7SUFFeEIsK0JBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFRCw4QkFBSyxHQUFMO0lBRUEsQ0FBQztJQUVELGlCQUFpQjtJQUVWLHlDQUFnQixHQUF2QixVQUF3QixLQUFLO1FBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUM5QyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFBO1FBQ3ZFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVNLHNDQUFhLEdBQXBCLFVBQXFCLEtBQUssRUFBRSxLQUFLO1FBQzdCLElBQUcsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNYLElBQUcsS0FBSyxHQUFHLEdBQUc7Z0JBQUUsS0FBSyxHQUFHLEdBQUcsQ0FBQztZQUM1QixJQUFJLE1BQU0sR0FBRyxLQUFLLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7WUFDbkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ25ELElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDbEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ3hDO2FBQU07WUFDSCxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQzlDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDakQsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1NBQzVCO1FBQ0QsZUFBZTtRQUNmLHFCQUFxQjtRQUNyQiwyQkFBMkI7UUFDM0IsaURBQWlEO1FBQ2pELDJCQUEyQjtRQUMzQixvSEFBb0g7UUFDcEgsOEZBQThGO1FBQzlGLHVGQUF1RjtRQUN2RixxRUFBcUU7UUFDckUsc0JBQXNCO0lBQzFCLENBQUM7SUFFTSxrQ0FBUyxHQUFoQjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQzFCLElBQUcsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNYLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDckIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7U0FDckI7SUFDTCxDQUFDO0lBbkVEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7dURBQ1U7SUFHOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztpREFDSTtJQUd2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2lEQUNJO0lBR3ZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7aURBQ0k7SUFaTCxjQUFjO1FBRGxDLE9BQU87T0FDYSxjQUFjLENBdUVsQztJQUFELHFCQUFDO0NBdkVELEFBdUVDLENBdkUyQyxFQUFFLENBQUMsU0FBUyxHQXVFdkQ7a0JBdkVvQixjQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmFqZWN0b3J5TGluZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIGFycm93UHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGFuZ2xlOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgcG93ZXI6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxhYmVsOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGxpbmU6IGNjLkdyYXBoaWNzID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGFycm93ID0gbnVsbDtcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIHRoaXMubGluZSA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuR3JhcGhpY3MpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxuXHJcbiAgICBwdWJsaWMgZHJhd1N0cmFpZ2h0TGluZShhbmdsZSkge1xyXG4gICAgICAgIHRoaXMubGluZS5jbGVhcigpO1xyXG4gICAgICAgIHRoaXMubGluZS5saW5lV2lkdGggPSA1O1xyXG4gICAgICAgIHRoaXMubGluZS5saW5lQ2FwID0gY2MuR3JhcGhpY3MuTGluZUNhcC5ST1VORDtcclxuICAgICAgICB0aGlzLmxpbmUubW92ZVRvKDM1LCA4KTtcclxuICAgICAgICB0aGlzLmxpbmUubGluZVRvKDM1ICsgTWF0aC5jb3MoYW5nbGUpICogMzAwLCA4ICsgTWF0aC5zaW4oYW5nbGUpICogMzAwKVxyXG4gICAgICAgIHRoaXMubGluZS5zdHJva2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZHJhd0N1cnZlTGluZShhbmdsZSwgcG93ZXIpIHtcclxuICAgICAgICBpZih0aGlzLmFycm93KSB7XHJcbiAgICAgICAgICAgIGlmKHBvd2VyID4gMTAwKSBwb3dlciA9IDEwMDtcclxuICAgICAgICAgICAgbGV0IGRlZ3JlZSA9IGFuZ2xlICogMTgwIC8gTWF0aC5QSTtcclxuICAgICAgICAgICAgdGhpcy5hcnJvdy5nZXRDb21wb25lbnQoXCJBcnJvd1wiKS5hcnJvd01vdmUoZGVncmVlKTtcclxuICAgICAgICAgICAgdGhpcy5hbmdsZS5zdHJpbmcgPSBNYXRoLmZsb29yKGRlZ3JlZSkudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgdGhpcy5wb3dlci5zdHJpbmcgPSBwb3dlci50b1N0cmluZygpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXJyb3cgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmFycm93UHJlZmFiKTtcclxuICAgICAgICAgICAgdGhpcy5hcnJvdy5nZXRDb21wb25lbnQoXCJBcnJvd1wiKS5pbml0KHRoaXMubm9kZSk7XHJcbiAgICAgICAgICAgIHRoaXMubGFiZWwuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gbm90IGFjY3VyYXRlXHJcbiAgICAgICAgLy8gdGhpcy5saW5lLmNsZWFyKCk7XHJcbiAgICAgICAgLy8gdGhpcy5saW5lLmxpbmVXaWR0aCA9IDU7XHJcbiAgICAgICAgLy8gdGhpcy5saW5lLmxpbmVDYXAgPSBjYy5HcmFwaGljcy5MaW5lQ2FwLlJPVU5EO1xyXG4gICAgICAgIC8vIHRoaXMubGluZS5tb3ZlVG8oMzUsIDgpO1xyXG4gICAgICAgIC8vIC8vIHRoaXMubGluZS5xdWFkcmF0aWNDdXJ2ZVRvKDM1LCBNYXRoLnRhbihhbmdsZSkgKiAxMDAsIDM1ICsgTWF0aC5zaW4oYW5nbGUpICogMTAwMCwgOCArIE1hdGguY29zKGFuZ2xlKSAqIDEwMCk7XHJcbiAgICAgICAgLy8gLy8gdGhpcy5saW5lLnF1YWRyYXRpY0N1cnZlVG8oMzUsIE1hdGguc2luKGFuZ2xlKSAqIDEwMDAgKyBNYXRoLnRhbihhbmdsZSkgKiAxMDAsIDEwMDAsIDgpO1xyXG4gICAgICAgIC8vIC8vIHRoaXMubGluZS5xdWFkcmF0aWNDdXJ2ZVRvKDM1LCBNYXRoLnRhbihhbmdsZSkgKiAxMDAsIE1hdGguY29zKGFuZ2xlKSAqIDEwMDAsIDgpO1xyXG4gICAgICAgIC8vIHRoaXMubGluZS5xdWFkcmF0aWNDdXJ2ZVRvKDM1LCBNYXRoLnNpbihhbmdsZSkgKiAxMDAwLCAxMDAwLCA5NjApO1xyXG4gICAgICAgIC8vIHRoaXMubGluZS5zdHJva2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xlYXJMaW5lKCkge1xyXG4gICAgICAgIHRoaXMubGluZS5jbGVhcigpO1xyXG4gICAgICAgIHRoaXMubGFiZWwuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgaWYodGhpcy5hcnJvdykge1xyXG4gICAgICAgICAgICB0aGlzLmFycm93LmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgdGhpcy5hcnJvdyA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==