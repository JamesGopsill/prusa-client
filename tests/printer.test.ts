import { PrusaClient } from "../src"
import { printerIPAddress } from "./test.config"

const client = new PrusaClient(printerIPAddress)

test("GET telemetry", async () => {
	const v = await client.getTelemetry()
	console.log(v)
	expect(typeof v).toBe("object")
})

/*


test("POST autohome gcode", async () => {
	try {
		const v = await client.postGCode("G28")
		expect(typeof v).toBe("object")
	} catch (res: any) {
		console.log(res)
		console.log(await res.text())
	}
})



test("GET version", async () => {
	try {
		const v = await client.getVersion()
		console.log(v)
		expect(typeof v).toBe("object")
	} catch (res: any) {
		console.log(res.status)
		console.log(res.statusText)
		const v = false
		expect(v).toBe(true)
	}
})

test("GET printer", async () => {
	try {
		const v = await client.getPrinter()
		console.log(v)
		expect(typeof v).toBe("object")
	} catch (res: any) {
		console.log(res.status)
		console.log(res.statusText)
		const v = false
		expect(v).toBe(true)
	}
})

test("GET job", async () => {
	try {
		const v = await client.getJob()
		console.log(v)
		expect(typeof v).toBe("object")
	} catch (res: any) {
		console.log(res.status)
		console.log(res.statusText)
		const v = false
		expect(v).toBe(true)
	}
})

test("GET files", async () => {
	try {
		const v = await client.getFiles()
		console.log(v)
		expect(typeof v).toBe("object")
	} catch (res: any) {
		console.log(res.status)
		console.log(res.statusText)
		const v = false
		expect(v).toBe(true)
	}
})
*/
