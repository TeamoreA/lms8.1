import React, { PropTypes } from "react";
import CourseListRow from './FoodListRow';

const CourseList = ({courses}) => {
  return (
    <table className="table">
      <thead>
      <tr>
        <th>Food type</th>
        <th>Chef</th>
        <th>Category</th>
        {/* <th>Length</th> */}
      </tr>
      </thead>
      <tbody>
      {courses.map(course =>
        <CourseListRow key={course.id} course={course} />
      )}
      </tbody>
    </table>
  );
};

CourseList.propTypes = {
  courses: PropTypes.array.isRequired
};

  export default CourseList;

