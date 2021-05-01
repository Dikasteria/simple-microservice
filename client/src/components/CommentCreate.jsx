import React, { useState} from 'react';
import axios from "axios";

const CommentCreate = ({postId}) => {

    const [content, setContent] = useState("");

    const onSubmit = async (e) => {
        e.preventDefault();
        let result = await axios({
            method: 'post',
            url: `http://localhost:4001/posts/${postId}/comments`,
            data: {content: content},
        });
        setContent("");
    };

    return (
        <div>
            <form onSubmit={(e) => onSubmit(e)}>
                <div className="form-group">
                    <label>
                        New Comment
                    </label>
                    <input value={content} onChange={(e) => setContent(e.target.value)} className="form-control"/>
                    <button className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default CommentCreate;