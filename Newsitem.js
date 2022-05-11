import React, { Component } from "react";

export class Newsitem extends Component {
  render() {
    let { title, description, img, url, author, date,source } = this.props;
    return (
      <>
        <div className="card my-3" style={{ width: "18rem" }}>

        <div style={{display:"flex", justifyContent:"flex-end",position:"absolute",right:"0"}}>
          <span class=" badge rounded-pill bg-danger">{source}</span>
        </div>

          <img src={img} className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small class="text-muted">
                By {!author ? "Unknown" : author} |{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a href={url} className="btn btn-sm btn-link text-dark">
              Read more
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default Newsitem;
