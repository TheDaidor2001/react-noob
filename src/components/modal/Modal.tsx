import { useState } from "react";
import { Trip } from "../../interfaces/trip.interface";
import { useNavigate } from "react-router-dom";
import { Booking } from "../../interfaces/bookings.interface";
import bookings from '../../assets/data/bookings.json';



interface Props {
    isModalVisible: boolean;
    handleButtonClick: () => void;
    trip: Trip;
}

export const Modal = ({ handleButtonClick, isModalVisible, trip }: Props): JSX.Element => {

    const { title, price, level, duration, id } = trip
    const navigate = useNavigate();

    const [date, setDate] = useState('')
    const [guests, setGuests] = useState('1')



    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const currentDate = new Date();
        currentDate.setHours(0, 0, 0, 0);

        const bookingDate = new Date(date);
        bookingDate.setHours(0, 0, 0, 0);

        if (bookingDate <= currentDate) {
            alert('You cannot book a trip for today or a past date');
            return;
        }

        if (+guests < 1 || +guests > 10) {
            alert('The number of guests must be between 1 and 10')
            return
        }

        const booking: Booking = {
            id: window.crypto.randomUUID(),
            tripId: id,
            date: new Date(date).toISOString(),
            guests: +guests,
            createdAt: new Date().toISOString(),
            trip: {
                title,
                price,
                duration
            },
            totalPrice: price * +guests,
            userId: '1dd97a12-848f-4a1d-8a7d-34a2132fca94'
        }


        bookings.push(booking);

        handleButtonClick()
        navigate('/bookings')

    }

    return (
        <div hidden={!isModalVisible}>
            <div className="modal">
                <div data-test-id="book-trip-popup" className="book-trip-popup">
                    <button data-test-id="book-trip-popup-close" className="book-trip-popup__close" onClick={handleButtonClick}>
                        ×
                    </button>
                    <form className="book-trip-popup__form" autoComplete="off" onSubmit={handleFormSubmit}>
                        <div className="trip-info">
                            <h3 data-test-id="book-trip-popup-title" className="trip-info__title">
                                {title}
                            </h3>
                            <div className="trip-info__content">
                                <span data-test-id="book-trip-popup-duration" className="trip-info__duration">
                                    <strong>{duration}</strong> days
                                </span>
                                <span data-test-id="book-trip-popup-level" className="trip-info__level">
                                    {level}
                                </span>
                            </div>
                        </div>
                        <label className="input">
                            <span className="input__heading">Date</span>
                            <input data-test-id="book-trip-popup-date" name="date" type="date" required value={date} onChange={e => setDate(e.target.value)} />
                        </label>
                        <label className="input">
                            <span className="input__heading">Number of guests</span>
                            <input data-test-id="book-trip-popup-guests" name="guests" type="number" min="1" max="10" value={guests} onChange={e => setGuests(e.target.value)} required />
                        </label>
                        <span className="book-trip-popup__total">
                            Total:
                            <output data-test-id="book-trip-popup-total-value" className="book-trip-popup__total-value">
                                ${price}
                            </output>
                        </span>
                        <button data-test-id="book-trip-popup-submit" className="button" type="submit">
                            Book a trip
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
