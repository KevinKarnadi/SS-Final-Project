"use strict";
cc._RF.push(module, '989f3Nf5mRAapnGdIatcBg9', 'SelectChar');
// scripts/SelectChar.ts

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
var SelectChar = /** @class */ (function (_super) {
    __extends(SelectChar, _super);
    function SelectChar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bgm = null;
        _this.click = null;
        _this.player1Name = null;
        _this.player2Name = null;
        _this.player3Name = null;
        _this.player4Name = null;
        _this.player3 = null;
        _this.player4 = null;
        _this.back = null;
        _this.next = null;
        _this.p1c1 = null;
        _this.p1c2 = null;
        _this.p1c3 = null;
        _this.p1c4 = null;
        _this.p2c1 = null;
        _this.p2c2 = null;
        _this.p2c3 = null;
        _this.p2c4 = null;
        _this.p3c1 = null;
        _this.p3c2 = null;
        _this.p3c3 = null;
        _this.p3c4 = null;
        _this.p4c1 = null;
        _this.p4c2 = null;
        _this.p4c3 = null;
        _this.p4c4 = null;
        _this.char1 = "true";
        _this.char2 = "false";
        _this.char3 = "false";
        _this.char4 = "false";
        _this.playerNum = null;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    SelectChar.prototype.onLoad = function () {
        if (!cc.audioEngine.isMusicPlaying()) {
            this.playBGM();
        }
        this.playerNum = cc.sys.localStorage.getItem("PlayerNum");
        this.resetPlayerChar();
        this.setTotalPlayer();
        this.loadPlayerName();
        this.setUserStats();
        this.loadCharBtn();
    };
    SelectChar.prototype.start = function () {
        this.menuMouseOn();
    };
    // update (dt) {}
    SelectChar.prototype.playBGM = function () {
        cc.audioEngine.playMusic(this.bgm, true);
    };
    SelectChar.prototype.resetPlayerChar = function () {
        cc.sys.localStorage.setItem("Player 1 Char", "char1");
        cc.sys.localStorage.setItem("Player 2 Char", "char1");
        cc.sys.localStorage.setItem("Player 3 Char", "char1");
        cc.sys.localStorage.setItem("Player 4 Char", "char1");
    };
    SelectChar.prototype.setUserStats = function () {
        // cc.sys.localStorage.setItem("char1", false); // FOR DEBUG DON'T DELETE
        // cc.sys.localStorage.setItem("char2", false);
        // cc.sys.localStorage.setItem("char3", false);
        // cc.sys.localStorage.setItem("char4", false);
        this.char1 = cc.sys.localStorage.getItem("char1");
        this.char2 = cc.sys.localStorage.getItem("char2");
        this.char3 = cc.sys.localStorage.getItem("char3");
        this.char4 = cc.sys.localStorage.getItem("char4");
    };
    SelectChar.prototype.menuMouseOn = function () {
        var _this = this;
        this.back.node.on(cc.Node.EventType.MOUSE_DOWN, function () {
            _this.playClickAudio();
            _this.loadScene("player name");
        });
        this.next.node.on(cc.Node.EventType.MOUSE_DOWN, function () {
            _this.playClickAudio();
            _this.loadScene("map choose");
        });
        this.p1c1.node.on(cc.Node.EventType.MOUSE_DOWN, function () {
            if (_this.char1 == "true") {
                _this.playClickAudio();
                _this.selected("char1", "1");
            }
        });
        this.p1c2.node.on(cc.Node.EventType.MOUSE_DOWN, function () {
            if (_this.char2 == "true") {
                _this.playClickAudio();
                _this.selected("char2", "1");
            }
        });
        this.p1c3.node.on(cc.Node.EventType.MOUSE_DOWN, function () {
            if (_this.char3 == "true") {
                _this.playClickAudio();
                _this.selected("char3", "1");
            }
        });
        this.p1c4.node.on(cc.Node.EventType.MOUSE_DOWN, function () {
            if (_this.char4 == "true") {
                _this.playClickAudio();
                _this.selected("char4", "1");
            }
        });
        this.p2c1.node.on(cc.Node.EventType.MOUSE_DOWN, function () {
            if (_this.char1 == "true") {
                _this.playClickAudio();
                _this.selected("char1", "2");
            }
        });
        this.p2c2.node.on(cc.Node.EventType.MOUSE_DOWN, function () {
            if (_this.char2 == "true") {
                _this.playClickAudio();
                _this.selected("char2", "2");
            }
        });
        this.p2c3.node.on(cc.Node.EventType.MOUSE_DOWN, function () {
            if (_this.char3 == "true") {
                _this.playClickAudio();
                _this.selected("char3", "2");
            }
        });
        this.p2c4.node.on(cc.Node.EventType.MOUSE_DOWN, function () {
            if (_this.char4 == "true") {
                _this.playClickAudio();
                _this.selected("char4", "2");
            }
        });
        if (this.playerNum == "3" || this.playerNum == "4") {
            this.p3c1.node.on(cc.Node.EventType.MOUSE_DOWN, function () {
                if (_this.char1 == "true") {
                    _this.playClickAudio();
                    _this.selected("char1", "3");
                }
            });
            this.p3c2.node.on(cc.Node.EventType.MOUSE_DOWN, function () {
                if (_this.char2 == "true") {
                    _this.playClickAudio();
                    _this.selected("char2", "3");
                }
            });
            this.p3c3.node.on(cc.Node.EventType.MOUSE_DOWN, function () {
                if (_this.char3 == "true") {
                    _this.playClickAudio();
                    _this.selected("char3", "3");
                }
            });
            this.p3c4.node.on(cc.Node.EventType.MOUSE_DOWN, function () {
                if (_this.char4 == "true") {
                    _this.playClickAudio();
                    _this.selected("char4", "3");
                }
            });
        }
        if (this.playerNum == "4") {
            this.p4c1.node.on(cc.Node.EventType.MOUSE_DOWN, function () {
                if (_this.char1 == "true") {
                    _this.playClickAudio();
                    _this.selected("char1", "4");
                }
            });
            this.p4c2.node.on(cc.Node.EventType.MOUSE_DOWN, function () {
                if (_this.char2 == "true") {
                    _this.playClickAudio();
                    _this.selected("char2", "4");
                }
            });
            this.p4c3.node.on(cc.Node.EventType.MOUSE_DOWN, function () {
                if (_this.char3 == "true") {
                    _this.playClickAudio();
                    _this.selected("char3", "4");
                }
            });
            this.p4c4.node.on(cc.Node.EventType.MOUSE_DOWN, function () {
                if (_this.char4 == "true") {
                    _this.playClickAudio();
                    _this.selected("char4", "4");
                }
            });
        }
    };
    SelectChar.prototype.playClickAudio = function () {
        cc.audioEngine.playEffect(this.click, false);
    };
    SelectChar.prototype.loadScene = function (scene) {
        cc.director.loadScene(scene);
    };
    SelectChar.prototype.loadCharBtn = function () {
        if (this.char1 == "true") {
            this.lockBtn(this.p1c1);
            this.lockBtn(this.p2c1);
            if (this.player3.active) {
                this.lockBtn(this.p3c1);
            }
            if (this.player4.active) {
                this.lockBtn(this.p4c1);
                console.log("check");
                console.log(this.p4c1.node.getChildByName("LockedBackground").active);
            }
        }
        if (this.char2 == "true") {
            this.lockBtn(this.p1c2);
            this.lockBtn(this.p2c2);
            if (this.player3.active) {
                this.lockBtn(this.p3c2);
            }
            if (this.player4.active) {
                this.lockBtn(this.p4c2);
            }
        }
        if (this.char3 == "true") {
            this.lockBtn(this.p1c3);
            this.lockBtn(this.p2c3);
            if (this.player3.active) {
                this.lockBtn(this.p3c3);
            }
            if (this.player4.active) {
                this.lockBtn(this.p4c3);
            }
        }
        if (this.char4 == "true") {
            this.lockBtn(this.p1c4);
            this.lockBtn(this.p2c4);
            if (this.player3.active) {
                this.lockBtn(this.p3c4);
            }
            if (this.player4.active) {
                this.lockBtn(this.p4c4);
            }
        }
    };
    SelectChar.prototype.lockBtn = function (btn) {
        btn.node.getChildByName("LockedBackground").active = false;
    };
    SelectChar.prototype.selected = function (charType, idx) {
        cc.sys.localStorage.setItem("Player " + idx + " Char", charType);
    };
    SelectChar.prototype.setTotalPlayer = function () {
        if (this.playerNum == "2") {
            this.player3.active = false;
            this.player4.active = false;
        }
        else if (this.playerNum == "3") {
            this.player4.active = false;
        }
    };
    SelectChar.prototype.loadPlayerName = function () {
        this.player1Name.string = cc.sys.localStorage.getItem("Player 1 Name");
        this.player2Name.string = cc.sys.localStorage.getItem("Player 2 Name");
        if (this.player3.active) {
            this.player3Name.string = cc.sys.localStorage.getItem("Player 3 Name");
        }
        if (this.player4.active) {
            this.player4Name.string = cc.sys.localStorage.getItem("Player 4 Name");
        }
    };
    __decorate([
        property(cc.AudioClip)
    ], SelectChar.prototype, "bgm", void 0);
    __decorate([
        property(cc.AudioClip)
    ], SelectChar.prototype, "click", void 0);
    __decorate([
        property(cc.Label)
    ], SelectChar.prototype, "player1Name", void 0);
    __decorate([
        property(cc.Label)
    ], SelectChar.prototype, "player2Name", void 0);
    __decorate([
        property(cc.Label)
    ], SelectChar.prototype, "player3Name", void 0);
    __decorate([
        property(cc.Label)
    ], SelectChar.prototype, "player4Name", void 0);
    __decorate([
        property(cc.Node)
    ], SelectChar.prototype, "player3", void 0);
    __decorate([
        property(cc.Node)
    ], SelectChar.prototype, "player4", void 0);
    __decorate([
        property(cc.Button)
    ], SelectChar.prototype, "back", void 0);
    __decorate([
        property(cc.Button)
    ], SelectChar.prototype, "next", void 0);
    __decorate([
        property(cc.Button)
    ], SelectChar.prototype, "p1c1", void 0);
    __decorate([
        property(cc.Button)
    ], SelectChar.prototype, "p1c2", void 0);
    __decorate([
        property(cc.Button)
    ], SelectChar.prototype, "p1c3", void 0);
    __decorate([
        property(cc.Button)
    ], SelectChar.prototype, "p1c4", void 0);
    __decorate([
        property(cc.Button)
    ], SelectChar.prototype, "p2c1", void 0);
    __decorate([
        property(cc.Button)
    ], SelectChar.prototype, "p2c2", void 0);
    __decorate([
        property(cc.Button)
    ], SelectChar.prototype, "p2c3", void 0);
    __decorate([
        property(cc.Button)
    ], SelectChar.prototype, "p2c4", void 0);
    __decorate([
        property(cc.Button)
    ], SelectChar.prototype, "p3c1", void 0);
    __decorate([
        property(cc.Button)
    ], SelectChar.prototype, "p3c2", void 0);
    __decorate([
        property(cc.Button)
    ], SelectChar.prototype, "p3c3", void 0);
    __decorate([
        property(cc.Button)
    ], SelectChar.prototype, "p3c4", void 0);
    __decorate([
        property(cc.Button)
    ], SelectChar.prototype, "p4c1", void 0);
    __decorate([
        property(cc.Button)
    ], SelectChar.prototype, "p4c2", void 0);
    __decorate([
        property(cc.Button)
    ], SelectChar.prototype, "p4c3", void 0);
    __decorate([
        property(cc.Button)
    ], SelectChar.prototype, "p4c4", void 0);
    SelectChar = __decorate([
        ccclass
    ], SelectChar);
    return SelectChar;
}(cc.Component));
exports.default = SelectChar;

cc._RF.pop();