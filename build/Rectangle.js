"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Rectangle = (function () {
    function Rectangle(_width, _heigth) {
        this._width = _width;
        this._heigth = _heigth;
    }
    Rectangle.prototype.perimetr = function () {
        return (this._heigth + this._width) * 2;
    };
    Rectangle.prototype.square = function () {
        return this._heigth * this._width;
    };
    Object.defineProperty(Rectangle.prototype, "width", {
        get: function () {
            return this._width;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "heigth", {
        get: function () {
            return this._heigth;
        },
        enumerable: false,
        configurable: true
    });
    return Rectangle;
}());
exports.default = Rectangle;
//# sourceMappingURL=Rectangle.js.map