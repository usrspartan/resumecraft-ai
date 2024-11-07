import { ResumeInfoContext } from '@/context/ResumeInfoContext';
import React, { useContext } from 'react'
import PersonalDetails from './preview/PersonalDetails';
import Summary from './preview/Summary';
import Experience from './preview/Experience';
import Education from './preview/Education';
import Skills from './preview/Skills';

function PreviewSection() {
    const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
    console.log('resumeInfo preview section', resumeInfo);
    return (
        <div className='shadow-lg h-full p-14 border-t-[20px]'
            style={{
                borderColor: resumeInfo?.themeColor,
            }}
        >
            {/* Personal Details */}
            <PersonalDetails resumeInfo={resumeInfo} />

            {/* Summary */}
            <Summary resumeInfo={resumeInfo} />

            {/* Experience Details */}
            <Experience resumeInfo={resumeInfo} />
            
            
            {/* Educational Details */}
            <Education resumeInfo={resumeInfo} />

            {/* Skills */}
            <Skills resumeInfo={resumeInfo} />
        </div>
    )
}

export default PreviewSection