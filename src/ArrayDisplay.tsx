import { useState } from "react";

export const ArrayDisplay = () => {
    const [items, setItems]  = useState<string[]>(["Apple", "Banana", "Cherry", "Date"]);
    const deleteItem = (index:number) => {
        const newItems = items.filter((_, i) => i !== index);
        setItems(newItems);
    };
    return (
        <div>
            {items.map((item, index) => (
                <div key={`${item}-${index}`}>
                    {item} 
                    <button onClick={()=>deleteItem(index)}>削除</button>
                </div>
            ))}
        </div>
    );
}
