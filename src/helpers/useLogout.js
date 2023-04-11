import { LOGOUT } from "../context/constants"
import { useUser } from "../context/userContext"

const useLogout = () => {
    const { dispatch } = useUser()
    const logout = async () => {
        try {
            dispatch({
                type: LOGOUT
            })
        } catch(e) {
            console.log(e)
        }
    }
    return { logout }
}

export default useLogout