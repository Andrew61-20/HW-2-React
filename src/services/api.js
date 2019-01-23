import axios from 'axios';

axios.defaults.baseUrl='http://localhost:3001';
const BASE_URL1 = 'http://localhost:3001/orderlist';


const getAllOrderItems = () =>
axios.get (BASE_URL1).then(response => {
  console.log(response);
  return response.data;
  });    
 

const getOrderItemById = id =>
axios.get (`${BASE_URL1}/${id}`).then(response => {
  console.log(response);
  return response.data;
  });
 
const deleteOrderItem = id => 
   axios.delete (`${BASE_URL1}/${id}`).then(response => response.status === 200)
   

const addOrderItem = item =>
  axios.post(BASE_URL1, item).then(response => {
    console.log(response);
    return response.data;
    });
   
export { getAllOrderItems, getOrderItemById, deleteOrderItem, addOrderItem };

export const getAllMenuItems = async() => {
  const response = await axios.get('/menu')
  return response.data
}

export const getCategories = async() => {
  const response = await axios.get('/categories')
  return response.data
}

export const getMenuItemById = async id => {
  const response = await axios.get(`/menu/${id}`)
  return response.data
}

export const getMenuItemsWithCategory = async category => {
  const response = await axios.get(`/menu?category=${category}`)
  return response.data
}