
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Instructions-win.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '56f80q/EatFCbeSiWk7QmlG', 'Instructions-win');
// scripts/Instructions-win.ts

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
var InstructionsMenuWin = /** @class */ (function (_super) {
    __extends(InstructionsMenuWin, _super);
    function InstructionsMenuWin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InstructionsMenuWin.prototype.onLoad = function () {
        this.initButtons();
    };
    InstructionsMenuWin.prototype.start = function () { };
    InstructionsMenuWin.prototype.initButtons = function () {
        var returnbtn = new cc.Component.EventHandler();
        returnbtn.target = this.node;
        returnbtn.component = "Instructions-win";
        returnbtn.handler = "loadNextInstructions";
        cc.find("Return").getComponent(cc.Button).clickEvents.push(returnbtn);
        var prevbtn = new cc.Component.EventHandler();
        prevbtn.target = this.node;
        prevbtn.component = "Instructions-win";
        prevbtn.handler = "loadPrevInstructions";
        cc.find("Prev").getComponent(cc.Button).clickEvents.push(prevbtn);
    };
    InstructionsMenuWin.prototype.loadNextInstructions = function () {
        cc.director.loadScene("menu");
    };
    InstructionsMenuWin.prototype.loadPrevInstructions = function () {
        cc.director.loadScene("instructions - minimap");
    };
    InstructionsMenuWin = __decorate([
        ccclass
    ], InstructionsMenuWin);
    return InstructionsMenuWin;
}(cc.Component));
exports.default = InstructionsMenuWin;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcSW5zdHJ1Y3Rpb25zLXdpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFpRCx1Q0FBWTtJQUE3RDs7SUF1Q0EsQ0FBQztJQWpDRyxvQ0FBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxtQ0FBSyxHQUFMLGNBQVUsQ0FBQztJQUVYLHlDQUFXLEdBQVg7UUFDSSxJQUFJLFNBQVMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDaEQsU0FBUyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQzdCLFNBQVMsQ0FBQyxTQUFTLEdBQUcsa0JBQWtCLENBQUM7UUFDekMsU0FBUyxDQUFDLE9BQU8sR0FBRyxzQkFBc0IsQ0FBQztRQUczQyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUd0RSxJQUFJLE9BQU8sR0FBRyxJQUFJLEVBQUUsQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDOUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQzNCLE9BQU8sQ0FBQyxTQUFTLEdBQUcsa0JBQWtCLENBQUM7UUFDdkMsT0FBTyxDQUFDLE9BQU8sR0FBRyxzQkFBc0IsQ0FBQztRQUd6QyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN0RSxDQUFDO0lBRUQsa0RBQW9CLEdBQXBCO1FBQ0ksRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELGtEQUFvQixHQUFwQjtRQUNJLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLHdCQUF3QixDQUFDLENBQUM7SUFDcEQsQ0FBQztJQXJDZ0IsbUJBQW1CO1FBRHZDLE9BQU87T0FDYSxtQkFBbUIsQ0F1Q3ZDO0lBQUQsMEJBQUM7Q0F2Q0QsQUF1Q0MsQ0F2Q2dELEVBQUUsQ0FBQyxTQUFTLEdBdUM1RDtrQkF2Q29CLG1CQUFtQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5zdHJ1Y3Rpb25zTWVudVdpbiBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgICAgICBFZGl0X0JveDogY2MuRWRpdEJveCxcclxuICAgIH1cclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5pbml0QnV0dG9ucygpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0ICgpIHt9XHJcblxyXG4gICAgaW5pdEJ1dHRvbnMoKSB7XHJcbiAgICAgICAgbGV0IHJldHVybmJ0biA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgcmV0dXJuYnRuLnRhcmdldCA9IHRoaXMubm9kZTtcclxuICAgICAgICByZXR1cm5idG4uY29tcG9uZW50ID0gXCJJbnN0cnVjdGlvbnMtd2luXCI7XHJcbiAgICAgICAgcmV0dXJuYnRuLmhhbmRsZXIgPSBcImxvYWROZXh0SW5zdHJ1Y3Rpb25zXCI7XHJcblxyXG5cclxuICAgICAgICBjYy5maW5kKFwiUmV0dXJuXCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2gocmV0dXJuYnRuKTtcclxuXHJcblxyXG4gICAgICAgIGxldCBwcmV2YnRuID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcclxuICAgICAgICBwcmV2YnRuLnRhcmdldCA9IHRoaXMubm9kZTtcclxuICAgICAgICBwcmV2YnRuLmNvbXBvbmVudCA9IFwiSW5zdHJ1Y3Rpb25zLXdpblwiO1xyXG4gICAgICAgIHByZXZidG4uaGFuZGxlciA9IFwibG9hZFByZXZJbnN0cnVjdGlvbnNcIjtcclxuXHJcblxyXG4gICAgICAgIGNjLmZpbmQoXCJQcmV2XCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2gocHJldmJ0bik7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZE5leHRJbnN0cnVjdGlvbnMoKXtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJtZW51XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWRQcmV2SW5zdHJ1Y3Rpb25zKCl7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiaW5zdHJ1Y3Rpb25zIC0gbWluaW1hcFwiKTtcclxuICAgIH1cclxuXHJcbn0iXX0=