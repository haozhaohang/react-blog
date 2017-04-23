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
        const ed = this.editor;
        this.editor.config.uploadImgUrl = '/api/upload';
        this.editor.config.uploadImgFns.onload = function (resultText, xhr) {
        // resultText 服务器端返回的text
        // xhr 是 xmlHttpRequest 对象，IE8、9中不支持
        // console.log(resultText, xhr);
        // 上传图片时，已经将图片的名字存在 editor.uploadImgOriginalName
        // console.log(ed);
        var originalName = ed.uploadImgOriginalName || '';
        console.log(JSON.parse(resultText));
        const aa  = JSON.parse(resultText).imgSrc;
        // 如果 resultText 是图片的url地址，可以这样插入图片：
         ed.command(null, 'InsertImage', aa);
        // 如果不想要 img 的 max-width 样式，也可以这样插入：
        // editor.command(null, 'InsertImage', resultText);
    };

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
