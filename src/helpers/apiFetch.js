// const url = 'http://localhost:3001/'

// const apiFetch = async (endpoint, method, data) => {
//     let token = localStorage.getItem('admin')
//     if (localStorage.getItem('admin')) token = JSON.parse(token).token
//     console.log(token.token)
//     const response = await fetch(url + endpoint, {
//         method: method,
//         mode: "cors",
//         cache: "no-cache",
//         credentials: "same-origin",
//         headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token.token}`,
//         },
//         redirect: "follow",
//         referrerPolicy: "no-referrer",
//         body: data ? JSON.stringify(data) : null,
//     })

//     return response.json()
// }

// export default apiFetch







const domain = 'http://localhost:3001/'

export default async function apiFetch({ url, method, body = undefined }) {
    try {
      const AUTH_DATA = JSON.parse(localStorage.getItem('admin'));
      const options = {
        method,
        body: body ? JSON.stringify(body) : undefined,
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${AUTH_DATA !== null ? AUTH_DATA.token : ''}`,
        },
      };
      const res = await fetch(`${domain}${url}`, options);
  
      if (res.status >= 400) {
        console.log('Error 400')
      }
      if (res.status >= 500) {
        console.log('Server error')
      }
  
      const data = await res.json();
  
      return data;
    } catch (err) {
      return [];
    }
  }