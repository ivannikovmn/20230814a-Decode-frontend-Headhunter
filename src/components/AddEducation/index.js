// import { useState } from "react"
import { useState, useEffect } from "react"

export default function AddEducation({onChange, education}) {
    // const [education, setEducation] = useState([])

    // const onChangeData = (e) => {
    //     // console.log(e.target);
    //     // console.dir(e.target.name, e.target.value);
    //     let [index, name] = e.target.name.split("-")
    //     // console.log(index, name);
    //     index = index * 1;

    //     let ed = [...education]

    //     ed[index][name] = e.target.value;
    //     setEducation(ed)
    // }

    const onChangeData = (e) => {
        // console.log(e.target);
        // console.dir(e.target.name, e.target.value);
        let [index, name] = e.target.name.split("-")
        // console.log(index, name);
        index = index * 1;

        let eds = [...education]

        eds[index][name] = e.target.value;
        // setEducation(eds)
        onChange(eds)
    }

    const newEducation = () => {
        // setEducation([...education, {
        onChange([...education, {
            level: "Высшее", 
            university_name: "", 
            faculty: "",    
            major: "", 
            end_date: ""             
        }])
    }

    const removeEd = (ed) => {
        const eds = [...education]
        const index = education.indexOf(ed)
        eds.splice(index, 1)
        // setEducation(eds)
        onChange(eds)
    }

    // useEffect(() => {
    //     onChange(education)
    // }, [education])

    // const educations = education.map(ed => (<div className="education">
    const educations = education.map((ed, index) => (<div key={index} className="education">        
    <span onClick={() => removeEd()}>X</span>
    <fieldset className={"fieldset fieldset-md"}>
        <label>Уровень</label>
        <select className="input" onChange={onChangeData} name={index + "-level"} value={ed.level}>
            <option value={"Высшее"}>Высшее</option>
            <option value={"Неполное высшее"}>Неполное высшее</option>                    
        </select>
    </fieldset>    

    <fieldset className={"fieldset fieldset-md"}>
        <label>Название учебного заведения</label>
        <input className="input" onChange={onChangeData} type="text" name={index + "-university_name"} value={ed.university_name}/>
    </fieldset>   
    <fieldset className={"fieldset fieldset-md"}>
        <label>Факультет</label>
        <input className="input" onChange={onChangeData} type="text" name={index + "-major"} value={ed.major}/>
    </fieldset> 
    <fieldset className={"fieldset fieldset-md"}>
        <label>Специализация</label>
        <input className="input" onChange={onChangeData} type="text" name={index + "-faculty"} value={ed.faculty}/>
    </fieldset>       
    <fieldset className={"fieldset fieldset-md"}>
        <label>Год окончания</label>
        <input className="input" onChange={onChangeData} type="text" name={index + "-end_date"} value={ed.end_date}/>
    </fieldset>                                                                    
</div>))
    return(
        <div className="eds">
            {educations}
            <a onClick={newEducation}>{education.length > 0 ? "Указать еще одно место обучения" : "Указать место обучения"}</a>
        </div>
    )
}