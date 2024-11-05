import { Button } from '@/components/ui/button';
import { ResumeInfoContext } from '@/context/ResumeInfoContext';
import RichTextEditor from '@/dashboard/components/RichTextEditor';
import React, { useContext, useEffect, useState } from 'react'
const formFields = {
    title: '',
    companyName: '',
    city: '',
    state: '',
    startDate: '',
    endDate: '',
    workSummery: ''
}
function ExperienceForm({ enableNext }) {

    const [experienceList, setExperienceList] = useState([
        formFields
    ]);

    const {resumeInfo, setResumeInfo} = useContext(ResumeInfoContext);

    const handleChange = (index, e) => {
        const { name, value } = e.target;
        const list = [...experienceList];
        list[index][name] = value;
        setExperienceList(list);
    }

    const addNewExperience = () => {
        setExperienceList([...experienceList, formFields]);
    }

    const removeExperience = () => {
        if (experienceList.length > 1) {
            const list = [...experienceList];
            list.pop();
            setExperienceList(list);
        }
    }


    const handleInputChange = (index, e) => {
        const newEntries = experienceList.slice();
        const { name, value } = e.target;
        newEntries[index][name] = value;
        setExperienceList(newEntries);
    }

    useEffect(() => {
        setResumeInfo({
            ...resumeInfo,
            experience: experienceList
        })
    }, [experienceList])


    const handleRichTextEditor = (e, name, index) => {
        const newEntries = experienceList.slice();
        newEntries[index][name] = e.target.value;
        setExperienceList(newEntries);
    }

    return (
        <div>
            <div className='p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10'>
                <h2 className='font-bold text-lg'>Add Professional Experience</h2>
                <p>Enter the details of your past work Experiences</p>

                <div>
                    {experienceList.map((item, index) => (
                        <div key={index} className='grid grid-cols-2 gap-3 border p-3 my-5 rounded-lg'>
                            <div>
                                <label className='text-xs'>Position Title</label>
                                <input type="text" name='title' onChange={(e) => handleChange(index, e)} className='border  w-[100%] h-[35px]' />
                            </div>

                            <div>
                                <label className='text-xs'>Company Name</label>
                                <input type="text" name='companyName' onChange={(e) => handleChange(index, e)} className='border  w-[100%] h-[35px]' />
                            </div>

                            <div>
                                <label className='text-xs'>City</label>
                                <input type="text" name='city' onChange={(e) => handleChange(index, e)} className='border col-span-2  w-[100%] h-[35px]' />
                            </div>

                            <div>
                                <label className='text-xs'>State</label>
                                <input type="text" name='state' onChange={(e) => handleChange(index, e)} className='border col-span-2  w-[100%] h-[35px]' />
                            </div>

                            <div>
                                <label className='text-xs'>Start Date</label>
                                <input type="date" name='startDate' onChange={(e) => handleChange(index, e)} className='border col-span-2  w-[100%] h-[35px]' />
                            </div>

                            <div>
                                <label className='text-xs'>End Date</label>
                                <input type="date" name='endDate' onChange={(e) => handleChange(index, e)} className='border col-span-2  w-[100%] h-[35px]' />
                            </div>

                            <div className='col-span-2'>
                                <RichTextEditor 
                                index={index}
                                onRichTextEditorChange={(e)=>handleRichTextEditor(e,'workSummery',index)}
                                />
                            </div>

                        </div>
                    ))}
                </div>

                <div className='flex justify-between'>
                    <div className='flex'>
                        <Button variant='outline' className='text-primary' onClick={addNewExperience}>+ Add More Experience</Button>


                        <Button variant="outline"
                            disabled={experienceList.length === 1}
                            className='text-primary' onClick={removeExperience}>- Remove</Button>
                    </div>


                    <Button>Save</Button>
                </div>
            </div>
        </div>
    )
}

export default ExperienceForm