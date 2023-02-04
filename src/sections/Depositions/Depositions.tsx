import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { ArrowCircleLeft, Quotes } from "phosphor-react";
import Image from "next/image";

export const Depositions = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef,instanceRef] = useKeenSlider({
    mode: "snap",
    slides: {
      origin: "center",
      perView: 2,
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
      id="#depositions"
      className="pt-[91px] pb-[156px] bg-secondary/20 w-full overflow-hidden my-[67px]"
    >
      <div className="flex flex-col lg:flex-row gap-8 items-center container">
        <div className="w-full mx-auto lg:ml-auto flex-1">
          <strong className="text-[40px] leading-[48px] text-secondary font-semibold block">
            O que nossos alunos dizem sobre nós
          </strong>
          <p className="font-semibold text-lg text-title/80 max-w-[380px] leading-[28px]">
            Veja o que nossos alunos dizem sobre nossa alta taxa de aprovação
          </p>
        </div>

        <div className="relative flex-1 h-full navigation-wrapper">
          <div className="lg:absolute left-0 top-[-140px] ml-auto">
            <div ref={sliderRef} className="keen-slider">
              <div className="keen-slider__slide lg:max-w-[711px] w-full rounded-lg bg-[#720285] text-white p-[20px]">
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
              <div className="keen-slider__slide lg:max-w-[700px] w-full rounded-lg bg-[#720285] text-white p-[20px]">
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
              <div className="keen-slider__slide lg:max-w-[700px] w-full rounded-lg bg-[#720285] text-white p-[20px]">
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
            </div>
          </div>
          <button
            className="absolute bottom-[-181px] right-0"
            onClick={(e: any) =>
              e.stopPropagation() || instanceRef.current?.prev()
            }
            disabled={currentSlide === 0}
          >
            <ArrowCircleLeft color="#720285" weight="fill" size={50}/>
          </button>
        </div>
      </div>
    </section>
  );
};
