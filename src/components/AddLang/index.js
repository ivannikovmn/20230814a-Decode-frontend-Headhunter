import { useState, useEffect } from "react"

export default function AddLang({onChange}) {
    const [foreignLanguage, setForeignLanguage] = useState([])
    const remove = (index) => {
        const langs = [...foreignLanguage];
        langs.splice(index, 1);
        setForeignLanguage(langs)
    }
    
    const onSelect = (e) => {
        const [index, key] = e.target.name.split("-")
        const langs = [...foreignLanguage];
        langs[index][key] = e.target.value;
        setForeignLanguage(langs)

        onChange(langs)
    }

    const lns = foreignLanguage.map((ln, index) => (<div key={index} className="lns fieldset-md selectdate-noday">                
        <span className="remove" onClick={() => remove(index)}>X</span>
        <select placeholder="Язык" className="input" name={index + "-name"} value={foreignLanguage[index].name} onChange={onSelect}>
            <option value="Казахский">Казахский</option>
            <option value="Английский">Английский</option>
            <option value="Русский">Русский</option>
        </select>
        <select placeholder="Уровень" className="input" name={index + "-level"} value={foreignLanguage[index].level} onChange={onSelect}>
            <option value="A1">A1 - начальный</option>
            <option value="A2">A2 - элементарный</option>
            <option value="B1">B1 - средний</option>
            <option value="B2">B2 - средне продвинутый</option>
            <option value="C1">C1 - продвинутый</option>
            <option value="C2">C2 - в совершенстве</option>                         
        </select>
    </div>))

    return(
        <div className="eds">
            {lns}
            <a onClick={() => setForeignLanguage([...foreignLanguage, {name: "", level: ""}])}>Добавить язык</a>        
        </div>
    )
}