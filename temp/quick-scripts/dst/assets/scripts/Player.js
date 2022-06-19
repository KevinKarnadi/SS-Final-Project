
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
        _this.playerChar = null;
        _this.aimLabel = null;
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
        _this.win = false;
        _this.shoot = false;
        _this.bombPool = null;
        _this.bomb = false;
        _this.angle = null;
        _this.power = null;
        _this.maxHP = 100;
        _this.HP = 100;
        _this.hurt = false;
        _this.weapon = "gun";
        _this.gunType = "normal";
        _this.currWeaponNum = "0";
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    Player.prototype.onLoad = function () {
        this.animation = this.node.getComponent(cc.Animation);
        this.rigidBody = this.node.getComponent(cc.RigidBody);
        this.playerName = this.node.getChildByName("Player Name");
        this.line = this.node.getChildByName("Trajectory Line");
        this.aimLabel = this.node.getChildByName("Aim Layout");
        ;
        this.setPlayerName();
        this.setPlayerChar();
        this.bombPool = new cc.NodePool('Bomb');
        var maxBombNum = 5;
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
                if (this.HP <= 0) {
                    this.playerDie();
                }
                else {
                    if (this.jump) {
                        this.playerJump();
                    }
                    if (this.shoot) {
                        this.createBullet(this.gunType);
                    }
                    else if (this.bomb) {
                        this.createBomb();
                    }
                    this.playerAnimation();
                }
            }
        }
    };
    Player.prototype.onBeginContact = function (contact, self, other) {
        var _this = this;
        if (contact.getWorldManifold().normal.y < 0) { // step on something
            this.isOnGround = true;
        }
        // if(other.tag == 1){     // on ground or props
        //     this.isOnGround = true;
        // }
        if (other.node.group == "bullet" || other.node.group == "explosiveObj" || other.node.group == "bomb") {
            if (!this.isDie) {
                this.HP -= 10;
                if (this.HP <= 0) {
                    this.HP = 0;
                }
                else {
                    this.hurt = true;
                    if (this.playerChar == "char1" && this.HP != 0) {
                        this.animationState = this.animation.play('char1hurt');
                    }
                    else if (this.playerChar == "char2" && this.HP != 0) {
                        this.animationState = this.animation.play('char2hurt');
                    }
                    else if (this.playerChar == "char3" && this.HP != 0) {
                        this.animationState = this.animation.play('char3hurt');
                    }
                    else if (this.playerChar == "char4" && this.HP != 0) {
                        this.animationState = this.animation.play('char4hurt');
                    }
                    this.scheduleOnce(function () {
                        _this.hurt = false;
                    }, 0.5);
                }
            }
        }
        else if (other.node.group == "wall") {
            if (other.node.name == "Die Boundary") {
                this.playerDie();
            }
        }
        if (other.node.group == "weaponObj") {
            this.currWeaponNum = other.node.getComponent("weaponObj").getWeaponType();
            switch (this.currWeaponNum) {
                case "0":
                    this.weapon = "gun";
                    this.gunType = "normal";
                    break;
                case "1":
                    this.weapon = "gun";
                    this.gunType = "burst";
                    break;
                case "2":
                    this.weapon = "bomb";
                    break;
                case "3":
                    this.weapon = "gun";
                    this.gunType = "shotgun";
                    break;
                case "4":
                    this.weapon = "gun";
                    this.gunType = "sniper";
                    break;
                default:
                    break;
            }
        }
    };
    Player.prototype.playerMove = function (dt) {
        this.node.x += this.moveSpeed * this.moveDirection * dt; // player walking
        this.isMove = (this.moveDirection != 0) ? true : false;
        if (this.moveDirection == 1 || this.changeDirection == 1) { // change direction using scaling
            this.node.scaleX = 1;
            this.playerName.scaleX = 1;
            cc.find("Player Health", this.node).scaleX = 1;
            if (this.aimLabel.active) {
                this.aimLabel.scaleX = 1;
            }
        }
        else if (this.moveDirection == -1 || this.changeDirection == -1) {
            this.node.scaleX = -1;
            this.playerName.scaleX = -1;
            cc.find("Player Health", this.node).scaleX = -1;
            if (this.aimLabel.active) {
                this.aimLabel.scaleX = -1;
            }
        }
    };
    Player.prototype.playerJump = function () {
        if (this.isOnGround) { // player is on ground
            this.rigidBody.linearVelocity = cc.v2(0, this.jumpVelocity); // add jump velocity
            this.isOnGround = false;
            cc.audioEngine.playEffect(this.jumpAudio, false);
            this.animationState = this.animation.play('char1jump');
        }
    };
    Player.prototype.createBullet = function (mode) {
        this.shoot = false;
        if (mode == "normal") {
            var bullet = cc.instantiate(this.bulletPrefab);
            if (bullet != null) {
                bullet.getComponent('Bullet').setAngle(this.angle);
                bullet.getComponent('Bullet').init(this.node, 1000);
            }
        }
        else if (mode == "burst") {
            this.schedule(function () {
                console.log("boom");
                var bullet = cc.instantiate(this.bulletPrefab);
                if (bullet != null) {
                    bullet.getComponent('Bullet').setAngle(this.angle);
                    bullet.getComponent('Bullet').init(this.node, 1000);
                }
            }, 0.05, 2);
        }
        else if (mode == "shotgun") {
            var d_angle = -0.1;
            for (var i = 0; i < 3; i++) {
                var bullet = cc.instantiate(this.bulletPrefab);
                if (bullet != null) {
                    bullet.getComponent('Bullet').setAngle(this.angle + d_angle);
                    bullet.getComponent('Bullet').init(this.node, 1000);
                    d_angle += 0.05;
                }
            }
        }
        else if (mode == "sniper") {
            var bullet = cc.instantiate(this.bulletPrefab);
            if (bullet != null) {
                bullet.getComponent('Bullet').setAngle(this.angle);
                bullet.getComponent('Bullet').init(this.node, 2000);
            }
        }
    };
    Player.prototype.createBomb = function () {
        this.bomb = false;
        var bomb = null;
        if (this.bombPool.size() > 0)
            bomb = this.bombPool.get(this.bombPool);
        if (bomb != null) {
            bomb.getComponent('Bomb').setAnglePower(this.angle, this.power);
            bomb.getComponent('Bomb').init(this.node);
        }
    };
    Player.prototype.playerDie = function () {
        this.isDie = true;
        if (this.playerChar == "char1") {
            this.animation.stop('char1idle');
            this.animationState = this.animation.play('char1dead');
        }
        else if (this.playerChar == "char2") {
            this.animation.stop('char2idle');
            this.animationState = this.animation.play('char2dead');
        }
        else if (this.playerChar == "char3") {
            this.animation.stop('char3idle');
            this.animationState = this.animation.play('char3dead');
        }
        else if (this.playerChar == "char4") {
            this.animation.stop('char4idle');
            this.animationState = this.animation.play('char4dead');
        }
        this.scheduleOnce(function () {
            this.node.destroy();
            // this.node.getComponent(cc.PhysicsBoxCollider).enabled = false;
        }, 1);
        cc.audioEngine.playEffect(this.dieAudio, false);
    };
    Player.prototype.playerAnimation = function () {
        if (!this.isDie) { // animation for char1
            if (this.playerChar == "char1") { // MUST change to curPlayer == "Player 1"
                if (this.isOnGround && !this.isMove && !this.hurt && (!this.animationState || this.animationState.name != "char1idle")) {
                    this.animationState = this.animation.play("char1idle");
                }
                else if (this.isOnGround && this.isMove && (!this.animationState || this.animationState.name != "char1run")) {
                    this.animationState = this.animation.play("char1run");
                }
                else if (!this.isOnGround && (!this.animationState || this.animationState.name != "char1jump")) {
                    this.animationState = this.animation.play("char1jump");
                }
                // if (this.isOnGround && this.animation.getAnimationState('char1jump').isPlaying){
                //     this.animation.stop('char1jump');
                //     this.animationState = this.animation.play('char1idle');
                // }
                // if (this.isMove && !this.animation.getAnimationState('char1run').isPlaying && !this.animation.getAnimationState('char1jump').isPlaying){
                //     this.animationState = this.animation.play('char1run');
                // }
                // if (this.animationState == null || (!this.isMove && this.isOnGround && !this.animation.getAnimationState('char1idle').isPlaying)){
                //     this.animationState = this.animation.play('char1idle');
                // }          
            }
            else if (this.playerChar == "char2") {
                if (this.isOnGround && !this.isMove && !this.hurt && (!this.animationState || this.animationState.name != "char2idle")) {
                    this.animationState = this.animation.play("char2idle");
                }
                else if (this.isOnGround && this.isMove && (!this.animationState || this.animationState.name != "char2run")) {
                    this.animationState = this.animation.play("char2run");
                }
                else if (!this.isOnGround && (!this.animationState || this.animationState.name != "char2jump")) {
                    this.animationState = this.animation.play("char2jump");
                }
            }
            else if (this.playerChar == "char3") {
                if (this.isOnGround && !this.isMove && !this.hurt && (!this.animationState || this.animationState.name != "char3idle")) {
                    this.animationState = this.animation.play("char3idle");
                }
                else if (this.isOnGround && this.isMove && (!this.animationState || this.animationState.name != "char3run")) {
                    this.animationState = this.animation.play("char3run");
                }
                else if (!this.isOnGround && (!this.animationState || this.animationState.name != "char3jump")) {
                    this.animationState = this.animation.play("char3jump");
                }
            }
            else if (this.playerChar == "char4") {
                if (this.isOnGround && !this.isMove && !this.hurt && (!this.animationState || this.animationState.name != "char4idle")) {
                    this.animationState = this.animation.play("char4idle");
                }
                else if (this.isOnGround && this.isMove && (!this.animationState || this.animationState.name != "char4run")) {
                    this.animationState = this.animation.play("char4run");
                }
                else if (!this.isOnGround && (!this.animationState || this.animationState.name != "char4jump")) {
                    this.animationState = this.animation.play("char4jump");
                }
            }
        }
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
    Player.prototype.setPlayerShoot = function (angle) {
        this.angle = angle;
        this.shoot = true;
    };
    Player.prototype.setPlayerBomb = function (angle) {
        this.angle = angle;
        this.bomb = true;
    };
    Player.prototype.setPlayerName = function () {
        if (this.node.name == "Player 1") {
            this.playerName.getComponent(cc.Label).string = cc.sys.localStorage.getItem("Player 1 Name");
        }
        else if (this.node.name == "Player 2") {
            this.playerName.getComponent(cc.Label).string = cc.sys.localStorage.getItem("Player 2 Name");
        }
        else if (this.node.name == "Player 3") {
            this.playerName.getComponent(cc.Label).string = cc.sys.localStorage.getItem("Player 3 Name");
        }
        else if (this.node.name == "Player 4") {
            this.playerName.getComponent(cc.Label).string = cc.sys.localStorage.getItem("Player 4 Name");
        }
    };
    Player.prototype.setPlayerChar = function () {
        if (this.node.name == "Player 1") {
            this.playerChar = cc.sys.localStorage.getItem("Player 1 Char");
            this.playerChar = "char1";
        }
        else if (this.node.name == "Player 2") {
            this.playerChar = cc.sys.localStorage.getItem("Player 2 Char");
            this.playerChar = "char2";
            //console.log("aaa")
        }
        else if (this.node.name == "Player 3") {
            this.playerChar = cc.sys.localStorage.getItem("Player 3 Char");
            this.playerChar = "char3";
        }
        else if (this.node.name == "Player 4") {
            this.playerChar = cc.sys.localStorage.getItem("Player 4 Char");
            this.playerChar = "char4";
        }
    };
    Player.prototype.getCurrWeaponNum = function () {
        return this.currWeaponNum;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcUGxheWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQW9DLDBCQUFZO0lBQWhEO1FBQUEscUVBa1lDO1FBL1hHLGVBQVMsR0FBaUIsSUFBSSxDQUFDO1FBRy9CLGNBQVEsR0FBaUIsSUFBSSxDQUFDO1FBR3RCLGtCQUFZLEdBQWMsSUFBSSxDQUFDO1FBRy9CLGdCQUFVLEdBQWMsSUFBSSxDQUFDO1FBRTlCLFVBQUksR0FBRyxJQUFJLENBQUM7UUFFWixnQkFBVSxHQUFHLElBQUksQ0FBQztRQUVqQixnQkFBVSxHQUFXLElBQUksQ0FBQztRQUUxQixjQUFRLEdBQUcsSUFBSSxDQUFDO1FBRWhCLGVBQVMsR0FBVyxHQUFHLENBQUM7UUFFeEIsbUJBQWEsR0FBVyxDQUFDLENBQUM7UUFFMUIscUJBQWUsR0FBVyxDQUFDLENBQUM7UUFFNUIsa0JBQVksR0FBVyxJQUFJLENBQUM7UUFFNUIsVUFBSSxHQUFZLEtBQUssQ0FBQztRQUV0QixnQkFBVSxHQUFZLEtBQUssQ0FBQztRQUU3QixXQUFLLEdBQVksS0FBSyxDQUFDO1FBRXRCLFlBQU0sR0FBWSxLQUFLLENBQUM7UUFFeEIsZUFBUyxHQUFpQixJQUFJLENBQUM7UUFFL0Isb0JBQWMsR0FBRyxJQUFJLENBQUM7UUFFdEIsZUFBUyxHQUFpQixJQUFJLENBQUM7UUFFL0IsU0FBRyxHQUFZLEtBQUssQ0FBQztRQUVyQixXQUFLLEdBQVksS0FBSyxDQUFDO1FBRXZCLGNBQVEsR0FBRyxJQUFJLENBQUM7UUFFaEIsVUFBSSxHQUFZLEtBQUssQ0FBQztRQUV0QixXQUFLLEdBQUcsSUFBSSxDQUFDO1FBRWIsV0FBSyxHQUFXLElBQUksQ0FBQztRQUVyQixXQUFLLEdBQVcsR0FBRyxD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SSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDL0QsSUFBSSxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUM7U0FDN0I7SUFDTCxDQUFDO0lBRUQsaUNBQWdCLEdBQWhCO1FBQ0ksT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzlCLENBQUM7SUE5WEQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzs2Q0FDUTtJQUcvQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOzRDQUNPO0lBRzlCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7Z0RBQ21CO0lBR3ZDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7OENBQ2lCO0lBWnBCLE1BQU07UUFEMUIsT0FBTztPQUNhLE1BQU0sQ0FrWTFCO0lBQUQsYUFBQztDQWxZRCxBQWtZQyxDQWxZbUMsRUFBRSxDQUFDLFNBQVMsR0FrWS9DO2tCQWxZb0IsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAganVtcEF1ZGlvOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBkaWVBdWRpbzogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgcHJpdmF0ZSBidWxsZXRQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHByaXZhdGUgYm9tYlByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcclxuXHJcbiAgICBwdWJsaWMgbGluZSA9IG51bGw7XHJcblxyXG4gICAgcHVibGljIHBsYXllck5hbWUgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgcGxheWVyQ2hhcjogc3RyaW5nID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGFpbUxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIG1vdmVTcGVlZDogbnVtYmVyID0gMzAwO1xyXG5cclxuICAgIHByaXZhdGUgbW92ZURpcmVjdGlvbjogbnVtYmVyID0gMDtcclxuXHJcbiAgICBwcml2YXRlIGNoYW5nZURpcmVjdGlvbjogbnVtYmVyID0gMDtcclxuXHJcbiAgICBwcml2YXRlIGp1bXBWZWxvY2l0eTogbnVtYmVyID0gMjUwMDtcclxuXHJcbiAgICBwcml2YXRlIGp1bXA6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBwcml2YXRlIGlzT25Hcm91bmQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBwdWJsaWMgaXNEaWU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBwcml2YXRlIGlzTW92ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHByaXZhdGUgYW5pbWF0aW9uOiBjYy5BbmltYXRpb24gPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgYW5pbWF0aW9uU3RhdGUgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgcmlnaWRCb2R5OiBjYy5SaWdpZEJvZHkgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgd2luOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgcHJpdmF0ZSBzaG9vdDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHByaXZhdGUgYm9tYlBvb2wgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgYm9tYjogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHByaXZhdGUgYW5nbGUgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgcG93ZXI6IG51bWJlciA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBtYXhIUDogbnVtYmVyID0gMTAwO1xyXG5cclxuICAgIHByaXZhdGUgSFA6IG51bWJlciA9IDEwMDtcclxuXHJcbiAgICBwcml2YXRlIGh1cnQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBwdWJsaWMgd2VhcG9uOiBzdHJpbmcgPSBcImd1blwiO1xyXG5cclxuICAgIHB1YmxpYyBndW5UeXBlOiBzdHJpbmcgPSBcIm5vcm1hbFwiO1xyXG5cclxuICAgIHByaXZhdGUgY3VycldlYXBvbk51bTogc3RyaW5nID0gXCIwXCI7XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbiA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcclxuICAgICAgICB0aGlzLnJpZ2lkQm9keSA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcclxuICAgICAgICB0aGlzLnBsYXllck5hbWUgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJQbGF5ZXIgTmFtZVwiKTtcclxuICAgICAgICB0aGlzLmxpbmUgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJUcmFqZWN0b3J5IExpbmVcIik7XHJcbiAgICAgICAgdGhpcy5haW1MYWJlbCA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkFpbSBMYXlvdXRcIik7O1xyXG4gICAgICAgIHRoaXMuc2V0UGxheWVyTmFtZSgpO1xyXG4gICAgICAgIHRoaXMuc2V0UGxheWVyQ2hhcigpO1xyXG4gICAgICAgIHRoaXMuYm9tYlBvb2wgPSBuZXcgY2MuTm9kZVBvb2woJ0JvbWInKTtcclxuICAgICAgICBsZXQgbWF4Qm9tYk51bSA9IDU7XHJcbiAgICAgICAgZm9yKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgbWF4Qm9tYk51bTsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBib21iID0gY2MuaW5zdGFudGlhdGUodGhpcy5ib21iUHJlZmFiKTtcclxuICAgICAgICAgICAgdGhpcy5ib21iUG9vbC5wdXQoYm9tYik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlIChkdCkge1xyXG4gICAgICAgIGlmKCF0aGlzLndpbikge1xyXG4gICAgICAgICAgICBpZighdGhpcy5pc0RpZSkge1xyXG4gICAgICAgICAgICAgICAgY2MuZmluZChcIlBsYXllciBIZWFsdGgvYmFyXCIsIHRoaXMubm9kZSkud2lkdGggPSAodGhpcy5IUCAvIHRoaXMubWF4SFApICogMTAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJNb3ZlKGR0KTtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuSFAgPD0gMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJEaWUoKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5qdW1wKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVySnVtcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLnNob290KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlQnVsbGV0KHRoaXMuZ3VuVHlwZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmKHRoaXMuYm9tYikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUJvbWIoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJBbmltYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkJlZ2luQ29udGFjdChjb250YWN0LCBzZWxmLCBvdGhlcikge1xyXG4gICAgICAgIGlmKGNvbnRhY3QuZ2V0V29ybGRNYW5pZm9sZCgpLm5vcm1hbC55IDwgMCkgeyAvLyBzdGVwIG9uIHNvbWV0aGluZ1xyXG4gICAgICAgICAgICB0aGlzLmlzT25Hcm91bmQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBpZihvdGhlci50YWcgPT0gMSl7ICAgICAvLyBvbiBncm91bmQgb3IgcHJvcHNcclxuICAgICAgICAvLyAgICAgdGhpcy5pc09uR3JvdW5kID0gdHJ1ZTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgaWYob3RoZXIubm9kZS5ncm91cCA9PSBcImJ1bGxldFwiIHx8IG90aGVyLm5vZGUuZ3JvdXAgPT0gXCJleHBsb3NpdmVPYmpcIiB8fCBvdGhlci5ub2RlLmdyb3VwID09IFwiYm9tYlwiKSB7XHJcbiAgICAgICAgICAgIGlmKCF0aGlzLmlzRGllKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkhQIC09IDEwO1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5IUCA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5IUCA9IDA7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaHVydCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGxheWVyQ2hhciA9PSBcImNoYXIxXCIgJiYgdGhpcy5IUCAhPSAwKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbmltYXRpb25TdGF0ZSA9IHRoaXMuYW5pbWF0aW9uLnBsYXkoJ2NoYXIxaHVydCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzLnBsYXllckNoYXIgPT0gXCJjaGFyMlwiICYmIHRoaXMuSFAgIT0gMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uU3RhdGUgPSB0aGlzLmFuaW1hdGlvbi5wbGF5KCdjaGFyMmh1cnQnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5wbGF5ZXJDaGFyID09IFwiY2hhcjNcIiAmJiB0aGlzLkhQICE9IDApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFuaW1hdGlvblN0YXRlID0gdGhpcy5hbmltYXRpb24ucGxheSgnY2hhcjNodXJ0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMucGxheWVyQ2hhciA9PSBcImNoYXI0XCIgJiYgdGhpcy5IUCAhPSAwKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbmltYXRpb25TdGF0ZSA9IHRoaXMuYW5pbWF0aW9uLnBsYXkoJ2NoYXI0aHVydCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmh1cnQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9LCAwLjUpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYob3RoZXIubm9kZS5ncm91cCA9PSBcIndhbGxcIikge1xyXG4gICAgICAgICAgICBpZihvdGhlci5ub2RlLm5hbWUgPT0gXCJEaWUgQm91bmRhcnlcIikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJEaWUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYob3RoZXIubm9kZS5ncm91cCA9PSBcIndlYXBvbk9ialwiKXtcclxuICAgICAgICAgICAgdGhpcy5jdXJyV2VhcG9uTnVtID0gb3RoZXIubm9kZS5nZXRDb21wb25lbnQoXCJ3ZWFwb25PYmpcIikuZ2V0V2VhcG9uVHlwZSgpO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMuY3VycldlYXBvbk51bSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIjBcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLndlYXBvbiA9IFwiZ3VuXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ndW5UeXBlID0gXCJub3JtYWxcIjtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCIxXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53ZWFwb24gPSBcImd1blwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ3VuVHlwZSA9IFwiYnVyc3RcIjtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCIyXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53ZWFwb24gPSBcImJvbWJcIjtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCIzXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53ZWFwb24gPSBcImd1blwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ3VuVHlwZSA9IFwic2hvdGd1blwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIjRcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLndlYXBvbiA9IFwiZ3VuXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ndW5UeXBlID0gXCJzbmlwZXJcIjtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcGxheWVyTW92ZShkdCkge1xyXG4gICAgICAgIHRoaXMubm9kZS54ICs9IHRoaXMubW92ZVNwZWVkICogdGhpcy5tb3ZlRGlyZWN0aW9uICogZHQ7ICAgIC8vIHBsYXllciB3YWxraW5nXHJcbiAgICAgICAgdGhpcy5pc01vdmUgPSAodGhpcy5tb3ZlRGlyZWN0aW9uICE9IDApID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgIGlmKHRoaXMubW92ZURpcmVjdGlvbiA9PSAxIHx8IHRoaXMuY2hhbmdlRGlyZWN0aW9uID09IDEpIHsgICAvLyBjaGFuZ2UgZGlyZWN0aW9uIHVzaW5nIHNjYWxpbmdcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9IDE7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyTmFtZS5zY2FsZVggPSAxO1xyXG4gICAgICAgICAgICBjYy5maW5kKFwiUGxheWVyIEhlYWx0aFwiLCB0aGlzLm5vZGUpLnNjYWxlWCA9IDE7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuYWltTGFiZWwuYWN0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFpbUxhYmVsLnNjYWxlWCA9IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5tb3ZlRGlyZWN0aW9uID09IC0xIHx8IHRoaXMuY2hhbmdlRGlyZWN0aW9uID09IC0xKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5zY2FsZVggPSAtMTtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJOYW1lLnNjYWxlWCA9IC0xO1xyXG4gICAgICAgICAgICBjYy5maW5kKFwiUGxheWVyIEhlYWx0aFwiLCB0aGlzLm5vZGUpLnNjYWxlWCA9IC0xO1xyXG4gICAgICAgICAgICBpZih0aGlzLmFpbUxhYmVsLmFjdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5haW1MYWJlbC5zY2FsZVggPSAtMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwbGF5ZXJKdW1wKCkge1xyXG4gICAgICAgIGlmKHRoaXMuaXNPbkdyb3VuZCkgeyAgLy8gcGxheWVyIGlzIG9uIGdyb3VuZFxyXG4gICAgICAgICAgICB0aGlzLnJpZ2lkQm9keS5saW5lYXJWZWxvY2l0eSA9IGNjLnYyKDAsIHRoaXMuanVtcFZlbG9jaXR5KTsgICAgLy8gYWRkIGp1bXAgdmVsb2NpdHlcclxuICAgICAgICAgICAgdGhpcy5pc09uR3JvdW5kID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5qdW1wQXVkaW8sIGZhbHNlKTtcclxuICAgICAgICAgICAgdGhpcy5hbmltYXRpb25TdGF0ZSA9IHRoaXMuYW5pbWF0aW9uLnBsYXkoJ2NoYXIxanVtcCcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNyZWF0ZUJ1bGxldChtb2RlOiBzdHJpbmcpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5zaG9vdCA9IGZhbHNlO1xyXG4gICAgICAgIGlmKG1vZGUgPT0gXCJub3JtYWxcIikge1xyXG4gICAgICAgICAgICBsZXQgYnVsbGV0ID0gY2MuaW5zdGFudGlhdGUodGhpcy5idWxsZXRQcmVmYWIpO1xyXG4gICAgICAgICAgICBpZihidWxsZXQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgYnVsbGV0LmdldENvbXBvbmVudCgnQnVsbGV0Jykuc2V0QW5nbGUodGhpcy5hbmdsZSk7XHJcbiAgICAgICAgICAgICAgICBidWxsZXQuZ2V0Q29tcG9uZW50KCdCdWxsZXQnKS5pbml0KHRoaXMubm9kZSwgMTAwMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZihtb2RlID09IFwiYnVyc3RcIikge1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJib29tXCIpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGJ1bGxldCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuYnVsbGV0UHJlZmFiKTtcclxuICAgICAgICAgICAgICAgIGlmKGJ1bGxldCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnVsbGV0LmdldENvbXBvbmVudCgnQnVsbGV0Jykuc2V0QW5nbGUodGhpcy5hbmdsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnVsbGV0LmdldENvbXBvbmVudCgnQnVsbGV0JykuaW5pdCh0aGlzLm5vZGUsIDEwMDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCAwLjA1LCAyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZihtb2RlID09IFwic2hvdGd1blwiKSB7XHJcbiAgICAgICAgICAgIGxldCBkX2FuZ2xlID0gLTAuMTtcclxuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGJ1bGxldCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuYnVsbGV0UHJlZmFiKTtcclxuICAgICAgICAgICAgICAgIGlmKGJ1bGxldCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnVsbGV0LmdldENvbXBvbmVudCgnQnVsbGV0Jykuc2V0QW5nbGUodGhpcy5hbmdsZSArIGRfYW5nbGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJ1bGxldC5nZXRDb21wb25lbnQoJ0J1bGxldCcpLmluaXQodGhpcy5ub2RlLCAxMDAwKTtcclxuICAgICAgICAgICAgICAgICAgICBkX2FuZ2xlICs9IDAuMDU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZihtb2RlID09IFwic25pcGVyXCIpIHtcclxuICAgICAgICAgICAgbGV0IGJ1bGxldCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuYnVsbGV0UHJlZmFiKTtcclxuICAgICAgICAgICAgaWYoYnVsbGV0ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGJ1bGxldC5nZXRDb21wb25lbnQoJ0J1bGxldCcpLnNldEFuZ2xlKHRoaXMuYW5nbGUpO1xyXG4gICAgICAgICAgICAgICAgYnVsbGV0LmdldENvbXBvbmVudCgnQnVsbGV0JykuaW5pdCh0aGlzLm5vZGUsIDIwMDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY3JlYXRlQm9tYigpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5ib21iID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IGJvbWIgPSBudWxsO1xyXG4gICAgICAgIGlmICh0aGlzLmJvbWJQb29sLnNpemUoKSA+IDApIFxyXG4gICAgICAgICAgICBib21iID0gdGhpcy5ib21iUG9vbC5nZXQodGhpcy5ib21iUG9vbCk7XHJcblxyXG4gICAgICAgIGlmKGJvbWIgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBib21iLmdldENvbXBvbmVudCgnQm9tYicpLnNldEFuZ2xlUG93ZXIodGhpcy5hbmdsZSwgdGhpcy5wb3dlcik7XHJcbiAgICAgICAgICAgIGJvbWIuZ2V0Q29tcG9uZW50KCdCb21iJykuaW5pdCh0aGlzLm5vZGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwbGF5ZXJEaWUoKSB7XHJcbiAgICAgICAgdGhpcy5pc0RpZSA9IHRydWU7XHJcbiAgICAgICAgaWYgKHRoaXMucGxheWVyQ2hhciA9PSBcImNoYXIxXCIpe1xyXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGlvbi5zdG9wKCdjaGFyMWlkbGUnKTtcclxuICAgICAgICAgICAgdGhpcy5hbmltYXRpb25TdGF0ZSA9IHRoaXMuYW5pbWF0aW9uLnBsYXkoJ2NoYXIxZGVhZCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLnBsYXllckNoYXIgPT0gXCJjaGFyMlwiKXtcclxuICAgICAgICAgICAgdGhpcy5hbmltYXRpb24uc3RvcCgnY2hhcjJpZGxlJyk7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uU3RhdGUgPSB0aGlzLmFuaW1hdGlvbi5wbGF5KCdjaGFyMmRlYWQnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5wbGF5ZXJDaGFyID09IFwiY2hhcjNcIil7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uLnN0b3AoJ2NoYXIzaWRsZScpO1xyXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGlvblN0YXRlID0gdGhpcy5hbmltYXRpb24ucGxheSgnY2hhcjNkZWFkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMucGxheWVyQ2hhciA9PSBcImNoYXI0XCIpe1xyXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGlvbi5zdG9wKCdjaGFyNGlkbGUnKTtcclxuICAgICAgICAgICAgdGhpcy5hbmltYXRpb25TdGF0ZSA9IHRoaXMuYW5pbWF0aW9uLnBsYXkoJ2NoYXI0ZGVhZCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAvLyB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlBoeXNpY3NCb3hDb2xsaWRlcikuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIH0sIDEpO1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5kaWVBdWRpbywgZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHBsYXllckFuaW1hdGlvbigpIHtcclxuICAgICAgICBpZighdGhpcy5pc0RpZSl7ICAgIC8vIGFuaW1hdGlvbiBmb3IgY2hhcjFcclxuICAgICAgICAgICAgaWYodGhpcy5wbGF5ZXJDaGFyID09IFwiY2hhcjFcIikgeyAgLy8gTVVTVCBjaGFuZ2UgdG8gY3VyUGxheWVyID09IFwiUGxheWVyIDFcIlxyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5pc09uR3JvdW5kICYmICF0aGlzLmlzTW92ZSAmJiAhdGhpcy5odXJ0ICYmICghdGhpcy5hbmltYXRpb25TdGF0ZSB8fCB0aGlzLmFuaW1hdGlvblN0YXRlLm5hbWUgIT0gXCJjaGFyMWlkbGVcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFuaW1hdGlvblN0YXRlID0gdGhpcy5hbmltYXRpb24ucGxheShcImNoYXIxaWRsZVwiKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZih0aGlzLmlzT25Hcm91bmQgJiYgdGhpcy5pc01vdmUgJiYgKCF0aGlzLmFuaW1hdGlvblN0YXRlIHx8IHRoaXMuYW5pbWF0aW9uU3RhdGUubmFtZSAhPSBcImNoYXIxcnVuXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbmltYXRpb25TdGF0ZSA9IHRoaXMuYW5pbWF0aW9uLnBsYXkoXCJjaGFyMXJ1blwiKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZighdGhpcy5pc09uR3JvdW5kICYmICghdGhpcy5hbmltYXRpb25TdGF0ZSB8fCB0aGlzLmFuaW1hdGlvblN0YXRlLm5hbWUgIT0gXCJjaGFyMWp1bXBcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFuaW1hdGlvblN0YXRlID0gdGhpcy5hbmltYXRpb24ucGxheShcImNoYXIxanVtcFwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIGlmICh0aGlzLmlzT25Hcm91bmQgJiYgdGhpcy5hbmltYXRpb24uZ2V0QW5pbWF0aW9uU3RhdGUoJ2NoYXIxanVtcCcpLmlzUGxheWluZyl7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5hbmltYXRpb24uc3RvcCgnY2hhcjFqdW1wJyk7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5hbmltYXRpb25TdGF0ZSA9IHRoaXMuYW5pbWF0aW9uLnBsYXkoJ2NoYXIxaWRsZScpO1xyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgLy8gaWYgKHRoaXMuaXNNb3ZlICYmICF0aGlzLmFuaW1hdGlvbi5nZXRBbmltYXRpb25TdGF0ZSgnY2hhcjFydW4nKS5pc1BsYXlpbmcgJiYgIXRoaXMuYW5pbWF0aW9uLmdldEFuaW1hdGlvblN0YXRlKCdjaGFyMWp1bXAnKS5pc1BsYXlpbmcpe1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIHRoaXMuYW5pbWF0aW9uU3RhdGUgPSB0aGlzLmFuaW1hdGlvbi5wbGF5KCdjaGFyMXJ1bicpO1xyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgLy8gaWYgKHRoaXMuYW5pbWF0aW9uU3RhdGUgPT0gbnVsbCB8fCAoIXRoaXMuaXNNb3ZlICYmIHRoaXMuaXNPbkdyb3VuZCAmJiAhdGhpcy5hbmltYXRpb24uZ2V0QW5pbWF0aW9uU3RhdGUoJ2NoYXIxaWRsZScpLmlzUGxheWluZykpe1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIHRoaXMuYW5pbWF0aW9uU3RhdGUgPSB0aGlzLmFuaW1hdGlvbi5wbGF5KCdjaGFyMWlkbGUnKTtcclxuICAgICAgICAgICAgICAgIC8vIH0gICAgICAgICAgXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZih0aGlzLnBsYXllckNoYXIgPT0gXCJjaGFyMlwiKSB7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLmlzT25Hcm91bmQgJiYgIXRoaXMuaXNNb3ZlICYmICF0aGlzLmh1cnQgJiYgKCF0aGlzLmFuaW1hdGlvblN0YXRlIHx8IHRoaXMuYW5pbWF0aW9uU3RhdGUubmFtZSAhPSBcImNoYXIyaWRsZVwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uU3RhdGUgPSB0aGlzLmFuaW1hdGlvbi5wbGF5KFwiY2hhcjJpZGxlXCIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKHRoaXMuaXNPbkdyb3VuZCAmJiB0aGlzLmlzTW92ZSAmJiAoIXRoaXMuYW5pbWF0aW9uU3RhdGUgfHwgdGhpcy5hbmltYXRpb25TdGF0ZS5uYW1lICE9IFwiY2hhcjJydW5cIikpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFuaW1hdGlvblN0YXRlID0gdGhpcy5hbmltYXRpb24ucGxheShcImNoYXIycnVuXCIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKCF0aGlzLmlzT25Hcm91bmQgJiYgKCF0aGlzLmFuaW1hdGlvblN0YXRlIHx8IHRoaXMuYW5pbWF0aW9uU3RhdGUubmFtZSAhPSBcImNoYXIyanVtcFwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uU3RhdGUgPSB0aGlzLmFuaW1hdGlvbi5wbGF5KFwiY2hhcjJqdW1wXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYodGhpcy5wbGF5ZXJDaGFyID09IFwiY2hhcjNcIikge1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5pc09uR3JvdW5kICYmICF0aGlzLmlzTW92ZSAmJiAhdGhpcy5odXJ0ICYmICghdGhpcy5hbmltYXRpb25TdGF0ZSB8fCB0aGlzLmFuaW1hdGlvblN0YXRlLm5hbWUgIT0gXCJjaGFyM2lkbGVcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFuaW1hdGlvblN0YXRlID0gdGhpcy5hbmltYXRpb24ucGxheShcImNoYXIzaWRsZVwiKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZih0aGlzLmlzT25Hcm91bmQgJiYgdGhpcy5pc01vdmUgJiYgKCF0aGlzLmFuaW1hdGlvblN0YXRlIHx8IHRoaXMuYW5pbWF0aW9uU3RhdGUubmFtZSAhPSBcImNoYXIzcnVuXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbmltYXRpb25TdGF0ZSA9IHRoaXMuYW5pbWF0aW9uLnBsYXkoXCJjaGFyM3J1blwiKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZighdGhpcy5pc09uR3JvdW5kICYmICghdGhpcy5hbmltYXRpb25TdGF0ZSB8fCB0aGlzLmFuaW1hdGlvblN0YXRlLm5hbWUgIT0gXCJjaGFyM2p1bXBcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFuaW1hdGlvblN0YXRlID0gdGhpcy5hbmltYXRpb24ucGxheShcImNoYXIzanVtcFwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSAgZWxzZSBpZih0aGlzLnBsYXllckNoYXIgPT0gXCJjaGFyNFwiKSB7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLmlzT25Hcm91bmQgJiYgIXRoaXMuaXNNb3ZlICYmICF0aGlzLmh1cnQgJiYgKCF0aGlzLmFuaW1hdGlvblN0YXRlIHx8IHRoaXMuYW5pbWF0aW9uU3RhdGUubmFtZSAhPSBcImNoYXI0aWRsZVwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uU3RhdGUgPSB0aGlzLmFuaW1hdGlvbi5wbGF5KFwiY2hhcjRpZGxlXCIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKHRoaXMuaXNPbkdyb3VuZCAmJiB0aGlzLmlzTW92ZSAmJiAoIXRoaXMuYW5pbWF0aW9uU3RhdGUgfHwgdGhpcy5hbmltYXRpb25TdGF0ZS5uYW1lICE9IFwiY2hhcjRydW5cIikpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFuaW1hdGlvblN0YXRlID0gdGhpcy5hbmltYXRpb24ucGxheShcImNoYXI0cnVuXCIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKCF0aGlzLmlzT25Hcm91bmQgJiYgKCF0aGlzLmFuaW1hdGlvblN0YXRlIHx8IHRoaXMuYW5pbWF0aW9uU3RhdGUubmFtZSAhPSBcImNoYXI0anVtcFwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uU3RhdGUgPSB0aGlzLmFuaW1hdGlvbi5wbGF5KFwiY2hhcjRqdW1wXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSAgIFxyXG4gICAgfVxyXG5cclxuICAgIHNldFBsYXllck1vdmVEaXJlY3Rpb24oZGlyOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLm1vdmVEaXJlY3Rpb24gPSBkaXI7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0UGxheWVyQ2hhbmdlRGlyZWN0aW9uKGRpcjogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VEaXJlY3Rpb24gPSBkaXI7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0UGxheWVySnVtcCh2YWw6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLmp1bXAgPSB2YWw7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0UGxheWVyU2hvb3QoYW5nbGUpIHtcclxuICAgICAgICB0aGlzLmFuZ2xlID0gYW5nbGU7XHJcbiAgICAgICAgdGhpcy5zaG9vdCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0UGxheWVyQm9tYihhbmdsZSkge1xyXG4gICAgICAgIHRoaXMuYW5nbGUgPSBhbmdsZTtcclxuICAgICAgICB0aGlzLmJvbWIgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFBsYXllck5hbWUoKSB7XHJcbiAgICAgICAgaWYodGhpcy5ub2RlLm5hbWUgPT0gXCJQbGF5ZXIgMVwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyTmFtZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlBsYXllciAxIE5hbWVcIik7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMubm9kZS5uYW1lID09IFwiUGxheWVyIDJcIikge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllck5hbWUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJQbGF5ZXIgMiBOYW1lXCIpO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLm5vZGUubmFtZSA9PSBcIlBsYXllciAzXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJOYW1lLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiUGxheWVyIDMgTmFtZVwiKTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5ub2RlLm5hbWUgPT0gXCJQbGF5ZXIgNFwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyTmFtZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlBsYXllciA0IE5hbWVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldFBsYXllckNoYXIoKSB7XHJcbiAgICAgICAgaWYodGhpcy5ub2RlLm5hbWUgPT0gXCJQbGF5ZXIgMVwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyQ2hhciA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlBsYXllciAxIENoYXJcIik7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyQ2hhciA9IFwiY2hhcjFcIjtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5ub2RlLm5hbWUgPT0gXCJQbGF5ZXIgMlwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyQ2hhciA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlBsYXllciAyIENoYXJcIik7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyQ2hhciA9IFwiY2hhcjJcIjtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcImFhYVwiKVxyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLm5vZGUubmFtZSA9PSBcIlBsYXllciAzXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJDaGFyID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiUGxheWVyIDMgQ2hhclwiKTtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJDaGFyID0gXCJjaGFyM1wiO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLm5vZGUubmFtZSA9PSBcIlBsYXllciA0XCIpIHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJDaGFyID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiUGxheWVyIDQgQ2hhclwiKTtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJDaGFyID0gXCJjaGFyNFwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRDdXJyV2VhcG9uTnVtKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycldlYXBvbk51bTtcclxuICAgIH1cclxufVxyXG4iXX0=