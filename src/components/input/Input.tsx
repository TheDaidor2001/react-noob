import { ChangeEventHandler } from "react";

import './input.css';

interface Props {
    data_test_id: string;
    name: string;
    type: string;
    value: string;
    onChange: ChangeEventHandler<HTMLInputElement>,
    autocomplete?: string;
    placeholder?: string;
}

export const Input = ({ data_test_id, name, onChange, type, value, autocomplete, placeholder }: Props): JSX.Element => {
    return (
        <input
            data-test-id={data_test_id}
            name={name}
            type={type}
            required
            value={value}
            onChange={onChange}
            autoComplete={autocomplete}
            placeholder={placeholder}
        />
    )
}
