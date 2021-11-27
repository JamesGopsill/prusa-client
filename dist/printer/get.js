"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFiles = exports.getJob = exports.getVersion = exports.getPrinter = void 0;
const helpers_1 = require("../helpers");
const getPrinter = (baseURL) => {
    const url = `${baseURL}/api/printer`;
    return (0, helpers_1.get)(url);
};
exports.getPrinter = getPrinter;
const getVersion = (baseURL) => {
    const url = `${baseURL}/api/version`;
    return (0, helpers_1.get)(url);
};
exports.getVersion = getVersion;
const getJob = (baseURL) => {
    const url = `${baseURL}/api/job`;
    return (0, helpers_1.get)(url);
};
exports.getJob = getJob;
const getFiles = (baseURL) => {
    const url = `${baseURL}/api/files`;
    return (0, helpers_1.get)(url);
};
exports.getFiles = getFiles;
