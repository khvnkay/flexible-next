import Image from 'next/image'
import React from 'react'
import { footerLinks } from '../constants'
import Link from 'next/link'

type Props = {}

type ColumnProps = {
    title: string,
    Links: string[]
}

const FooterColumn = ({ title, Links }: ColumnProps) => (
    <div className='footer_column'>
        <h4 className='font-semibold'>{title}

        </h4>
        <ul className='flex flex-col gap-2 font-normal'>
            {Links.map((li) => (
                <Link href="/" key={li} >
                    {li}
                </Link>
            ))

            }

        </ul>

    </div>
)
export default function Footer({ }: Props) {
    return (
        <footer className='flexStart footer'>


            <div className='flex flex-col gap-12 w-full'>
                <div className='flex items-start flex-col'>
                    <Image
                        width={115}
                        height={38}
                        alt='flexible'

                        src="/logo-purple.svg"

                    />
                    <p className='text-start text-sm font-normal mt-5 max-w-xs'>
                        Sometimes to understand a word's meaning you need more than a definition; you need to see the word used in a sentence. At YourDictionary,
                    </p>

                </div>
                <div className='flex flex-wrap gap-12'>
                    {
                        footerLinks.map((footer) => (
                            <div className='flex-1 flex flex-col gap-4'>
                                <FooterColumn title={footer.title} Links={footer.links}></FooterColumn>
                            </div>
                        ))
                    }
                </div>

            </div>
            <div className='flexBetween footer_copyright'>
                <p>@ 2024 Flexible all rights reserved</p>
                <p className='text-gray '>
                    <span className='text-black font-semibold'>10,144 </span>
                    project summited


                </p>

            </div>
        </footer>
    )
}