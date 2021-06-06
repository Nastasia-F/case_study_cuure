import React, { useState } from "react";
import './app.css';
import './page.css';

const products = [
  {
    id: 1,
    name: "Yuri",
    text: "Avec la forme incurvée de son vaste dossier, le banc d’extérieur Yuri soigne son look exotique, solaire et graphique. La séduction opère au premier coup d’œil. Approchez donc et admirez son tressage au motif graphique et ses pieds inclinés qui signent son profil 60’s irrésistible [...]",
    src: "https://img.made.com/image/upload/c_pad,d_madeplusgrey.svg,f_auto,w_982,dpr_2.0,q_auto:good,b_rgb:f5f6f4/v4/catalog/product/asset/c/3/6/c/c36ccbfa2387f4ea5c47760414709f156fe5dffd_BENYUR001PNK_UK_Yuri_Garden_Bench_Multi_Woven_Green_ar3_2_LB02_LS.jpg",
    description: "Antequam per ponderibus publici ullo valido id nodum cum cum interiret eique abiectis scriptis sine auxilio id placuerat id commentis tractatus mollioribus cum effundendis clandestinis acciri obstaculo curarum ut urgentis obstaculo eique urgentis destitutus scriptis nisu et et ullo acciri commentis ut simulationem tamquam quibusve nimis sine antequam cum mollioribus Caesarem commentis obstaculo tamquam effundendis confidentia conloquiis acciri et valido antequam acciri rebus qua deliberanti ut tamquam incumberet aliis fieret obstaculo tractatus destitutus Gallum acciri deliberanti fieret deliberanti nisu placuerat mollioribus interiret obstaculo nimis proximis confidentia nocturnis tamquam et cogitabat rebus valido confidentia nisu per codicem quibusve deliberanti commentis simulationem.Accenderat super his incitatum propositum ad nocendum aliqua mulier vilis, quae ad palatium ut poposcerat intromissa insidias ei latenter obtendi prodiderat a militibus obscurissimis. quam Constantina exultans ut in tuto iam locata mariti salute muneratam vehiculoque inpositam per regiae ianuas emisit in publicum, ut his inlecebris alios quoque ad indicanda proliceret paria vel maiora."
  },
    {
    id: 2,
    name: "Emu",
    src: "https://img.made.com/image/upload/c_pad,d_madeplusgrey.svg,f_auto,w_982,dpr_2.0,q_auto:good,b_rgb:f5f6f4/v4/catalog/product/asset/c/6/b/a/c6ba2777fe78a6fc2b6cf5145db6f922f1dcddeb_SETEMU002SGY_UK_Emu_Garden_Powder_coated_Steel_Set_4_Round_Dining_Set_Soft_Grey_ar3_2_LB02_LS.jpg",
    text: "En italien, al fresco signifie « en plein air », et c’est exactement là que vous emmène l’ensemble table et chaises Emu. Beau et sobre avec sa structure minimaliste et son design monochromatique, il apportera une touche de style et de convivialité à votre extérieur [...]",
    description: "Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source."
  },
    {
    id: 3,
    name: "Josper",
    src: "https://img.made.com/image/upload/c_pad,d_madeplusgrey.svg,f_auto,w_982,dpr_2.0,q_auto:good,b_rgb:f5f6f4/v4/catalog/product/asset/2/5/1/5/25156ec4a0ce2d672c314d1b157a628a1c836576_OACJOS005BLK_UK_Josper_Low_Compact_Metal_Firepit_Black_ar3_2_LB02_LS.jpg",
    text: "Déclarez votre flamme à Josper, un design fonctionnel à la silhouette élégante et moderne. Imaginé par le Studio MADE, ce brasero est fabriqué dans un métal robuste. Dans un noir profond, il trouvera sans peine sa place dans votre espace extérieur. La vasque ronde n’est pas attachée à sa base [...]",
    description: "Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32."
  },
    {
    id: 4,
    name: "Product 4",
    src: "https://source.unsplash.com/daily",
    text: "Sed maximum est in amicitia parem esse inferiori. Saepe enim excellentiae quaedam sunt, qualis erat Scipionis in nostro, ut ita dicam, grege. Numquam se ille Philo, numquam Rupilio, numquam Mummio anteposuit, numquam inferioris ordinis amicis, Q. vero Maximum fratrem, egregium virum omnino, sibi nequaquam parem, quod is anteibat aetate, tamquam superiorem colebat suosque omnes per se posse esse ampliores volebat[...]",
    description: "Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32."
  },
    {
    id: 5,
    name: "Product 5",
    src: "https://source.unsplash.com/1600x900/?nature,water",
    text: "Sed maximum est in amicitia parem esse inferiori. Saepe enim excellentiae quaedam sunt, qualis erat Scipionis in nostro, ut ita dicam, grege. Numquam se ille Philo, numquam Rupilio, numquam Mummio anteposuit, numquam inferioris ordinis amicis, Q. vero Maximum fratrem, egregium virum omnino, sibi nequaquam parem, quod is anteibat aetate, tamquam superiorem colebat suosque omnes per se posse esse ampliores volebat[...]",
    description: "Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32."
  },
    {
    id: 6,
    name: "Product 6",
    src: "https://source.unsplash.com/weekly?water",
    text: "Sed maximum est in amicitia parem esse inferiori. Saepe enim excellentiae quaedam sunt, qualis erat Scipionis in nostro, ut ita dicam, grege. Numquam se ille Philo, numquam Rupilio, numquam Mummio anteposuit, numquam inferioris ordinis amicis, Q. vero Maximum fratrem, egregium virum omnino, sibi nequaquam parem, quod is anteibat aetate, tamquam superiorem colebat suosque omnes per se posse esse ampliores volebat[...]",
    description: "Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32."
  },
];


class App extends React.Component {

  render() {
    return (
      <div className='container'>
        <h1 className='heading_primary'>Cuure</h1>
        <CardsContainer/>
      </div>
    );
  }
}


class CardsContainer extends React.Component {

   constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      selectedCard: {}
    }
  }

  handleModalOpen = (id) => {
    console.log(id);
    const modalOpen = true;
    const selectedCard = products.filter((product) => product.id === id)[0];
    this.setState({
      selectedCard,
      modalOpen
    });
  }

  onCloseClick = () => {
    const modalOpen = false;
    this.setState({modalOpen});
  }

  render() {
    return (
    <section className='section_cards'>
      {
        products.map((product) => {
        return <Card
                key={product.id}
                id={product.id}
                name={product.name}
                text={product.text}
                src={product.src}
                handleModalOpen={this.handleModalOpen} />
        })
      }
      <Modal data={this.state.selectedCard} onCloseClick={this.onCloseClick} isOpen={this.state.modalOpen} />
    </section>
);
  }
}

const Card = (props) => (
  <figure onClick={() => props.handleModalOpen(props.id)} className='card'>
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
            <article className='modal_text'>
              <h2 className='modal_heading'>{this.props.data.name}</h2>
              <p className=''>{this.props.data.description}</p>
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

