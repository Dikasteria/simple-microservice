import React, {useState, useEffect } from 'react';
import axios from "axios";

const PostCreate = () => {

    const [title, setTitle] = useState("");

    const onSubmit = async (e) => {
        e.preventDefault();
        const result = await axios({
            method: 'post',
            url: 'http://localhost:4000/posts',
            data: {title},
        })
        console.log(result)
        setTitle("");
    };

    return (
        <div>
            <form onSubmit={(e) => onSubmit(e)}>
                <div className="form-group">
                    <label>
                        Title
                    </label>
                    <input value={title} onChange={(e) => setTitle(e.target.value)}className="form-control" />
                </div>
                <button className="btn btn-primary">
                    Submit
                </button>
            </form> 
        </div>
    );
};

export default PostCreate;