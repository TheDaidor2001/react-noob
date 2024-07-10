import { getCurrentDate } from "../../helpers/getCurrentDate";
import { Booking as BookingInterface } from "../../interfaces/bookings.interface"

interface Props {
    booking: BookingInterface,
    handleClick: (id: string) => void;
}

export const Booking = ({ booking, handleClick }: Props) => {

    const { id, tripId, date, totalPrice, guests, trip } = booking
    const { title } = trip
    return (
        <li data-test-id="booking" className="booking" key={id}>
            <h3 data-test-id="booking-title" className="booking__title">{title}</h3>
            <span data-test-id="booking-guests" className="booking__guests">
                {guests} guests
            </span>
            <span data-test-id="booking-date" className="booking__date">
                {getCurrentDate(date)}
            </span>
            <span data-test-id="booking-total" className="booking__total">
                ${totalPrice}
            </span>
            <button data-test-id="booking-cancel" className="booking__cancel" title="Cancel booking" onClick={() => handleClick(tripId)}>
                <span className="visually-hidden">Cancel booking</span>
                ×
            </button>
        </li>
    )
}
