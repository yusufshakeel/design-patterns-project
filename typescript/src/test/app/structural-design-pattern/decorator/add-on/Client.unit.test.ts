import FlightBooking
  from '../../../../../app/structural-design-pattern/decorator/add-on/FlightBooking';
import {
  FlightTicket
} from '../../../../../app/structural-design-pattern/decorator/add-on/FlightTicket';
import PriorityCheckInAddOnDecorator
  from '../../../../../app/structural-design-pattern/decorator/add-on/PriorityCheckInAddOnDecorator';
import FlexiBookingAddOnDecorator
  from '../../../../../app/structural-design-pattern/decorator/add-on/FlexiBookingAddOnDecorator';
import CorporateMealAddOnDecorator
  from '../../../../../app/structural-design-pattern/decorator/add-on/CorporateMealAddOnDecorator';

describe('Testing flight booking - decorator', () => {
  test('Should be able to book only flight ticket without add-on', () => {
    const flightTicket = new FlightTicket();
    const flightBooking = new FlightBooking();
    expect(flightBooking.total(flightTicket)).toBe(10000);
  });

  test('Should be able to book flight ticket with add-on', () => {
    const flightTicket = new FlightTicket();
    const ticketWithPriorityCheckIn = new PriorityCheckInAddOnDecorator(flightTicket);
    const ticketWithFlexiBooking = new FlexiBookingAddOnDecorator(ticketWithPriorityCheckIn);
    const ticketWithCorporateMeal = new CorporateMealAddOnDecorator(ticketWithFlexiBooking);
    const flightBooking = new FlightBooking();
    expect(flightBooking.total(ticketWithCorporateMeal)).toBe(10600);
  });
});