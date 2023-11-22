import React from 'react';
import { useSelector } from 'react-redux';
import {marked} from 'marked'; 

const MarkdownPreview = () => {
  const markdown = useSelector((state) => state.markdown);
  const previewHtml = { __html: marked.parse(markdown) };

  return (
    <div id='preview'>
      <div dangerouslySetInnerHTML={previewHtml} className='bg-danger'/>
    </div>
  );
};

export default MarkdownPreview;

