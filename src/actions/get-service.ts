const apiUrl = `https://demo-clienttesting.com/mobiledna/backend/api/service`;
const getService = async (id: string) => {
   const response = await fetch(`${apiUrl}/${id}`);
   return response.json();
};

export default getService;