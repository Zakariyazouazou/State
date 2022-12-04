import React from 'react'
import {Link , NavLink} from 'react-router-dom' ; 
import {MdOutlineCancel} from'react-icons/md'
import {SiShopware} from 'react-icons/si'
import {RiSunFill} from 'react-icons/ri'
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import {links, Links } from '../data/dummy'
import { useStateContext } from '../contexts/ContextProvider';

 
const Sidebar = () => {
  const {activeMenu , setactiveMenu , screensize , currentColor} = useStateContext()
  const activelink = 'flex items-center gap-5 pl-4 pb-2.5 rounded-lg text-white text-md m-2'
  const normelLink = 'flex items-center gap-5 pl-4 pb-2.5 rounded-lg  text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-ligth-gray m-2'


  const handlcloseSideBar = () =>{
     if(activeMenu && screensize <= 900){
        setactiveMenu(false)
     }
  }

  return (
    <div className='ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10'>
       {
        activeMenu && (<>
              <div className='flex justify-between items-center'>
                    <Link to="/" onClick={handlcloseSideBar} className='items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900'>
                       <RiSunFill className='text-3xl' / > <span>Sunshine</span>
                    </Link>
                    <TooltipComponent content="menu"   
                     position="BottomCenter" >
                        <button type='button'
                            className="text-xl rounded-full p-3  hover:bg-light-gray mt-4 block "
                            onClick={()=>setactiveMenu((precActiveMenu)=>!precActiveMenu)}>
                                <MdOutlineCancel  />
                        </button>
                    </TooltipComponent>
              </div>
              <div className='mt-10'>
                 {
                  links.map((item)=>(
                     <div key={item.title}>
                          <p className='text-gray-400 m-3 mt-4 uppercase'>{item.title}</p>    
                          {item.links.map((link)=>(
                            <NavLink to={`/${link.name}`}
                            style={({isActive})=> ({backgroundColor :isActive ? currentColor : ''})}    //wa9eet lghodwa

                            key={link.name}
                            onClick={handlcloseSideBar}
                            className={({isActive})=>
                                  isActive ? activelink : normelLink
                          }
                             >
                                 <span className='pt-2'>{link.icon} </span>
                                 <span className='capitalize pt-2'>
                                    {link.name}
                                 </span>

                            </NavLink>
                         ))
    
                         }
                     </div>
                  ))
                 }
              </div>
          </>)
       }
    </div>
  )
}

export default Sidebar
