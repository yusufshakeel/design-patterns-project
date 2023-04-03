import { AddOnBaseDecorator } from './AddOnBaseDecorator';

export default class CorporateMealAddOnDecorator extends AddOnBaseDecorator {
  price(): number {
    return super.price() + 300;
  }
}