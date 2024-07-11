import { ROUTES } from '../../enums/apiRoutes';
import { Button } from '../components';


interface Props {
    user: string;
}

export const Profile = ({ user }: Props): JSX.Element => {
    return (
        <div data-test-id="header-profile-nav" className="nav-header__inner profile-nav" tabIndex={0}>
            <span className="visually-hidden">Profile</span>
            <img src={user} alt="profile" />
            <ul data-test-id="header-profile-nav-list" className="profile-nav__list">
                <li data-test-id="header-profile-nav-username" className="profile-nav__item">
                    John Doe
                </li>
                <li className="profile-nav__item">
                    <Button
                        type=''
                        data_test_id="header-profile-nav-sign-out"
                        to={ROUTES.LOGIN}
                        text="Sign Out"
                        className="profile-nav__sign-out button"
                    />
                </li>
            </ul>
        </div>
    )
}



