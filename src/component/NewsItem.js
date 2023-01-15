import React, { Component } from 'react'

export class NewsItem extends Component {
    constructor() {
        super();
        this.state = {
            des: ["A Ukrainian tank fires at Russian positions near Kreminna, Lugansk region, Ukraine, on Jan. 12.Photographer: Anatolii Stepanov/AFP/Getty Images"]
        }
    }
    render() {
        let { title, description, imageUrl, newsUrl } = this.props;
        return (
            <div className="my-3">
                <div className="card">
                    <img src={!imageUrl ? "https://assets2.rockpapershotgun.com/TF2-asset-leak.jpg/BROK/thumbnail/1200x630/TF2-asset-leak.jpg" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{!description ? this.state.des : description}</p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Red More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
