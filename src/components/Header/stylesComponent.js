import styles from 'styled-components'

export const NavbarContainer = styles.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
box-shadow: 4px 4px 16px 4px #bfbfbf;
background-color: ${props=>(props.$dark)};
color: ${props=>(props.$color)};
`
export const WebsiteLogo = styles.img`
width: 120px;
height: 70px;
margin-left: 20px;
border-radius: 40px;
`
export const Span= styles.span`
font-weight: bold;
`
export const WebsiteName = styles.h1`
font-family: Papyrus;
font-weight: bold;
`
export const MenuContainer = styles.div`
display: flex;
flex-direction: row;
justify-content: space-evenly;
align-items: center;
width: 15%;
`
export const TodosCount = styles.p``
export const FavoriteTodos = styles.p``
export const DarkModeButton = styles.button`
border: none;
padding: 10px;
cursor: pointer;
background-color: transparent;
font-size: 24px;
`