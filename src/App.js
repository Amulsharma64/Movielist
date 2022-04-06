import React from "react"
import Header from "./Header";
import Card from "./Card";
import CardList from "./CardList";

function App() {

  const cards = CardList.map(item=>{
    return (<Card
  imgsrc={item.imgscr}
  title={item.title}
  distributor={item.distributors}
  Amount={item.Amount }
/>
    )
  })

  return <>
  <Header/>
  <div className="line">
  {cards}
  {cards}
</div>
  </>
}
export default App;
