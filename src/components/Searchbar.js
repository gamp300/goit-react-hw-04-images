import React, { useState } from 'react';
import { Button, Input } from './Styles.Styled';

const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(query);
  };

  return (
    <header className="searchbar">
      <form className="form" onSubmit={handleSubmit}>
        <Button type="submit" className="button">
          <span className="button-label">Search</span>
        </Button>

        <Input
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
      </form>
    </header>
  );
};

export default Searchbar;
