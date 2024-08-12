import React from 'react'
import upload from '../../assets/images/upload.png'
import upload1 from '../../assets/images/upload-icon.png'

const Add = () => {
  return (
    <div className='add'>
       <form className='flexcol'>
        <div className='add-img-upload flexcol'>
          <p>Upload Image</p>
          <label htmlFor="image">
            <img src={upload1} alt="upload icon" className='size-[30px]'/>
          </label>
          <input type="file" id='image' hidden required />
        </div>
        <div className="add-product-name flexcol">
          <p>Product Name</p>
          <input type="text" name='name' placeholder='Type here'/>
        </div>
        <div className="add-prpduct-description">
          <p>Product Description</p>
          <textarea name="description" placeholder="Write content here" rows="6" required></textarea>
        </div>
        <div className="add-category-price">
          <div className="add-category flexcol">
            <p>Product category</p>
            <select name="category">
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Desserts">Desserts</option>
              <option value="Local">Local</option>
              <option value="Pizzas">Pizzas</option>
              <option value="Breakfast">Breakfast</option>
              <option value="Noodles">Noodles</option>
              <option value="Chinese">Chinese</option>
              <option value="Indian">Indian</option>
              <option value="Burger">Burger</option>
              <option value="Bakes">Bakes</option>
              <option value="Drinks">Drinks</option>
              <option value="Vegan">Vegan</option>
            </select>
          </div>
          <div className="add-price flexcol">
            <p>Product price</p>
            <input type="Number" name='price' placeholder='$20'  />
          </div>
        </div>
        <button type='submit' className='add-button'>ADD</button>
       </form>
    </div>
  )
}

export default Add