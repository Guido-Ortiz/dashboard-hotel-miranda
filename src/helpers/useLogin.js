import { LOGIN } from "../context/constants"
import { useUser } from "../context/userContext"

export const useLogin = () => {
    const { dispatch } = useUser()
    const login = async (password, email) => {
        try {
            dispatch({
                type: LOGIN,
                payload: {
                    email,
                    password
                }
            })
        } catch(e) {
            console.log(e)
        }
    }
    return { login }
}