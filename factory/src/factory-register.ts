export class Factory {
    factories: any;
    constructor() {
        this.factories = {}
    }

    registerFactory = (name: string, objectClass: any) => {
        this.factories[name] = objectClass; 
    }

    getFactoryByName = (name: string) => {
        return new this.factories[name]();
    }
}