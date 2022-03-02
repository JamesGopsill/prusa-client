# Prusa Client

![GitHub package.json version](https://img.shields.io/github/package-json/v/JamesGopsill/prusa-client)
![GitHub repo size](https://img.shields.io/github/repo-size/JamesGopsill/prusa-client)
![GitHub](https://img.shields.io/github/license/JamesGopsill/prusa-client)

![GitHub package.json dynamic](https://img.shields.io/github/package-json/description/JamesGopsill/prusa-client)

![GitHub package.json dynamic](https://img.shields.io/github/package-json/keywords/JamesGopsill/prusa-client)

The client has been developed as part of a research programme investigating agent-based manufacturing systems. It is isomorphic and able to both server (Node.js) and client-side (Browser).

Please note. The Prusa Mini+ API is still under development and we will try and keep in line with their main branch.

## Contents

- [Connecting the Prusa Mini+ to your LAN](#connecting-the-prusa-mini-to-your-lan)
- [Using prusa-client](#prusa-client)

## Connecting the Prusa Mini+ to your LAN

We have a separate local lan for testing in the lab and we had trouble with the Prusa Mini+ picking up an IP address through DHCP (firmware 4.3.3). In order to connect to it the network, we had to set a static IP address on the machine. To do this, create an text file on a USB stick and title it `lan_settings.ini`. Within that file, add your LAN configuration (exclude the comments):

```ini
[lan_ip4]
type=static
hostname=PrusaMini # Name it what you like
address=[IP_ADDRESS] # The address you will want to enter you in your browser
subnet=[SUBNET_ADDRESS] # Usually 255.255.xxx.xxx, you can find this on your other devices connected to the network
gateway=[IP_ADDRESS] # We did not need this
```

Plug the USB stick into your printer and go to the LAN settings menu and click `Load Settings`. The settings should then update with the IP address being the one you entered in the ini file.

## Using prusa-client

To install the package, enter:

```
yarn add @jamesgopsill/prusa-client
```

You can then use in your code via by importing

```typescript
import { PrusaClient, ResponseError } from "prusa-client"

// Create a new client.
const client = new PrusaClient("PRUSA_IP_ADDRESS")

// Retrieve the name of your printer.
try {
	const telemetry = await client.getTelemetry()
	console.log(telemetry)
} catch (err) { // Promise reject will most likely return the response that resulted in the error.
	if (err instanceOf ResponseError) {
		console.log(err.response.status)
	}
}
```

## Docs

The docs have been produced using [TypeDoc](https://typedoc.org/) and can be accessed [here](https://jamesgopsill.github.io/prusa-client/).

## Testing

Testing uses jest. We are using Prusa Mini+ in the lab and are currently testing with printers using version [4.3.4 firmware](https://github.com/prusa3d/Prusa-Firmware-Buddy).

To test the functionality, make sure you have an Prusa Mini+ on the network and create a `test.config.ts` file in the test directory (This is ignore by git via .gitignore). Then add the following export to make sure the tests know the ip address of the printer.

```
export const printerIPAddress = "123.456.789.101"
```

## Contributing

We would love to have additional contributors to the project to help us maintain and add functionality to the project.

## Support the Project

The project has been supported by the [EPSRC-funded Brokering Additive Manufacturing project (EP/V05113X/1)](https://gow.epsrc.ukri.org/NGBOViewGrant.aspx?GrantRef=EP/V05113X/1). More details on the project can be found at the [Design Manufacturing Futures Lab](https://dmf-lab.co.uk/) website.

To donate and provide continued support, please go to **[TODO]**.

## References

- [Prusa Firmware Buddy](https://github.com/prusa3d/Prusa-Firmware-Buddy)
- [Reference structure for an API client](https://github.com/ilyamkin/dev-to-js)
- [Typescript Mixins](https://www.typescriptlang.org/docs/handbook/mixins.html)