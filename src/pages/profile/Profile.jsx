import React from 'react'
import './profile.scss'
import { FacebookTwoTone, LinkedIn, Instagram, Twitter, PlaceOutlined, LanguageOutlined, EmailOutlined, MoreVertOutlined, Pinterest } from '@mui/icons-material'
import Posts from '../../components/posts/Posts'

const Profile = () => {
  return (
    <div className='profile'>
      <div className="images">
        <img src="https://images.unsplash.com/photo-1533850595620-7b1711221751?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=945&q=80" alt="" className="cover" />
        <img src={require('../../assets/1.jpeg')} alt="" className="profilePic" />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href="http://facebook.com">
              <FacebookTwoTone fontSize='large'/>
            </a>
            <a href="http://facebook.com">
              <Instagram fontSize='large'/>
            </a>
            <a href="http://facebook.com">
              <Twitter fontSize='large'/>
            </a>
            <a href="http://facebook.com">
              <LinkedIn fontSize='large'/>
            </a>
            <a href="http://facebook.com">
              <Pinterest fontSize='large'/>
            </a>
          </div>
          <div className="center">
            <span>Jane Doe</span>
            <div className="info">
              <div className="item">
                <PlaceOutlined/>
                <span>Kenya</span>
              </div>
              <div className="item">
                <LanguageOutlined/>
                <span>thadeus.com</span>
              </div>              
            </div>
            <button>follow</button>
          </div>
          <div className="right">
            <EmailOutlined/>
            <MoreVertOutlined/>
          </div>
        </div>
        <Posts/>
      </div>      
    </div>
  )
}

export default Profile