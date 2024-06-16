import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
type Props = {}

const TopMenu = (props: Props) => {
  return (
    <div className=' border-b shadow-sm bg-white'>
      <div className='flex justify-between items-center p-3'>
        {/* logo */}
        <div>logo</div>

        {/* profile */}
        <div className='flex items-center gap-2  '>
          <AccountCircleIcon fontSize='inherit' className='text-[55px] text-gray-300' />
          <div className='text-gray-500'>
            <div>Jack Wilson</div>
            {/* <div>เจ้าหน้าที่ ปตท.</div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopMenu