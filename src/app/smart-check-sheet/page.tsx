import { Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from '@mui/material'
import { title } from 'process'
import React from 'react'

type Props = {}
const lists = [
  {
    title: 'SWITCH ON-OFF',
  },
  {
    title: 'SWITCH ON-OFF',
  },
  {
    title: 'SWITCH ON-OFF',
  },
  {
    title: 'SWITCH ON-OFF',
  },
  {
    title: 'SWITCH ON-OFF',
  },
  {
    title: 'SWITCH ON-OFF',
  },
]

const SmartCheckSheetPage = (props: Props) => {
  return (
    <div className='flex flex-col gap-6'>
      <div className="bg-white border shadow-sm p-3 text-center text-xl font-medium rounded-md">
        Start up Check Sheet 3201-P01
      </div>

      <div className='bg-white rounded-md border shadow-md p-5 flex flex-col gap-3'>
        <div className='flex items-center justify-between'>
          <div className='font-medium'>CHECK SHEET START- UP PUMP</div>
          <Button variant="contained">EXPORT</Button>
        </div>

        {/* list */}
        <div>
          {lists.map((item, key) => (
            <div key={key} className='flex justify-between items-center pl-3'>
              <div>{item.title}</div>
              <FormControl className=' '>
                <RadioGroup
                  row
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="controlled-radio-buttons-group"
                  value={'yes'}
                >
                  <FormControlLabel value="yes" control={<Radio />} label="YES" />
                  <FormControlLabel value="no" control={<Radio />} label="NO" />
                </RadioGroup>
              </FormControl>
            </div>
          ))}
        </div>

      </div>
      <div className='bg-white rounded-md border shadow-md p-5 flex flex-col gap-3'>
        <TextField
          id="outlined-multiline-static"
          label="Remark"
          multiline
          rows={4}
          className='w-full'
        />
      </div>
      <div className='flex justify-center gap-3'>
        <Button variant="contained" disabled>CLEAR</Button>
        <Button variant="contained">SUBMIT</Button>
      </div>
    </div>
  )
}

export default SmartCheckSheetPage