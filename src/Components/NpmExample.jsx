import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NpmExample = () => {
    const notify = (e) =>{
        e.preventDefault();
        toast("Button clicked.....!");
    } 
  return (
    <div>
        <form>
        username : <input type='text' name='username' />
        <button onClick={notify} type='submit' > Notify </button>
        <ToastContainer />
      </form>
    </div>
  )
}

export default NpmExample