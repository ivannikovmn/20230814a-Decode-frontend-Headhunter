const monthsInRussian = [
'январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'
];
  


export default function WorkingHistory({workingHistory, remove}) {
    const startDate = new Date(workingHistory.start_date)
    const endDate = new Date(workingHistory.end_date)    

    return(
        <div className="working-history">
            {/* <span>{startDate.getMonth() + 1} {startDate.getUTCFullYear()} - {endDate.getMonth() + 1} {endDate.getUTCFullYear()}</span> */}
            <span>{monthsInRussian[startDate.getMonth()]} {startDate.getUTCFullYear()} - {monthsInRussian[endDate.getMonth()]} {endDate.getUTCFullYear()}</span>
            <h4>{workingHistory.company_name}</h4>
            <p>{workingHistory.company_description}</p> 

            <span onClick={() => remove(workingHistory)}>Удалить</span>
        </div>
    )
}