
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/MiniCam.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b30ffBBZ6hNbqpVu0U3EK/0', 'MiniCam');
// scripts/MiniCam.ts

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
var MiniCam = /** @class */ (function (_super) {
    __extends(MiniCam, _super);
    function MiniCam() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mainCam = null;
        _this.offset = 0;
        return _this;
    }
    MiniCam.prototype.onLoad = function () {
    };
    MiniCam.prototype.start = function () {
    };
    MiniCam.prototype.update = function (dt) {
        this.node.x = this.mainCam.getPosition().x - this.offset;
        if (this.node.x < (250 - this.offset)) {
            this.node.x = 250 - this.offset;
        }
        else if (this.node.x > (1750)) {
            this.node.x = 1750;
        }
        // console.log(this.node.x, "minicam");
    };
    __decorate([
        property(cc.Node)
    ], MiniCam.prototype, "mainCam", void 0);
    __decorate([
        property()
    ], MiniCam.prototype, "offset", void 0);
    MiniCam = __decorate([
        ccclass
    ], MiniCam);
    return MiniCam;
}(cc.Component));
exports.default = MiniCam;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcTWluaUNhbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFxQywyQkFBWTtJQUFqRDtRQUFBLHFFQXlCQztRQXRCRyxhQUFPLEdBQVksSUFBSSxDQUFDO1FBR3hCLFlBQU0sR0FBVyxDQUFDLENBQUM7O0lBbUJ2QixDQUFDO0lBakJHLHdCQUFNLEdBQU47SUFDQSxDQUFDO0lBRUQsdUJBQUssR0FBTDtJQUVBLENBQUM7SUFFRCx3QkFBTSxHQUFOLFVBQVEsRUFBRTtRQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDekQsSUFBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUM7WUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7U0FDbkM7YUFBTSxJQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUM7WUFDM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO1NBQ3RCO1FBQ0QsdUNBQXVDO0lBRTNDLENBQUM7SUFyQkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs0Q0FDTTtJQUd4QjtRQURDLFFBQVEsRUFBRTsyQ0FDUTtJQU5GLE9BQU87UUFEM0IsT0FBTztPQUNhLE9BQU8sQ0F5QjNCO0lBQUQsY0FBQztDQXpCRCxBQXlCQyxDQXpCb0MsRUFBRSxDQUFDLFNBQVMsR0F5QmhEO2tCQXpCb0IsT0FBTyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWluaUNhbSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBtYWluQ2FtOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoKVxyXG4gICAgb2Zmc2V0OiBudW1iZXIgPSAwO1xyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUgKGR0KSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLnggPSB0aGlzLm1haW5DYW0uZ2V0UG9zaXRpb24oKS54IC0gdGhpcy5vZmZzZXQ7XHJcbiAgICAgICAgaWYodGhpcy5ub2RlLnggPCAoMjUwIC0gdGhpcy5vZmZzZXQpKXtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnggPSAyNTAgLSB0aGlzLm9mZnNldDtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5ub2RlLnggPiAoMTc1MCkpe1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUueCA9IDE3NTA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMubm9kZS54LCBcIm1pbmljYW1cIik7XHJcblxyXG4gICAgfVxyXG59XHJcbiJdfQ==