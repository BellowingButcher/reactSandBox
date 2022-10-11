import React from 'react';
import ReactDOM from 'react-dom/client';import './index.css';
//============================================================================================
// const root = ReactDOM.createRoot(
//   document.getElementById('root')
// );

// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   root.render(element);
// }
// setInterval(tick, 1000);
//=============================================================================================
// class Square extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             value: null,
//         };
//     }
//     render() {
//         return (
//             <button
//             className="square"
//             onClick={() => this.setState({value: 'X'})}
//             >
//             {this.state.value}
//             </button>
//         );
//     }
// }

// class Board extends React.Component {
// renderSquare(i) {
//     return <Square value={i} />;
//     }

//     render() {
//     const status = 'Next player: X';

//         return (
//             <div>
//             <div className="status">{status}</div>
//             <div className="board-row">
//                 {this.renderSquare(0)}
//                 {this.renderSquare(1)}
//                 {this.renderSquare(2)}
//             </div>
//             <div className="board-row">
//                 {this.renderSquare(3)}
//                 {this.renderSquare(4)}
//                 {this.renderSquare(5)}
//             </div>
//             <div className="board-row">
//                 {this.renderSquare(6)}
//                 {this.renderSquare(7)}
//                 {this.renderSquare(8)}
//             </div>
//             </div>
//         );
//     }
// }

// class Game extends React.Component {
//     render() {
//     return (
//         <div className="game">
//         <div className="game-board">
//             <Board />
//         </div>
//         <div className="game-info">
//             <div>{/* status */}</div>
//             <ol>{/* TODO */}</ol>
//         </div>
//         </div>
//     );
//     }
// }


// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Game />);
// ========================================================

function Welcome(props) {
    return <h1>Hello, {props.name}. You are a {props.sex}</h1>;
  }
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  const element = <Welcome name="Sara" sex="female" />;
  root.render(element);

  //=================================================================
