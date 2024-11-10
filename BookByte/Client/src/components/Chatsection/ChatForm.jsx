import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const ChatForm = () => {
  const [username, setUsername] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [country, setCountry] = useState('');
  const navigate = useNavigate();

  const handleStartChat = (e) => {
    e.preventDefault();
    if (username && gender && age && country) {
      navigate('/createroomform'); // Navigate to CreateRoomForm
    } else {
      alert('Please fill in all fields!');
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Main Content Section */}
      <main style={{ display: 'flex', flexDirection: 'row', flex: '1', padding: '20px' }}>
        <aside style={{ width: '10%', backgroundColor: '#f5f5f5', padding: '20px', fontWeight: 'bold' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}><img src="./images/proj_image.png" alt="Description" style={{ width: '100%', borderRadius: '8px', marginBottom: '10px' }} />
            <img src="./images/proj_image2.png" alt="Description" style={{ width: '100%', borderRadius: '8px', marginBottom: '10px' }} />
            <img src="./images/proj_image3.png" alt="Description" style={{ width: '100%', borderRadius: '8px', marginBottom: '10px' }} />
            <img src="./images/proj_image4.png" alt="Description" style={{ width: '100%', borderRadius: '8px', marginBottom: '10px' }} />
            <img src="./images/proj_image5.png" alt="Description" style={{ width: '100%', borderRadius: '8px', marginBottom: '10px' }} />
            <img src="./images/proj_image6.png" alt="Description" style={{ width: '100%', borderRadius: '8px', marginBottom: '10px' }} />
          </div>
        </aside>

        <aside style={{ width: '20%', backgroundColor: '#f5f5f5', padding: '20px', fontFamily: 'Times New Roman', fontWeight: 'bold' }}>
          You can now chat with anyone without being concerned about privacy.
          <br /><br />
          Your safe space will make your chatting experience increase by tenfolds.
          <br></br><br></br>SafeChat is your go-to platform for secure and seamless communication. Whether you’re catching up with friends or conducting business discussions, SafeChat ensures that your privacy is at the forefront.<br></br><br></br> Its intuitive design makes navigating conversations a breeze, while advanced encryption keeps your messages protected. With a clutter-free interface and features that prioritize user comfort, SafeChat offers a worry-free experience in staying connected.


        </aside>

        <div className="w-full max-w-md mx-auto bg-white p-6 shadow-lg rounded-md">
          <h4 className="text-3xl text-center font-semibold mb-4">
          <img class="fa-brands fa-rocketchat"></img> Chat Without Registration:
          </h4>
          <form onSubmit={handleStartChat}>
            <label htmlFor='username' className="block text-base mb-1"> Username </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="border w-full text-base px-2 py-2 focus:outline-none focus:ring-0 focus:border-gray-600"
              placeholder="Enter your guest username"
            />
            <br /><br />
            <label htmlFor='gender' className="block text-base mb-2"> Gender: </label>
            <select
              id="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="border w-full text-base px-2 py-2 focus:outline-none focus:ring-0 focus:border-gray-600"
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <br /><br />
            <label htmlFor='age' className="block text-base mb-1"> Age </label>
            <input
              type="number"
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="border w-full text-base px-2 py-2 focus:outline-none focus:ring-0 focus:border-gray-600"
              placeholder="Enter your age"
            />
            <br /><br />
            <label htmlFor='country' className="block text-base mb-2"> Country </label>
            <select
              id="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="border w-full text-base px-2 py-2 focus:outline-none focus:ring-0 focus:border-gray-600"
            >
              <option value="">Select</option>
              <option value="india">India</option>
              <option value="usa">USA</option>
              <option value="canada">Canada</option>
              <option value="mexico">Mexico</option>
              <option value="england">England</option>
            </select>
            <br /><br />
            <button
              type="submit"
              style={{
                backgroundColor: '#f3f8fe', // Background color
                padding: '9px 9px', // Padding
                border: 'none', // No border
                borderRadius: '2px', // Rounded corners
                cursor: 'pointer', // Pointer cursor on hover
                width: '100%' // Full width
              }}
            >
              Start Chat
            </button>
          </form>
        </div>

        <aside style={{ width: '30%', backgroundColor: '#f5f5f5', padding: '50px', fontFamily: 'Times New Roman', fontWeight: 'bold' }}>
          <h12 className="text-lg mb-3">Useful Links:</h12>
          <ul style={{ listStyleType: 'none', padding: '0', margin: '0', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <li style={{ display: 'flex', alignItems: 'center', margin: '10px 0' }}>
              <img src="./icons/lock.png" alt="Privacy" style={{ width: '16px', marginRight: '8px' }} />
              <Link to="/privacypolicy" className='text-black no-underline'>Privacy Policy</Link>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', margin: '10px 0' }}>
              <img src="./icons/terms.png" alt="Terms" style={{ width: '25px', marginRight: '8px' }} />
              <Link to="/terms" className='text-black no-underline'>Terms and Conditions</Link>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', margin: '10px 0' }}>
              <img src="./icons/help1.png" alt="Help Center" style={{ width: '20px', marginRight: '8px' }} />
              <Link to="./helpcenter" className='text-black no-underline'>Help Center</Link>
              </li><br></br> </ul>
            <h12 className="text-lg mb-3">Useful Tips:</h12>
            <ul style={{ listStyleType: 'none', padding: '0', margin: '0', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <li style={{ display: 'flex', alignItems: 'center', margin: '10px 0' }}>
              <img src="./icons/lock.png" alt="Privacy" style={{ width: '16px', marginRight: '8px' }} />
              <Link to="/privacypolicy" className='text-black no-underline'>How to share images or documents?</Link>
            </li>
            </ul>
        </aside>
      </main>

      {/* Footer Section */}
      <footer style={{ backgroundColor: '#bbd0ff', padding: '20px', textAlign: 'center', borderTop: '1px solid #ddd' }}>
        <div>
          <h5 className="text-lg mb-3">Popular Websites</h5>
          <ul style={{ listStyleType: 'none', padding: '0', margin: '0', display: 'flex', justifyContent: 'center' }}>
            <li style={{ margin: '0 10px' }}>
              <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" className="text-black no-underline">
                Google
              </a>
            </li>
            <li style={{ margin: '0 10px' }}>
              <a href="https://www.microsoft.com" target="_blank" rel="noopener noreferrer" className="text-black no-underline">
                Microsoft
              </a>
            </li>
            <li style={{ margin: '0 10px' }}>
              <a href="https://workspace.google.com" target="_blank" rel="noopener noreferrer" className="text-black no-underline">
                Google Workspace
              </a>
            </li>
            <li style={{ margin: '0 10px' }}>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-black no-underline">
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default ChatForm;