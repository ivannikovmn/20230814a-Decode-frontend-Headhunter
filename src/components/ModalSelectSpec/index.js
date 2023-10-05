import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import SpecType from "./SpecType";

export default function ModalSelectSpec( {close, onChange, value} ) {
    const [search, setSearch] = useState("")
    const [filteredSpecTypes, setFilteredSpecTypes] = useState([])
    const specializationTypes = useSelector(state => state.vacancy.specializations)
    console.log(specializationTypes);


    const onSearch = e => {
        setSearch(e.target.value)        
        let types = [...specializationTypes]
        types = types.filter(item => {
            for(let i = 0; i < item.specializations.length; i++) {
                // if(item.specializations[i].name.includes(search)) return item //не верно
                if(item.specializations[i].name.includes(e.target.value)) return item
            }
        })
        setFilteredSpecTypes(types)


    }

    useEffect(() => {
        setFilteredSpecTypes(specializationTypes)
    }, [specializationTypes])

    return(
        <div className="modal">
            <div className="modal-backdrop" onClick={close}></div>
            <div className="modal-inner">
                <h2>Кого вы хотите найти</h2>
                {/* <input className="input" type="text" value={search} onChange={e=>setSearch(e.target.value)}/> */}
                <input className="input" type="text" value={search} onChange={onSearch} placeholder="Искать"/>

                {/* {specializationTypes.map(specType=> (<SpecType specType={specType} onChange={onChange} value={value}/>))} */}
                {filteredSpecTypes.map(specType=> (<SpecType specType={specType} key={specType.id} onChange={onChange} value={value}/>))}
            </div>
        </div>
    )
}