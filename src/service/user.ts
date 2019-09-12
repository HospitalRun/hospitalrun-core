import PouchDB from 'pouchdb'
import { User } from '../model/user'
import Service, {DatabaseSync} from '../Service'
export default class UserService implements Service {
    dbs: DatabaseSync = {
        // TODO: Move db config to constructor OR setup helper to tell if we are NodeJS/Browser and prefix filepath in Node
        cache: new PouchDB<PouchDB.Core.Document<User>>('./.data/user'),
        remote: new PouchDB<PouchDB.Core.Document<User>>('https://app.hospitalrun.io/next/user'),
        master: new PouchDB<PouchDB.Core.Document<User>>('https://app.hospitalrun.io/next/master')
    }
    constructor(sync: any){
      if(sync) {
          //this.dbs.cache.sync(this.dbs.remote, {
          // live: true,
          //  retry: true
          //}).on('change', function (change: any) {
          //  // yo, something changed!
          //}).on('paused', function (info: any) {
          //  // replication was paused, usually because of a lost connection
          //}).on('active', function (info: any) {
          //  // replication was resumed
          //}).on('error', function (err: any) {
          //  // totally unhandled error (shouldn't happen)
          //});
      }
    }

    /**
     * Search for a User in the Database
     */
    findUser({
    }: User){
        return this.dbs.cache.get(...arguments)
    }
    /**
     * Search for a User in the Database
     */
    findUserById({
        id
    }: User){
        return this.dbs.cache.get(...arguments)
    }
}
