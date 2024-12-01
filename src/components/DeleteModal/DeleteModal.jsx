import React from 'react';
import "./DeleteModal.scss";
import ReactModal from 'react-modal';

function DeleteModal() {

    ReactModal.setAppElement('#root');

  return (
    <ReactModal
    // isOpen={modalIsOpen}
    // onAfterOpen={afterOpenModal}
    // onRequestClose={closeModal}
    // style={customStyles}
    // contentLabel="Example Modal"
  >
    {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2> */}
    {/* <button onClick={closeModal}>close</button> */}
    <div className='modal'>I am a modal</div>
    <form>
      <input />
      <button>tab navigation</button>
      <button>stays</button>
      <button>inside</button>
      <button>the modal</button>
    </form>
  </ReactModal>
  )
}

export default DeleteModal