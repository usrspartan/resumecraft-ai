import React, { useEffect, useState } from 'react'
import AddResume from './components/AddResume'
import { useUser } from '@clerk/clerk-react';
import GlobalApi from './../../service/GlobalApi';
import ResumeItem from './components/ResumeItem';

function Dashboard() {
const user = useUser();

const [resumeList,setResumeList] = useState([]);



useEffect(() => {
  user&&GetResumesList();
}, [user])


const GetResumesList = () => {
  GlobalApi.GetUsersResumes(user?.primaryEmailAddress?.emailAddress).then(res => {
    console.log(res.data.data);
    setResumeList(res.data.data);
  })
}
console.log("Resumes list::",resumeList);
  return (
    <div className='p-10 md:px-20 lg:px-32'>
      <h2 className='font-bold text-3xl'>My Resume</h2>
      <p>Start creating AI powered resume for your next Dream Job</p>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-10 gap-5'>
        <AddResume/>

        {resumeList.length>0&&resumeList.map((resume,index) => (
          <ResumeItem resume = {resume} key={index} refreshData={GetResumesList}/>
        ))}
      </div>
    </div>
  )
}

export default Dashboard