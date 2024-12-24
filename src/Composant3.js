import React, { useState } from 'react';
import './Composant3.css';
export default function Composant3() {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredSalaries, setFilteredSalaries] = useState([]);
    
    const handleSearch = () => {
        if (!searchTerm.trim()) {
            // If the search term is empty or only spaces, set filteredSalaries to an empty array
            setFilteredSalaries([]);
            return;
        }

        const results = [
            { id: 1, nomsal: "Alami", prenomsal: "Sara", fonction: "Technicien", service: { codeser: "1", nomser: "informatique" } },
            { id: 2, nomsal: "Hilali", prenomsal: "Hamza", fonction: "Gestionnaire", service: { codeser: "2", nomser: "logistique" } },
            { id: 3, nomsal: "Chams", prenomsal: "Nabil", fonction: "Gestionnaire", service: { codeser: "3", nomser: "logistique" } },
        ]; 

        // Filter the results based on the search term (case insensitive)
        const filtered = results.filter(salarie => 
            salarie.service.nomser.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredSalaries(filtered);
    };

    return (
        <div>
            <h1>Recherche par Service:</h1>
            <label htmlFor="search">Entrer le nom du service:</label>
            <input 
                type="text" 
                id="search" 
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)} 
            />
            <button onClick={handleSearch} className='chercher'>Chercher</button>

            <div className="resultat">
                <h2>Résultat:</h2>
                {filteredSalaries.length === 0 && searchTerm.trim() === '' ? (
                    <p>Aucun résultat trouvé.</p>
                ) : (
                    <ul>
                        {filteredSalaries.map((salarie) => (
                            <li key={salarie.id}>
                                Nom: {salarie.nomsal} Prénom : {salarie.prenomsal}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}
