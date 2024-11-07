import React, { useContext, useEffect, useState } from 'react'
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button';
import { LoaderCircle } from 'lucide-react';
import { ResumeInfoContext } from '@/context/ResumeInfoContext';
import { data } from 'autoprefixer';
import GlobalApi from './../../../../../service/GlobalApi';
import { useParams } from 'react-router-dom';
import { toast } from 'sonner';

function SkillsForm({ enableNext }) {
  const [loading, setLoading] = useState(false);
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);

  const [skillList, setSkillList] = useState([
    {
      name: '',
      rating: 0
    }
  ]);

  const { resumeId } = useParams();

  useEffect(() => {
    resumeInfo && setSkillList(resumeInfo?.skills)
  }, [])

  const handleChange = (index, name, value) => {
    const newEntries = skillList.slice();
    newEntries[index][name] = value;
    console.log(newEntries)
    setSkillList(newEntries);
  }

  const onSave = () => {
    setLoading(true);

    const data = {
      data: {
        skills: skillList.map(({ id, ...rest }) => rest)
      }
    }

    GlobalApi.UpdateResumeDetail(resumeId, data).then((res) => {
      console.log(res);
      setLoading(false);
      toast("Skills Updated");
    }, (error) => {
      setLoading(false);
      toast("Server Error")
    })

  }

  const AddNewSkill = () => {
    setSkillList([...skillList, {
      name: '',
      rating: 0
    }]);
  }

  const RemoveSkill = () => {
    if (skillList.length > 1) {
      const list = [...skillList];
      list.pop();
      setSkillList(list);
    }
  }


  useEffect(() => {
    setResumeInfo(
      {
        ...resumeInfo,
        skills: skillList
      }
    )
  }, [skillList])

  return (
    <div>
      <div className='p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10'>
        <h2 className='font-bold text-lg'>Skills</h2>
        <p>Add Your relevant skills</p>

        <div>
          {skillList.map((item, index) => (
            <div key={index} className='flex justify-between border rounded-lg p-3 gap-2 mb-2'>
              <div>
                <label className='text-xs'>Name</label>
                <Input
                  defaultValue={item?.name}
                  onChange={(e) => handleChange(index, 'name', e.target.value)}
                />
              </div>

              <Rating style={{ maxWidth: 120 }} value={item.rating} 
              defaultValue={item?.rating}
              onChange={(v) => handleChange(index, 'rating', v)} />
            </div>
          ))}
        </div>

        <div className='flex justify-between'>
          <div className='flex gap-2'>
            <Button variant="outline" onClick={AddNewSkill} className="text-primary"> + Add More Skills</Button>
            <Button variant="outline" onClick={RemoveSkill} className="text-primary"> - Remove</Button>

          </div>
          <Button disabled={loading} onClick={() => onSave()}>
            {loading ? <LoaderCircle className='animate-spin' /> : 'Save'}
          </Button>
        </div>
      </div>
    </div>

  )
}

export default SkillsForm