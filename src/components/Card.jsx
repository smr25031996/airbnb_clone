import staricon from "../assets/star.jpg";
export default function Card(props) {
  return (
    <div className="grid-container">
      <div className="grid-item">
        <img src={props.img} alt="" />
        <span>
          <img src={staricon} alt="" />
          <small>
          &nbsp;&nbsp;
            {" "}
            
             {props.rating} &nbsp;&nbsp;  ({props.number}) &nbsp;&nbsp;&nbsp;&nbsp;*{props.country}
          </small>
          <h4>  {props.heading}</h4>
          <p>
            <b>From ${props.price} /</b>person
          </p>
        </span>
      </div>
    </div>
  );
}
