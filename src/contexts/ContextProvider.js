import React , {createContext , useContext , useState} from 'react';




const StateContext = createContext() ; 


//hathome besh tkhali nav barre well taswira ta3 icone tekhtafi
const initialisation = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
}

export const ContextProvider = ({children})=>{
    const [activeMenu,setactiveMenu] = useState(true)
    const [isClick, setisClick] = useState(initialisation)
    const [screensize , Setscreensize] = useState(undefined)
    const [currentColor , setcurrentColor] = useState('orange')
    const [CurrentMode , setCurrentMode] = useState('Dark')
    const [themSettings , setthemSettings] = useState(false);
    const handleClick = (clicked) => {setisClick({ ...initialisation, [clicked]: true }) };


    const setMode = (e)=>{
              setCurrentMode(e.target.value)
              localStorage.setItem('themeMode',e.target.value)
              setthemSettings(false)
    }
    const setColor = (color)=>{
        setcurrentColor(color)
        localStorage.setItem('ColorMode',color)
        setthemSettings(false)
   }


     return (
          <StateContext.Provider
            value={{activeMenu,
                    setactiveMenu,
                    isClick, 
                    setisClick, 
                    handleClick, setColor , setMode ,
                    screensize , Setscreensize,
                    currentColor , setcurrentColor,CurrentMode , setCurrentMode,themSettings , setthemSettings , setMode ,  setColor
                    }}  
        >
              {children}
          </StateContext.Provider>
     )
}

//setColor , setMode , CurrentMode , currentColor , setthemSettings


export const useStateContext = () => useContext(StateContext)


