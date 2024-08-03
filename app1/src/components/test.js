import React,{useRef,useEffect} from 'react'
import ExposedWrapper from 'solid_App/exposedWrapper'
function Test() {
  const solidRef = useRef(null)
  useEffect(()=> {
    
  ExposedWrapper(solidRef.current)
  },[])
  return (
    <>
    <div>component rendered in Chart</div>
    <div ref={solidRef}>

    </div>
    </>
  )
}

export default Test
