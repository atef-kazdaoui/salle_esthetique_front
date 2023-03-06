import React, { useState} from 'react';
const SigninForm = () => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [Cpassword, setCpassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log( email, password,Cpassword);
     
    if (email===  "") { alert("veuillez saisir votre email")  }else{setEmail("")}
    
    if (password===  "") { alert("veuillez saisir votre mot de passe ")  }else{setPassword("")}
    if (password === Cpassword) {setPassword("") && setCpassword("")}else{ alert('les mot de passe ne sont pas identique') }
    // Ici, vous pouvez envoyer les données du formulaire à votre API

  };
  return (
    <form onSubmit={handleSubmit}>
      
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
        <label htmlFor="password">Mot de passe :</label>
        <input
          type="password"
          className="form-control"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Confirmation du mot de passe:</label>
        <input
          type="password"
          className="form-control"
          id="Cpassword"
          value={Cpassword}
          onChange={(event) => setCpassword(event.target.value)}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Connexion
      </button>
    </form>
  );
};

export default SigninForm;
