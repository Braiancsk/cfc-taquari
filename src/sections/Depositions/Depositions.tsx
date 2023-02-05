import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { ArrowCircleLeft, ArrowCircleRight, Quotes } from "phosphor-react";
import Image from "next/image";

export const Depositions = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef,instanceRef] = useKeenSlider({
    mode: "snap",
    
    slides: {
      origin: "center",
      perView: 1,
      spacing: 10,
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
      id="depoimentos"
      className="pt-[91px] pb-[156px] bg-secondary/20 w-full overflow-hidden my-[67px] h-[600px] lg:h-full"
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
              {[0,1,2,3].map((item, index) => (
              <div key={index} className="keen-slider__slide rounded-lg bg-[#720285] text-white p-[20px]">
                <Quotes size={50} weight="fill" />
                <p className="font-medium text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Praesent dui risus, cursus a semper a, imperdiet nec nisl. Nam
                  tincidunt imperdiet eros, eu semper arcu congue luctus.
                </p>
                <div className="flex gap-2 item-center mt-[21px]">
                  <Image
                    src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                    alt="Aluno depoimento"
                    width={50}
                    height={50}
                    className="rounded-full h-[50px] w-[50px] object-cover"
                  />
                  <div className="flex flex-col gap-1">
                    <strong className="font-medium">Jane Doe</strong>
                    <p className="text-xs">CFC Taquari</p>
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
};
