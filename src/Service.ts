export interface DatabaseSync {
    cache: any;
    remote?: any;
    master?: any;
}

export default interface Service {
    dbs: DatabaseSync;
}
