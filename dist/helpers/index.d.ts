export declare const get: <Type>(url: string, bodyArgs?: {} | undefined) => Promise<Type>;
export declare const post: (url: string, expectedStatusCode: number, bodyArgs: {}) => Promise<boolean>;
