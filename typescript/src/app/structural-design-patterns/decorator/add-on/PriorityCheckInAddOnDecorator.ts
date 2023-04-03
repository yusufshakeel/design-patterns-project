import { AddOnBaseDecorator } from './AddOnBaseDecorator';

export default class PriorityCheckInAddOnDecorator extends AddOnBaseDecorator {
  price(): number {
    return super.price() + 200;
  }
}