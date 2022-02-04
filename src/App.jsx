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

  console.log('images ', images);
  return (
    <div className='App'>
      <Card
        images={images}
        author={author}
        title={title}
        subtitle={subtitle}
        color={color}
        category={category}
      />
      <Form
        images={images}
        getNewImage={getNewImage}
        deleteImage={deleteImage}
        setCategory={setCategory}
        setSubtitle={setSubtitle}
        setTitle={setTitle}
        setAuthor={setAuthor}
        author={author}
        title={title}
        subtitle={subtitle}
        category={category}
        color={color}
        setColor={setColor}
      />
    </div>
  );
}

export default App;
