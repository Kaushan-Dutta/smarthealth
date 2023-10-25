import React, { useState } from 'react'
import Navlinks from '../routes.config';
import Link from 'next/link';
import { GoPerson } from 'react-icons/go';

const Navbar = () => {
    const [user, setUser] = useState({entity:'patient'});
    return (
        <nav className='z-10 fixed px-[5vw] shadow-md bg-theme text-white flx-row justify-between w-full py-3'>
            <div className='text-3xl font-comf'>
                <Link href="/" >smarthealth</Link>
            </div>
            <div className='font-inter text-lg list-none flx-row justify-between'>
                {Navlinks.filter((fil1) => (
                    fil1.showNav
                )).filter((fil2) => (
                    fil2.protected ? (user
                        ? (fil2.entity ?
                             ((fil2.entity.includes(user.entity)) ? true : false)
                         : true) 
                        : false) : true
                )).map((obj, id) => (
                    <li key={id} className='mr-5'><Link href={obj.path}>{obj.name}</Link></li>
                ))}
                {user?
                    <li>Logout</li>:
                    <li ><Link href="/login">Login</Link></li>
                }
                {user?.entity=='patient' && <div className='dropdown ml-5'>
                    <li className='font-bold text-3xl'><GoPerson/></li>
                    <div className='-translate-x-20 dropresult absolute rounded-md bg-shade1 p-5 w-48'>
                        {Navlinks.filter((fil1) => (
                            fil1.showDrop
                        )).filter((fil2) => (
                            fil2.protected ? (user
                                ? (fil2.entity ?
                                    ((fil2.entity.includes(user.entity)) ? true : false)
                                : true) 
                                : false) : true
                        )).map((obj, id) => (
                            <li key={id} className='my-3'><Link href={obj.path}>{obj.name}</Link></li>
                        ))}
                    </div>
                </div>}
                
            </div>
        </nav>
    )
}

export default Navbar