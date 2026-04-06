export const createItem = (ob) => {
    const options = {
        method: "POST",
        body: JSON.stringify(ob),
        headers: {"Content-type": "application/json, charset=UTF-8"} 
    }
    return fetch('http://localhost:3000/students', options).then(res => res.json());
}