import FlightTicketComponent from './FlightTicketComponent';

export default class FlightBooking {
  total(flightTicketComponent: FlightTicketComponent): number {
    return flightTicketComponent.price();
  }
}