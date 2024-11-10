import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';

const ChatRoom = () => {
  const { id } = useParams();
  const location = useLocation();
  const { roomLink } = location.state || {};
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [file, setFile] = useState(null);
  const [fileType, setFileType] = useState(null);

  useEffect(() => {
    const storageKey = `chatMessages_${id}`;
    const storedMessages = JSON.parse(localStorage.getItem(storageKey)) || [];
    setMessages(storedMessages);
  }, [id]);

  useEffect(() => {
    const storageKey = `chatMessages_${id}`;
    localStorage.setItem(storageKey, JSON.stringify(messages));
  }, [messages, id]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim() || file) {
      const newMessage = {
        user: 'You',
        text: message,
        image: fileType === 'image' ? file : null, 
        document: fileType === 'document' ? file : null, 
      };
      setMessages([...messages, newMessage]);
      setMessage('');
      setFile(null);
      setFileType(null);
    }
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      if (selectedFile.type.startsWith('image/')) {
        setFileType('image');
      } else {
        setFileType('document');
      }
    }
  };

  const getFileUrl = (file) => {
    return URL.createObjectURL(file);
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-blue-50 to-pink-50 p-6">
      {roomLink && (
        <div className="mb-5">
          <div className="p-4 bg-white border border-gray-200 rounded-md shadow-md text-center">
            <p className="font-medium text-gray-700">Room Link:</p>
            <a href={roomLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 font-semibold hover:underline">
              {roomLink}
            </a>
          </div>
        </div>
      )}
      <h2 className="text-center text-3xl font-extrabold text-gray-800 mb-6">Chat Room: {id}</h2>
      <div className="flex-grow w-full p-4 bg-white border border-gray-200 rounded-lg shadow-lg overflow-y-auto">
        {messages.map((msg, index) => (
          <div key={index} className="mb-4 p-3 bg-gray-50 rounded-md shadow-sm">
            <strong className="text-gray-600">{msg.user}:</strong> <span className="text-gray-800">{msg.text}</span>
            {msg.image && <img src={getFileUrl(msg.image)} alt="shared content" className="my-3 w-1/2 rounded-md shadow-md" />}
            {msg.document && (
              <a href={getFileUrl(msg.document)} target="_blank" rel="noopener noreferrer" className="text-blue-500 font-semibold hover:underline">
                Open Document
              </a>
            )}
          </div>
        ))}
      </div>
      <form className="flex items-center mt-5" onSubmit={handleSendMessage}>
        <input
          type="text"
          placeholder="Type a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="flex-grow p-3 rounded-l-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300 bg-white text-gray-700"
        />
        <input
          type="file"
          accept="image/*,.pdf,.doc,.docx,.txt"
          onChange={handleFileChange}
          className="ml-3 p-1 border border-gray-200 rounded-md text-gray-700"
        />
        <button type="submit" className="ml-3 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition duration-200 font-semibold shadow-md">
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatRoom;
