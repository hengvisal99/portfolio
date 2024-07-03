import { Link,Image } from '@nextui-org/react'
import React from 'react'

const Footer = () => {
    const socials = [
        { icon: "logos/linkedin.svg", link: "https://www.linkedin.com/in/visal-heng-9ab279229/" },
        { icon: "logos/github.svg", link: "https://github.com/hengvisal99" },
        { icon: "logos/telegram.svg", link: "https://t.me/visalheng2k" },
        { icon: "logos/fb.svg", link: "https://www.facebook.com/visalheng99/" },
    ]
    return (
        <div className='border-t border-gray-600'>
            <div className='mx-auto max-w-[1300px] pl-10 pr-6 py-4 flex flex-col  md:flex-row items-center justify-between w-full'>
                <p>
                    Copyright © 2024 VisalFolio
                </p>
                <div>
                    {
                        socials.map((item, index) => (
                            <Link key={index} isExternal isBlock href={item.link} color="foreground">
                                <Image
                                    alt={item.icon}
                                    className="size-[32px]"
                                    src={item.icon}
                                />
                            </Link>
                        ))
                    }

                </div>
            </div>

        </div>
    )
}

export default Footer