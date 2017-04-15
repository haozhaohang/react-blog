import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { Form, Input, Button, Breadcrumb, Radio } from 'antd';
import { connect } from 'react-redux';
import * as actions from 'Actions/userEdit';
import { push } from 'react-router-redux';

// css
import './index.styl';

const { Item: FormItem } = Form;
const { Item: BreadcrumbItem } = Breadcrumb;
const { Group: RadioGroup } = Radio;
const formItemLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 14 },
};

const tailFormItemLayout = {
    wrapperCol: {
        span: 24,
        offset: 6,
    },
};

class UserEdit extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        const { status, id, fetchUserEdit } = this.props;
        const params = {
            id
        };

        fetchUserEdit(params);
    }

    async handleSubmit(e) {
        // 阻止表单的默认事件
        e.preventDefault();

        const { status, id, fetchSubmit, fetchUserUpdate, push, form: { validateFields } } = this.props;
        let params;

        validateFields((errors, values) => {

            if (errors) {
                return;
            }

            params = {
                ...values,
                id,
            }
        });

        try {
            await status ? fetchSubmit(params) : fetchUserUpdate(params);
        } catch (e) {
            return;
        }

        push('/manage');

    }

    render() {
        const { info: { username, password, isAdmin }, form: { getFieldDecorator } } = this.props;

        const usernameDecorator = getFieldDecorator('username', {
            initialValue: username,
            rules: [
                { required: true, message: '请输入账号名' }
            ],
        });

        const passwordDecorator = getFieldDecorator('password', {
            initialValue: password,
            rules: [
                { required: true, message: '请输入密码' }
            ],
        });

        const rePasswordDecorator = getFieldDecorator('rePassword', {
            initialValue: password,
            rules: [
                { required: true, message: '请再次输入密码' }
            ],
        });

        const isAdminDecorator = getFieldDecorator('isAdmin', {
            initialValue: isAdmin,
            rules: [
                { required: true, message: '请选择是否是管理员' }
            ],
        });

        return (
            <div className="user-edit-wrapper">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/manage">用户管理</Link></BreadcrumbItem>
                    <BreadcrumbItem>编辑</BreadcrumbItem>
                </Breadcrumb>
                <Form layout="horizontal" onSubmit={this.handleSubmit}>
                    <FormItem label="账号" {...formItemLayout}>
                        {usernameDecorator(
                            <Input placeholder="请输入账号名" />
                        )}
                    </FormItem>

                    <FormItem label="密码" {...formItemLayout}>
                        {passwordDecorator(
                            <Input type="password" placeholder="请输入密码"/>
                        )}
                    </FormItem>

                    <FormItem label="确认密码" {...formItemLayout}>
                        {rePasswordDecorator(
                            <Input type="password" placeholder="请输入密码"/>
                        )}
                    </FormItem>

                    <FormItem label="是否为管理员" {...formItemLayout}>
                        {isAdminDecorator(
                            <RadioGroup>
                                <Radio value={1}>是</Radio>
                                <Radio value={0}>否</Radio>
                            </RadioGroup>
                        )}
                    </FormItem>

                    <FormItem {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit" size="large">保存</Button>
                        <Link to="/manage"><Button size="large">返回</Button></Link>
                    </FormItem>
                </Form>
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

UserEdit.propTypes = {
    id: PropTypes.string,
    info: PropTypes.object.isRequired,
    fetchSubmit: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(UserEdit));
