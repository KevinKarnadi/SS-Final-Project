
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Instructions-minimap.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7a77eQPNs5HnKeoq+nyiB++', 'Instructions-minimap');
// scripts/Instructions-minimap.ts

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
var InstructionsMenuMinimap = /** @class */ (function (_super) {
    __extends(InstructionsMenuMinimap, _super);
    function InstructionsMenuMinimap() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InstructionsMenuMinimap.prototype.onLoad = function () {
        this.initButtons();
    };
    InstructionsMenuMinimap.prototype.start = function () { };
    InstructionsMenuMinimap.prototype.initButtons = function () {
        var nextbtn = new cc.Component.EventHandler();
        nextbtn.target = this.node;
        nextbtn.component = "Instructions-minimap";
        nextbtn.handler = "loadNextInstructions";
        cc.find("Next").getComponent(cc.Button).clickEvents.push(nextbtn);
        var prevbtn = new cc.Component.EventHandler();
        prevbtn.target = this.node;
        prevbtn.component = "Instructions-minimap";
        prevbtn.handler = "loadPrevInstructions";
        cc.find("Prev").getComponent(cc.Button).clickEvents.push(prevbtn);
    };
    InstructionsMenuMinimap.prototype.loadNextInstructions = function () {
        cc.director.loadScene("instructions - win");
    };
    InstructionsMenuMinimap.prototype.loadPrevInstructions = function () {
        cc.director.loadScene("instructions - option 2");
    };
    InstructionsMenuMinimap = __decorate([
        ccclass
    ], InstructionsMenuMinimap);
    return InstructionsMenuMinimap;
}(cc.Component));
exports.default = InstructionsMenuMinimap;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcSW5zdHJ1Y3Rpb25zLW1pbmltYXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBcUQsMkNBQVk7SUFBakU7O0lBdUNBLENBQUM7SUFqQ0csd0NBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUQsdUNBQUssR0FBTCxjQUFVLENBQUM7SUFFWCw2Q0FBVyxHQUFYO1FBQ0ksSUFBSSxPQUFPLEdBQUcsSUFBSSxFQUFFLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzlDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUMzQixPQUFPLENBQUMsU0FBUyxHQUFHLHNCQUFzQixDQUFDO1FBQzNDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsc0JBQXNCLENBQUM7UUFHekMsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFHbEUsSUFBSSxPQUFPLEdBQUcsSUFBSSxFQUFFLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzlDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUMzQixPQUFPLENBQUMsU0FBUyxHQUFHLHNCQUFzQixDQUFDO1FBQzNDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsc0JBQXNCLENBQUM7UUFHekMsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdEUsQ0FBQztJQUVELHNEQUFvQixHQUFwQjtRQUNJLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVELHNEQUFvQixHQUFwQjtRQUNJLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLHlCQUF5QixDQUFDLENBQUM7SUFDckQsQ0FBQztJQXJDZ0IsdUJBQXVCO1FBRDNDLE9BQU87T0FDYSx1QkFBdUIsQ0F1QzNDO0lBQUQsOEJBQUM7Q0F2Q0QsQUF1Q0MsQ0F2Q29ELEVBQUUsQ0FBQyxTQUFTLEdBdUNoRTtrQkF2Q29CLHVCQUF1QiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5zdHJ1Y3Rpb25zTWVudU1pbmltYXAgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAgICAgRWRpdF9Cb3g6IGNjLkVkaXRCb3gsXHJcbiAgICB9XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMuaW5pdEJ1dHRvbnMoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCAoKSB7fVxyXG5cclxuICAgIGluaXRCdXR0b25zKCkge1xyXG4gICAgICAgIGxldCBuZXh0YnRuID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcclxuICAgICAgICBuZXh0YnRuLnRhcmdldCA9IHRoaXMubm9kZTtcclxuICAgICAgICBuZXh0YnRuLmNvbXBvbmVudCA9IFwiSW5zdHJ1Y3Rpb25zLW1pbmltYXBcIjtcclxuICAgICAgICBuZXh0YnRuLmhhbmRsZXIgPSBcImxvYWROZXh0SW5zdHJ1Y3Rpb25zXCI7XHJcblxyXG5cclxuICAgICAgICBjYy5maW5kKFwiTmV4dFwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5jbGlja0V2ZW50cy5wdXNoKG5leHRidG4pO1xyXG5cclxuXHJcbiAgICAgICAgbGV0IHByZXZidG4gPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xyXG4gICAgICAgIHByZXZidG4udGFyZ2V0ID0gdGhpcy5ub2RlO1xyXG4gICAgICAgIHByZXZidG4uY29tcG9uZW50ID0gXCJJbnN0cnVjdGlvbnMtbWluaW1hcFwiO1xyXG4gICAgICAgIHByZXZidG4uaGFuZGxlciA9IFwibG9hZFByZXZJbnN0cnVjdGlvbnNcIjtcclxuXHJcblxyXG4gICAgICAgIGNjLmZpbmQoXCJQcmV2XCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2gocHJldmJ0bik7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZE5leHRJbnN0cnVjdGlvbnMoKXtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJpbnN0cnVjdGlvbnMgLSB3aW5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZFByZXZJbnN0cnVjdGlvbnMoKXtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJpbnN0cnVjdGlvbnMgLSBvcHRpb24gMlwiKTtcclxuICAgIH1cclxuXHJcbn0iXX0=