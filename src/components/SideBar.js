import React from 'react';
import './SideBar.css';
import moon from '../assets/icon-moon.svg';
import sun from '../assets/icon-sun.svg';
import imgAvatar from '../assets/image-avatar.jpg';

function SideBar() {

  return (
    <div className="sidebar">
      <div className="sidebar__logo-box">
        <svg className="sidebar__logo" xmlns="http://www.w3.org/2000/svg" width="28" height="26"><path fill="#FFF" fillRule="evenodd" d="M20.513 0C24.965 2.309 28 6.91 28 12.21 28 19.826 21.732 26 14 26S0 19.826 0 12.21C0 6.91 3.035 2.309 7.487 0L14 12.9z"/></svg>
        <div className="sidebar__logo-box--bottom-half"></div>
      </div>

      <div>
        <div className="theme-box">
          <img className="theme-box__moon theme-box--active" src={moon} />
          <img className="theme-box__sun" src={sun} />
        </div>
        <div className="profile-box">
          <img className="profile-box__avatar" src={imgAvatar} />
        </div>
      </div>
    </div>
  );
}

export default SideBar;
