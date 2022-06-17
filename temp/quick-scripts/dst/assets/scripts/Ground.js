
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Ground.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '27c01J847FL9JfMFwSZUf6Z', 'Ground');
// scripts/Ground.ts

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
var Ground = /** @class */ (function (_super) {
    __extends(Ground, _super);
    function Ground() {
        // private anim = null;
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // private bulletManager = null;
        _this.isTriggered = false; // I add this to make the bullet kill one enemy at a time.
        return _this;
    }
    // private rigidBody: cc.RigidBody = null;
    // when created, the bullet need to be placed at correct position and play animation.
    Ground.prototype.init = function (node, index) {
        // this.anim = this.getComponent(cc.Animation);
        // this.rigidBody = this.getComponent(cc.RigidBody);
        this.setInitPos(node, index);
    };
    // this function is called when the bullet manager calls "get" API.
    Ground.prototype.reuse = function (bulletManager) {
        // this.bulletManager = bulletManager;
        // this.isTriggered = false;
    };
    //this function sets the bullet's initial position when it is reused.
    Ground.prototype.setInitPos = function (node, index) {
        this.node.parent = node.parent; // don't mount under the player, otherwise it will change direction when player move
        this.node.position = cc.v3(-480 + (15 * index) % (15 * 200), -320 + 15 * Math.floor(index / 200));
        this.node.position = this.node.position.addSelf(node.position);
    };
    Ground.prototype.onBeginContact = function (contact, self, other) {
        var _this = this;
        if (other.node.group == "bullet") {
            // console.log(other.node.group, "begin");
            this.node.getChildByName("particle").active = true;
            this.scheduleOnce(function () {
                _this.node.destroy();
            }, 0.35);
        }
    };
    Ground.prototype.onPreSolve = function (contact, self, other) {
        var _this = this;
        if (other.node.group == "explosiveObj") {
            this.node.getChildByName("particle").active = true;
            this.scheduleOnce(function () {
                _this.node.destroy();
            }, 0.35);
        }
    };
    Ground = __decorate([
        ccclass
    ], Ground);
    return Ground;
}(cc.Component));
exports.default = Ground;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcR3JvdW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQW9DLDBCQUFZO0lBQWhEO1FBR0ksdUJBQXVCO1FBSDNCLHFFQTJEQztRQXRERyxnQ0FBZ0M7UUFFekIsaUJBQVcsR0FBRyxLQUFLLENBQUMsQ0FBQywwREFBMEQ7O0lBb0QxRixDQUFDO0lBbERHLDBDQUEwQztJQUUxQyxxRkFBcUY7SUFDOUUscUJBQUksR0FBWCxVQUFZLElBQWEsRUFBRSxLQUFhO1FBRXBDLCtDQUErQztRQUMvQyxvREFBb0Q7UUFFcEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVELG1FQUFtRTtJQUNuRSxzQkFBSyxHQUFMLFVBQU0sYUFBYTtRQUVmLHNDQUFzQztRQUV0Qyw0QkFBNEI7SUFDaEMsQ0FBQztJQUVELHFFQUFxRTtJQUM3RCwyQkFBVSxHQUFsQixVQUFtQixJQUFhLEVBQUUsS0FBYTtRQUUzQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsb0ZBQW9GO1FBRXBILElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFFLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFFbEcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBRUQsK0JBQWMsR0FBZCxVQUFlLE9BQU8sRUFBRSxJQUFJLEVBQUUsS0FBSztRQUFuQyxpQkFVQztRQVRHLElBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksUUFBUSxFQUFFO1lBQzdCLDBDQUEwQztZQUMxQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBRW5ELElBQUksQ0FBQyxZQUFZLENBQUM7Z0JBQ2QsS0FBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUN4QixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FFWjtJQUNMLENBQUM7SUFFRCwyQkFBVSxHQUFWLFVBQVcsT0FBTyxFQUFFLElBQUksRUFBRSxLQUFLO1FBQS9CLGlCQVFDO1FBUEcsSUFBRyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxjQUFjLEVBQUM7WUFDbEMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUVuRCxJQUFJLENBQUMsWUFBWSxDQUFDO2dCQUNkLEtBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDeEIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ1o7SUFDTCxDQUFDO0lBMURnQixNQUFNO1FBRDFCLE9BQU87T0FDYSxNQUFNLENBMkQxQjtJQUFELGFBQUM7Q0EzREQsQUEyREMsQ0EzRG1DLEVBQUUsQ0FBQyxTQUFTLEdBMkQvQztrQkEzRG9CLE1BQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyb3VuZCBleHRlbmRzIGNjLkNvbXBvbmVudCBcclxue1xyXG5cclxuICAgIC8vIHByaXZhdGUgYW5pbSA9IG51bGw7XHJcblxyXG4gICAgLy8gcHJpdmF0ZSBidWxsZXRNYW5hZ2VyID0gbnVsbDtcclxuXHJcbiAgICBwdWJsaWMgaXNUcmlnZ2VyZWQgPSBmYWxzZTsgLy8gSSBhZGQgdGhpcyB0byBtYWtlIHRoZSBidWxsZXQga2lsbCBvbmUgZW5lbXkgYXQgYSB0aW1lLlxyXG5cclxuICAgIC8vIHByaXZhdGUgcmlnaWRCb2R5OiBjYy5SaWdpZEJvZHkgPSBudWxsO1xyXG5cclxuICAgIC8vIHdoZW4gY3JlYXRlZCwgdGhlIGJ1bGxldCBuZWVkIHRvIGJlIHBsYWNlZCBhdCBjb3JyZWN0IHBvc2l0aW9uIGFuZCBwbGF5IGFuaW1hdGlvbi5cclxuICAgIHB1YmxpYyBpbml0KG5vZGU6IGNjLk5vZGUsIGluZGV4OiBudW1iZXIpIFxyXG4gICAge1xyXG4gICAgICAgIC8vIHRoaXMuYW5pbSA9IHRoaXMuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7XHJcbiAgICAgICAgLy8gdGhpcy5yaWdpZEJvZHkgPSB0aGlzLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG5cclxuICAgICAgICB0aGlzLnNldEluaXRQb3Mobm9kZSwgaW5kZXgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkIHdoZW4gdGhlIGJ1bGxldCBtYW5hZ2VyIGNhbGxzIFwiZ2V0XCIgQVBJLlxyXG4gICAgcmV1c2UoYnVsbGV0TWFuYWdlcilcclxuICAgIHtcclxuICAgICAgICAvLyB0aGlzLmJ1bGxldE1hbmFnZXIgPSBidWxsZXRNYW5hZ2VyO1xyXG5cclxuICAgICAgICAvLyB0aGlzLmlzVHJpZ2dlcmVkID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLy90aGlzIGZ1bmN0aW9uIHNldHMgdGhlIGJ1bGxldCdzIGluaXRpYWwgcG9zaXRpb24gd2hlbiBpdCBpcyByZXVzZWQuXHJcbiAgICBwcml2YXRlIHNldEluaXRQb3Mobm9kZTogY2MuTm9kZSwgaW5kZXg6IG51bWJlcilcclxuICAgIHtcclxuICAgICAgICB0aGlzLm5vZGUucGFyZW50ID0gbm9kZS5wYXJlbnQ7IC8vIGRvbid0IG1vdW50IHVuZGVyIHRoZSBwbGF5ZXIsIG90aGVyd2lzZSBpdCB3aWxsIGNoYW5nZSBkaXJlY3Rpb24gd2hlbiBwbGF5ZXIgbW92ZVxyXG5cclxuICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24gPSBjYy52MygtNDgwICsgKDE1ICogaW5kZXgpICUgKDE1ICogMjAwKSwgLTMyMCArIDE1ICogTWF0aC5mbG9vcihpbmRleCAvIDIwMCkpOyBcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24gPSB0aGlzLm5vZGUucG9zaXRpb24uYWRkU2VsZihub2RlLnBvc2l0aW9uKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgb25CZWdpbkNvbnRhY3QoY29udGFjdCwgc2VsZiwgb3RoZXIpIHtcclxuICAgICAgICBpZihvdGhlci5ub2RlLmdyb3VwID09IFwiYnVsbGV0XCIpIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cob3RoZXIubm9kZS5ncm91cCwgXCJiZWdpblwiKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicGFydGljbGVcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpPT57XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB9LCAwLjM1KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uUHJlU29sdmUoY29udGFjdCwgc2VsZiwgb3RoZXIpe1xyXG4gICAgICAgIGlmKG90aGVyLm5vZGUuZ3JvdXAgPT0gXCJleHBsb3NpdmVPYmpcIil7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInBhcnRpY2xlXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKT0+e1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgfSwgMC4zNSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==