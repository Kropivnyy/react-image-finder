import React, { Component } from 'react';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Loader from 'react-loader-spinner';
import Button from './components/Button';
import Modal from './components/Modal';
import apiServices from './apiServices';

class App extends Component {
  state = {
    images: [],
    searchQuery: '',
    page: 1,
    isLoading: false,
    error: null,
    showModal: false,
    largeImageUrl: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const { images, searchQuery, largeImageUrl } = this.state;

    if (prevState.searchQuery !== searchQuery) {
      this.fetchImages();
    }

    if (images && prevState.images !== images) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }

    if (prevState.largeImageUrl !== largeImageUrl && largeImageUrl) {
      this.toggleModal();
    }
  }

  formSubmitHandler = query => {
    this.setState({ images: [], searchQuery: query, page: 1, error: null });
  };

  fetchImages = () => {
    const { searchQuery, page } = this.state;

    this.setState({ isLoading: true });

    apiServices
      .fetchImages(searchQuery, page)
      .then(results =>
        this.setState(prevState => ({
          images: [...prevState.images, ...results],
          page: prevState.page + 1,
        })),
      )
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  openLargeImage = ({ target }) => {
    this.setState({ largeImageUrl: target.attributes.url.value });
  };

  clearUrl = () => {
    this.setState({ largeImageUrl: '' });
  };

  toggleModal = () => {
    this.setState(prevState => ({ showModal: !prevState.showModal }));
  };

  render() {
    const { images, isLoading, error, showModal, largeImageUrl } = this.state;
    const buttonIsVisible = images.length > 0 && !isLoading;

    return (
      <>
        <Searchbar onSubmit={this.formSubmitHandler} />
        {error && <h1>Что-то пошло не так. Попробуйте снова.</h1>}
        <ImageGallery images={images} onClick={this.openLargeImage} />
        <div className="LoaderWrapper">
          <Loader
            visible={isLoading}
            type="BallTriangle"
            color="#3f51b5"
            height={80}
            width={80}
          />
        </div>

        {buttonIsVisible && <Button onClick={this.fetchImages} />}
        {showModal && (
          <Modal
            url={largeImageUrl}
            toggleModal={this.toggleModal}
            clearUrl={this.clearUrl}
          />
        )}
      </>
    );
  }
}

export default App;
