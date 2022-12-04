import React from 'react'
import { BsCheck } from 'react-icons/bs'
import { MdOutlineCancel } from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'

import { themeColors } from '../data/dummy'
import { useStateContext } from '../contexts/ContextProvider'

const ThemSet = () => {

  const {setColor , setMode , CurrentMode , currentColor , setthemSettings } = useStateContext();

  return (
    <div className='bg-half-transparent w-screen fixed nav-item top-0 right-0'>
        <div className='float-right h-screen dark:text-gray-200  bg-white dark:bg-[#484B52] w-400'>
           <div className='flex justify-between items-center p-4 ml-4 '>
                <p className='font-semibold text-xl'>
                   Seeting  </p>
                   <button type='button' onClick={()=>setthemSettings(false)}
                   style={{color:'rgb(153,171,180)' , borderRadius:'50%'}} 
                   className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray">
                      <MdOutlineCancel/>
                   </button>   
           </div> 


           <div className='flex-col border-t-1 border-color p4 ml-4 '>
               <p className='font-semibold text-lg mt-2' >Change Mode</p>


               <div className='m-3'>
                     <input type="radio" 
                     name="them"
                     id='ligth'
                    value="Ligth" 
                    className='cursor-pointer'
                    onChange={setMode}
                    checked={CurrentMode ==='Ligth'}/>

                    <label htmlFor='ligth' className='ml-2 text-md cursor-pointer p-4 mb-2'>
                        Ligth Mode
                    </label>
                    
               </div>
               <div className='m-3'>
                    <input type="radio" 
                    name="them"
                    id='dark'
                    value="Dark" 
                    className='cursor-pointer'
                    onChange={setMode}
                    checked={CurrentMode === 'Dark'}/>

                    <label htmlFor='Dark' className='ml-2 text-md cursor-pointer p-4 pb-10'>
                        Dark Mode
                    </label>
                    
               </div>
  


           </div>
              <div className='flex-col border-t-1 border-color p-4 ml-4 '>
              <p className='font-semibold text-lg' >Change Color</p>
                 
              <div className='flex gap-3 mt-3'>
                 {
                  themeColors.map((item,index)=>(
                     <TooltipComponent key={index}
                     content={item.name}
                     position="TopCenter" >   {/*${item.color === currenColor ? 'Block':'hidden'} */}
                          <div className='relative mt-2 cursor-pointer flex gap-5 items-center'>
                              <button type='button' className='h-10 w-10 rounded-full cursor-pointer' 
                              style={{backgroundColor:item.color}}
                              onClick={()=>setColor(item.color)}>
                                 <BsCheck className={`ml-2 text-2xl text-white ${item.color === currentColor ? 'Block':'hidden'}`}/>
                              </button>
                          </div>
                    </TooltipComponent>     
                  ))
                 }
              </div>
  


           </div>
        </div>
    </div>
  )
}

export default ThemSet
