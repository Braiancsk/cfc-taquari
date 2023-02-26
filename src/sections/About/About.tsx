import Image from 'next/image'
import React from 'react'

export const About = React.forwardRef((props, ref: any) => {
  return (
    <section ref={ref} id="sobre-nos">
      <h2 className='text-4xl font-semibold text-secondary text-center'>Sobre o CFC:</h2>

      <div className="grid lg:grid-cols-2 gap-5 container mt-[67px]">
        <div>
          <Image src="/about-img.jpg" width={750} height={254} alt="Imagem do time do CFC Taquari" />
        </div>
        <p className='text-[#1B1B1B]/80 font-medium'>
          O CFC TAQUARI é um estabelecimento educacional cuja principal função é oferecer cursos de formação de condutores de veículos automotores.             <br />
          <br />
          <br />
          NO CFC TAQUARI você encontra:
          Instrutores qualificados e experientes: qualidade através de instrutores bem treinados e experientes, que oferecem uma formação adequada e segura aos alunos.
          <br />
          <br />
          Infraestrutura adequada: temos infraestrutura adequada para oferecer cursos, incluindo salas de aula confortáveis, equipamentos modernos, veículos em boas condições, entre outros.
          <br />
          <br />
          Metodologia de ensino eficiente: utilizamos metodologia de ensino eficiente e atualizada, que leva em conta as necessidades e características de cada aluno, para que ele possa aprender de forma mais fácil e rápida.      
          <br />
          <br />
          Acompanhamento do aluno: acompanhamos o aluno durante todo o processo de aprendizagem, desde as aulas teóricas até as práticas, oferecendo orientação e suporte sempre que necessário.
          <br />
          <br />
          Preparação para os exames: O centro de formação de condutores prepara os alunos para os exames teóricos e práticos, oferecendo treinamento adequado e simulando as situações que serão enfrentadas no exame.
          <br />
          <br />
          Comprometimento com a segurança: O CFC TAQUARI tem comprometimento com a segurança, orientando os alunos a respeito das normas de trânsito e promovendo práticas seguras no aprendizado da direção veicular.
          <br />
          <br />
          Atendimento ao cliente: Respondemos prontamente às dúvidas e necessidades de nossos alunos, e prestamos um serviço de excelência.
          <br />
          <br />
          <strong>Venha nos conhecer!</strong>
          </p>
          </div>
    </section>
  )
})
