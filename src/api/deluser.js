export const deleteUser = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/students/${id}`, {
      method: "DELETE",
    });
    if (!res.ok) {
      throw new Error(`there is mistake: ${res.status}`);
    }
    return await res.json();
  } catch(err) {
    alert(err);
  }
};
