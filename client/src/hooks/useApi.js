export default function useApi() {
    const base = 'http://localhost:5000/api'; // or use import.meta.env.VITE_API_URL

    async function request(method, path, body) {
        const res = await fetch(`${base}${path}`, {
            method,
            headers: { 'Content-Type': 'application/json' },
            body: body ? JSON.stringify(body) : null
        });
        return await res.json();
    }

    return {
        get: path => request('GET', path),
        post: (path, body) => request('POST', path, body),
        put: (path, body) => request('PUT', path, body),
        del: path => request('DELETE', path)
    };
}