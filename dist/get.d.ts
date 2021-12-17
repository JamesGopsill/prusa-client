import { Base } from "./base";
import { GetTelemetryResponse } from "./interfaces";
/**
 * Features all the GET requests to the Prusa Mini
 *
 *
 */
export declare class Get extends Base {
    /**
     * Gets the telemetry from the Prusa Mini
     *
     *
     */
    getTelemetry(): Promise<GetTelemetryResponse>;
}
