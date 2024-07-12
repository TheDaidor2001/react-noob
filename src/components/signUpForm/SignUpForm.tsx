import { Button, Input } from "../components";
import { FormEvent, useState } from "react";


interface Props {
    onSubmit: () => void;
}

export const SignUpForm = ({ onSubmit }: Props): JSX.Element => {

    const [data, setData] = useState({ fullName: '', email: '', password: '' })
    const [errors, setErrors] = useState({ email: '', password: '', fullName: '', all: '' });

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { email, fullName, password } = data

        if (!fullName || !email || !password) {
            setErrors({ ...errors, all: 'All fields are required' })
            return
        }

        if (password.length < 3 || password.length > 20) {
            setErrors({ ...errors, password: 'Password must bre between 3 and 20 characters' })
            return
        }


        setErrors({ email: '', password: '', fullName: '', all: '' })
        onSubmit()
    }

    return (
        <form className="sign-up-form" autoComplete="off" onSubmit={handleSubmit}>
            <h2 className="sign-up-form__title">Sign Up</h2>
            <label className="input">
                <span className="input__heading">Full name</span>
                <Input
                    data_test_id="auth-full-name"
                    name="full-name"
                    type="text"
                    value={data.fullName}
                    onChange={(e) => setData({ ...data, fullName: e.target.value })}
                />
            </label>
            <label className="input">
                <span className="input__heading">Email</span>
                <Input
                    data_test_id="auth-email"
                    name="email"
                    type="email"
                    value={data.email}
                    onChange={(e) => setData({ ...data, email: e.target.value })}
                />
            </label>
            <label className="input">
                <span className="input__heading">Password</span>
                <Input
                    data_test_id="auth-password"
                    name="password"
                    type="password"
                    autocomplete="new-password"
                    value={data.password}
                    onChange={(e) => setData({ ...data, password: e.target.value })}
                    errors={errors}
                />
            </label>
            <Button
                data_test_id="auth-submit"
                className="button"
                type="button"
                btnType="submit"
                text="Sign Up"
                to=""
            />
            {errors.all && <p className="input__error">{errors.all}</p>}
        </form>
    );
}


