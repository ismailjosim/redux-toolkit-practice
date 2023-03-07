import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from "../../components/ProductCard";
import { fetchProducts } from '../../redux/actions/productAction';

const Home = () => {
  const dispatch = useDispatch();



  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch]);

  const { products } = useSelector(state => state.products)




  const activeClass = "text-white  bg-indigo-500 border-white";

  return (
    <div className='max-w-7xl gap-14 mx-auto my-10'>
      <div className='mb-10 flex justify-end gap-5'>
        <button
          className={ `border px-3 py-2 rounded-full font-semibold ${ activeClass } ` }
        >
          In Stock
        </button>
        <button className={ `border px-3 py-2 rounded-full font-semibold` }>
          AMD
        </button>
        <button className={ `border px-3 py-2 rounded-full font-semibold` }>
          Intel
        </button>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14'>
        { products.map((product) => (
          <ProductCard key={ product._id } product={ product } />
        )) }
      </div>
    </div>
  );
};

export default Home;
