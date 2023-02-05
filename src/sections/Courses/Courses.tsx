import { Button } from '@/components/Button/Button'
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

        <div className="container grid md:grid-cols-3 lg:grid-cols-4 items-center gap-4 py-[51px]">
          {courses.map((course,index) => {
            return (
              <CourseCard
              key={index}
              title={course.title}
              link={course.link}
              imageUrl={course.imageUrl}
              />
            )
          })}
        </div>

        <div className='max-w-[345px] w-full mx-auto my-5'>
          <Button
          text='Ver mais cursos'
          variant='secondary'
          />
        </div>
    </section>
  )
}
