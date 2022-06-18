
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Arrow.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '59d65rCd65HeaNbiiLTA1TE', 'Arrow');
// scripts/Arrow.ts

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
var Arrow = /** @class */ (function (_super) {
    __extends(Arrow, _super);
    function Arrow() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        return _this;
    }
    // when created, the bullet need to be placed at correct position and play animation.
    Arrow.prototype.init = function (node) {
        this.setInitPos(node);
    };
    //this function sets the arrow's initial position when it is reused.
    Arrow.prototype.setInitPos = function (node) {
        this.node.parent = node.parent; // don't mount under the player, otherwise it will change direction when player move
        if (node.scaleX > 0) {
            this.node.position = cc.v3(35, 8);
            this.node.scaleX = 1;
        }
        else {
            console.log("beda");
            this.node.position = cc.v3(-35, 8);
            this.node.scaleX = -1;
        }
        this.node.position = this.node.position.addSelf(node.position);
    };
    //make the arrow move according to the angle
    Arrow.prototype.arrowMove = function (angle) {
        this.node.angle = angle;
    };
    Arrow.prototype.destroyArrow = function () {
        this.node.destroy();
    };
    Arrow = __decorate([
        ccclass
    ], Arrow);
    return Arrow;
}(cc.Component));
exports.default = Arrow;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQXJyb3cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBbUMseUJBQVk7SUFBL0M7UUFBQSxxRUF5Q0M7UUF2Q1csV0FBSyxHQUFHLElBQUksQ0FBQzs7SUF1Q3pCLENBQUM7SUFyQ0cscUZBQXFGO0lBQzlFLG9CQUFJLEdBQVgsVUFBWSxJQUFhO1FBRXJCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVELG9FQUFvRTtJQUM1RCwwQkFBVSxHQUFsQixVQUFtQixJQUFhO1FBRTVCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxvRkFBb0Y7UUFFcEgsSUFBRyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFDbEI7WUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUVsQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7U0FDeEI7YUFFRDtZQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUE7WUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUVuQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztTQUN6QjtRQUVELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUVELDRDQUE0QztJQUNwQyx5QkFBUyxHQUFqQixVQUFrQixLQUFLO1FBRW5CLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUM1QixDQUFDO0lBRUQsNEJBQVksR0FBWjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQXhDZ0IsS0FBSztRQUR6QixPQUFPO09BQ2EsS0FBSyxDQXlDekI7SUFBRCxZQUFDO0NBekNELEFBeUNDLENBekNrQyxFQUFFLENBQUMsU0FBUyxHQXlDOUM7a0JBekNvQixLQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcnJvdyBleHRlbmRzIGNjLkNvbXBvbmVudCBcclxue1xyXG4gICAgcHJpdmF0ZSBsYWJlbCA9IG51bGw7XHJcblxyXG4gICAgLy8gd2hlbiBjcmVhdGVkLCB0aGUgYnVsbGV0IG5lZWQgdG8gYmUgcGxhY2VkIGF0IGNvcnJlY3QgcG9zaXRpb24gYW5kIHBsYXkgYW5pbWF0aW9uLlxyXG4gICAgcHVibGljIGluaXQobm9kZTogY2MuTm9kZSkgXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5zZXRJbml0UG9zKG5vZGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vdGhpcyBmdW5jdGlvbiBzZXRzIHRoZSBhcnJvdydzIGluaXRpYWwgcG9zaXRpb24gd2hlbiBpdCBpcyByZXVzZWQuXHJcbiAgICBwcml2YXRlIHNldEluaXRQb3Mobm9kZTogY2MuTm9kZSlcclxuICAgIHtcclxuICAgICAgICB0aGlzLm5vZGUucGFyZW50ID0gbm9kZS5wYXJlbnQ7IC8vIGRvbid0IG1vdW50IHVuZGVyIHRoZSBwbGF5ZXIsIG90aGVyd2lzZSBpdCB3aWxsIGNoYW5nZSBkaXJlY3Rpb24gd2hlbiBwbGF5ZXIgbW92ZVxyXG5cclxuICAgICAgICBpZihub2RlLnNjYWxlWCA+IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24gPSBjYy52MygzNSwgOCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGVYID0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJiZWRhXCIpXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IGNjLnYzKC0zNSwgOCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGVYID0gLTE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24gPSB0aGlzLm5vZGUucG9zaXRpb24uYWRkU2VsZihub2RlLnBvc2l0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICAvL21ha2UgdGhlIGFycm93IG1vdmUgYWNjb3JkaW5nIHRvIHRoZSBhbmdsZVxyXG4gICAgcHJpdmF0ZSBhcnJvd01vdmUoYW5nbGUpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFuZ2xlID0gYW5nbGU7XHJcbiAgICB9XHJcblxyXG4gICAgZGVzdHJveUFycm93KCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICB9XHJcbn1cclxuIl19