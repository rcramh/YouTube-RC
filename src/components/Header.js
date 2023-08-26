import React from 'react'

const Header = () => {
  return (
    <div className='w-full h-[70px]  flex justify-between flex-wrap items-center border-2 border-slate-900'>

        <div className="w-[260px] h-[60px] flex flex-wrap bg-white">
            <div className="w-[80px] h-[40px] ">
                <img className = 'w-[60px] h-[30px]' src="https://i0.wp.com/css-tricks.com/wp-content/uploads/2012/10/threelines.png" alt="App logo" />
            </div>

            <div className="w-[160px] h-[50px] ">
                <img className = 'w-[140px] h-[50px]' src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500" alt="App logo" />
            </div>
        </div>

        <div className=" items-center ">
            <input className='w-[556px] h-10 p-1 border-2 border-slate-400' type="text" name="search" />
            <button className='w-30 h-10 border-2 bg-lime-200'>
                Submit
            </button>
        </div>

        <div className="w-42 h-[60px]">
            <img className = 'w-39 h-10' src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg" alt="App logo" />
        </div>
        
    </div>
  )
}

export default Header