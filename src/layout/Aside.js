import React from 'react';
import { useIntl } from 'react-intl';
import {
  ProSidebar,Menu,MenuItem,SidebarHeader,SidebarFooter,SidebarContent,
} from 'react-pro-sidebar';
import {FaTachometerAlt,FaTh, FaGithub } from 'react-icons/fa';
import MOJLogo from '../assets/moj-logo.svg';
import { Link } from 'react-router-dom';
const Aside = ({ image, collapsed, rtl, toggled, handleToggleSidebar }) => {
  const intl = useIntl();
  return (
    
    <ProSidebar
      image={false}
      rtl={rtl}
      collapsed={collapsed}
      toggled={toggled}
      breakPoint="md"
      onToggle={handleToggleSidebar}
    >
      <SidebarHeader>
        <div
          style={{
             padding: '16px',
            
            display:'block',
         
          }}
        >
          <img width='250px' alt="Kapsark logo" src={MOJLogo} />      

        </div>

      </SidebarHeader>

      <SidebarContent>
        <Menu iconShape="circle">
        <MenuItem
            icon={<FaTachometerAlt />}
          >
            Home
            <Link to="/" />
          </MenuItem>
          
          
           <MenuItem icon={<FaTh />}>
           {intl.formatMessage({ id: 'items' })}
           <Link to="/items" />
           </MenuItem>
        </Menu>

        
       
      </SidebarContent>

      <SidebarFooter style={{ textAlign: 'center' }}>
        <div
          className="sidebar-btn-wrapper"
          style={{
            padding: '20px 24px',
          }}
        >
          <a
            href="https://github.com/amtherwi"
            target="_blank"
            className="sidebar-btn"
            rel="noopener noreferrer"
          >
            <FaGithub />
            <span> {intl.formatMessage({ id: 'viewSource' })}</span>
          </a>
          
        </div>
        
      </SidebarFooter>
    </ProSidebar>
 
  );
};

export default Aside;
