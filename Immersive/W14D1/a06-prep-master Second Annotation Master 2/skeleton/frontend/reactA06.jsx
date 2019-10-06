import React from 'react';
import ReactDOM from 'react-dom';
// import Root from './components/root';
import configureStore from './store/store';


// Need to find the element from our rails backend
// use react Dom to render all that good stuff
// will need to pass in the store


document.addEventListener("DOMContentLoaded", () => {
  let store = configureStore();
  let root = document.getElementById("root");
  ReactDOM.render(<ComponentToRender />, root);
});


// export const HONEY = "Honey :)P";
// export const CLIMBING = "Climbing mountains, trees, and rolling around in dry tall green grass";
// export const HUGS = "Giving out free bear hugs"


// function ComponentToRender(props) {
//   return <Numbers 
//     count={0}
//     namef={"Bannana"}
//     namel={"Bear"} 
//   />
// }


// function ChildComponent(props) {
//   // debugger;
//   return (
//     <div>
//       <ul>
//         { props.list.map((e, i) => { 
//           return <li onClick={ props.incrementLike }>{ e }</li>
//         }) }
//       </ul>
//     </div>
//   )
// }

// class Numbers extends React.Component {
//   // state = {} props = {}
//   constructor(props) {
//     super(props)
//     this.state = { 
//       count: this.props.count,
//       like: false 
//     }
//   }
//   // state = { count: this.props = { count } }

//   render() {
//     return (
//       <div>
//         <h2>{this.props.namef}</h2>
//         <h2>{this.props.namel}</h2>

//         <span onClick={() => this.setState({ like: !this.state.like })}>
//           {this.state.like ? "" : "false"}
//         </span>

//         <span onClick={() => this.setState({ count: this.state.count + 1 })}>Likes: {this.state.count}</span>
        
//         <ChildComponent
//           list={[HONEY, CLIMBING, HUGS]}
//           incrementLike={ () => this.setState(({ count: this.state.count + 1}))}
//         />
//       </div>      
//     )
//   }
// }