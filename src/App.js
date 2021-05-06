import React, {Component} from 'react';
import Clarifai from 'clarifai';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import Rank from './components/Rank/Rank'
import FaceRecognition from './components/FaceRecognition/FaceRecognition'
import SignIn from './components/SignIn/SignIn'
import Register from './components/Register/Register'
import './App.css';

const app = new Clarifai.App({
  apiKey: '182c52ab22bb40d08eb5ef65f71f4357'
 });


const particlesOptions = {
    particles: {
      number: {
        value: 70,
        density: {
          enable: true,
          value_area: 900
        }
      }
      }
    }


class App extends Component {
  constructor(){
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: {},
      route: 'signin',
      isSignedIn: false
    }
  }
  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('input-image');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  displayFaceBox = (box) => {
    this.setState({box: box});
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }


  onButtonSubmit = () =>{
this.setState({imageUrl: this.state.input})
console.log(this.state.input);
// app.models.predict("a403429f2ddf4b49b307e318f00e528b", "https://samples.clarifai.com/face-det.jpg")
// app.models.predict(Clarifai.FACE_DETECT_MODEL, "https://samples.clarifai.com/face-det.jpg")
app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
// app.models.predict('c0c0ac362b03416da06ab3fa36fb58e3', this.state.input)
.then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
// .then(response => console.log(response))
.catch(err => console.log(err))
  }

  onRouteChange = (route) => {
    if(route === 'signout'){
      this.setState({isSignedIn: false})
    } else if (route === "home") {
      this.setState({isSignedIn: true})
    }
    this.setState({route: route})
  }


  render(){
    const { isSignedIn, route, box, imageUrl } = this.state;
    return(
     <div className="container">
    <Particles className='particles-bg' params={particlesOptions} />
     <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
     {route === 'home' ? 
     <>
     <Logo />
     {/* <Rank /> */}
     <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
     <FaceRecognition box={box} imageUrl={imageUrl} /> 
     </>
     : (route === 'signin' 
     ? <SignIn onRouteChange={this.onRouteChange} />
     : <Register onRouteChange={this.onRouteChange} />
     )
    }
     </div>
    )
  }

}

export default App;