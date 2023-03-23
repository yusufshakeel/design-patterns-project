import Product from './Product';

abstract class Creator {
  abstract factoryMethod(): Product
}

export default Creator;