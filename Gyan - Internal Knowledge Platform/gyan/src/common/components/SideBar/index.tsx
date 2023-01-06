import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';

import {GiHamburgerMenu} from 'react-icons/gi'

const SideBar = () => {
  return (
    <div style={{ display: 'flex' }}>
          <Sidebar collapsedWidth={'0'} defaultCollapsed={true} >
        <Menu>
          <MenuItem> Documentation</MenuItem>
          <MenuItem> Calendar</MenuItem>
          <MenuItem> E-commerce</MenuItem>
        </Menu>
      </Sidebar>
    </div>
  )
}

export default SideBar