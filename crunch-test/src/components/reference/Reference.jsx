import React, { useState } from 'react';
import './reference.scss';

const Reference = () => {
  const [friendName, setFriendName] = useState('');
  const [friendEmail, setFriendEmail] = useState('');
  const [personalMessage, setPersonalMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validation for required fields
    if (!friendName || !friendEmail) {
      alert('Please fill in all required fields.');
      return;
    }

    // Validation for character limit in personal message
    const maxCharacters = 200;
    if (personalMessage.length > maxCharacters) {
      alert(`Personal message must be ${maxCharacters} characters or less.`);
      return;
    }

    // Add your logic to handle the form submission, such as sending data to a server

    // Display success message
    alert('Submitted! ⭐');

    // Reset form fields
    setFriendName('');
    setFriendEmail('');
    setPersonalMessage('');
  };

  return (
    <div className="reference-wrapper">
      <h2>Refer a Friend</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="friendName">Friend's Name</label>
        <input
          type="text"
          id="friendName"
          value={friendName}
          onChange={(e) => setFriendName(e.target.value)}
          required
        />

        <label htmlFor="friendEmail">Friend's Email</label>
        <input
          type="email"
          id="friendEmail"
          value={friendEmail}
          onChange={(e) => setFriendEmail(e.target.value)}
          required
        />

        <label htmlFor="personalMessage">Message (max 200 characters)</label>
        <textarea
          id="personalMessage"
          value={personalMessage}
          onChange={(e) => setPersonalMessage(e.target.value)}
          maxLength={200}
        />

        <button className="btn btn-primary" type="submit">Refer a Friend</button>
      </form>
    </div>
  );
};

export default Reference;
