"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var key_config_json_1 = __importDefault(require("./config/key-config.json"));
var ShiftCipher_1 = __importDefault(require("./ShiftCipher"));
var shiftCipher = new ShiftCipher_1.default();
setInterval(function () {
    var cipherObject = shiftCipher.cipher("abcd");
    console.log("str ciper: " + cipherObject.ciperText, "key: " + cipherObject.key);
    console.log("\ndecipher string: " + shiftCipher.decipher(cipherObject));
}, key_config_json_1.default.interval + 1000);
//# sourceMappingURL=main.js.map