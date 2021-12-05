import {MyShape} from "./shape";
export class Rectangle extends MyShape implements IArea{
    constructor(x: number, y: number, private _width: number, private _height: number) {
        super(x, y);
    }

    area(): number {
        return this._width*this._height;
    }

    get width() {
        return this._width;
    }

    set width(width: number) {
        this._width = width;
    }

    get height() {
        return this._height;
    }

    set height(height: number) {
        this._height = height;
    }

}