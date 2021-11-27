import { GetFilesResponse, GetJobResponse, GetPrinterResponse, GetVersionResponse } from "./interfaces";
export declare const getPrinter: (baseURL: string) => Promise<GetPrinterResponse>;
export declare const getVersion: (baseURL: string) => Promise<GetVersionResponse>;
export declare const getJob: (baseURL: string) => Promise<GetJobResponse>;
export declare const getFiles: (baseURL: string) => Promise<GetFilesResponse>;
