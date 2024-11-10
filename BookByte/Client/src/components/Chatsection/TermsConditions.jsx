import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';

const TermsConditions = () => {
  const navigate = useNavigate();
  return (
    <div className="max-w-full max-h-full mx-auto p-8 bg-gradient-to-r from-indigo-500 to-blue-500 text-white rounded-xl shadow-lg">
      <div className="flex items-center justify-start mb-12">
            <ArrowLeftIcon 
              className="h-10 w-10 text-black cursor-pointer hover:text-indigo-300 transform transition-transform duration-300 ease-in-out"
              onClick={() => navigate('/chat')}  />
          </div>
      <h2 className="text-6xl font-extrabold mb-14 text-center text-transparent bg-clip-text bg-black">
        Terms and Conditions
      </h2>

      <section className="mb-14 p-6 bg-white rounded-xl shadow-md text-gray-800">
        <h3 className="text-2xl font-semibold mb-4 text-indigo-600">1. Acceptance of Terms</h3>
        <p className="text-lg leading-relaxed">
          By using our chatroom services, you agree to comply with and be bound by these Terms and Conditions...
        </p>
      </section>

      <section className="mb-10 p-6 bg-white rounded-xl shadow-md text-gray-800">
        <h3 className="text-2xl font-semibold mb-4 text-indigo-600">2. User Responsibilities</h3>
        <p className="text-lg leading-relaxed mb-4">You are responsible for all activities that occur under your account. You agree to use the Service only for lawful purposes and in accordance with the terms outlined here.</p>
        <ul className="list-disc list-inside pl-6 space-y-3 text-lg">
          <li>Post or transmit any content that is unlawful, defamatory, obscene, or otherwise objectionable.</li>
          <li>Engage in any activity that disrupts or interferes with the Service.</li>
          <li>Use the Service to impersonate any person or entity, or falsely state or misrepresent your affiliation with any person or entity.</li>
          <li>Attempt to gain unauthorized access to the Service or its related systems or networks.</li>
        </ul>
      </section>

      {/* Continue similarly for other sections */}
    </div>
  );
};

export default TermsConditions;
