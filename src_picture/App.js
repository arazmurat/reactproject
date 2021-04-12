import React from 'react';
import ChoosePicture from './ChoosePicture'

var PICTUREPATHS = [
  'https://i.picsum.photos/id/111/200/300.jpg?hmac=bXXQTtXTex0m2Ogp23o7VFcNHAllTfE-8eSPYK2GeGM',
  'https://i.picsum.photos/id/776/200/300.jpg?hmac=BQHDuDGwB4rDL14FA6htzvzuvc0JcKn24gd4on7tp1M',
  'https://i.picsum.photos/id/953/200/300.jpg?hmac=8Bva5vDegltHxuHoyR882pbfhUI_t7iErL2SPtKrQRU',
  'https://i.picsum.photos/id/79/200/300.jpg?hmac=uqOMZrx9qlolrYp0xS5t84xjCiD_BIjfxIugTa1xjho'
];

const url = "https://api.unsplash.com/photos/"

const key = "G9948LXbQF-N3HTLNsk7o_OaNDMAbeWnlw2La8xIb_0"

class App extends React.Component {
  state = { 
    picturePath:[],
    currentPic: 0 };
    
    getPicture =()=>{
      fetch(`${url}?client_id=${key}`)
      .then(response => response.json())
      .then(data => {
        data.forEach(element=>{
          this.setState({picturePath: [...this.state.picturePath,element.urls.small]})})
        });
      }
    

  nextPic= ()=> {
    var current = this.state.currentPic;
    var next = ++current % PICTUREPATHS.length;
    this.setState({ currentPic: next });
  }

  componentDidMount= () =>{
    //setInterval(this.nextPic, 2000);
    this.getPicture()
  }

  action = null ;

 handleStart = () =>{
  console.log(this.action)
  if(this.action===null){
    this.action=setInterval(this.nextPic, 2000)
  }
 }

 handleStop = () => {
   clearInterval(this.action)
   this.action=null;

 }
 
 
  render () {
    this.getPicture()
    var src = PICTUREPATHS[this.state.currentPic];
    return (
      <div>
        <ChoosePicture 
        //path={src} 
        path={this.state.picturePath[this.state.currentPic]}
        start={this.handleStart} 
        stop={this.handleStop}/>
        
      </div>
    );
  }

}

export default App;