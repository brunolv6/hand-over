const INITIAL_STATE = {
    email: '',
    password: '',
    isSignedIn: false
}

const mudarSign = (email, password) => {
    console.log(email);
    console.log(password);

    return (email === 'brunolv6@gmail.com' && password === '123')? true: false
}
    /* fetch('http://sandbox.oihandover.com/business/login', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
    })
        .then(resp => resp.json())
        .then(data => {
            console.log(data);
            if(data.token === "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiIzY…3NDh9.uzpiXlOfhtJS6FDGK15JfdlkzHG5RGpS3mz44FIViIA"){
                return true
            }
            else{
                return false
            }
        }) */

export const userReducer = (state=INITIAL_STATE,  action) => {
    switch(action.type){
        case "RECEBE_EMAIL":
            return{
                ...state,
                email: action.payload
            }
        case "RECEBE_PASSWORD":
            return{
                ...state,
                password: action.payload
            }
        case "MUDAR_ESTADO_SIGN":
            return{
                ...state,
                isSignedIn: () => mudarSign(state.email, state.password)
            }
        default:
            return{
                ...state
            }
    }
}