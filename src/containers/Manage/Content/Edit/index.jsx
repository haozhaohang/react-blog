import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { Form, Input, Button, Breadcrumb } from 'antd';
import { connect } from 'react-redux';
import * as actions from 'Actions/contentEdit';
import { goBack } from 'react-router-redux';
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

        this.handleSubmint = this.handleSubmint.bind(this);
    }

    componentDidMount() {
        const { id, fetchContentEdit } = this.props;
        const params = {
            id,
        };

        fetchContentEdit(params);
    }

    async handleSubmint() {
        const { id, fetchSubmit, fetchContentUpdate, goBack, form: { validateFields } } = this.props;
        const content = this.refs.edit.getContent();
        let params;

        validateFields((error, values) => {
            if (error) {
                return;
            }

            params = {
                ...values,
                id,
                content
            };
        })

        try {
            await id ?  fetchContentUpdate(params) : fetchSubmit(params);
        } catch (e) {
            return;
        }

        goBack();
    }


    render() {
        const { content } = this.state;
        const { id, info, form: { getFieldDecorator } } = this.props;

        const titleDecorator = getFieldDecorator('title', {
            initialValue: info.title,
            rules: [
                { required: true, type: 'string', message: '标题为必填参数' }
            ]
        })

        return (
            <div className="content-edit-wrapper">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/manage/content">内容管理</Link></BreadcrumbItem>
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
                {
                    info.content || !id ? <Editor
                        id="edit"
                        style={editorStyle}
                        ref="edit"
                        content={info.content}
                    /> :
                    null
                }
                <Button onClick={this.handleSubmint}>保存</Button>
                <div dangerouslySetInnerHTML={{__html: content}} />
            </div>
        );
    }
}

const mapStateToProps = ({ contentEdit }, { location: { query } }) => {
    const { info } = contentEdit;
    const { id } = query;

    return {
        id,
        info,
    };
};

const mapDispatchToProps = { ...actions, goBack };

ContentEdit.propTypes = {
    id: PropTypes.string,
    info: PropTypes.object.isRequired,
    fetchSubmit: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(ContentEdit));
