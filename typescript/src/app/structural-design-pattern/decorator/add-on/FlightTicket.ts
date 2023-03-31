import FlightTicketComponent from './FlightTicketComponent';

export class FlightTicket implements FlightTicketComponent {
  price(): number {
    return 10000;
  }
}