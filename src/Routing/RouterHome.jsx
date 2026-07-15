import { Outlet, Route, Routes } from "react-router-dom";
import Footer from "./Footer";
import { Header } from "./Header";
import { Home } from "../Components";
import { lazy, Suspense, useState } from "react";
import { Login } from "./Login";
import Skeletion from "./Skeletion";
import { ReduxOps } from "../redux-practice/ReduxOperations";




const styles = {
    margin: "1rem",
    padding: '1rem',
    border: '2px solid gray'
}

export function ProtectedRoute(props) {
    return props?.isLoggedin == true ? <Outlet /> : <Login />;
}

const AppLayoutContext = lazy(() => import("../ContextAPI"));
const Courses = lazy(() => import("../Courses"));
const FormHillingWithEvents = lazy(() => import('../FormFIlling'))
const NotFOund = lazy(() => import("./NotFound"));

export function RoutingExample() {

    const [user, setUser] = useState({
        userName: "Sagar Senal 360 GSR",
        emailId: "gsr@gmail.com",
        isLoggedin: true
    });

    return (
        <div style={styles}>
            <Header />
            {/** Router Output* localhost:3000/contextapi*/}
            <Suspense fallback={<Skeletion />}>
                <Routes >
                    {/* <Route path="/cour">
                    <Redirect to="/courses" />
                </Route> */}

                    <Route element={<ProtectedRoute {...user} />}>
                        <Route path="" element={<Home />} />

                        <Route
                            path="/contextapi" element={<AppLayoutContext />} />


                        <Route path="/courses/:id" element={<Courses />} />
                        <Route path="/redux" element={<ReduxOps />} />
                        <Route path="/courses" element={<Courses />} />
                        <Route path="/forms" element={<FormHillingWithEvents />}></Route>
                        <Route path="*" element={<NotFOund />} />
                    </Route>

                </Routes>
            </Suspense>
            <Footer />
        </div>
    )
}