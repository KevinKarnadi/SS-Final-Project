
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Player.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '79d84uofUZJnoN7h0LOvIwJ', 'Player');
// scripts/Player.ts

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
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.jumpAudio = null;
        _this.dieAudio = null;
        _this.bulletPrefab = null;
        _this.bombPrefab = null;
        _this.line = null;
        _this.playerName = null;
        _this.moveSpeed = 300;
        _this.moveDirection = 0;
        _this.changeDirection = 0;
        _this.jumpVelocity = 2500;
        _this.jump = false;
        _this.isOnGround = false;
        _this.isDie = false;
        _this.isMove = false;
        _this.animation = null;
        _this.animationState = null;
        _this.rigidBody = null;
        _this.isDieBound = false;
        _this.win = false;
        _this.bulletPool = null;
        _this.shoot = false;
        _this.bombPool = null;
        _this.bomb = false;
        _this.angle = null;
        _this.maxHP = 100;
        _this.HP = 100;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    Player.prototype.onLoad = function () {
        this.animation = this.node.getComponent(cc.Animation);
        this.rigidBody = this.node.getComponent(cc.RigidBody);
        this.playerName = this.node.getChildByName("Player Name");
        this.line = this.node.getChildByName("Line");
        this.bulletPool = new cc.NodePool('Bullet');
        this.bombPool = new cc.NodePool('Bomb');
        var maxBulletNum = 5;
        var maxBombNum = 5;
        for (var i = 0; i < maxBulletNum; i++) {
            var bullet = cc.instantiate(this.bulletPrefab);
            this.bulletPool.put(bullet);
        }
        for (var i = 0; i < maxBombNum; i++) {
            var bomb = cc.instantiate(this.bombPrefab);
            this.bombPool.put(bomb);
        }
    };
    Player.prototype.start = function () {
    };
    Player.prototype.update = function (dt) {
        if (!this.win) {
            if (!this.isDie) {
                cc.find("Player Health/bar", this.node).width = (this.HP / this.maxHP) * 100;
                this.playerMove(dt);
                if (this.jump) {
                    this.playerJump();
                }
                if (this.shoot) {
                    this.createBullet();
                }
                if (this.bomb) {
                    this.createBomb();
                }
                this.playerAnimation();
            }
        }
    };
    Player.prototype.onBeginContact = function (contact, self, other) {
        if (contact.getWorldManifold().normal.y < 0) { // step on something
            this.isOnGround = true;
        }
        // if(other.tag == 1){     // on ground or props
        //     this.isOnGround = true;
        // }
        if (other.node.group == "bullet") {
            this.HP -= 10;
        }
    };
    Player.prototype.playerMove = function (dt) {
        this.node.x += this.moveSpeed * this.moveDirection * dt; // player walking
        this.isMove = (this.moveDirection != 0) ? true : false;
        if (this.moveDirection == 1 || this.changeDirection == 1) { // change direction using scaling
            this.node.scaleX = 1;
            this.playerName.scaleX = 1;
        }
        else if (this.moveDirection == -1 || this.changeDirection == -1) {
            this.node.scaleX = -1;
            this.playerName.scaleX = -1;
        }
    };
    Player.prototype.playerJump = function () {
        if (this.isOnGround) { // player is on ground
            this.rigidBody.linearVelocity = cc.v2(0, this.jumpVelocity); // add jumping velocity
            this.isOnGround = false;
            cc.audioEngine.playEffect(this.jumpAudio, false);
        }
    };
    Player.prototype.createBullet = function () {
        this.shoot = false;
        var bullet = null;
        if (this.bulletPool.size() > 0)
            bullet = this.bulletPool.get(this.bulletPool);
        if (bullet != null) {
            bullet.getComponent('Bullet').init(this.node);
        }
    };
    Player.prototype.createBomb = function () {
        this.bomb = false;
        var bomb = null;
        if (this.bombPool.size() > 0)
            bomb = this.bombPool.get(this.bombPool);
        if (bomb != null) {
            bomb.getComponent('Bomb').setAngle(this.angle);
            bomb.getComponent('Bomb').init(this.node);
        }
    };
    Player.prototype.playerDie = function () {
        this.isDie = true;
        this.node.getComponent(cc.PhysicsBoxCollider).enabled = false;
        cc.audioEngine.playEffect(this.dieAudio, false);
    };
    Player.prototype.playerAnimation = function () {
    };
    Player.prototype.setPlayerMoveDirection = function (dir) {
        this.moveDirection = dir;
    };
    Player.prototype.setPlayerChangeDirection = function (dir) {
        this.changeDirection = dir;
    };
    Player.prototype.setPlayerJump = function (val) {
        this.jump = val;
    };
    Player.prototype.setPlayerShoot = function () {
        this.shoot = true;
    };
    Player.prototype.setPlayerBomb = function (angle) {
        this.angle = angle;
        this.bomb = true;
    };
    __decorate([
        property(cc.AudioClip)
    ], Player.prototype, "jumpAudio", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Player.prototype, "dieAudio", void 0);
    __decorate([
        property(cc.Prefab)
    ], Player.prototype, "bulletPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], Player.prototype, "bombPrefab", void 0);
    Player = __decorate([
        ccclass
    ], Player);
    return Player;
}(cc.Component));
exports.default = Player;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcUGxheWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQW9DLDBCQUFZO0lBQWhEO1FBQUEscUVBK0xDO1FBNUxHLGVBQVMsR0FBaUIsSUFBSSxDQUFDO1FBRy9CLGNBQVEsR0FBaUIsSUFBSSxDQUFDO1FBR3RCLGtCQUFZLEdBQWMsSUFBSSxDQUFDO1FBRy9CLGdCQUFVLEdBQWMsSUFBSSxDQUFDO1FBRTlCLFVBQUksR0FBRyxJQUFJLENBQUM7UUFFWCxnQkFBVSxHQUFHLElBQUksQ0FBQztRQUVsQixlQUFTLEdBQVcsR0FBRyxDQUFDO1FBRXhCLG1CQUFhLEdBQVcsQ0FBQyxDQUFDO1FBRTFCLHFCQUFlLEdBQVcsQ0FBQyxDQUFDO1FBRTVCLGtCQUFZLEdBQVcsSUFBSSxDQUFDO1FBRTVCLFVBQUksR0FBWSxLQUFLLENBQUM7UUFFdEIsZ0JBQVUsR0FBWSxLQUFLLENBQUM7UUFFNUIsV0FBSyxHQUFZLEtBQUssQ0FBQztRQUV2QixZQUFNLEdBQVksS0FBSyxDQUFDO1FBRXhCLGVBQVMsR0FBaUIsSUFBSSxDQUFDO1FBRS9CLG9CQUFjLEdBQUcsSUFBSSxDQUFDO1FBRXRCLGVBQVMsR0FBaUIsSUFBSSxDQUFDO1FBRS9CLGdCQUFVLEdBQVksS0FBSyxDQUFDO1FBRTVCLFNBQUcsR0FBWSxLQUFLLENBQUM7UUFFckIsZ0JBQVUsR0FBRyxJQUFJLENBQUM7UUFFbEIsV0FBSyxHQUFZLEtBQUssQ0FBQztRQUV2QixjQUFRLEdBQUcsSUFBSSxDQUFDO1FBRWhCLFVBQUksR0FBWSxLQUFLLENBQUM7UUFFdEIsV0FBSyxHQUFHLElBQUksQ0FBQztRQUViLFdBQUssR0FBVyxHQUFHLENBQUM7UUFFcEIsUUFBRSxHQUFXLEdBQUcs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SSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRUQsZ0NBQWUsR0FBZjtJQUVBLENBQUM7SUFFRCx1Q0FBc0IsR0FBdEIsVUFBdUIsR0FBVztRQUM5QixJQUFJLENBQUMsYUFBYSxHQUFHLEdBQUcsQ0FBQztJQUM3QixDQUFDO0lBRUQseUNBQXdCLEdBQXhCLFVBQXlCLEdBQVc7UUFDaEMsSUFBSSxDQUFDLGVBQWUsR0FBRyxHQUFHLENBQUM7SUFDL0IsQ0FBQztJQUVELDhCQUFhLEdBQWIsVUFBYyxHQUFZO1FBQ3RCLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO0lBQ3BCLENBQUM7SUFFRCwrQkFBYyxHQUFkO1FBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7SUFDdEIsQ0FBQztJQUVELDhCQUFhLEdBQWIsVUFBYyxLQUFLO1FBQ2YsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQTNMRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOzZDQUNRO0lBRy9CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7NENBQ087SUFHOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztnREFDbUI7SUFHdkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs4Q0FDaUI7SUFacEIsTUFBTTtRQUQxQixPQUFPO09BQ2EsTUFBTSxDQStMMUI7SUFBRCxhQUFDO0NBL0xELEFBK0xDLENBL0xtQyxFQUFFLENBQUMsU0FBUyxHQStML0M7a0JBL0xvQixNQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBqdW1wQXVkaW86IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIGRpZUF1ZGlvOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBwcml2YXRlIGJ1bGxldFByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgcHJpdmF0ZSBib21iUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIHB1YmxpYyBsaW5lID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIHBsYXllck5hbWUgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgbW92ZVNwZWVkOiBudW1iZXIgPSAzMDA7XHJcblxyXG4gICAgcHJpdmF0ZSBtb3ZlRGlyZWN0aW9uOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIHByaXZhdGUgY2hhbmdlRGlyZWN0aW9uOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIHByaXZhdGUganVtcFZlbG9jaXR5OiBudW1iZXIgPSAyNTAwO1xyXG5cclxuICAgIHByaXZhdGUganVtcDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHByaXZhdGUgaXNPbkdyb3VuZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHByaXZhdGUgaXNEaWU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBwcml2YXRlIGlzTW92ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHByaXZhdGUgYW5pbWF0aW9uOiBjYy5BbmltYXRpb24gPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgYW5pbWF0aW9uU3RhdGUgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgcmlnaWRCb2R5OiBjYy5SaWdpZEJvZHkgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgaXNEaWVCb3VuZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHByaXZhdGUgd2luOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgcHJpdmF0ZSBidWxsZXRQb29sID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIHNob290OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgcHJpdmF0ZSBib21iUG9vbCA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBib21iOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgcHJpdmF0ZSBhbmdsZSA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBtYXhIUDogbnVtYmVyID0gMTAwO1xyXG5cclxuICAgIHByaXZhdGUgSFA6IG51bWJlciA9IDEwMDtcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pO1xyXG4gICAgICAgIHRoaXMucmlnaWRCb2R5ID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG4gICAgICAgIHRoaXMucGxheWVyTmFtZSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIlBsYXllciBOYW1lXCIpO1xyXG4gICAgICAgIHRoaXMubGluZSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkxpbmVcIik7XHJcbiAgICAgICAgdGhpcy5idWxsZXRQb29sID0gbmV3IGNjLk5vZGVQb29sKCdCdWxsZXQnKTtcclxuICAgICAgICB0aGlzLmJvbWJQb29sID0gbmV3IGNjLk5vZGVQb29sKCdCb21iJyk7XHJcbiAgICAgICAgbGV0IG1heEJ1bGxldE51bSA9IDU7XHJcbiAgICAgICAgbGV0IG1heEJvbWJOdW0gPSA1O1xyXG4gICAgICAgIGZvcihsZXQgaTogbnVtYmVyID0gMDsgaSA8IG1heEJ1bGxldE51bTsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBidWxsZXQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmJ1bGxldFByZWZhYik7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmJ1bGxldFBvb2wucHV0KGJ1bGxldCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvcihsZXQgaTogbnVtYmVyID0gMDsgaSA8IG1heEJvbWJOdW07IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgYm9tYiA9IGNjLmluc3RhbnRpYXRlKHRoaXMuYm9tYlByZWZhYik7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmJvbWJQb29sLnB1dChib21iKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUgKGR0KSB7XHJcbiAgICAgICAgaWYoIXRoaXMud2luKSB7XHJcbiAgICAgICAgICAgIGlmKCF0aGlzLmlzRGllKSB7XHJcbiAgICAgICAgICAgICAgICBjYy5maW5kKFwiUGxheWVyIEhlYWx0aC9iYXJcIiwgdGhpcy5ub2RlKS53aWR0aCA9ICh0aGlzLkhQIC8gdGhpcy5tYXhIUCkgKiAxMDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllck1vdmUoZHQpO1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5qdW1wKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJKdW1wKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLnNob290KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVCdWxsZXQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuYm9tYikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlQm9tYigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJBbmltYXRpb24oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkJlZ2luQ29udGFjdChjb250YWN0LCBzZWxmLCBvdGhlcikge1xyXG4gICAgICAgIGlmKGNvbnRhY3QuZ2V0V29ybGRNYW5pZm9sZCgpLm5vcm1hbC55IDwgMCkgeyAvLyBzdGVwIG9uIHNvbWV0aGluZ1xyXG4gICAgICAgICAgICB0aGlzLmlzT25Hcm91bmQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBpZihvdGhlci50YWcgPT0gMSl7ICAgICAvLyBvbiBncm91bmQgb3IgcHJvcHNcclxuICAgICAgICAvLyAgICAgdGhpcy5pc09uR3JvdW5kID0gdHJ1ZTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgaWYob3RoZXIubm9kZS5ncm91cCA9PSBcImJ1bGxldFwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuSFAgLT0gMTA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHBsYXllck1vdmUoZHQpIHtcclxuICAgICAgICB0aGlzLm5vZGUueCArPSB0aGlzLm1vdmVTcGVlZCAqIHRoaXMubW92ZURpcmVjdGlvbiAqIGR0OyAgICAvLyBwbGF5ZXIgd2Fsa2luZ1xyXG4gICAgICAgIHRoaXMuaXNNb3ZlID0gKHRoaXMubW92ZURpcmVjdGlvbiAhPSAwKSA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICBpZih0aGlzLm1vdmVEaXJlY3Rpb24gPT0gMSB8fCB0aGlzLmNoYW5nZURpcmVjdGlvbiA9PSAxKSB7ICAgLy8gY2hhbmdlIGRpcmVjdGlvbiB1c2luZyBzY2FsaW5nXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5zY2FsZVggPSAxO1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllck5hbWUuc2NhbGVYID0gMTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5tb3ZlRGlyZWN0aW9uID09IC0xIHx8IHRoaXMuY2hhbmdlRGlyZWN0aW9uID09IC0xKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5zY2FsZVggPSAtMTtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJOYW1lLnNjYWxlWCA9IC0xO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwbGF5ZXJKdW1wKCkge1xyXG4gICAgICAgIGlmKHRoaXMuaXNPbkdyb3VuZCkgeyAgLy8gcGxheWVyIGlzIG9uIGdyb3VuZFxyXG4gICAgICAgICAgICB0aGlzLnJpZ2lkQm9keS5saW5lYXJWZWxvY2l0eSA9IGNjLnYyKDAsIHRoaXMuanVtcFZlbG9jaXR5KTsgICAgLy8gYWRkIGp1bXBpbmcgdmVsb2NpdHlcclxuICAgICAgICAgICAgdGhpcy5pc09uR3JvdW5kID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5qdW1wQXVkaW8sIGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjcmVhdGVCdWxsZXQoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuc2hvb3QgPSBmYWxzZTtcclxuICAgICAgICBsZXQgYnVsbGV0ID0gbnVsbDtcclxuICAgICAgICBpZiAodGhpcy5idWxsZXRQb29sLnNpemUoKSA+IDApIFxyXG4gICAgICAgICAgICBidWxsZXQgPSB0aGlzLmJ1bGxldFBvb2wuZ2V0KHRoaXMuYnVsbGV0UG9vbCk7XHJcblxyXG4gICAgICAgIGlmKGJ1bGxldCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGJ1bGxldC5nZXRDb21wb25lbnQoJ0J1bGxldCcpLmluaXQodGhpcy5ub2RlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjcmVhdGVCb21iKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLmJvbWIgPSBmYWxzZTtcclxuICAgICAgICBsZXQgYm9tYiA9IG51bGw7XHJcbiAgICAgICAgaWYgKHRoaXMuYm9tYlBvb2wuc2l6ZSgpID4gMCkgXHJcbiAgICAgICAgICAgIGJvbWIgPSB0aGlzLmJvbWJQb29sLmdldCh0aGlzLmJvbWJQb29sKTtcclxuXHJcbiAgICAgICAgaWYoYm9tYiAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGJvbWIuZ2V0Q29tcG9uZW50KCdCb21iJykuc2V0QW5nbGUodGhpcy5hbmdsZSk7XHJcbiAgICAgICAgICAgIGJvbWIuZ2V0Q29tcG9uZW50KCdCb21iJykuaW5pdCh0aGlzLm5vZGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwbGF5ZXJEaWUoKSB7XHJcbiAgICAgICAgdGhpcy5pc0RpZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5QaHlzaWNzQm94Q29sbGlkZXIpLmVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuZGllQXVkaW8sIGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICBwbGF5ZXJBbmltYXRpb24oKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHNldFBsYXllck1vdmVEaXJlY3Rpb24oZGlyOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLm1vdmVEaXJlY3Rpb24gPSBkaXI7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0UGxheWVyQ2hhbmdlRGlyZWN0aW9uKGRpcjogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VEaXJlY3Rpb24gPSBkaXI7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0UGxheWVySnVtcCh2YWw6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLmp1bXAgPSB2YWw7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0UGxheWVyU2hvb3QoKSB7XHJcbiAgICAgICAgdGhpcy5zaG9vdCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0UGxheWVyQm9tYihhbmdsZSkge1xyXG4gICAgICAgIHRoaXMuYW5nbGUgPSBhbmdsZTtcclxuICAgICAgICB0aGlzLmJvbWIgPSB0cnVlO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==