import React from 'react'

import { ChatEngine, getOrCreateChat } from 'react-chat-engine'
import { useSelector } from 'react-redux'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import Welcome from './Welcome'

function Chat () {
  const userToCreateChatWith = useSelector(state => state.createChat)
  const user = useSelector(state => state.user)

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

export default Chat
