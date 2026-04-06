export const getData = () => {
    return fetch('http://localhost:3000/students').then(res => res.json())
}