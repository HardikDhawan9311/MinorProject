import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

function CreateRoomForm({ onCreateRoom }) {
  const [roomName, setRoomName] = useState('');
  const [roomLink, setRoomLink] = useState('');
  const navigate = useNavigate();

  const generateRoomLink = (roomName) => {
    const uniqueId = uuidv4();
    const baseURL = 'http://localhost:5000';
    return `${baseURL}/ChatRoom/${encodeURIComponent(roomName)}-${uniqueId}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (roomName) {
      const link = generateRoomLink(roomName);
      setRoomLink(link);
      onCreateRoom(roomName, link);
      setTimeout(() => {
        navigate(`/ChatRoom/${roomName}-${link.split('-').pop()}`, { state: { roomLink: link } });
      }, 100);
    }
  };

  const handleRoomNameChange = (e) => {
    setRoomName(e.target.value);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-indigo-50 to-pink-50">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <input
            type="text"
            placeholder="Create a room"
            value={roomName}
            onChange={handleRoomNameChange}
            className="mb-4 p-3 w-full border text-black border-gray-300 rounded-lg text-center focus:outline-none focus:ring-2 focus:ring-indigo-300"
          />
          <button
            type="submit"
            className="w-full py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 transition-all shadow-md font-medium"
          >
            Create Room
          </button>
        </form>

        {roomLink && (
          <div className="mt-6 text-center bg-white p-4 rounded-md shadow-lg">
            <p className="font-semibold text-gray-800">Room Link:</p>
            <a href={roomLink} target="_blank" rel="noopener noreferrer" className="text-indigo-500 hover:underline">
              {roomLink}
            </a>
            <p className="text-xs text-gray-500 mt-2">Share this link with people you want to invite.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default CreateRoomForm;
