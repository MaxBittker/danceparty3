import { h, render, Component } from "preact";
import styled from "preact-emotion";
import startScreen from "../assets/start.png";
import dance1 from "../assets/dance1.png";
import dance2 from "../assets/dance2.png";
import dance3 from "../assets/dance3.png";
import dance4 from "../assets/dance4.png";
import dance5 from "../assets/dance5.png";
import dance6 from "../assets/dance6.png";
import dance7 from "../assets/dance7.png";
import dance8 from "../assets/dance8.png";
import dance9 from "../assets/dance9.png";

let height = window.innerHeight;
let width = window.innerWidth;

let res = Math.min(height, width) / 9;
let dancemoves = [
  dance1,
  dance2,
  dance3,
  dance4,
  dance5,
  dance6,
  dance7,
  dance8,
  dance9
];
const Image = styled.img`
  width: 100%;
  max-height: 90vh;
`;

const Stage = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(#f5eee4, #d7cdc1);
`;

const MoveImage = styled.img`
  margin: auto;
  max-height: 90vh;
`;
let STATE = {
  start: true,
  moveIndex: 0
};

function getMove(i) {
  return dancemoves[(i + dancemoves.length) % dancemoves.length];
}
class App extends Component {
  constructor() {
    super(...arguments);
    this.state = STATE;

    document.addEventListener("keypress", e => {
      this.setState({ moveIndex: e.keyCode });
    });
    document.addEventListener("touchmove", e => {
      let { screenX, screenY } = e.touches[0];

      let N = Math.round((screenX + screenY) / res);
      e.preventDefault;
      this.setState({ moveIndex: N });
    });
    document.addEventListener("mousemove", e => {
      let { screenX, screenY } = e;

      let N = Math.round((screenX + screenY) / res);
      this.setState({ moveIndex: N });
      // this.setState({ moveIndex: e.keyCode });
    });
    document.addEventListener("click", e => {
      let { screenX, screenY } = e;

      let N = Math.round((screenX + screenY) / res);
      this.setState({ moveIndex: N });
      // this.setState({ moveIndex: e.keyCode });
    });
  }

  render(props, { start, moveIndex }) {
    if (start) {
      return (
        <div>
          <Image
            src={startScreen}
            onClick={() => this.setState({ start: false })}
          />
        </div>
      );
    }
    return (
      <MoveImage
        src={getMove(moveIndex)}
        onClick={() => this.setState({ moveIndex: moveIndex + 1 })}
      />
    );
  }
}

render(
  <Stage>
    <App />{" "}
  </Stage>,
  document.getElementById("root")
);
