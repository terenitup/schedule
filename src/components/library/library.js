import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';

import LibraryCourse from './libraryCourse';

class Library extends Component {

  componentDidMount() {
    this.props.fetchCourses()
  }

  renderCourses() {
    const data = this.props.courses
    console.log(data);

    return data.map((course, index) => {
      return <LibraryCourse key={index}/>
    })
  }

  render() {
    console.log(this.props.courses)
    return (
      <div className='library'>
        <h1 className='library__title'>Course Library</h1>
        
        { this.renderCourses() }
        
      </div>
    );
  }
}

function mapStatetoProprs(state) {
    return {
      courses: state.courses
    }
}

export default connect(mapStatetoProprs, actions)(Library); 