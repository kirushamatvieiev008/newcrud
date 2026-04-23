export const createItem = async (ob) => {
  const options = {
    method: "POST",
    body: JSON.stringify(ob),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  };

  try {
    const res = await fetch("http://localhost:3000/students", options);
    if (!res.ok) {
      throw new Error(`there is some mistake ${res.status}`);
    }
    return await res.json();
  } catch (err) {
    console.log(err);
  }
};
