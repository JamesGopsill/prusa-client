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
    getTelemetry(): Promise<printer.GetTelemetryResponse>;
}
