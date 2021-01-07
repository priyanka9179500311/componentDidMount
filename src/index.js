//import area
//import something from 'somelibrary';

import React,{Component} from 'react';
import ReactDOM from 'react-dom';

//Create an class Component
class Oklabs extends Component{
    //1.Property

    //2.Constructor
    constructor(){
        super();
        this.state = { name : 'Mahima'};
    }

    //3.Method
    //Every Class Component Must have render method
    render(){
        return(
            <div>
                <h1>Hello { this.state.name }</h1>
            </div>
        );
    }
    //This method calls after the view is rendered
    componentDidMount(){
       setTimeout(() => {
        this.setState({name: 'Priyanka'})
       },5000);
    }
}
//Object.method();
ReactDOM.render(<Oklabs/>,document.getElementById('root'));//actual argument