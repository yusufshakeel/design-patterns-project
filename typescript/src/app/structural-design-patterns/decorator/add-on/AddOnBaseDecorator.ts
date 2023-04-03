import FlightTicketComponent from './FlightTicketComponent';
import { FlightTicket } from './FlightTicket';

export class AddOnBaseDecorator implements FlightTicketComponent {
  private flightTicket: FlightTicket;
  constructor(flightTicket: FlightTicket) {
    this.flightTicket = flightTicket;
  }
  price(): number {
    return this.flightTicket.price();
  }
}