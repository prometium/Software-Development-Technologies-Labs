import './reset.css';
import './base.css';
import './app.css';

import React, { Suspense } from 'react';
import useForm from './hooks/useForm';
import useData from './hooks/useData';

const PostsTab = React.lazy(() => import('./PostsTab'));
const CommentsTab = React.lazy(() => import('./CommentsTab'));
const AlbumsTab = React.lazy(() => import('./AlbumsTab'));
const PhotosTab = React.lazy(() => import('./PhotosTab'));
const TodosTab = React.lazy(() => import('./TodosTab'));
const UsersTab = React.lazy(() => import('./UsersTab'));

const typesMap = {
  posts: 'Посты',
  comments: 'Комментарии',
  albums: 'Альбомы',
  photos: 'Фото',
  todos: 'Список дел',
  users: 'Пользователи'
};

function App() {
  const { inputs, handleChange } = useForm({ type: 'posts' });

  return (
    <>
      <main className="wrapper">
        <div>
          {Object.entries(typesMap).map(([key, value]) => (
            <div key={key}>
              <input
                id={key}
                name="type"
                type="radio"
                value={key}
                checked={inputs.type === key}
                onChange={handleChange}
              />
              <label htmlFor={key}>{value}</label>
            </div>
          ))}
        </div>
        <h1 className="current-type-title">{typesMap[inputs.type]}</h1>
        <Suspense fallback={<div>Загрузка...</div>}>
          {(() => {
            switch (inputs.type) {
              case 'posts':
                return <PostsTab posts={[]} />;
              case 'comments':
                return <CommentsTab />;
              case 'albums':
                return <AlbumsTab />;
              case 'photos':
                return <PhotosTab />;
              case 'todos':
                return <TodosTab todos={[]} />;
              case 'users':
                return <UsersTab users={[]} />;
              default:
            }
          })()}
        </Suspense>
      </main>
    </>
  );
}

export default App;
