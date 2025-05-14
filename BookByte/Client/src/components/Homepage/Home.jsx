import { useState,useEffect } from 'react'
import Background  from './Background'
import Navbar from './Navbar'
import Img from "../../assets/Homeimg.gif"


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    
    const checkAuthStatus = () => {
      const storedUser  = localStorage.getItem('user');
      if (storedUser ) {
          try {
              const user = JSON.parse(storedUser );
              setIsAuthenticated(true);
              setUserName(user.username); 
          } catch (error) {
              console.error("Failed to parse user data from localStorage:", error);
          }
      }
  };
  
    checkAuthStatus();
  }, []);
  
  const [activeIndex, setActiveIndex] = useState(null); 

  const faqData = [

    {
      question: "DO YOU GUARANTEE YOUR PRODUCTS?",
      answer: "Yes, for 60 days after the shipment is delivered. The delivery date is determined by tracking."
    },
    {
      question: "CAN I GET SUPPORT WHEN THE PRODUCT IS DEFECTIVE?",
      answer: "Please feel free to email us at bb4u@gmail.com and our team will resolve any issue."
    },
    {
      question: "HOW CAN I TRACK MY ORDER?",
      answer: "You will receive an email upon the creation of the shipping label, which means your order is getting ready to be shipped."
    },
    {
      question: "WHAT TYPE OF SHIPPING METHOD DO YOU USE?",
      answer: "UPS and before that you will receive an email with the parcel details. For return package, you need to generate the request at bb4u@gmail.com"
    },
    {
      question: "WHERE TO CONTACT CUSTOMER SERVICE?",
      answer: "Email Customer Service: bb4u@gmail.com"
    },
    {
      question: "DO YOU OFFER REFUNDS?",
      answer: "ABSOLUTELY! We will refund your money if you do not like your Proud Patriots item. Refunds will be given within 60 days of your purchase date."
    },
   
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index); 
  };

  

  return (
    <>
      <div>
        <Background />
        <Navbar
        isAuthenticated={isAuthenticated} 
        userName={userName} 
      /> 
        <div className='flex flex-row justify-between'>
          <div className='flex flex-col'>
          <h1 className='relative font-bold mt-24 text-white ml-24 text-center text-6xl'>
          Welcome to </h1>
          <h1 className='relative font-bold mt-12 text-white ml-28 text-center text-6xl'>ReadHive</h1>
          </div>
        <img src={Img} alt="img" className='relative mt-8 mr-11 w-3/6 h-96' />
        </div>

        <div className='relative'>
          <h1 className='ml-16 font-bold text-white text-3xl mt-28 z-100'>ABOUT OUR WEBSITE</h1>
          <div className="flex-grow h-1 mt-4 ml-14 mr-14 bg-gradient-to-r from-orange-400 via-pink-500 to-pink-700 ml-4"></div>
          <div className="flex items-center justify-center h-96">
      <div className="w-full max-w-4xl h-3/4 mx-4 text-center p-8 text-white text-xl md:text-xl border border-gray-600 shadow-lg rounded-lg">
        <p>Welcome to ReadHive, a free platform designed for book lovers to easily explore, buy, and enjoy books. Not only can you browse and purchase a wide variety of books, but you can also join communities dedicated to your favorite reads. Connect with fellow enthusiasts, share thoughts, and build meaningful connections with people who share your literary passions. Whether you're on the hunt for your next great read or looking to engage in thoughtful discussions, ReadHive has you covered. Experience a seamless blend of book shopping and social interaction. Happy BookByting!</p>
      </div>
    </div>
        </div>

        <div className='relative'>
          <h1 className='ml-16 font-bold text-white text-3xl mt-28'>How to use our website</h1>
          <div className="flex-grow h-1 mt-4 ml-14 mr-14 bg-gradient-to-r from-orange-400 via-pink-500 to-pink-700 ml-4"></div>
          <div className="flex items-center justify-center h-96">
      <div className="w-full max-w-4xl h-3/4 mx-4 text-center p-8 text-white text-xl md:text-xl border border-gray-600 shadow-lg rounded-lg">
        <p>Welcome to ReadHive. It's a free plattform where the bookbublies can easily buy any books. And cherry on top, they can also join communities of their favourite books and connect with people of their own kind. Happy BookByting !!</p>
      </div>
    </div>
        </div>

        <div className='relative'>

        <div className='relative'>
          <h1 className='ml-16 font-bold text-white text-3xl mt-28'>Frequently Asked Questions</h1>
          <div className="flex-grow h-1 mt-4 mb-8 ml-14 mr-14 bg-gradient-to-r from-orange-400 via-pink-500 to-pink-700 ml-4"></div>
      {faqData.map((item, index) => (
        <div key={index} className="faq-item ml-16 mr-16 border-b border-gray-200 pb-4 mb-4">
          <div
            className={`faq-question flex justify-between items-center cursor-pointer text-lg font-semibold text-white hover:text-[#81DAE3] ${
              activeIndex === index ? 'active' : ''
            }`}
            onClick={() => toggleFAQ(index)}
          >
            <span>{item.question}</span>
            <span className={`faq-icon text-xl transition-transform duration-300 ${activeIndex === index ? 'minus rotate-45' : ''}`}>
              +
            </span>
          </div>
          <div
            className={`faq-answer overflow-hidden transition-max-height duration-500 ease-in-out ${activeIndex === index ? 'max-h-screen p-2' : 'max-h-0'}`}
          >
            <p className="text-white">{item.answer}</p>
          </div>
        </div>
           ))}
    </div>
        </div>

      </div>
    </>
  )
}

export default App
