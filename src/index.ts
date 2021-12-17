import { Base } from "./base"
import { Get } from "./get"

function applyMixins(derivedCtor: any, constructors: any[]) {
	constructors.forEach((baseCtor) => {
		Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
			Object.defineProperty(
				derivedCtor.prototype,
				name,
				Object.getOwnPropertyDescriptor(baseCtor.prototype, name) ||
					Object.create(null)
			)
		})
	})
}

/**
 * Inherits from all the other classes featuring the API calls to the Prusa.
 *
 *
 */
class PrusaClient extends Base {}
interface PrusaClient extends Get {}
applyMixins(PrusaClient, [Get])

export * from "./interfaces"
export { PrusaClient as PrusaClient }
