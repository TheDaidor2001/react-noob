import { FormEvent, useState } from "react";
import { Button, Input } from "../components";


interface Props {
    onSubmit: () => void;
}

export const SignUpForm = ({ onSubmit }: Props): JSX.Element => {

    const [data, setData] = useState({ fullName: '', email: '', password: '' })

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { email, fullName, password } = data

        if (!fullName || !email || !password) {
            alert('Please fill all fields')
            return
        }

        if (password.length < 3 || password.length > 20) {
            alert('Password must be between 3 and 20 characters')
            return
        }

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
        </form>
    );
}


