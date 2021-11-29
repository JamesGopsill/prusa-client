import isIp from "is-ip"
import * as printer from "./printer"

// Exporting all the interface alongside.
export * from "./printer/interfaces"

/**
 * Prusae Client Class
 *
 * 
 */
export class PrusaClient {
	public readonly ip: string
	public readonly baseURL: string

	constructor(ip: string) {

		// Perform some checks on initialisation

		if (!isIp.v4(ip)) {
			throw new TypeError("[PrusaClient] Invalid IP address")
		}

		this.ip = ip
		this.baseURL = `http://${ip}`
	}

	public getTelemetry() {
		return printer.getTelemetry(this.baseURL)
	}

	/* Not implemented yet

	public postGCode(command: string) {
		return printer.postGCode(this.baseURL, command)
	}
	
	public getPrinter() {
		return printer.getPrinter(this.baseURL)
	}

	public getVersion() {
		return printer.getVersion(this.baseURL)
	}

	public getFiles() {
		return printer.getFiles(this.baseURL)
	}

	public getJob() {
		return printer.getJob(this.baseURL)
	}
	
	*/
	
}