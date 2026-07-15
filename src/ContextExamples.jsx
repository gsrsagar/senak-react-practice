const { useState, useEffect } = require("react");







export const styles = {
    margin: '1rem',
    border: '2px solid black',
    padding: '1rem'
}

export function AppLayout() {
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {

        const setUserInfoFun = () => {
            setUserInfo({
                userEmail: "sagar@gmail.com",
                isLoggedIn: true
            });
        };

        setUserInfoFun();
    }, []);

    return (
        <>
            <div style={styles}>
                <h1>App Layout</h1>
                <Courses {...userInfo} />
                <Culture {...userInfo} />
                <Apps {...userInfo} /> 

            </div>
            <div>

            </div>
        </>
    )

}

function Courses(props) {
    return (
        <>
            {
                props &&
                (
                    <>
                        <h2>{props?.userEmail}</h2>
                        <h2>{props?.isLoggedIn}</h2>

                    </>
                )
            }

            <p>Course Works!</p>
        </>
    )

}


function Culture(props) {
    return (
        <>
            {
                props &&
                (
                    <>
                        <h2>{props?.userEmail}</h2>
                        <h2>{props?.isLoggedIn}</h2>

                    </>
                )
            }
            <p>Culture Works!</p>
        </>
    )

}

function Apps(props) {
    return (
        <>
            {
                props &&
                (
                    <>
                        <h2>{props?.userEmail}</h2>
                        <h2>{props?.isLoggedIn}</h2>

                    </>
                )
            }
            <p>Apps Works!</p>
        </>
    )

}