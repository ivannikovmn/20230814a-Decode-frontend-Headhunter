import { useEffect, useState } from "react";
import MyApply from "./apply.js";
import { useSelector } from "react-redux";

    export default function MyApplies () {      

    const [sortKey, setSortKey] = useState("status")
    const [sortDirection, setSortDirection] = useState("asc")
    // const [sortedApplies, setSortedApplies]
    const applies = useSelector((state) => state.apply.applies)

    // let sortedApplies =  []
    // if(applies.length > 0) {
    //     sortedApplies = [...applies].sort((a, b) => {             
    //         if (a.status < b.status) {
    //             return -1;
    //         }
    //         if (a.status > b.status) {
    //             return 1;
    //         }        
    //         // names must be equal
    //         return 0;        
    //     })
    // } 

    // useEffect(() => {
    //     let sortedApplies =  []
    //     if(applies.length > 0) {
    //         sortedApplies = [...applies].sort((a, b) => { 
    //             if (a.status < b.status) {
    //                 return -1;
    //             }
    //             if (a.status > b.status) {
    //                 return 1;
    //             }        
    //             // names must be equal
    //             return 0;        
    //         })
    //     }
    // }, [sortKey, sortDirection])

    let sortedApplies =  []
    // if(applies.length > 0) {
        sortedApplies = [...applies].sort((a, b) => {             
            let aPart, bPart;
            if(sortKey === "status") {
                aPart = a.status;
                bPart = b.status
            } else if(sortKey === "vacancy") {
                aPart = a.vacancy.name;
                bPart = b.vacancy.name;
            } else if(sortKey === "updatedAt") {
                aPart = a.updatedAt;
                bPart = b.updatedAt;
            }

            if (sortDirection === "asc"){
                if (aPart < bPart) {
                    return -1;
                }
                if (aPart > bPart) {
                    return 1;
                }                   
            } else {
                if (aPart > bPart) {
                    return -1;
                }
                if (aPart < bPart) {
                    return 1;
                }  
            } 
                return 0;              
        })
    // }    



    const sortBy = (key) => {
        if(sortKey === key) {
            sortDirection === "asc" ? setSortDirection("desc") : setSortDirection("asc")
        } else {
            setSortKey(key)
            setSortDirection("asc")
        }
    }

    // const showApplies = applies.map(item => (
    const showApplies = sortedApplies.map(item => (
        <MyApply item={item}
                    key={item.id}
                    />));    
        
    return (<div className="table">

    <div className="row row-header flex">
        <div className={`col ${sortDirection}`} onClick={() => sortBy('status')}>
            Статус {sortKey === "status" && <img src="/images/arrow-right.svg" />}
        </div>
        <div className={`col ${sortDirection}`} onClick={() => sortBy('vacancy')}>
            Вакансия {sortKey === "vacancy" && <img src="/images/arrow-right.svg" />}
        </div>  
        <div className={`col ${sortDirection}`} onClick={() => sortBy('updatedAt')}>
            Дата {sortKey === "updatedAt" && <img src="/images/arrow-right.svg" />}
        </div>               
    </div>        
        {showApplies}
    </div>)
}