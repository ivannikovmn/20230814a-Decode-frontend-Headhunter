import MyResume from "./myresume";
// export default function MyResumes (props) {
// export default function MyResumes (asd) {    
    export default function MyResumes ({resumes}) {      
    // const {asd} = props
    // const resumes = [1, 2, 3, 4, 5]
    // const showResumes = asd.map(item => (<MyResume/>));
    // const showResumes = props.asd.map(item => (<MyResume/>));
    // const showResumes = resumes.map(item => (<MyResume/>));

    // const showResumes = resumes.map(item => (<MyResume item={item} />)); 
    
    const showResumes = resumes.map(item => (
        // (<MyResume position={item.position} 
        //            createdAt={item.createdAt} 
        //            show={item.stats.show} 
        //            views={item.stats.views} 
        //            applies={item.stats.applies}/>));
        // (<MyResume position={item.position} 
        // <MyResume
        //     // <профиксино, иначе не создавалось резюме>
        //     position={item?.position ?? 'Позиция не указана'}
        //     createdAt={item?.createdAt ?? 'Дата не указана'}
        //     // </профиксино, иначе не создавалось резюме>
        //     show={0}
        //     views={0}
        //     applies={0}
        //     key={0}
        // />
        // ));
        <MyResume item={item}
        key={item.id}
        />));    
    return (<div>
        {showResumes}
    </div>)
}