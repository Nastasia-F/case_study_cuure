import React from "react";
import './App.css';
import {products} from './Data'

class App extends React.Component {

  render() {
    return (
      <div className='container'>
        <h1 className='heading_primary'>Meuble de jardin</h1>
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
      <div class="cercle">{ currentPage }</div>
      <div className="paginate">
        <div class="arrow" onClick={() => currentPage>1 ? onChange(currentPage-1) : undefined}> ← </div>
        <div class="arrow" onClick={() => currentPage<maxPageNumber ? onChange(currentPage+1) : undefined}> → </div>
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
