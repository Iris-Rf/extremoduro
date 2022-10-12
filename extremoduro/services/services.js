export const getData = async (param) => {
  try {
    const data = await fetch(`https://extremoduro.onrender.com/${param}`);
    const dataJSON = await data.json();
    return dataJSON;
  } catch (error) {
    console.log("Error:", error);
  }
};
