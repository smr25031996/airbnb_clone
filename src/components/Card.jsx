import star from "/assets/star.jpg";
export default function Card(props) {
  let badge = null;
  if (props.item.openSpots === 0) {
    badge = "*SOLD OUT";
  } else if (props.item.location === "Online") {
    badge = "*Online";
  } else {
    badge = props.item.location;
  }

  return (
    <div className="grid-item">
      {badge && <div className="badge">{badge}</div>}{" "}
      <img src={`/assets/${props.item.coverImg}`} alt="logo" />
      <span>
        <img src={star} alt="" />
        <small>
          &nbsp;&nbsp; {props.item.stats.rating} &nbsp;&nbsp; (
          {props.item.stats.reviewCount}) &nbsp;&nbsp;
        </small>
        <h4> {props.item.title}</h4>
        <p>
          <b>From ${props.item.price} /</b>person
        </p>
      </span>
    </div>
  );
}
