//This section will display some of of the "profiles"
import React, { useEffect, useState } from 'react';
import {images} from '../../constants';
import axios from 'axios';
import './Profiles.css';

const Profiles = () => {
  const [formData, setFormData] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('all');

  useEffect(() => {
    async function fetchFormData() {
      try {
        const response = await axios.get('http://localhost:8000/form-data');
        setFormData(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchFormData();
  }, []);

  const handleGenreChange = (event) => {
    setSelectedGenre(event.target.value);
  };

  //this is the filter

  const filteredFormData = selectedGenre === 'all' ? formData : formData.filter(data => data.genre === selectedGenre);

  return (
    <div>
      <hr className='lineP'/>
      <div style={{ background: `url(${images.mguitar})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', }}>
        <h2>Profiles</h2>
        <div className="filter-container">
          <label htmlFor="genre-filter">Filter by Genre:</label>
          <select id="genre-filter" value={selectedGenre} onChange={handleGenreChange}>
            <option value="all">All</option>
            <option value="Rock">Rock</option>
            <option value="Pop">Pop</option>
            <option value="Jazz">Jazz</option>
            <option value="Blues">Blues</option>
          </select>
        </div>
        <div className="profile-card-container">
          {filteredFormData.map(data => (
            <div key={data._id} className="profile-card">
              <p>Name: {data.name}</p>
              <p>Type: {data.type}</p>
              <p>Genre: {data.genre}</p>
              <p>Instrument: {data.instrument}</p>
              {/* <p>URL: {data.url}</p> */}
              <img className="profile-image" src={data.url} alt="pimage"/>
              <p>About: {data.about}</p>
              <p>Preferred Type: {data.pref_type}</p>
              <p>Preferred Genre: {data.pref_genre}</p>
              <p>Preferred Instrument: {data.pref_instrument}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profiles;
