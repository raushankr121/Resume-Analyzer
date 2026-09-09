import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from './SideBar.module.css'
import ArticleIcon from '@mui/icons-material/Article';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import LogoutIcon from '@mui/icons-material/Logout';

const SideBar = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div className={styles.sideBar}>
      <div className={styles.sideBarIcon}>
        <ArticleIcon sx={{ fontSize: 54, marginBottom: 2 }} />
        <div className='SideBarTopContent'>Resume screening</div>
      </div>
      <div className={styles.sideBarOptionBlock}>

        <Link to='/dashboard' className={[styles.sideBarOption, location.pathname==='/dashboard' ?styles.slectedOption:null].join(' ')}>
          <DashboardIcon sx={{ fontSize: 22 }} />
          Dashboard
        </Link>

        <Link to='/history' className={[styles.sideBarOption, location.pathname === '/history'? styles.slectedOption: null].join(' ')}>
          <ManageSearchIcon sx={{ fontSize: 22 }} />
          History
        </Link>

        <Link to='/admin' className={[styles.sideBarOption, location.pathname === '/admin'? styles.slectedOption: null].join(' ')}>
          <AdminPanelSettingsIcon sx={{ fontSize: 22 }} />
          Admin
        </Link>

        <Link to='/logout' className={styles.sideBarOption}>
          <LogoutIcon sx={{ fontSize: 22 }} />
          LogOut
        </Link>

      </div>
    </div>
  )
}

export default SideBar