import { LOGIN } from "../context/constants"
import { useUser } from "../context/userContext"

export const useLogin = () => {
    const { dispatch } = useUser()
    const login = async (username, email) => {
        try {
            dispatch({
                type: LOGIN,
                payload: {
                    username,
                    email
                }
            })
        } catch(e) {
            console.log(e)
        }
    }
    return { login }
}