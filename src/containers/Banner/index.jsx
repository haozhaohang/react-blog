import React, { Component } from 'react';

// css
import style from './index.scss';

let timer;

const handlePicOver = () => {
    clearInterval(timer);
};

class Banner extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentRotate: 0,
        };

        this.handleChangePrev = this.handleChangePrev.bind(this);
        this.handleChangeNext = this.handleChangeNext.bind(this);
        this.handlePicOut = this.handlePicOut.bind(this);
    }

    componentWillUnmount() {
        clearInterval(timer);
    }

    componentDidlMount() {
        timer = setInterval(() => {
            this.setState({
                currentRotate: this.state.currentRotate - 90,
            });
        }, 6000);
    }

    handleCreateList() {
        const iLen = 1200 / 40;
        const aHtml = [];
        let zIndex = 0;
        let aStyle = {};
        let liStyle = {};
        for (let i = 0; i < iLen; i += 1) {
            i > iLen / 2 ? zIndex-- : zIndex++;
            aStyle = { backgroundPosition: `${-40 * i}px 0px` };
            liStyle = { transform: `rotateX( ${this.state.currentRotate}deg )`, zIndex, transition: `0.4s ${i * 0.05}s all ease` };
            aHtml.push(
                <li key={`li${i}`} style={liStyle}>
                    <a style={aStyle} href="javascript:void(0)" />
                    <a style={aStyle} href="javascript:" />
                    <a style={aStyle} href="javascript:" />
                    <a style={aStyle} href="javascript:" />
                    <span />
                    <span />
                </li>,
            );
        }
        return aHtml;
    }

    handleChangePrev() {
        this.setState({
            currentRotate: this.state.currentRotate + 90,
        });
    }

    handleChangeNext() {
        this.setState({
            currentRotate: this.state.currentRotate - 90,
        });
    }

    handlePicOut() {
        timer = setInterval(() => {
            this.setState({
                currentRotate: this.state.currentRotate - 90,
            });
        }, 6000);
    }

    render() {
        return (
            <div className={style.banner}>
                <ul
                    className={style.picList}
                    onMouseOver={handlePicOver}
                    onMouseOut={this.handlePicOut}
                >
                    {
                        this.handleCreateList()
                    }
                </ul>
                <ol className={style.btnList} />
                <span
                    className={style.prev}
                    onClick={this.handleChangePrev}
                    onMouseOver={handlePicOver}
                    onMouseOut={this.handlePicOut}
                />
                <span
                    className={style.next}
                    onClick={this.handleChangeNext}
                    onMouseOver={handlePicOver}
                    onMouseOut={this.handlePicOut}
                />
            </div>
        );
    }
}

export default Banner;
