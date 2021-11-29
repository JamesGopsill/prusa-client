"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTelemetry = void 0;
const helpers_1 = require("../helpers");
const getTelemetry = (baseURL) => {
    const url = `${baseURL}/api/telemetry`;
    return (0, helpers_1.get)(url);
};
exports.getTelemetry = getTelemetry;
/*

export const getPrinter = (baseURL: string) => {
    const url = `${baseURL}/api/printer`
    return get<GetPrinterResponse>(url)
}

export const getVersion = (baseURL: string) => {
    const url = `${baseURL}/api/version`
    return get<GetVersionResponse>(url)
}

export const getJob = (baseURL: string) => {
    const url = `${baseURL}/api/job`
    return get<GetJobResponse>(url)
}

export const getFiles = (baseURL: string) => {
    const url = `${baseURL}/api/files`
    return get<GetFilesResponse>(url)
}
*/
