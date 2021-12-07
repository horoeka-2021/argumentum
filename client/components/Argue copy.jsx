import React, { useState } from 'react'

import { ChatEngine, getOrCreateChat } from 'react-chat-engine'
import { useSelector } from 'react-redux'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import Welcome from './Welcome'

// this chat file contains the old version of Chat that I couldn't get working...
function Argue () {
  const usernameState = useSelector(state => state.username)
  const [username, setUsername] = useState(usernameState)
  const user = useSelector(state => state.user)

  function createDirectChat (creds) {
    getOrCreateChat(
      creds,
      { is_direct_chat: true, usernames: [username] },
      () => setUsername('')
    )
  }

  // function renderChatForm (creds) {
  //   createDirectChat(creds)
  // }

  function renderChatForm (creds) {
    return (
      <div>
        {/* <input
          placeholder='Username'
          value={username}
          onChange={e => setUsername(e.target.value)}
        /> */}
        <button onClick={() => createDirectChat(creds)}>
          Create
        </button>
      </div>
    )
  }

  if (user.email) {
    return (
      <div className='chat'>

        <IfNotAuthenticated>
          <Welcome/>
        </IfNotAuthenticated>

        <IfAuthenticated>
          <ChatEngine
            height='70vh'
            userName={user.email}
            userSecret={user.auth0Id}
            projectID='5de9b671-f871-4592-bbf9-5b905ee2f090'
            renderNewChatForm={creds => renderChatForm(creds)}
          />
        </IfAuthenticated>

      </div>
    )
  } else {
    return <Welcome/>
  }
}

export default Argue
