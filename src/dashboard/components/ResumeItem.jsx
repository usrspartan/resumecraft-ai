import { LoaderCircle, MoreVertical } from 'lucide-react';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle
} from "@/components/ui/alert-dialog"
import GlobalApi from './../../../service/GlobalApi';
import { toast } from 'sonner';





function ResumeItem({ resume, refreshData }) {

    const navigation = useNavigate();
    const [openAlert, setOpenAlert] = useState(false);
    const [loading, setLoading] = useState(false);

    const onDelete = () => {
        setLoading(true);
        GlobalApi.DeleteResumeById(resume.documentId).then(res => {
            console.log(res);
            toast('Resume Deleted Successfully');
            refreshData();
            setLoading(false);
            setOpenAlert(false);
        },(error)=>{
            setLoading(false);
        })
    }

    return (
        <div>
            <Link to={'/dashboard/resume/' + resume.documentId + "/edit"}>
                <div className='p-14 bg-secondary flex items-center justify-center
             h-[280px] border-dashed border-primary rounded-lg 
            hover:scale-105 transition-all hover:shadow-md shadow-primary
            bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500'
                    style={{
                        borderColor: resume?.themeColor
                    }}>
                    <div className='flex items-center justify-center h-[180px]'>
                        <img src='/resume.png' className='w-[80px] h-[80px]' />
                    </div>
                </div>
            </Link>
            <div className='border p-3 flex justify-between text-white'
                style={{
                    backgroundColor: "orange"
                }}>
                <h2 className='text-sm'>{resume?.title}</h2>


                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <MoreVertical className='h-4 w-4 cursor-pointer' />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem onClick={() => navigation('/dashboard/resume/' + resume.documentId + "/edit")} >Edit</DropdownMenuItem>
                        <DropdownMenuLabel onClick={() => navigation('/my-resume/' + resume.documentId + "/view")} >View</DropdownMenuLabel>
                        <DropdownMenuItem onClick={() => navigation('/my-resume/' + resume.documentId + "/view")} >Download</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setOpenAlert(true)}>Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

                <AlertDialog open={openAlert}>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                            <AlertDialogDescription>
                                This action cannot be undone. This will permanently delete your resume
                                and remove your data from our servers.
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel onClick={() => setOpenAlert(false)} >Cancel</AlertDialogCancel>
                            <AlertDialogAction onClick={onDelete}
                            disabled={loading}
                            >
                                
                                {loading ? <LoaderCircle className='animate-spin' /> : 'Delete'}
                            </AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>


            </div>
        </div>

    )
}

export default ResumeItem;