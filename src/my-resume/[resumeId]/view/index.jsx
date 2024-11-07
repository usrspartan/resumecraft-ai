import Header from '@/components/custom/header'
import { Button } from '@/components/ui/button'
import { ResumeInfoContext } from '@/context/ResumeInfoContext';
import PreviewSection from '@/dashboard/resume/components/PreviewSection';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import GlobalApi from './../../../../service/GlobalApi';
import { RWebShare } from 'react-web-share';
import { data } from 'autoprefixer';

function ViewResume() {

    const [resumeInfo, setResumeInfo] = useState();
    const { resumeId } = useParams();

    useEffect(() => {
        GetResumeInfo();
    }, [])


    // const GetResumeInfo = () => {
    //     GlobalApi.GetResumeById(resumeId).then(res => {
    //         console.log("API response",res.data.data);
    //         setResumeInfo(res.data.data);
    //     })
    // }

    const GetResumeInfo = () => {
        GlobalApi.GetResumeById(resumeId).then(res => {
            const data = res.data.data;
            setResumeInfo({
                ...data,
                // themeColor: data.themeColor || '#FF5733' // Default color if none is set
                themeColor: res.data.data.themeColor || '#FF5733'               
            });
        });
    };


    const HandleDownload = () => {
        window.print();
    }

    


    return (
        <ResumeInfoContext.Provider value={{ resumeInfo, setResumeInfo }}>

            <div id="no-print">
                <Header />


                <div className='my-10 mx-10 md:mx-20 lg:mx-36'>

                    <h2 className='text-center text-2xl font-medium'>Congratulations! Your AI powered Resume is ready.</h2>
                    <p className='text-center text-gray-400'>Now you can download the resume as pdf or you can share the resume url with others.</p>

                    <div className='flex justify-between px-44 my-10'>
                        <Button onClick={HandleDownload}>Download</Button>

                        <RWebShare
                            data={{
                                text: "Hey! I have created a very productive AI powered resume using resume-craft. Visit the link to see my resume.",
                                url: import.meta.env.VITE_BASE_URL+"/my-resume/"+resumeId+"/view",
                                title: resumeInfo?.firstName + " " + resumeInfo?.lastName + " Resume",
                            }}
                            onClick={() => console.log("shared successfully!")}
                        >
                            <Button>Share 🔗</Button>
                        </RWebShare>
                    </div>





                </div>

            </div>

            <div id="print-resume" className='my-10 mx-10 md:mx-20 lg:mx-36'>
                <PreviewSection />
            </div>
        </ResumeInfoContext.Provider>
    )
}

export default ViewResume