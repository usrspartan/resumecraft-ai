import React, { useState } from 'react'
import PersonalDeatails from './forms/PersonalDeatails'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight, LayoutGrid } from 'lucide-react'
import Summary from './forms/Summary';

function FormSection() {

    const [activeForm, setActiveForm]= useState(1);
    const [enableNext,setEnableNext] = useState(false);

    return (
        <div>
            <div className='flex justify-between items-center'>
                <div>

                    <Button variant="outline" size="sm" className='flex gap-2'> <LayoutGrid /> Theme</Button>
                </div>

                <div className='flex gap-2'>
                    {activeForm > 1 && <Button size = "sm" onClick = {() => setActiveForm(activeForm - 1)}><ArrowLeft/></Button>}
                    <Button 
                    disabled = {!enableNext}
                    className='flex gap-2' size="sm" 
                    onClick = {() => setActiveForm(activeForm + 1)}
                    >Next <ArrowRight /> </Button>
                </div>
            </div>


            {/* Personal Details */}
            {activeForm==1?<PersonalDeatails enableNext={(v)=>setEnableNext(v)}/>
            :null}

            {/* Summary */}
            {activeForm==2?<Summary  enableNext={(v)=>setEnableNext(v)}/>:null}

            {/* Experience */}



            {/* Education */}


            {/* Skills */}
        </div>
    )
}

export default FormSection