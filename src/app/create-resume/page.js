'use client';
import Header from '@/components/header'
import Input from '@/components/input';
import { END_POINT } from '@/config/end-point';
import axios from 'axios';
// import { use, useEffect, useState } from 'react';
import { useEffect, useState } from 'react';
import AutoCompliteSelect from '@/components/AutoCompliteSelect'
import SelectDate from '@/components/SelectDate';
import WorkingHistory from '@/components/WorkingHistory'; 
import AutoCompliteTags from '@/components/AutoCompliteTags';
import ModalAddExp from '@/components/ModalAddExp';
import AddEducation from '@/components/AddEducation';
import AddLang from '@/components/AddLang';
import SelectEmploymentTypes from '@/components/SelectEmploymentTypes';
import { useRouter } from "next/navigation";
import { useDispatch } from 'react-redux';
import { createResume } from '@/app/store/slices/resumeSlice';

export default function CreateResume() {

  const router = useRouter()
  const dispatch = useDispatch()
  const [cities, setCities] = useState([])
  const [countries, setCountries] = useState([])
  // const [skills, setSkills] = useState([])
  const [allSkills, setSkills] = useState([])
  const [allEmploymentTypes, setEmploymentTypes] = useState([])
  const [workingHistories, setworkingHistories] = useState([])
  const [ModalExpIsOpen, setmodalExpIsOpen] = useState(false)
  const [first_name, setName] = useState("")
  const [last_name, setSurname] = useState("") 
  const [phone, setPhone] = useState("")   
  // const [phone, setPhone] = useState([])   
  const [cityId, setCitiy] = useState()  
  const [birthday, setBirthday] = useState()  
  const [gender, setGender] = useState("") 
  const [citizenship, setCitizenship] = useState() 
  const [position, setPosition] = useState("") 
  const [salary, setSalary] = useState() 
  const [salary_type, setSalaryType] = useState("KZT")  
  const [skills, setSelectedSkills] = useState("")
  const [education, setEducation] = useState([])
  const [foreignLanguages, setForeignLanguages] = useState("")
  const [employmentTypes, setSelectedEmpTypes] = useState([])
  const [about, setAbout] = useState("")
  
  useEffect(() => {
    console.log("didMount");
    axios.get(`${END_POINT}/api/region/cities`).then(res => {
      // console.log(res.data);
      setCities(res.data)
    })

    axios.get(`${END_POINT}/api/region/countries`).then(res => {
      // console.log(res.data);
      setCountries(res.data)
    })    

    axios.get(`${END_POINT}/api/skills`).then(res => {
      // console.log(res.data);
      setSkills(res.data)
    })  
    
    axios.get(`${END_POINT}/api/employment-types`).then(res => {
      // console.log(res.data);
      setEmploymentTypes(res.data)
    })    
  }, [])

  // console.log("rerender", {
  //   first_name,
  //   last_name,
  //   cityId,
  //   birthday,
  //   gender,
  //   citizenship,
  //   salary,
  //   salary_type,
  //   position,
  //   skills,
  //   education,
  //   employmentTypes,
  //   foreignLanguage
  // })

  // const onSelect =(data) => {
  //   console.log('onSelect', data);
  // }
  const onSelect =(data) => {
    
  }  
  
  const closeModalExp = () => {
    setmodalExpIsOpen(false)
  }

  const addWorkingHistory = (item) => {
    setworkingHistories([...workingHistories, item])
    closeModalExp();
  }

  const removeWorkingHistory = (workingHistory) => {
    let wh = [...workingHistories]
    let index = workingHistories.indexOf(workingHistory)
    wh.splice(index, 1);
    setworkingHistories(wh)
  }

  const handleGenderChange = (e) => {
    setGender(e.target.value)
  }



  const  onSkillsChange =(data) => {
    // console.log(data);
    const arr = data.map(item => item.name)
    setSelectedSkills(arr.join(","))
  }   

  // const handleSave = () => {
  //   console.log("onSave", {
  //     first_name,
  //     last_name,
  //     phone,
  //     cityId,
  //     birthday,
  //     gender,
  //     citizenship,
  //     position,
  //     about,
  //     salary,
  //     salary_type,   
  //     workingHistories,   
  //     skills,
  //     education,
  //     employmentTypes,
  //     foreignLanguage,
      
  //   })
  // }
 
  const handleSave = () => {
    dispatch(createResume(    {
      first_name,
      last_name,
      phone,
      cityId,
      birthday,
      gender,
      citizenship,
      position,
      about,
      salary,
      salary_type,   
      workingHistories,   
      skills,
      education,
      employmentTypes,
      foreignLanguages,
      main_language: "Русский",      
    }, router))

  }
   
  return (
    <main>
      <Header />
      <div className='container p7'>
        <h1>Ваше резюме</h1>

        <h3>Контактные данные</h3>
        <Input placeholder="" type="text" label="Имя" size="fieldset-md" onChange={(e) => setName(e.target.value)}/>
        <Input placeholder="" type="text" label="Фамилия" size="fieldset-md" onChange={(e) => setSurname(e.target.value)}/>
        <Input placeholder="" type="text" label="Мобильный телефон" size="fieldset-md" onChange={(e) => setPhone(e.target.value)}/>
        <AutoCompliteSelect placeholder="" type="text" label="Город проживания" size="fieldset-md" items={cities} onSelect={(data) => setCitiy(data.id)}/>
        
        <h3>Основная информация</h3>
        <SelectDate size="fieldset-sm" label="Дата рождения" onChange={(date) => setBirthday(date)}/>
        <fieldset className={"fieldset fieldset-sm"}>
            <label>Пол</label>

            <div className="radio-group">
              <div className="radio">
                <input type="radio" onChange={handleGenderChange} name="gender" id="g1" value={"Мужской"}/>
                <label for="g1">Мужской</label>
              </div>
              <div className="radio">
                <input type="radio" onChange={handleGenderChange} name="gender" id="g2" value={"Женский"}/>
                <label for="g2">Женский</label>
              </div>
            </div>            
        </fieldset>

        <AutoCompliteSelect placeholder="" type="text" label="Гражданство" size="fieldset-md" items={countries} onSelect={(data) => setCitizenship(data.id)}/>

        <h3>Специальность</h3>

        <Input placeholder="" type="text" label="Желаемая должность" size="fieldset-lg" onChange={(e) => setPosition(e.target.value)}/>

        <fieldset className={"fieldset fieldset-lg"}>
            <label>Зарплата</label>

            <div className="salary">
              <input placeholder="" type="number" className='input' value={salary} onChange={e=>setSalary(e.target.value*1)}/>
              <select className='input' value={salary_type} onChange={e=>setSalaryType(e.target.value)}>
                <option value={"KZT"}>KZT</option>
                <option value={"USD"}>USD</option>
                <option value={"RUB"}>RUB</option>
              </select>
              на руки
            </div>            
        </fieldset>

        <h3>Опыт работы</h3>
        {ModalExpIsOpen && <ModalAddExp close={closeModalExp} addWorkingHistory={addWorkingHistory}/>}
        <fieldset className={"fieldset fieldset-lg"}>
            <label>Места работы</label>

            <div className="exp">
                {/* {workingHistories.map(item => (<p>{item.company_name}</p>))}              */}
                {workingHistories.map(item => (<WorkingHistory workingHistory={item} remove={removeWorkingHistory}/>))}             
                <button className='button button-primary-bordered' onClick={()=> setmodalExpIsOpen(true)}>Добавить место работы</button>                            
            </div>            
        </fieldset>

        <fieldset className={"fieldset fieldset-lg"}>
            <label>О себе</label>
            <textarea className="textarea" placeholder='Расскажите о себе' onChange={(e) => setAbout(e.target.value)} value={about}></textarea>
        </fieldset>   

        {/* <AutoCompliteTags  placeholder="" type="text" label="Ключевые навыки" size="fieldset-md" items={countries} onSelect={onSelect}/>  */}
        {/* <AutoCompliteTags  placeholder="" type="text" label="Ключевые навыки" size="fieldset-md" items={skills} onSelect={onSelect}/>  */}        
        <AutoCompliteTags  placeholder="" type="text" label="Ключевые навыки" size="fieldset-md" items={allSkills} onSelect={onSkillsChange} selected={skills.length > 0 ? skills.split(",").map(item=> ({name: item})) : []}/> 

        <h3>Образование</h3>

        <AddEducation onChange={(eds) => setEducation(eds)} education={[]}/>

        <h3>Владение языками</h3>

        <AddLang onChange={(lns) => setForeignLanguages(lns)} foreignLanguages={[]}/>

        <h3>Другая важная информация</h3>
        <SelectEmploymentTypes label="Занятость" size="fieldset-md" allEmploymentTypes={allEmploymentTypes} onChange={(tps) => setSelectedEmpTypes(tps)} employmentTypes={[]}/>

        <button className='button button-primary' onClick={handleSave}>Сохранить и опубликовать</button>
      </div>
    </main>
  )
}
