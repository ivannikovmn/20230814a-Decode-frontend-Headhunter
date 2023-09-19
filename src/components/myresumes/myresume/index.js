'use client';
import Link from 'next/link'
import { useDispatch } from 'react-redux'
import { deleteResume } from '@/app/store/slices/resumeSlice';
// export default function MyResume () {
export default function MyResume ({item}) {
    const dispatch = useDispatch()
// export default function MyResume ({position, createdAt, show, views, applies}) {    
    return (<div className="card mtb4">
        {/* <a className="h3">Менеджер отдела продаж {item}</a> */}
        {/* <a className="h3">{item.position}</a>
        <p>Создан {item.createdAt}</p> */}
        {/* <a className="h3">{position}</a> */}
        <Link className="h3 link" href={`/resumes/${item.id}`}>{item.position}</Link>
        {/* <p>Создан {createdAt}</p> */}
        <p>Создан {item.createdAt}</p>
        
        <h3>Статистика</h3>
        <div className="flex">
            {/* <a className="p3">0 показов</a>
            <a className="p3">0 просмотров</a>
            <a className="p3">0 приглашений</a> */}
            {/* <a className="p3">{item.stats.show} показов</a>
            <a className="p3">{item.stats.views} просмотров</a>
            <a className="p3">{item.stats.applies} приглашений</a>   */}             
            {/* <a className="p3">{show} показов</a>
            <a className="p3">{views} просмотров</a>
            <a className="p3">{applies} приглашений</a> */}
            <a className="p3">{item.show} показов</a>
            <a className="p3">{item.views} просмотров</a>
            <a className="p3">{item.applies} приглашений</a>            
        </div>
        {/* {item} Resume */}
        <span className='deleteResume' onClick={() => dispatch(deleteResume(item.id))}>Удалить</span>
    </div>)
}