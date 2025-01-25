const apiUrl = `https://demo-clienttesting.com/mobiledna/backend/api/services`;
const getServices = async () => {
   const response = await fetch(`${apiUrl}`);
   return response.json();
};

export default getServices;