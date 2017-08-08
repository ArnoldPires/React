import React, { Component } from 'react';
import './App.css';

class User extends Component {
  render() {
    const user = {
      name: "Eloquent JavaScript",
      description: `JavaScript lies at the heart...`,
      price: 21.22
    }

    return (
        <section>
            <h1>Hello My name is ARNOLD!</h1>

            <div>
                <header>{ user.name }</header>
                <p>
                    { user.description }
                </p>
                <span>${ user.price }</span>
                <span>${ user.price }</span>
            </div>
            <div class="wrapper">
                <p id="image">
                  <img class="image i1" src="https://georgespigot.files.wordpress.com/2012/05/judge-dredd-comic-01.jpg" />
                  <img class="image i2" src="https://images.amcnetworks.com/ifc.com/wp-content/uploads/2012/09/judge-dredd-620x375.jpg" />
                  <img class="image i3" src="http://geekandsundry.com/wp-content/uploads/2017/02/dredd-banner.png" />
                  <img class="image i4" src="https://screenrant0.imgix.net/wp-content/uploads/Judge-Dredd-The-Dark-Judges-Miniseries.jpg?auto=format&lossless=1&q=90&w=620&h=320&fit=crop" />
                  <img class="image i5" src="http://www.dreadcentral.com/wp-content/uploads/2016/10/judge-death2-1.jpg" />
                  <img class="image i6" src="http://www.ryanbrown-art.com/wp-content/gallery/Portfolio-1/mean_vs_judge_anderson_by_ryanbrown_colour-d874pko.jpg" />
                  <img class="image i7" src="http://fingerguns.net/wp-content/uploads/2017/05/judge-dredd-vs-mars-attacks.jpg" />
                  <img class="image i8" src="https://2000ad.files.wordpress.com/2016/08/2481315-2481314-img_2426-jpg.png?w=627" />
                </p>
              <header>{ user.name }</header>
            </div>
        </section>
    );
  }
}
 export default User;

 class CounterClicker extends Component {
     state = {
         clickCount: 0
     }

     handleButtonClick = () => {
         this.setState({
             clickCount: this.state.clickCount + 1
         })
     }

     render() {
         return (
             <button onClick={this.handleButtonClick}>
                 Clicked { this.state.clickCount } times!
             </button>
         )
     }
 }
