function HelpCenter() {
  return (
    <>
      <h2>Help Center</h2>
      <h3>Frequently Asked Questions</h3>
      
      <div className="faq-item">
        <h4>Why is the website not working?</h4>
        <p>If you're having trouble accessing the website, try the following steps:</p>
        <ul>
          <li>Check your internet connection.</li>
          <li>Clear your browser cache and cookies.</li>
          <li>Try accessing the site using a different browser.</li>
          <li>Ensure that the website URL is correct.</li>
        </ul>
        <p>If the problem persists, please <a href="mailto:support@yourchatroomapp.com">contact support</a>.</p>
      </div>

      <div className="faq-item">
        <h4>How do I create a new chat room?</h4>
        <p>To create a new chat room, follow these steps:</p>
        <ul>
          <li>Log in to your account.</li>
          <li>Navigate to the "Create Room" section.</li>
          <li>Enter a name for your new chat room.</li>
          <li>Click "Create Room" to finalize.</li>
        </ul>
        <p>Your new chat room will be available for you to start chatting immediately.</p>
      </div>

      <div className="faq-item">
        <h4>How can I reset my password?</h4>
        <p>If you need to reset your password:</p>
        <ul>
          <li>Click on the "Forgot Password" link on the login page.</li>
          <li>Enter your registered email address.</li>
          <li>Follow the instructions sent to your email to reset your password.</li>
        </ul>
        <p>If you do not receive the reset email, check your spam folder or <a href="mailto:support@yourchatroomapp.com">contact support</a>.</p>
      </div>

      <div className="faq-item">
        <h4>How do I report inappropriate behavior?</h4>
        <p>If you encounter any inappropriate behavior in the chat rooms:</p>
        <ul>
          <li>Click on the "Report" button next to the message or user.</li>
          <li>Provide details about the issue in the report form.</li>
          <li>Submit the report for review.</li>
        </ul>
        <p>Our team will investigate the issue and take appropriate action.</p>
      </div>

      <Social />
    </>
  );
}
export default HelpCenter;