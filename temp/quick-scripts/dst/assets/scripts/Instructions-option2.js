
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Instructions-option2.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cc30acpkBxLtKbIdxRprS2A', 'Instructions-option2');
// scripts/Instructions-option2.ts

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
var InstructionsMenuOption2 = /** @class */ (function (_super) {
    __extends(InstructionsMenuOption2, _super);
    function InstructionsMenuOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InstructionsMenuOption2.prototype.onLoad = function () {
        this.initButtons();
    };
    InstructionsMenuOption2.prototype.start = function () { };
    InstructionsMenuOption2.prototype.initButtons = function () {
        var nextbtn = new cc.Component.EventHandler();
        nextbtn.target = this.node;
        nextbtn.component = "Instructions-option2";
        nextbtn.handler = "loadNextInstructions";
        cc.find("Canvas/Next").getComponent(cc.Button).clickEvents.push(nextbtn);
        var prevbtn = new cc.Component.EventHandler();
        prevbtn.target = this.node;
        prevbtn.component = "Instructions-option2";
        prevbtn.handler = "loadPrevInstructions";
        cc.find("Canvas/Prev").getComponent(cc.Button).clickEvents.push(prevbtn);
    };
    InstructionsMenuOption2.prototype.loadNextInstructions = function () {
        cc.director.loadScene("instructions - minimap");
    };
    InstructionsMenuOption2.prototype.loadPrevInstructions = function () {
        cc.director.loadScene("instructions - option 1");
    };
    InstructionsMenuOption2 = __decorate([
        ccclass
    ], InstructionsMenuOption2);
    return InstructionsMenuOption2;
}(cc.Component));
exports.default = InstructionsMenuOption2;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcSW5zdHJ1Y3Rpb25zLW9wdGlvbjIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBcUQsMkNBQVk7SUFBakU7O0lBdUNBLENBQUM7SUFqQ0csd0NBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUQsdUNBQUssR0FBTCxjQUFVLENBQUM7SUFFWCw2Q0FBVyxHQUFYO1FBQ0ksSUFBSSxPQUFPLEdBQUcsSUFBSSxFQUFFLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzlDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUMzQixPQUFPLENBQUMsU0FBUyxHQUFHLHNCQUFzQixDQUFDO1FBQzNDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsc0JBQXNCLENBQUM7UUFHekMsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFHekUsSUFBSSxPQUFPLEdBQUcsSUFBSSxFQUFFLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzlDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUMzQixPQUFPLENBQUMsU0FBUyxHQUFHLHNCQUFzQixDQUFDO1FBQzNDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsc0JBQXNCLENBQUM7UUFHekMsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDN0UsQ0FBQztJQUVELHNEQUFvQixHQUFwQjtRQUNJLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLHdCQUF3QixDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVELHNEQUFvQixHQUFwQjtRQUNJLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLHlCQUF5QixDQUFDLENBQUM7SUFDckQsQ0FBQztJQXJDZ0IsdUJBQXVCO1FBRDNDLE9BQU87T0FDYSx1QkFBdUIsQ0F1QzNDO0lBQUQsOEJBQUM7Q0F2Q0QsQUF1Q0MsQ0F2Q29ELEVBQUUsQ0FBQyxTQUFTLEdBdUNoRTtrQkF2Q29CLHVCQUF1QiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5zdHJ1Y3Rpb25zTWVudU9wdGlvbjIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAgICAgRWRpdF9Cb3g6IGNjLkVkaXRCb3gsXHJcbiAgICB9XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMuaW5pdEJ1dHRvbnMoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCAoKSB7fVxyXG5cclxuICAgIGluaXRCdXR0b25zKCkge1xyXG4gICAgICAgIGxldCBuZXh0YnRuID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcclxuICAgICAgICBuZXh0YnRuLnRhcmdldCA9IHRoaXMubm9kZTtcclxuICAgICAgICBuZXh0YnRuLmNvbXBvbmVudCA9IFwiSW5zdHJ1Y3Rpb25zLW9wdGlvbjJcIjtcclxuICAgICAgICBuZXh0YnRuLmhhbmRsZXIgPSBcImxvYWROZXh0SW5zdHJ1Y3Rpb25zXCI7XHJcblxyXG5cclxuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL05leHRcIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuY2xpY2tFdmVudHMucHVzaChuZXh0YnRuKTtcclxuXHJcblxyXG4gICAgICAgIGxldCBwcmV2YnRuID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcclxuICAgICAgICBwcmV2YnRuLnRhcmdldCA9IHRoaXMubm9kZTtcclxuICAgICAgICBwcmV2YnRuLmNvbXBvbmVudCA9IFwiSW5zdHJ1Y3Rpb25zLW9wdGlvbjJcIjtcclxuICAgICAgICBwcmV2YnRuLmhhbmRsZXIgPSBcImxvYWRQcmV2SW5zdHJ1Y3Rpb25zXCI7XHJcblxyXG5cclxuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL1ByZXZcIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuY2xpY2tFdmVudHMucHVzaChwcmV2YnRuKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkTmV4dEluc3RydWN0aW9ucygpe1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImluc3RydWN0aW9ucyAtIG1pbmltYXBcIik7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZFByZXZJbnN0cnVjdGlvbnMoKXtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJpbnN0cnVjdGlvbnMgLSBvcHRpb24gMVwiKTtcclxuICAgIH1cclxuXHJcbn0iXX0=