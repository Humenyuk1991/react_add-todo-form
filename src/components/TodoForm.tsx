import React, { useState } from 'react';
import classNames from 'classnames';
import usersFromServer from '../api/users';

export const TodoForm: React.FC = () => {
  const [userId, setUserId] = useState('');
  const [title, setTitle] = useState('');
  const [hasUserIdError, setHasUserIdError] = useState(false);
  const [hasTitleError, setHasTitleError] = useState(false);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
    if (hasTitleError) {
      setHasTitleError(false);
    }
  };

  const handleUserIdChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setUserId(e.target.value);
    if (hasUserIdError) {
      setHasUserIdError(false);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let hasError = false;

    if (!title) {
      setHasTitleError(true);
      hasError = true;
    }

    if (!userId) {
      setHasUserIdError(true);
      hasError = true;
    }

    if (hasError) {
      return;
    }

    // TODO: submit the form or call API here
  };

  return (
    <form
      action="api/todos"
      method="POST"
      className="box"
      onSubmit={handleSubmit}
    >
      <div className="field">
        <label className="label" htmlFor="post-title">
          Title:
        </label>
        <div className="control">
          <input
            id="post-title"
            className={classNames('input', {
              'is-danger': hasTitleError,
            })}
            type="text"
            placeholder="Title input"
            value={title}
            onChange={handleTitleChange}
          />
          {hasTitleError && (
            <p className="help is-danger">Please enter a title</p>
          )}
        </div>
      </div>
      <div className="field">
        <label className="label" htmlFor="post-user-id">
          User ID:
        </label>
        <div className="control">
          <div
            className={classNames('select', {
              'is-danger': hasUserIdError,
            })}
          >
            <select
              id="post-user-id"
              value={userId}
              onChange={handleUserIdChange}
            >
              <option value="" disabled>
                Select a user
              </option>
              {usersFromServer.map(user => (
                <option value={String(user.id)} key={user.id}>
                  {user.name}
                </option>
              ))}
            </select>
          </div>
          {hasUserIdError && (
            <p className="help is-danger">Please select a user</p>
          )}
        </div>
      </div>

      <div className="buttons">
        <button type="submit" className="button is-link">
          Add
        </button>
      </div>
    </form>
  );
};
