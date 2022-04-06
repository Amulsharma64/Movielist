function Card(props){
    return <>
<div className="cards">
    <div className="card">
        <img src={props.imgsrc} alt="Kota Factory"/>
        <p><strong>{props.title}</strong></p>
            <p>Distributor <b>:</b> {props.distributor}</p>
            <p>Amount <b>:</b> {props.Amount}</p>  
    </div>
</div>
    </>
}
export default Card;