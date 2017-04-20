import React, { Component, PropTypes } from 'react';
import 'wangeditor';

// css
import style from './index.styl';

class Editor extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { id, content } = this.props;

        this.editor = new window.wangEditor(id);
        this.editor.config.uploadImgUrl = '/upload';
        this.editor.create();

        // 初始化内容
        this.editor.$txt.html(content);
    }

    // 获取内容
    getContent() {
        var content = this.editor.$txt.html();

        return content;
    }

    render() {
        const { id, style } = this.props;

        return (
            <div className="editor-wrapper">
                <div id={id} style={style} contentEditable="true"></div>
            </div>
        );
    }
}

export default Editor;
