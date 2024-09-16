import { useState } from 'react'
import Background  from './Background'
import Navbar from './Navbar'
import Img from "../../assets/Homeimg.gif"


function App() {
  

  return (
    <>
      <div>
        <Background />
        <Navbar/>
        <div className='flex flex-row justify-between'>
          <div className='flex flex-col'>
          <h1 className='relative font-bold mt-24 text-white ml-24 text-center text-6xl'>
          Welcome to </h1>
          <h1 className='relative font-bold mt-12 text-white ml-28 text-center text-6xl'>BookByte</h1>
          </div>
        <img src={Img} alt="img" className='relative mt-8 mr-11 w-3/6 h-96' />
        </div>

        <div>
          <h1 className='relative ml-12 font-bold text-white text-3xl mt-28'>ABOUT OUR WEBSITE</h1>
          <div className="flex items-center justify-center h-96">
      <div className="w-full max-w-4xl h-3/4 mx-4 text-center p-8 text-white text-3xl md:text-3xl bg-black border border-gray-600 shadow-lg rounded-lg">
        <p>Welcome to BookByte. It's a free plattform where the bookbublies can easily buy any books. And cherry on top, they can also join communities of their favourite books and connect with people of their own kind. Happy BookByting !!</p>
      </div>
    </div>
        </div>

        <div className='bg-black'>
          <h1 className='relative ml-12 font-bold text-white text-3xl mt-28'>How to use our website</h1>
          <div className="flex items-center justify-center h-96">
      <div className="w-full max-w-4xl h-3/4 mx-4 text-center p-8 text-white text-3xl md:text-3xl bg-black border border-gray-600 shadow-lg rounded-lg">
        <p>Welcome to BookByte. It's a free plattform where the bookbublies can easily buy any books. And cherry on top, they can also join communities of their favourite books and connect with people of their own kind. Happy BookByting !!</p>
      </div>
    </div>
        </div>
      </div>
    </>
  )
}

export default App
