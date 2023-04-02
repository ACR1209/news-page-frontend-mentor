import React from 'react'

function NavListItem({name}: {name: string}) {
  return (
    <li className='cursor-pointer hover:text-softRed'>{name}</li>
  )
}

export default NavListItem