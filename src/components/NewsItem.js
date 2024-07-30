
// export class NewsItem extends Component {

//   render() {
//     let { title, description, imageUrl, newsUrl, author, date, source } = props;
//     let defaultImg = "./news.jpg";

//     return (
//       <div className="my-3">
//         {/* <div className="card" style={{ width: "100%" , height:"30rem" ,overflow:"scroll" }}> */}
//         <div className="card" >
          
//           <span className="position-absolute top-0 translate-middle badge rounded-pill bg-success" style={{ left: '89%', zIndex: '1' }}>{source}
//           </span>
//           <img src={imageUrl ? imageUrl : defaultImg} className="card-img-top" alt="..." />
//           <div className="card-body">
//             <h5 className="card-title" >{title}</h5>
//             <p className="card-text">{description}</p>
//             <p className="card-"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toUTCString()}</small></p>
//             <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">
//               Read More
//             </a>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

import React from 'react'

function NewsItem(props) {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  let defaultImg = "./news.jpg";

  return (
    <div className="my-3">
        {/* <div className="card" style={{ width: "100%" , height:"30rem" ,overflow:"scroll" }}> */}
        <div className="card" >
          
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-success" style={{ left: '89%', zIndex: '1' }}>{source}
          </span>
          <img src={imageUrl ? imageUrl : defaultImg} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title" >{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toUTCString()}</small></p>
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
  )
}

export default NewsItem