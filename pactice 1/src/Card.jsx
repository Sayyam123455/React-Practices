import style from "./card.module.css"

function Card(){
    return(
        <>
        <div className={style.card_section}>
  <img  className={style.img_width} src="https://st3.depositphotos.com/1350793/14897/i/450/depositphotos_148976937-stock-photo-demo-concept-with-hand.jpg" alt="" />
  <h2>Sayam</h2>
  <p>react developer</p>
</div>
        
        </>
    )
}
export default Card