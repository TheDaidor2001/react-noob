
import './input.css';
import { ChangeEventHandler } from "react";

interface Props {
    data_test_id: string;
    name: string;
    type: string;
    value: string;
    onChange: ChangeEventHandler<HTMLInputElement>,
    autocomplete?: string;
    placeholder?: string;
    min?: string;
    max?: string
}

export const Input = ({ data_test_id, name, onChange, type, value, autocomplete, placeholder, min, max }: Props): JSX.Element => {
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
            min={min}
            max={max}
        />
    )
}
