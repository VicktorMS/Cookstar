/* eslint-disable react/prop-types */
import React from 'react'

const CategoryList = () => {

    const categories = [
        {
            name: 'Burguers', 
            imageUrl: '/assets/icons/burguerIcon.png',
        },
        {
            name: 'Adicionais', 
            imageUrl: '/assets/icons/friesIcon.png'
        },
        {
            name: 'Bebidas', 
            imageUrl: '/assets/icons/drinksIcon.png',
        },
        {
            name: 'Sobremesas', 
            imageUrl: '/assets/icons/iceCreamIcon.png'
        },

        {
            name: 'Alcoólicos', 
            imageUrl: '/assets/icons/beerIcon.png',
        },
        // {
        //     name: 'Combos', 
        //     imageUrl: 'das'
        // },
    ]

  return (
    <aside className="flex absolute bg-base-100 drop-shadow-xl h-28 rounded-md z-30 w-fit max-w-[70%] bottom-16 items-center relative ">
        {categories.map((category, index) => <CategoryIcon categoryData={category} key={index} />)}
    </aside>
  )
}


const CategoryIcon = ({categoryData}) => {
  return (
    <div className='h-fit mx-4 flex flex-col items-center hover:bg-base-300 w-20 h-20 rounded cursor-pointer'>
        <img className='h-14 drop-shadow-md' src={categoryData.imageUrl} alt={`Categoria ${categoryData.name}`}/>
        <p className='text-sm'>{categoryData.name}</p>
    </div>
  )
}




export default CategoryList