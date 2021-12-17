/**
 * ResponseError to retun any response errors to the user.
 */
export declare class ResponseError extends Error {
    response: Response;
    constructor(response: Response);
}
/**
 * The base class to build the API client from
 */
export declare abstract class Base {
    readonly ip: string;
    readonly baseURL: string;
    constructor(ip: string);
    /**
     * An internal get request function
     */
    protected get<Type>(url: string, bodyArgs?: {}): Promise<Type>;
}
