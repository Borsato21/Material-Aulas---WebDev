import { useEffect, useState } from "react";
import Section from "../components/Section";
import Card from "../components/Card";


export default function Home() {
  const [reactRepos, setReactRepos] = useState([]);
  const [nodeRepos, setNodeRepos] = useState([]);
  const [pythonRepos, setPythonRepos] = useState([]);
  const API = import.meta.env.VITE_GITHUB_API;

  useEffect(()=> {
      fetch(`${API}react&per_page=3`)
    .then(res => res.json())
    .then(data => setReactRepos(data.items))

      fetch(`${API}node&per_page=3`)
    .then(res => res.json())
    .then(data => setNodeRepos(data.items))

      fetch(`${API}python&per_page=3`)
    .then(res => res.json())
    .then(data => setPythonRepos(data.items))
  }, [])

return (
    <div className="p-6">
      
      <Section titulo ="React">
        {reactRepos.map(pegaItem =>(
          <Card {...pegaItem} key={pegaItem.id}/>
        ))}
      </Section>

      <Section titulo ="Node">
        {nodeRepos.map(pegaItem =>(
          <Card {...pegaItem} key={pegaItem.id}/>
        ))}
      </Section>

      <Section titulo ="Python">
        {pythonRepos.map(pegaItem =>(
          <Card {...pegaItem} key={pegaItem.id}/>
        ))}
      </Section>
    </div>
  );
}
