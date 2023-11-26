import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import MarkdownEditor from './components/MarkdownEditor';
import MarkdownPreview from './components/MarkdownPreview';
import './App.css';


function App() {
  return (
    <Provider store={store}>
      <div id='main'>
        <h1 id='welcome-heading'>Markdown Previewer</h1>
        <MarkdownEditor/>
        <br/>
        <MarkdownPreview/>
        <br/>
      </div>
    </Provider>
  );
}

export default App;
