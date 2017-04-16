import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { Form, Button, Breadcrumb } from 'antd';
import { connect } from 'react-redux';
import * as actions from 'Actions/userEdit';
import { push } from 'react-router-redux';
import Editor from 'Components/Editor';

// css
import './index.styl';

const { Item: BreadcrumbItem } = Breadcrumb;

class ContentEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: {__html: ''}
        };

        this.handleGetContent = this.handleGetContent.bind(this);
    }

    componentDidMount() {
        const { status, id, fetchUserEdit } = this.props;
        const params = {
            id
        };

        fetchUserEdit(params);
    }

    handleGetContent() {
        const content = this.refs.edit.getContent();
        this.setState({
            content: {__html: content}
        });
    }


    render() {
        const { content } = this.state;

        const editorStyle = {
            width: "100%",
            height: "500px",
        };

        return (
            <div className="content-edit-wrapper">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/manage">内容管理</Link></BreadcrumbItem>
                    <BreadcrumbItem>编辑</BreadcrumbItem>
                </Breadcrumb>
                <div className="main-containers">
                    <Editor
                        id="edit"
                        style={editorStyle}
                        getContent={this.handleGetContent}
                        ref="edit"
                    />
                </div>
                <Button onClick={this.handleGetContent}>保存</Button>
                <div dangerouslySetInnerHTML={content} />
            </div>
        );
    }
}

const mapStateToProps = ({ userEdit }, { location: { query } }) => {
    const { info } = userEdit;
    const { id } = query;

    return {
        id,
        status: !id,
        info,
    };
};

const mapDispatchToProps = { ...actions, push };

ContentEdit.propTypes = {
    id: PropTypes.string,
    info: PropTypes.object.isRequired,
    fetchSubmit: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(ContentEdit));
