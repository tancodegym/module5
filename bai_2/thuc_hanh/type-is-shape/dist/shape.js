"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyShape = void 0;
class MyShape {
    constructor(x, y) {
        this._x = x;
        this._y = y;
    }
    get y() {
        return this._y;
    }
    set y(y) {
        this._y = y;
    }
    get x() {
        return this._x;
    }
    set x(x) {
        this._x = x;
    }
    toString() {
        return `(x: ${this._x}, y: ${this._y})`;
    }
}
exports.MyShape = MyShape;
//# sourceMappingURL=shape.js.map