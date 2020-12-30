import React, { useState, useEffect } from "react";
import axios from "axios";

const UserList = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
            setData((data) => res.data);
        })
    }, []);
    return (
        <div>
            <ul>
                {data.map((user) => (
                    <li key={user.id}>
                        <div className="user">
                            <div className="img-container">
                                {user.id === 1 ? (
                                    <img src="/male.jpg" className="userimg" alt="" />
                                ) : null}
                                {user.id === 2 ? (
                                    <img src="/female.jpg" className="userimg" alt="" />
                                ) : null}
                                {user.id === 3 ? (
                                    <img src="/female.jpg" className="userimg" alt="" />
                                ) : null}
                                {user.id === 4 ? (
                                    <img src="/male.jpg" className="userimg" alt="" />
                                ) : null}
                                {user.id === 5 ? (
                                    <img src="/male.jpg" className="userimg" alt="" />
                                ) : null}
                                {user.id === 6 ? (
                                    <img src="/male.jpg" className="userimg" alt="" />
                                ) : null}
                                {user.id === 7 ? (
                                    <img src="/male.jpg" className="userimg" alt="" />
                                ) : null}
                                {user.id === 8 ? (
                                    <img src="/male.jpg" className="userimg" alt="" />
                                ) : null}
                                {user.id === 9 ? (
                                    <img src="/male.jpg" className="userimg" alt="" />
                                ) : null}
                                {user.id === 10 ? (
                                    <img src="/male.jpg" className="userimg" alt="" />
                                ) : null}
                                <div className="inner-img-container"></div>
                            </div>
                            <div className="sidebox">
                                <span className="spanstyle1">
                                    <b className='name'>{user.name}</b>
                                </span>
                                <br></br>
                                <span className="spanstyle2">{user.email}</span>
                                <br />
                                <div className="style3">
                                    <span >Phone: {user.phone}</span>
                                    <span >Website: {user.website}</span>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};


export default UserList;