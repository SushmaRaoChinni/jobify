import React from 'react'
import { useAppContext } from '../context/appContext'


const Alert = () =>{
const {alterType,alterText}=useAppContext()
  return <div className={`alert alert-${alterType}`}>{alterText}</div>
  
}

export default Alert