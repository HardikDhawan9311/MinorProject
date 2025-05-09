// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const ProfilePage = ({ username }) => {
//   const [profile, setProfile] = useState({
//     username: username || '',
//     email: '',
//     phone: '',
//     bio: '',
//     location: ''
//   });
//   const [isEditing, setIsEditing] = useState(false);

//   useEffect(() => {
//     const fetchProfile = async () => {
//         console.log("Fetching profile for username:", username);  // Check the username value
//       try {
//         const response = await axios.get(`http://localhost:5000/profile/${username}`);
//         setProfile((prev) => ({
//           ...prev,
//           email: response.data.email,
//           phone: response.data.phone
//         }));
//       } catch (error) {
//         console.error('Error fetching profile:', error);
//       }
//     };

//     if (username) {
//       fetchProfile();
//     }
//   }, [username]);

//   const handleEdit = () => {
//     setIsEditing(true);
//   };

//   const handleSave = () => {
//     setIsEditing(false);
//     // Optionally, send bio/location to the backend here
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setProfile((prev) => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6">
//       <div className="max-w-2xl w-full bg-white rounded-3xl shadow-lg overflow-hidden transform transition hover:scale-105">
//         <div className="flex flex-col items-center p-8">
//           {/* Avatar */}
//           <div className="relative w-32 h-32 mb-4">
//             <img
//               src={`https://api.dicebear.com/8.x/thumbs/svg?seed=${username}`}
//               alt="Avatar"
//               className="w-full h-full rounded-full border-4 border-indigo-500 shadow-lg object-cover"
//             />
//           </div>

//           {/* Username */}
//           <h2 className="text-3xl font-bold text-gray-800">{profile.username}</h2>
//           <p className="text-gray-500 mb-6">Member since 2024</p>

//           {/* Details */}
//           <div className="w-full space-y-4 text-left">
//             {/* Email */}
//             <div>
//               <label className="block text-sm text-gray-600">Email</label>
//               <div className="flex items-center mt-1 bg-gray-100 p-3 rounded-lg shadow-inner">
//                 <span className="material-icons text-indigo-500 mr-2">email</span>
//                 {profile.email || 'Loading...'}
//               </div>
//             </div>

//             {/* Phone */}
//             <div>
//               <label className="block text-sm text-gray-600">Phone Number</label>
//               <div className="flex items-center mt-1 bg-gray-100 p-3 rounded-lg shadow-inner">
//                 <span className="material-icons text-indigo-500 mr-2">phone</span>
//                 {profile.phone || 'Loading...'}
//               </div>
//             </div>

//             {/* Bio */}
//             <div>
//               <label className="block text-sm text-gray-600">Bio</label>
//               {isEditing ? (
//                 <textarea
//                   name="bio"
//                   value={profile.bio}
//                   onChange={handleChange}
//                   className="mt-1 w-full border p-3 rounded-lg shadow-inner focus:ring-2 focus:ring-indigo-400"
//                 />
//               ) : (
//                 <div className="flex items-center mt-1 bg-gray-100 p-3 rounded-lg shadow-inner relative">
//                   {profile.bio ? (
//                     profile.bio
//                   ) : (
//                     <div className="flex items-center text-red-500">
//                       <span className="material-icons mr-2">error_outline</span>
//                       Missing Bio
//                     </div>
//                   )}
//                 </div>
//               )}
//             </div>

//             {/* Location */}
//             <div>
//               <label className="block text-sm text-gray-600">Location</label>
//               {isEditing ? (
//                 <input
//                   type="text"
//                   name="location"
//                   value={profile.location}
//                   onChange={handleChange}
//                   className="mt-1 w-full border p-3 rounded-lg shadow-inner focus:ring-2 focus:ring-indigo-400"
//                 />
//               ) : (
//                 <div className="flex items-center mt-1 bg-gray-100 p-3 rounded-lg shadow-inner relative">
//                   {profile.location ? (
//                     profile.location
//                   ) : (
//                     <div className="flex items-center text-red-500">
//                       <span className="material-icons mr-2">error_outline</span>
//                       Missing Location
//                     </div>
//                   )}
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* Buttons */}
//           <div className="flex space-x-4 mt-6">
//             {isEditing ? (
//               <button
//                 onClick={handleSave}
//                 className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full shadow-lg transform transition hover:scale-105"
//               >
//                 Save
//               </button>
//             ) : (
//               <button
//                 onClick={handleEdit}
//                 className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full shadow-lg transform transition hover:scale-105"
//               >
//                 Edit Profile
//               </button>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfilePage;


import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProfilePage = () => {
  // Retrieve username from localStorage
  const username = localStorage.getItem('username'); // Assuming username is stored under 'username' key

  const [profile, setProfile] = useState({
    username: username || '', // Default to an empty string if not found
    email: '',
    phone: '',
    bio: '',
    location: ''
  });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (!username) {
      console.error("Username is not available in localStorage");
      return;
    }

    const fetchProfile = async () => {
      
      try {
        const response = await axios.get(`http://localhost:5000/profile/${username}`);
        setProfile((prev) => ({
          ...prev,
          email: response.data.email,
          phone: response.data.phone
        }));
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };

    fetchProfile();
  }, [username]);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    // Optionally, send bio/location to the backend here
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6">
      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-lg overflow-hidden transform transition hover:scale-105">
        <div className="flex flex-col items-center p-8">
          {/* Avatar */}
          <div className="relative w-32 h-32 mb-4">
            <img
              src={`https://api.dicebear.com/8.x/thumbs/svg?seed=${username}`}
              alt="Avatar"
              className="w-full h-full rounded-full border-4 border-indigo-500 shadow-lg object-cover"
            />
          </div>

          {/* Username */}
          <h2 className="text-3xl font-bold text-gray-800">{profile.username}</h2>
          <p className="text-gray-500 mb-6">Member since 2024</p>

          {/* Details */}
          <div className="w-full space-y-4 text-left">
            {/* Email */}
            <div>
              <label className="block text-sm text-gray-600">Email</label>
              <div className="flex items-center mt-1 bg-gray-100 p-3 rounded-lg shadow-inner">
                <span className="material-icons text-indigo-500 mr-2">email</span>
                {profile.email || 'Loading...'}
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm text-gray-600">Phone Number</label>
              <div className="flex items-center mt-1 bg-gray-100 p-3 rounded-lg shadow-inner">
                <span className="material-icons text-indigo-500 mr-2">phone</span>
                {profile.phone || 'Loading...'}
              </div>
            </div>

            {/* Bio */}
            <div>
              <label className="block text-sm text-gray-600">Bio</label>
              {isEditing ? (
                <textarea
                  name="bio"
                  value={profile.bio}
                  onChange={handleChange}
                  className="mt-1 w-full border p-3 rounded-lg shadow-inner focus:ring-2 focus:ring-indigo-400"
                />
              ) : (
                <div className="flex items-center mt-1 bg-gray-100 p-3 rounded-lg shadow-inner relative">
                  {profile.bio ? (
                    profile.bio
                  ) : (
                    <div className="flex items-center text-red-500">
                      <span className="material-icons mr-2">error_outline</span>
                      Missing Bio
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Location */}
            <div>
              <label className="block text-sm text-gray-600">Location</label>
              {isEditing ? (
                <input
                  type="text"
                  name="location"
                  value={profile.location}
                  onChange={handleChange}
                  className="mt-1 w-full border p-3 rounded-lg shadow-inner focus:ring-2 focus:ring-indigo-400"
                />
              ) : (
                <div className="flex items-center mt-1 bg-gray-100 p-3 rounded-lg shadow-inner relative">
                  {profile.location ? (
                    profile.location
                  ) : (
                    <div className="flex items-center text-red-500">
                      <span className="material-icons mr-2">error_outline</span>
                      Missing Location
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex space-x-4 mt-6">
            {isEditing ? (
              <button
                onClick={handleSave}
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full shadow-lg transform transition hover:scale-105"
              >
                Save
              </button>
            ) : (
              <button
                onClick={handleEdit}
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full shadow-lg transform transition hover:scale-105"
              >
                Edit Profile
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

