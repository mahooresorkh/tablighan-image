import React, { Component } from 'react'
import {GetImageAPI} from './APIList';
export default class GetImage extends Component {
    constructor(props){
        super(props);
        this.state = {
          backgroundColor: 'transparent',
          imageName: null
        }
    }

    componentDidMount(){
        GetImageAPI(this.props.hostId)
        .then(res=>{
          this.setState({
            imageName: res.data[0].AdFileName,
            backgroundColor:res.data[0].BackColor
          }) 
        })
    }

    imageClicked = () => {
      window.open(`http://tablighon.ir/Uploads/${this.state.imageName}`);
    }

    render() {
        const container = this.state.imageName 
        ? 
          <img onClick={this.imageClicked} src={`http://tablighon.ir/Uploads/${this.state.imageName}`} style={{width:'100%', height:'auto', objectFit:'cover'}}  />
        : 
          <div style={{width:'100%', heigth:'100%', backgroundColor:`${this.state.backgroundColor}`}}></div> 
        return (container)
    }
}
