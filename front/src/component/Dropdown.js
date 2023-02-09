import { Dropdown } from 'react-bootstrap';

function App() {
  return (
    <div>
      <h5>choisissez selon vos besoin</h5>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Choisissez
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Corp</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Cheveux</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Visage</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
export default App;