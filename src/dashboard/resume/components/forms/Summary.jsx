import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { ResumeInfoContext } from '@/context/ResumeInfoContext';
import { LoaderCircle, SparklesIcon } from 'lucide-react';
import React, { useContext, useEffect, useState } from 'react'
import { json, useParams } from 'react-router-dom';
import GlobalApi from './../../../../../service/GlobalApi';
import { toast } from 'sonner';
import { AIchatSession } from '../../../../../service/AiModal';


function Summary({ enableNext }) {

    const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
    const [summary, setSummary] = useState("");
    const [loading, setLoading] = useState(false);
    const params = useParams();

    // For Gemini API
    const prompt = "Job Title = {jobTitle}, Depending upon the job title given, generate a summary in 4-5 lines for my resume in json format with fields experience and summary having experience level of fresher, mid-level, and experienced. Without any non whitespace characters usage";

    const [aiGeneratedSummaryList, setAiGeneratedSummaryList] = useState();

    // When summary changes
    useEffect(() => {
        setResumeInfo({
            ...resumeInfo,
            summery: summary,
        });
    }, [summary]);  // Only run this effect when 'summary' changes

    // Generating Summary from AI

    const GenerateSummaryFromAI = async () => {
        setLoading(true);
        const PROMPT = prompt.replace("{jobTitle}", resumeInfo?.jobTitle);
        console.log("Prompt", PROMPT);


        const result = await AIchatSession.sendMessage(PROMPT);
        const rawString = result.response.text();
        const jsonString = `[${rawString}]`;
        console.log(JSON.parse(jsonString));
        setAiGeneratedSummaryList(JSON.parse(jsonString));  // Set the AI generated summary list
        setLoading(false);
    }

    const summaryClick = (e) => {   
        setSummary(e.target.innerText);
    }


    const onSave = (e) => {
        setLoading(true);
        e.preventDefault();
        const data = {
            data: {
                summery: summary,
            }
        };
        GlobalApi.UpdateResumeDetail(params?.resumeId, data).then(res => {
            // console.log(res);
            enableNext(true);
            setLoading(false);
            toast("Summary Added Successfully");
        }).catch((error) => {
            console.log(error);
            setLoading(false);
        });
    };

    return (
        <div>
            <div className='p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10'>
                <h2 className='font-bold text-lg'>Summary</h2>
                <p>Add an informative summary to your Resume</p>

                <form className='mt-7' onSubmit={onSave}>
                    <div className='flex justify-between items-end'>
                        <label>Add Summary</label>
                        <Button type="button" variant="outline" size="sm" className="border-primary text-primary flex gap-2" onClick={() => GenerateSummaryFromAI()}> <SparklesIcon className='hover:animate-pulse' /> Use AI for summary</Button>
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
                            disabled={loading}>
                            {loading ? <LoaderCircle className='animate-spin' /> : "Save"}
                        </Button>
                    </div>
                </form>
            </div>

            {aiGeneratedSummaryList && (
                <div>
                    <h2 className='text-center mt-5 font-semibold shadow-md'>Need Suggestions?</h2>
                    {aiGeneratedSummaryList.map((item, index) => (
                        <div key={index}>
                            <h2 className='mt-5 font-medium '>Level: {item?.experience}</h2>
                            <p className='font-serif cursor-grab' onClick={summaryClick}>{item?.summary}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Summary;
