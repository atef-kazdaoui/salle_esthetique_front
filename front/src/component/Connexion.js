import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Connexion.css';
import { useState,useRef,useEffect } from 'react';
function BasicExample() {
  const [state,setState]=useState("")//lahne hat usestate fergha w hediya hiya eli bch yetsab fihaa el valeur eli mawjoud f formulaire bara chouf loutaa talka value f westha
  const handleInput = (e )=> {
     setState(e.target.value)
     
  };
  
  return (
    

    
    <Form>
      <div className='d-flex align-items-center h-100' >
        <div className="m-auto">
           
        <h1>connexion</h1>

        </div>
        
      </div>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>veuillez saisir votre email</Form.Label>
        
        <Form.Control type="email" placeholder="email" value={state}  onChange={handleInput} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Mot de passe </Form.Label>
        <Form.Control type="password" placeholder="Mot de passe" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Verifier moi" />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Se connecter
      </Button>
      <h1>{state} </h1>
    </Form>
    
  );
}

export default BasicExample;