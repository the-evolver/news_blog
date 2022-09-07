import React from "react";

const NewsItem = (props) =>  {
        let { title, description, imageUrl, newsUrl, author, date, source } = props;
        return (
            <div className="my-3">
                <div className="card">
                    <div className="badge rounded-pill bg-danger" style={{display : 'flex',
                    position: "absolute",
                    right: '0'}}> {source}                      
                </div>
                <img 
                    src={
                        !imageUrl
                            ? "https://images.news18.com/ibnlive/uploads/2022/06/star-165553670816x9.jpg"
                            : imageUrl
                        }
                    alt="..."
                />
                <a href={newsUrl}
                        target="_blank"
                        rel="noreferrer" style = {{textDecoration: "none"}}>
                <div className="card-body">
                    <h5 className="card-title" style = {{color : "#383838"}} >{title}...</h5> 
                    <p className="card-text" style = {{color : "#383838"}}>{description}.... </p>
                    <p className="card-text" >
                        <small className="text-muted">
                            By {!author ? "unknown" : author}, Last updated{" "}
                            <b>{new Date(date).toGMTString()}</b>.
                        </small>
                    </p>
                </div>
                </a>
            </div>
            </div >
        );
}
export default NewsItem;
