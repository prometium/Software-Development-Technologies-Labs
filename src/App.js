import './reset.css';
import './base.css';
import './app.css';

import React from 'react';
import useForm from './hooks/useForm';
import PostsTab from './PostsTab';
import CommentsTab from './CommentsTab';
import AlbumsTab from './AlbumsTab';
import PhotosTab from './PhotosTab';
import TodosTab from './TodosTab';
import UsersTab from './UsersTab';

const typesMap = {
  posts: 'Посты',
  comments: 'Комментарии',
  albums: 'Альбомы',
  photos: 'Фото',
  todos: 'Список дел',
  users: 'Пользователи'
};

function App() {
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
            case 'comments':
              return <CommentsTab />;
            case 'albums':
              return <AlbumsTab />;
            case 'photos':
              return <PhotosTab />;
            case 'todos':
              return <TodosTab />;
            case 'users':
              return <UsersTab />;
            default:
          }
        })()}
      </main>
    </>
  );
}

export default App;