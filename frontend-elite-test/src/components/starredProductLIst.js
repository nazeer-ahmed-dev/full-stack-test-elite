import React, { useEffect, useState } from 'react';
import { Rate, Space, Table, Tag } from 'antd';
import axios from 'axios';
import "./starredProductList.css"

const StarredProductList = () => {
  const [starredProducts, setStarredProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/starred-products')
      .then(response => setStarredProducts(response.data))
      .catch(error => console.error(error));
  }, []);

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
 
    },
    {
      title: 'Email',
      dataIndex: 'email',
  
    },
    {
      title: 'Product Name',
      dataIndex: 'email',
  
    },
    {
      title: 'Rating',
      dataIndex: 'rating',
      render: rating => (
        <>
          <Rate  value={rating}/>
        </>
      ),
    },
    // Add more columns as needed
  ];

  return (
    <div className='Product-list'>
      <h2>LIST OF PRODUCT</h2>
        <Table columns={columns} dataSource={starredProducts} />;
    </div>
  );
};

export default StarredProductList;
