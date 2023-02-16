export type ButtonProps = {
    onClick:() => void
    text:string
    variant?:'primary' | 'secondary'
    href?:string
    padding?:string
    fontSize?:string
    isLoading?:boolean
}