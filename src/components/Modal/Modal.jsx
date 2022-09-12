import React , {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import SignUp from '../SignUp/SignUp';
import LogIn from '../LogIn/LogIn';
import {RegisterContext} from "../Context/RegisterContext"

export default function ModalRecipe(props) {
    const [formInModal, setFormInModal] = useState("signUp");
    const switchToSignUp = ()=>{
        setFormInModal("signUp");
    }
    const switchToLogIn = ()=>{
        setFormInModal("LogIn");
    }

    const contextValue = {switchToLogIn, switchToSignUp};
  return (
    <RegisterContext.Provider value={contextValue}>
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Welcome, sign in to cook with us!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      {formInModal === "signUp" && <SignUp />}
      {formInModal === "LogIn" && <LogIn />}
      </Modal.Body>
      
    </Modal>
    </RegisterContext.Provider>
  );
}

// function App() {
//   const [modalShow, setModalShow] = React.useState(false);

//   return (
//     <>
//       <Button variant="primary" onClick={() => setModalShow(true)}>
//         Launch vertically centered modal
//       </Button>

//       <MyVerticallyCenteredModal
//         show={modalShow}
//         onHide={() => setModalShow(false)}
//       />
//     </>
//   );
// }

// render(<App />);