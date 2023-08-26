export default function Prop() {
  const first_name = "Shubham";
  const last_name = "Rajput";
  const date = new Date();

  const hours = date.getHours;

  let greeting;

  if (hours < 12) {
    greeting = "Good Morning";
  } else if (hours >= 12 && hours < 17) {
    greeting = "Good afternoon";
  }
  else{
    greeting="Good Night"
  }
  return (
    <div>
      <h1>
        Hello {first_name} {last_name}
      </h1>
      <h2>Date:{date.getHours() % 12} O'clock</h2>
      <h1>{greeting}</h1>
    </div>
  );
}
