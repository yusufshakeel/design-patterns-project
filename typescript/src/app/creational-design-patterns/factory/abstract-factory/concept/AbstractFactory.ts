import ProductA from './ProductA';
import ProductB from './ProductB';

interface AbstractFactory {
  createProductA(): ProductA;
  createProductB(): ProductB;
}

export default AbstractFactory;