import React from 'react'

const ErrorMessage = ({message}) => {
  return (
    <div className="bg-red-800 text-white text-center w-auto p-3 uppercase font-bold mb-3 rounded-md">
    <p>{message}</p>
  </div>
  )
}

export default ErrorMessage