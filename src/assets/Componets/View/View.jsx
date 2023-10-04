import React, { useEffect } from 'react'
import { Container, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { Editproductasync, getAllAsyncData,  removeProductasync } from '../../Action/Action';
import { useNavigate } from 'react-router';

function View() {
    const ProductData = useSelector(state => state.productreducer.products)
        // console.log("ProductData",ProductData[0].price);

        const dispatch = useDispatch();
        const navigate = useNavigate();
    //     let totalprice = 0;

    
    const getdata = () => {
        dispatch(getAllAsyncData());
      }
     
      const handleEdit = async (id)=>{
        await dispatch(Editproductasync(id))
       navigate(`/editproduct/:${id}`);
        
      }

      const handleRemove = (id) =>{
        dispatch(removeProductasync(id))
      }
      useEffect(() => {
        getdata();
      })

  return (
    <>
    <Container>
        <h1 className='text-center my-3'>ALL PRODUCT</h1>

        <Table striped bordered hover>
        <thead >
            <tr className='me-4'>
              <th>Image</th>
              <th>Title</th>
              <th>Category</th>
              <th>Rating</th>
              <th>Qty</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody >
            {
              ProductData.map((data) => {
                // totalprice += data.price * data.qty
                return (
                  <tr>
                    <td>
                      <div style={{width:"100px", height:"100px"}}>
                        <img src={data.image} alt="" style={{width:"100%", height:"100%",objectFit:"cover"}} />
                      </div>
                    </td>
                    <td>{data.title}</td>
                    <td>{data.category}</td>
                    <td>{data.rating}</td>
                    <td>
          
                      {data.qty} 
            
                    </td>
                    <td>{data.price}</td>
                    <td>
                    <button className='btn btn-primary me-2' onClick={() => handleEdit(data.id)}>Edit</button>
                      <button className='btn btn-danger' onClick={() => handleRemove(data.id)}>Remove</button></td>
                  </tr>
                )
              })
            }
          </tbody>
        </Table>
    </Container>
    </>
  )
}

export default View