// this is the director class, and it is responsive to build product
import Builder from './Builder';
import ConcreteBuilderA from './ConcreteBuilderA';
import ConcreteBuilderB from './ConcreteBuilderB';

export default class Director {
  private builder: Builder;

  constructor(builder: Builder) {
    this.builder = builder;
  }

  public productABuilder(): ConcreteBuilderA {
    this.builder.withProp1('p1');
    this.builder.withProp2('p2');
    this.builder.withProp3('p3');
    return <ConcreteBuilderA>this.builder;
  }

  public productBBuilder(): ConcreteBuilderB {
    this.builder.withProp1('p1');
    this.builder.withProp2('p2');
    this.builder.withProp3('p3');
    return <ConcreteBuilderB>this.builder;
  }
}