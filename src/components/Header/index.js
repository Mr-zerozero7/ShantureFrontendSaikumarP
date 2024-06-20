import React from 'react'
import { FaMoon } from "react-icons/fa";
import { MdOutlineWbSunny } from "react-icons/md";
import { Link } from 'react-router-dom';
import {TodoContext}  from '../../context/todoContext';
import {NavbarContainer,WebsiteLogo,
    TodosCount,
DarkModeButton,
WebsiteName,
Span,
MenuContainer,
} from './stylesComponent'


const Header = () => {
  return (
    <TodoContext.Consumer>
        {
            value=>{
                const {darkTheme,todosList, onToggleThemeButton,} = value
                // console.log(todosList.length)
                // const dark = darkTheme ? 'light' : 'black'
                const iconColor = darkTheme ? '#ffffff': '#515151'
                return(
                    <NavbarContainer $dark={value = darkTheme? '#151515':'#ffffff'} $color={value = darkTheme ?   '#ffffff':'#151515' }>
                        <Link to='/get-all-todos'>
                            <WebsiteLogo src='https://res.cloudinary.com/da7lrfcfb/image/upload/e_gen_restore/v1718747035/Shanture_01_fk8xf3.jpg' alt='website logo' />
                        </Link>
                        <WebsiteName>Shanture</WebsiteName>
                            <MenuContainer>
                                <TodosCount className='todos-count'>Todos Count: <Span>{todosList.length}</Span></TodosCount>
                                
                                <DarkModeButton type='button' onClick={onToggleThemeButton}>
                                    {darkTheme ? (<MdOutlineWbSunny color={iconColor}/>):(<FaMoon color={iconColor}/>) }
                                    </DarkModeButton>
                            </MenuContainer>
                    </NavbarContainer>
                )
            }
        }
    </TodoContext.Consumer>
    
  )
}

export default Header
