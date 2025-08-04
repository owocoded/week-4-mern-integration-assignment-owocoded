import api from '../services/api'; // Update path as needed

export default function useApi() {
    return {
        get: path => api.get(path).then(res => res.data),
        post: (path, body) => api.post(path, body).then(res => res.data),
        put: (path, body) => api.put(path, body).then(res => res.data),
        del: path => api.delete(path).then(res => res.data),
    };
}


// export default function useApi() {
//     const base = 'http://localhost:5000/api'; // or use import.meta.env.VITE_API_URL

//     async function request(method, path, body) {
//         const res = await fetch(`${base}${path}`, {
//             method,
//             headers: { 'Content-Type': 'application/json' },
//             body: body ? JSON.stringify(body) : null
//         });
//         return await res.json();
//     }

//     return {
//         get: path => request('GET', path),
//         post: (path, body) => request('POST', path, body),
//         put: (path, body) => request('PUT', path, body),
//         del: path => request('DELETE', path)
//     };
// }
