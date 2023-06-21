// import useState hook for using states in component
import {useEffect} from 'react';
// import images
import sun from '../../img/icons/sun.svg';
import moon from '../../img/icons/moon.svg';
// import styles
import './style.css';
// import custom function hook
import { useLocalStorage } from '../../utils/uselocalstorage';
import detectDarkMode from '../../utils/detectDarkMode';

// File with switch mode button component
const BtnDarkMode = () => {
    
    const [darkMode,setDarkMode] = useLocalStorage('darkMode',detectDarkMode);
  

    // useEffect hook which will change mode depending on it's class, [darkMode] - default value
    useEffect(()=>{
       if (darkMode === 'dark') {
        document.body.classList.add('dark')
       } else {
        document.body.classList.remove('dark')
       }
    },[darkMode])

    // useEffect hook which will react on system changes and will change mode depending on time is right now
    useEffect(()=> {
            window
            .matchMedia('(prefers-color-scheme:dark)')
            .addEventListener('change',(event)=>{
                const newColorScheme = event.matches ? 'dark' : 'light';
                setDarkMode(newColorScheme)
            })
    },[setDarkMode])

    // Switching mode function 
    const toggleDarkMode = () => {
        setDarkMode((currentValue)=>{
            return currentValue === 'light' ? 'dark' : 'light';
        })
    }

    // constants with class values
    const btnNormal = 'dark-mode-btn';
    const btnActive = 'dark-mode-btn dark-mode-btn--active';

    return (
        
         <button className={darkMode === 'dark' ? btnActive : btnNormal} onClick = {toggleDarkMode}> 
            <img src={sun} alt="Light mode" className="dark-mode-btn__icon"/>
            <img src={moon} alt="Dark mode" className="dark-mode-btn__icon"/>
        </button>
        
    )
}


export default BtnDarkMode;