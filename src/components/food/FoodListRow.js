import React, { PropTypes } from "react";
import { Link } from 'react-router';

const CourseListRow = ({course}) => {
  return (
    <tr>
      <td>{course.title}</td>
      <td>{course.authorId}</td>
      <td>{course.category}</td>
    </tr>
  );
};

CourseListRow.propTypes = {
  course: PropTypes.object.isRequired
};

export default CourseListRow;
