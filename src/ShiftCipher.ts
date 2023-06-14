import CipherDecipher from "./CipherDecipher";
const RANGE = {min:1, max:126};

export default class ShiftCipher implements CipherDecipher {
    
    private _baseKey:Map<string,number>;
    private _key:number;

    constructor(){
        this._baseKey = new Map();
        this._key = Math.trunc(RANGE.min + Math.random() * (RANGE.max - RANGE.min))
    }

    cipher(text: string): CipherType { 
        let res = ""
        Array.from(text).forEach(e => {
            let index:number = e.charCodeAt(0) + this._key;
            if (index > "~".charCodeAt(0)) {
                index = index - ("~".charCodeAt(0) - " ".charCodeAt(0)) - 1;
            }
            res += String.fromCharCode(index)
        })

        const time = new Date();
        this._baseKey.set(time.toISOString(),this._key);
        let cipherRes:CipherType = {key:time.toISOString(),ciperText: res}
        return cipherRes;
    }

    decipher(cipher: CipherType): string {
        const keyForDecipher = this._baseKey.get(cipher.key);
        let res = ""
        
        Array.from(cipher.ciperText).forEach(e => {
            let index = e.charCodeAt(0) - keyForDecipher;
            if (index < " ".charCodeAt(0)) {
                index += ("~".charCodeAt(0) - " ".charCodeAt(0)) + 1;    
            }
            res += String.fromCharCode(index)
        })

        return res;
    }

    updateKey(): void {
        this._key = this._key = Math.trunc(RANGE.min + Math.random() * (RANGE.max - RANGE.min))
    }
    
}