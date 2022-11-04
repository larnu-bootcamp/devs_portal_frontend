
export const getUsersApi = async () => {
  try {
    const url = '/src/components/StudentCard/api/students.json'
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });
    const data = await response.json();
    console.log(data);
    return data;

  } catch (error) {
    console.log(error);
  }

}
