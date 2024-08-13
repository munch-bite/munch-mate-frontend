import React, { useState } from 'react'
import upload from '../../assets/images/upload.png'
import upload1 from '../../assets/images/upload-icon.png'




const Add = () => {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name:"",
    description:"",
    price:"",
    category:"Salad"
  })

  const onChangeHandler =(event)=>{
const name = event.target.name;
const value =event.target.value;
setData(data=>({...data,[name]:value}))
  }

  // const onSubmitHandler = async(event)=>{
  //   event.preventDefault();
  //   const formData = new FormData();
  //   formData.append("name", data.name)
  //   formData.append("description", data.description)
  //   formData.append("price", Number(data.price))
  //   formData.append("category", data.category)
  //   formData.append("image", image)

  // }

  return (
    <div className='add w-[70%] mt-[50px] text-[#6d6d6d] text-[16px] pb-10'>
       <form className='flexcol gap-[20px]' > 
        {/* onSubmit={onSubmitHandler} */}
        <div className='add-img-upload flexcol w-[120px]'>
          <p>Upload Image</p>
          <label htmlFor="image">
            <img src={image?URL.createObjectURL(image):upload1} alt="upload icon" className='size-fit'/>
          </label>
          <input onChange={(e)=>setImage(e.target.files[0])} type="file" id='image' hidden required />
        </div>
        <div className="add-product-name flexcol ">
          <p>Product Name</p>
          <input onChange={onChangeHandler} value={data.name} type="text" name='name' placeholder='Type here' className='p-[10px]'/>
        </div>
        <div className="add-product-description">
          <p className='pb-3'>Product Description</p>
          <textarea onChange={onChangeHandler} value={data.description} name="description" placeholder="Write content here" rows="6" required className='p-[10px]'></textarea>
        </div>
        <div className="add-category-price flex gap-[30px]">
          <div className="add-category flexcol ">
            <p>Product category</p>
            <select name="category" className='p-[10px] max-w-[120px] ' onChange={onChangeHandler}>
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
            <input onChange={onChangeHandler} value={data.price} type="Number" name='price' placeholder='$20' className='p-[10px] max-w-[120px] ' />
          </div>
        </div>
        <button type='submit' className='add-button max-w-[120px] border-none bg-black text-white cursor-pointer p-[10px]'>ADD</button>
       </form>
    </div>
  )
}

export default Add