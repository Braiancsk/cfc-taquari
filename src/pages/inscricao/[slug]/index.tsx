import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { HeaderLink } from "@/components/Header/HeaderLink/HeaderLink";
import { FacebookLogo, InstagramLogo, Phone } from "phosphor-react";
import Image from "next/image";
import { MobileHeader } from "@/components/MobileHeader/MobileHeader";
import InputMask from 'react-input-mask';
import { useForm, Controller } from "react-hook-form";
import { api } from "@/services/api";
import axios from "axios";
import { removeMask } from "@/utils/removeMask";
import { format, formatISO, isValid } from "date-fns";
import { GetStaticPaths, GetStaticProps } from "next";
import { CoursesDataTypes } from "@/@types/CoursesDataTypes.types";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { currencyFormater } from "@/utils/currencyFormater";
import { isValidCPF } from "@/utils/validateCpf";
import { ErrorMessage } from "@hookform/error-message";

interface FormData {
  nome: string;
  email: string;
  cpf: string;
  telefone: string;
  nascimento: string;
  cep: string;
  endereco: string;
  numero: string;
  complemento: string;
  bairro: string;
  cidade: string;
}

interface ContextProps {
  course:CoursesDataTypes
}


export const getStaticPaths: GetStaticPaths = async () => {

  // Call an external API endpoint to get posts
  const {data} = await api.get(`/courses`)
  const courses:CoursesDataTypes[] = data.courses

  // Get the paths we want to prerender based on posts
  // In production environments, prerender all pages
  // (slower builds, but faster initial page load)
  const paths = courses.map((post) => ({
    params: { slug: post.slug },
  }))

  // { fallback: false } means other routes should 404
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps<{ course: CoursesDataTypes }> = async ({params}:any) => {
  const {slug} = params
  const {data} = await api.get(`/course/${slug}`)
  const course:CoursesDataTypes = data.data

  return {
    props: {
      course:course ?? []
    },
  }
}
export default function index({course}:ContextProps) {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setValue,
    setError,
    clearErrors
  } = useForm<FormData>();

  const [windowWidth, setWindowWidth] = useState<null | number>(null);
  const [isCpfValid, setIsCpfValid] = useState(false)

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  function convertDateToApi(date:string){
    const splitDate = date.split('/')
    const dd = splitDate[0]
    const mm = splitDate[1]
    const yy = splitDate[2]
    return `${mm}/${dd}/${yy}` 
  }


  async function createCheckout() {
    const date = new Date();
    const boletoDueAt = format(new Date(date.setDate(date.getDate() + 3 /*days*/)), 'MM/dd/yyyy') 

    const pagarmePayload = {
      customer: {
        name: getValues("nome"),
        email: getValues("email"),
        document:removeMask(getValues('cpf')),
        document_type: 'CPF',
        type:'individual',  
        phones: {
          mobile_phone: {
            country_code: "55",
            area_code: removeMask(getValues('telefone')).substring(0,2),
            number: removeMask(getValues('telefone')).substring(3,removeMask(getValues('telefone')).length),
          },
        },
        birthday: convertDateToApi(getValues('nascimento')),
        metadata: {
          codigoCFC: "1",
          codigoCurso: course.codigoCurso,
          nome: getValues("nome"),
          email: getValues("email"),
          cpf: getValues("cpf"),
          telefone: getValues("telefone"),
          nascimento: getValues("nascimento"),
          cep: getValues("cep"),
          endereco: getValues("endereco"),
          numero: getValues("numero"),
          complemento: getValues("complemento"),
          bairro: getValues("bairro"),
          cidade: getValues("cidade"),
        },
      },
    };

    try {
      const { data } = await api.post("/checkout", pagarmePayload);
      console.log(data);
    } catch (error: any) {
      console.error(error);
    }
  }

  async function getAddress(e: React.ChangeEvent<HTMLInputElement>) {
    try {
      if (!e.target.value.includes('_')) {
        const { data } = await axios.get(
          `https://viacep.com.br/viacep.com.br/ws/${removeMask(e.target.value)}/json/`
        );
        setValue('endereco',data.logradouro)
        setValue('complemento',data.complemento)
        setValue('bairro',data.bairro)
        setValue('cidade',data.localidade)

        setIsCpfValid(true)
      }
    } catch (error: any) {
      console.error(error);
    }
  }

  return (
    <main>
      <header className="bg-secondary min-h-[400px] flex flex-col justify-between">
      <div className="container flex items-center justify-between py-6">

              <Link href="/">
              <Image
                src="/LOGO.png"
                width={194}
                height={41}
                alt="Logo da empresa CFC Taquari"
              />
              </Link>
         

              <div className="flex gap-6 items-center">
                <div className="flex gap-2">
                  <div className="flex items-center justify-center rounded-lg bg-white w-[30px] h-[30px]">
                    <Phone size={24} />
                  </div>
                  <div className="flex flex-col">
                    <a
                      href="https://api.whatsapp.com/send?phone=5551997376401&text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20os%20cursos"
                      className="text-xs font-medium text-white"
                    >
                      (51) 99737-6401
                    </a>
                    <a
                      href="mailto:contato@cfctaquari.com.br"
                      className="text-xs font-medium text-white"
                    >
                      contato@cfctaquari.com.br
                    </a>
                  </div>
                </div>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  className="flex items-center justify-center rounded-lg bg-white w-[30px] h-[30px]"
                >
                  <FacebookLogo size={24} />
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  className="flex items-center justify-center rounded-lg bg-white w-[30px] h-[30px]"
                >
                  <InstagramLogo size={24} />
                </a>
              </div>
            </div>

        <div className="container min-h-[130px]">
          <h1 className="text-white text-3xl">Curso: {course.title}</h1>
        </div>
      </header>

      <section className="container grid lg:grid-cols-2 gap-5 mt-7">
        <div className="bg-white shadow-md rounded-lg p-4 h-max flex flex-col gap-3">
          <strong className="text-title text-lg block">Curso: {course.title}</strong>
          <strong className="text-title text-lg block">Valor: {currencyFormater(course.amount)}</strong>
        </div>

        <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-3xl font-semibold text-title">
          Preencha os dados abaixo para fazer a matricula
        </h2>
        <p className="text-title/80">
          Após preencher os dados, você deverá realizar o pagamento para que a
          matricula seja concluída
        </p>

        <form
          onSubmit={handleSubmit(createCheckout)}
          className="flex flex-col gap-5 my-7 max-w-[800px]"
        >
          <div className="grid md:grid-cols-2 items-center gap-3">
            <div className="flex flex-1 flex-col gap-1">
              <label htmlFor="name" className="text-title-/80 text-sm">
                Nome
              </label>
              <input
                {...register("nome")}
                required
                id="name"
                className="transition placeholder:text-sm placeborder:text-title/80 border border-gray-800 focus:outline-0 focus:ring focus:ring-secondary p-2 rounded-lg"
                type="text"
                placeholder="Insira seu nome completo"
              />
            </div>

            <div className="flex flex-1 flex-col gap-1">
              <label htmlFor="cpf" className="text-title-/80 text-sm">
                CPF
              </label>
              <InputMask
                mask="999.999.999-99"
                {...register("cpf",{
                  onChange:(e) => {
                    if(!isValidCPF(removeMask(e.target.value))){
                      setError('cpf',{message:'Insira um cpf válido'})
                    }else{
                      clearErrors('cpf')
                    }
                  }
                })}
                id="cpf"
                className="transition placeholder:text-sm placeborder:text-title/80 border border-gray-800 focus:outline-0 focus:ring focus:ring-secondary p-2 rounded-lg"
                type="text"
                placeholder="Insira seu CPF"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 items-center gap-3">
            <div className="flex flex-1 flex-col gap-1">
              <label htmlFor="name" className="text-title-/80 text-sm">
                Email
              </label>
              <input
                {...register("email")}
                className="transition placeholder:text-sm placeborder:text-title/80 border border-gray-800 focus:outline-0 focus:ring focus:ring-secondary p-2 rounded-lg"
                type="email"
                placeholder="Insira seu melhor email"
              />
            </div>

            <div className="flex flex-1 flex-col gap-1">
              <label htmlFor="telefone" className="text-title-/80 text-sm">
                Telefone
              </label>
              <InputMask
                mask="(99) 99999-9999"
                {...register("telefone")}
                id="telefone"
                className="transition placeholder:text-sm placeborder:text-title/80 border border-gray-800 focus:outline-0 focus:ring focus:ring-secondary p-2 rounded-lg"
                type="text"
                placeholder="Insira seu telefone"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 items-center gap-3">
          <div className="flex flex-1 flex-col gap-1">
              <label htmlFor="nascimento" className="text-title-/80 text-sm">
                Data Nasci
              </label>
              <InputMask
                mask="99/99/9999"
                {...register("nascimento",{
                  onChange:(e) => {
                    if(!isValid(format(new Date(e.target.value),'MM/dd/yyyy'))){
                      setError('nascimento',{message:'Insira uma data válida'})
                    }else{
                      clearErrors('nascimento')
                    }
                  }
                })}
                id="nascimento"
                className="transition placeholder:text-sm placeborder:text-title/80 border border-gray-800 focus:outline-0 focus:ring focus:ring-secondary p-2 rounded-lg"
                type="text"
                placeholder="Insira sua data de nascimento"
              />
            </div>

            <div className="flex flex-1 flex-col gap-1">
              <label htmlFor="cep" className="text-title-/80 text-sm">
                CEP
              </label>
              <InputMask
                mask="99999-999"
                {...register("cep",{
                  onChange:getAddress
                })}
                id="cep"
                className="transition placeholder:text-sm placeborder:text-title/80 border border-gray-800 focus:outline-0 focus:ring focus:ring-secondary p-2 rounded-lg"
                type="text"
                placeholder="Insira seu CEP"
              />
            </div>
          </div>

          {isCpfValid && (
          <>
          <div className="grid md:grid-cols-2 items-center gap-3">
            <div className="flex flex-1 flex-col gap-1">
              <label htmlFor="address" className="text-title-/80 text-sm">
                Endereço
              </label>
              <input
                {...register("endereco")}
                id="address"
                className="transition placeholder:text-sm placeborder:text-title/80 border border-gray-800 focus:outline-0 focus:ring focus:ring-secondary p-2 rounded-lg"
                type="text"
                placeholder="Insira seu endereço"
              />
            </div>

            <div className="flex flex-1 flex-col gap-1">
              <label htmlFor="number" className="text-title-/80 text-sm">
                Número
              </label>
              <input
                {...register("numero")}
                id="number"
                className="transition placeholder:text-sm placeborder:text-title/80 border border-gray-800 focus:outline-0 focus:ring focus:ring-secondary p-2 rounded-lg"
                type="number"
                placeholder="Insira seu número"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 items-center gap-3">
            <div className="flex flex-1 flex-col gap-1">
              <label htmlFor="complement" className="text-title-/80 text-sm">
                Complemento
              </label>
              <input
                {...register("complemento")}
                id="complement"
                className="transition placeholder:text-sm placeborder:text-title/80 border border-gray-800 focus:outline-0 focus:ring focus:ring-secondary p-2 rounded-lg"
                type="text"
                placeholder="Insira seu complemento"
              />
            </div>

            <div className="flex flex-1 flex-col gap-1">
              <label htmlFor="bairro" className="text-title-/80 text-sm">
                Bairro
              </label>
              <input
                {...register("bairro")}
                id="bairro"
                className="transition placeholder:text-sm placeborder:text-title/80 border border-gray-800 focus:outline-0 focus:ring focus:ring-secondary p-2 rounded-lg"
                type="text"
                placeholder="Insira seu bairro"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 items-center gap-3">
            <div className="flex flex-1 flex-col gap-1">
              <label htmlFor="city" className="text-title-/80 text-sm">
                Cidade
              </label>
              <input
                {...register("cidade")}
                id="city"
                className="transition placeholder:text-sm placeborder:text-title/80 border border-gray-800 focus:outline-0 focus:ring focus:ring-secondary p-2 rounded-lg"
                type="text"
                placeholder="Insira sua cidade"
              />
            </div>
          </div>

          </>
          )}

      <ErrorMessage
        errors={errors}
        name="cpf"
        render={({ message }) => <p className="py-1 px-2 bg-red-800 rounded-full text-center text-white w-max">{message}</p>}
      />
      <ErrorMessage
        errors={errors}
        name="nascimento"
        render={({ message }) => <p className="py-1 px-2 bg-red-800 rounded-full text-center text-white w-max">{message}</p>}
      />

          <button
            type="submit"
            className="bg-primary p-2 max-w-[300px] w-full rounded-lg text-center text-white font-semibold text-lg ml-auto"
          >
            Adquirir curso
          </button>
        </form>
        </div>
      </section>
    </main>
  );
}