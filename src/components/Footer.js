import React from 'react'


const Footer = () => {
  return (
    <div className="bg-[#064e3b] flex justify-center pb-3">
      <ul className="flex flex-row">
        <li>
        <a href="https://www.linkedin.com/in/justin-signo/" className="text-[#fff] font-bold text-xl">Linkedin</a>
        </li>
        <li>
          <a href="https://github.com/jsigno" className="text-[#fff] font-bold text-xl">GitHub</a>
        </li>
        <li>
          <a href="https://drive.google.com/file/d/1LNg03o-1ivcsMfLnpqTWv1kI1dVOoMQg/view" className="text-[#fff] font-bold text-xl">Resume</a>
        </li>
      </ul>
    </div>
  )
}

export default Footer

