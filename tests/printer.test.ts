import { PrusaClient } from "../src"
import { printerIPAddress } from "./test.config"

const client = new PrusaClient(printerIPAddress)

test("GET telemetry", async () => {
	const v = await client.getTelemetry()
	console.log(v)
	expect(typeof v).toBe("object")
})
