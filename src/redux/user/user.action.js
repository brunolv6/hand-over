export const recebeEmail = (emailParcial) => ({
    type: "RECEBE_EMAIL",
    payload: emailParcial
})

export const recebePassword = (passwordParcial) => ({
    type: "RECEBE_PASSWORD",
    payload: passwordParcial
})

export const entrarSair = () => ({
    type: "MUDAR_ESTADO_SIGN"
})