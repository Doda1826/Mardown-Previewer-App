import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { updateMarkdown} from "../redux/actions";
import '../style.css'

const MarkdownEditor = () => {
    const dispatch = useDispatch();
    const markdown = useSelector((state) => state.markdown);

    //set default content on component mount
    useEffect(() => {
        dispatch(updateMarkdown(markdown))
    }, [dispatch, markdown]); 

    const handleInputChange = (e) => {
        dispatch(updateMarkdown(e.target.value));
    }

    return (
        <div>
            <textarea 
              value={markdown} 
              onChange={handleInputChange} 
              className="bg-info"
              id="editor"
            />
        </div>
    );
};

export default MarkdownEditor;