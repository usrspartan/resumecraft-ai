import React from 'react'

function Experience({resumeInfo}) {
  return (
    <div className='my-6'>
        <h2 className='text-center font-bold text-sm mb-2'
            style={{
                color: resumeInfo?.themeColor
            }}
        >
            Professional Experience
        </h2>

        <hr 
            style={{
                borderColor: resumeInfo?.themeColor
            }}
        />

        {resumeInfo?.experience.map((exp, index) => (
            <div key={index} className='my-5'>
                <h2 className='font-bold text-sm'
                 style={{
                    color: resumeInfo?.themeColor
                }}
                >{exp?.title}</h2>
                <h2 className='text-xs flex justify-between'>{exp?.companyName}, {exp?.city}, {exp?.state}
                <span className='text-xs'>{exp?.startDate} To {exp?.currentlyWorking?'Present':exp?.endDate}</span>
                </h2>
                {/* <p className='text-xs'>
                    {exp?.workSummery}
                </p> */}

                <div className='text-sm' dangerouslySetInnerHTML={{__html:exp?.workSummery}} />
            </div>
        ))    
        }
    </div>
  )
}

export default Experience