
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
        _this.bulletManager = null;
        _this.isTriggered = false; // I add this to make the bullet kill one enemy at a time.
        _this.rigidBody = null;
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
    // this function is called when the bullet manager calls "get" API.
    Bullet.prototype.reuse = function (bulletManager) {
        this.bulletManager = bulletManager;
        this.isTriggered = false;
    };
    //this function sets the bullet's initial position when it is reused.
    Bullet.prototype.setInitPos = function (node) {
        this.node.parent = node.parent; // don't mount under the player, otherwise it will change direction when player move
        if (node.scaleX > 0) {
            this.node.position = cc.v3(62, 8);
            this.node.scaleX = 1;
        }
        else {
            this.node.position = cc.v3(-62, 8);
            this.node.scaleX = -1;
        }
        this.node.position = this.node.position.addSelf(node.position);
    };
    //make the bullet move from current position
    Bullet.prototype.bulletMove = function () {
        var moveDir = null;
        var speed = 300;
        // decide bullet direction
        if (this.node.scaleX > 0) {
            moveDir = 1;
        }
        else {
            moveDir = -1;
        }
        this.rigidBody.linearVelocity = cc.v2(speed * moveDir, 0);
    };
    //detect collision
    Bullet.prototype.onBeginContact = function (contact, selfCollider, otherCollider) {
        var _this = this;
        this.node.stopAllActions();
        this.unscheduleAllCallbacks();
        this.scheduleOnce(function () {
            _this.anim.stop();
            _this.bulletManager.put(_this.node);
        }, 0.1); // for better animation effect, I delay 0.1s when bullet hits the enemy
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQnVsbGV0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQW9DLDBCQUFZO0lBQWhEO1FBQUEscUVBa0ZDO1FBL0VXLFVBQUksR0FBRyxJQUFJLENBQUM7UUFFWixtQkFBYSxHQUFHLElBQUksQ0FBQztRQUV0QixpQkFBVyxHQUFHLEtBQUssQ0FBQyxDQUFDLDBEQUEwRDtRQUU5RSxlQUFTLEdBQWlCLElBQUksQ0FBQzs7SUF5RTNDLENBQUM7SUF2RUcscUZBQXFGO0lBQzlFLHFCQUFJLEdBQVgsVUFBWSxJQUFhO1FBRXJCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUVqRCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXRCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQsbUVBQW1FO0lBQ25FLHNCQUFLLEdBQUwsVUFBTSxhQUFhO1FBRWYsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7UUFFbkMsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7SUFDN0IsQ0FBQztJQUVELHFFQUFxRTtJQUM3RCwyQkFBVSxHQUFsQixVQUFtQixJQUFhO1FBRTVCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxvRkFBb0Y7UUFFcEgsSUFBRyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFDbEI7WUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUVsQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7U0FDeEI7YUFFRDtZQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFFbkMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDekI7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFFRCw0Q0FBNEM7SUFDcEMsMkJBQVUsR0FBbEI7UUFFSSxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDbkIsSUFBSSxLQUFLLEdBQUcsR0FBRyxDQUFDO1FBRWhCLDBCQUEwQjtRQUMxQixJQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNyQixPQUFPLEdBQUcsQ0FBQyxDQUFDO1NBQ2Y7YUFBTTtZQUNILE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQztTQUNoQjtRQUVELElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSyxHQUFHLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBRUQsa0JBQWtCO0lBQ2xCLCtCQUFjLEdBQWQsVUFBZSxPQUFPLEVBQUUsWUFBWSxFQUFFLGFBQWE7UUFBbkQsaUJBWUM7UUFWRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBRTNCLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1FBRTlCLElBQUksQ0FBQyxZQUFZLENBQUM7WUFFZCxLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1lBRWpCLEtBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyx1RUFBdUU7SUFDcEYsQ0FBQztJQWpGZ0IsTUFBTTtRQUQxQixPQUFPO09BQ2EsTUFBTSxDQWtGMUI7SUFBRCxhQUFDO0NBbEZELEFBa0ZDLENBbEZtQyxFQUFFLENBQUMsU0FBUyxHQWtGL0M7a0JBbEZvQixNQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdWxsZXQgZXh0ZW5kcyBjYy5Db21wb25lbnQgXHJcbntcclxuXHJcbiAgICBwcml2YXRlIGFuaW0gPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgYnVsbGV0TWFuYWdlciA9IG51bGw7XHJcblxyXG4gICAgcHVibGljIGlzVHJpZ2dlcmVkID0gZmFsc2U7IC8vIEkgYWRkIHRoaXMgdG8gbWFrZSB0aGUgYnVsbGV0IGtpbGwgb25lIGVuZW15IGF0IGEgdGltZS5cclxuXHJcbiAgICBwcml2YXRlIHJpZ2lkQm9keTogY2MuUmlnaWRCb2R5ID0gbnVsbDtcclxuXHJcbiAgICAvLyB3aGVuIGNyZWF0ZWQsIHRoZSBidWxsZXQgbmVlZCB0byBiZSBwbGFjZWQgYXQgY29ycmVjdCBwb3NpdGlvbiBhbmQgcGxheSBhbmltYXRpb24uXHJcbiAgICBwdWJsaWMgaW5pdChub2RlOiBjYy5Ob2RlKSBcclxuICAgIHtcclxuICAgICAgICB0aGlzLmFuaW0gPSB0aGlzLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pO1xyXG4gICAgICAgIHRoaXMucmlnaWRCb2R5ID0gdGhpcy5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRJbml0UG9zKG5vZGUpO1xyXG5cclxuICAgICAgICB0aGlzLmFuaW0ucGxheSgnYnVsbGV0Jyk7XHJcbiAgICAgICAgdGhpcy5idWxsZXRNb3ZlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdGhpcyBmdW5jdGlvbiBpcyBjYWxsZWQgd2hlbiB0aGUgYnVsbGV0IG1hbmFnZXIgY2FsbHMgXCJnZXRcIiBBUEkuXHJcbiAgICByZXVzZShidWxsZXRNYW5hZ2VyKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuYnVsbGV0TWFuYWdlciA9IGJ1bGxldE1hbmFnZXI7XHJcblxyXG4gICAgICAgIHRoaXMuaXNUcmlnZ2VyZWQgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvL3RoaXMgZnVuY3Rpb24gc2V0cyB0aGUgYnVsbGV0J3MgaW5pdGlhbCBwb3NpdGlvbiB3aGVuIGl0IGlzIHJldXNlZC5cclxuICAgIHByaXZhdGUgc2V0SW5pdFBvcyhub2RlOiBjYy5Ob2RlKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMubm9kZS5wYXJlbnQgPSBub2RlLnBhcmVudDsgLy8gZG9uJ3QgbW91bnQgdW5kZXIgdGhlIHBsYXllciwgb3RoZXJ3aXNlIGl0IHdpbGwgY2hhbmdlIGRpcmVjdGlvbiB3aGVuIHBsYXllciBtb3ZlXHJcblxyXG4gICAgICAgIGlmKG5vZGUuc2NhbGVYID4gMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IGNjLnYzKDYyLCA4KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5zY2FsZVggPSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24gPSBjYy52MygtNjIsIDgpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9IC0xO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLnBvc2l0aW9uID0gdGhpcy5ub2RlLnBvc2l0aW9uLmFkZFNlbGYobm9kZS5wb3NpdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgLy9tYWtlIHRoZSBidWxsZXQgbW92ZSBmcm9tIGN1cnJlbnQgcG9zaXRpb25cclxuICAgIHByaXZhdGUgYnVsbGV0TW92ZSgpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IG1vdmVEaXIgPSBudWxsO1xyXG4gICAgICAgIGxldCBzcGVlZCA9IDMwMDtcclxuXHJcbiAgICAgICAgLy8gZGVjaWRlIGJ1bGxldCBkaXJlY3Rpb25cclxuICAgICAgICBpZih0aGlzLm5vZGUuc2NhbGVYID4gMCkge1xyXG4gICAgICAgICAgICBtb3ZlRGlyID0gMTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBtb3ZlRGlyID0gLTE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnJpZ2lkQm9keS5saW5lYXJWZWxvY2l0eSA9IGNjLnYyKHNwZWVkICogbW92ZURpciwgMCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vZGV0ZWN0IGNvbGxpc2lvblxyXG4gICAgb25CZWdpbkNvbnRhY3QoY29udGFjdCwgc2VsZkNvbGxpZGVyLCBvdGhlckNvbGxpZGVyKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMubm9kZS5zdG9wQWxsQWN0aW9ucygpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMudW5zY2hlZHVsZUFsbENhbGxiYWNrcygpO1xyXG5cclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmFuaW0uc3RvcCgpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5idWxsZXRNYW5hZ2VyLnB1dCh0aGlzLm5vZGUpO1xyXG4gICAgICAgIH0sIDAuMSk7IC8vIGZvciBiZXR0ZXIgYW5pbWF0aW9uIGVmZmVjdCwgSSBkZWxheSAwLjFzIHdoZW4gYnVsbGV0IGhpdHMgdGhlIGVuZW15XHJcbiAgICB9XHJcbn1cclxuIl19