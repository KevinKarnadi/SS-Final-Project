
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Bullet.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '889b5Mpv+1HeZcVtW6D2TTK', 'Bullet');
// scripts/Bullet.ts

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
var Bullet = /** @class */ (function (_super) {
    __extends(Bullet, _super);
    function Bullet() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.anim = null;
        _this.isTriggered = false; // I add this to make the bullet kill one enemy at a time.
        _this.rigidBody = null;
        _this.shootAngle = null;
        return _this;
    }
    // when created, the bullet need to be placed at correct position and play animation.
    Bullet.prototype.init = function (node) {
        this.anim = this.getComponent(cc.Animation);
        this.rigidBody = this.getComponent(cc.RigidBody);
        this.setInitPos(node);
        this.anim.play('bullet');
        this.bulletMove();
    };
    //this function sets the bullet's initial position when it is reused.
    Bullet.prototype.setInitPos = function (node) {
        this.node.parent = node.parent; // don't mount under the player, otherwise it will change direction when player move
        if (node.scaleX > 0) {
            this.node.position = cc.v3(35, 8);
            this.node.scaleX = 1;
        }
        else {
            this.node.position = cc.v3(-35, 8);
            this.node.scaleX = -1;
        }
        this.node.position = this.node.position.addSelf(node.position);
    };
    //make the bullet move from current position
    Bullet.prototype.bulletMove = function () {
        var moveDir = null;
        var speed = 1000;
        // decide bullet direction
        if (this.node.scaleX > 0) {
            moveDir = 1;
        }
        else {
            moveDir = -1;
        }
        this.rigidBody.linearVelocity = cc.v2(speed * moveDir, Math.sinh(this.shootAngle) * speed);
    };
    //detect collision
    Bullet.prototype.onBeginContact = function (contact, selfCollider, otherCollider) {
        var _this = this;
        this.node.stopAllActions();
        this.unscheduleAllCallbacks();
        this.scheduleOnce(function () {
            _this.anim.stop();
            _this.node.destroy();
        }, 0.1); // for better animation effect, I delay 0.1s when bullet hits the enemy
    };
    Bullet.prototype.setAngle = function (angle) {
        this.shootAngle = angle;
    };
    Bullet = __decorate([
        ccclass
    ], Bullet);
    return Bullet;
}(cc.Component));
exports.default = Bullet;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQnVsbGV0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQW9DLDBCQUFZO0lBQWhEO1FBQUEscUVBOEVDO1FBM0VXLFVBQUksR0FBRyxJQUFJLENBQUM7UUFFYixpQkFBVyxHQUFHLEtBQUssQ0FBQyxDQUFDLDBEQUEwRDtRQUU5RSxlQUFTLEdBQWlCLElBQUksQ0FBQztRQUUvQixnQkFBVSxHQUFHLElBQUksQ0FBQzs7SUFxRTlCLENBQUM7SUFuRUcscUZBQXFGO0lBQzlFLHFCQUFJLEdBQVgsVUFBWSxJQUFhO1FBRXJCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUVqRCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXRCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQscUVBQXFFO0lBQzdELDJCQUFVLEdBQWxCLFVBQW1CLElBQWE7UUFFNUIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLG9GQUFvRjtRQUVwSCxJQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUNsQjtZQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBRWxDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztTQUN4QjthQUVEO1lBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUVuQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztTQUN6QjtRQUVELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUVELDRDQUE0QztJQUNwQywyQkFBVSxHQUFsQjtRQUVJLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQztRQUNuQixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7UUFFakIsMEJBQTBCO1FBQzFCLElBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3JCLE9BQU8sR0FBRyxDQUFDLENBQUM7U0FDZjthQUFNO1lBQ0gsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ2hCO1FBQ0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEdBQUcsT0FBTyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDO0lBQy9GLENBQUM7SUFFRCxrQkFBa0I7SUFDbEIsK0JBQWMsR0FBZCxVQUFlLE9BQU8sRUFBRSxZQUFZLEVBQUUsYUFBYTtRQUFuRCxpQkFhQztRQVhHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFFM0IsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7UUFFOUIsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUVkLEtBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7WUFFakIsS0FBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUV4QixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyx1RUFBdUU7SUFDcEYsQ0FBQztJQUVELHlCQUFRLEdBQVIsVUFBUyxLQUFLO1FBQ1YsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7SUFDNUIsQ0FBQztJQTdFZ0IsTUFBTTtRQUQxQixPQUFPO09BQ2EsTUFBTSxDQThFMUI7SUFBRCxhQUFDO0NBOUVELEFBOEVDLENBOUVtQyxFQUFFLENBQUMsU0FBUyxHQThFL0M7a0JBOUVvQixNQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdWxsZXQgZXh0ZW5kcyBjYy5Db21wb25lbnQgXHJcbntcclxuXHJcbiAgICBwcml2YXRlIGFuaW0gPSBudWxsO1xyXG5cclxuICAgIHB1YmxpYyBpc1RyaWdnZXJlZCA9IGZhbHNlOyAvLyBJIGFkZCB0aGlzIHRvIG1ha2UgdGhlIGJ1bGxldCBraWxsIG9uZSBlbmVteSBhdCBhIHRpbWUuXHJcblxyXG4gICAgcHJpdmF0ZSByaWdpZEJvZHk6IGNjLlJpZ2lkQm9keSA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBzaG9vdEFuZ2xlID0gbnVsbDtcclxuXHJcbiAgICAvLyB3aGVuIGNyZWF0ZWQsIHRoZSBidWxsZXQgbmVlZCB0byBiZSBwbGFjZWQgYXQgY29ycmVjdCBwb3NpdGlvbiBhbmQgcGxheSBhbmltYXRpb24uXHJcbiAgICBwdWJsaWMgaW5pdChub2RlOiBjYy5Ob2RlKSBcclxuICAgIHtcclxuICAgICAgICB0aGlzLmFuaW0gPSB0aGlzLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pO1xyXG4gICAgICAgIHRoaXMucmlnaWRCb2R5ID0gdGhpcy5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRJbml0UG9zKG5vZGUpO1xyXG5cclxuICAgICAgICB0aGlzLmFuaW0ucGxheSgnYnVsbGV0Jyk7XHJcbiAgICAgICAgdGhpcy5idWxsZXRNb3ZlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy90aGlzIGZ1bmN0aW9uIHNldHMgdGhlIGJ1bGxldCdzIGluaXRpYWwgcG9zaXRpb24gd2hlbiBpdCBpcyByZXVzZWQuXHJcbiAgICBwcml2YXRlIHNldEluaXRQb3Mobm9kZTogY2MuTm9kZSlcclxuICAgIHtcclxuICAgICAgICB0aGlzLm5vZGUucGFyZW50ID0gbm9kZS5wYXJlbnQ7IC8vIGRvbid0IG1vdW50IHVuZGVyIHRoZSBwbGF5ZXIsIG90aGVyd2lzZSBpdCB3aWxsIGNoYW5nZSBkaXJlY3Rpb24gd2hlbiBwbGF5ZXIgbW92ZVxyXG5cclxuICAgICAgICBpZihub2RlLnNjYWxlWCA+IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24gPSBjYy52MygzNSwgOCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGVYID0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnBvc2l0aW9uID0gY2MudjMoLTM1LCA4KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5zY2FsZVggPSAtMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IHRoaXMubm9kZS5wb3NpdGlvbi5hZGRTZWxmKG5vZGUucG9zaXRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vbWFrZSB0aGUgYnVsbGV0IG1vdmUgZnJvbSBjdXJyZW50IHBvc2l0aW9uXHJcbiAgICBwcml2YXRlIGJ1bGxldE1vdmUoKVxyXG4gICAge1xyXG4gICAgICAgIGxldCBtb3ZlRGlyID0gbnVsbDtcclxuICAgICAgICBsZXQgc3BlZWQgPSAxMDAwO1xyXG5cclxuICAgICAgICAvLyBkZWNpZGUgYnVsbGV0IGRpcmVjdGlvblxyXG4gICAgICAgIGlmKHRoaXMubm9kZS5zY2FsZVggPiAwKSB7XHJcbiAgICAgICAgICAgIG1vdmVEaXIgPSAxO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG1vdmVEaXIgPSAtMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5yaWdpZEJvZHkubGluZWFyVmVsb2NpdHkgPSBjYy52MihzcGVlZCAqIG1vdmVEaXIsIE1hdGguc2luaCh0aGlzLnNob290QW5nbGUpICogc3BlZWQpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvL2RldGVjdCBjb2xsaXNpb25cclxuICAgIG9uQmVnaW5Db250YWN0KGNvbnRhY3QsIHNlbGZDb2xsaWRlciwgb3RoZXJDb2xsaWRlcilcclxuICAgIHtcclxuICAgICAgICB0aGlzLm5vZGUuc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnVuc2NoZWR1bGVBbGxDYWxsYmFja3MoKTtcclxuXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5hbmltLnN0b3AoKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcblxyXG4gICAgICAgIH0sIDAuMSk7IC8vIGZvciBiZXR0ZXIgYW5pbWF0aW9uIGVmZmVjdCwgSSBkZWxheSAwLjFzIHdoZW4gYnVsbGV0IGhpdHMgdGhlIGVuZW15XHJcbiAgICB9XHJcblxyXG4gICAgc2V0QW5nbGUoYW5nbGUpIHtcclxuICAgICAgICB0aGlzLnNob290QW5nbGUgPSBhbmdsZTtcclxuICAgIH1cclxufVxyXG4iXX0=