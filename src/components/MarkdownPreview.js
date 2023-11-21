import React from 'react';
import { useSelector } from 'react-redux';
import * as marked from 'marked';

const MarkdownPreview = () => {
    const markdown = useSelector((state) => state.markdown);
    const previewHtml = { __html: marked(markdown) };

    return (
        <div>
            <div dangerouslySetInnerHTML={previewHtml}/>
        </div>
    )
}

export default MarkdownPreview;

