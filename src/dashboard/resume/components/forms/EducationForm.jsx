import { Button } from '@/components/ui/button';
import { ResumeInfoContext } from '@/context/ResumeInfoContext';
import { LoaderCircle } from 'lucide-react';
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import GlobalApi from './../../../../../service/GlobalApi';
import { toast } from 'sonner';


function EducationForm({ enableNext }) {
    const params = useParams();
    const [loading, setLoading] = useState(false);
    const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
    const [EducationList, setEducationList] = useState([
        {
            universityName: '',
            degree: '',
            major: '',
            startDate: '',
            endDate: '',
            description: ''
        }
    ]);

    useEffect(()=>{
        resumeInfo&&setEducationList(resumeInfo?.education)
    },[])

    const addNewEducation = () => {
        setEducationList([...EducationList, {
            universityName: '',
            degree: '',
            major: '',
            startDate: '',
            endDate: '',
            description: ''
        }]);
    }

    const removeEducation = () => {
        if (EducationList.length > 1) {
            const list = [...EducationList];
            list.pop();
            setEducationList(list);
        }
    }

    useEffect(() => {
        setResumeInfo({
            ...resumeInfo,
            education: EducationList
        });

    }, [EducationList]);

    const handleInputChange = (index, event) => {
        const newEntries = EducationList.slice();
        const { name, value } = event.target;
        newEntries[index][name] = value;
        console.log(newEntries)
        setEducationList(newEntries);
    }

    const onSave = () => {
        setLoading(true)
        const data = {
            data: {
                education: EducationList.map(({ id, ...rest }) => rest)
            }
        }

        console.log("Education list",EducationList)
        GlobalApi.UpdateResumeDetail(params?.resumeId, data).then(res => {
            console.log("Education response",res);
            setLoading(false);
            toast('Details updated !')
        }, (error) => {
            setLoading(false);
        })

    }



    return (
        <div>
            <div className='p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10'>
                <h2 className='font-bold text-lg'>Add Educational Details</h2>
                <p>Enter the details of your educational background</p>
            </div>

            <div>
                {EducationList.map((education, index) => (
                    <div key={index}>
                        <div className='grid grid-cols-2 gap-3 border p-3 my-5 rounded-lg'>
                            <div className='col-span-2'>
                                <label className='text-xs '>University Name</label>
                                <input
                                    type="text"
                                    name='universityName'
                                    value={education.universityName}
                                    defaultValue={education?.universityName}
                                    onChange={(e) => handleInputChange(index, e)}
                                    className='border w-[100%] h-[35px]'
                                />
                            </div>

                            <div>
                                <label className='text-xs'>Degree</label>
                                <input
                                    type="text"
                                    name='degree'
                                    value={education.degree}
                                    defaultValue={education?.degree}
                                    onChange={(e) => handleInputChange(index, e)}
                                    className='border w-[100%] h-[35px]'
                                />
                            </div>

                            <div>
                                <label className='text-xs'>Major</label>
                                <input
                                    type="text"
                                    name='major'
                                    value={education.major}
                                    defaultValue={education?.major}
                                    onChange={(e) => handleInputChange(index, e)}
                                    className='border w-[100%] h-[35px]'
                                />
                            </div>

                            <div>
                                <label className='text-xs'>Start Date</label>
                                <input
                                    type="date"
                                    name='startDate'
                                    value={education.startDate}
                                    defaultValue={education?.startDate}
                                    onChange={(e) => handleInputChange(index, e)}
                                    className='border w-[100%] h-[35px]'
                                />
                            </div>

                            <div>
                                <label className='text-xs'>End Date</label>
                                <input
                                    type="date"
                                    name='endDate'
                                    value={education.endDate}
                                    defaultValue={education?.endDate}
                                    onChange={(e) => handleInputChange(index, e)}
                                    className='border w-[100%] h-[35px]'
                                />
                            </div>

                            <div className='col-span-2' >
                                <label className='text-xs '>Description</label>
                                <textarea
                                    name='description'
                                    value={education.description}
                                    defaultValue={education?.description}
                                    onChange={(e) => handleInputChange(index, e)}
                                    className='border w-[100%]'
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className='flex justify-between'>
            <div className='flex gap-2'>
            <Button variant="outline" onClick={addNewEducation} className="text-primary"> + Add More Education</Button>
            <Button variant="outline" onClick={removeEducation} className="text-primary"> - Remove</Button>

            </div>
            <Button disabled={loading} onClick={()=>onSave()}>
            {loading?<LoaderCircle className='animate-spin' />:'Save'}    
            </Button>
        </div>
        </div>
    )
}

export default EducationForm