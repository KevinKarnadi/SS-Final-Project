
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
        _this.damageParc = null;
        _this.damageEffAnim = null;
        _this.line = null;
        _this.playerName = null;
        _this.playerNumber = null;
        _this.playerChar = null;
        _this.aimLabel = null;
        _this.totalPlayer = null;
        _this.moveSpeed = 300;
        _this.moveDirection = 0;
        _this.changeDirection = 0;
        _this.jumpVelocity = 2000;
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
        _this.aim = false;
        _this.skill = "none";
        _this.speedVec = 1;
        _this.hpVec = 0;
        _this.sfx_hit = null;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    Player.prototype.onLoad = function () {
        this.animation = this.node.getComponent(cc.Animation);
        this.rigidBody = this.node.getComponent(cc.RigidBody);
        this.playerName = this.node.getChildByName("Player Name");
        this.playerNumber = this.node.getChildByName("Player Number");
        this.line = this.node.getChildByName("Trajectory Line");
        this.aimLabel = this.node.getChildByName("Aim Bomb Layout");
        this.setPlayerName();
        // this.setPlayerNumber();
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
                cc.audioEngine.playEffect(this.sfx_hit, false);
                console.log(this.HP, "before");
                this.HP -= (other.node.group == "explosiveObj") ? this.changeHp(25) : this.changeHp(10);
                this.HP += (7 * this.hpVec);
                console.log(this.HP, "after");
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
                if (other.node.group == "bullet") {
                    var particleEff_1 = cc.instantiate(this.damageParc);
                    particleEff_1.parent = cc.director.getScene();
                    particleEff_1.setPosition(other.node.getPosition().addSelf(cc.v2(480, 320)));
                    this.scheduleOnce(function () {
                        particleEff_1.destroy();
                    }, 0.6);
                }
                if (other.node.group == "bomb") {
                    var particleEff_2 = cc.instantiate(this.damageEffAnim);
                    particleEff_2.parent = cc.director.getScene();
                    particleEff_2.setPosition(other.node.getPosition().addSelf(cc.v2(480, 320)));
                    this.scheduleOnce(function () {
                        particleEff_2.destroy();
                    }, 0.4);
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
        if (other.node.group == "itemObj") {
            this.HP += 30;
            if (this.HP > 100) {
                this.HP = 100;
            }
        }
    };
    Player.prototype.playerMove = function (dt) {
        this.node.x += this.moveSpeed * this.speedVec * this.moveDirection * dt; // player walking
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
        var _this = this;
        this.shoot = false;
        this.scheduleOnce(function () {
            _this.aim = false;
        }, 0.5);
        if (mode == "normal") {
            var bullet = cc.instantiate(this.bulletPrefab);
            if (bullet != null) {
                bullet.getComponent('Bullet').setAngle(this.angle);
                bullet.getComponent('Bullet').init(this.node, 1000);
            }
        }
        else if (mode == "burst") {
            this.schedule(function () {
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
        cc.find("Canvas/Main Camera/UI").getComponent("UI").updateRecord("score", 10000);
        cc.find("Canvas/Main Camera/UI").getComponent("UI").updateRecord("gem", 50);
        cc.find("Canvas/Main Camera/UI").getComponent("UI").updateRecord("coin", 500);
        cc.audioEngine.playEffect(this.dieAudio, false);
        cc.find("Canvas/Game Manager").getComponent("GameManager").playerDie();
    };
    Player.prototype.playerAnimation = function () {
        if (!this.isDie) { // animation for char1
            if (this.playerChar == "char1") { // MUST change to curPlayer == "Player 1"
                if (this.isOnGround && !this.isMove && !this.hurt && !this.aim && (!this.animationState || this.animationState.name != "char1idle")) {
                    this.animationState = this.animation.play("char1idle");
                }
                else if (this.isOnGround && this.aim && (!this.animationState || this.animationState.name != "char1aim")) {
                    this.animationState = this.animation.play("char1aim");
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
                if (this.isOnGround && !this.isMove && !this.hurt && !this.aim && (!this.animationState || this.animationState.name != "char2idle")) {
                    this.animationState = this.animation.play("char2idle");
                }
                else if (this.isOnGround && this.aim && (!this.animationState || this.animationState.name != "char2aim")) {
                    this.animationState = this.animation.play("char2aim");
                }
                else if (this.isOnGround && this.isMove && (!this.animationState || this.animationState.name != "char2run")) {
                    this.animationState = this.animation.play("char2run");
                }
                else if (!this.isOnGround && (!this.animationState || this.animationState.name != "char2jump")) {
                    this.animationState = this.animation.play("char2jump");
                }
            }
            else if (this.playerChar == "char3") {
                if (this.isOnGround && !this.isMove && !this.hurt && !this.aim && (!this.animationState || this.animationState.name != "char3idle")) {
                    this.animationState = this.animation.play("char3idle");
                }
                else if (this.isOnGround && this.aim && (!this.animationState || this.animationState.name != "char3aim")) {
                    this.animationState = this.animation.play("char3aim");
                }
                else if (this.isOnGround && this.isMove && (!this.animationState || this.animationState.name != "char3run")) {
                    this.animationState = this.animation.play("char3run");
                }
                else if (!this.isOnGround && (!this.animationState || this.animationState.name != "char3jump")) {
                    this.animationState = this.animation.play("char3jump");
                }
            }
            else if (this.playerChar == "char4") {
                if (this.isOnGround && !this.isMove && !this.hurt && !this.aim && (!this.animationState || this.animationState.name != "char4idle")) {
                    this.animationState = this.animation.play("char4idle");
                }
                else if (this.isOnGround && this.aim && (!this.animationState || this.animationState.name != "char4aim")) {
                    this.animationState = this.animation.play("char4aim");
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
    // setPlayerNumber() {
    //     if(this.node.name == "Player Number - 2") {
    //         this.playerNumber.getComponent(cc.Button).string = cc.sys.localStorage.getItem("2 Players");
    //     } else if(this.node.name == "Player Number - 3") {
    //         this.playerNumber.getComponent(cc.Button).string = cc.sys.localStorage.getItem("3 Players");
    //     } else if(this.node.name == "Player Number - 4") {
    //         this.playerNumber.getComponent(cc.Button).string = cc.sys.localStorage.getItem("4 Players");
    //     } else if(this.node.name == "Player Number - team") {
    //         this.playerNumber.getComponent(cc.Button).string = cc.sys.localStorage.getItem("Team Players");
    //     }
    // }
    // setTotalPlayer() {
    //     if(this.node.name == "Player Number - 2") {
    //         this.totalPlayer = cc.sys.localStorage.getItem("Total Player - 2");
    //         this.totalPlayer = "num2";
    //     } else if(this.node.name == "Player Number - 3") {
    //         this.totalPlayer = cc.sys.localStorage.getItem("Total Player - 3");
    //         this.totalPlayer = "num3";
    //     } else if(this.node.name == "Player Number - 4") {
    //         this.totalPlayer = cc.sys.localStorage.getItem("Total Player - 4");
    //         this.totalPlayer = "num4";
    //     } else if(this.node.name == "Player Number - team") {
    //         this.totalPlayer = cc.sys.localStorage.getItem("Total Player - team");
    //         this.totalPlayer = "numteam";
    //     }
    // }
    Player.prototype.setPlayerChar = function () {
        if (this.node.name == "Player 1") {
            this.playerChar = cc.sys.localStorage.getItem("Player 1 Char");
        }
        else if (this.node.name == "Player 2") {
            this.playerChar = cc.sys.localStorage.getItem("Player 2 Char");
        }
        else if (this.node.name == "Player 3") {
            this.playerChar = cc.sys.localStorage.getItem("Player 3 Char");
        }
        else if (this.node.name == "Player 4") {
            this.playerChar = cc.sys.localStorage.getItem("Player 4 Char");
        }
        this.setSkill(this.playerChar);
    };
    Player.prototype.getCurrWeaponNum = function () {
        return this.currWeaponNum;
    };
    Player.prototype.setSkill = function (charNum) {
        switch (charNum) {
            case "char1":
                this.skill = "none";
                break;
            case "char2":
                this.skill = "speed";
                this.speedVec = 1.5;
                break;
            case "char3":
                this.skill = "health";
                this.hpVec = 1;
                break;
            case "char4":
                this.skill = "damage";
                break;
            default:
                this.skill = "none";
                break;
        }
    };
    Player.prototype.changeHp = function (value) {
        var currPlayer = cc.find("Canvas/Game Manager").getComponent("GameManager").getCurrPlayer();
        var damageGet = value;
        if (currPlayer == 3 && value != 25) {
            damageGet += 10;
        }
        return damageGet;
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
    __decorate([
        property(cc.Prefab)
    ], Player.prototype, "damageParc", void 0);
    __decorate([
        property(cc.Prefab)
    ], Player.prototype, "damageEffAnim", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Player.prototype, "sfx_hit", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcUGxheWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQW9DLDBCQUFZO0lBQWhEO1FBQUEscUVBMmZDO1FBeGZHLGVBQVMsR0FBaUIsSUFBSSxDQUFDO1FBRy9CLGNBQVEsR0FBaUIsSUFBSSxDQUFDO1FBR3RCLGtCQUFZLEdBQWMsSUFBSSxDQUFDO1FBRy9CLGdCQUFVLEdBQWMsSUFBSSxDQUFDO1FBR3JDLGdCQUFVLEdBQWMsSUFBSSxDQUFDO1FBRzdCLG1CQUFhLEdBQWMsSUFBSSxDQUFDO1FBRXpCLFVBQUksR0FBRyxJQUFJLENBQUM7UUFFWixnQkFBVSxHQUFHLElBQUksQ0FBQztRQUVqQixrQkFBWSxHQUFHLElBQUksQ0FBQztRQUVwQixnQkFBVSxHQUFXLElBQUksQ0FBQztRQUUxQixjQUFRLEdBQUcsSUFBSSxDQUFDO1FBRWhCLGlCQUFXLEdBQVcsSUFBSSxDQUFDO1FBRTNCLGVBQVMsR0FBVyxHQUFHLENBQUM7UUFFeEIsbUJBQWEsR0FBVyxDQUFDLENBQUM7UUFFMUIscUJBQWUsR0FBVyxDQUFDLENBQUM7UUFFNUIsa0JBQVksR0FBVyxJQUFJLENBQUM7UUFFNUIsVUFBSSxHQUFZLEtBQUssQ0FBQztRQUV0QixnQkFBVSxHQUFZLEtBQUssQ0FBQztRQUU3QixXQUFLLEdBQVksS0FBSyxDQUFDO1FBRXRCLFlBQU0sR0FBWSxLQUFLLENBQUM7UUFFeEIsZUFBUyxHQUFpQixJQUFJLENBQUM7UUFFL0Isb0JBQWMsR0FBRyxJQUFJLENBQUM7UUFFdEIsZUFBUyxHQUFpQixJQUFJLENBQUM7UUFFL0IsU0FBRyxHQUFZLEtBQUssQ0FBQztRQUVyQixXQUFLLEdBQVksS0FBSyxDQUFDO1FBRXZCLGNBQVEsR0FBRyxJ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RUFBRSxDQUFDLFNBQVMsQ0FBQzsyQ0FDTTtJQXZGWixNQUFNO1FBRDFCLE9BQU87T0FDYSxNQUFNLENBMmYxQjtJQUFELGFBQUM7Q0EzZkQsQUEyZkMsQ0EzZm1DLEVBQUUsQ0FBQyxTQUFTLEdBMmYvQztrQkEzZm9CLE1BQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcclxuICAgIGp1bXBBdWRpbzogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgZGllQXVkaW86IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHByaXZhdGUgYnVsbGV0UHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBwcml2YXRlIGJvbWJQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIGRhbWFnZVBhcmM6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIGRhbWFnZUVmZkFuaW06IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgcHVibGljIGxpbmUgPSBudWxsO1xyXG5cclxuICAgIHB1YmxpYyBwbGF5ZXJOYW1lID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIHBsYXllck51bWJlciA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBwbGF5ZXJDaGFyOiBzdHJpbmcgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgYWltTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgdG90YWxQbGF5ZXI6IHN0cmluZyA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBtb3ZlU3BlZWQ6IG51bWJlciA9IDMwMDtcclxuXHJcbiAgICBwcml2YXRlIG1vdmVEaXJlY3Rpb246IG51bWJlciA9IDA7XHJcblxyXG4gICAgcHJpdmF0ZSBjaGFuZ2VEaXJlY3Rpb246IG51bWJlciA9IDA7XHJcblxyXG4gICAgcHJpdmF0ZSBqdW1wVmVsb2NpdHk6IG51bWJlciA9IDIwMDA7XHJcblxyXG4gICAgcHJpdmF0ZSBqdW1wOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgcHJpdmF0ZSBpc09uR3JvdW5kOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgcHVibGljIGlzRGllOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgcHJpdmF0ZSBpc01vdmU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBwcml2YXRlIGFuaW1hdGlvbjogY2MuQW5pbWF0aW9uID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGFuaW1hdGlvblN0YXRlID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIHJpZ2lkQm9keTogY2MuUmlnaWRCb2R5ID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIHdpbjogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHByaXZhdGUgc2hvb3Q6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBwcml2YXRlIGJvbWJQb29sID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGJvbWI6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBwcml2YXRlIGFuZ2xlID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIHBvd2VyOiBudW1iZXIgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgbWF4SFA6IG51bWJlciA9IDEwMDtcclxuXHJcbiAgICBwcml2YXRlIEhQOiBudW1iZXIgPSAxMDA7XHJcblxyXG4gICAgcHJpdmF0ZSBodXJ0OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgcHVibGljIHdlYXBvbjogc3RyaW5nID0gXCJndW5cIjtcclxuXHJcbiAgICBwdWJsaWMgZ3VuVHlwZTogc3RyaW5nID0gXCJub3JtYWxcIjtcclxuXHJcbiAgICBwcml2YXRlIGN1cnJXZWFwb25OdW06IHN0cmluZyA9IFwiMFwiO1xyXG5cclxuICAgIHByaXZhdGUgYWltOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgcHJpdmF0ZSBza2lsbDogc3RyaW5nID0gXCJub25lXCI7XHJcblxyXG4gICAgcHJpdmF0ZSBzcGVlZFZlYzogbnVtYmVyID0gMTtcclxuXHJcbiAgICBwcml2YXRlIGhwVmVjOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBzZnhfaGl0OiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb24gPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7XHJcbiAgICAgICAgdGhpcy5yaWdpZEJvZHkgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJOYW1lID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiUGxheWVyIE5hbWVcIik7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJOdW1iZXIgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJQbGF5ZXIgTnVtYmVyXCIpO1xyXG4gICAgICAgIHRoaXMubGluZSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIlRyYWplY3RvcnkgTGluZVwiKTtcclxuICAgICAgICB0aGlzLmFpbUxhYmVsID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiQWltIEJvbWIgTGF5b3V0XCIpO1xyXG4gICAgICAgIHRoaXMuc2V0UGxheWVyTmFtZSgpO1xyXG4gICAgICAgIC8vIHRoaXMuc2V0UGxheWVyTnVtYmVyKCk7XHJcbiAgICAgICAgdGhpcy5zZXRQbGF5ZXJDaGFyKCk7XHJcbiAgICAgICAgdGhpcy5ib21iUG9vbCA9IG5ldyBjYy5Ob2RlUG9vbCgnQm9tYicpO1xyXG4gICAgICAgIGxldCBtYXhCb21iTnVtID0gNTtcclxuICAgICAgICBmb3IobGV0IGk6IG51bWJlciA9IDA7IGkgPCBtYXhCb21iTnVtOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGJvbWIgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmJvbWJQcmVmYWIpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5ib21iUG9vbC5wdXQoYm9tYik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlIChkdCkge1xyXG4gICAgICAgIGlmKCF0aGlzLndpbikge1xyXG4gICAgICAgICAgICBpZighdGhpcy5pc0RpZSkge1xyXG4gICAgICAgICAgICAgICAgY2MuZmluZChcIlBsYXllciBIZWFsdGgvYmFyXCIsIHRoaXMubm9kZSkud2lkdGggPSAodGhpcy5IUCAvIHRoaXMubWF4SFApICogMTAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJNb3ZlKGR0KTtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuSFAgPD0gMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJEaWUoKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5qdW1wKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVySnVtcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLnNob290KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlQnVsbGV0KHRoaXMuZ3VuVHlwZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmKHRoaXMuYm9tYikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUJvbWIoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJBbmltYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkJlZ2luQ29udGFjdChjb250YWN0LCBzZWxmLCBvdGhlcikge1xyXG4gICAgICAgIGlmKGNvbnRhY3QuZ2V0V29ybGRNYW5pZm9sZCgpLm5vcm1hbC55IDwgMCkgeyAvLyBzdGVwIG9uIHNvbWV0aGluZ1xyXG4gICAgICAgICAgICB0aGlzLmlzT25Hcm91bmQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBpZihvdGhlci50YWcgPT0gMSl7ICAgICAvLyBvbiBncm91bmQgb3IgcHJvcHNcclxuICAgICAgICAvLyAgICAgdGhpcy5pc09uR3JvdW5kID0gdHJ1ZTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgaWYob3RoZXIubm9kZS5ncm91cCA9PSBcImJ1bGxldFwiIHx8IG90aGVyLm5vZGUuZ3JvdXAgPT0gXCJleHBsb3NpdmVPYmpcIiB8fCBvdGhlci5ub2RlLmdyb3VwID09IFwiYm9tYlwiKSB7XHJcbiAgICAgICAgICAgIGlmKCF0aGlzLmlzRGllKSB7XHJcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuc2Z4X2hpdCwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5IUCwgXCJiZWZvcmVcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkhQIC09IChvdGhlci5ub2RlLmdyb3VwID09IFwiZXhwbG9zaXZlT2JqXCIpID8gdGhpcy5jaGFuZ2VIcCgyNSkgOiB0aGlzLmNoYW5nZUhwKDEwKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuSFAgKz0gKDcqdGhpcy5ocFZlYyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLkhQLCBcImFmdGVyXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5IUCA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5IUCA9IDA7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaHVydCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGxheWVyQ2hhciA9PSBcImNoYXIxXCIgJiYgdGhpcy5IUCAhPSAwKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbmltYXRpb25TdGF0ZSA9IHRoaXMuYW5pbWF0aW9uLnBsYXkoJ2NoYXIxaHVydCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzLnBsYXllckNoYXIgPT0gXCJjaGFyMlwiICYmIHRoaXMuSFAgIT0gMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uU3RhdGUgPSB0aGlzLmFuaW1hdGlvbi5wbGF5KCdjaGFyMmh1cnQnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5wbGF5ZXJDaGFyID09IFwiY2hhcjNcIiAmJiB0aGlzLkhQICE9IDApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFuaW1hdGlvblN0YXRlID0gdGhpcy5hbmltYXRpb24ucGxheSgnY2hhcjNodXJ0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMucGxheWVyQ2hhciA9PSBcImNoYXI0XCIgJiYgdGhpcy5IUCAhPSAwKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbmltYXRpb25TdGF0ZSA9IHRoaXMuYW5pbWF0aW9uLnBsYXkoJ2NoYXI0aHVydCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmh1cnQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9LCAwLjUpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZihvdGhlci5ub2RlLmdyb3VwID09IFwiYnVsbGV0XCIpe1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBwYXJ0aWNsZUVmZiA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZGFtYWdlUGFyYyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFydGljbGVFZmYucGFyZW50ID0gY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKTtcclxuICAgICAgICAgICAgICAgICAgICBwYXJ0aWNsZUVmZi5zZXRQb3NpdGlvbihvdGhlci5ub2RlLmdldFBvc2l0aW9uKCkuYWRkU2VsZihjYy52Mig0ODAsIDMyMCkpKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJ0aWNsZUVmZi5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMC42KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZihvdGhlci5ub2RlLmdyb3VwID09IFwiYm9tYlwiKXtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcGFydGljbGVFZmYgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmRhbWFnZUVmZkFuaW0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcnRpY2xlRWZmLnBhcmVudCA9IGNjLmRpcmVjdG9yLmdldFNjZW5lKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFydGljbGVFZmYuc2V0UG9zaXRpb24ob3RoZXIubm9kZS5nZXRQb3NpdGlvbigpLmFkZFNlbGYoY2MudjIoNDgwLCAzMjApKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFydGljbGVFZmYuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIDAuNCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYob3RoZXIubm9kZS5ncm91cCA9PSBcIndhbGxcIikge1xyXG4gICAgICAgICAgICBpZihvdGhlci5ub2RlLm5hbWUgPT0gXCJEaWUgQm91bmRhcnlcIikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJEaWUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYob3RoZXIubm9kZS5ncm91cCA9PSBcIndlYXBvbk9ialwiKXtcclxuICAgICAgICAgICAgdGhpcy5jdXJyV2VhcG9uTnVtID0gb3RoZXIubm9kZS5nZXRDb21wb25lbnQoXCJ3ZWFwb25PYmpcIikuZ2V0V2VhcG9uVHlwZSgpO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMuY3VycldlYXBvbk51bSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIjBcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLndlYXBvbiA9IFwiZ3VuXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ndW5UeXBlID0gXCJub3JtYWxcIjtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCIxXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53ZWFwb24gPSBcImd1blwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ3VuVHlwZSA9IFwiYnVyc3RcIjtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCIyXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53ZWFwb24gPSBcImJvbWJcIjtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCIzXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53ZWFwb24gPSBcImd1blwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ3VuVHlwZSA9IFwic2hvdGd1blwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIjRcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLndlYXBvbiA9IFwiZ3VuXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ndW5UeXBlID0gXCJzbmlwZXJcIjtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKG90aGVyLm5vZGUuZ3JvdXAgPT0gXCJpdGVtT2JqXCIpe1xyXG4gICAgICAgICAgICB0aGlzLkhQICs9IDMwO1xyXG4gICAgICAgICAgICBpZih0aGlzLkhQID4gMTAwKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuSFAgPSAxMDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcGxheWVyTW92ZShkdCkge1xyXG4gICAgICAgIHRoaXMubm9kZS54ICs9IHRoaXMubW92ZVNwZWVkICogdGhpcy5zcGVlZFZlYyAqIHRoaXMubW92ZURpcmVjdGlvbiAqIGR0OyAgICAvLyBwbGF5ZXIgd2Fsa2luZ1xyXG4gICAgICAgIHRoaXMuaXNNb3ZlID0gKHRoaXMubW92ZURpcmVjdGlvbiAhPSAwKSA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICBpZih0aGlzLm1vdmVEaXJlY3Rpb24gPT0gMSB8fCB0aGlzLmNoYW5nZURpcmVjdGlvbiA9PSAxKSB7ICAgLy8gY2hhbmdlIGRpcmVjdGlvbiB1c2luZyBzY2FsaW5nXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5zY2FsZVggPSAxO1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllck5hbWUuc2NhbGVYID0gMTtcclxuICAgICAgICAgICAgY2MuZmluZChcIlBsYXllciBIZWFsdGhcIiwgdGhpcy5ub2RlKS5zY2FsZVggPSAxO1xyXG4gICAgICAgICAgICBpZih0aGlzLmFpbUxhYmVsLmFjdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5haW1MYWJlbC5zY2FsZVggPSAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMubW92ZURpcmVjdGlvbiA9PSAtMSB8fCB0aGlzLmNoYW5nZURpcmVjdGlvbiA9PSAtMSkge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGVYID0gLTE7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyTmFtZS5zY2FsZVggPSAtMTtcclxuICAgICAgICAgICAgY2MuZmluZChcIlBsYXllciBIZWFsdGhcIiwgdGhpcy5ub2RlKS5zY2FsZVggPSAtMTtcclxuICAgICAgICAgICAgaWYodGhpcy5haW1MYWJlbC5hY3RpdmUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWltTGFiZWwuc2NhbGVYID0gLTE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcGxheWVySnVtcCgpIHtcclxuICAgICAgICBpZih0aGlzLmlzT25Hcm91bmQpIHsgIC8vIHBsYXllciBpcyBvbiBncm91bmRcclxuICAgICAgICAgICAgdGhpcy5yaWdpZEJvZHkubGluZWFyVmVsb2NpdHkgPSBjYy52MigwLCB0aGlzLmp1bXBWZWxvY2l0eSk7ICAgIC8vIGFkZCBqdW1wIHZlbG9jaXR5XHJcbiAgICAgICAgICAgIHRoaXMuaXNPbkdyb3VuZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuanVtcEF1ZGlvLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uU3RhdGUgPSB0aGlzLmFuaW1hdGlvbi5wbGF5KCdjaGFyMWp1bXAnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjcmVhdGVCdWxsZXQobW9kZTogc3RyaW5nKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuc2hvb3QgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKT0+e1xyXG4gICAgICAgICAgICB0aGlzLmFpbSA9IGZhbHNlO1xyXG4gICAgICAgIH0sIDAuNSlcclxuICAgICAgICBpZihtb2RlID09IFwibm9ybWFsXCIpIHtcclxuICAgICAgICAgICAgbGV0IGJ1bGxldCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuYnVsbGV0UHJlZmFiKTtcclxuICAgICAgICAgICAgaWYoYnVsbGV0ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGJ1bGxldC5nZXRDb21wb25lbnQoJ0J1bGxldCcpLnNldEFuZ2xlKHRoaXMuYW5nbGUpO1xyXG4gICAgICAgICAgICAgICAgYnVsbGV0LmdldENvbXBvbmVudCgnQnVsbGV0JykuaW5pdCh0aGlzLm5vZGUsIDEwMDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYobW9kZSA9PSBcImJ1cnN0XCIpIHtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZShmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGxldCBidWxsZXQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmJ1bGxldFByZWZhYik7XHJcbiAgICAgICAgICAgICAgICBpZihidWxsZXQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJ1bGxldC5nZXRDb21wb25lbnQoJ0J1bGxldCcpLnNldEFuZ2xlKHRoaXMuYW5nbGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJ1bGxldC5nZXRDb21wb25lbnQoJ0J1bGxldCcpLmluaXQodGhpcy5ub2RlLCAxMDAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgMC4wNSwgMik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYobW9kZSA9PSBcInNob3RndW5cIikge1xyXG4gICAgICAgICAgICBsZXQgZF9hbmdsZSA9IC0wLjE7XHJcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBidWxsZXQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmJ1bGxldFByZWZhYik7XHJcbiAgICAgICAgICAgICAgICBpZihidWxsZXQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJ1bGxldC5nZXRDb21wb25lbnQoJ0J1bGxldCcpLnNldEFuZ2xlKHRoaXMuYW5nbGUgKyBkX2FuZ2xlKTtcclxuICAgICAgICAgICAgICAgICAgICBidWxsZXQuZ2V0Q29tcG9uZW50KCdCdWxsZXQnKS5pbml0KHRoaXMubm9kZSwgMTAwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZF9hbmdsZSArPSAwLjA1O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYobW9kZSA9PSBcInNuaXBlclwiKSB7XHJcbiAgICAgICAgICAgIGxldCBidWxsZXQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmJ1bGxldFByZWZhYik7XHJcbiAgICAgICAgICAgIGlmKGJ1bGxldCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBidWxsZXQuZ2V0Q29tcG9uZW50KCdCdWxsZXQnKS5zZXRBbmdsZSh0aGlzLmFuZ2xlKTtcclxuICAgICAgICAgICAgICAgIGJ1bGxldC5nZXRDb21wb25lbnQoJ0J1bGxldCcpLmluaXQodGhpcy5ub2RlLCAyMDAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNyZWF0ZUJvbWIoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuYm9tYiA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBib21iID0gbnVsbDtcclxuICAgICAgICBpZiAodGhpcy5ib21iUG9vbC5zaXplKCkgPiAwKSBcclxuICAgICAgICAgICAgYm9tYiA9IHRoaXMuYm9tYlBvb2wuZ2V0KHRoaXMuYm9tYlBvb2wpO1xyXG5cclxuICAgICAgICBpZihib21iICE9IG51bGwpIHtcclxuICAgICAgICAgICAgYm9tYi5nZXRDb21wb25lbnQoJ0JvbWInKS5zZXRBbmdsZVBvd2VyKHRoaXMuYW5nbGUsIHRoaXMucG93ZXIpO1xyXG4gICAgICAgICAgICBib21iLmdldENvbXBvbmVudCgnQm9tYicpLmluaXQodGhpcy5ub2RlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcGxheWVyRGllKCkge1xyXG4gICAgICAgIHRoaXMuaXNEaWUgPSB0cnVlO1xyXG4gICAgICAgIGlmICh0aGlzLnBsYXllckNoYXIgPT0gXCJjaGFyMVwiKXtcclxuICAgICAgICAgICAgdGhpcy5hbmltYXRpb24uc3RvcCgnY2hhcjFpZGxlJyk7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uU3RhdGUgPSB0aGlzLmFuaW1hdGlvbi5wbGF5KCdjaGFyMWRlYWQnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5wbGF5ZXJDaGFyID09IFwiY2hhcjJcIil7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uLnN0b3AoJ2NoYXIyaWRsZScpO1xyXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGlvblN0YXRlID0gdGhpcy5hbmltYXRpb24ucGxheSgnY2hhcjJkZWFkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMucGxheWVyQ2hhciA9PSBcImNoYXIzXCIpe1xyXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGlvbi5zdG9wKCdjaGFyM2lkbGUnKTtcclxuICAgICAgICAgICAgdGhpcy5hbmltYXRpb25TdGF0ZSA9IHRoaXMuYW5pbWF0aW9uLnBsYXkoJ2NoYXIzZGVhZCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLnBsYXllckNoYXIgPT0gXCJjaGFyNFwiKXtcclxuICAgICAgICAgICAgdGhpcy5hbmltYXRpb24uc3RvcCgnY2hhcjRpZGxlJyk7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uU3RhdGUgPSB0aGlzLmFuaW1hdGlvbi5wbGF5KCdjaGFyNGRlYWQnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgLy8gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5QaHlzaWNzQm94Q29sbGlkZXIpLmVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICB9LCAxKTtcclxuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL01haW4gQ2FtZXJhL1VJXCIpLmdldENvbXBvbmVudChcIlVJXCIpLnVwZGF0ZVJlY29yZChcInNjb3JlXCIsIDEwMDAwKTtcclxuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL01haW4gQ2FtZXJhL1VJXCIpLmdldENvbXBvbmVudChcIlVJXCIpLnVwZGF0ZVJlY29yZChcImdlbVwiLCA1MCk7XHJcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9NYWluIENhbWVyYS9VSVwiKS5nZXRDb21wb25lbnQoXCJVSVwiKS51cGRhdGVSZWNvcmQoXCJjb2luXCIsIDUwMCk7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmRpZUF1ZGlvLCBmYWxzZSk7XHJcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9HYW1lIE1hbmFnZXJcIikuZ2V0Q29tcG9uZW50KFwiR2FtZU1hbmFnZXJcIikucGxheWVyRGllKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcGxheWVyQW5pbWF0aW9uKCkge1xyXG4gICAgICAgIGlmKCF0aGlzLmlzRGllKXsgICAgLy8gYW5pbWF0aW9uIGZvciBjaGFyMVxyXG4gICAgICAgICAgICBpZih0aGlzLnBsYXllckNoYXIgPT0gXCJjaGFyMVwiKSB7ICAvLyBNVVNUIGNoYW5nZSB0byBjdXJQbGF5ZXIgPT0gXCJQbGF5ZXIgMVwiXHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLmlzT25Hcm91bmQgJiYgIXRoaXMuaXNNb3ZlICYmICF0aGlzLmh1cnQgJiYgIXRoaXMuYWltICYmICghdGhpcy5hbmltYXRpb25TdGF0ZSB8fCB0aGlzLmFuaW1hdGlvblN0YXRlLm5hbWUgIT0gXCJjaGFyMWlkbGVcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFuaW1hdGlvblN0YXRlID0gdGhpcy5hbmltYXRpb24ucGxheShcImNoYXIxaWRsZVwiKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZih0aGlzLmlzT25Hcm91bmQgJiYgdGhpcy5haW0gICYmICghdGhpcy5hbmltYXRpb25TdGF0ZSB8fCB0aGlzLmFuaW1hdGlvblN0YXRlLm5hbWUgIT0gXCJjaGFyMWFpbVwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uU3RhdGUgPSB0aGlzLmFuaW1hdGlvbi5wbGF5KFwiY2hhcjFhaW1cIik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYodGhpcy5pc09uR3JvdW5kICYmIHRoaXMuaXNNb3ZlICYmICghdGhpcy5hbmltYXRpb25TdGF0ZSB8fCB0aGlzLmFuaW1hdGlvblN0YXRlLm5hbWUgIT0gXCJjaGFyMXJ1blwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uU3RhdGUgPSB0aGlzLmFuaW1hdGlvbi5wbGF5KFwiY2hhcjFydW5cIik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYoIXRoaXMuaXNPbkdyb3VuZCAmJiAoIXRoaXMuYW5pbWF0aW9uU3RhdGUgfHwgdGhpcy5hbmltYXRpb25TdGF0ZS5uYW1lICE9IFwiY2hhcjFqdW1wXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbmltYXRpb25TdGF0ZSA9IHRoaXMuYW5pbWF0aW9uLnBsYXkoXCJjaGFyMWp1bXBcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBpZiAodGhpcy5pc09uR3JvdW5kICYmIHRoaXMuYW5pbWF0aW9uLmdldEFuaW1hdGlvblN0YXRlKCdjaGFyMWp1bXAnKS5pc1BsYXlpbmcpe1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIHRoaXMuYW5pbWF0aW9uLnN0b3AoJ2NoYXIxanVtcCcpO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIHRoaXMuYW5pbWF0aW9uU3RhdGUgPSB0aGlzLmFuaW1hdGlvbi5wbGF5KCdjaGFyMWlkbGUnKTtcclxuICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgIC8vIGlmICh0aGlzLmlzTW92ZSAmJiAhdGhpcy5hbmltYXRpb24uZ2V0QW5pbWF0aW9uU3RhdGUoJ2NoYXIxcnVuJykuaXNQbGF5aW5nICYmICF0aGlzLmFuaW1hdGlvbi5nZXRBbmltYXRpb25TdGF0ZSgnY2hhcjFqdW1wJykuaXNQbGF5aW5nKXtcclxuICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLmFuaW1hdGlvblN0YXRlID0gdGhpcy5hbmltYXRpb24ucGxheSgnY2hhcjFydW4nKTtcclxuICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgIC8vIGlmICh0aGlzLmFuaW1hdGlvblN0YXRlID09IG51bGwgfHwgKCF0aGlzLmlzTW92ZSAmJiB0aGlzLmlzT25Hcm91bmQgJiYgIXRoaXMuYW5pbWF0aW9uLmdldEFuaW1hdGlvblN0YXRlKCdjaGFyMWlkbGUnKS5pc1BsYXlpbmcpKXtcclxuICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLmFuaW1hdGlvblN0YXRlID0gdGhpcy5hbmltYXRpb24ucGxheSgnY2hhcjFpZGxlJyk7XHJcbiAgICAgICAgICAgICAgICAvLyB9ICAgICAgICAgIFxyXG4gICAgICAgICAgICB9IGVsc2UgaWYodGhpcy5wbGF5ZXJDaGFyID09IFwiY2hhcjJcIikge1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5pc09uR3JvdW5kICYmICF0aGlzLmlzTW92ZSAmJiAhdGhpcy5odXJ0ICYmICF0aGlzLmFpbSAmJiAoIXRoaXMuYW5pbWF0aW9uU3RhdGUgfHwgdGhpcy5hbmltYXRpb25TdGF0ZS5uYW1lICE9IFwiY2hhcjJpZGxlXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbmltYXRpb25TdGF0ZSA9IHRoaXMuYW5pbWF0aW9uLnBsYXkoXCJjaGFyMmlkbGVcIik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYodGhpcy5pc09uR3JvdW5kICYmIHRoaXMuYWltICAmJiAoIXRoaXMuYW5pbWF0aW9uU3RhdGUgfHwgdGhpcy5hbmltYXRpb25TdGF0ZS5uYW1lICE9IFwiY2hhcjJhaW1cIikpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFuaW1hdGlvblN0YXRlID0gdGhpcy5hbmltYXRpb24ucGxheShcImNoYXIyYWltXCIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKHRoaXMuaXNPbkdyb3VuZCAmJiB0aGlzLmlzTW92ZSAmJiAoIXRoaXMuYW5pbWF0aW9uU3RhdGUgfHwgdGhpcy5hbmltYXRpb25TdGF0ZS5uYW1lICE9IFwiY2hhcjJydW5cIikpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFuaW1hdGlvblN0YXRlID0gdGhpcy5hbmltYXRpb24ucGxheShcImNoYXIycnVuXCIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKCF0aGlzLmlzT25Hcm91bmQgJiYgKCF0aGlzLmFuaW1hdGlvblN0YXRlIHx8IHRoaXMuYW5pbWF0aW9uU3RhdGUubmFtZSAhPSBcImNoYXIyanVtcFwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uU3RhdGUgPSB0aGlzLmFuaW1hdGlvbi5wbGF5KFwiY2hhcjJqdW1wXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYodGhpcy5wbGF5ZXJDaGFyID09IFwiY2hhcjNcIikge1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5pc09uR3JvdW5kICYmICF0aGlzLmlzTW92ZSAmJiAhdGhpcy5odXJ0ICYmICF0aGlzLmFpbSAmJiAoIXRoaXMuYW5pbWF0aW9uU3RhdGUgfHwgdGhpcy5hbmltYXRpb25TdGF0ZS5uYW1lICE9IFwiY2hhcjNpZGxlXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbmltYXRpb25TdGF0ZSA9IHRoaXMuYW5pbWF0aW9uLnBsYXkoXCJjaGFyM2lkbGVcIik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYodGhpcy5pc09uR3JvdW5kICYmIHRoaXMuYWltICAmJiAoIXRoaXMuYW5pbWF0aW9uU3RhdGUgfHwgdGhpcy5hbmltYXRpb25TdGF0ZS5uYW1lICE9IFwiY2hhcjNhaW1cIikpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFuaW1hdGlvblN0YXRlID0gdGhpcy5hbmltYXRpb24ucGxheShcImNoYXIzYWltXCIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKHRoaXMuaXNPbkdyb3VuZCAmJiB0aGlzLmlzTW92ZSAmJiAoIXRoaXMuYW5pbWF0aW9uU3RhdGUgfHwgdGhpcy5hbmltYXRpb25TdGF0ZS5uYW1lICE9IFwiY2hhcjNydW5cIikpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFuaW1hdGlvblN0YXRlID0gdGhpcy5hbmltYXRpb24ucGxheShcImNoYXIzcnVuXCIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKCF0aGlzLmlzT25Hcm91bmQgJiYgKCF0aGlzLmFuaW1hdGlvblN0YXRlIHx8IHRoaXMuYW5pbWF0aW9uU3RhdGUubmFtZSAhPSBcImNoYXIzanVtcFwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uU3RhdGUgPSB0aGlzLmFuaW1hdGlvbi5wbGF5KFwiY2hhcjNqdW1wXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9ICBlbHNlIGlmKHRoaXMucGxheWVyQ2hhciA9PSBcImNoYXI0XCIpIHtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuaXNPbkdyb3VuZCAmJiAhdGhpcy5pc01vdmUgJiYgIXRoaXMuaHVydCAmJiAhdGhpcy5haW0gJiYgKCF0aGlzLmFuaW1hdGlvblN0YXRlIHx8IHRoaXMuYW5pbWF0aW9uU3RhdGUubmFtZSAhPSBcImNoYXI0aWRsZVwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uU3RhdGUgPSB0aGlzLmFuaW1hdGlvbi5wbGF5KFwiY2hhcjRpZGxlXCIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKHRoaXMuaXNPbkdyb3VuZCAmJiB0aGlzLmFpbSAgJiYgKCF0aGlzLmFuaW1hdGlvblN0YXRlIHx8IHRoaXMuYW5pbWF0aW9uU3RhdGUubmFtZSAhPSBcImNoYXI0YWltXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbmltYXRpb25TdGF0ZSA9IHRoaXMuYW5pbWF0aW9uLnBsYXkoXCJjaGFyNGFpbVwiKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZih0aGlzLmlzT25Hcm91bmQgJiYgdGhpcy5pc01vdmUgJiYgKCF0aGlzLmFuaW1hdGlvblN0YXRlIHx8IHRoaXMuYW5pbWF0aW9uU3RhdGUubmFtZSAhPSBcImNoYXI0cnVuXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbmltYXRpb25TdGF0ZSA9IHRoaXMuYW5pbWF0aW9uLnBsYXkoXCJjaGFyNHJ1blwiKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZighdGhpcy5pc09uR3JvdW5kICYmICghdGhpcy5hbmltYXRpb25TdGF0ZSB8fCB0aGlzLmFuaW1hdGlvblN0YXRlLm5hbWUgIT0gXCJjaGFyNGp1bXBcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFuaW1hdGlvblN0YXRlID0gdGhpcy5hbmltYXRpb24ucGxheShcImNoYXI0anVtcFwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gICBcclxuICAgIH1cclxuXHJcbiAgICBzZXRQbGF5ZXJNb3ZlRGlyZWN0aW9uKGRpcjogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5tb3ZlRGlyZWN0aW9uID0gZGlyO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFBsYXllckNoYW5nZURpcmVjdGlvbihkaXI6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuY2hhbmdlRGlyZWN0aW9uID0gZGlyO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFBsYXllckp1bXAodmFsOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5qdW1wID0gdmFsO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFBsYXllclNob290KGFuZ2xlKSB7XHJcbiAgICAgICAgdGhpcy5hbmdsZSA9IGFuZ2xlO1xyXG4gICAgICAgIHRoaXMuc2hvb3QgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFBsYXllckJvbWIoYW5nbGUpIHtcclxuICAgICAgICB0aGlzLmFuZ2xlID0gYW5nbGU7XHJcbiAgICAgICAgdGhpcy5ib21iID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRQbGF5ZXJOYW1lKCkge1xyXG4gICAgICAgIGlmKHRoaXMubm9kZS5uYW1lID09IFwiUGxheWVyIDFcIikge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllck5hbWUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJQbGF5ZXIgMSBOYW1lXCIpO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLm5vZGUubmFtZSA9PSBcIlBsYXllciAyXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJOYW1lLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiUGxheWVyIDIgTmFtZVwiKTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5ub2RlLm5hbWUgPT0gXCJQbGF5ZXIgM1wiKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyTmFtZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlBsYXllciAzIE5hbWVcIik7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMubm9kZS5uYW1lID09IFwiUGxheWVyIDRcIikge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllck5hbWUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJQbGF5ZXIgNCBOYW1lXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBzZXRQbGF5ZXJOdW1iZXIoKSB7XHJcbiAgICAvLyAgICAgaWYodGhpcy5ub2RlLm5hbWUgPT0gXCJQbGF5ZXIgTnVtYmVyIC0gMlwiKSB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMucGxheWVyTnVtYmVyLmdldENvbXBvbmVudChjYy5CdXR0b24pLnN0cmluZyA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIjIgUGxheWVyc1wiKTtcclxuICAgIC8vICAgICB9IGVsc2UgaWYodGhpcy5ub2RlLm5hbWUgPT0gXCJQbGF5ZXIgTnVtYmVyIC0gM1wiKSB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMucGxheWVyTnVtYmVyLmdldENvbXBvbmVudChjYy5CdXR0b24pLnN0cmluZyA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIjMgUGxheWVyc1wiKTtcclxuICAgIC8vICAgICB9IGVsc2UgaWYodGhpcy5ub2RlLm5hbWUgPT0gXCJQbGF5ZXIgTnVtYmVyIC0gNFwiKSB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMucGxheWVyTnVtYmVyLmdldENvbXBvbmVudChjYy5CdXR0b24pLnN0cmluZyA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIjQgUGxheWVyc1wiKTtcclxuICAgIC8vICAgICB9IGVsc2UgaWYodGhpcy5ub2RlLm5hbWUgPT0gXCJQbGF5ZXIgTnVtYmVyIC0gdGVhbVwiKSB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMucGxheWVyTnVtYmVyLmdldENvbXBvbmVudChjYy5CdXR0b24pLnN0cmluZyA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlRlYW0gUGxheWVyc1wiKTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gc2V0VG90YWxQbGF5ZXIoKSB7XHJcbiAgICAvLyAgICAgaWYodGhpcy5ub2RlLm5hbWUgPT0gXCJQbGF5ZXIgTnVtYmVyIC0gMlwiKSB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMudG90YWxQbGF5ZXIgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJUb3RhbCBQbGF5ZXIgLSAyXCIpO1xyXG4gICAgLy8gICAgICAgICB0aGlzLnRvdGFsUGxheWVyID0gXCJudW0yXCI7XHJcbiAgICAvLyAgICAgfSBlbHNlIGlmKHRoaXMubm9kZS5uYW1lID09IFwiUGxheWVyIE51bWJlciAtIDNcIikge1xyXG4gICAgLy8gICAgICAgICB0aGlzLnRvdGFsUGxheWVyID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiVG90YWwgUGxheWVyIC0gM1wiKTtcclxuICAgIC8vICAgICAgICAgdGhpcy50b3RhbFBsYXllciA9IFwibnVtM1wiO1xyXG4gICAgLy8gICAgIH0gZWxzZSBpZih0aGlzLm5vZGUubmFtZSA9PSBcIlBsYXllciBOdW1iZXIgLSA0XCIpIHtcclxuICAgIC8vICAgICAgICAgdGhpcy50b3RhbFBsYXllciA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlRvdGFsIFBsYXllciAtIDRcIik7XHJcbiAgICAvLyAgICAgICAgIHRoaXMudG90YWxQbGF5ZXIgPSBcIm51bTRcIjtcclxuICAgIC8vICAgICB9IGVsc2UgaWYodGhpcy5ub2RlLm5hbWUgPT0gXCJQbGF5ZXIgTnVtYmVyIC0gdGVhbVwiKSB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMudG90YWxQbGF5ZXIgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJUb3RhbCBQbGF5ZXIgLSB0ZWFtXCIpO1xyXG4gICAgLy8gICAgICAgICB0aGlzLnRvdGFsUGxheWVyID0gXCJudW10ZWFtXCI7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG5cclxuICAgIHNldFBsYXllckNoYXIoKSB7XHJcbiAgICAgICAgaWYodGhpcy5ub2RlLm5hbWUgPT0gXCJQbGF5ZXIgMVwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyQ2hhciA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlBsYXllciAxIENoYXJcIik7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMubm9kZS5uYW1lID09IFwiUGxheWVyIDJcIikge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllckNoYXIgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJQbGF5ZXIgMiBDaGFyXCIpO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLm5vZGUubmFtZSA9PSBcIlBsYXllciAzXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJDaGFyID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiUGxheWVyIDMgQ2hhclwiKTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5ub2RlLm5hbWUgPT0gXCJQbGF5ZXIgNFwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyQ2hhciA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlBsYXllciA0IENoYXJcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0U2tpbGwodGhpcy5wbGF5ZXJDaGFyKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDdXJyV2VhcG9uTnVtKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycldlYXBvbk51bTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRTa2lsbChjaGFyTnVtOiBzdHJpbmcpe1xyXG4gICAgICAgIHN3aXRjaCAoY2hhck51bSl7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjaGFyMVwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5za2lsbCA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjaGFyMlwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5za2lsbCA9IFwic3BlZWRcIjtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3BlZWRWZWMgPSAxLjU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImNoYXIzXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNraWxsID0gXCJoZWFsdGhcIjtcclxuICAgICAgICAgICAgICAgIHRoaXMuaHBWZWMgPSAxO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjaGFyNFwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5za2lsbCA9IFwiZGFtYWdlXCI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHRoaXMuc2tpbGwgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VIcCh2YWx1ZTogbnVtYmVyKXtcclxuICAgICAgICBsZXQgY3VyclBsYXllciA9IGNjLmZpbmQoXCJDYW52YXMvR2FtZSBNYW5hZ2VyXCIpLmdldENvbXBvbmVudChcIkdhbWVNYW5hZ2VyXCIpLmdldEN1cnJQbGF5ZXIoKTtcclxuICAgICAgICBsZXQgZGFtYWdlR2V0ID0gdmFsdWU7XHJcbiAgICAgICAgaWYoY3VyclBsYXllciA9PSAzICYmIHZhbHVlICE9IDI1KXtcclxuICAgICAgICAgICAgZGFtYWdlR2V0ICs9IDEwO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZGFtYWdlR2V0O1xyXG4gICAgfVxyXG59XHJcbiJdfQ==