export const getData = async () => {
  // let status = null;
  try {
    const result = await fetch("http://localhost:3000/students");
    // status = result.status;
    if (!result.ok) {
      throw new Error(`mistake: ${result.status}`);
    }

    return await result.json();
  } catch (err) {
    alert(`there is mistake get. ${err}`);
  }
};
