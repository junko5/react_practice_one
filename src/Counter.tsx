import { useState } from "react";

export const Counter = () => {
    const [num, setNum] = useState(0);
    const increaseNumber = () => {
        setNum(num + 1);
    };
    return (
        <div>
            {num}
            <button onClick={increaseNumber}>数が増える</button>
        </div>

    );

};