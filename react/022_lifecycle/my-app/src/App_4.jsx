import { useEffect, useRef, useState } from 'react'

function App() {
  const [modalShow, setModalShow] = useState(false)
  const popup = useRef()
  const button = useRef()
  useEffect(() => {

  }, [modalShow])
  return (
    <div className='App'>
      <button 
      ref={button} 
      onClick = {()=>setModalShow(!modalShow)}>
        show me the 모달!
      </button>
      {modalShow ? (<div>modal</div>) : null}
    </div>
  );
}

export default App