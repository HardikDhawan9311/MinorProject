// import React, { useState, useRef, useEffect } from 'react';
// import Logo from '../../assets/logo.png';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const Navbar = ({ isAuthenticated, userName }) => {
//   const [showLoginForm, setShowLoginForm] = useState(false);
//   const [loginData, setLoginData] = useState({ username: '', password: '' });
//   const [loginError, setLoginError] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [showDropdown, setShowDropdown] = useState(false);
//   const dropdownRef = useRef(null);
//   const navigate = useNavigate();

//   const handleLoginChange = (e) => {
//     const { name, value } = e.target;
//     setLoginData({ ...loginData, [name]: value });
//   };

//   const handleLoginClick = () => {
//     setShowLoginForm(true);
//   };

//   const handleLoginSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:5000/login', loginData);
//       if (response.data.success) {
//         localStorage.setItem('user', JSON.stringify(response.data.user));
//         window.location.reload();
//       }
//     } catch (error) {
//       setLoginError(error.response?.data?.message || 'An unexpected error occurred');
//     }
//   };

//   const handleLogout = () => {
//     setLoading(true);
//     setTimeout(() => {
//       localStorage.removeItem('user');
//       setLoading(false);
//       window.location.reload();
//     }, 1000);
//   };

  
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setShowDropdown(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   const handleProfileClick = () => {
//     navigate('/profile');
//   };

//   const handleAccountClick = () => {
//     navigate('/account');
//   };

//   const handleCloseForm = () => {
//     setShowLoginForm(false);
//   };

//   return (
//     <>
//       <nav className="relative p-4">
//         <div className="container mx-auto flex justify-between items-center">
//           <div className="h-30 w-40">
//             <img src={Logo} alt="logo" />
//           </div>
//           <ul className="flex space-x-20 items-center text-l">
//             <li className="text-white hover:text-gray-300">
//               <a href="/">Home</a>
//             </li>
//             <li className="text-white hover:text-gray-300">
//               <a href={isAuthenticated ? "/buypage" : "/signup"}>Buy</a>
//             </li>
//             <li className="text-white hover:text-gray-300">
//               <a href={isAuthenticated ? "/chat" : "/signup"}>Chat</a>
//             </li>
//           </ul>
//           <div className="flex space-x-4">

//           {isAuthenticated ? (
//         <div className="flex items-center space-x-2 relative" ref={dropdownRef}>
//           <span className="text-white">{userName}</span>
//           <div 
//             className="h-8 w-8 rounded-full bg-gray-400 flex items-center justify-center text-white cursor-pointer"
//             onClick={() => setShowDropdown(!showDropdown)}
//           >
//             {userName.charAt(0).toUpperCase()}
//           </div>
          
//           {showDropdown && (
//             <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-50">
//               <ul className="py-1">
//                 <li 
//                   className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
//                   onClick={handleProfileClick}
//                 >
//                   Profile
//                 </li>
//                 <li 
//                   className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
//                   onClick={handleAccountClick}
//                 >
//                   Account
//                 </li>
//                 <li 
//                   className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-500"
//                   onClick={handleLogout}
//                 >
//                   {loading ? 'Logging out...' : 'Logout'}
//                 </li>
//               </ul>
//             </div>
//           )}
//         </div>
//         ) : (
//           <>
//             <button
//               className="bg-transparent text-white border border-white px-4 py-2 rounded hover:bg-yellow-300 hover:text-gray-800"
//             >
//               <a href="/Signup">Sign up</a>
//             </button>
//             <button
//               className="bg-white text-gray-800 px-4 py-2 rounded hover:bg-yellow-300"
//               onClick={handleLoginClick}
//             >
//               Login
//             </button>
//           </>
//         )}
//       </div>
//     </div>
//   </nav>

//   {showLoginForm && (
//     <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 z-20">
//       <div className="relative bg-white p-12 rounded-lg shadow-2xl max-w-md w-full transition-transform transform hover:scale-105 duration-300">
//         <button
//           onClick={handleCloseForm}
//           className="absolute top-2 right-2 text-gray-700 hover:text-gray-900 text-2xl focus:outline-none"
//         >
//           &times;
//         </button>
//         <h2 className="text-3xl mb-6 font-semibold text-center text-gray-800">Login</h2>
//         <form onSubmit={handleLoginSubmit}>
//           <div className="mb-6">
//             <label className="block text-gray-700 text-sm font-medium">Username:</label>
//             <input
//               type="text"
//               name="username"
//               value={loginData.username}
//               onChange={handleLoginChange}
//               className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-medium">Password:</label>
//             <input
//               type="password"
//               name="password"
//               value={loginData.password}
//               onChange={handleLoginChange}
//               className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300"
//             />
//           </div>
//           <div className="text-right mb-6">
//             <a href="/forgot-password" className="text-blue-500 underline text-sm hover:text-blue-700">
//               Forgot Password?
//             </a>
//           </div>
//           <button
//             type="submit"
//             className="bg-yellow-300 text-gray-800 w-full py-3 rounded-lg font-semibold hover:bg-yellow-400 transition duration-300"
//           >
//             Submit
//           </button>
//           {loginError && <p className="text-red-500 mt-4 text-center">{loginError}</p>}
//         </form>
//         <p className="mt-6 text-center text-sm text-gray-600">
//           Don't have an account?{' '}
//           <a href="/signup" className="text-blue-500 underline">
//             Sign up here!
//           </a>
//         </p>
//       </div>
//     </div>
//   )}
// </>
//   );
// };

// export default Navbar;


import React, { useState, useRef, useEffect } from 'react';
import Logo from '../../assets/logo.png';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const Navbar = ({ isAuthenticated, userName }) => {
  const [loading, setLoading] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const handleLogout = () => {
    setLoading(true);
    setTimeout(() => {
      localStorage.removeItem('user');
      setLoading(false);
      window.location.reload();
    }, 1000);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleProfileClick = () => {
    navigate('/profile');
  };

  const handleAccountClick = () => {
    navigate('/addtocart');
  };

  return (
    <nav className="relative p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="h-30 w-40">
          <img src={Logo} alt="logo" />
        </div>
        <ul className="flex space-x-20 items-center text-l">
          <li className="text-white hover:text-gray-300">
            <Link to="/">Home</Link>
          </li>
          <li className="text-white hover:text-gray-300">
            <Link to={isAuthenticated ? "/buypage" : "/signup"}>Buy</Link>
          </li>
          <li className="text-white hover:text-gray-300">
            <Link to={isAuthenticated ? "/chat" : "/signup"}>Chat</Link>
          </li>
        </ul>
        <div className="flex space-x-4">
          {isAuthenticated ? (
            <div className="flex items-center space-x-2 relative" ref={dropdownRef}>
              <span className="text-white">{userName}</span>
              <div
                className="h-8 w-8 rounded-full bg-gray-400 flex items-center justify-center text-white cursor-pointer"
                onClick={() => setShowDropdown(!showDropdown)}
              >
                {userName.charAt(0).toUpperCase()}
              </div>

              {showDropdown && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-50">
                  <ul className="py-1">
                    <li
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={handleProfileClick}
                    >
                      Profile
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={handleAccountClick}
                    >
                      Add To Cart
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-500"
                      onClick={handleLogout}
                    >
                      {loading ? 'Logging out...' : 'Logout'}
                    </li>
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <>
              <button className="bg-transparent text-white border border-white px-4 py-2 rounded hover:bg-yellow-300 hover:text-gray-800">
                <Link to="/signup">Sign up</Link>
              </button>
              <button className="bg-white text-gray-800 px-4 py-2 rounded hover:bg-yellow-300">
                <Link to="/login">Login</Link>
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


