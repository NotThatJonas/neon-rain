import React, { useState, Component } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';





function EnemyModal(props) {
    

   
  
    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  

  

    return (
      <>
       <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Enemy Action</Modal.Title>
        </Modal.Header>
        <Modal.Body>What the enemy choose to do
        <h5 className="modal-title">Enemies Action</h5>
        </Modal.Body>
        <Modal.Footer>

          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      </>
    
    );
  }



  export default EnemyModal;
























// function EnemyAction(props) {
//   console.log("action");
//   return (

//     <div>
// <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Enemy Action</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>What the enemy choose to do
//         <h5 className="modal-title">Enemies Action</h5>
//         </Modal.Body>
//         <Modal.Footer>

//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleClose}>
//             Save Changes
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// }

// export default EnemyAction;


// {/* <div className="modal" tabindex="-1" role="dialog">
// <div className="modal-dialog" role="document">
//   <div className="modal-content">
//     <div className="modal-header">
//       <h5 className="modal-title">Enemies Action</h5>
//       {/* <button
//         type="button"
//         className="close"
//         data-dismiss="modal"
//         aria-label="Close"
//       >
//         <span aria-hidden="true">&times;</span>
//       </button> */}
//     </div>
//     <div className="modal-body">
//       <h5 className="enemy-action">{props.action}</h5>
//     </div>
//     <div className="modal-footer"></div>
//   </div>
// </div>
// </div> */}
