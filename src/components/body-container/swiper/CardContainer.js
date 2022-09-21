import { React } from "react";
import Card from "./Card";


function CardContainer(props){

  return(
    <div className="cards-container">
 {
      props.cards.map((card) => (
        <Card imgUrl={ card.imgUrl } />
      ))
    }
  </div>
  )
}
export default CardContainer;



   











