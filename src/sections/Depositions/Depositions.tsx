import { useState,forwardRef } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { ArrowCircleLeft, ArrowCircleRight, Quotes } from "phosphor-react";

const depositionsItems = [
  {
    name:'Thalma Silveira recomenda CFC Taquari.',
    data:'13 de Junho de 2023',
    deposition:'Atendimento perfeito e o carinho das gurias é o melhor!!♥️'
  },
  {
    name:'Maxsuel Brandão Vargas recomenda CFC Taquari.',
    data:'13 de Junho de 2023',
    deposition:'Gostei muito da recepção e de todas as aulas até então'
  },
  {
    name:'Queila Santos',
    data:'12 de Junho de 2023',
    deposition:'Muito proficionalismo,professora super atenciosa e empenhada a ensinar os alunos. Que continuem com esse atendimento de excelência. Parabéns!'
  },
  {
    name:'Tatiane Vilmar Bizarro recomenda CFC Taquari.',
    data:'26 de novembro de 2021',
    deposition:'Sim!!Recomendo 👏👏👏São Atenciosas e Nos Tratam Muito Bem🥰👏Os Instrutores São Nota 1000 👏👏👏'
  },
  {
    name:'Andrielly Menger recomenda CFC Taquari.',
    data:'25 de setembro de 2020',
    deposition:'Ótimos instrutores e equipe muito simpática e prestativa!'
  },
  {
    name:'Carlos Y Camila recomenda CFC Taquari.',
    data:'23 de setembro de 2020',
    deposition:'Uma boa escola para quem procura se habilitar! Professores e instrutores nota 100 !'
  },
  {
    name:'Verinha Silveira recomenda CFC Taquari.',
    data:'4 de janeiro de 2020',
    deposition:'otimos profissionais, otimos instrutores , nota 10. parabéns!!'
  },

]

export const Depositions = forwardRef((props,ref:any) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef,instanceRef] = useKeenSlider({
    mode: "snap",
    slides: {
      origin: "center",
      perView: 1,
      spacing: 60,
    },
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    
  });

  return (
    <section
    ref={ref}
      id="depoimentos"
      className="pt-[91px] pb-[156px] bg-secondary/20 w-full overflow-hidden my-[67px] h-max lg:h-full"
    >
      <div className="flex flex-col lg:flex-row gap-8 items-center container">
        <div className="w-full lg:ml-auto flex-1">
          <strong className="lg:text-[40px] text-3xl lg:leading-[48px] text-secondary font-semibold block">
            O que nossos alunos dizem sobre nós
          </strong>
          <p className="font-semibold lg:text-lg text-title/80 max-w-[380px] lg:leading-[28px]">
            Veja o que nossos alunos dizem sobre nossa alta taxa de aprovação
          </p>
        </div>

        <div className="relative flex-1 w-full h-full navigation-wrapper">
          <div className="lg:absolute left-0 lg:top-[-140px] mr-auto lg:ml-auto">
            <div ref={sliderRef} className="keen-slider">
              {depositionsItems.map((item, index) => (
              <div key={index} className="keen-slider__slide rounded-lg bg-[#720285] text-white p-[20px] h-max">
                <Quotes size={50} weight="fill" />
                <p className="font-medium max-w-[600px] text-sm">
                  {item.deposition}
                </p>
                <div className="flex gap-2 item-center mt-[21px]">
                  <div className="flex flex-col gap-1">
                    <strong className="font-medium">{item.name}</strong>
                    <p className="text-xs">{item.data}</p>
                  </div>
                </div>
              </div>
              ))}
           
            </div>
            {loaded && instanceRef.current && (
              <>
            <button
            className="absolute bottom-[-70px] group disabled:cursor-not-allowed"
            onClick={(e: any) =>
              e.stopPropagation() || instanceRef.current?.prev()
            }
            disabled={currentSlide === 0}
          >
            <ArrowCircleLeft className="fill-[#720285] group-disabled:opacity-50" weight="fill" size={50}/>
          </button>
            <button
            className="absolute left-[60px] bottom-[-70px] group disabled:cursor-not-allowed"
            onClick={(e: any) =>
              e.stopPropagation() || instanceRef.current?.next()
            }
            disabled={currentSlide ===
              instanceRef?.current?.track.details.slides.length! - 1}
          >
            <ArrowCircleRight className="fill-[#720285] group-disabled:opacity-50" weight="fill" size={50}/>
          </button>
            
              </>
          )}
          </div>

        </div>
      </div>
    </section>
  );
})
