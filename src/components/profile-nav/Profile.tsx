import { Link } from "react-router-dom";

interface Props {
    user: string;
}

const Profile = ({ user }: Props): JSX.Element => {
    return (
        <div data-test-id="header-profile-nav" className="nav-header__inner profile-nav" tabIndex={0}>
            <span className="visually-hidden">Profile</span>
            <img src={user} alt="profile" />
            <ul data-test-id="header-profile-nav-list" className="profile-nav__list">
                <li data-test-id="header-profile-nav-username" className="profile-nav__item">
                    John Doe
                </li>
                <li className="profile-nav__item">
                    <Link data-test-id="header-profile-nav-sign-out" to="/sign-in" className="profile-nav__sign-out button">
                        Sign Out
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Profile;

