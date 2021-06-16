import React from 'react';

function Caster({name, picture}){
  return (
    <div>
      <div> name : {name}</div>
      <img src= {picture}/>
    </div> 
  );
}
const casters = [
  {
    name : '駒木結衣',
    image : 
      "https://pbs.twimg.com/media/EiFGds2UwAAQQak?format=jpg&name=large"
  },
  {
    name : "檜山沙耶",
    image :
      "https://pbs.twimg.com/media/Ez0wBFfVUAYDpmt?format=jpg&name=large"
  },
  {
    name : "武藤彩芽",
    image :
      "https://pbs.twimg.com/media/E1R5DXiVoAYBWqc?format=jpg&name=medium"
  }
]

function App() {
  return (
    <div className="App">
      {casters.map(caster => (
        <Caster name={caster.name} picture ={caster.image} />
      ))}
    </div>
  );
}

export default App;
