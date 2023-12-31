'use client'
// import Header from '../../components/header'
import Header from '@/components/header'
import MyResumes from '@/components/myresumes'
import { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { getMyResumes } from '@/app/store/slices/resumeSlice';
import Link from 'next/link'

export default function ResumePage() {

  const dispatch = useDispatch();
  const resumes = useSelector((state) => state.resume.resumes)
  // console.log("here", resumes);
  const didMount = () => {
    dispatch(getMyResumes())
  }
  useEffect(didMount, [])

  // const resumes = [1, 2, 3, 4, 5]
  // const resumes = [{
  //   position: "Менеджер отдела продаж",
  //   createdAt: "25.07.2023",
  //   stats: {
  //     views: 0,
  //     applies: 0,
  //     show: 0
  //   }
  // }, 
  // {
  //   position: "Back-end Developer",
  //   createdAt: "20.08.2023",
  //   stats: {
  //     views: 100,
  //     applies: 7,
  //     show: 100
  //   }
  // }
  // , 
  // {
  //   position: "React Developer",
  //   createdAt: "10.05.2023",
  //   stats: {
  //     views: 4,
  //     applies: 1,
  //     show: 513
  //   }
  // }]

  return (
    <main>
      <Header />
      <div className='container'>
        <div className='flex flex-ai-c flex-js-sb ptb7'>
            <h1>Мои Резюме</h1>
            {/* <button className='button button-secondary-bordered'>Создать резюме</button> */}
            <Link className='button button-secondary-bordered' href="/create-resume">Создать резюме</Link>
        </div>   

        {/* <MyResumes asd={resumes}/>      */}
        <MyResumes resumes={resumes}/>  
      </div>
    </main>
  )
}
