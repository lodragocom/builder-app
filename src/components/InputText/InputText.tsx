import { useState } from "react";

export default function InputText({ initialValue = "ProSecco" }) {
    const [value, setValue] = useState(initialValue);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };
    return (
        <>
            <label className="flex flex-col gap-2">
                <div className="text-2x font-bold" style={{ color: 'red' }}>Squadra</div>
                <input
                    type="text"
                    value={value}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-md p-2 px-3 focus:outline-none focus:ring focus:ring-blue-200"
                />
            </label>
        </>
    );
}
