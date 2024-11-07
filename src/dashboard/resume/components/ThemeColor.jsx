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
        "#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#A133FF",
        "#33FFF5", "#FF8C33", "#8CFF33", "#338CFF", "#FF338C",
        "#8C33FF", "#33FF8C", "#FF5733", "#33FF57", "#3357FF",
        "#FF33A1", "#A133FF", "#33FFF5", "#FF8C33", "#8CFF33"
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