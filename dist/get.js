"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Get = void 0;
const base_1 = require("./base");
/**
 * Features all the GET requests to the Prusa Mini
 *
 *
 */
class Get extends base_1.Base {
    /**
     * Gets the telemetry from the Prusa Mini
     *
     *
     */
    getTelemetry() {
        const url = `${this.baseURL}/api/telemetry`;
        return this.get(url);
    }
}
exports.Get = Get;
