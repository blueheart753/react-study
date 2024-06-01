import { useState } from 'react';
import './Editor.css';

const Editor = ({ onCreate }) => {
  const [content, setContent] = useState('');

  const onChangeContent = e => {
    setContent(e.target.value);
  };
  const onSubmit = () => {
    onCreate();
  };
  return (
    <div className="Editor">
      <input
        type="text"
        placeholder="새로운 Todo..."
        onChange={onChangeContent}
        value={content}
      />
      <button onClick={onSubmit}>추가</button>
    </div>
  );
};

export default Editor;
