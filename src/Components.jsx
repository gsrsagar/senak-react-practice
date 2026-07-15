    import React, { PureComponent, useState } from "react";
    import { Component } from "react";




    const PI = 3.14;
    export class Home extends PureComponent {
        constructor(props) {
            super(props);
            this.state = { count: 10, name: "Sagar", age: 28 , PI : PI};
        }

        render() {
            return (
                <React.Fragment>
                    <div>
                        <p>{this.state.count}</p>
                        <p>Name:{this.state.name}</p>
                    </div>
                    <div>
                        <p>{this.state.count}</p>
                        <p>Name:{this.state.name}</p>
                    </div>
                </React.Fragment>

            )
        }

    }


    export function Home1() {

        const [student, setStudent] = useState({ count: 10, name: "Sagar", age: 28 })

        return (
            <React.Fragment>
                <div>
                    <p>{student.count}</p>
                    <p>Name:{student.name}</p>
                </div>
                <div>
                    <p>{student.count}</p>
                    <p>Name:{student.name}</p>
                </div>
            </React.Fragment>

        )
    }

    export function CourseCard(props) {
        return (
            <div>
                <div>
                    <p>Course Name :{props.course.courseName}</p>
                    <p>Descrtiption : {props.course.description}</p>
                </div>
                <div>
                    <p>Course Name :{props.course.courseName}</p>
                    <p>Descrtiption : {props.course.description}</p>
                </div>
            </div>

        )
    }

    export function Utility() {

        const [course, setCourse] = useState([
            { courseName: "Java Full Stack", description: `This Course is "90 Days Software Development Training and Placement Assistance Program" in the Dotnet Full Stack for the Freshers , UnderGrads, Career Refresh, Job Switch  and all other People , who are looking industry ready hands-on training for free ` },
            { courseName: "Dotnet Full Stack", description: `This Course is "90 Days Software Development Training and Placement Assistance Program" in the Dotnet Full Stack for the Freshers , UnderGrads, Career Refresh, Job Switch  and all other People , who are looking industry ready hands-on training for free ` },
        ])
        return (
            <div>
                {
                    course.map((x, i) => {
                        return(
                            <React.Fragment key={i + 1}>
                                <CourseCard course={x} key={i + 1} />
                            </React.Fragment>
                        )
                        
                    })
                }
            </div>
        )
    }