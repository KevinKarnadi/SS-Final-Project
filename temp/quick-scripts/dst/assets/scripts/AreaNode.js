
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/AreaNode.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4f5a1/djLhCfKe8u7jC1q0z', 'AreaNode');
// scripts/AreaNode.ts

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
var AreaNode = /** @class */ (function (_super) {
    __extends(AreaNode, _super);
    function AreaNode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.miniMapUi = null;
        _this.gameManager = null;
        _this.activePanel = "0";
        return _this;
    }
    AreaNode.prototype.onLoad = function () {
        this.node.on(cc.Node.EventType.MOUSE_ENTER, this.onMouseEnter, this);
        this.node.on(cc.Node.EventType.MOUSE_DOWN, this.onMouseDown, this);
        this.node.on(cc.Node.EventType.MOUSE_LEAVE, this.onMouseLeave, this);
        this.node.on(cc.Node.EventType.MOUSE_MOVE, this.onMouseMove, this);
        this.node.on(cc.Node.EventType.MOUSE_UP, this.onMouseUp, this);
    };
    AreaNode.prototype.start = function () {
    };
    AreaNode.prototype.update = function (dt) {
    };
    AreaNode.prototype.onMouseEnter = function (event) {
    };
    AreaNode.prototype.onMouseDown = function (event) {
        // console.log(event.getLocationX(), event.getLocationY(), "click");
        // x: 690 800; y: 520 630 left 
        // x: 830 940; y: 520 630 right
        if (event.getLocationX() >= 830 && event.getLocationX() <= 940 &&
            event.getLocationY() >= 520 && event.getLocationY() <= 630) {
            this.miniMapUi.getChildByName("rightPanel").active = true;
            this.activePanel = "right";
            this.setCameraAnchor(1);
        }
        if (event.getLocationX() >= 690 && event.getLocationX() <= 800 &&
            event.getLocationY() >= 520 && event.getLocationY() <= 630) {
            this.miniMapUi.getChildByName("leftPanel").active = true;
            this.activePanel = "left";
            this.setCameraAnchor(-1);
        }
        if (!(event.getLocationX() >= 690 && event.getLocationX() <= 800 &&
            event.getLocationY() >= 520 && event.getLocationY() <= 630) &&
            !(event.getLocationX() >= 830 && event.getLocationX() <= 940 &&
                event.getLocationY() >= 520 && event.getLocationY() <= 630)) {
            this.miniMapUi.getChildByName("leftPanel").active = false;
            this.miniMapUi.getChildByName("rightPanel").active = false;
            this.activePanel = "0";
            this.setCameraAnchor(0);
        }
    };
    AreaNode.prototype.onMouseLeave = function (event) {
    };
    AreaNode.prototype.onMouseUp = function (event) {
        this.miniMapUi.getChildByName("leftPanel").active = false;
        this.miniMapUi.getChildByName("rightPanel").active = false;
        this.activePanel = "0";
        this.setCameraAnchor(0);
    };
    AreaNode.prototype.onMouseMove = function (event) {
        if (this.activePanel == "right") {
            if (!(event.getLocationX() >= 830 && event.getLocationX() <= 940 &&
                event.getLocationY() >= 520 && event.getLocationY() <= 630)) {
                this.miniMapUi.getChildByName("leftPanel").active = false;
                this.miniMapUi.getChildByName("rightPanel").active = false;
                this.activePanel = "0";
                this.setCameraAnchor(0);
            }
        }
        if (this.activePanel == "left") {
            if (!(event.getLocationX() >= 690 && event.getLocationX() <= 800 &&
                event.getLocationY() >= 520 && event.getLocationY() <= 630)) {
                this.miniMapUi.getChildByName("leftPanel").active = false;
                this.miniMapUi.getChildByName("rightPanel").active = false;
                this.activePanel = "0";
                this.setCameraAnchor(0);
            }
        }
    };
    AreaNode.prototype.setCameraAnchor = function (value) {
        // console.log(value, "set");
        this.gameManager.getComponent("GameManager").setCameraAnchor(value);
    };
    __decorate([
        property(cc.Node)
    ], AreaNode.prototype, "miniMapUi", void 0);
    __decorate([
        property(cc.Node)
    ], AreaNode.prototype, "gameManager", void 0);
    AreaNode = __decorate([
        ccclass
    ], AreaNode);
    return AreaNode;
}(cc.Component));
exports.default = AreaNode;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQXJlYU5vZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUE4RkM7UUEzRkcsZUFBUyxHQUFZLElBQUksQ0FBQztRQUcxQixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUVwQixpQkFBVyxHQUFXLEdBQUcsQ0FBQzs7SUFzRnRDLENBQUM7SUFwRkcseUJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3JFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ25FLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3JFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ25FLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFFRCx3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QyxJQUFJLENBQUM7K0NBQ1E7SUFHMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztpREFDVTtJQU5YLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0E4RjVCO0lBQUQsZUFBQztDQTlGRCxBQThGQyxDQTlGcUMsRUFBRSxDQUFDLFNBQVMsR0E4RmpEO2tCQTlGb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXJlYU5vZGUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbWluaU1hcFVpOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGdhbWVNYW5hZ2VyOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIGFjdGl2ZVBhbmVsOiBzdHJpbmcgPSBcIjBcIjtcclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9FTlRFUiwgdGhpcy5vbk1vdXNlRW50ZXIsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9ET1dOLCB0aGlzLm9uTW91c2VEb3duLCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfTEVBVkUsIHRoaXMub25Nb3VzZUxlYXZlLCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfTU9WRSwgdGhpcy5vbk1vdXNlTW92ZSwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX1VQLCB0aGlzLm9uTW91c2VVcCwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUgKGR0KSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG9uTW91c2VFbnRlcihldmVudCl7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG9uTW91c2VEb3duKGV2ZW50KXtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhldmVudC5nZXRMb2NhdGlvblgoKSwgZXZlbnQuZ2V0TG9jYXRpb25ZKCksIFwiY2xpY2tcIik7XHJcbiAgICAgICAgLy8geDogNjkwIDgwMDsgeTogNTIwIDYzMCBsZWZ0IFxyXG4gICAgICAgIC8vIHg6IDgzMCA5NDA7IHk6IDUyMCA2MzAgcmlnaHRcclxuICAgICAgICBpZihldmVudC5nZXRMb2NhdGlvblgoKSA+PSA4MzAgJiYgZXZlbnQuZ2V0TG9jYXRpb25YKCkgPD0gOTQwICYmXHJcbiAgICAgICAgICAgIGV2ZW50LmdldExvY2F0aW9uWSgpID49IDUyMCAmJiBldmVudC5nZXRMb2NhdGlvblkoKSA8PSA2MzApe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5taW5pTWFwVWkuZ2V0Q2hpbGRCeU5hbWUoXCJyaWdodFBhbmVsXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZVBhbmVsID0gXCJyaWdodFwiO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRDYW1lcmFBbmNob3IoMSk7XHJcbiAgICAgICAgfSBcclxuICAgICAgICBpZihldmVudC5nZXRMb2NhdGlvblgoKSA+PSA2OTAgJiYgZXZlbnQuZ2V0TG9jYXRpb25YKCkgPD0gODAwICYmXHJcbiAgICAgICAgICAgIGV2ZW50LmdldExvY2F0aW9uWSgpID49IDUyMCAmJiBldmVudC5nZXRMb2NhdGlvblkoKSA8PSA2MzApe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5taW5pTWFwVWkuZ2V0Q2hpbGRCeU5hbWUoXCJsZWZ0UGFuZWxcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlUGFuZWwgPSBcImxlZnRcIjtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0Q2FtZXJhQW5jaG9yKC0xKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCEoZXZlbnQuZ2V0TG9jYXRpb25YKCkgPj0gNjkwICYmIGV2ZW50LmdldExvY2F0aW9uWCgpIDw9IDgwMCAmJlxyXG4gICAgICAgICAgICBldmVudC5nZXRMb2NhdGlvblkoKSA+PSA1MjAgJiYgZXZlbnQuZ2V0TG9jYXRpb25ZKCkgPD0gNjMwKSAmJiBcclxuICAgICAgICAgICAgIShldmVudC5nZXRMb2NhdGlvblgoKSA+PSA4MzAgJiYgZXZlbnQuZ2V0TG9jYXRpb25YKCkgPD0gOTQwICYmXHJcbiAgICAgICAgICAgIGV2ZW50LmdldExvY2F0aW9uWSgpID49IDUyMCAmJiBldmVudC5nZXRMb2NhdGlvblkoKSA8PSA2MzApKXtcclxuICAgICAgICAgICAgICAgIHRoaXMubWluaU1hcFVpLmdldENoaWxkQnlOYW1lKFwibGVmdFBhbmVsXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5taW5pTWFwVWkuZ2V0Q2hpbGRCeU5hbWUoXCJyaWdodFBhbmVsXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVQYW5lbCA9IFwiMFwiO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRDYW1lcmFBbmNob3IoMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uTW91c2VMZWF2ZShldmVudCl7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG9uTW91c2VVcChldmVudCl7XHJcbiAgICAgICAgdGhpcy5taW5pTWFwVWkuZ2V0Q2hpbGRCeU5hbWUoXCJsZWZ0UGFuZWxcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5taW5pTWFwVWkuZ2V0Q2hpbGRCeU5hbWUoXCJyaWdodFBhbmVsXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYWN0aXZlUGFuZWwgPSBcIjBcIjtcclxuICAgICAgICB0aGlzLnNldENhbWVyYUFuY2hvcigwKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgb25Nb3VzZU1vdmUoZXZlbnQpe1xyXG4gICAgICAgIGlmKHRoaXMuYWN0aXZlUGFuZWwgPT0gXCJyaWdodFwiKXtcclxuICAgICAgICAgICAgaWYoIShldmVudC5nZXRMb2NhdGlvblgoKSA+PSA4MzAgJiYgZXZlbnQuZ2V0TG9jYXRpb25YKCkgPD0gOTQwICYmXHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQuZ2V0TG9jYXRpb25ZKCkgPj0gNTIwICYmIGV2ZW50LmdldExvY2F0aW9uWSgpIDw9IDYzMCkpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5taW5pTWFwVWkuZ2V0Q2hpbGRCeU5hbWUoXCJsZWZ0UGFuZWxcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1pbmlNYXBVaS5nZXRDaGlsZEJ5TmFtZShcInJpZ2h0UGFuZWxcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZVBhbmVsID0gXCIwXCI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldENhbWVyYUFuY2hvcigwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLmFjdGl2ZVBhbmVsID09IFwibGVmdFwiKXtcclxuICAgICAgICAgICAgaWYoIShldmVudC5nZXRMb2NhdGlvblgoKSA+PSA2OTAgJiYgZXZlbnQuZ2V0TG9jYXRpb25YKCkgPD0gODAwICYmXHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQuZ2V0TG9jYXRpb25ZKCkgPj0gNTIwICYmIGV2ZW50LmdldExvY2F0aW9uWSgpIDw9IDYzMCkpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5taW5pTWFwVWkuZ2V0Q2hpbGRCeU5hbWUoXCJsZWZ0UGFuZWxcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1pbmlNYXBVaS5nZXRDaGlsZEJ5TmFtZShcInJpZ2h0UGFuZWxcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZVBhbmVsID0gXCIwXCI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldENhbWVyYUFuY2hvcigwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXRDYW1lcmFBbmNob3IodmFsdWUpe1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHZhbHVlLCBcInNldFwiKTtcclxuICAgICAgICB0aGlzLmdhbWVNYW5hZ2VyLmdldENvbXBvbmVudChcIkdhbWVNYW5hZ2VyXCIpLnNldENhbWVyYUFuY2hvcih2YWx1ZSk7XHJcbiAgICB9XHJcbn1cclxuIl19