import React from "react";

const NoteList = ({ notes }) => (
  <ul>
    {/* { id, text } деструктуризировал, вместо (note.text note.age) например... */}
    {notes.map(({ id, text, age }) => (
      <li key={id}>
        <p>Оценка: {age}</p>
        <p>Отзыв: {text}</p>
      </li>
    ))}
  </ul>
);

export default NoteList;
