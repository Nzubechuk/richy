import React from 'react'
import { Search } from '@material-ui/icons'
import { Badge } from '@material-ui/core'
import { ShoppingCartOutlined } from '@material-ui/icons'

const Navbar = () => {
    const style = 'text-[14px] cursor-pointer ml-[25px] mobile:ml-[10px]'
  return (
    <div className='navbar h-[60px] shadow-md relative z-10'>
        <div className="wrapper pl-[20px] pr-[20px] pt-[10px] pb-[10px] flex justify-between items-center mobile:pl-0 mobile:pr-0">
            <div className='left flex flex-1 items-center'>
                <div className="language cursor-pointer text-[16px] mobile:hidden">En</div>
                <div className="searchInput flex border-[2px] border-solid border-lightgrey rounded-md items-center ml-[10px] p-[5px] focus-within:border-[#8a4af3] transition-all">
                    <input className='input outline-none mobile:w-[50px]' 
                    type="text" /> 
                    <Search className='' style={{fontSize: '16px'}} />
                </div>
            </div>
            <div className='center flex-1 text-center'>
                <div className='logo font-bold text-lg mobile:text-sm'>Richard Stores</div>
            </div>
            <div className='right flex flex-1 items-center justify-end mobile:flex-[1.5] mobile:justify-center'>
                <a href="/register"><div className={style}>Register</div></a>
                <div className={style}>Sign in</div>
                <a href="/Cart">
                <div className={style}>
                <Badge badgeContent={2} color='primary'>
                    <ShoppingCartOutlined/>
                </Badge>
                </div>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Navbar