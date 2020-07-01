/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable no-param-reassign */
/* eslint-disable no-var */
/* eslint-disable camelcase */

// this file is stil a work in progress!
// the idea is to join design.document.ts and design-functions-context.d.ts in just one file that is importable
// today if we try to import any declared function the TS compiler throws Error: Cannot find module '../couchdb'

// Reference: https://docs.couchdb.org/en/latest/query-server/javascript.html#design-functions-context

type HttpMethods = 'HEAD' | 'GET' | 'POST' | 'PUT' | 'DELETE' | 'OPTIONS' | 'TRACE'
export interface InitResp {
  code?: number
  json?: Record<string, any>
  body?: string
  base64?: string
  headers?: any
  stop?: boolean
}

export interface UserCtx {
  db: string
  name: string | null
  roles: string[]
}

export interface SecurityObject {
  admins: {
    names: string[]
    roles: string[]
  }
  members: {
    names: string[]
    roles: string[]
  }
}

export interface DataBaseInformationObject {
  db_name: string
  committed_update_seq: number
  doc_count: number
  doc_del_count: number
  compact_running: boolean
  disk_format_version: number
  disk_size: number
  instance_start_time: string
  purge_seq: number
  update_seq: number
  sizes: {
    active: number
    disk: number
    external: number
  }
}

export interface RequestObject {
  body: string
  cookie: Record<string, any>
  form: Record<string, any>
  headers: Record<string, any>
  id: string | null
  info: DataBaseInformationObject
  method: HttpMethods
  path: string[]
  peer: string
  query: Record<string, any>
  raw_path: string
  requested_path: string[]
  secObj: SecurityObject
  userCtx: UserCtx
  uuid: string
}

export interface RewriteRule {
  method?: string
  from: string
  to: string
  query: Record<string, any>
}

export interface Request2Object {
  body: string
  cookie: Record<string, any>
  headers: Record<string, any>
  method: HttpMethods
  path: string[]
  peer: string
  query: Record<string, any>
  requested_path: string[]
  raw_path: string
  secObj: SecurityObject
  userCtx: UserCtx
}

export interface RewriteReturnObject {
  path: string
  code?: number
  query?: Record<string, any>
  headers?: any
  method?: HttpMethods
  body?: string
}

export interface ResponseObject {
  code?: number
  json?: any
  body?: string
  base64?: string
  headers?: any
  stop?: boolean
}

export interface ViewHeadInformation {
  total_rows: number
  offset: number
}

// reference: https://docs.couchdb.org/en/stable/ddocs/views/collation.html
export type kyesBaseTypes = null | boolean | number | string | Record<string, any>
export type emitKeys = kyesBaseTypes | kyesBaseTypes[]
/**
 * Emits a key-value pair for further processing by CouchDB after the map function is done.
 * @param {string} key - The view key
 * @param {any} value - The key’s associated value
 * @returns {void}
 */
export declare function emit<T>(key: emitKeys, value?: T): void
/**
 * @deprecated since version 2.0
 * Extracts the next row from a related view result.
 * @returns {Object} - View result row
 */
export declare function getRow<T>(): T

/**
 * A helper function to check if the provided value is an Array.
 * @param {Object} obj - Any JavaScript value
 * @returns {boolean}
 */
export declare function isArray<T>(obj: T): boolean

/**
 * Log a message to the CouchDB log (at the INFO level).
 * @param {string} message - Message to be logged
 * @returns {void}
 */
export declare function log(message: string): void

/**
 * @deprecated since version 2.0
 * Registers callable handler for specified MIME key.
 * @param {string} key - MIME key previously defined by registerType()
 * @param {Function} value - MIME type handler
 * @returns {void}
 */
export declare function provides(key: string, func: () => any): string | ResponseObject

/**
 * @deprecated since version 2.0
 * Registers list of MIME types by associated key.
 * @param {string} key - MIME types
 * @param {string[]} mimes - MMIME types enumeration
 * @returns {void}
 */
export declare function registerType(key: string, mimes: string[]): void

/**
 * @deprecated since version 2.0
 * Sends a single string chunk in response.
 * @param {string} chunk - Text chunk
 * @returns {void}
 */
export declare function send(chunk: string): void

/**
 * @deprecated since version 2.0
 * Initiates chunked response. As an option, a custom response object may be sent at this point. For list-functions only!
 * @param {Object} init_resp - InitResp object
 * @returns {void}
 */
// eslint-disable-next-line
export declare function start(init_resp?: InitResp): void

/**
 * Sum arr’s items.
 * @param {number[]} arr - Array of numbers
 * @returns {number}
 */
export declare function sum(arr: number[]): number

/**
 * Encodes obj to JSON string. This is an alias for the JSON.stringify method.
 * @param {any} obj - Array of numbers
 * @returns {string}
 */
export declare function toJSON(obj: any): string

/**
 * Reduce functions take two required arguments of keys and values lists - the result of the related map function - and an optional third value which indicates if rereduce mode is active or not.
 * Rereduce is used for additional reduce values list, so when it is true there is no information about related keys (first argument is null).
 * @param {string[] | null} keys - Array of pairs of docid-key for related map function results. Always null if rereduce is running (has true value).
 * @returns {void}
 */
export type redfun = (keys: [string, string][] | null, values: any[], rereduce?: boolean) => any

// Reference: https://docs.couchdb.org/en/latest/ddocs/ddocs.html and https://docs.couchdb.org/en/latest/api/ddoc/common.html#put--db-_design-ddoc
export interface DesignDocument<T = unknown> {
  _id: string
  _rev?: string
  version?: number
  _revisions?: {
    start: number
    ids: string[]
  }
  language?: string // defaults to 'javascript'
  autoupdate?: boolean // defaults to 'true'
  // Reference: https://docs.couchdb.org/en/stable/api/ddoc/views.html#view-options
  options?: {
    local_seq?: boolean
    include_design?: boolean
  }
  views?: {
    [key: string]: {
      /**
       * Map functions accept a single document as the argument and (optionally) emit() key/value pairs that are stored in a view.
       * Since version 1.1.0, map supports CommonJS modules and the require() function.
       *
       * Reference: https://docs.couchdb.org/en/master/ddocs/ddocs.html#map-functions
       * @param {Object} doc - The document that is being processed
       * @returns {void}
       */
      map?(doc: T): void
      /**
       * Reduce functions take two required arguments of keys and values lists - the result of the related map function - and an optional third value which indicates if rereduce mode is active or not.
       * Rereduce is used for additional reduce values list, so when it is true there is no information about related keys (first argument is null).
       *
       * Reference: https://docs.couchdb.org/en/master/ddocs/ddocs.html#reduce-and-rereduce-functions
       * @param {[string, string][] | null} keys - Array of pairs of docid-key for related map function results. Always null if rereduce is running (has true value).
       * @returns {Object}
       */
      reduce?(keys: [string, string][] | null, values: any[], rereduce?: boolean): any
    }
  }
  updates?: {
    /**
     * Update handlers are functions that clients can request to invoke server-side logic that will create or update a document.
     * This feature allows a range of use cases such as providing a server-side last modified timestamp,
     * updating individual fields in a document without first getting the latest revision, etc.
     *
     * Reference: https://docs.couchdb.org/en/master/ddocs/ddocs.html#update-functions
     * @param {Object | null} doc - Thedocument that is being processed
     * @param {Object} req - Request object
     * @returns {[Object, any]} - the first element is the (updated or new) document, which is committed to the database; The second element is the response that will be sent back to the caller.
     */
    [key: string]: <P extends T | null>(doc: P, req: RequestObject) => [Partial<T> | null, any]
  }
  filters?: {
    /**
     * Filter functions mostly act like Show Functions and List Functions: they format, or filter the changes feed.
     *
     * Reference: https://docs.couchdb.org/en/master/ddocs/ddocs.html#filter-functions
     * @param {Object} doc - The document that is being processed
     * @param {Object} req - Request object
     * @returns {boolean} - true means that doc passes the filter rules, false means that it does not
     */
    [key: string]: (doc: T, req: RequestObject) => boolean
  }
  /**
   * Used to prevent invalid or unauthorized document update requests from being stored.
   * The function is passed the new document from the update request, the current document stored in the database,
   * a User Context Object containing information about the user writing the document (if present),
   * and a Security Object with lists of database security roles.
   *
   * Reference: https://docs.couchdb.org/en/master/ddocs/ddocs.html#validatefun
   * @param {Object} newDoc - New version of document that will be stored
   * @param {Object} oldDoc - Previous version of document that is already stored
   * @param {Object} userCtx - User Context Object
   * @param {Object} secObj - Security Object
   * @returns {void}
   */
  //
  validate_doc_update?( // eslint-disable-line
    newDoc: T,
    oldDoc: T,
    userCtx: UserCtx,
    secObj: SecurityObject,
  ): void
  /**
   * @deprecated in CouchDB 3.0, and will be removed in CouchDB 4.0
   */
  shows?: {
    /**
     * @deprecated in CouchDB 3.0, and will be removed in CouchDB 4.0
     * Show functions are used to represent documents in various formats, commonly as HTML pages with nice formatting.
     * They can also be used to run server-side functions without requiring a pre-existing document.
     *
     * Reference: https://docs.couchdb.org/en/master/ddocs/ddocs.html#show-functions
     * @param {Object} doc - The document that is being processed; may be omitted
     * @param {Object} req - Request object
     * @returns {Object | string}
     */
    [key: string]: (doc: T, req: RequestObject) => string | ResponseObject | void
  }
  /**
   * @deprecated in CouchDB 3.0, and will be removed in CouchDB 4.0
   */
  lists?: {
    /**
     * @deprecated in CouchDB 3.0, and will be removed in CouchDB 4.0
     * While Show Functions are used to customize document presentation,
     * List Functions are used for the same purpose, but on View Functions results.
     *
     * Reference: https://docs.couchdb.org/en/master/ddocs/ddocs.html#list-functions
     * @param {Object} head - View Head Information
     * @param {Object} req - Request object
     * @returns {string} Last chunk
     */
    [key: string]: (head: ViewHeadInformation, req: RequestObject) => string | void
  }
  /**
   * @deprecated in CouchDB 3.0, and will be removed in CouchDB 4.0
   * Rewrites the specified path by rules defined in the specified design document.
   * The rewrite rules are defined by the rewrites field of the design document.
   * The rewrites field can either be a string containing the a rewrite function or an array of rule definitions.
   *
   */
  rewrites?: ((req: Request2Object) => RewriteReturnObject) | RewriteRule[]
}
