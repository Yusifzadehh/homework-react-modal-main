import React, { useContext, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import DataContext from '../DataContext';

function App() {
  const { change, setChange } = useContext(DataContext)
  const [count, setCount] = useState(change)
  const [modal, setModal] = useState(false);
  const toggleModal = () => setModal(!modal);

  const incrementChange = () => {
    setCount(count + 1);
  };

  const handleChange = () => {
    toggleModal();
    setChange(count)
  };
  const reduceChange=()=>{
    setCount(count-1)
  }

  function handleDefault() {
    toggleModal()
    setCount(change)
  }

  return (
    <div >
      <div className='py-10 flex justify-center items-center h-[90vh]'>
        <h1 className=' text-4xl px-12 py-3'>{change}</h1>
        <Button color="danger" onClick={ toggleModal} className='bg-rose-600'>
          Click Me
        </Button>
      </div>
      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalBody className='flex justify-center'>
          <button onClick={() => incrementChange()}
           className='bg-indigo-500 px-4 py-2 '
          >artir</button>
          <h1 className=' px-4 text-3xl'>{count}</h1>
          <button onClick={() => reduceChange()}
           className= 'bg-yellow-400 px-4 py-2 '
          >azalt</button>
        </ModalBody>
        <ModalFooter className='justify-center'>
          <Button color="primary" className='bg-indigo-500' onClick={() => handleChange()}>
            Redakte et
          </Button>
          <Button color="secondary"  className=' bg-yellow-400' onClick={() => handleDefault()} >
            Ləğv et
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default App
