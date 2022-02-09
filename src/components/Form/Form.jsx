import React, { useState } from 'react';

import './Form.css';

function Form({
  addNewImageField,
  deleteImage,
  handleChangeImages,
  handleInputChange,
  images,
  author,
  title,
  subtitle,
  category,
  color,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const colors = [
    { value: 'red', name: 'אדום' },
    { value: 'green', name: 'ירוק' },
    { value: 'blue', name: 'כחול' },
    { value: 'yellow', name: 'צהוב' },
  ];

  return (
    <>
      <form className='form' onSubmit={handleSubmit}>
        <label> תמונות</label>
        <div>
          {images &&
            images.map((image, i) => (
              <div className='input_wrap'>
                <input
                  className='input input_url'
                  type='url'
                  name='imageUrl'
                  placeholder='תמונה'
                  onChange={(e) => handleChangeImages(e.target.value, i)}
                  value={image}
                  autoComplete='off'
                />
                <button
                  className='btn btn_delete'
                  onClick={() => deleteImage(i)}
                >
                  מחק
                </button>
              </div>
            ))}
        </div>
        <button
          className='btn btn_add_image'
          type='submit'
          onClick={addNewImageField}
        >
          הוסף תמונה
        </button>
        <label className='label_color'> צבע רקע - שם קטגוריה</label>
        <select
          className='input selection_input'
          onChange={(e) => handleInputChange('color', e.target.value)}
        >
          {colors.map((color) => (
            <option value={color.value}>{color.name}</option>
          ))}
        </select>
        <label className='label_category'> קטגוריה</label>
        <input
          className='input input_category'
          type='text'
          value={category}
          onChange={(e) => handleInputChange('category', e.target.value)}
        />
        <label className='label_title'> כותרת</label>
        <input
          className='input input_title'
          type='text'
          value={title}
          onChange={(e) => handleInputChange('title', e.target.value)}
        />
        <label className='label_subtitle'> כותרת משנה</label>
        <textarea
          className='input input_subtitle'
          type='text'
          style={{ width: '100%', minHeight: '20px', resize: 'vertical' }}
          value={subtitle}
          onChange={(e) => handleInputChange('subtitle', e.target.value)}
        />
        <label className='label_author'> שם המחבר</label>
        <input
          className='input input_author'
          type='text'
          value={author}
          onChange={(e) => handleInputChange('author', e.target.value)}
        />
      </form>
    </>
  );
}

export default Form;
