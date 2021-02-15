import React from 'react'
import { connect } from 'react-redux';
import { logout } from "../redux/Profile/action";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuIcon,
  MenuCommand,
  Button,
  MenuDivider,
} from "@chakra-ui/react"


function Header({ user,logout })
{

  let firstTwo=""

  if (!user) {
    let { profile: { firstname, lastname } } = user 

     firstTwo=firstname.substring(0,1)+lastname.substring(0,1)

  }
       
 
  
    return (
        <div className="h-16 bg-white md:fixed   md:w-screen w-full  top-0 bottom-0   shadow-sm  flex items-center p-5">
        <h1 className=" font-black  text-3xl   font-nuito mr-auto md:pl-8 text-logo">Pursuit</h1>
        <div className="flex items-center">
          <p  className="rounded-full h-10 w-10 bg-indigo-100 text-lg flex items-center justify-center">{user &&  firstTwo}</p>
           <Menu arrowSize="20">
  <MenuButton >
  <p className="p-2 text-lg font-normal font-custom">Quadri</p>

  </MenuButton>
  <MenuList>
    <MenuGroup>
      <MenuItem onClick={()=>logout()}>Logout</MenuItem>
     </MenuGroup> 
  </MenuList>
</Menu>
        </div>

       </div> 

    )
}


const mapStateToProps = ({ profile }) => ({
  user:profile
})

export default connect(mapStateToProps,{logout})(Header)
