import React from 'react';
const menuItems = [
  {
    id: 1,
    name: 'Pepperoni Pizza',
    description: 'A delicious pizza topped with pepperoni, mozzarella cheese, and tomato sauce.',
    price: 'GH₵50.00',
    imageUrl: 'https://via.placeholder.com/200x150',
  },
  {
    id: 2,
    name: 'Cheeseburger',
    description: 'A juicy beef patty topped with cheddar cheese, lettuce, tomato, and our special sauce.',
    price: 'GH₵35.00',
    imageUrl: 'https://via.placeholder.com/200x150',
  },
  {
    id: 3,
    name: 'Sushi Platter',
    description: 'A variety of fresh sushi rolls including tuna, salmon, and cucumber rolls.',
    price: 'GH₵70.00',
    imageUrl: 'https://via.placeholder.com/200x150',
  },
  
];

const RestaurantPage = () => {
  return (
    <div className="w-full h-full bg-gray-50">
     
      <div className="w-full p-10">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
          <img
            src="https://via.placeholder.com/800x400"
            alt="Pizza Palace"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Pizza Palace</h2>
            <p className="text-gray-600 mb-4">
              Welcome to Pizza Palace, where we serve the best pizza in town! From classic pepperoni to gourmet options, our pizzas are made with the freshest ingredients. Enjoy our cozy atmosphere and friendly service.
            </p>
          </div>
        </div>

        {/* Menu Items */}
        <div className="menu-items grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={item.imageUrl}
                alt={item.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
                <p className="text-gray-600 mb-2">{item.description}</p>
                <p className="font-bold text-gray-800">{item.price}</p>
                <button className="mt-4 py-2 px-4 bg-[#EA7519] text-white rounded-full">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantPage;
