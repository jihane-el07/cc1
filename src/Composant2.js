import React, { useState } from 'react'
import './Composant2.css';
import Composant3 from './Composant3';

export default function Composant2() {
    const [salaries, setSalaries] = useState([
        { id: 1, nomsal: "Alami",prenomsal: "Sara", fonction: "Technicien", service:{codeser:"1",nomser:"informatique" } },
        { id: 2, nomsal: "Hilali",prenomsal: "Hamza", fonction: "Gestionnaire", service:{codeser:"2",nomser:"logistique" } },
        { id: 3, nomsal: "Chams",prenomsal: " Nabil", fonction: "Gestionnaire", service:{codeser:"3",nomser:"logistique" } },
      ]);
  return (
    <div>
        <h1>Liste des Salariés</h1>
        <table>
            <tr>
                <th>Nom</th>
                <th>Prénom</th>
                <th>Fonction</th>
                <th>Service</th>
            </tr>
            {salaries.map((salarie) => {
                return (
            <tr key={salarie.id}>
                <td>{salarie.nomsal}</td>
                <td>{salarie.prenomsal}</td>
                <td>{salarie.fonction}</td>
                <td>{salarie.service.nomser}</td>
            </tr>
            );
        })}
        </table>
       
      
    </div>
  )
}
