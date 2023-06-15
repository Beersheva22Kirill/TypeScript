import keyConfig from "./config/key-config.json";
import ShiftCipher from "./ShiftCipher";

const shiftCipher = new ShiftCipher();

setInterval(() => {
    const cipherObject:CipherType = shiftCipher.cipher("abcd");
    console.log("str ciper: " + cipherObject.ciperText, "key: " + cipherObject.key);
    console.log("\ndecipher string: " + shiftCipher.decipher(cipherObject));
},keyConfig.interval + 1000)




