import React from 'react'

type Props = {}

const SideMenu = (props: Props) => {
  const ItemList = () => {
    return (
      <div className='p-3 px-5 hover:bg-blue-500 cursor-pointer'>List</div>
    )
  }
  return (
    <div className="bg-main text-white min-h-screen w-[250px]">
      <div>
        <ItemList />
      </div>
    </div>
  )
}

export default SideMenu