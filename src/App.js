import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';

import ReactGA from 'react-ga';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Testimonials from './Components/Testimonials';
import Portfolio from './Components/Portfolio';
import store from './store';
import * as actions from './store/actions';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: {}
    };

    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);

  }



  componentDidMount(){
    this.props.getResumeData();
  }

  render() {
    return (
      <div className="App margin-top">
          {this.props.resumeData &&
          <div>
              <Header data={this.props.resumeData.main}/>
              <About data={this.props.resumeData.main}/>
              <Resume data={this.props.resumeData.resume}/>
              {/*<Portfolio data={this.props.resumeData.portfolio}/>*/}
              {/*<Testimonials data={this.props.resumeData.testimonials}/>*/}
              <Contact data={this.props.resumeData.main}/>
              <Footer data={this.props.resumeData.main}/>
          </div>
          }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      resumeData: state.profile.resumeData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
      getResumeData: () => dispatch(actions.profile.getProfile())

  };
};

export const Base= connect(mapStateToProps, mapDispatchToProps)(App);

export default () => {
    return (
          <Provider store={store}>
            <Base />
          </Provider>
    );
};
