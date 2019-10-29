import './reset.css';
import './base.css';
import './app.css';

import React from 'react';
import useData from './hooks/useData';
import useForm from './hooks/useForm';
import PostsTab from './PostsTab';

const typesMap = {
  posts: 'Посты',
  comments: 'Комментарии',
  albums: 'Альбомы',
  photos: 'Фото',
  todos: 'Список дел',
  users: 'Пользователи'
};

function App() {
  const comments = useData('https://jsonplaceholder.typicode.com/comments');
  const albums = useData('https://jsonplaceholder.typicode.com/albums');
  const photos = useData('https://jsonplaceholder.typicode.com/photos');
  const todos = useData('https://jsonplaceholder.typicode.com/todos');
  const users = useData('https://jsonplaceholder.typicode.com/users');

  const { inputs, handleChange } = useForm();

  return (
    <>
      <main className="wrapper">
        <div>
          <div>
            <input
              id="posts"
              name="type"
              type="radio"
              value="posts"
              onChange={handleChange}
            />
            <label htmlFor="posts">Посты</label>
          </div>
          <div>
            <input
              id="comments"
              name="type"
              type="radio"
              value="comments"
              onChange={handleChange}
            />
            <label htmlFor="comments">Комментарии</label>
          </div>
          <div>
            <input
              id="albums"
              name="type"
              type="radio"
              value="albums"
              onChange={handleChange}
            />
            <label htmlFor="albums">Альбомы</label>
          </div>
          <div>
            <input
              id="photos"
              name="type"
              type="radio"
              value="photos"
              onChange={handleChange}
            />
            <label htmlFor="photos">Фото</label>
          </div>
          <div>
            <input
              id="todos"
              name="type"
              type="radio"
              value="todos"
              onChange={handleChange}
            />
            <label htmlFor="todos">Список дел</label>
          </div>
          <div>
            <input
              id="users"
              name="type"
              type="radio"
              value="users"
              onChange={handleChange}
            />
            <label htmlFor="users">Пользователи</label>
          </div>
        </div>
        <h1 className="current-type-title">{typesMap[inputs.type]}</h1>
        {(() => {
          switch (inputs.type) {
            case 'posts':
              return <PostsTab />;
            default:
          }
        })()}
      </main>
    </>
  );
}

export default App;
