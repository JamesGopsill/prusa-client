"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postGCode = void 0;
const helpers_1 = require("../helpers");
const postGCode = (baseURL, command) => {
    const url = `${baseURL}/api/g-code`;
    const bodyArgs = {
        command,
    };
    return (0, helpers_1.post)(url, 200, bodyArgs);
};
exports.postGCode = postGCode;
