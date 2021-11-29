import { fetch } from "cross-fetch"

export const get = <Type>(url: string, bodyArgs?: {}) => {
	return new Promise<Type>(async (resolve, reject) => {
		let res

		if (typeof bodyArgs != "undefined") {
			res = await fetch(url, {
				method: "GET",
				mode: "cors",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
				body: JSON.stringify(bodyArgs),
			})
		} else {
			res = await fetch(url, {
				method: "GET",
				mode: "cors",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
			})
		}

		if (res.status == 200) resolve(res.json())
		reject(res)
	})
}

export const post = (url: string, expectedStatusCode: number, bodyArgs: {}) => {
	return new Promise<boolean>(async (resolve, reject) => {
		const res = await fetch(url, {
			method: "POST",
			mode: "cors",
			headers: {
				"Content-Type": "application/json",
				//Accept: "application/json",
			},
			body: JSON.stringify(bodyArgs),
		})

		if (res.status == expectedStatusCode) resolve(true)
		reject(res)
	})
}
