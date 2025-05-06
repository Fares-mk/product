import axios from "axios";
const url = `http://localhost:3000/products`;

// Get All courses
export async function getproducts() {
    return await axios.get(url);
}

// Add a new course
export async function addproduct(product) {
    return await axios.post(url, product);
}

// Get a single course by ID
export async function getproduct(product) {
    return await axios.get(`${url}/${product}`);
}

//Update course
export async function updateproduct( id , product) {
    return await axios.put(`${url}/${id}` , product);
}

//Delete Course
export async function deleteproduct(id) {
    return await axios.delete(`${url}/${id}`);
}
