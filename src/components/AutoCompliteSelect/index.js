'use client';
import { useEffect, useState } from "react";
import Input from "../input";

export default function AutoCompliteSelect({label, placeholder, type, size, items, onSelect, selected}) {
    const [value, setValue] = useState({name: ""})
    // console.log('123');
    const [filteredItems, setFilteredItems] = useState([])
    const onClick = (item) => {
        onSelect(item)
        setValue(item)
        setFilteredItems([])
    }

    useEffect(() => {
        // console.log("here");
        items.map(item => {
            if(item.id === selected) setValue(item)
        })
        // setValue(selected)
    }, [selected, items])
    
    const reset = () => {
        setValue({name: ""})
        onSelect(null)
    }

    const onChange = (e) => {
        console.log(e.target.value);

        if(e.target.value === ""){
            setFilteredItems([])    
        }else{
            // setFilteredItems([...items.filter(item => item.name.includes(e.target.value))])
            const filter = items.filter(item => item.name.includes(e.target.value))
            setFilteredItems([...filter]) //fix add ...
        }        
    }

    return (
        <div className={"autocomplite " + size}>
            <Input placeholder={placeholder} type={type} onChange={onChange} label={label} size={size}/>
            {value.name !=="" && <div className="tag">
                <span>{value.name}</span> <i onClick={reset}>X</i>
            </div>}

            {filteredItems.length > 0 && <div className="dropdown">
                {filteredItems.map(item => (<a onClick={() => onClick(item)}>{item.name}</a>))}
            </div>}
        </div>
    )
}