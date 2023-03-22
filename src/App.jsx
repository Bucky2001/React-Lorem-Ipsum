import { useState } from 'react';
import data from './data';

const App = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);

  return (
    <section className="section-center">
      <h4>TIRED OF BORING LOREM IPSUM?</h4>
      <form
        className="lorem-form"
        onSubmit={(e) => {
          e.preventDefault();
          setText(data.slice(0, count));
        }}
      >
        <label htmlFor="amount">Paragraphs:</label>
        <input
          type="number"
          min="1"
          max="9"
          value={count}
          onChange={(e) => {
            setCount(e.target.value);
          }}
        />
        <button type="submit" className="btn">
          Generate
        </button>
      </form>
      <article className="lorem-text">
        {text.map((data, i) => (
          <p key={i}>{data}</p>
        ))}
      </article>
    </section>
  );
};
export default App;
