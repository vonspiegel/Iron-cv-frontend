import React, { Component } from 'react'
import './Content.css'
import Title from './Title';
import Description from './Description';
import Term from './Term';
import { withAuth } from '../components/AuthProvider';

class Content extends Component {
  state = {
    selectedTab: '',
    Tasks: '',
  }

  handleTabTitle = () => {
    const { selectedTab } = this.props;
    this.setState({
      selectedTab: selectedTab,
    })
  }

  handleSaveData = () => {

  }

  handleOnChangeDescription = (eventName, value) => {
    this.setState({
      [eventName] : value,
    })
  }


  render() {
    const { selectedTab } = this.props;

    // console.log('content.js', this.props);
    if (selectedTab === 'profile') {
      return (
        <div className="content-container">
          <h3>{selectedTab}</h3>
          <Title title={'Name'}/>
          <Title title={'Last Name'}/>
          <Title title={'email'}/>
          <Title title={'Address'}/>
          <Title title={'Phone number'}/>
          <button >Save</button>
        </div>
      )
    } else if (selectedTab === 'work') {
      return (
        <div className="content-container">
          <h3>{selectedTab}</h3>
          <Title title={'Position'}/>
          <Title title={'Company'}/>
          <Term title={'From'}/>
          <Term title={'To'}/>
          <Description handleOnChange={this.handleOnChangeDescription} value={this.state.Tasks} description={'Tasks'}/>
        </div>
      )
    } else if (selectedTab === 'education') {
      return (
        <div className="content-container">
          <h3>{selectedTab}</h3>
          <Title title={'Degree'}/>
          <Title title={'Academic Institution'}/>
          <Term title={'From'}/>
          <Term title={'To'}/>
          <Description description={'Main subjects'}/>
        </div>
      )
    } else if (selectedTab === 'skills') {
      return (
        <div className="content-container">
          <h3>{selectedTab}</h3>
          {/* <Description description={'Hard skills'}/>
          <Description description={'Soft skills'}/> */}
        </div>
      )
    } else if (selectedTab === 'languages') {
      return (
        <div className="content-container">
          <h3>{selectedTab}</h3>
          <Description description={'languages'}/>
        </div>
      )
    }
  }
}

export default withAuth()(Content);
