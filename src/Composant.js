import React, { useState } from 'react'
import './Composant.css';
import Composant2 from './Composant2';

export default function Composant() {
    const [matricule, setMatricule] = useState('');
    const [date, setDate] = useState('');
    const [color, setColor] = useState('');
    const [show, setShow] = useState(false);
    const [selectedMarque, setSelectedMarque] = useState('');
  
    const handleCityChange = (e) => {
        setSelectedMarque(e.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      setShow(true);
      
     
    };
  
    return (
      <div>
        <h1>Gestion Voitures</h1>
        <form className='formulaire' onSubmit={handleSubmit}>
          <label htmlFor="">Matricule:</label>
          <br />
          <input
            type="text"
            value={matricule}
            onChange={(e) => setMatricule(e.target.value)}
          />
          <br />
          <label htmlFor="">Marque:</label>
          <br />
          <select
            value={selectedMarque}
            onChange={handleCityChange}
          >
            <option value="Toyota">Toyota</option>
            <option value="Dacia">Dacia</option>
            <option value="Audi">Audi</option>
            <option value="BMW">BMW</option>
          </select>
          <br />
          <label htmlFor="">Date de mise en circulation:</label>
          <br />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <br />
          <label htmlFor="">Couleur:</label>
          <br />
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
          <br />
          <button type="submit">Confirmer</button>
          {show && (
          <div className="showDiv">
            <h1>Récapitulatif des informations:</h1>
            <ul>
              <li>Matricule: {matricule}</li>
              <li>Marque: {selectedMarque}</li>
              <li>Date Mise en circulation: {date}</li>
              <li>Couleur: {color}</li>
            </ul>
          </div>
        )}
     
      </form>
      <Composant2/>
      </div>
  
       
    );
}
