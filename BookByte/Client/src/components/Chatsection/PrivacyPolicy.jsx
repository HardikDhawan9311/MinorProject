import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';
const PrivacyPolicy = () => {
  const navigate = useNavigate();

  return (
    <>
    <div className="bg-gradient-to-r from-gray-100 to-gray-300 p-12 rounded-3xl shadow-lg max-w-full mx-auto text-gray-800">
          <div className="flex items-center justify-start mb-12">
            <ArrowLeftIcon 
              className="h-10 w-10 text-black cursor-pointer hover:text-indigo-300 transform transition-transform duration-300 ease-in-out"
              onClick={() => navigate('/chat')}  />
          </div>
      <h3 className="text-5xl font-bold text-center mb-24 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-500">
        Privacy Policy
      </h3>

      <section className="mb-10 p-6 bg-white rounded-xl shadow-md">
        <h4 className="text-3xl font-semibold mb-4 border-b-2 border-gray-200 pb-2">1. Introduction</h4>
        <p className="text-lg leading-relaxed text-gray-700">
          Welcome to <span className="font-semibold">BookByte</span>. We are committed to protecting your privacy and ensuring a safe online experience...
        </p>
      </section>

      <section className="mb-10 p-6 bg-white rounded-xl shadow-md">
        <h4 className="text-3xl font-semibold mb-4 border-b-2 border-gray-200 pb-2">2. Information We Collect</h4>

        <div className="mb-6">
          <h5 className="text-2xl font-semibold mb-3 text-indigo-600">2.1 Personal Information</h5>
          <p className="text-lg mb-3 text-gray-700">When you register or use our chatroom services, we may collect personal information such as:</p>
          <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 pl-6">
            <li><span className="font-semibold">Username</span>: The name you choose when signing up.</li>
            <li><span className="font-semibold">Password</span>: To secure your account.</li>
            <li><span className="font-semibold">Email Address</span>: To send you important notifications (if applicable).</li>
          </ul>
        </div>

        <div>
          <h5 className="text-2xl font-semibold mb-3 text-indigo-600">2.2 Usage Data</h5>
          <p className="text-lg mb-3 text-gray-700">We may collect information about your interactions with the App, including:</p>
          <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 pl-6">
            <li><span className="font-semibold">Message Content</span>: The text and media you send in chatrooms.</li>
            <li><span className="font-semibold">Log Data</span>: Your IP address, browser type, and access times.</li>
          </ul>
        </div>
      </section>

      
    </div>
    </>
  );
};

export default PrivacyPolicy;
