
import { useEffect, useState } from "react";
import { CourseDetails } from "./CourseDetails";
import { CourseDetailsClass } from "./CourseDetailsClass";
import { youtubeSVGIcon } from "./assets/svgs";
import imgDay28 from './assets/Day 28.png'
import { useParams, useRoutes, useSearchParams } from "react-router-dom";
import { List, Map } from "immutable";

export default function Courses() {

    const { id } = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    //name="Sagar"&age=28"
    // alert(searchParams.get("name"))
    //  alert(searchParams.get("age"))
    // Data state
    // to main and update data inside a component
    // useState a life cycle hooks in funcitonal components is introduced
    // from React 16.8 version
    const [courses, setCourse] = useState();
    const [count, setCount] = useState(Map({ count: 0 }))

    useEffect(() => {
        const setData = () => {
            setCourse(List([
                { courseId: "XxeU2hTuNDsQMUtGqlof", isActive: false, courseName: "React JS", courseDuration: "3 Months", courseFee: 30000, courseInstructor: "John Doe" },
                { courseId: "XxeU2hTuNDxeU2hTuNsQ", isActive: false, courseName: "Vue JS", courseDuration: "3 Months", courseFee: 30000, courseInstructor: "John Doe" },
                { courseId: "UtGqaouNDsQMUtGqlof1", isActive: true, courseName: "Angular JS", courseDuration: "3 Months", courseFee: 30000, courseInstructor: "John Doe" },
                { courseId: "MUtGuNDsQMUtGqlofuNs", isActive: true, courseName: "Node JS", courseDuration: "3 Months", courseFee: 30000, courseInstructor: "John Doe" },
                { courseId: "QMUthTuNDsQMUtGqlofs", isActive: false, courseName: "Python", courseDuration: "3 Months", courseFee: 30000, courseInstructor: "John Doe" }
            ]));

            setInterval(() => {
                setCount((prev) => prev.update('count', val => val + 1));
            }, 1000);
        };





        setTimeout(() => {
            setData();
        }, 3000)

    }, []);

    const filteredCourses = courses?.filter(course => course.isActive === true)


    const updateCourse = () => {
        let id = "XxeU2hTuNDxeU2hTuNsQ";
        const index = courses?.findIndex(course => course.courseId === id);
        //1
        const course = courses[index];
        course.courseName = "Vue JS Full Stack";
        course.courseDuration = "4 Months";
        course.courseFee = 40000;
        course.courseInstructor = "Jane Doe";

        setCourse([...courses, course]);


    }


    return (
        <div>
            <p>Count : {count.get('count')}</p>
            <h1>YOutube {youtubeSVGIcon()}</h1>
            <h1>Courses</h1>
            <img src={imgDay28} alt="Day 28" height="180px" width="350px" />
            {/* {
                filteredCourses?.map((course, index) => {
                    return <CourseDetailsClass key={index} course={filteredCourses[index]} />
                })
            } */}

        </div>
    )


}