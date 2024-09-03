import { useState, useEffect } from "react";
import axios from "axios";
import "../style/Agents.css";

async function getAgents() {
  const response = await axios.get(
    "https://valorant-api.com/v1/agents?isPlayableCharacter=true&language=pt-BR"
  );
  return response.data.data;
}

export default function Agents() {
  const [agents, setAgents] = useState([]);
  const [selectedAgent, setSelectedAgent] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterRole, setFilterRole] = useState("");

  useEffect(() => {
    getAgents()
      .then((data) => setAgents(data))
      .catch((err) => console.log(err));
  }, []);

  const filteredAgents = agents.filter(
    (agent) =>
      agent.displayName.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filterRole === "" || agent.role.displayName === filterRole)
  );

  return (
    <div className="agents-container">
      <h1>Agentes Valorant</h1>
      <div className="search-filter">
        <input
          type="text"
          placeholder="Pesquisar agente..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          value={filterRole}
          onChange={(e) => setFilterRole(e.target.value)}
        >
          <option value="">Todas as classes</option>
          {Array.from(
            new Set(agents.map((agent) => agent.role.displayName))
          ).map((role) => (
            <option key={role} value={role}>
              {role}
            </option>
          ))}
        </select>
      </div>
      <div className="agents-grid">
        {filteredAgents.map((agent) => (
          <div
            className="agent-card"
            key={agent.uuid}
            onClick={() => setSelectedAgent(agent)}
          >
            <img src={agent.displayIcon} alt={agent.displayName} />
            <h2>{agent.displayName}</h2>
            <p>{agent.role.displayName}</p>
          </div>
        ))}
      </div>
      {selectedAgent && (
        <div className="agent-details">
          <h2>{selectedAgent.displayName}</h2>
          <img
            src={selectedAgent.fullPortrait}
            alt={selectedAgent.displayName}
          />
          <p>{selectedAgent.description}</p>
          <h3>Habilidades:</h3>
          <ul>
            {selectedAgent.abilities.map((ability) => (
              <li key={ability.slot}>
                <strong>{ability.displayName}:</strong> {ability.description}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
