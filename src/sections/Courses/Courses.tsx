import { CoursesDataTypes } from '@/@types/CoursesDataTypes.types'
import { Button } from '@/components/Button/Button'
import { CourseCard } from '@/components/CourseCard/CourseCard'
import React from 'react'


export const Courses = React.forwardRef(({courses}:any,ref:any) => {
  return (
    <section ref={ref} id="cursos" className='pt-[67px] lg:pt-[227px] pb-[67px]'>
        <h2  className='text-secondary font-semibold text-4xl text-center'>Cursos</h2>

        <div className="container grid md:grid-cols-3 lg:grid-cols-4 items-center gap-4 py-[51px] relative">
          {courses?.map((course:CoursesDataTypes) => {
            return (
              <CourseCard
              key={course.codigoCurso}
              title={course.title}
              link={`/inscricao/${course.slug}`}
              imageUrl={course.image_url}
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
})
