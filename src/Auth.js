import jwt_decode from "jwt-decode";

export function isAdmin(){
    
    const checkJwt = (token) =>{
        var strToken = jwt_decode(token);
        if(strToken.admin === '1'){
            return true;
        }else{
            return false;
        }
    }
    
    return (
        (
            getToken() != null ?
                checkJwt(getToken())
            :
                false 
        )
    ) 
}

export function setToken(token) {
    localStorage.setItem('@project-app/token', token)
}

export function getToken() {
    return localStorage.getItem('@project-app/token')
}

export function deleteToken() {
    localStorage.removeItem('@project-app/token')
}