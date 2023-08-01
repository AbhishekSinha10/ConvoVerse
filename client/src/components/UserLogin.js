import React, { useState } from 'react';
import { CommentOutlined } from '@ant-design/icons';
import _ from 'lodash';

const button = {
  width: '20%',
  height: 50,
  fontWeight: 'bold',
  borderRadius: 10,
  fontSize: 15,
  backgroundColor: '#34B7F1',
  borderWidth: 0,
  color: '#fff',
  margin: 10,
  cursor: 'pointer',
};

export default function UserLogin({ setUser }) {
  const [user, setAUser] = useState('');

  function handleSetUser() {
    if (!user) return;
    localStorage.setItem('user', user);
    setUser(user);
    localStorage.setItem('avatar', `https://picsum.photos/id/${_.random(1, 1000)}/200/300`);
  }

  return (
    <div>
      <h1 style={{ margin: 10, textAlign: 'center' }}>
        <CommentOutlined color={'green'} /> ConvoVerse
      </h1>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <input
          style={{
            margin: 10,
            height: 30,
            width: '25%',
            borderRadius: 8,
            borderWidth: 9,
            fontSize: 15,
            paddingInline: 5,
          }}
          value={user}
          onChange={(e) => setAUser(e.target.value)}
          placeholder="Write your name"
        />
        <button onClick={() => handleSetUser()} style={button}>
          Join Conversation
        </button>
      </div>
    </div>
  );
}