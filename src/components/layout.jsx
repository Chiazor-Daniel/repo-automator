import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { MdOutlineDashboard } from "react-icons/md";
import { useState } from 'react';
import { AiOutlineGithub } from "react-icons/ai"
import { DiGitCommit } from "react-icons/di"
import { TbActivityHeartbeat } from "react-icons/tb"
import { CgGoogleTasks } from "react-icons/cg"
import { AiOutlineReconciliation } from "react-icons/ai"
import { Outlet, Link } from 'react-router-dom';


export function Layout() {
  // state for sidebar 
  const [sidebarVisible, setSidebarVisible] = useState(false);

  // state for profile menu 
  const [open, setOpen] = useState(false)

  // handling layout sidebar 
  function toggle() {
    setSidebarVisible(!sidebarVisible)
  }

  // handling options on profile 
  function menu() {
    setOpen(!open)
  }

  return (
    //  layout
    <div className={sidebarVisible ? "page-container text-xs" : "page-container2 text-xs"}>

      {/* nav bar  */}
      <nav className="h-20 border-none shadow-nav flex justify-between items-center px-4 fixed top-0 left-0 right-0 z-10 w-full bg-white">
        <div className="flex gap-4 items-center" >

          {/* hamburger icon to handle sidebar toggle  */}
          <div className='h-8 p-1' onClick={toggle}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="cursor-pointer text-gray-300 h-full bi bi-list-nested" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M4.5 11.5A.5.5 0 0 1 5 11h10a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zm-2-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm-2-4A.5.5 0 0 1 1 3h10a.5.5 0 0 1 0 1H1a.5.5 0 0 1-.5-.5z" /> </svg>
          </div>
          <div className="flex gap-2">
            <input type="searh" placeholder="search" className="hidden text-gray-400 md:block bg-gray-100 border-gray-200 rounded-full px-4 h-8 focus:outline-none" />
          </div>
        </div>

        {/* header in navbar  */}
        <h1 className='text-xl lg:text-3xl blue text-center cursor-pointer font-bold font-sans'>GIT<DiGitCommit className='inline-block mb-1' />HUB REP<AiOutlineGithub className='inline-block mb-1 lg:mb-2 text-center' /> AUTOMATOR</h1>
        <div className="flex items-center gap-2 items-center justify-center">
          <div className="flex gap-6 items-center">
            <div className='relative p-2'>
              <FontAwesomeIcon icon={faBell} className="h-5 blue cursor-pointer" />
              <div className='absolute bottom-5 left-4 notif w-3 h-3 p-1'>3</div>
            </div>

            {/* profile name  */}
            <h3 className='hidden lg:block text-gray-400 text-sm'>Person</h3>

            {/* image and menu  */}
            <div className='h-10 relative'>
              <img className="h-6 rounded-full w-8 h-7 mt-1 cursor-pointer" onClick={menu} src='https://simg.nicepng.com/png/small/145-1456421_drawn-batman-face-batman-easy-drawing.png' alt="profile" />
              {
                open && (
                  <div className='bg-white w-32 rounded-xl top-10 border absolute right-2 py-2'>
                    <ul className='h-full w-full flex flex-col justify-between'>
                      <li onClick={menu} className='drop-hover flex gap-2 cursor-pointer  text-gray-400 px-4 py-2 text-sm'>Profile</li>
                      <li onClick={menu} className='drop-hover flex gap-2 cursor-pointer text-gray-400 px-4 py-2 text-sm'>Settings</li>
                      <li onClick={menu} className='drop-hover flex gap-2 cursor-pointer  text-gray-400 px-4 py-2 text-sm'>History</li>
                      <li onClick={menu} className='drop-hover flex gap-2 cursor-pointer text-gray-400 px-4 py-2 text-sm'>Support</li>
                      <Link to="/">
                        <li className='drop-hover flex cursor-pointer rounded text-gray-400 px-4 py-2 border-t text-sm'>Sign Out</li>
                      </Link>
                    </ul>
                  </div>
                )
              }
            </div>
          </div>
        </div>
      </nav>

      {/* sidebar */}
      {/* switching between css classes to display sidebar  */}
      <div className={sidebarVisible ? "sidebar" : "sidebar2"}>
        <ul className='py-2 flex flex-col justify-between h-full'>

          {/* link to dashboard page  */}
          <Link to="/dashboard" onClick={toggle}>
            <li className='list py-5 text-center items-center blue-hover2'>
              <MdOutlineDashboard className='h-7 w-full' />
              <h3 className='text-xs'>Dashboard</h3>
            </li>
          </Link>

          {/* link to projects page  */}
          <Link to="/projects" onClick={toggle}>
            <li className='list py-5 text-center blue-hover2'>
              <AiOutlineReconciliation className="h-8 w-full" />
              <h3 className='text-xs'>Projects</h3>
            </li>
          </Link>

          <li className='list py-5 text-center blue-hover2'>
            <CgGoogleTasks className='h-8 w-full' />
            <h3 className='text-xs'>Tasks</h3>
          </li>
          <li className='list py-5 text-center blue-hover2'>
            <TbActivityHeartbeat className='h-8 w-full' />
            <h3 className='text-xs'>Logs</h3>
          </li>
        </ul>
      </div>

      {/* shows all other pages with the layout  */}
      <main className={sidebarVisible ? "main-content" : "main-contentfill"}>
        <Outlet />
      </main>

      {/* footer  */}
      <footer className={sidebarVisible ? "flex justify-between items-center h-auto w-full footer text-primary3 border-2 border-t border-primary2 py-8 px-20 bg-primary" : "flex justify-center items-center h-auto w-full footerFull text-primary3 border-2 border-t border-primary2 py-8 px-20 bg-primary"}>
        <p>© Copyright 2023</p>
      </footer>
    </div>
  )
}