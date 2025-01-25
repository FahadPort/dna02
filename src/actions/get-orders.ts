const apiUrl = `https://demo-clienttesting.com/mobiledna/backend/api/admin/orders`;
const getOrders = async () => {
   const response = await fetch(apiUrl);
   return response.json();
};

export default getOrders;