import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import EditIcon from '@mui/icons-material/Edit';
type Props = {}

const listMenus = [
  {
    label: 'Smart Check',
    url: '/',
    icon: <EditIcon />,
    children: [
      {
        label: 'Smart Check Sheet',
        url: './smart-check-sheet'
      }
    ]
  }
]

const SideMenu = (props: Props) => {
  const ItemList = ({ label, url, icon }: any) => {
    return (
      <Link href={url}>
        <div className='p-3 px-5 hover:bg-blue-900 cursor-pointer flex gap-2 items-center'>
          <div>{icon}</div>
          <div>{label}</div>
        </div>
      </Link>
    )
  }
  return (
    <div className="bg-main text-white min-h-screen min-w-[250px]">
      <div>
        <ItemList
          icon={<MenuIcon />}
          label="Menu"
          url="#"
        />
        {listMenus.map((item, key) => (
          <div key={key}>
            <ItemList
              icon={item.icon}
              label={item.label}
              url={item.url}
            />

            {/* children */}
            {item.children && item.children.map((child, key) => (
              <div className='pl-6' key={key}>
                <ItemList
                  icon={''}
                  label={child.label}
                  url={child.url}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default SideMenu