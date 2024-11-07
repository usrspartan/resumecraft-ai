import { MailIcon, PhoneCallIcon, PhoneIcon } from 'lucide-react';
import React from 'react'

function PersonalDetails({ resumeInfo }) {

    console.log("Personal Details", resumeInfo);
    return (
        <div>
            <h2 className='font-bold text-xl text-center' style={{
                color: resumeInfo?.themeColor
            }}>{resumeInfo?.firstName}   {resumeInfo?.lastName}</h2>
            <h2 className='text-center text-sm font-medium'
            >{resumeInfo?.jobTitle}</h2>

            <h2 className='text-center font-normal text-xs'
                style={{
                    color: resumeInfo?.themeColor
                }}
            >{resumeInfo?.address}</h2>

            <div className='flex justify-between'>
                <h2 className='font-normal text-xs flex justify-between gap-2'
                    style={{
                        color: resumeInfo?.themeColor
                    }}
                ><PhoneIcon size="20px"/>{resumeInfo?.phone}</h2>
                <h2 className='font-normal text-xs flex justify-between gap-2'
                    style={{
                        color: resumeInfo?.themeColor
                    }}><MailIcon size="20px"/>
                        {resumeInfo?.email}</h2>
            </div>

            <hr className='border-[1.5px] my-2'
            style={{
                borderColor: resumeInfo?.themeColor
            }}
            />
        </div>
    )
}

export default PersonalDetails