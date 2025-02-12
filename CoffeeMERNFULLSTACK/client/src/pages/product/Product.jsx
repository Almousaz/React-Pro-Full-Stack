import { useEffect, useState } from 'react';
import './product.css';
import axios from 'axios';

import { Navbar } from '../../components/navbar/Navbar';
import { ProductCard } from '../../components/productCard/ProductCard';
import { Loading } from '../../components/loading/Loading';

const Product = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    axios.get('http://localhost:6861/api/product')
      .then((res) => {
        if (res.data && res.data.data) {
          setData(res.data.data);
        } else {
          setData([]);
        }
      })
      .catch((err) => {
        console.error('Error fetching products:', err);
        setError('Failed to fetch products. Please try again later.');
      })
      .finally(() => setLoading(false));
  }, []); // Runs once on mount

  if (loading) return <Loading />;
  if (error) return <p className="error-message">{error}</p>;

  return (
    <div>
      <Navbar />
      <div className='Product-div'>
        {data.length > 0 ? (
          data.map((el) => <ProductCard key={el.id} data={el} />)
        ) : (
          <p className="no-products">No products available.</p>
        )}
      </div>
    </div>
  );
};

export default Product;
