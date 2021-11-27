import * as printer from "./printer";
export * from "./printer/interfaces";
/**
 * Prusae Client Class
 *
 *
 */
export declare class PrusaClient {
    readonly ip: string;
    readonly baseURL: string;
    constructor(ip: string);
    getPrinter(): Promise<printer.GetPrinterResponse>;
    getVersion(): Promise<printer.GetVersionResponse>;
    getFiles(): Promise<printer.GetFilesResponse>;
    getJob(): Promise<printer.GetJobResponse>;
    postGCode(command: string): Promise<boolean>;
}
