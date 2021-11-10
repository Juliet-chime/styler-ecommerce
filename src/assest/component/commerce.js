import React,{useState} from 'react'
import Navbar from './navbar'
import Content from './content'
import Modal from './modal/modal'

const Commerce = () => {
    const [showModal, setShowModal] = useState(false)
    const [showModalDetails, setShowModalDetails] = useState(false)

    const toggleModalOpen = (item) => {
        console.log(item)
        setShowModalDetails(true)
        setShowModal(true);
      };
    
      const toggleModalClose = () => {
        setShowModal(false);
      };

      const width = 500;
  const height = 500;
  const modalTitle ="Cart"
  const modalBody = (<div>helloo</div>)
    return (
        <div>
            <Modal
        width={width}
        height={height}
        visible={showModal}
        title={modalTitle}
        body={modalBody}
        handleClose={toggleModalClose}
      />
            <div className="add-to-cart-holder">
            <div className="add-to-cart">
                <div onClick={toggleModalOpen}><i class="fa fa-bell fa-2x notification"></i></div>
                <div className="number">0</div>
                </div>
            </div>
        <div className="container">
            <Navbar/>
            <Content/>
        </div>
        </div>
    )
}

export default Commerce
