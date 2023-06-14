import Shape from "./Shape";

export default class Container implements Shape {
    private _shapes: Shape[];

    constructor(shapes: Shape[]){
        this._shapes = shapes.slice();
    }

    get shapes(){

        return this._shapes.slice()
    }

    perimetr(): number {
        return this._shapes.reduce((res,current) => res + current.perimetr(), 0);
    }
    square(): number {
        return this._shapes.reduce((res,current) => res + current.square(),0)
    }

    addShape(shape: Shape): void{
        this._shapes.push(shape);
    }
}