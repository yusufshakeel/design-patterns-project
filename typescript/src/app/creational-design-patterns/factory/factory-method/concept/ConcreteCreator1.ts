import Creator from './Creator';
import ConcreteProduct1 from './ConcreteProduct1';
import Product from './Product';

class ConcreteCreator1 extends Creator {
  factoryMethod(): Product {
    return new ConcreteProduct1();
  }
}

export default ConcreteCreator1;