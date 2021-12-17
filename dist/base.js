"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Base = exports.ResponseError = void 0;
const cross_fetch_1 = require("cross-fetch");
const is_ip_1 = __importDefault(require("is-ip"));
/**
 * ResponseError to retun any response errors to the user.
 */
class ResponseError extends Error {
    constructor(response) {
        super("Check error.response for the response from the server.");
        this.name = "ResponseError";
        this.message = "Check error.response for the response from the server.";
        this.response = response;
    }
}
exports.ResponseError = ResponseError;
/**
 * The base class to build the API client from
 */
class Base {
    constructor(ip) {
        // Perform some checks on initialisation
        if (!is_ip_1.default.v4(ip)) {
            throw new TypeError("[PrusaClient] Invalid IP address");
        }
        this.ip = ip;
        this.baseURL = `http://${ip}`;
    }
    /**
     * An internal get request function
     */
    async get(url, bodyArgs) {
        if (typeof bodyArgs != "undefined") {
            bodyArgs = {};
        }
        return (0, cross_fetch_1.fetch)(url, {
            method: "GET",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(bodyArgs),
        }).then((r) => {
            if (r.ok) {
                return r.json();
            }
            throw new ResponseError(r);
        });
    }
}
exports.Base = Base;
