import axios from "axios";



export const fetchUsersData = ()=>{
    return axios.get("https://jsonplaceholder.typicode.com/todos");
}

export const fetchuserById =async(id)=>{
    return axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
}

export const updateuserById = async(id ,data)=>{
    return axios.put(`https://jsonplaceholder.typicode.com/todos/${id}`, data)
}


