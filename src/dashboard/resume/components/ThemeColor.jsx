import React, { useContext } from 'react'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from '@/components/ui/button';
import { LayoutGrid } from 'lucide-react';
import { ResumeInfoContext } from '@/context/ResumeInfoContext';



function ThemeColor() {
    const colors = [
        "#3B4252", "#4C566A", "#D08770", "#A3BE8C", "#EBCB8B",
        "#5E81AC", "#B48EAD", "#81A1C1", "#88C0D0", "#BF616A",
        "#ECEFF4", "#2E3440", "#D8DEE9", "#434C5E", "#A8A9AD",
        "#718093", "#596275", "#F2D7EE", "#FFC107", "#F08080"
    ];
    

    const {resumeInfo, setResumeInfo} = useContext(ResumeInfoContext);

    const ChangeThemeColor = (color) => {
        setResumeInfo({
            ...resumeInfo,
            themeColor: color
        })
    }
    console.log('resumeInfo in color section', resumeInfo);
    return (
        <div>
            <Popover>
                <PopoverTrigger asChild>
                    <Button variant="outline" size="sm" className='flex gap-2'> <LayoutGrid /> Theme</Button>
                </PopoverTrigger>
                <PopoverContent>
                    <h2 className='mb-2 text-sm font-bold'>Select Theme Color</h2>
                    <div className='grid grid-cols-5 gap-3'>
                        {colors.map((item, index) => (
                            <div key={index} 
                            onClick={() => ChangeThemeColor(item)}
                            className='h-5 w-5 rounded-full cursor-pointer hover:border-black border'
                                style={{
                                    background: item
                                }}
                            >

                            </div>
                        ))}
                    </div>
                </PopoverContent>
            </Popover>

        </div>
    )
}

export default ThemeColor