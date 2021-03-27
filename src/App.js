import {Card} from './components/Card'

export const App = () => {

const data = [
  {
    name: "Kyial Bolotbaeva",
    position: "js instructor",
    id:1
  },
  {
    name: "Nurayim Erkinova",
    position: "frontend dev",
    id:2
  },
  {
    name: "Azamat Maratov",
    position: "backend dev",
    id:3
  },
]

  return (
    <div className="App">
      {
        data.map((el,id) => {
          return <Card 
                full_name={el.name}
                position={el.position}
                id={el.id}
                key={id}
          />
        })
      }
      
    {/* <Card></Card> */}
    </div>
  );
}


