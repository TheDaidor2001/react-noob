import { useNavigate } from "react-router-dom"
import { ROUTES } from "../enums/apiRoutes"
import { FooterForm, SignInForm } from "../components/components"





export const SignIn = (): JSX.Element => {


    const navigate = useNavigate()

    const onSubmit = (): void => {
        navigate(ROUTES.HOME)
    }

    return (
        <main className="sign-up-page">
            <h1 className="visually-hidden">Travel App</h1>
            <SignInForm
                onSubmit={onSubmit}
            />
            <FooterForm
                text="Don't have an account?"
                link={ROUTES.REGISTER}
                dataTestId="auth-sign-in-link"
                className="sign-up-form__link"
                linkText="Sign Up"
            />
        </main>
    )
}