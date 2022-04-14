import { Factory } from './factory-register';
import { Cat } from './cat';
import { Dog } from './dog';

function main() {
    const factory = new Factory();
    factory.registerFactory('cat', Cat);
    factory.registerFactory('dog', Dog);

    const cat = factory.getFactoryByName('cat');
    const dog = factory.getFactoryByName('dog');

    console.log(cat.getClass());
    console.log(dog.getClass());
}

main()