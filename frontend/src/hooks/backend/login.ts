export function loginUser(email: string, password: string) {
    let controller = new AbortController();
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
        signal: controller.signal,
    };
    return fetch(
        `${import.meta.env.VITE_BACKEND}/auth/login`,
        requestOptions
    ).then((response) => response.json());
}