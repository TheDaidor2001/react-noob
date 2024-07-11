import { useState } from "react"
import bookingsInitalData from '../assets/data/bookings.json'
import { Booking as BookingInterface } from "../interfaces/interfaces";
import { Booking } from "../components/components";


import '../assets/css/booking.css';

export const Bookings = () => {

    const [bookings, setBookings] = useState<BookingInterface[]>(bookingsInitalData);

    const handleClick = (id: string) => {
        const filteredBookings = bookings.filter((item) => item.id !== id);
        setBookings(filteredBookings);
    }

    const sortedBookings = bookings.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());


    return (
        <section className="bookings-page">
            <h1 className="visually-hidden">Travel App</h1>
            <ul className="bookings__list">
                {
                    sortedBookings.length !== 0
                        ? sortedBookings.map(item => <Booking
                            key={item.id}
                            booking={item}
                            handleClick={handleClick}
                        />)
                        : <h2> No bookings found </h2>
                }
            </ul>
        </section>
    )
}
