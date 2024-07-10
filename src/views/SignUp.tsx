import { useNavigate } from "react-router-dom"
import { SignUpForm } from "../components/signUpForm/SignUpForm"
import { FooterForm } from "../components/footerForm/FooterForm"




export const SignUp = (): JSX.Element => {


    const navigate = useNavigate()

    const onSubmit = () => {
        navigate('/')
    }

    return (
        <main className="sign-up-page">
            <h1 className="visually-hidden">Travel App</h1>
            <SignUpForm
                onSubmit={onSubmit}
            />
            <FooterForm
                text=" Already have an account?"
                link="/sign-in"
                dataTestId="auth-sign-in-link"
                className="sign-up-form__link"
                linkText="Sign In"
            />
        </main>
    )
}