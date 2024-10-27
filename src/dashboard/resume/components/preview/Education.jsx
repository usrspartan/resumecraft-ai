import React from 'react'

function Education({resumeInfo}) {
  return (
    <div className='my-5'>
         <h2 className='text-center font-bold text-sm mb-2'
            style={{
                color: resumeInfo?.themeColor
            }}
        >
            Education Details
        </h2>

        <hr 
            style={{
                borderColor: resumeInfo?.themeColor
            }}
        />

        {resumeInfo?.education.map((edu, index) => (
            <div key={index} className='my-5'>
                <h2 className='font-bold text-sm'
                 style={{
                    color: resumeInfo?.themeColor
                }}
                >{edu?.universityName}</h2>
                <h2 className='text-xs flex justify-between'>{edu?.degree} in {edu?.major}
                <span className='text-xs'>{edu?.startDate} - {edu?.endDate}</span>
                </h2>
                <p className='text-xs my-2'>
                    {edu?.description}
                </p>
            </div>
        ))}


    </div>
  )
}

export default Education