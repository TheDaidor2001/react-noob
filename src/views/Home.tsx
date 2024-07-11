
import '../assets/css/home.css'
import { CardTrip, Input, Select } from '../components/components';
import { Trip } from '../interfaces/interfaces';
import { useFilters } from '../hooks/hooks';
import { useState } from 'react'
import trips from '../assets/data/trips.json'


export const Home = (): JSX.Element => {

    const [tripsValue] = useState<Trip[]>(trips);
    const { changeFilters, setFilters, filters, setSearch, search } = useFilters()

    const handleChangeLevel = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFilters({ ...filters, level: e.target.value })
    }

    const handleChangeDurantion = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFilters({ ...filters, duration: e.target.value })
    }

    const handleChangeShearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }


    const filterData = changeFilters(tripsValue)

    return (
        <>
            <h1 className="visually-hidden">Travel App</h1>
            <section className="trips-filter">
                <h2 className="visually-hidden">Trips filter</h2>
                <form className="trips-filter__form" autoComplete="off">
                    <label className="trips-filter__search input">
                        <span className="visually-hidden">Search by name</span>
                        <Input
                            data_test_id="filter-search"
                            name="search"
                            type="search"
                            placeholder="search by title"
                            value={search}
                            onChange={handleChangeShearch}
                        />
                    </label>
                    <label className="select">
                        <span className="visually-hidden">Search by duration</span>
                        <Select
                            data_test_id='filter-duration'
                            name='duration'
                            onChange={handleChangeDurantion}
                        >
                            <option value="all">duration</option>
                            <option value="0_x_5"> 5 days</option>
                            <option value="5_x_10"> 10 days</option>
                            <option value="10">≥ 10 days</option>
                        </Select>

                    </label>
                    <label className="select">
                        <span className="visually-hidden">Search by level</span>
                        <Select
                            data_test_id='filter-level'
                            name='level'
                            onChange={handleChangeLevel}
                        >
                            <option value="all">level</option>
                            <option value="easy">easy</option>
                            <option value="moderate">moderate</option>
                            <option value="difficult">difficult</option>
                        </Select>
                    </label>
                </form>
            </section>
            <section className="trips">
                <h2 className="visually-hidden">Trips List</h2>
                <ul className="trip-list">
                    {
                        filterData.length > 0 ? filterData.map((trip) => <CardTrip key={trip.id} trip={trip} />) : <h2>No trips found</h2>
                    }
                </ul>
            </section>
        </>
    )
}

