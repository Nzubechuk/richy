import { EmailOutlined, Facebook, Instagram, LocalPhoneOutlined, LocationOnOutlined, Pinterest, Twitter } from '@material-ui/icons'
import React from 'react'

const Footer = () => {

    const socialStyle = 'm-3 rounded-full cursor-pointer p-2 text-white'
  return (
    <div className='flex items-center justify-around p-2 mobile:flex-col mobile:items-start'>
        <div className='flex-1 flex flex-col flex-wrap p-2'>
            <h1 className='text-[25px]'>RICHARD STORE</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A recusandae nisi molestiae ut fugiat quaerat earum reiciendis adipisci dolor voluptas esse magni, quae delectus voluptatem nulla laborum pariatur incidunt et.</p>
            <div className='flex items-center justify-center mt-3 self-start'>
                <div className={socialStyle + ' bg-blue-700'}>
                    <Facebook />
                </div>
                <div className={socialStyle + ' bg-orange-500'}>
                    <Instagram />
                </div>
                <div className={socialStyle + ' bg-sky-400'}>
                    <Twitter />
                </div>
                <div className={socialStyle + ' bg-red-600'}>
                    <Pinterest />
                </div>
            </div>
        </div>

        <div className='flex-1 flex flex-col p-2'>
            <div className='flex m-3'>
                <LocationOnOutlined />
                <p className='pl-3'>Enugu State</p>
            </div>
            <div className='flex m-3'>
                <LocalPhoneOutlined />
                <p className='pl-3'>+2349087654321</p>
            </div>
            <div className='flex m-3'>
                <EmailOutlined />
                <p className='pl-3'>richardstore@gmail.com</p>
            </div>
        </div>
    </div>
  )
}

export default Footer