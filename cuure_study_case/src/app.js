import React, { useState } from "react";
import './app.css';
import './page.css';

const cards = [
  {
    id: 1,
    name: "Product 1",
    // text: "Sed maximum est in amicitia parem esse inferiori. Saepe enim excellentiae quaedam sunt, qualis erat Scipionis in nostro, ut ita dicam, grege. Numquam se ille Philo, numquam Rupilio, numquam Mummio anteposuit, numquam inferioris ordinis amicis, Q. vero Maximum fratrem, egregium virum omnino, sibi nequaquam parem, quod is anteibat aetate, tamquam superiorem colebat suosque omnes per se posse esse ampliores volebat[...]",
    src: "https://images.unsplash.com/photo-1534531173927-aeb928d54385?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    description: ""
  },
    {
    id: 2,
    name: "Product 2",
    src: "https://source.unsplash.com/user/erondu",
    // text: "Sed maximum est in amicitia parem esse inferiori. Saepe enim excellentiae quaedam sunt, qualis erat Scipionis in nostro, ut ita dicam, grege. Numquam se ille Philo, numquam Rupilio, numquam Mummio anteposuit, numquam inferioris ordinis amicis, Q. vero Maximum fratrem, egregium virum omnino, sibi nequaquam parem, quod is anteibat aetate, tamquam superiorem colebat suosque omnes per se posse esse ampliores volebat[...]";
    description: "Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source."
  },
    {
    id: 3,
    name: "Product 3",
    src: "https://source.unsplash.com/random",
    // text: "Sed maximum est in amicitia parem esse inferiori. Saepe enim excellentiae quaedam sunt, qualis erat Scipionis in nostro, ut ita dicam, grege. Numquam se ille Philo, numquam Rupilio, numquam Mummio anteposuit, numquam inferioris ordinis amicis, Q. vero Maximum fratrem, egregium virum omnino, sibi nequaquam parem, quod is anteibat aetate, tamquam superiorem colebat suosque omnes per se posse esse ampliores volebat[...]";
    description: "Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32."
  },
    {
    id: 4,
    name: "Product 4",
    src: "https://source.unsplash.com/daily",
    // text: "Sed maximum est in amicitia parem esse inferiori. Saepe enim excellentiae quaedam sunt, qualis erat Scipionis in nostro, ut ita dicam, grege. Numquam se ille Philo, numquam Rupilio, numquam Mummio anteposuit, numquam inferioris ordinis amicis, Q. vero Maximum fratrem, egregium virum omnino, sibi nequaquam parem, quod is anteibat aetate, tamquam superiorem colebat suosque omnes per se posse esse ampliores volebat[...]";
    description: "Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32."
  },
    {
    id: 5,
    name: "Product 5",
    src: "https://source.unsplash.com/1600x900/?nature,water",
    // text: "Sed maximum est in amicitia parem esse inferiori. Saepe enim excellentiae quaedam sunt, qualis erat Scipionis in nostro, ut ita dicam, grege. Numquam se ille Philo, numquam Rupilio, numquam Mummio anteposuit, numquam inferioris ordinis amicis, Q. vero Maximum fratrem, egregium virum omnino, sibi nequaquam parem, quod is anteibat aetate, tamquam superiorem colebat suosque omnes per se posse esse ampliores volebat[...]";
    description: "Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32."
  },
    {
    id: 6,
    name: "Product 6",
    src: "https://source.unsplash.com/weekly?water",
    // text: "Sed maximum est in amicitia parem esse inferiori. Saepe enim excellentiae quaedam sunt, qualis erat Scipionis in nostro, ut ita dicam, grege. Numquam se ille Philo, numquam Rupilio, numquam Mummio anteposuit, numquam inferioris ordinis amicis, Q. vero Maximum fratrem, egregium virum omnino, sibi nequaquam parem, quod is anteibat aetate, tamquam superiorem colebat suosque omnes per se posse esse ampliores volebat[...]";
    description: "Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32."
  },
];


class App extends React.Component {

  render() {
    return (
      <div className='container'>
        <h1 className='heading-primary'>Cuure</h1>
        <CardsContainer/>
        <cards/>
      </div>
    );
  }
}


class CardsContainer extends React.Component {

   constructor(props) {
    super(props);
    this.state = {
      openModal: false,
      selectedCard: {}
    }
  }

  handleModalOpen = (id) => {
    console.log(id);
    const openModal = true;
    const selectedCard = cards.filter((card) => card.id === id)[0];
    this.setState({
      selectedCard,
      openModal
    });
  }

  onCloseClick = () => {
    const openModal = false;
    this.setState({openModal});
  }

  render() {
    return (
    <section className='section-cards'>
      {
         cards.map((card) => {
           return <Card
                    key={card.id}
                    id={card.id}
                    name={card.name}
                    text={card.text}
                    src={card.src}
                    handleModalOpen={this.handleModalOpen} />
         })
      }
      <Modal data={this.state.selectedCard} onCloseClick={this.onCloseClick} isOpen={this.state.openModal} />
    </section>
);
  }
}

const Card = (props) => (
  <figure onClick={() => props.handleModalOpen(props.id)} className='card'>
    <img src={props.src} className='card__img' alt="" />
    <div className='card__caption'>
      <h2>{props.name}</h2>
      <p>{props.text}</p>
    </div>
  </figure>
);

class Modal extends React.Component {

  render() {
    return (
      <section className={`modal ${this.props.isOpen && 'modal--open'}`} >
        <div className='modal__box'>
        <span onClick={this.props.onCloseClick} className='modal__times'>&times;</span>
          <div className='modal__content'>
            <img className='modal__img' src={this.props.data.src} alt="" />
            <article className='modal__txt'>
              <h2 className='modal__heading'>{this.props.data.name}</h2>
              <p className=''> {this.props.data.description} </p>
            </article>
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

