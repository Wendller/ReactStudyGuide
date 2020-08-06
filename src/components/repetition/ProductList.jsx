import React from 'react';
import products from '../../data/products';
import './product.css';

export default props => {

  const productList = products.map((product, index) => {
    return (
      <tr key={product.id} className={index % 2 == 0 ? 'even' : ''}>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>{product.price}</td>
      </tr>
    );
  });

  return (
    <div className="tableProducts">
      Products Table
      <table>
        <thead>
          <tr>
            <th>Product Id</th>
            <th>Product Name</th>
            <th>Product Price</th>
          </tr>
        </thead>
        <tbody>
          {productList}
        </tbody>
      </table>
    </div>
  );

}