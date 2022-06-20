
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/chooseMap.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '901b4glBGxClKjmrMmHjTra', 'chooseMap');
// scripts/chooseMap.ts

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
var chooseMap = /** @class */ (function (_super) {
    __extends(chooseMap, _super);
    function chooseMap() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bgm = null;
        _this.click = null;
        _this.back = null;
        _this.map1btn = null;
        _this.map2btn = null;
        _this.map1 = "true";
        _this.map2 = "false";
        return _this;
    }
    chooseMap.prototype.onLoad = function () {
        if (!cc.audioEngine.isMusicPlaying()) {
            this.playBGM();
        }
        this.loadMapAsset();
        this.loadSelectMapBtn();
    };
    chooseMap.prototype.start = function () {
        this.menuMouseOn();
    };
    // update (dt) {}
    chooseMap.prototype.playBGM = function () {
        cc.audioEngine.playMusic(this.bgm, true);
    };
    chooseMap.prototype.loadMapAsset = function () {
        this.map1 = cc.sys.localStorage.getItem("purple");
        this.map2 = cc.sys.localStorage.getItem("forest");
    };
    chooseMap.prototype.loadSelectMapBtn = function () {
        if (this.map1 == "true") {
            this.lockBtn(this.map1btn);
        }
        if (this.map2 == "true") {
            this.lockBtn(this.map2btn);
        }
    };
    chooseMap.prototype.lockBtn = function (btn) {
        btn.node.getChildByName("LockedBackground").active = false;
    };
    chooseMap.prototype.menuMouseOn = function () {
        var _this = this;
        this.back.node.on(cc.Node.EventType.MOUSE_DOWN, function () {
            _this.playClickAudio();
            _this.loadScene("character choose");
        });
        this.map1btn.node.on(cc.Node.EventType.MOUSE_DOWN, function () {
            if (_this.map1 == "true") {
                _this.playClickAudio();
                _this.loadScene("map1");
            }
        });
        this.map2btn.node.on(cc.Node.EventType.MOUSE_DOWN, function () {
            if (_this.map2 == "true") {
                _this.playClickAudio();
                _this.loadScene("map2");
            }
        });
    };
    chooseMap.prototype.playClickAudio = function () {
        cc.audioEngine.playEffect(this.click, false);
    };
    chooseMap.prototype.loadScene = function (scene) {
        cc.audioEngine.stopAll();
        cc.director.loadScene("loading", function () {
            cc.director.loadScene(scene);
        });
    };
    __decorate([
        property(cc.AudioClip)
    ], chooseMap.prototype, "bgm", void 0);
    __decorate([
        property(cc.AudioClip)
    ], chooseMap.prototype, "click", void 0);
    __decorate([
        property(cc.Button)
    ], chooseMap.prototype, "back", void 0);
    __decorate([
        property(cc.Button)
    ], chooseMap.prototype, "map1btn", void 0);
    __decorate([
        property(cc.Button)
    ], chooseMap.prototype, "map2btn", void 0);
    chooseMap = __decorate([
        ccclass
    ], chooseMap);
    return chooseMap;
}(cc.Component));
exports.default = chooseMap;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcY2hvb3NlTWFwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXVDLDZCQUFZO0lBQW5EO1FBQUEscUVBc0ZDO1FBbkZHLFNBQUcsR0FBaUIsSUFBSSxDQUFDO1FBR3pCLFdBQUssR0FBaUIsSUFBSSxDQUFDO1FBRzNCLFVBQUksR0FBYyxJQUFJLENBQUM7UUFHdkIsYUFBTyxHQUFjLElBQUksQ0FBQztRQUcxQixhQUFPLEdBQWMsSUFBSSxDQUFDO1FBRWxCLFVBQUksR0FBVyxNQUFNLENBQUM7UUFFdEIsVUFBSSxHQUFXLE9BQU8sQ0FBQzs7SUFtRW5DLENBQUM7SUFqRUcsMEJBQU0sR0FBTjtRQUNJLElBQUcsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLGNBQWMsRUFBRSxFQUFFO1lBQ2pDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUNsQjtRQUNELElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQseUJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUQsaUJBQWlCO0lBRWpCLDJCQUFPLEdBQVA7UUFDSSxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRCxnQ0FBWSxHQUFaO1FBQ0ksSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVELG9DQUFnQixHQUFoQjtRQUNJLElBQUcsSUFBSSxDQUFDLElBQUksSUFBSSxNQUFNLEVBQUU7WUFDcEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDOUI7UUFDRCxJQUFHLElBQUksQ0FBQyxJQUFJLElBQUksTUFBTSxFQUFFO1lBQ3BCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzlCO0lBQ0wsQ0FBQztJQUVELDJCQUFPLEdBQVAsVUFBUSxHQUFHO1FBQ1AsR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQy9ELENBQUM7SUFFRCwrQkFBVyxHQUFYO1FBQUEsaUJBaUJDO1FBaEJHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUU7WUFDNUMsS0FBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3RCLEtBQUksQ0FBQyxTQUFTLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUN2QyxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUU7WUFDL0MsSUFBRyxLQUFJLENBQUMsSUFBSSxJQUFJLE1BQU0sRUFBRTtnQkFDcEIsS0FBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUN0QixLQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQzFCO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFO1lBQy9DLElBQUcsS0FBSSxDQUFDLElBQUksSUFBSSxNQUFNLEVBQUU7Z0JBQ3BCLEtBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDdEIsS0FBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUMxQjtRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELGtDQUFjLEdBQWQ7UUFDSSxFQUFFLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFRCw2QkFBUyxHQUFULFVBQVUsS0FBYTtRQUNuQixFQUFFLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3pCLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRTtZQUM3QixFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqQyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFsRkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzswQ0FDRTtJQUd6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDOzRDQUNJO0lBRzNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7MkNBQ0c7SUFHdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs4Q0FDTTtJQUcxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzhDQUNNO0lBZlQsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQXNGN0I7SUFBRCxnQkFBQztDQXRGRCxBQXNGQyxDQXRGc0MsRUFBRSxDQUFDLFNBQVMsR0FzRmxEO2tCQXRGb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgY2hvb3NlTWFwIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKVxyXG4gICAgYmdtOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXHJcbiAgICBjbGljazogY2MuQXVkaW9DbGlwID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxyXG4gICAgYmFjazogY2MuQnV0dG9uID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxyXG4gICAgbWFwMWJ0bjogY2MuQnV0dG9uID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxyXG4gICAgbWFwMmJ0bjogY2MuQnV0dG9uID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIG1hcDE6IHN0cmluZyA9IFwidHJ1ZVwiO1xyXG5cclxuICAgIHByaXZhdGUgbWFwMjogc3RyaW5nID0gXCJmYWxzZVwiO1xyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgaWYoIWNjLmF1ZGlvRW5naW5lLmlzTXVzaWNQbGF5aW5nKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5QkdNKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubG9hZE1hcEFzc2V0KCk7XHJcbiAgICAgICAgdGhpcy5sb2FkU2VsZWN0TWFwQnRuKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIHRoaXMubWVudU1vdXNlT24oKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG5cclxuICAgIHBsYXlCR00oKSB7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheU11c2ljKHRoaXMuYmdtLCB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkTWFwQXNzZXQoKXtcclxuICAgICAgICB0aGlzLm1hcDEgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwdXJwbGVcIik7XHJcbiAgICAgICAgdGhpcy5tYXAyID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZm9yZXN0XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWRTZWxlY3RNYXBCdG4oKSB7XHJcbiAgICAgICAgaWYodGhpcy5tYXAxID09IFwidHJ1ZVwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9ja0J0bih0aGlzLm1hcDFidG4pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLm1hcDIgPT0gXCJ0cnVlXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5sb2NrQnRuKHRoaXMubWFwMmJ0bik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxvY2tCdG4oYnRuKSB7XHJcbiAgICAgICAgYnRuLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJMb2NrZWRCYWNrZ3JvdW5kXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIG1lbnVNb3VzZU9uKCkge1xyXG4gICAgICAgIHRoaXMuYmFjay5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0RPV04sICgpPT57XHJcbiAgICAgICAgICAgIHRoaXMucGxheUNsaWNrQXVkaW8oKTtcclxuICAgICAgICAgICAgdGhpcy5sb2FkU2NlbmUoXCJjaGFyYWN0ZXIgY2hvb3NlXCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMubWFwMWJ0bi5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0RPV04sICgpPT57XHJcbiAgICAgICAgICAgIGlmKHRoaXMubWFwMSA9PSBcInRydWVcIikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5Q2xpY2tBdWRpbygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkU2NlbmUoXCJtYXAxXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5tYXAyYnRuLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfRE9XTiwgKCk9PntcclxuICAgICAgICAgICAgaWYodGhpcy5tYXAyID09IFwidHJ1ZVwiKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXlDbGlja0F1ZGlvKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRTY2VuZShcIm1hcDJcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwbGF5Q2xpY2tBdWRpbygpe1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5jbGljaywgZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWRTY2VuZShzY2VuZTogc3RyaW5nKSB7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcEFsbCgpO1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcImxvYWRpbmdcIiwgKCk9PntcclxuICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKHNjZW5lKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSJdfQ==