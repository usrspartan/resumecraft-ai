import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { ResumeInfoContext } from '@/context/ResumeInfoContext';
import { LoaderCircle } from 'lucide-react';
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import GlobalApi from './../../../../../service/GlobalApi';
import { toast } from 'sonner';

function Summary({enableNext}) {

    const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
    const [summary, setSummary] = useState();
    const [loading, setLoading] = useState(false);
    const params = useParams();



    // When summary changes

    useEffect(() => {
        setResumeInfo({
            ...resumeInfo,
            summery: summary
        }, [summary])

    })

    const onSave = (e) => {
        setLoading(true);
        e.preventDefault();
        const data = {
            summery: summary
        }
        GlobalApi.UpdateResumeDetail(params?.resumeId, data).then(res => {
            console.log(res);
            enableNext(true);
            setLoading(false);
            toast("Summary Added Sucessfully");
        }, (error) => {
            console.log(error);
            setLoading(false);
        })
    }

    return (
        <div>
            <div className='p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10'>
                <h2 className='font-bold text-lg'>Summary</h2>
                <p>Add an informative summary to your Resume </p>


                <form className='mt-7' onSubmit={onSave}>
                    <div className='flex justify-between items-end'>
                        <label>Add Summary</label>
                        <Button variant="outline" size="sm" className="border-primary text-primary">Use AI for summary</Button>
                    </div>

                    <Textarea
                        placeholder="Your Summary here" required
                        className='mt-5'
                        value={summary}
                        onChange={(e) => setSummary(e.target.value)}
                    />

                    <div className='mt-2 flex justify-end'>
                        <Button 
                       type="submit"
                       disabled = {loading}>
                           {loading?<LoaderCircle className='animate-spin'/>:"Save"}
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Summary


