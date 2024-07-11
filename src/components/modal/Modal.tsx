
import './modal.css'
import { Booking, Trip } from '../../interfaces/interfaces';
import { Button, Input } from '../components';
import { ROUTES } from "../../enums/apiRoutes";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import bookings from '../../assets/data/bookings.json';

interface Props {
    isModalVisible: boolean;
    handleButtonClick: () => void;
    trip: Trip;
}

export const Modal = ({ handleButtonClick, isModalVisible, trip }: Props): JSX.Element => {
    const { title, price, level, duration, id } = trip
    const [total, setTotal] = useState(price)

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
            totalPrice: total,
            userId: window.crypto.randomUUID()
        }


        bookings.push(booking);

        handleButtonClick()
        navigate(ROUTES.BOOKINGS)

    }

    useEffect(() => {
        setTotal(price * +guests)
    }, [guests, price])

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
                            <Input
                                data_test_id='book-trip-popup-date'
                                name='date'
                                type='date'
                                value={date}
                                onChange={e => setDate(e.target.value)}
                            />
                        </label>
                        <label className="input">
                            <span className="input__heading">Number of guests</span>
                            <Input
                                data_test_id='book-trip-popup-guests'
                                name='guests'
                                type='number'
                                min='1'
                                max='10'
                                value={guests}
                                onChange={e => setGuests(e.target.value)}
                            />
                        </label>
                        <span className="book-trip-popup__total">
                            Total:
                            <output data-test-id="book-trip-popup-total-value" className="book-trip-popup__total-value">
                                ${total}
                            </output>
                        </span>
                        <Button
                            data_test_id='book-trip-popup-submit'
                            type='button'
                            btnType='submit'
                            className='button'
                            to=''
                            text='Book a trip'
                        />
                    </form>
                </div>
            </div>
        </div>
    )
}
