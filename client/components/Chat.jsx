import React from 'react'

import { ChatEngine, getOrCreateChat } from 'react-chat-engine'
import { useSelector } from 'react-redux'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import Welcome from './Welcome'

function Chat () {
  const userToCreateChatWith = useSelector(state => state.createChat)
  const user = useSelector(state => state.user)
  const username = useSelector(state => state.setUsername)

  function createDirectChat (creds) {
    getOrCreateChat(
      creds,
      { is_direct_chat: true, usernames: [userToCreateChatWith.username] },
      () => console.log('chat created')
    )
  }

  function renderChatForm (creds) {
    // does this function need to do anything or is it redundant?
    console.log('attempting to create chat with: ', userToCreateChatWith.username)
    createDirectChat(creds)
  }

  if (user.email && userToCreateChatWith.username) {
    return (
      <div className='chat'>

        <IfNotAuthenticated>
          <Welcome/>
        </IfNotAuthenticated>

        <IfAuthenticated>
          <ChatEngine
            height='70vh'
            userName={username}
            userSecret={user.auth0Id}
            projectID='0d71b2e6-f619-4edf-b9fc-58592559a6cb'
            renderNewChatForm={creds => renderChatForm(creds)}
          />
        </IfAuthenticated>

      </div>
    )
  } else {
    return <Welcome/>
  }
}

export default Chat
