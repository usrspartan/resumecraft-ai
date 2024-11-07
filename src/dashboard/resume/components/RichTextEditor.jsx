import { Button } from '@/components/ui/button';
import { ResumeInfoContext } from '@/context/ResumeInfoContext';
import { LoaderCircle, Sparkles } from 'lucide-react';
import React, { useContext } from 'react'
import { useState } from 'react';
import {
    BtnBold,
    BtnBulletList,
    BtnItalic,
    BtnLink,
    BtnNumberedList,
    BtnStrikeThrough,
    BtnUnderline,
    Editor,
    EditorProvider,
    Separator,
    Toolbar
} from 'react-simple-wysiwyg';
import { AIchatSession } from '../../../service/AiModal';
import { toast } from 'sonner';
const prompt ="Job title={positionTitle}. On the basis of the Job title, generate only one summary in html format having 5-7 bullet points to add in the experience section in my resume. Do not use any placeholders. Use the json field=summary";   

function RichTextEditor({ onRichTextEditorChange, index, defaultValue }) {

    const [value, setValue] = useState(defaultValue);

    const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
    const [loading, setLoading] = useState(false);

    const GenerateSummaryFromAI = async () => {
        setLoading(true);
        if (!resumeInfo?.experience[index]?.title) {
            toast("Please enter position title to generate summary");
            return;
        }


        const PROMPT = prompt.replace('{positionTitle}', resumeInfo?.experience[index]?.title);
        const result = await AIchatSession.sendMessage(PROMPT);
        console.log("Prompt:", PROMPT);
        console.log("Result:", result.response.text());
        const res = JSON.parse(result.response.text());
        console.log("Res:", res?.summary);
        setValue(res?.summary);
        setLoading(false);
    }


    return (
        <div>

            <div className='flex justify-between my-2'>
                <label>Work Summary</label>
                <Button variant='outline' size='sm'
                    className="flex gap-2 border-primary text-primary"
                    onClick={GenerateSummaryFromAI}>
                    {loading?<LoaderCircle className='h-4 w-4 animate-spin' />:
                    <>
                    <Sparkles className='h-4 w-4' />
                        Generate Summary from AI
                    </>
                    
                    }
                    
                </Button>
            </div>

            <EditorProvider>
                <Editor value={value} onChange={(e) => {
                    setValue(e.target.value);
                    onRichTextEditorChange(e);
                }}>
                    <Toolbar>
                        <Separator />
                        <BtnBold />
                        <BtnItalic />
                        <BtnUnderline />
                        <BtnStrikeThrough />
                        <Separator />
                        <BtnNumberedList />
                        <BtnBulletList />
                        <Separator />
                        <BtnLink />
                    </Toolbar>
                </Editor>
            </EditorProvider></div>
    )
}

export default RichTextEditor