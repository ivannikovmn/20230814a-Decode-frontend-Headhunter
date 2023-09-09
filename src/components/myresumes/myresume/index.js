// export default function MyResume () {
// export default function MyResume ({item}) {
export default function MyResume ({position, createdAt, show, views, applies}) {    
    return (<div className="card mtb4">
        {/* <a className="h3">Менеджер отдела продаж {item}</a> */}
        {/* <a className="h3">{item.position}</a>
        <p>Создан {item.createdAt}</p> */}
        <a className="h3">{position}</a>
        <p>Создан {createdAt}</p>
        
        <h3>Статистика</h3>
        <div className="flex">
            {/* <a className="p3">0 показов</a>
            <a className="p3">0 просмотров</a>
            <a className="p3">0 приглашений</a> */}
            {/* <a className="p3">{item.stats.show} показов</a>
            <a className="p3">{item.stats.views} просмотров</a>
            <a className="p3">{item.stats.applies} приглашений</a>   */}             
            <a className="p3">{show} показов</a>
            <a className="p3">{views} просмотров</a>
            <a className="p3">{applies} приглашений</a>
        </div>
        {/* {item} Resume */}
    </div>)
}