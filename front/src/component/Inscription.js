import React, { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';

const SignupForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [numerotelephone, setPhoneNumber] = useState('');
  const [Adresse, setAdresse] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(username, email, numerotelephone, Adresse, password);
    // Ici, vous pouvez envoyer les données du formulaire à votre API
  };

  return (
    
    
    
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="username">Nom d'utilisateur :</label>
        <input
          type="text"
          className="form-control"
          id="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Adresse e-mail :</label>
        <input
          type="email"
          className="form-control"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="username">Numero telephone :</label>
        <input
          type="text"
          className="form-control"
          id="username"
          value={numerotelephone}
          onChange={(event) => setPhoneNumber(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="username">Adresse :</label>
        <input
          type="text"
          className="form-control"
          id="username"
          value={Adresse}
          onChange={(event) => setAdresse(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Mot de passe :</label>
        <input
          type="password"
          className="form-control"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        S'inscrire
      </button>
    </form>
  );
};

export default SignupForm;
