import React, { useState } from 'react'
import './Calculator.css'
import { MDBBtn } from 'mdb-react-ui-kit'
import { useNavigate } from 'react-router-dom'

function Calculator() {

  const [total, setTotal] = useState("0")
  const [sign, setSign] = useState(true)
  const nav = useNavigate();

  const handleClick =(e)=>{
    setSign((prev)=>!prev)
    setTotal(total.concat(e.target.name))
  }

  const handleClear=()=>{
    setTotal('')
  }

  const handleResult =()=>{
    try {
      setTotal(eval(total).toString())
    } catch (error) {
      setTotal('Error')
    }  
  }

  return (
    <>
      <div className="d-flex">
      <MDBBtn style={{width:"200px",margin:"5px"}} onClick={()=>nav('/yellow')} className="btn-pri">Yellow Store</MDBBtn><br/>
      <MDBBtn style={{width:"200px",margin:"5px"}} onClick={()=>nav('/')} className="btn-pri">ToDo</MDBBtn>
    </div>
    <div>
      <form action="">
        <input className='input-rlt' type="text" value={total} id="tl" />
      </form>
    </div>

    <div>
      <button onClick={handleClear} id='clear'>AC</button>
      {sign ? <button name="+" onClick={handleClick}>+/-</button> :
            <button name="-" onClick={handleClick}>+/-</button>
      }
      <button name='%' onClick={handleClick}>%</button>
      <button name='/' onClick={handleClick} className='btn-clr'>/</button><br/>
      <button name='7' onClick={handleClick}>7</button>
      <button name='8' onClick={handleClick}>8</button>
      <button name='9' onClick={handleClick}>9</button>
      <button name='*' onClick={handleClick} className='btn-clr'>x</button><br/>
      <button name='4' onClick={handleClick}>4</button>
      <button name='5' onClick={handleClick}>5</button>
      <button name='6' onClick={handleClick}>6</button>
      <button name='-' onClick={handleClick} className='btn-clr'>-</button><br/>
      <button name='1' onClick={handleClick}>1</button>
      <button name='2' onClick={handleClick}>2</button>
      <button name='3' onClick={handleClick}>3</button>
      <button name='+' onClick={handleClick} className='btn-clr'>+</button><br/>
      <button name='0' onClick={handleClick} className='btn-zero'>0</button>
      <button name='.' onClick={handleClick}>.</button>
      <button name='=' onClick={handleResult} className='btn-clr'>=</button>
    </div>
    </>
  )
}

export default Calculator