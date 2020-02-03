import React from 'react';

class ImageCard extends React.Component {
    imageRef = React.createRef();
    state = { spans: 0 };

    setSpans = () => {
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height / 10);

        this.setState({ spans });
    }

    render() {
        const { description, url } = this.props;
        return (
            <div style={ { gridRowEnd: `span ${this.state.spans}` } }>
                <img ref={this.imageRef} alt={description} src={url} onLoad={this.setSpans}/>
            </div>
        )
    }
}

export default ImageCard;