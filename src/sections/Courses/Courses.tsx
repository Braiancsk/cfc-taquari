import { CourseCard } from '@/components/CourseCard/CourseCard'
import React from 'react'


const courses = [
  {
    title:'Primeiros socorros',
    link:'https://google.com',
    imageUrl:'https://images.unsplash.com/photo-1563260324-5ebeedc8af7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
  },
  {
    title:'Primeiros socorros',
    link:'https://google.com',
    imageUrl:'https://images.unsplash.com/photo-1563260324-5ebeedc8af7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
  },
  {
    title:'Primeiros socorros',
    link:'https://google.com',
    imageUrl:'https://images.unsplash.com/photo-1563260324-5ebeedc8af7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
  },
  {
    title:'Primeiros socorros',
    link:'https://google.com',
    imageUrl:'https://images.unsplash.com/photo-1563260324-5ebeedc8af7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
  },
  {
    title:'Primeiros socorros',
    link:'https://google.com',
    imageUrl:'https://images.unsplash.com/photo-1563260324-5ebeedc8af7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
  },
]
export const Courses = () => {
  return (
    <section id="cursos" className='pt-[67px] lg:pt-[227px] pb-[67px]'>
        <h2 className='text-secondary font-semibold text-4xl text-center'>Cursos</h2>

        <div className="container grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 items-center gap-4 py-[51px]">
          {courses.map(course => {
            return (
              <CourseCard
              title={course.title}
              link={course.link}
              imageUrl={course.imageUrl}
              />
            )
          })}
        </div>
    </section>
  )
}
