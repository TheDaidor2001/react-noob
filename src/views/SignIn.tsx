import { useNavigate } from "react-router-dom"
import { SignInForm } from "../components/signInForm/SignInForm"
import { FooterForm } from "../components/footerForm/FooterForm"





export const SignIn = (): JSX.Element => {


    const navigate = useNavigate()

    const onSubmit = (): void => {
        navigate('/')
    }

    return (
        <main className="sign-up-page">
            <h1 className="visually-hidden">Travel App</h1>
            <SignInForm
                onSubmit={onSubmit}
            />
            <FooterForm
                text="Don't have an account?"
                link="/sign-up"
                dataTestId="auth-sign-in-link"
                className="sign-up-form__link"
                linkText="Sign Up"
            />
        </main>
    )
}