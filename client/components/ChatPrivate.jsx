import React, { useState } from 'react'

import { ChatEngine, getOrCreateChat } from 'react-chat-engine'

function ChatPrivate () {
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
    <ChatEngine
      height='100vh'
      userName='tane'
      // userName='test'
      userSecret='keyboard56'
      // userSecret='password'
      projectID='f7791b90-3ea7-4f97-8fd4-9e62df29bbc7'
      renderNewChatForm={creds => renderChatForm(creds)}
    />
  )
}

export default ChatPrivate
