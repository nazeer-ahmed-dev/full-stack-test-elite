import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Divider, Rate } from 'antd';
import "./productList.css"
import {
    WalletOutlined
  } from '@ant-design/icons';
const ProductList = () => {
  const [products, setProducts] = useState([]);

  const dummyProductData  = [
    {
        id:1,
        name : "Product Managment Tool",
        price : "200$",
    },
    {
        id:2,
        name : "Inventory Managment Tool",
        price : "200$",
    },
    {
        id:3,
        name : "Hospital Managment System",
        price : "200$",
    },
  ]

//   useEffect(() => {
//     axios.get('http://localhost:3001/api/products')
//       .then(response => setProducts(response.data))
//       .catch(error => console.error(error));
//   }, []);

  const handleRateChange = (value, productId) => {
    const apiUrl = `http://localhost:3001/api/starred/${productId}`;

    const requestData = { rating: value };

    axios.post(apiUrl, requestData)
      .then(response => {
        // Handle success if needed
        console.log(response.data);
      })
      .catch(error => {
        // Handle error if needed
        console.error(error);
      });
  };

  return (
    <div className='main_container'>
        <div>
          <h2>View our Product</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
          <div className='product-list'>
            {
                dummyProductData?.map(item =>(
                    <Card title={item.name} bordered={true} className='card'>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                        <Divider/>
                        <div className='price-rate'>
                                <b className='price'>
                                    <WalletOutlined className='wallet-icon'/>
                                    {`${item.price}`}
                                </b>
                                <Rate onChange={(value) => handleRateChange(value, item.id)} />
                        </div>

                    </Card>
                ))
            }
            
          </div>
    
        </div>
    </div>
  
  );
};

export default ProductList;
