import Shape from "./Shape";


export default class Rectangle implements Shape{

    constructor(private _width: number, private _heigth: number){

    }

    perimetr(): number {
        return (this._heigth + this._width) * 2;
    }
    square(): number {
        return this._heigth * this._width;
    }

    get width(){
        return this._width;
    }

    get heigth(){
        return this._heigth;
    }
    
}