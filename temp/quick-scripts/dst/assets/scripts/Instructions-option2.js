
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
    InstructionsMenuOption2.prototype.start = function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcSW5zdHJ1Y3Rpb25zLW9wdGlvbjIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBcUQsMkNBQVk7SUFBakU7O0lBa0NBLENBQUM7SUE1QkcsdUNBQUssR0FBTDtRQUNJLElBQUksT0FBTyxHQUFHLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUM5QyxPQUFPLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDM0IsT0FBTyxDQUFDLFNBQVMsR0FBRyxzQkFBc0IsQ0FBQztRQUMzQyxPQUFPLENBQUMsT0FBTyxHQUFHLHNCQUFzQixDQUFDO1FBR3pDLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBR3pFLElBQUksT0FBTyxHQUFHLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUM5QyxPQUFPLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDM0IsT0FBTyxDQUFDLFNBQVMsR0FBRyxzQkFBc0IsQ0FBQztRQUMzQyxPQUFPLENBQUMsT0FBTyxHQUFHLHNCQUFzQixDQUFDO1FBR3pDLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBRTdFLENBQUM7SUFFRCxzREFBb0IsR0FBcEI7UUFDSSxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFRCxzREFBb0IsR0FBcEI7UUFDSSxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFoQ2dCLHVCQUF1QjtRQUQzQyxPQUFPO09BQ2EsdUJBQXVCLENBa0MzQztJQUFELDhCQUFDO0NBbENELEFBa0NDLENBbENvRCxFQUFFLENBQUMsU0FBUyxHQWtDaEU7a0JBbENvQix1QkFBdUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluc3RydWN0aW9uc01lbnVPcHRpb24yIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgICAgIEVkaXRfQm94OiBjYy5FZGl0Qm94LFxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICBsZXQgbmV4dGJ0biA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgbmV4dGJ0bi50YXJnZXQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgbmV4dGJ0bi5jb21wb25lbnQgPSBcIkluc3RydWN0aW9ucy1vcHRpb24yXCI7XHJcbiAgICAgICAgbmV4dGJ0bi5oYW5kbGVyID0gXCJsb2FkTmV4dEluc3RydWN0aW9uc1wiO1xyXG5cclxuXHJcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9OZXh0XCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2gobmV4dGJ0bik7XHJcblxyXG5cclxuICAgICAgICBsZXQgcHJldmJ0biA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgcHJldmJ0bi50YXJnZXQgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgcHJldmJ0bi5jb21wb25lbnQgPSBcIkluc3RydWN0aW9ucy1vcHRpb24yXCI7XHJcbiAgICAgICAgcHJldmJ0bi5oYW5kbGVyID0gXCJsb2FkUHJldkluc3RydWN0aW9uc1wiO1xyXG5cclxuXHJcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9QcmV2XCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pLmNsaWNrRXZlbnRzLnB1c2gocHJldmJ0bik7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGxvYWROZXh0SW5zdHJ1Y3Rpb25zKCl7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiaW5zdHJ1Y3Rpb25zIC0gbWluaW1hcFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkUHJldkluc3RydWN0aW9ucygpe1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImluc3RydWN0aW9ucyAtIG9wdGlvbiAxXCIpO1xyXG4gICAgfVxyXG5cclxufSJdfQ==