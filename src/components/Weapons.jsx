import React, { useState, useEffect } from "react";
import axios from "axios";
import "../style/Weapons.css";

export default function Weapons() {
  const [weapons, setWeapons] = useState([]);
  const [selectedWeapon, setSelectedWeapon] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeapons = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          "https://valorant-api.com/v1/weapons?language=pt-BR"
        );
        setWeapons(response.data.data);
        setIsLoading(false);
      } catch (err) {
        setError(
          "Falha ao carregar as armas. Por favor, tente novamente mais tarde."
        );
        console.error(err);
        setIsLoading(false);
      }
    };

    fetchWeapons();
  }, []);

  const handleWeaponClick = (weapon) => {
    setSelectedWeapon(weapon);
  };

  if (isLoading) return <div className="loading">Carregando armas...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="weapons-container">
      <h1>Armas Valorant</h1>
      <div className="weapons-grid">
        {weapons.map((weapon) => (
          <div
            className="weapon-card"
            key={weapon.uuid}
            onClick={() => handleWeaponClick(weapon)}
          >
            <img
              src={weapon.displayIcon}
              alt={weapon.displayName}
              loading="lazy"
            />
            <h2>{weapon.displayName}</h2>
          </div>
        ))}
      </div>
      {selectedWeapon && (
        <div className="weapon-details">
          <h2>{selectedWeapon.displayName}</h2>
          <img
            src={selectedWeapon.displayIcon}
            alt={selectedWeapon.displayName}
            loading="lazy"
          />
          <p>{selectedWeapon.description}</p>
          <h3>Características:</h3>
          <ul>
            <li>Categoria: {selectedWeapon.category}</li>
            <li>Preço: {selectedWeapon.shopData?.cost || "N/A"}</li>
            {selectedWeapon.weaponStats && (
              <>
                <li>
                  Cadência de Tiro: {selectedWeapon.weaponStats.fireRate}{" "}
                  tiros/seg
                </li>
                <li>
                  Tamanho do Pente: {selectedWeapon.weaponStats.magazineSize}
                </li>
                <li>
                  Tempo de Recarga:{" "}
                  {selectedWeapon.weaponStats.reloadTimeSeconds} segundos
                </li>
              </>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
