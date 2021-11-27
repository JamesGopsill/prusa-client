import { post } from "../helpers"

export const postGCode = (baseURL: string, command: string) => {
	const url = `${baseURL}/api/g-code`
	const bodyArgs = {
		command,
	}
	return post(url, 200, bodyArgs)
}
