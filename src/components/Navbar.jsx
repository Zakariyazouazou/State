import React , {useEffect} from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { FiShoppingCart } from 'react-icons/fi'
import { BsChatLeft } from 'react-icons/bs' 
import { RiNotification2Line, RiNotification3Line } from 'react-icons/ri'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import avatar from '../data/avatar.jpg'
import {Cart , Chat , Notification , UseProfie } from '../components/index'
import {useStateContext} from '../contexts/ContextProvider'

const NavButton = ({title , CustomFunc , icon , color , dotColor}) =>(
    <TooltipComponent content={title} position="BottomCenter">
         <button type='button' onClick={CustomFunc} style={{color}}
         className="relative text-xl rounded-full p-3 hover:bg-light-gray">
            <span style={{background: dotColor}}
               className="absolute inline-flex rounded-full h-2 top-2 right-2 w-2"
            />
               {icon}
         </button>
    </TooltipComponent>
)




const Navbar = () => {
  const {activeMenu , setactiveMenu ,screensize , Setscreensize, isClick, handleClick ,setisClick , currentColor} = useStateContext()
  useEffect(() => {
      const handleresize = () => {
           Setscreensize(window.innerWidth)
      }

      window.addEventListener("resize", handleresize)  //besh kol mayesghare lwidth yetbadel lwidth fe weset Setscreensize

      handleresize()

      return()=> window.removeEventListener('resize' , handleresize) // besh tarazanesh lpage
  }, [])


  useEffect(() => {
       if(screensize <= 900){
        setactiveMenu(false); 
       }else{
         setactiveMenu(true)
       }
  }, [screensize])

  return (
    <div className='flex justify-between p-2 md:mx-6 realtive '>
          <NavButton title="menu" CustomFunc={()=> setactiveMenu((prevActiveMenu)=>!prevActiveMenu)}
          color={currentColor} icon={<AiOutlineMenu/>}/>


          <div className='flex'>
          <NavButton 
            title="cart" 
            color={currentColor} 
            CustomFunc={() => handleClick('cart')}
            icon={<FiShoppingCart/>}
          />
          <NavButton 
            title="Chat" 
            dotColor='#03C9D7' 
            color={currentColor}
            CustomFunc={() =>handleClick('chat')}
            icon={<BsChatLeft/>}
          />
          <NavButton 
            title="Notifications"  
            dotColor='#03C9D7' 
            color={currentColor}
            CustomFunc={() => handleClick('notification')} 
            icon={<RiNotification3Line/>}
          />
          <TooltipComponent content="Profile" position='BottomCenter'>
              <div className='flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg' onClick={() => handleClick('userProfile')} 

              >
                  <img src={avatar} className='rounded-full w-8 h-8 '/>    
                  <p>
                    <span className='text-gray-400 text-14'>Hello...</span> {" "}<span className='font-bold ml-1 text-14'>I m Zakariya Zouazou</span>
                    <MdKeyboardArrowDown className='text-gray-400 text-14'  />
                  </p>
              </div>
          
          </TooltipComponent>
          {isClick?.cart  &&  (<Cart/>) }
          {isClick?.chat  &&  (<Chat/>) }
          {isClick?.notification  &&  (<Notification/>) }
          {isClick?.userProfile  &&  (<UseProfie/>) }
          </div>
    </div>
  )
}

export default Navbar
