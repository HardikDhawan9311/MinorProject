import React, { useState, useEffect, useRef } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { io } from 'socket.io-client';

const socket = io('http://localhost:5000');

const ChatRoom = () => {
  const { id } = useParams();
  const location = useLocation();
  const { roomLink } = location.state || {};
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [file, setFile] = useState(null);
  const [fileType, setFileType] = useState(null);
  const [fileBase64, setFileBase64] = useState(null);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    socket.emit('join_room', id);

    socket.on('receive_message', (data) => {
      console.log('Received message:', data);
      setMessages((prevMessages) => [...prevMessages, data]);
    });

    return () => {
      socket.off('receive_message');
    };
  }, [id]);

  useEffect(() => {
    // Scroll to bottom when new message arrives
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const convertFileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();

    if (!message.trim() && !fileBase64) {
      alert('Please type a message or select a file.');
      return;
    }

    const messageData = {
      roomId: id,
      user: socket.id,
      text: message.trim(),
      file: fileBase64,
      fileType: fileType,
    };

    console.log('Sending message:', messageData);

    socket.emit('send_message', messageData);

    // Clear input fields
    setMessage('');
    setFile(null);
    setFileType(null);
    setFileBase64(null);
  };

  const handleFileChange = async (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile.size > 5 * 1024 * 1024) { // 5MB limit
        alert('File size should be less than 5MB.');
        return;
      }

      setFile(selectedFile);

      if (selectedFile.type.startsWith('image/')) {
        setFileType('image');
      } else {
        setFileType('document');
      }

      const base64 = await convertFileToBase64(selectedFile);
      setFileBase64(base64);
    }
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

      <h2 className="text-center text-3xl font-extrabold text-gray-800 mb-6">
        Chat Room: {id}
      </h2>

      <div className="flex-grow w-full p-4 bg-white border border-gray-200 rounded-lg shadow-lg overflow-y-auto">
        {messages.map((msg, index) => (
          <div key={index} className="mb-4 p-3 bg-gray-50 rounded-md shadow-sm">
            <strong className="text-gray-600">{msg.user}:</strong>{' '}
            {msg.text && <span className="text-gray-800">{msg.text}</span>}

            {msg.fileType === 'image' && msg.file && (
              <img
                src={msg.file}
                alt="shared"
                className="my-3 w-1/2 rounded-md shadow-md"
              />
            )}

            {msg.fileType === 'document' && msg.file && (
              <div className="my-3">
                <a
                  href={msg.file}
                  download
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded shadow text-sm"
                >
                  Download File
                </a>
              </div>
            )}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <form className="flex flex-col items-center mt-5" onSubmit={handleSendMessage}>
        <div className="flex w-full">
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
        </div>

        {/* Preview Selected File */}
        {file && (
          <div className="mt-4">
            {fileType === 'image' ? (
              <img
                src={URL.createObjectURL(file)}
                alt="Selected File"
                className="w-32 h-32 object-cover rounded-lg shadow-md mx-auto"
              />
            ) : (
              <p className="text-gray-700 mt-2">{file.name}</p>
            )}
          </div>
        )}
      </form>
    </div>
  );
};

export default ChatRoom;
