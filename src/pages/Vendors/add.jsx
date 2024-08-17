import React, { useState } from 'react';
import upload1 from '../../assets/images/upload.png';

const Add = () => {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Salad"
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({ ...data, [name]: value }));
  };

  return (
    <div className='add w-full max-w-2xl mx-auto text-gray-600 text-lg pt-10 px-5 sm:px-10 bg-orange-50 rounded-lg m-2 shadow-md'>
      <form className='flex flex-col gap-8'>
        <div className='add-img-upload flex flex-col items-center'>
          <p className='mb-2 text-gray-600 font-semibold'>Upload Image</p>
          <label htmlFor="image" className='cursor-pointer'>
            <img src={image ? URL.createObjectURL(image) : upload1} alt="upload icon" className='w-24 h-24 object-cover rounded-full border-2 border-dashed border-gray-300 hover:border-gray-400 transition-all' />
          </label>
          <input onChange={(e) => setImage(e.target.files[0])} type="file" id='image' hidden required className='outline-none' />
        </div>

        <div className='flex flex-col gap-5'>
          <div className="add-product-name flex flex-col">
            <p className='mb-2 text-gray-600 font-semibold'>Product Name</p>
            <input onChange={onChangeHandler} value={data.name} type="text" name='name' placeholder='Type here' className='p-3 border border-gray-300 rounded-md shadow focus:ring focus:ring-orange-200 transition-all outline-none' />
          </div>

          <div className="flex flex-col sm:flex-row gap-5">
            <div className="flex-1 sm:w-[40%]">
              <p className='mb-2 text-gray-600 font-semibold'>Product Description</p>
              <textarea onChange={onChangeHandler} value={data.description} name="description" placeholder="Write content here" rows="3" required className='p-3 w-full border border-gray-300 rounded-md shadow focus:ring focus:ring-orange-200 transition-all outline-none'></textarea>
            </div>
            <div className="add-price flex flex-col sm:w-[40%]">
              <p className='mb-2 text-gray-600 font-semibold'>Product Price</p>
              <input onChange={onChangeHandler} value={data.price} type="number" name='price' placeholder='GH₵ 20' className='p-3 border border-gray-300 rounded-md shadow focus:ring focus:ring-orange-200 transition-all outline-none' />
            </div>
          </div>

          <div className="add-category flex flex-col">
            <p className='mb-2 text-gray-600 font-semibold'>Product Category</p>
            <select name="category" className='p-3 border border-gray-300 rounded-md shadow focus:ring focus:ring-orange-200 transition-all outline-none' onChange={onChangeHandler}>
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
        </div>

        <button type='submit' className='add-button self-center bg-orange-600 text-white rounded-md py-3 px-6 mb-10 hover:bg-black transition-all w-[20%]'>ADD</button>
      </form>
    </div>
  );
};

export default Add;
