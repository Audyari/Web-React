// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

function BlogSubscription() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubscriptionToggle = () => {
    setIsSubscribed(!isSubscribed);
  };

  const handleSubscribe = () => {
    // Logika untuk menambahkan email ke daftar langganan
    console.log('Pelanggan baru:', email);
    setIsSubscribed(true);
  };

  const handleUnsubscribe = () => {
    // Logika untuk menghapus email dari daftar langganan
    console.log('Pelanggan berhenti berlangganan:', email);
    setIsSubscribed(false);
  };

  return (
    <div>
      <h2>Berlangganan Blog</h2>
      <div>
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={isSubscribed}
            onChange={handleSubscriptionToggle}
          />
          Saya ingin berlangganan
        </label>
      </div>
      {isSubscribed ? (
        <button onClick={handleUnsubscribe}>Berhenti Berlangganan</button>
      ) : (
        <button onClick={handleSubscribe}>Berlangganan</button>
      )}
    </div>
  );
}

export default BlogSubscription;