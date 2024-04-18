import React, { useState } from 'react';

import './post.css';

const Categ = (props) => {
    const [selectedOption, setSelectedOption] = useState("");
  
    const handleChange = (event) => {
      setSelectedOption(event.target.value);
    };
  
    return (
      <div className="options">
        {props.options.map((option, index) => (
          <button 
            key={index} 
            id={option} 
            name="category" 
            value={option} 
            className={`option ${selectedOption === option ? 'selected' : ''}`}
            onClick={handleChange}
          >
            {option}
          </button>
        ))}
      </div>
    );
}


  
  
function UploadForm() {
    const [files, setFiles] = useState([]);
    const [previews, setPreviews] = useState([]);
  
    const handleFileChange = (event) => {
      if (event.target.files) {
        const fileArray = Array.from(event.target.files);
        if (fileArray.length > 4) {
          alert("You can only upload a maximum of 4 pictures");
          return;
        }
        setFiles(fileArray);
        const previewArray = fileArray.map(file => URL.createObjectURL(file));
        setPreviews(previewArray);
      }
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
     
      console.log(files);
      // Here you can handle the files, for example, send them to a server
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <div> 
          <input type='text' id='titlePost' name='title' placeholder='Title'style ={{marginBottom:5 }}></input>
          <textarea type="text" name ='postDesc' placeholder='Write a description for your post...' rows="4" cols="64" ></textarea>
        </div>
        <div >
             <Categ options={["Sell", "Free", "Look For", "Raffle", "Trade"]} />

        </div>
        <div>
          {previews.map((preview, index) => (
            <img key={index} src={preview} alt="Preview" style={{margin:'5px', width: '260px', height: '260px'}} />
          ))}
        </div>
        <div>
          <input type="file" id="files" name='images' accept="image/*" onChange={handleFileChange} multiple style={{display: 'none'}}/>
          <label htmlFor="files"><br/>
          <img src={'/img/image.png'} alt='' style={{width: '20px', height: '20px'}}></img>
            {' '}Photo </label>
          <div style={{display:'inline-block',float: 'right'}}>
            <button type="submit">Upload</button>
          </div>
        </div>
      </form>
    );
  }
  export default UploadForm;