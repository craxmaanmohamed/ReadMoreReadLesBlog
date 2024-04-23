import { useState } from 'react';
import './index.css';

function Blog() {
  const [data, setData] = useState([
    {id:1,done:false,Text:"Lorem Ipsum is simply dummy text of "+
   " the printing and typesetting industry. Lorem Ipsum has been the"+
  "   industry 's standard dummy text ever since the 1500s, when an "+
    " unknown printer took a galley of type and scrambled it to make"+
    "  a type specimen book. It has survived not only five centuries,"+
"      but also the leap into electronic typesetting, remaining essentially unchanged"}
]);
  const [userInput, setUserInput] = useState([]); // Initial user input placeholder

  function handleUserInput(event) {
    setUserInput(event.target.value);
  }

  function AddData() {
    setData([...data, { id: Date.now(), done: false, Text: userInput }]); // Add user input with unique ID
    setUserInput(''); // Clear input field
  }

  function update(id) {
    setData(data.map((item) =>( 
      item.id == id ? { ...item, done: !item.done } : item
    ))
    );
  }

  const truncationLength = 50; // User-configurable truncation length (optional)

  return (
    <>
      <div className="container">
        <h1>Blog website</h1>

        <div className="Input-add">
          <input
            type="text"
            onChange={handleUserInput}
            value={userInput}
            placeholder={"Enter text..."} // Use current user input as placeholder
          />
          <button onClick={AddData}>Add</button>
        </div>

        {data.map((dataItem) => (
          <div className="All-DataBlog" key={dataItem.id}>
            <p onClick={() => update(dataItem.id)}>
              {/* Display full text or truncated text based on "done" state */}
              {dataItem.done ? dataItem.Text : dataItem.Text.substring(0, 50) }
              <span
                style={{ fontWeight: 'bold' }}
                onClick={() => update(dataItem.id)}
              >
                {dataItem.done ? "" : "...Read more"}
              </span>
            </p>
            <div className="img">Img</div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Blog;

