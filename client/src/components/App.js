import React, { Component } from "react";
import "./App.css";
import "./utilities.css";
import NavBar from "./NavBar.js";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import sr from "./ScrollReveal.js";

import popn from "../../../img/pop'n.png";
import wisdomAI from "../../../img/wearable-wisdom.png";
import icane from "../../../img/icane.png";
import icaneCAD from "../../../img/icane-cad.png";
import deicing from "../../../img/vibrational-deicing.png";
import stevenson from "../../../img/stevenson.png";
import mit from "../../../img/mit.png";
import winnie from "../../../img/winnie.png";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup1: false,
      showPopup2: false,
      showPopup3: false
    }
  }



  componentDidMount = () => {
    const leftSlide = {
      origin: 'left',
      duration: 1000,
      delay: 100,
      distance: '500px',
      scale: 1,
      easing: 'ease',
      reset: true
    }
    const rightSlide = {
      origin: 'right',
      duration: 1000,
      delay: 100,
      distance: '500px',
      scale: 1,
      easing: 'ease',
      reset: true
    }
    const popup = {
      distance: '17px',
      duration: 1700,
      delay: 170,
      opacity: 0,
      reset: true
    }
    const popupNoReset = {
      distance: '10px',
      duration: 1700,
      delay: 130,
      opacity: .3,
    }
    const popupSlow = {
      distance: '20px',
      duration: 2300,
      delay: 170,
      opacity: .3,
      reset: true
    }
    const rollFirst = {
      rotate: {
        z: -100
      },
      origin: 'left',
      distance: '200px',
      duration: 3000,
      delay: 370,
      opacity: .3,
      easing: 'ease',
      reset: false
    }
    const rollSecond = {
      rotate: {
        z: -130
      },
      origin: 'left',
      distance: '300px',
      duration: 3000,
      delay: 270,
      opacity: .3,
      easing: 'ease',
      reset: false
    }
    const rollThird = {
      rotate: {
        z: -170
      },
      origin: 'left',
      distance: '400px',
      duration: 3000,
      delay: 170,
      opacity: .3,
      easing: 'ease',
      reset: false
    }


    sr.reveal(this.refs.about, popupNoReset)
    sr.reveal(this.refs.projects, popupNoReset)
    sr.reveal(this.refs.wearable, popup)
    sr.reveal(this.refs.wearableText, popup)
    sr.reveal(this.refs.popn, popup)
    sr.reveal(this.refs.popnText, popup)
    // sr.reveal(this.refs.icaneCAD, popup)
    // sr.reveal(this.refs.icane, popup)
    // sr.reveal(this.refs.icaneText, popup)
    // sr.reveal(this.refs.deicing, popup)
    // sr.reveal(this.refs.deicingText, popup)
    sr.reveal(this.refs.other, popupNoReset)
    sr.reveal(this.refs.winnie, rollFirst)
    sr.reveal(this.refs.mit, rollSecond)
    sr.reveal(this.refs.stevenson, rollThird)
    sr.reveal(this.refs.winnieText, popupSlow)
    sr.reveal(this.refs.mitText, popupSlow)
    sr.reveal(this.refs.stevensonText, popupSlow)
    sr.reveal(this.refs.winnieOverlay, popupSlow)
  }

  togglePopup1 = (e) => {
    this.setState({showPopup1: !this.state.showPopup1})
  }
  togglePopup2 = (e) => {
    this.setState({showPopup2: !this.state.showPopup2})
  }
  togglePopup3 = (e) => {
    this.setState({showPopup3: !this.state.showPopup3})
  }

  render() {
    
    return (
      
      <>
      
      <NavBar></NavBar>
      
      <body style = {{overflow:"hidden"}}>

      
      <div className="section-home" id="home-page">
        <div className="home-title-container">
          <h1 class="home-title anim-typewriter">
            hello!
          </h1>
          <h4 className="home-title anim-typewriter-delay">
            my name is Shirley
          </h4>
        </div>
        
      </div> 
      
      <div className="section-about">
          <h3 className="title" ref="about">
            about me
          </h3>
        <div className="about-container" id="about-page">
          <div className="about-body">
          {this.state.showPopup1 ?
              <div className="about-overlay" onClick={(e) => this.togglePopup1(e)} >
                <h2 className="about-overlay-container">
                  <h2 className="about-overlay-text">
                  Hi! Nice to meet you!
                  </h2>
                  <h2 className="about-overlay-text">
                  Here's a little bit about me :) In my free time, you'll catch me practicing calligraphy, reading, or 
                  writing in my journal. Occassionally, I'll dable in some baking and guitar playing. I also love traveling 
                  and photography! But perhaps my favorite and most relaxing passtime is cleaning and decorating my room.
                  </h2>
                </h2>
              </div>
            :
            <div>
              <div className="about-image-container"><img src={winnie} className="about-image" ref="winnie" onClick={(e) => this.togglePopup1(e)}></img></div>
              <div ref="winnieText">
                <h2 className="about-text"> Shirley Cao </h2>
                <h2 className="about-text">
                  Chicago, Illinois
                </h2>
              </div>
            </div>
            }

          </div>
        
          <div className="about-body">
          {this.state.showPopup2 ?
              <div className="about-overlay" onClick={(e) => this.togglePopup2(e)} >
                <h2 className="about-overlay-container">
                <h2 className="about-overlay-text">I'm a Junior at MIT studying Computer Science
                and Engineering and concentrating in Linguistics.</h2>
                <h2 className="about-overlay-text">What I've learned from the most is not any class, but rather through
                trials that have planted firm beliefs: my failures are worth more than my successes, things are often scarier in my
                head than reality, and it's okay to ask for help. I have lost myself 
                countless of times, but I have found two things: one, I enjoy problem solving, and two, I laugh
                really easily. </h2>
                </h2>
              </div>
            :
            <div>
              <div className="about-image-container"><img src={mit} className="about-image" ref="mit" onClick={(e) => this.togglePopup2(e)}></img></div>
              <div ref="mitText">
                <h2 className="about-text"> Class of 2022 </h2>
                <h2 className="about-text">
                  Massachusetts Institute of Technology
                </h2>
              </div>
            </div>
            }
          </div>
          <div className="about-body">
          {this.state.showPopup3 ?
              <div className="about-overlay" onClick={(e) => this.togglePopup3(e)} >
                <h2 className="about-overlay-container">
                  <h2 className="about-overlay-text">
                  High school taught me the fruitfulness of commitment. Given enough sunlight, water, and care, a seed will sprout. 
                  The flowers I have are thanks to the time and energy spent nourishing them in high school.
                  Whether it be in leading long practices at badminton, 
                  late night presentations and early meetings for FBLA, or hours in the basement tinkering with a robot,
                  the seeds planted bloomed into recognition, shared smiles, and a unique story I wouldn't trade for anything.</h2>

                </h2>
              </div>
            :
            <div>
              <div className="about-image-container"><img src={stevenson} className="about-image" ref="stevenson" onClick={(e) => this.togglePopup3(e)}></img></div>
              <div ref="stevensonText">
                <h2 className="about-text"> Class of 2018 </h2>
                <h2 className="about-text"> Adlai E. Stevenson High School </h2>
              </div>
            </div>
            }
          </div>
        </div>
      </div>
      
      <div className="section-projects" id="project-page">
        <h3 className="title" ref="projects">
          projects
        </h3>
        <div className="project-container">
          <img className="image" src={wisdomAI} ref="wearable"></img>
          <div className="project-text-container" ref="wearableText">
            <h5 className="project-title">wisdom ai</h5>
            <h2 className="project-header">fluid interfaces media lab</h2>
            research project on the impact of AI generated humor on human mood.
            Facial expression detection analyzes the user's mood before prompting a message
            to ask if the user would like to hear a joke. 
          </div>
        </div>
        <div className="project-container">
        <img className="image" src={popn} ref="popn"></img>
          <div className="project-text-container" ref="popnText">
            <h5 className="project-title"><a className="link" href="http://pop-n.herokuapp.com" target="_blank">pop'n</a></h5>
            <h2 className="project-header">mit weblab semifinalist</h2>
            pop'n is an interactive trivia game that promotes cultural enrichment 
            and curiosity. Players can learn about different regions
            by taking a poll with questions asked by other players.
          </div>
        </div>
        {/* <div className="project-container">
          <div className="image2">
            <img className="icaneCAD" src={icaneCAD} ref="icaneCAD"></img>
            <img className="icane" src={icane} ref="icane"></img>
          </div>
          <h2 className="project-text" ref="icaneText">
            pop'n is a cultural trivia game website.
          </h2>
        </div>
        <div className="project-container">
          <div className="image2">
          <img className="deicing" src={deicing} ref="deicing"></img>
          </div>
          <h2 className="project-text" ref="deicingText">
            pop'n is a cultural trivia game website.
          </h2>
        </div> */}
      </div>
      <div className="section-other" id="other-page">
        <h3 className="title" ref="other">
          other works
        </h3>
      </div>

      </body>

        
      </>
    );
  }
}

export default App;
