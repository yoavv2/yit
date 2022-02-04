import React, { useState, useRef } from 'react';

import './Form.css';

function Form({
  images,
  getNewImage,
  deleteImage,
  subtitle,
  setSubtitle,
  title,
  setTitle,
  author,
  setAuthor,
  setCategory,
  category,
  color,
  setColor,
}) {
  const urlRef = useRef();
  const [url, setUrl] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (!url) {
    //   setError('Please enter a valid URL');
    //   return;
    // }
    getNewImage(url);
    // setUrl('');
  };

  const handleChange = (e) => {
    setUrl(e.target.value);
  };

  const handleDelete = (imageUrl, index) => {
    deleteImage(imageUrl);
  };

  const colors = [
    { value: 'red', name: 'אדום' },
    { value: 'green', name: 'ירוק' },
    { value: 'blue', name: 'כחול' },
    { value: 'yellow', name: 'צהוב' },
  ];

  return (
    <div className='form_wrap'>
      <form className='form' onSubmit={handleSubmit}>
        <label> תמונות</label>
        <div>
          {images &&
            images.map((image, i) => (
              <div className='input_wrap'>
                <input
                  className='input inputUrl'
                  type='url'
                  name='imageUrl'
                  placeholder='תמונה'
                  required
                  ref={urlRef}
                  onChange={handleChange}
                  value={url}
                />
                <button
                  className='btn btn_delete'
                  onClick={() => handleDelete(i)}
                >
                  מחק
                </button>
              </div>
            ))}
        </div>
        <button className='btn btn_addImage' type='submit'>
          הוסף תמונה
        </button>
        <label className='label_color'> צבע רקע - שם קטגוריה</label>
        <select
          className='input selectionInput'
          onChange={(e) => setColor(e.target.value)}
        >
          {colors.map((color) => (
            <option value={color.value}>{color.name}</option>
          ))}
        </select>
        <label className='label_category'> קטגוריה</label>
        <input
          className='input inputCategory'
          type='text'
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <label className='label_title'> כותרת</label>
        <input
          className='input inputTitle'
          type='text'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label className='label_subtitle'> כותרת משנה</label>
        <textarea
          className='input input_subtitle'
          type='text'
          style={{ width: '100%', minHeight: '20px', resize: 'vertical' }}
          value={subtitle}
          onChange={(e) => setSubtitle(e.target.value)}
        />
        <label className='label_author'> שם המחבר</label>
        <input
          className='input inputAuthor'
          type='text'
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </form>
    </div>
  );
}

export default Form;
