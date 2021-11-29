export interface GetTelemetryResponse {
	temp_nozzle: number
	temp_bed: number
	material: string
	pos_z_mm: number
	printing_speed: number
	flow_factor: number
}

/*
export interface GetPrinterResponse {
	telemetry: {
		material: string
	}
	temperature: {
		tool0: {
			actual: number
			target: number
			offset: number
		}
		bed: {
			actual: number
			target: number
			offset: number
		}
		chamber: {
			actual: number
			target: number
			offset: number
		}
	}
	sd: {
		ready: number
	}
	state: {
		text: string
		flags: {
			operational: number
			paused: number
			printing: number
			cancelling: number
			pausing: number
			sdReady: number
			error: number
			ready: number
			closedOrError: number
			busy: number
		}
	}
}

export interface GetVersionResponse {
	api: string
	server: string
	text: string
	hostname: string
}

export interface GetJobResponse {
	job: {
		estimatedPrintTime: number
		file: {
			date: null
			name: string
			origin: string
			path: string
			size: number
		}
	}
	state: string
	progress: {
		completion: number
		filepos: any
		printTime: number
		printTimeLeft: number
		pos_z_mm: number
		printSpeed: number
		flow_factor: number
		filament_status: number
	}
	filament: {
		length: number
		volume: number
	}
}

export interface GetFilesResponse {
	files: {
		local: {
			name: string
			origin: string
		}
	}
	done: number
}
*/
