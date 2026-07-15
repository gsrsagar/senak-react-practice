import PropTypes from "prop-types";
import React, { useState } from "react";


const styleParagraph = {
    border: "1px solid black",
    padding: "10px",
    margin: "10px",
    backgroundColor: "lightblue",
    borderRadius: "10px",
}

export function CourseDetails(props) {
    // props:{course:{courses[0]}}
    const [course, setCourse] = useState(props?.course);


    return (
        <div style={styleParagraph}>
            <h1>Course Details</h1>
            <p>Course Name : {course?.courseName}</p>
            <p>Course Duration : {course?.courseDuration}</p>
            <p>Course Fee : {course?.courseFee}</p>
            <p>Course Instructor : {course?.courseInstructor}</p>
        </div>
    )
}


CourseDetails.propTypes ={
    course: {
        courseId: PropTypes.string.isRequired,
        courseName: PropTypes.string.isRequired,
        courseDuration: PropTypes.string.isRequired,
        courseFee: PropTypes.number.isRequired,
        courseInstructor: PropTypes.string.isRequired
    }
}

CourseDetails.defaultProps = {
    course: {
        courseId: "defaultId",
        courseName: "Default Course",
        courseDuration: "Default Duration",
        courseFee: 0,
        courseInstructor: "Default Instructor"
    }
}