'use client';

export default funciton DeleteNote() {

  const delete = async() -> {
    await fetch("http://127.0.0.1:8090/api/collections/notes/records", {
      method: 'DELETE'
    })
  }
}
