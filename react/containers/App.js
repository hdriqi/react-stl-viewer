import React, {Component} from 'react';
import STLViewer from '../../src/STLViewer';

class App extends Component{
	constructor(props) {
		super(props)
		this.state = {
			color: '#FF0000'
		}

		this.clickBlue = this.clickBlue.bind(this)
		this.clickRed = this.clickRed.bind(this)
	}

	clickBlue() {
		this.setState({color: '#0000FF'})
	}

	clickRed() {
		this.setState({color: '#FF0000'})	
	}

  render(){
    return (
      <div>
        <STLViewer url="dist/static/crazy-thing.stl" modelColor={this.state.color} />
        <button onClick={this.clickRed} >red</button>
        <button onClick={this.clickBlue} >blue</button>
      </div>
    );
  }
};
export default App;
