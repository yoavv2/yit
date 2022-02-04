import { useState, useMemo } from 'react';
import Card from './components/Card/Card';
import './App.css';
import Form from './components/Form/Form';

function App() {
  const [images, setImages] = useState(['']);
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [category, setCategory] = useState('');
  const [color, setColor] = useState('');
  const getNewImage = (image) => {
    setImages([image, ...images]);
  };

  const deleteImage = (index) => {
    setImages(images.filter((_, i) => i !== index));
  };

  const formProps = {
    images,
    getNewImage,
    deleteImage,
    setCategory,
    setSubtitle,
    setTitle,
    setAuthor,
    author,
    title,
    subtitle,
    category,
    color,
    setColor,
  };

  const cardProps = {
    images,
    author,
    title,
    subtitle,
    color,
    category,
  };
  console.log('images ', images);
  return (
    <div className='App'>
      <Card {...cardProps} />
      <Form {...formProps} />
    </div>
  );
}

export default App;
