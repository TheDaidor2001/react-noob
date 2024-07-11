import { useParams } from "react-router-dom";
import tripInitialData from '../assets/data/trips.json'
import { Trip as TripInterface } from "../interfaces/interfaces";
import { useState } from "react";


import '../assets/css/trip.css'
import { Button, Modal } from "../components/components";


export const Trip = () => {

    const [isModalVisible, setIsModalVisible] = useState(false);


    const { tripId } = useParams();

    const trip: TripInterface[] = tripInitialData.filter(trip => trip.id === tripId);


    if (trip.length === 0) {
        return <div>Trip not found</div>
    }

    const { image, title, price, description, duration, level } = trip[0]


    const handleButtonClick = () => {
        setIsModalVisible(!isModalVisible);
    };




    return (
        <section className="trip-page">
            <h1 className="visually-hidden">Travel App</h1>
            <div className="trip">
                <img data-test-id="trip-details-image" src={image} className="trip__img" alt="trip photo" />
                <div className="trip__content">
                    <div className="trip-info">
                        <h3 data-test-id="trip-details-title" className="trip-info__title">
                            {title}
                        </h3>
                        <div className="trip-info__content">
                            <span data-test-id="trip-details-duration" className="trip-info__duration">
                                <strong>{duration}</strong> days
                            </span>
                            <span data-test-id="trip-details-level" className="trip-info__level">
                                {level}
                            </span>
                        </div>
                    </div>
                    <div data-test-id="trip-details-description" className="trip__description">
                        {description}
                    </div>
                    <div className="trip-price">
                        <span>Price</span>
                        <strong data-test-id="trip-details-price-value" className="trip-price__value">
                            ${price}
                        </strong>
                    </div>
                    <Button
                        data_test_id="trip-details-button"
                        className="trip__button button"
                        onClick={handleButtonClick}
                        to=""
                        text="Book a trip"
                        type="button"
                    />

                </div>
            </div>
            <Modal
                handleButtonClick={handleButtonClick}
                isModalVisible={isModalVisible}
                trip={trip[0]}
            />

        </section>

    )
}
