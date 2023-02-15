export const currencyFormater = (amout: number) => {
    return new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(
        amout,
    )
}