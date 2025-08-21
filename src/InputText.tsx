import { useState } from "react";

export const InputText = () => {
    const [text, setText] = useState("");
    const addNewText = (e: React.ChangeEvent<HTMLInputElement>)  => {
        setText(e.target.value);
    };
    return (
        <div>
            <input type="text" onChange={addNewText} /><br />
            <span>{text}</span>
        </div>
    );
}