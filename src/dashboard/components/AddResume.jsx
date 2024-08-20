import { PlusSquare } from 'lucide-react'
import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'



function AddResume() {
    const [openDialog,setOpenDialog] = useState(false)

    return (
        <div>
            <div className='p-14 py-24 border
        items-center flex 
        justify-center bg-secondary
        rounded-lg h-[280px]
        hover:scale-105 transition-all hover:shadow-md
        cursor-pointer border-dashed'
        onClick={()=>setOpenDialog(true)}>
                <PlusSquare />
            </div>

            <Dialog open={openDialog}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Create new Resume</DialogTitle>
                        <DialogDescription>
                            <p>Name of your Resume</p>
                           <Input className='my-2' placeholder = "E.g.: Data Science Resume"/>
                        </DialogDescription>

                        <div className='flex justify-end gap-5'>
                            <Button onClick={()=>setOpenDialog(false)} variant= "ghost">Cancel</Button>
                            <Button>Create</Button>
                        </div>
                    </DialogHeader>
                </DialogContent>
            </Dialog>

        </div>
    )
}

export default AddResume