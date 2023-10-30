import axios from "axios";
export const githubInfoLoader = async () => {
  try {
    const response = await axios.get("https://api.github.com/users/Alitechpro");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// Using Fetch
// export const githubInfoLoader = async () => {
//   const response = await fetch("https://api.github.com/users/hiteshchoudhary");
//   return response.json();
// };
