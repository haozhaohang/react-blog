import React, { Component } from 'react';

// css
import style from './index.scss';

let timer;

class Banner extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            currentRotate: 0
        };
    }
    _createList() {
        let iLen = 1200 / 40;
        let aHtml = [];
        let zIndex = 0;
        let aStyle = {};
        let liStyle = {};
        for ( let i = 0; i < iLen; i++ ) {
            i > iLen / 2 ? zIndex-- : zIndex ++;
            aStyle = { backgroundPosition: `${ -40 * i }px 0px` };
            liStyle = { transform: `rotateX( ${ this.state.currentRotate }deg )`, zIndex: zIndex, transition: `0.4s ${ i * 0.05 }s all ease` };
            aHtml.push(
                <li key={ 'li' + i } style={ liStyle }>
                    <a style={ aStyle } href="javascript:;"></a>
                    <a style={ aStyle } href="javascript:;"></a>
                    <a style={ aStyle } href="javascript:;"></a>
                    <a style={ aStyle } href="javascript:;"></a>
                    <span></span>
                    <span></span>
                </li>
            );
        }
        return aHtml;
    }
    _changePrev() {
        this.setState({
           currentRotate: this.state.currentRotate + 90
        });
    }
    _changeNext() {
        this.setState({
            currentRotate: this.state.currentRotate - 90
        });
    }
    _picOver() {
        clearInterval( timer );
    }
    _picOut() {
        timer = setInterval( ()=>{
            this.setState({
                currentRotate: this.state.currentRotate - 90
            })
        }, 6000 );
    }
    componentDidlMount() {
        timer = setInterval( ()=>{
            this.setState({
                currentRotate: this.state.currentRotate - 90
            })
        }, 6000 );
    }
    componentWillUnmount() {
        clearInterval( timer );
    }
    render() {
        return(
            <div className={ style.banner }>
                <ul className={ style.picList } onMouseOver={ this._picOver.bind( this ) } onMouseOut={ this._picOut.bind( this ) }>
                    {
                        this._createList()
                    }
                </ul>
                <ol className={ style.btnList }></ol>
                <span className={ style.prev } onClick={ this._changePrev.bind( this ) } onMouseOver={ this._picOver.bind( this ) } onMouseOut={ this._picOut.bind( this ) }></span>
                <span className={ style.next } onClick={ this._changeNext.bind( this ) } onMouseOver={ this._picOver.bind( this ) } onMouseOut={ this._picOut.bind( this ) }></span>
            </div>
        );
    }
}

export default Banner;