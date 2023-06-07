import React, { useState, useTransition } from 'react';
import ReactMarkdown from 'react-markdown';

function App() {
  const [markdown, setMarkdown] = useState('## markdown preview');
  return (
    <main>
      <section className='markdown'>
        <textarea
          className='input'
          value={markdown}
          onChange={(e) => setMarkdown}
        ></textarea>
        <article className='result'>{markdown}</article>
      </section>
    </main>
  );
}

export default App;
