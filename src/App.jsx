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
  const [color, setColor] = useState('red');

  const addNewImageField = () => {
    setImages([...images, '']);
  };
  const handleChangeImages = (value, i) => {
    const temp = [...images];
    temp[i] = value;
    setImages(temp);
  };

  const deleteImage = (index) => {
    const temp = [...images];
    temp.splice(index, 1);
    setImages(temp);
  };

  const handleInputChange = (target, value) => {
    switch (target) {
      case 'author':
        setAuthor(value);
        break;
      case 'title':
        setTitle(value);
        break;
      case 'subtitle':
        setSubtitle(value);
        break;
      case 'category':
        setCategory(value);
        break;
      case 'color':
        setColor(value);
        break;
      default:
    }
  };

  // https://cdn-prod.medicalnewstoday.com/content/images/articles/322/322868/golden-retriever-puppy.jpg
  // https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgswCFmbTpJmErjtFi_oOL8Q87v4W3jUQEDw&usqp=CAU
  // https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg

  const formProps = {
    addNewImageField,
    handleChangeImages,
    handleInputChange,
    deleteImage,
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
      <Form {...formProps} {...cardProps} />
    </div>
  );
}

export default App;
