import { get } from "../helpers"
import {
	GetFilesResponse,
	GetJobResponse,
	GetPrinterResponse,
	GetVersionResponse,
} from "./interfaces"

export const getPrinter = (baseURL: string) => {
	const url = `${baseURL}/api/printer`
	return get<GetPrinterResponse>(url)
}

export const getVersion = (baseURL: string) => {
	const url = `${baseURL}/api/version`
	return get<GetVersionResponse>(url)
}

export const getJob = (baseURL: string) => {
	const url = `${baseURL}/api/job`
	return get<GetJobResponse>(url)
}

export const getFiles = (baseURL: string) => {
	const url = `${baseURL}/api/files`
	return get<GetFilesResponse>(url)
}
