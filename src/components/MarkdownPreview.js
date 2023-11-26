import React from 'react';
import { useSelector } from 'react-redux';
import {marked} from 'marked'; 

const MarkdownPreview = () => {
  const markdown = useSelector((state) => state.markdown);
  const previewHtml = { __html: marked.parse(markdown) };

  return (
    <div>
      <h3 id='headings-name' className='bg-primary'>Previewer</h3>
      <div id='preview'>
        <div dangerouslySetInnerHTML={previewHtml} className='bg-main'/>
      </div>
    </div>  
  );
};

export default MarkdownPreview;

