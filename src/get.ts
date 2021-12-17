import { Base } from "./base"
import { GetTelemetryResponse } from "./interfaces"

/**
 * Features all the GET requests to the Prusa Mini
 *
 *
 */
export class Get extends Base {
	/**
	 * Gets the telemetry from the Prusa Mini
	 *
	 *
	 */
	public getTelemetry() {
		const url = `${this.baseURL}/api/telemetry`
		return this.get<GetTelemetryResponse>(url)
	}
}
