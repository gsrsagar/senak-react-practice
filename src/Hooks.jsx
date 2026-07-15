import axios from "axios";
import { useCallback, useEffect, useMemo, useRef, useState } from "react"




const styles = {
    margin: '1rem',
    border: '2px solid gray',
    padding: '1rem',
    fontWeight: 'bolder'
}

export function UsersPageLoad() {

    // 
    const [data, setQ] = useState(null);
    const [searchItem, setSearchItem] = useState(null);
    const refDOM = useRef(null);
    const size = useWindowSize();
    const dataFromCustom = useIntiialAPICall("https://fakestoreapi.com/users");

    useEffect(() => {
        console.log("Writing calklback");

        const fetchData = () => {
            if (refDOM.current == null || !refDOM.current) {
                axios.get("https://fakestoreapi.com/users").then(x => {
                    if (x.status == 200) {
                        alert("API Call Success");
                        console.log("USers Data", x.data);
                        setQ(x.data);
                        refDOM.current = true;
                    }
                })
            }
        };

        fetchData();
    }, [searchItem, data]); // dependency Array

    const filteredData = useMemo(() => {
        return dataFromCustom && dataFromCustom?.filter(x => {
            return x.name.firstname.toLowerCase().includes("john");
        });
    }, [dataFromCustom]);


    const handleSubmit = useCallback(() => {
    }, [data])


    // useEffect(() => { });
    // useEffect(() => {

    // });

    return (
        <div style={styles}>
            <p>Page Load User Example</p>
            {
                filteredData && filteredData?.map((x, i) => {
                    return <p key={i + 1}>{x.name.firstname}</p>
                })
            }
            <div>
                <p>Windows Size Height: {size?.height}</p>
                <p>Windows Size Width: {size?.width}</p>
            </div>
        </div>

    )
}


export const useIntiialAPICall=(url)=>{
    const [data, setData ] = useState(null);

    useEffect(()=>{
        const fetchData = ()=>{
            axios.get(url).then(x=>{
                setData(x.data);
            })
        };

        fetchData();
    },[url]);

    return data;
}



export const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState(null);

    useEffect(() => {
        const resizeCalculaton = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            })
        };
        window.addEventListener('resize', resizeCalculaton);

        return () => {
            window.removeEventListener('resize', resizeCalculaton);
        };

    }, []);

    return windowSize;

}