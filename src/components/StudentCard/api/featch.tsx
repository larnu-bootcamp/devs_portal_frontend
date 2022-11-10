import axios from "axios";


export const getUsersApi = async () => {
  try {
    const url = 'https://api-rapida-test-production.up.railway.app/'
    const response = await axios.get(url);

    return response.data;

  } catch (error) {
    console.log(error);
  }

}
