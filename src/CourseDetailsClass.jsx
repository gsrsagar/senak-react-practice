import PropTypes from "prop-types";
import React from "react";


const styleParagraph = {
    border: "1px solid black",
    padding: "10px",
    margin: "10px",
    backgroundColor: "lightblue",
    borderRadius: "10px",
}


export class CourseDetailsClass extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            course: props?.course
        };

        this.handleClickCourse = this.handleClickCourse.bind(this);
        // call , apply , bind
    }

    handleClickCourse =()=>{
        alert(`Course Name : ${this.state.course.courseName}\n, This is event Example (onCLick)`);
    }

    render() {
        return (
            <div style={styleParagraph}>
                <h1>Course Details</h1>
                <button className="btn-brimary" onClick={this.handleClickCourse}>Open Course Details</button>
                <p>Course Name : {this.state.course?.courseName}</p>
                <p>Course Duration : {this.state.course.courseDuration}</p>
                <p>Course Fee : {this.state.course.courseFee}</p>
                <p>Course Instructor : {this.state.course.courseInstructor}</p>
            </div>
        )
    }
}

CourseDetailsClass.propTypes ={
    course: {
        courseId: PropTypes.string.isRequired,
        courseName: PropTypes.string.isRequired,
        courseDuration: PropTypes.string.isRequired,
        courseFee: PropTypes.number.isRequired,
        courseInstructor: PropTypes.string.isRequired
    }
}