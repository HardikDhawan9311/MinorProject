const PrivacyPolicy = () => {
  return (
    <div>
      <h3 style={{ fontSize: '1.5rem' }}>Privacy Policy:</h3>
     
      <h4 style={{ fontSize: '1.3rem' }}>1. Introduction</h4>
      <p>Welcome to Your Safe Space. We are committed to protecting your privacy and ensuring a safe online experience...</p>

      <h4 style={{ fontSize: '1.3rem' }}>2. Information We Collect</h4>
      <h5 style={{ fontSize: '1.2rem' }}>2.1 Personal Information</h5>
      <p>When you register or use our chatroom services, we may collect personal information such as:</p>
      <ul>
        <li><strong>Username</strong>: The name you choose when signing up.</li>
        <li><strong>Password</strong>: To secure your account.</li>
        <li><strong>Email Address</strong>: To send you important notifications (if applicable).</li>
      </ul>

      <h5 style={{ fontSize: '1.2rem' }}>2.2 Usage Data</h5>
      <p>We may collect information about your interactions with the App, including:</p>
      <ul>
        <li><strong>Message Content</strong>: The text and media you send in chatrooms.</li>
        <li><strong>Log Data</strong>: Your IP address, browser type, and access times.</li>
      </ul>
      
      {/* Continue similarly for other sections */}
    </div>
  );
};
export default PrivacyPolicy;