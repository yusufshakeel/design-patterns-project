import Creator from './Creator';
import ConcreteProduct2 from './ConcreteProduct2';
import Product from './Product';

class ConcreteCreator2 extends Creator {
  factoryMethod(): Product {
    return new ConcreteProduct2();
  }
}

export default ConcreteCreator2;