
import './App.css';
import image from "./download.jfif"

function App() {
  return (
    <div className="App">
      <div style={{border:'solid 1px black' , maxWidth:'100vw'}}>

<h1 className="title red">Your name here</h1>

<br />

<img src="\applis-retouche-android-ios-big.jpg" />

<br />

<img src={image} />

</div>

<iframe width="560" height="315" src="https://www.youtube.com/embed/TDiXxsQ0w2Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


    </div>
  );
}

export default App;
