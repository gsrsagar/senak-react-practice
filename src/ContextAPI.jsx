
import React, { createContext, useContext, useEffect, useState } from "react"; //ES6 TS
import { useCookies } from "react-cookie";



//useContext
// createContext


const userContext = createContext();
/**
 * 
 * 
<UserProvider>
    <AppLayout />
     <Home />
</UserProvider> 
 */
function UserProvider({ children }) {

    const [userInfo, setUserInfo] = useState({
        userEmail: "sagar@gmail.com",
        isLoggedIn: true
    });

    return (
        <userContext.Provider value={{ userInfo }}>
            {children}
        </userContext.Provider>
    )
}


export const styles = {
    margin: '1rem',
    border: '2px solid black',
    padding: '1rem'
}

export default function AppLayoutContext() {

    const [cookie, setCookie, removeCookie] = useCookies(['user']);

    useEffect(() => {
        setCookie('user', 'Sagar Senak 360', { path: "/contextapi" });
        removeCookie("user");
    }, [])

    return (
        <>
            <div style={styles}>
                <UserProvider>
                    <Courses />
                    <Culture />
                    <Apps />
                </UserProvider>


            </div>
            <div>

            </div>
        </>
    )

}

function Courses(props) {
    const { userInfo } = useContext(userContext);
    return (
        <>
            {
                userInfo &&
                (
                    <>
                        <h2>{userInfo?.userEmail}</h2>
                        <h2>{userInfo?.isLoggedIn}</h2>

                    </>
                )
            }
            <userContext.Consumer>
                {value => {
                    return <div>

                        <h2>{value?.userInfo?.userEmail}</h2>
                        <h2>{value?.userInfo?.isLoggedIn}</h2>


                    </div>
                }}
            </userContext.Consumer>

            <p>Course Works!</p>
        </>
    )

}


function Culture(props) {
    const { userInfo } = useContext(userContext);
    return (
        <>
            {
                userInfo &&
                (
                    <>
                        <h2>{userInfo?.userEmail}</h2>
                        <h2>{userInfo?.isLoggedIn}</h2>

                    </>
                )
            }

            <userContext.Consumer>
                {value => {
                    return <div>

                        <h2>{value?.userInfo?.userEmail}</h2>
                        <h2>{value?.userInfo?.isLoggedIn}</h2>


                    </div>
                }}
            </userContext.Consumer>

            <p>Culture Works!</p>
        </>
    )
}

class Apps extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <userContext.Consumer>
                    {value => {
                        return <div>

                            <h2>{value?.userInfo?.userEmail}</h2>
                            <h2>{value?.userInfo?.isLoggedIn}</h2>


                        </div>
                    }}
                </userContext.Consumer>
                <p>Apps Works!</p>
            </div>
        )
    }


}