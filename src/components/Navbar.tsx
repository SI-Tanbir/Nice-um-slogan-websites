import React from 'react'
import Facebook from '../../icons/facebook'
import Instra from '../../icons/twiter'

function Navbar() {
  return (
    <div className=' flex justify-between items-center p-5'>
        <h1 className='text-3xl  font-extrabold'> 
            
            Nice</h1>
        <nav className='flex gap-5'>
            <ul className='flex gap-5 text-lg '>
                <li>o que fazemos</li>
                <li>como te ajudamos</li>
                <li>fale conosco</li>
            </ul>
            <div className='flex gap-5'>
            <button><Facebook/></button>
            <button><Instra/></button>
        </div>
        </nav>
       
    </div>
  )
}

export default Navbar