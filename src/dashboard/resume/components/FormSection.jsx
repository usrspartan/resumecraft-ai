import React, { useState } from 'react'
import PersonalDeatails from './forms/PersonalDeatails'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight, HomeIcon, LayoutGrid } from 'lucide-react'
import Summary from './forms/Summary';
import ExperienceForm from './forms/ExperienceForm';
import EducationForm from './forms/EducationForm';
import SkillsForm from './forms/SkillsForm';
import { Link, Navigate, useParams } from 'react-router-dom';
import ThemeColor from './ThemeColor';


function FormSection() {

    const [activeForm, setActiveForm] = useState(1);
    const [enableNext, setEnableNext] = useState(false);
    const {resumeId} = useParams();

    return (
        <div>
            <div className='flex justify-between items-center'>
                <div className='flex gap-5'>
                    <Link to={"/dashboard"}>
                        <Button><HomeIcon /></Button>
                    </Link>
                    <ThemeColor/>
                </div>

                <div className='flex gap-2'>
                    {activeForm > 1 && <Button size="sm" onClick={() => setActiveForm(activeForm - 1)}><ArrowLeft /></Button>}
                    <Button
                        disabled={!enableNext}
                        className='flex gap-2' size="sm"
                        onClick={() => setActiveForm(activeForm + 1)}
                    >Next <ArrowRight /> </Button>
                </div>
            </div>


            {/* Personal Details */}
            {activeForm == 1 ? <PersonalDeatails enableNext={(v) => setEnableNext(v)} />
                : null}

            {/* Summary */}
            {activeForm == 2 ? <Summary enableNext={(v) => setEnableNext(v)} /> : null}

            {/* Experience */}
            {activeForm == 3 ? <ExperienceForm enableNext={(v) => setEnableNext(v)} /> : null}


            {/* Education */}
            {activeForm == 4 ? <EducationForm enableNext={(v) => setEnableNext(v)} /> : null}

            {/* Skills */}
            {activeForm == 5 ? <SkillsForm enableNext={(v) => setEnableNext(v)} /> : null}


            {/* View The Developed Resume */}
            {activeForm == 6 ? <Navigate to={'/my-resume/'+resumeId+"/view"} />: null}
        </div>
    )
}

export default FormSection