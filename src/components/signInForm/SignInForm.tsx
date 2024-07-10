import { useState } from "react"

interface Props {
    onSubmit: () => void
}

export const SignInForm = ({ onSubmit }: Props): JSX.Element => {

    const [data, setData] = useState({ email: '', password: '' })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const { email, password } = data

        if (!email || !password) {
            alert('Please fill all the fields')
            return
        }

        if (password.length < 3 || password.length > 20) {
            alert('Password must be between 3 and 20 characters')
            return
        }
        onSubmit()
    }
    return (
        <form className="sign-in-form" autoComplete="off" onSubmit={handleSubmit}>
            <h2 className="sign-in-form__title">Sign In</h2>
            <label className="input">
                <span className="input__heading">Email</span>
                <input
                    data-test-id="auth-email"
                    name="email"
                    type="email"
                    required
                    value={data.email}
                    onChange={e => setData({ ...data, email: e.target.value })}
                />
            </label>
            <label className="input">
                <span className="input__heading">Password</span>
                <input
                    data-test-id="auth-password"
                    name="password"
                    type="password"
                    autoComplete="new-password"
                    required
                    value={data.password}
                    onChange={e => setData({ ...data, password: e.target.value })}
                />
            </label>
            <button data-test-id="auth-submit" className="button" type="submit">
                Sign In
            </button>
        </form>
    )
}
