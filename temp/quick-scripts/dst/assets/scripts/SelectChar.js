
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/SelectChar.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcU2VsZWN0Q2hhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUF3Qyw4QkFBWTtJQUFwRDtRQUFBLHFFQXFVQztRQWxVRyxTQUFHLEdBQWlCLElBQUksQ0FBQztRQUd6QixXQUFLLEdBQWlCLElBQUksQ0FBQztRQUczQixpQkFBVyxHQUFjLElBQUksQ0FBQztRQUc5QixpQkFBVyxHQUFjLElBQUksQ0FBQztRQUc5QixpQkFBVyxHQUFjLElBQUksQ0FBQztRQUc5QixpQkFBVyxHQUFjLElBQUksQ0FBQztRQUc5QixhQUFPLEdBQVksSUFBSSxDQUFDO1FBR3hCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFHeEIsVUFBSSxHQUFjLElBQUksQ0FBQztRQUd2QixVQUFJLEdBQWMsSUFBSSxDQUFDO1FBR3ZCLFVBQUksR0FBYyxJQUFJLENBQUM7UUFHdkIsVUFBSSxHQUFjLElBQUksQ0FBQztRQUd2QixVQUFJLEdBQWMsSUFBSSxDQUFDO1FBR3ZCLFVBQUksR0FBYyxJQUFJLENBQUM7UUFHdkIsVUFBSSxHQUFjLElBQUksQ0FBQztRQUd2QixVQUFJLEdBQWMsSUFBSSxDQUFDO1FBR3ZCLFVBQUksR0FBYyxJQUFJLENBQUM7UUFHdkIsVUFBSSxHQUFjLElBQUksQ0FBQztRQUd2QixVQUFJLEdBQWMsSUFBSSxDQUFDO1FBR3ZCLFVBQUksR0FBYyxJQUFJLENBQUM7UUFHdkIsVUFBSSxHQUFjLElBQUksQ0FBQztRQUd2QixVQUFJLEdBQWMsSUFBSSxDQUFDO1FBR3ZCLFVBQUksR0FBYyxJQUFJLENBQUM7UUFHdkIsVUFBSSxHQUFjLElBQUksQ0FBQztRQUd2QixVQUFJLEdBQWMsSUFBSSxDQUFDO1FBR3ZCLFVBQUksR0FBYyxJQUFJLENB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Q0FBQyxNQUFNLENBQUM7NENBQ0c7SUFHdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs0Q0FDRztJQUd2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzRDQUNHO0lBR3ZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7NENBQ0c7SUFHdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs0Q0FDRztJQUd2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzRDQUNHO0lBR3ZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7NENBQ0c7SUFHdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs0Q0FDRztJQUd2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzRDQUNHO0lBR3ZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7NENBQ0c7SUFHdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs0Q0FDRztJQTlFTixVQUFVO1FBRDlCLE9BQU87T0FDYSxVQUFVLENBcVU5QjtJQUFELGlCQUFDO0NBclVELEFBcVVDLENBclV1QyxFQUFFLENBQUMsU0FBUyxHQXFVbkQ7a0JBclVvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWxlY3RDaGFyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgYmdtOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBjbGljazogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBwbGF5ZXIxTmFtZSA6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBwbGF5ZXIyTmFtZSA6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBwbGF5ZXIzTmFtZSA6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBwbGF5ZXI0TmFtZSA6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHBsYXllcjM6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcGxheWVyNDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcclxuICAgIGJhY2s6IGNjLkJ1dHRvbiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcclxuICAgIG5leHQ6IGNjLkJ1dHRvbiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcclxuICAgIHAxYzE6IGNjLkJ1dHRvbiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcclxuICAgIHAxYzI6IGNjLkJ1dHRvbiA9IG51bGw7XHJcbiAgICBcclxuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXHJcbiAgICBwMWMzOiBjYy5CdXR0b24gPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXHJcbiAgICBwMWM0OiBjYy5CdXR0b24gPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXHJcbiAgICBwMmMxOiBjYy5CdXR0b24gPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXHJcbiAgICBwMmMyOiBjYy5CdXR0b24gPSBudWxsO1xyXG4gICAgXHJcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxyXG4gICAgcDJjMzogY2MuQnV0dG9uID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxyXG4gICAgcDJjNDogY2MuQnV0dG9uID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxyXG4gICAgcDNjMTogY2MuQnV0dG9uID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxyXG4gICAgcDNjMjogY2MuQnV0dG9uID0gbnVsbDtcclxuICAgIFxyXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcclxuICAgIHAzYzM6IGNjLkJ1dHRvbiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcclxuICAgIHAzYzQ6IGNjLkJ1dHRvbiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcclxuICAgIHA0YzE6IGNjLkJ1dHRvbiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcclxuICAgIHA0YzI6IGNjLkJ1dHRvbiA9IG51bGw7XHJcbiAgICBcclxuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXHJcbiAgICBwNGMzOiBjYy5CdXR0b24gPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXHJcbiAgICBwNGM0OiBjYy5CdXR0b24gPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgY2hhcjE6IHN0cmluZyA9IFwidHJ1ZVwiO1xyXG5cclxuICAgIHByaXZhdGUgY2hhcjI6IHN0cmluZyA9IFwiZmFsc2VcIjtcclxuICAgIFxyXG4gICAgcHJpdmF0ZSBjaGFyMzogc3RyaW5nID0gXCJmYWxzZVwiO1xyXG4gICAgXHJcbiAgICBwcml2YXRlIGNoYXI0OiBzdHJpbmcgPSBcImZhbHNlXCI7XHJcblxyXG4gICAgcHJpdmF0ZSBwbGF5ZXJOdW06IHN0cmluZyA9IG51bGw7XHJcbiAgICBcclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgaWYoIWNjLmF1ZGlvRW5naW5lLmlzTXVzaWNQbGF5aW5nKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5QkdNKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucGxheWVyTnVtID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiUGxheWVyTnVtXCIpO1xyXG4gICAgICAgIHRoaXMucmVzZXRQbGF5ZXJDaGFyKCk7XHJcbiAgICAgICAgdGhpcy5zZXRUb3RhbFBsYXllcigpO1xyXG4gICAgICAgIHRoaXMubG9hZFBsYXllck5hbWUoKTtcclxuICAgICAgICB0aGlzLnNldFVzZXJTdGF0cygpO1xyXG4gICAgICAgIHRoaXMubG9hZENoYXJCdG4oKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgdGhpcy5tZW51TW91c2VPbigpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcblxyXG4gICAgcGxheUJHTSgpIHtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWModGhpcy5iZ20sIHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0UGxheWVyQ2hhcigpIHtcclxuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJQbGF5ZXIgMSBDaGFyXCIsIFwiY2hhcjFcIik7XHJcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiUGxheWVyIDIgQ2hhclwiLCBcImNoYXIxXCIpO1xyXG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIlBsYXllciAzIENoYXJcIiwgXCJjaGFyMVwiKTtcclxuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJQbGF5ZXIgNCBDaGFyXCIsIFwiY2hhcjFcIik7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VXNlclN0YXRzKCkge1xyXG4gICAgICAgIC8vIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNoYXIxXCIsIGZhbHNlKTsgLy8gRk9SIERFQlVHIERPTidUIERFTEVURVxyXG4gICAgICAgIC8vIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNoYXIyXCIsIGZhbHNlKTtcclxuICAgICAgICAvLyBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjaGFyM1wiLCBmYWxzZSk7XHJcbiAgICAgICAgLy8gY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2hhcjRcIiwgZmFsc2UpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuY2hhcjEgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjaGFyMVwiKTtcclxuICAgICAgICB0aGlzLmNoYXIyID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2hhcjJcIik7XHJcbiAgICAgICAgdGhpcy5jaGFyMyA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNoYXIzXCIpO1xyXG4gICAgICAgIHRoaXMuY2hhcjQgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjaGFyNFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBtZW51TW91c2VPbigpIHtcclxuICAgICAgICB0aGlzLmJhY2subm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9ET1dOLCAoKT0+e1xyXG4gICAgICAgICAgICB0aGlzLnBsYXlDbGlja0F1ZGlvKCk7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZFNjZW5lKFwicGxheWVyIG5hbWVcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5uZXh0Lm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfRE9XTiwgKCk9PntcclxuICAgICAgICAgICAgdGhpcy5wbGF5Q2xpY2tBdWRpbygpO1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRTY2VuZShcIm1hcCBjaG9vc2VcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5wMWMxLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfRE9XTiwgKCk9PntcclxuICAgICAgICAgICAgaWYodGhpcy5jaGFyMSA9PSAgXCJ0cnVlXCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheUNsaWNrQXVkaW8oKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWQoXCJjaGFyMVwiLCBcIjFcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnAxYzIubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9ET1dOLCAoKT0+e1xyXG4gICAgICAgICAgICBpZih0aGlzLmNoYXIyID09IFwidHJ1ZVwiKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXlDbGlja0F1ZGlvKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkKFwiY2hhcjJcIiwgXCIxXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5wMWMzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfRE9XTiwgKCk9PntcclxuICAgICAgICAgICAgaWYodGhpcy5jaGFyMyA9PSBcInRydWVcIikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5Q2xpY2tBdWRpbygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZChcImNoYXIzXCIsIFwiMVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMucDFjNC5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0RPV04sICgpPT57XHJcbiAgICAgICAgICAgIGlmKHRoaXMuY2hhcjQgPT0gXCJ0cnVlXCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheUNsaWNrQXVkaW8oKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWQoXCJjaGFyNFwiLCBcIjFcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnAyYzEubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9ET1dOLCAoKT0+e1xyXG4gICAgICAgICAgICBpZih0aGlzLmNoYXIxID09IFwidHJ1ZVwiKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXlDbGlja0F1ZGlvKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkKFwiY2hhcjFcIiwgXCIyXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5wMmMyLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfRE9XTiwgKCk9PntcclxuICAgICAgICAgICAgaWYodGhpcy5jaGFyMiA9PSBcInRydWVcIikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5Q2xpY2tBdWRpbygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZChcImNoYXIyXCIsIFwiMlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMucDJjMy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0RPV04sICgpPT57XHJcbiAgICAgICAgICAgIGlmKHRoaXMuY2hhcjMgPT0gXCJ0cnVlXCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheUNsaWNrQXVkaW8oKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWQoXCJjaGFyM1wiLCBcIjJcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnAyYzQubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9ET1dOLCAoKT0+e1xyXG4gICAgICAgICAgICBpZih0aGlzLmNoYXI0ID09IFwidHJ1ZVwiKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXlDbGlja0F1ZGlvKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkKFwiY2hhcjRcIiwgXCIyXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYodGhpcy5wbGF5ZXJOdW0gPT0gXCIzXCIgfHwgdGhpcy5wbGF5ZXJOdW0gPT0gXCI0XCIpIHtcclxuICAgICAgICAgICAgdGhpcy5wM2MxLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfRE9XTiwgKCk9PntcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuY2hhcjEgPT0gXCJ0cnVlXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXlDbGlja0F1ZGlvKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZChcImNoYXIxXCIsIFwiM1wiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMucDNjMi5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0RPV04sICgpPT57XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLmNoYXIyID09IFwidHJ1ZVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5Q2xpY2tBdWRpbygpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWQoXCJjaGFyMlwiLCBcIjNcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLnAzYzMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9ET1dOLCAoKT0+e1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5jaGFyMyA9PSBcInRydWVcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheUNsaWNrQXVkaW8oKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkKFwiY2hhcjNcIiwgXCIzXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5wM2M0Lm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfRE9XTiwgKCk9PntcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuY2hhcjQgPT0gXCJ0cnVlXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXlDbGlja0F1ZGlvKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZChcImNoYXI0XCIsIFwiM1wiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih0aGlzLnBsYXllck51bSA9PSBcIjRcIikge1xyXG4gICAgICAgICAgICB0aGlzLnA0YzEubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9ET1dOLCAoKT0+e1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5jaGFyMSA9PSBcInRydWVcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheUNsaWNrQXVkaW8oKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkKFwiY2hhcjFcIiwgXCI0XCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5wNGMyLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfRE9XTiwgKCk9PntcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuY2hhcjIgPT0gXCJ0cnVlXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXlDbGlja0F1ZGlvKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZChcImNoYXIyXCIsIFwiNFwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMucDRjMy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0RPV04sICgpPT57XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLmNoYXIzID09IFwidHJ1ZVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5Q2xpY2tBdWRpbygpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWQoXCJjaGFyM1wiLCBcIjRcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLnA0YzQubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9ET1dOLCAoKT0+e1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5jaGFyNCA9PSBcInRydWVcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheUNsaWNrQXVkaW8oKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkKFwiY2hhcjRcIiwgXCI0XCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcGxheUNsaWNrQXVkaW8oKXtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuY2xpY2ssIGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkU2NlbmUoc2NlbmU6IHN0cmluZykge1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShzY2VuZSk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZENoYXJCdG4oKSB7XHJcbiAgICAgICAgaWYodGhpcy5jaGFyMSA9PSBcInRydWVcIikge1xyXG4gICAgICAgICAgICB0aGlzLmxvY2tCdG4odGhpcy5wMWMxKTtcclxuICAgICAgICAgICAgdGhpcy5sb2NrQnRuKHRoaXMucDJjMSk7XHJcbiAgICAgICAgICAgIGlmKHRoaXMucGxheWVyMy5hY3RpdmUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9ja0J0bih0aGlzLnAzYzEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKHRoaXMucGxheWVyNC5hY3RpdmUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9ja0J0bih0aGlzLnA0YzEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMuY2hhcjIgPT0gXCJ0cnVlXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5sb2NrQnRuKHRoaXMucDFjMik7XHJcbiAgICAgICAgICAgIHRoaXMubG9ja0J0bih0aGlzLnAyYzIpO1xyXG4gICAgICAgICAgICBpZih0aGlzLnBsYXllcjMuYWN0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvY2tCdG4odGhpcy5wM2MyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZih0aGlzLnBsYXllcjQuYWN0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvY2tCdG4odGhpcy5wNGMyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLmNoYXIzID09IFwidHJ1ZVwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9ja0J0bih0aGlzLnAxYzMpO1xyXG4gICAgICAgICAgICB0aGlzLmxvY2tCdG4odGhpcy5wMmMzKTtcclxuICAgICAgICAgICAgaWYodGhpcy5wbGF5ZXIzLmFjdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2NrQnRuKHRoaXMucDNjMyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYodGhpcy5wbGF5ZXI0LmFjdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2NrQnRuKHRoaXMucDRjMyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy5jaGFyNCA9PSBcInRydWVcIikge1xyXG4gICAgICAgICAgICB0aGlzLmxvY2tCdG4odGhpcy5wMWM0KTtcclxuICAgICAgICAgICAgdGhpcy5sb2NrQnRuKHRoaXMucDJjNCk7XHJcbiAgICAgICAgICAgIGlmKHRoaXMucGxheWVyMy5hY3RpdmUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9ja0J0bih0aGlzLnAzYzQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKHRoaXMucGxheWVyNC5hY3RpdmUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9ja0J0bih0aGlzLnA0YzQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxvY2tCdG4oYnRuOiBjYy5CdXR0b24pIHtcclxuICAgICAgICBidG4ubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkxvY2tlZEJhY2tncm91bmRcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgc2VsZWN0ZWQoY2hhclR5cGUsIGlkeCkge1xyXG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIlBsYXllciBcIiArIGlkeCArIFwiIENoYXJcIiwgY2hhclR5cGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFRvdGFsUGxheWVyKCkge1xyXG4gICAgICAgIGlmKHRoaXMucGxheWVyTnVtID09IFwiMlwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyMy5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXI0LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLnBsYXllck51bSA9PSBcIjNcIikge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllcjQuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxvYWRQbGF5ZXJOYW1lKCkge1xyXG4gICAgICAgIHRoaXMucGxheWVyMU5hbWUuc3RyaW5nID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiUGxheWVyIDEgTmFtZVwiKTtcclxuICAgICAgICB0aGlzLnBsYXllcjJOYW1lLnN0cmluZyA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlBsYXllciAyIE5hbWVcIik7XHJcbiAgICAgICAgaWYodGhpcy5wbGF5ZXIzLmFjdGl2ZSkge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllcjNOYW1lLnN0cmluZyA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlBsYXllciAzIE5hbWVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMucGxheWVyNC5hY3RpdmUpIHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXI0TmFtZS5zdHJpbmcgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJQbGF5ZXIgNCBOYW1lXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn1cclxuIl19