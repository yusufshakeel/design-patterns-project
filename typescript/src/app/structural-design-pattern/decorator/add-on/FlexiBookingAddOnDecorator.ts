import { AddOnBaseDecorator } from './AddOnBaseDecorator';

export default class FlexiBookingAddOnDecorator extends AddOnBaseDecorator {
  price(): number {
    return super.price() + 100;
  }
}