import React from 'react';
import "./sidebar.css";
import SidebarButton from './sidebarButton';
import { MdFavorite} from "react-icons/md"
import { FaGripfire, FaPlay} from "react-icons/fa"
import { FaSignOutAlt} from "react-icons/fa"
import { IoLibrary} from "react-icons/io5"
import { MdSpaceDashboard} from "react-icons/md"

export default function Sidebar() {
  return (
  <div className='sidebar-container'>
    <img
        src="https://avatars.mds.yandex.net/i?id=91bcb45dd8c0141adafc5458f56ed881be2001e5-10636899-images-thumbs&n=13"
        className='profile-img' 
        alt="profile"
    />  
    <div>
        <SidebarButton 
          title="Feed" 
          to="/feed" 
          icon={<MdSpaceDashboard/>}
          />
        <SidebarButton 
          title="Trending" 
          to="/trending" 
          icon={<FaGripfire/>}
          />
        <SidebarButton 
          title="Player" 
          to="/player" 
          icon={<FaPlay/>}
          />
        <SidebarButton 
          title="Favorites" 
          to="/favorites" 
          icon={<MdFavorite/>}
          />
        <SidebarButton 
          title="Library" 
          to="/" 
          icon={<IoLibrary/>}
          />
    </div>
    <SidebarButton title="Sign out" to="" icon={<FaSignOutAlt/>}/>
  </div>
    );
  }
