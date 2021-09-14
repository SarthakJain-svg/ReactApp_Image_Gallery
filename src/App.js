import React, { useState, useEffect, Suspense } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
const PaginationComponent = React.lazy(() => import('./Pagination.js'));

export default function App() {
  const[posts, setPosts] = useState([]);
  const[loading, setLoading] = useState(false);
  const[currentPage, setCurrentPage] = useState(0);
  const postsPerPage = 6;

  function fetchQueryResult() {
    let queryName = document.getElementById('search-bar').value;
    setCurrentPage(1);
    setLoading(true);
    fetch('https://api.unsplash.com/search/collections?client_id=8ob47p2bor1FSQwzaZfyrmG_fvhp7EJqQWllFJUBUEo&query=' + queryName + '&per_page=30')
    .then((response) => {
      return response.json();
    })
    .then((actualResponse) => {
      setPosts(actualResponse.results);
      setLoading(false);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  let lastPostIndex = currentPage * postsPerPage;
  let firstPostIndex = lastPostIndex - postsPerPage;
  let currentPosts = posts.slice(firstPostIndex, lastPostIndex);

  useEffect(() => {
    if(currentPage !== 0) window.localStorage.setItem('curentPage', currentPage);
  }, [currentPage]);

  useEffect(() => {
    setPosts(JSON.parse(window.localStorage.getItem('apiFetchData')) ?? []);
    setCurrentPage(window.localStorage.getItem('curentPage') ?? 0);
  }, []);

  useEffect(() => {
    if(posts.length !== 0) window.localStorage.setItem('apiFetchData', JSON.stringify(posts));
  }, [posts]);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  if(loading)
  {
    return (
      <div className="spinner-grow loader" role="status">
        <span className="sr-only">Loading...</span>
      </div>);
  }

  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <input id="search-bar" type="text" onKeyUp={(event) => {
          if(event.code === "Enter") fetchQueryResult()}} placeholder="Search for photos" />
        <button id="search-button" onClick={fetchQueryResult}><i className="fa fa-search"></i></button>
      </div>
      <div className="container-fluid">
        <div className="row text-center">
          <h1>Image Gallery</h1>
          <p>Your passion is capturing great moments. So is ours.</p>
          {(currentPosts.length !== 0) ? currentPosts.map((item, index) => (
            <div key={"div" + (index+1).toString()} className="col img-container">
                <img src={item.preview_photos[0].urls.regular} key={"img" + (index+1).toString()} alt={item.title.toLowerCase()} className="rounded mx-auto d-block" />
            </div>
          )) : 
          Array.from({length: postsPerPage}, (_, index) => index + 1).map((itemQuery) => (
          <div className="col img-container">
            <img src={"https://source.unsplash.com/1600x900/?" + itemQuery} className="rounded mx-auto d-block" />
          </div>))}
        </div>
      </div>
      <Suspense fallback={<div>...Loading Pagination</div>}>
        <PaginationComponent postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
      </Suspense>
    </>
  );
}