
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Ground2.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c4825SrSX9Dg4uXzK4Qa7oU', 'Ground2');
// scripts/Ground2.ts

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
var Ground2 = /** @class */ (function (_super) {
    __extends(Ground2, _super);
    function Ground2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.groundPrefab = null;
        _this.Bound = -223; // base
        _this.growDir = 0;
        return _this;
    }
    Ground2.prototype.onLoad = function () {
        this.createBlocks();
    };
    Ground2.prototype.start = function () {
    };
    Ground2.prototype.update = function (dt) {
    };
    Ground2.prototype.createBlocks = function () {
        var newY;
        var counter;
        if (this.growDir == 0) {
            newY = this.node.y - 15;
            counter = 1;
            while (newY >= this.Bound) {
                newY = this.node.y - (15 * counter);
                var newBlock = cc.instantiate(this.groundPrefab);
                newBlock.parent = this.node.parent;
                newBlock.setPosition(this.node.x, newY);
                counter++;
            }
        }
        else {
            newY = this.node.y + 15;
            counter = 1;
            while (newY <= this.Bound) {
                newY = this.node.y + (15 * counter) - 4;
                var newBlock = cc.instantiate(this.groundPrefab);
                newBlock.parent = this.node.parent;
                newBlock.setPosition(this.node.x, newY);
                counter++;
            }
        }
    };
    Ground2.prototype.onBeginContact = function (contact, self, other) {
        var _this = this;
        if (other.node.group == "bullet" || other.node.group == "explosiveObj") {
            this.node.getChildByName("particle").active = true;
            this.scheduleOnce(function () {
                _this.node.destroy();
            }, 0.3);
        }
    };
    __decorate([
        property(cc.Prefab)
    ], Ground2.prototype, "groundPrefab", void 0);
    __decorate([
        property()
    ], Ground2.prototype, "Bound", void 0);
    __decorate([
        property()
    ], Ground2.prototype, "growDir", void 0);
    Ground2 = __decorate([
        ccclass
    ], Ground2);
    return Ground2;
}(cc.Component));
exports.default = Ground2;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcR3JvdW5kMi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFxQywyQkFBWTtJQUFqRDtRQUFBLHFFQTREQztRQXpEVyxrQkFBWSxHQUFjLElBQUksQ0FBQztRQUd2QyxXQUFLLEdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPO1FBRzdCLGFBQU8sR0FBVyxDQUFDLENBQUM7O0lBbUR4QixDQUFDO0lBakRHLHdCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVELHVCQUFLLEdBQUw7SUFFQSxDQUFDO0lBRUQsd0JBQU0sR0FBTixVQUFRLEVBQUU7SUFFVixDQUFDO0lBRUQsOEJBQVksR0FBWjtRQUNJLElBQUksSUFBSSxDQUFDO1FBQ1QsSUFBSSxPQUFPLENBQUM7UUFDWixJQUFHLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxFQUFDO1lBQ2pCLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDeEIsT0FBTyxHQUFHLENBQUMsQ0FBQztZQUNaLE9BQU0sSUFBSSxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUM7Z0JBQ3JCLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxPQUFPLENBQUMsQ0FBQztnQkFDcEMsSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQ2pELFFBQVEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7Z0JBQ25DLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQ3hDLE9BQU8sRUFBRSxDQUFDO2FBQ2I7U0FDSjthQUFLO1lBQ0YsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUN4QixPQUFPLEdBQUcsQ0FBQyxDQUFDO1lBQ1osT0FBTSxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssRUFBQztnQkFDckIsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDeEMsSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQ2pELFFBQVEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7Z0JBQ25DLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQ3hDLE9BQU8sRUFBRSxDQUFDO2FBQ2I7U0FDSjtJQUVMLENBQUM7SUFFRCxnQ0FBYyxHQUFkLFVBQWUsT0FBTyxFQUFFLElBQUksRUFBRSxLQUFLO1FBQW5DLGlCQVNDO1FBUkcsSUFBRyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxRQUFRLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksY0FBYyxFQUFFO1lBQ25FLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFFbkQsSUFBSSxDQUFDLFlBQVksQ0FBQztnQkFDZCxLQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3hCLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUVYO0lBQ0wsQ0FBQztJQXhERDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2lEQUNtQjtJQUd2QztRQURDLFFBQVEsRUFBRTswQ0FDVTtJQUdyQjtRQURDLFFBQVEsRUFBRTs0Q0FDUztJQVRILE9BQU87UUFEM0IsT0FBTztPQUNhLE9BQU8sQ0E0RDNCO0lBQUQsY0FBQztDQTVERCxBQTREQyxDQTVEb0MsRUFBRSxDQUFDLFNBQVMsR0E0RGhEO2tCQTVEb0IsT0FBTyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JvdW5kMiBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcclxuICAgIHByaXZhdGUgZ3JvdW5kUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSgpXHJcbiAgICBCb3VuZDogbnVtYmVyID0gLTIyMzsgLy8gYmFzZVxyXG5cclxuICAgIEBwcm9wZXJ0eSgpXHJcbiAgICBncm93RGlyOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVCbG9ja3MoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlQmxvY2tzKCl7XHJcbiAgICAgICAgbGV0IG5ld1k7XHJcbiAgICAgICAgbGV0IGNvdW50ZXI7XHJcbiAgICAgICAgaWYodGhpcy5ncm93RGlyID09IDApe1xyXG4gICAgICAgICAgICBuZXdZID0gdGhpcy5ub2RlLnkgLSAxNTtcclxuICAgICAgICAgICAgY291bnRlciA9IDE7XHJcbiAgICAgICAgICAgIHdoaWxlKG5ld1kgPj0gdGhpcy5Cb3VuZCl7XHJcbiAgICAgICAgICAgICAgICBuZXdZID0gdGhpcy5ub2RlLnkgLSAoMTUgKiBjb3VudGVyKTtcclxuICAgICAgICAgICAgICAgIGxldCBuZXdCbG9jayA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZ3JvdW5kUHJlZmFiKTtcclxuICAgICAgICAgICAgICAgIG5ld0Jsb2NrLnBhcmVudCA9IHRoaXMubm9kZS5wYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICBuZXdCbG9jay5zZXRQb3NpdGlvbih0aGlzLm5vZGUueCwgbmV3WSk7XHJcbiAgICAgICAgICAgICAgICBjb3VudGVyKys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICAgIG5ld1kgPSB0aGlzLm5vZGUueSArIDE1O1xyXG4gICAgICAgICAgICBjb3VudGVyID0gMTtcclxuICAgICAgICAgICAgd2hpbGUobmV3WSA8PSB0aGlzLkJvdW5kKXtcclxuICAgICAgICAgICAgICAgIG5ld1kgPSB0aGlzLm5vZGUueSArICgxNSAqIGNvdW50ZXIpIC0gNDtcclxuICAgICAgICAgICAgICAgIGxldCBuZXdCbG9jayA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZ3JvdW5kUHJlZmFiKTtcclxuICAgICAgICAgICAgICAgIG5ld0Jsb2NrLnBhcmVudCA9IHRoaXMubm9kZS5wYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICBuZXdCbG9jay5zZXRQb3NpdGlvbih0aGlzLm5vZGUueCwgbmV3WSk7XHJcbiAgICAgICAgICAgICAgICBjb3VudGVyKys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG9uQmVnaW5Db250YWN0KGNvbnRhY3QsIHNlbGYsIG90aGVyKSB7XHJcbiAgICAgICAgaWYob3RoZXIubm9kZS5ncm91cCA9PSBcImJ1bGxldFwiIHx8IG90aGVyLm5vZGUuZ3JvdXAgPT0gXCJleHBsb3NpdmVPYmpcIikge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwYXJ0aWNsZVwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCk9PntcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIH0sIDAuMyk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=