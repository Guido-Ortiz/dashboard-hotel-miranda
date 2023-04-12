const domain = 'http://localhost:3001/'

export default async function apiFetch({ url, method, body = undefined }) {
    try {
      const AUTH_DATA = JSON.parse(localStorage.getItem('admin'));
      const options = {
        method,
        body: body ? JSON.stringify(body) : undefined,
        mode: 'cors',
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${AUTH_DATA !== null ? AUTH_DATA.token : ''}`,
        },
        redirect: "follow",
        referrerPolicy: "no-referrer"
      }
      const res = await fetch(`${domain}${url}`, options)
      console.log(res)
      if (res.status >= 400) {
        console.log('Error 400')
      }
      if (res.status >= 500) {
        console.log('Server error')
      }
  
      const data = await res.json()
  
      return data
    } catch (err) {
      return []
    }
  }