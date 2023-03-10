import React, { useState} from 'react';
import './Inscription.css';
const SignupForm = () => {
  
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [adresse, setAdresse] = useState('');
  
  const [email, setEmail] = useState('');
  
  const [password, setPassword] = useState('');
  const [Cpassword, setCpassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(nom,prenom,adresse, email, password,Cpassword);
     
    if (nom ===  "") { alert("veuillez saisir votre nom ")  }else{setNom("")}
    
    if (prenom===  "") { alert("veuillez saisir votre prenom ")  }else{setPrenom("")}
    if (adresse===  "") { alert("veuillez saisir votre adresse")  }else{setAdresse("")}
    
    if (email===  "") { alert("veuillez saisir email ")  }else{setEmail("")}
    if (password===  "") { alert("veuillez saisir mot de passe ")  }else{setPassword("")}
    if (Cpassword===  "") { alert("veuillez saisir la confirmation du mot de passe ")  }else{setCpassword("")}
    if (password === Cpassword){ setCpassword("") && setPassword("") } else { alert('mot de passe ne sont pas identique')}
    // Ici, vous pouvez envoyer les données du formulaire à votre API

  };
  return (
   <>
   <div className='inscription'>
    <h1>inscription</h1>

   </div>
    <form onSubmit={handleSubmit} className="form-inscription">
      <div className='container'>
      <div className="form-group">
        <label htmlFor="nom">Nom :</label>
        <input
          type="string"
          placeholder='Votre nom '
          className="form-control"
          id="nom"
          value={nom}
          onChange={(event) => setNom(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="prenom">Prenom :</label>
        <input
          type="string"
          placeholder='Votre prenom '
          className="form-control"
          id="prenom"
          value={prenom}
          onChange={(event) => setPrenom(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="nom">Adresse domicile :</label>
        <input
          type="string"
          placeholder='Votre adresse domicile '
          className="form-control"
          id="adresse"
          value={adresse}
          onChange={(event) => setAdresse(event.target.value)}
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="email">Adresse e-mail :</label>
        <input
          type="email"
          placeholder='Votre adresse email'
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
          placeholder='Choisissez une mot de passe'
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
          placeholder='Re-taper votre mot de passe'
          className="form-control"
          id="Cpassword"
          value={Cpassword}
          onChange={(event) => setCpassword(event.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Connexion
      </button>
      </div>
    </form>
    </>
  );
};

export default SignupForm;
