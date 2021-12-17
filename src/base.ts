import { fetch } from "cross-fetch"
import isIp from "is-ip"

/**
 * ResponseError to retun any response errors to the user.
 */
export class ResponseError extends Error {
	public response: Response

	constructor(response: Response) {
		super("Check error.response for the response from the server.")
		this.name = "ResponseError"
		this.message = "Check error.response for the response from the server."
		this.response = response
	}
}

/**
 * The base class to build the API client from
 */
export abstract class Base {
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

	/**
	 * An internal get request function
	 */
	protected async get<Type>(url: string, bodyArgs?: {}): Promise<Type> {
		if (typeof bodyArgs != "undefined") {
			bodyArgs = {}
		}

		return fetch(url, {
			method: "GET",
			mode: "cors",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			body: JSON.stringify(bodyArgs),
		}).then((r) => {
			if (r.ok) {
				return r.json()
			}
			throw new ResponseError(r)
		})
	}
}
