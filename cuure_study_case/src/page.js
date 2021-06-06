import './page.css';
import React from 'react';
// import App from './app.js';

function Paginate(){

  const [currentPage, setCurrentPage] = React.useState(4);
  let maxPages = 5;
  // empty array to hold page items
  let items = [];
  let leftSide = currentPage - 2;
  if(leftSide <= 0 ) leftSide=1;
  let rightSide = currentPage + 2;
  if(rightSide>maxPages) rightSide = maxPages;
  for (let number = leftSide ; number <= rightSide; number++) {
    items.push(
      <div key={number} className={(number === currentPage ? 'paginate-effect active' : 'paginate-effect')} onClick={()=>{ setCurrentPage(number)}}>
        {number}
      </div>,
    );
  }

  const nextPage = () => {
    if(currentPage<maxPages){
      setCurrentPage(currentPage+1)
    }
  }

  const prevPage = () => {
    if(currentPage>1){
      setCurrentPage(currentPage-1)
    }
  }

  // definir currentPage == cards

  const paginationRender = (
    <div className="flex-container">
      <div> { currentPage }</div>
      <div className="paginate">
        <div className="paginate-effect" onClick={prevPage}></div>
          {items}
        <div className="paginate-effect" onClick={nextPage}></div>
      </div>
    </div>
  );
  return (paginationRender);
}

export default Paginate;

