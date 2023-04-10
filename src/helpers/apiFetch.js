const url = 'http://localhost:3001/'

const apiFetch = async (endpoint, method, data) => {
    let token = localStorage.getItem('admin')
    if (localStorage.getItem('admin')) token = JSON.parse(token).token
    console.log(token.token)
    const response = await fetch(url + endpoint, {
        method: method,
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token.token}`,
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: data ? JSON.stringify(data) : null,
    })

    return response.json()
}

export default apiFetch