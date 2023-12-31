'use client';

import { useRouter } from "next/navigation";
import { useState } from 'react';

export default function CreateNote() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const router = useRouter();

  const create = async() => {
    await fetch("http://127.0.0.1:8090/api/collections/notes/records", {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({title, content})
    })

    setContent('');
    setTitle('');

    router.refresh();
  }

  return (
    <div className='note-form'>
      <h1>Create a note</h1>
      <form onSubmit={create}>
        <input
          type="text"
          placeholder='title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder='content'
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type='submit'>
          Create Note
        </button>
      </form>
    </div>
  )
}
