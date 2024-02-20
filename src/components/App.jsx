import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button';
import Loader from './Loader';
import Modal from './Modal';
import { Container, Search } from './Styles.Styled';

const API_KEY = '40863018-d3084d4a51e8d78d1c4f7dc14';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState('');

  useEffect(() => {
    if (!searchQuery) return;

    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
        );
        setImages(prevImages => [...prevImages, ...response.data.hits]);
      } catch (error) {
        console.error('Error fetching images', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [searchQuery, page]);

  const handleSearch = query => {
    setSearchQuery(query);
    setPage(1);
    setImages([]);
  };

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const openModal = imageUrl => {
    setShowModal(true);
    setModalImage(imageUrl);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalImage('');
  };

  return (
    <div>
      <Container>
        <Search>
          <Searchbar onSubmit={handleSearch} />
        </Search>
        <ImageGallery images={images} onImageClick={openModal} />
        {loading && <Loader />}
        {images.length > 0 && !loading && <Button onClick={loadMore} />}
        {showModal && <Modal imageUrl={modalImage} onClose={closeModal} />}
      </Container>
    </div>
  );
};

export default App;
