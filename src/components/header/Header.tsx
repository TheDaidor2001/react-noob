import { Link } from 'react-router-dom'
import { Profile } from '../components';
import briefcase from '../../assets/images/briefcase.svg'
import user from '../../assets/images/user.svg'


import './header.css'

interface Props {
    isLogged: boolean
}

export const Header = ({ isLogged }: Props): JSX.Element => {
    return (
        <header className="header">
            <div className="header__inner">
                <Link data-test-id="header-logo" to="/" className="header__logo">
                    Travel App
                </Link>
                {
                    isLogged && <nav data-test-id="header-nav" className="header__nav">
                        <ul className="nav-header__list">
                            <li className="nav-header__item" title="Bookings">
                                <Link data-test-id="header-bookings-link" to="/bookings" className="nav-header__inner">
                                    <span className="visually-hidden">Bookings</span>
                                    <img src={briefcase} alt="bookings" />
                                </Link>
                            </li>
                            <li className="nav-header__item" title="Profile">
                                <Profile user={user} />
                            </li>
                        </ul>
                    </nav>
                }
            </div>
        </header>
    )
}


