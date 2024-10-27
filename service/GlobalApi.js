import axios from 'axios';

const API_KEY = import.meta.env.VITE_STRAPI_API_KEY;

const axiosClient = axios.create({
    baseURL: 'http://localhost:1337/api/',
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`
    }
});

const CreateNewResume = (data) => {
    console.log("Data posted::", + data);
    return axiosClient.post('/user-resumes', data);
}

const GetUsersResumes = (userEmail) => {
    return axiosClient.get('/user-resumes');   
}

const UpdateResumeDetail = (id,data) => axiosClient.put('/user-resumes/'+id, data);




export default {
    CreateNewResume,
    GetUsersResumes,
    UpdateResumeDetail
};