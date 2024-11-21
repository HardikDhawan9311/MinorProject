import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';

const HelpCenter = () => {
  const navigate = useNavigate();
  return (
    <div className="max-w-full mx-auto p-8 bg-gradient-to-r from-indigo-500 to-blue-500 text-white rounded-xl shadow-lg">
      <div className="flex items-center justify-start mb-12">
            <ArrowLeftIcon 
              className="h-10 w-10 text-black cursor-pointer hover:text-indigo-300 transform transition-transform duration-300 ease-in-out"
              onClick={() => navigate('/chat')}  />
          </div>
      <h2 className="text-6xl font-extrabold mb-6 text-center bg-clip-text text-transparent bg-black">
        Help Center
      </h2>
      <h3 className="text-3xl font-semibold mb-8 text-center text-white">Frequently Asked Questions</h3>
      
      <div className="faq-item mb-8 p-6 bg-white rounded-xl shadow-md text-gray-800">
        <h4 className="text-2xl font-semibold mb-4 text-indigo-600">Why is the website not working?</h4>
        <p>If you're having trouble accessing the website, try the following steps:</p>
        <ul className="list-disc list-inside pl-6 space-y-2 text-lg">
          <li>Check your internet connection.</li>
          <li>Clear your browser cache and cookies.</li>
          <li>Try accessing the site using a different browser.</li>
          <li>Ensure that the website URL is correct.</li>
        </ul>
        <p>If the problem persists, please <a href="mailto:support@yourchatroomapp.com" className="text-blue-500 hover:underline">contact support</a>.</p>
      </div>

      <div className="faq-item mb-8 p-6 bg-white rounded-xl shadow-md text-gray-800">
        <h4 className="text-2xl font-semibold mb-4 text-indigo-600">How do I create a new chat room?</h4>
        <p>To create a new chat room, follow these steps:</p>
        <ul className="list-disc list-inside pl-6 space-y-2 text-lg">
          <li>Log in to your account.</li>
          <li>Navigate to the "Create Room" section.</li>
          <li>Enter a name for your new chat room.</li>
          <li>Click "Create Room" to finalize.</li>
        </ul>
        <p>Your new chat room will be available for you to start chatting immediately.</p>
      </div>

      <div className="faq-item mb-8 p-6 bg-white rounded-xl shadow-md text-gray-800">
        <h4 className="text-2xl font-semibold mb-4 text-indigo-600">How can I reset my password?</h4>
        <p>If you need to reset your password:</p>
        <ul className="list-disc list-inside pl-6 space-y-2 text-lg">
          <li>Click on the "Forgot Password" link on the login page.</li>
          <li>Enter your registered email address.</li>
          <li>Follow the instructions sent to your email to reset your password.</li>
        </ul>
        <p>If you do not receive the reset email, check your spam folder or <a href="mailto:support@yourchatroomapp.com" className="text-blue-500 hover:underline">contact support</a>.</p>
      </div>

      <div className="faq-item mb-8 p-6 bg-white rounded-xl shadow-md text-gray-800">
        <h4 className="text-2xl font-semibold mb-4 text-indigo-600">How do I report inappropriate behavior?</h4>
        <p>If you encounter any inappropriate behavior in the chat rooms:</p>
        <ul className="list-disc list-inside pl-6 space-y-2 text-lg">
          <li>Click on the "Report" button next to the message or user.</li>
          <li>Provide details about the issue in the report form.</li>
          <li>Submit the report for review.</li>
        </ul>
        <p>Our team will investigate the issue and take appropriate action.</p>
      </div>

      
    </div>
  );
}

export default HelpCenter;
