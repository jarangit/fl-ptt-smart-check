'use client'
import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, } from 'recharts';

// const data = [
//   { name: 'Group A', value: 400 },
//   { name: 'Group B', value: 500 },
// ];
const COLORS = ['#2A84CB', '#BBBBBB'];
type Props = {
  data: any
}

const MyPieChart = ({ data }: Props) => {
  const [isSSR, setIsSSR] = useState<any>(true)
  useEffect(() => {
    setIsSSR(false)
  }, [])
  return (
    <div className=' '>
      {!isSSR && (
        <div className=' h-[200px] w-[200px] relative'>
          <div className='absolute flex justify-center items-center w-full h-full text-blue-300 font-medium'>30%</div>
          <ResponsiveContainer>
            <PieChart >
              <Pie
                data={data}
                innerRadius={40}
                outerRadius={60}
                fill="#2A84CB"
                dataKey="value"
                stroke='null'
              >
                {data && data.length && data.map((entry: any, index: number) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  )
}

export default MyPieChart