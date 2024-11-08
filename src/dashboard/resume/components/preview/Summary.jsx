import React from 'react'

function Summary({resumeInfo}) {
  return (
    <div>
        <p className='text-sm'>
            {resumeInfo?.summery}
        </p>
    </div>
  )
}

export default Summary