import "../../styles/Products.css"
import {TbEdit} from "react-icons/tb"
import {RiDeleteBin5Line} from "react-icons/ri"
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, 
  Form, Input, Label, FormGroup} from 'reactstrap';  
import image from "../../assets/images/5ceef7edbe1b196a030952b773b9636e.jpeg"

function Product(args) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const products = [
    { id: 1,
      image01: image,
      title: "Burger",
      price: 100,
      category: "Burger", 
      description: "hadsg",
      ratings: 5
    },
    { id: 2,
      image01: image,
      title: "Burger",
      price: 100,
      category: "Burger", 
      description: "hhhal;sdhg;hadsg",
      ratings: 5
    },
    { id: 3,
      image01: image,
      title: "Burger",
      price: 100,
      category: "Burger", 
      description: "hhal;sdhg;hadsg",
      ratings: 5
    },
    { id: 4,
      image01: image,
      title: "Burger",
      price: 100,
      category: "Burger", 
      description: "sdhg;hadsg",
      ratings: 5
    },
    { id: 5,
      image01: image,
      title: "Burger",
      price: 100,
      category: "Burger", 
      description: "gkjhhhal;sdhg;hadsg",
      ratings: 5
    }

  ]

  return (
    <div className='products'>
      <div className="product__btn product__options">
      <Button color="primary" className="add__product--btn" onClick={toggle}>
        Add product
      </Button>
      <div className="dropdown">
        <select name="" id="">
          <option value="default">Default</option>
          <option value="ascending">Low to high</option>
          <option value="descending">High to low</option>
          <option value="ratings">Ratings</option>
        </select>
      </div>
      <Modal isOpen={modal} toggle={toggle} {...args} className="modal__body">
        <ModalHeader toggle={toggle}>Add Products</ModalHeader>
        <ModalBody>
        <Form>
        <FormGroup>
          <Label for="productName">
            Product name
          </Label>
          <Input
            id="productName"
            name="name"
            placeholder="Product name"
            type="text"
          />
        </FormGroup>
        <FormGroup>
          <Label for="productPrice">
            Price
          </Label>
          <Input
            id="productName"
            name="name"
            placeholder="Product price"
            type="number"
          />
        </FormGroup>
        <FormGroup>
    <Label for="category">
      Category
    </Label>
    <Input
      id="category"
      name="select"
      type="select"
    >
      <option>
        Burger
      </option>
      <option>
        Pizza
      </option>
      <option>
        Drinks
      </option>
    
    </Input>
  </FormGroup>
  <FormGroup>
  </FormGroup>
  <FormGroup>
    <Label for="image">
      Image
    </Label>
    <Input
      id="image"
      name="file"
      type="file"
    />
  </FormGroup>
  <FormGroup>
    <Label for="description">
      Description
    </Label>
    <Input
      id="description"
      name="text"
      type="textarea"
      placeholder="type here..."
    />
  </FormGroup>
  <Button className="save__btn" color="primary" onClick={toggle}>
            Save
  </Button>{' '}
</Form>
        </ModalBody>
      </Modal>
      </div>
      <div className="dashboard-table">
        <table style={{ borderCollapse: 'collapse', width: '100%' }}>
      <thead>
        <tr>
        <th>Id</th>
        <th>Image</th>
        <th>Title</th>
        <th>Price</th>
        <th>Category</th>
        <th>Description</th>
        <th>Ratings</th>
        <th colSpan={2}>Action</th> 
        </tr>
      </thead>
      <tbody>
        {products.map(product => (
          <tr key={product.id}>
          <td>{product.id}</td>
          <td><img className="product_img" src={product.image01} alt="" /></td>
          <td>{product.title}</td>
          <td>{product.price}</td>
          <td>{product.category}</td>
          <td>{product.description}</td>
          <td>{product.ratings}</td>
          <td className="table__icon">
            <button className="edit-btn">
              <TbEdit className="tbl__icon--edit"/>
                Edit
            </button>
          </td>
          <td className="table__icon">
            <button className="delete-btn">
                <RiDeleteBin5Line className="tbl__icon--delete"/>
                Delete
            </button>
            </td>
        </tr>
        ))}
        
      </tbody>
    </table>
    </div>
    </div>
  )
}

export default Product