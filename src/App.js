import React from "react";
import './App.css';
import {products} from './Data'

class App extends React.Component {

  render() {
    return (
      <div className='container'>
        <h1 className='heading_primary'>Cuure</h1>
        <ProductPage/>
      </div>
    );
  }
}

const PRODUCT_NUMBER_PER_PAGE = 6

class ProductPage extends React.Component {

   constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      selectedProduct: {},
      currentPage: 1
    }
  }

  handleModalOpen = (id) => {
    console.log(id);
    const modalOpen = true;
    const selectedProduct = products.find((product) => product.id === id);
    this.setState({
      selectedProduct,
      modalOpen
    });
  }

  onCloseClick = () => {
    const modalOpen = false;
    this.setState({modalOpen});
  }

  render() {
    const { currentPage } = this.state
    const displayedProducts = products.slice((currentPage - 1) * PRODUCT_NUMBER_PER_PAGE, currentPage * PRODUCT_NUMBER_PER_PAGE)

    return (
      <React.Fragment>
        <section className='section_cards'>
          {
            displayedProducts.map((product) => {
            return <ProductCard
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    text={product.text}
                    src={product.src}
                    onSelect={this.handleModalOpen} />
            })
          }

          <Modal data={this.state.selectedProduct} onCloseClick={this.onCloseClick} isOpen={this.state.modalOpen} />
        </section>

        <PaginationFooter
          currentPage={currentPage}
          maxPageNumber={products.length/PRODUCT_NUMBER_PER_PAGE}
          onChange={newPage => this.setState({currentPage:newPage})}
        />
      </React.Fragment>
  );
  }
}

const PaginationFooter = ({ currentPage, maxPageNumber, onChange }) => {
  return (

    <div className="flex-container">
      <div>{ currentPage }</div>
      <div className="paginate">
        <div className="arrow" onClick={() => currentPage>1 ? onChange(currentPage-1) : undefined}> ← </div>
        <div className="arrow circle" onClick={() => currentPage<maxPageNumber ? onChange(currentPage+1) : undefined}> → </div>
      </div>
    </div>
  )
}

const ProductCard = (props) => (
  <figure onClick={() => props.onSelect(props.id)} className='card'>
    <img src={props.src} className='card_img' alt="" />
    <div className='cards'>
      <h2>{props.name}</h2>
      <p>{props.text}</p>
    </div>
  </figure>
);

class Modal extends React.Component {

  render() {
    return (
      <section className={`modal ${this.props.isOpen && 'modal_open'}`} >
        <div className='modal_box'>
        <span onClick={this.props.onCloseClick} className='modal_close'>&times;</span>
          <div className='modal_content'>
            <img className='modal_img' src={this.props.data.src} alt="" />
            <div className='modal_text'>
              <h2 className='modal_heading'>{this.props.data.name}</h2>
              <p className=''>{this.props.data.description}</p>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default App;

// Paginate
// -------------------------------------------------


// function Paginate(){

//   const [currentPage, setCurrentPage] = React.useState(4);
//     let maxPages = 5;
//     // empty array to hold page items
//     let items = [];
//     let leftSide = currentPage - 2;
//     if(leftSide <= 0 ) leftSide=1;
//     let rightSide = currentPage + 2;
//     if(rightSide>maxPages) rightSide = maxPages;
//     // loop
//     for (let number = leftSide ; number <= rightSide; number++) {
//       items.push(
//         <div key={number} className={(number === currentPage ? 'paginate-effect active' : 'paginate-effect')} onClick={()=>{ setCurrentPage(number)}}>
//           {number}
//         </div>,
//       );
//   }

//   const productPerPage = 3;

//   function nextPage() {
//     setCurrentPage((page) => page + 1);
//   }

//   function previousPage() {
//     setCurrentPage((page) => page - 1);
//   }

//   function changePage(event) {
//     const pageNumber = Number(event.target.productPerPage);
//     setCurrentPage(pageNumber);
//   }

//   const paginationRender = () => {
//     <div className="flex-container">
//       {/*currentPage = cards*/}
//       <div> currentPage : { currentPage }</div>
//       <div className="paginate">
//         <div className="paginate-effect" onClick={previousPage}></div>
//         <div className="paginate-effect" onClick={nextPage}></div>
//       </div>
//     </div>
//   }
// }

