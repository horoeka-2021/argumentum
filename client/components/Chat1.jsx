import React, { useState } from 'react'

import { ChatEngine, getOrCreateChat } from 'react-chat-engine'

function Chat () {
  const [username, setUsername] = useState('')

  function createDirectChat (creds) {
    getOrCreateChat(
      creds,
      { is_direct_chat: true, usernames: [username] },
      () => setUsername('')
    )
  }

  function renderChatForm (creds) {
    return (
      <div>
        <input
          placeholder='Username'
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <button onClick={() => createDirectChat(creds)}>
          Create
        </button>
      </div>
    )
  }

  return (
    <div className='chat'>
      <ChatEngine
        height='70vh'
        userName='test2'
        userSecret='password'
        projectID='5de9b671-f871-4592-bbf9-5b905ee2f090'
        renderNewChatForm={creds => renderChatForm(creds)}
      />
    </div>
  )
}

export default Chat
