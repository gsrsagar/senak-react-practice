import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, updateUserByIdAction } from "./store/actions";




export function ReduxOps() {

    const { users, error, loading } = useSelector(state => state);
    console.log(users);
    const dispatch = useDispatch();
    const isLoadedRef = useRef(null);

    useEffect(() => {
        const fetchData = () => {
            if (!isLoadedRef.current) {
                dispatch(fetchUsers());
                isLoadedRef.current = true;
            }
        }

        fetchData();
    }, []);


    const updateUserClickFunc = (id, data) => {
        dispatch(
            updateUserByIdAction(id, { ...data, title: "IT IS FAKE" })
        );
    }


    return (
        <>
            {error && error !== null && <div>{'error' + error}</div>}
            {loading && loading !== null && <div>Loading....</div>}
            {
                users && users.length &&
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>userId</th>
                                <th>Title</th>
                                <th>Completed</th>
                                <th>Actions</th>
                            </tr>

                        </thead>
                        <tbody>
                            {
                                users.map((user, index) => {
                                    return (<tr key={index + 1}>
                                        <td>{user.id}</td>
                                        <td>{user.userId}</td>
                                        <td>{user.title}</td>
                                        <td>{user.completed}</td>
                                        <td>
                                            <button onClick={() => updateUserClickFunc(user.id, user)}>Update</button>
                                        </td>
                                    </tr>)
                                })
                            }
                        </tbody>
                    </table>

                </div >
            }
        </>
    )
}