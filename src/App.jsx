import React from "react";
import "./styles/app.css";
import Navbar from "../src/components/Navbar/Navbar";
import { Article } from "./components/Article/Article";
import img01 from './assets/images/post01.png';
import img02 from './assets/images/post02.png';
import img03 from './assets/images/post03.png';
import img04 from './assets/images/post04.png';




class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <section id="articles">
          <Article
            title="Designing Dashboards"
            provider="NASA"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book."
            thumbnail={img01}
          />

          <Article
            title="Vibrant Portraits of 2020"
            provider="SpaceNews"
            description=" It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores maxime necessitatibus adipisci pariatur deleniti cum, ipsa, rerum voluptas sed nihil fuga reprehenderit est similique quam numquam illum laborum ducimus debitis."
            thumbnail={img02}
          />

          <Article title="36 Days of Malayalam type" provider="SpaceFlight Now"
            description="It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." 
            thumbnail={img03}/>

          <Article title=" Brazilians need to be studied" provider="NASA Brazil News"
            description="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source." 
            thumbnail={img04}/>
        </section>
      </>
    );
  }
}

export default App;
