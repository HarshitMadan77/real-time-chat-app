import React, { useState } from 'react'
import { LuMessagesSquare } from "react-icons/lu";
import '../style.css'
import _ from 'lodash'

const UserLogin = ({setUser}) => {
    const [userName, setUserName] = useState()
    const handleUser = () => {
        if(!userName) return;
        localStorage.setItem('user', userName)
        setUser(userName)
        localStorage.setItem('avatar', `https://picsum.photos/id/${_.random(1,1000)}/200/300`)
    }
  return (
    <div className='login_container'>
        <div className='login_title'>
            <LuMessagesSquare className='login_icon'/>
            <h1 className='login_heading'>CHAT APP</h1>
        </div>
        <div className='login_form'>
            <input type="text" placeholder='Enter your Name'
              onChange={(e) => setUserName(e.target.value)}/>
            <button onClick={handleUser}>Login</button>
        </div>
    </div>
  )
}

export default UserLogin