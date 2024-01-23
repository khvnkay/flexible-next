import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { NavLinks } from '../constants'
import { link } from 'fs'
import AuthProvider from './AuthProvider'

type Props = {}

const Navbar = (props: Props) => {
    const session = {}
    return (
        <nav className='flexBetween navbar'>
            <div className='flex-1 flexStart gap-10'>
                <Link href="/">

                    <Image src="/logo.svg"
                        width={115}
                        height={43}
                        alt="flex"
                    />
                </Link>
                <ul className='xl:flex hidden text-small gap-7'>
                    {
                        NavLinks.map((nav) => (
                            <Link href={nav.href} key={nav.key}>
                                {nav.text}
                            </Link>
                        ))
                    }
                </ul>
            </div>

            <div className='flex-center gap-4'>
                {session? (
                    <>
                    user phoyo
                    <Link href={"create-project"}>
                    Share to work
                    </Link>
                    </>
                ): (
                    <AuthProvider>

                    </AuthProvider>
                    
                )
            
            }


            </div>
        </nav>
    )
}

export default Navbar