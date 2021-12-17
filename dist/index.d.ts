import { Base } from "./base";
import { Get } from "./get";
/**
 * Inherits from all the other classes featuring the API calls to the Prusa.
 *
 *
 */
declare class PrusaClient extends Base {
}
interface PrusaClient extends Get {
}
export * from "./interfaces";
export { PrusaClient as PrusaClient };
