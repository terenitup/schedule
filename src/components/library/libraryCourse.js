import React, { Component } from 'react';

class LibraryCourse extends Component {

  render() {
    return (
      <div className='library-course'>
        <label className='library-course__title'>Problem Solving</label>
        {/* icon component */}

        {/* arrow component */}

        {/* action button component */}
        <div className='library-course__description'>
            <label>Course Description</label>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam facere voluptatum accusantium non, eum cum temporibus quam saepe, inventore ad quae blanditiis. Unde sunt voluptas nihil quod alias minus ea!</p>
        </div>

      </div>
    );
  }
}

export default LibraryCourse;