export const update = async (id, obj) => {
  const options = {
    method: "PATCH",
    body: JSON.stringify(obj),
    headers: { "Content-Type": "application/json; charset=UTF-8" },
  };
  try {
    const res = await fetch(`http://localhost:3000/students/${id}`, options);
    if (!res.ok) {
      throw new Error(`there is mistake: ${res.status}`);
    }
    return await res.json();
  } catch(err) {
    alert(err);
  }
};
