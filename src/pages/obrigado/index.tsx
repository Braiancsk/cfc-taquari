import { CheckCircle } from "phosphor-react";

export default function index(){
    return (
        <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <CheckCircle size={100} weight="fill" color="#FFB804"/>
            <h1 className="text-title text-3xl mb-2">Seu pedido foi confirmado!</h1>
            <p className="text-title/80">Sua matrícula será realizada assim que o pagamento for aprovado e seu login será enviado para o <strong>E-mail</strong> cadastrado na compra</p>
        </main>
    )
}