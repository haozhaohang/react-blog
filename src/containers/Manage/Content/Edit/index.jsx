import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { Form, Input, Button, Breadcrumb } from 'antd';
import { connect } from 'react-redux';
import * as actions from 'Actions/contentEdit';
import { push } from 'react-router-redux';
import Editor from 'Components/Editor';

// css
import './index.styl';

const { Item: FormItem } = Form;
const { Item: BreadcrumbItem } = Breadcrumb;

const editorStyle = {
    width: "100%",
    height: "500px",
};

class ContentEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: ''
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
            content
        });
    }

    handleSubmint() {
        const { content } = this.props;
        const { fetchSubmit, form: validateFields } = this.props;

        validateFields((error, values) => {
            if (error) {
                return;
            }

            const params = {
                ...values,
                content
            };

            fetchSubmit(params);
        })
    }


    render() {
        const { content } = this.state;
        const { form: { getFieldDecorator } } = this.props;

        const titleDecorator = getFieldDecorator('title', {
            rules: [
                { required: true, type: 'string', message: '标题为必填参数' }
            ]
        })

        return (
            <div className="content-edit-wrapper">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/manage">内容管理</Link></BreadcrumbItem>
                    <BreadcrumbItem>编辑</BreadcrumbItem>
                </Breadcrumb>
                <div>
                    <Form layout="horizontal">
                        <FormItem label="文章标题">
                            {titleDecorator(
                                <Input />
                            )}
                        </FormItem>
                    </Form>
                </div>
                <Editor
                    id="edit"
                    style={editorStyle}
                    getContent={this.handleGetContent}
                    ref="edit"
                />
                <Button onClick={this.handleGetContent}>保存</Button>
                <div dangerouslySetInnerHTML={{__html: content}} />
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
