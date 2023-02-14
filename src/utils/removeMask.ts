export const removeMask = (str:string) => {
    const regex = /[&\/\\#,+()$~%.'":*?<>{}-]/g
    return str.replace(regex,'')
}