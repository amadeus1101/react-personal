let counter = 0;
const introTextArray = [
  "Frontend developer &#128104;&#8205;&#128187;",
  "Designer	&#127912;",
  "Freelancer	&#128119;",
  "Chess enjoyer &#9823;",
  "Bike lover &#128692;",
  "Photoshop abuser &#127808;",
];
const elem = document.getElementById("marq123");

const changeMarq = () => {
  elem.innerText = introTextArray[counter];
  counter >= introTextArray.length
    ? (counter -= introTextArray.length)
    : counter++;
};

function Marquee() {
  return (
    <div className="marquee">
      <span id="marq123">MARQUEEEEEEEE</span>
    </div>
  );
}

export default Marquee;
