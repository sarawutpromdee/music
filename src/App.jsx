import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaPlay, FaPlus, FaMinus } from 'react-icons/fa';

const App = () => {

  const initialSongs = [
    { id: 1, title: "Song 1", artist: "Artist 1", album: "Album 1", releaseDate: "2021-01-01", duration: "3:45", addedToList: false },
    { id: 2, title: "Song 2", artist: "Artist 2", album: "Album 2", releaseDate: "2021-02-01", duration: "4:30", addedToList: false },
  ];
  const [songs, setSongs] = useState(initialSongs);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    const filteredSongs = initialSongs.filter(song =>
      song.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSongs(filteredSongs);
  }, [searchTerm]);
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleAddOrRemoveFromList = (id) => {
    setSongs(songs.map(song => {
      if (song.id === id) {
        return {...song, addedToList: !song.addedToList};
      }
      return song;
    }));
  };
  return (
    <div className="container">
      <div className="row mb-4">
        <div className="col-md-3">
          <img src="good_times_with_bad_music_1050x700.jpg" alt="Playlist" className="img-fluid" />
        </div>
        <div className="col-md-9">
          <h2>Playlist</h2>
          <p>Song Name</p>
          <p>Genre</p>
          <button className="btn btn-primary"><FaPlay /></button>
        </div>
      </div>

      <div>
        <input type="text" className="form-control mb-3" placeholder="Search songs" onChange={handleSearch} />
        <table className="table">
          <thead>
            <tr>
              <th>Action</th>
              <th>Title</th>
              <th>Artist</th>
              <th>Album</th>
              <th>Release Date</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            {songs.map((song) => (
              <tr key={song.id}>
                <td>
                  <button className="btn" onClick={() => handleAddOrRemoveFromList(song.id)}>
                    {song.addedToList ? <FaMinus /> : <FaPlus />}
                  </button>
                </td>
                <td>{song.title}</td>
                <td>{song.artist}</td>
                <td>{song.album}</td>
                <td>{song.releaseDate}</td>
                <td>{song.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
