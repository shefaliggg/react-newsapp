import React, { Component } from 'react'

export class Newsitem extends Component {
  render() {
      let {title,description,img,url} = this.props;
    return (
      <>
        <div className="card my-3" style={{width:'18rem'}}>
            <img src={img} className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href={url} className="btn btn-sm btn-link text-dark">Read more</a>
            </div>
        </div>
      </>
    )
  }
}

export default Newsitem