import React from 'react'
import './rightBar.scss'

const RightBar = () => {
  return (
    <div className='rightBar'>
      <div className="container">
        <div className="item">
          <span>Suggestions For You</span>
          <div className="user">
            <div className="userInfo">
              <img src={require('../../assets/3.jpeg')} alt="" />
              <span>Jane Doe</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={require('../../assets/3.jpeg')} alt="" />
              <span>Jane Doe</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Latest ctivities</span>
          <div className="user">
            <div className="userInfo">
              <img src={require('../../assets/3.jpeg')} alt="" />
              <p>
                <span>Jane Doe</span> changed their profile picture
              </p>              
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={require('../../assets/3.jpeg')} alt="" />
              <p>
                <span>Jane Doe</span> changed their profile picture
              </p>              
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={require('../../assets/3.jpeg')} alt="" />
              <p>
                <span>Jane Doe</span> changed their profile picture
              </p>              
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={require('../../assets/3.jpeg')} alt="" />
              <p>
                <span>Jane Doe</span> changed their profile picture
              </p>              
            </div>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="userInfo">
              <img src={require('../../assets/3.jpeg')} alt="" />
              <div className="online"/>
              <span>Jane Doe</span>            
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={require('../../assets/3.jpeg')} alt="" />
              <div className="online"/>
              <span>Jane Doe</span>            
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={require('../../assets/3.jpeg')} alt="" />
              <div className="online"/>
              <span>Jane Doe</span>            
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={require('../../assets/3.jpeg')} alt="" />
              <div className="online"/>
              <span>Jane Doe</span>            
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={require('../../assets/3.jpeg')} alt="" />
              <div className="online"/>
              <span>Jane Doe</span>            
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={require('../../assets/3.jpeg')} alt="" />
              <div className="online"/>
              <span>Jane Doe</span>            
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightBar