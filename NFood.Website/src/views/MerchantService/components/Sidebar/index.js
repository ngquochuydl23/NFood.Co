import React, { useState } from 'react';
import {
  IcDashboard,
  IcInsights,
  IcMenuManagement,
  IcFinance,
  IcEmployees,
  IcHelpCentre,
  IcDashboardActive,
  IcInsightsActive
} from '@assets/icons';
import { Icon } from '@components/Icon';
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent
} from 'react-pro-sidebar';
import _ from 'lodash';
import './sidebar-styles.scss'
import { ReactComponent as ReactLogo } from '@assets/icons/ic_dashboard.svg';
import { Link } from 'react-router-dom';

const MenuItems = [
  { icon: IcDashboard, activeIcon: IcDashboardActive, name: 'Dashboard', path: 'dashboard' },
  { icon: IcInsights, activeIcon: IcInsightsActive, name: 'Insights', path: 'insights' },
  { icon: IcFinance, activeIcon: IcDashboardActive, name: 'Finance', path: 'finance' },
  { icon: IcMenuManagement, activeIcon: IcDashboardActive, name: 'Menus', path: 'menus' },
  { icon: IcEmployees, activeIcon: IcDashboardActive, name: 'Employees', path: 'employess' },
  { icon: IcHelpCentre, activeIcon: IcDashboardActive, name: 'Help Centre', path: 'help-centre' },
]

const Sidebar = ({ }) => {
  const [currentPath, setCurrentPath] = useState('dashboard');

  const isActive = (item) => {
    var { path } = item;
    path = item.path.substring(item.path.lastIndexOf('/') + 1)
    return path === currentPath;
  }

  const onItemSideBarClick = (item) => {
    const { path } = item;
    setCurrentPath(path.substring(path.lastIndexOf('/') + 1))
  }

  const SideHeader = () => {
    return (
      <SidebarHeader>
        <div className='side-bar-header'>
          'sidebarTitle'
        </div>
      </SidebarHeader>
    )
  }

  const SideFooter = () => {
    return (
      <SidebarFooter>
        <div className='side-bar-footer'>

        </div>
      </SidebarFooter>
    )
  }

  const SideItem = (item) => {
    const active = isActive(item);
    const [hover, setHover] = useState(false);
    return (
      <MenuItem
        active={active}
        icon={<Icon icon={active ? item.activeIcon : item.icon} />}>
        {item.name}
        <Link
          onMouseOver={() => setHover(true)}
          onMouseOut={() => setHover(false)}
          to={item.path}
          onClick={() => onItemSideBarClick(item)} />
      </MenuItem>
    )
  }

  return (
    <ProSidebar breakPoint="md" image={false}>
      <SideHeader />
      <SidebarContent>
        <Menu>
          {_.map(MenuItems, (item, idx) =>
            <SideItem {...item} />
          )}
        </Menu>
      </SidebarContent>
      <SideFooter />
    </ProSidebar>
  )
}

export default Sidebar;