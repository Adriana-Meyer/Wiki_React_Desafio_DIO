
import { useState } from 'react';
import gitLogo from '../assets/githubLogo.png';
import Input from '../components/Input/input-index';
import Button from '../components/Button/button-index';
import ItemRepo from '../components/ItemRepo/item-index';
import { api } from '../services/api';

import { Container } from './App-styles'

function App() {

  const [currentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos] = useState([]);
  

  const handleSearchRepo = async () => {
    const {data} = await api.get(`repos/${currentRepo}`)

    if(data.id){

      const isExist = repos.find(repo => repo.id === data.id);

      if(!isExist){
      setRepos(prev => [...prev, data]);
      setCurrentRepo('')
      return
      } else {
        alert('Repositótio já existente');
      }  
    }  
  }
  
  const handleRemoveRepo = (id) => {
    let newList = repos.filter((repo) => repo.id !== id)
    setRepos(newList);

  }

  return (
    <Container>
      <img src={gitLogo} width={150} alt="Github Logo"/>
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)} />
      <Button onClick={handleSearchRepo}/>
      {repos.map(repo => <ItemRepo handleRemoveRepo={handleRemoveRepo} repo={repo}/> )}  
    </Container>
  );
}

export default App;
