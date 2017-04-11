import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Button, Table, Form, Input } from 'antd';
import { fetchList, fetchUserDel, fetchSearch  } from 'Actions/user';
import { updateQuery } from 'Actions/router';
import { equalByProps } from 'Assets/js/util';

// css
import './index.styl';

const { Item: FormItem } = Form;

class User extends Component {
    constructor(props) {
        super(props);

        this.columns = [
            {
                title: 'ID',
                dataIndex: '_id',
            },
            {
                title: '用户名',
                dataIndex: 'username',
            },
            {
                title: '创建时间',
                dataIndex: 'password',
            },
            {
                title: '是否是管理员',
                dataIndex: 'isAdmin',
                render: (val) => {
                    const res = val ? '是' : '否';

                    return res;
                },
            },
            {
                title: '操作',
                render: ({ _id }) =>
                (
                    <div>
                        <Link to={`manage/user/edit?id=${_id}`}>
                            <Button
                                type="primary"
                            >
                                编辑
                            </Button>
                        </Link>
                        <Button
                            type="danger"
                            onClick={() => this.handleDel(_id)}
                        >
                            删除
                        </Button>
                    </div>
                ),
            },
        ];

        this.handleChange = this.handleChange.bind(this);
        this.handleDel = this.handleDel.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        const { pageIndex, fetchList } = this.props;
        const params = {
            pageIndex,
        };

        fetchList(params);
    }

    componentDidUpdate(preProps) {
        const { pageIndex, fetchList } = this.props;
        const fields = ['pageIndex'];
        const params = {
            pageIndex,
        };

        if (equalByProps(preProps, this.props, fields)) {
            fetchList(params);
        }
    }

    handleChange(val) {
        const { onchange } = this.props;
        const { current: pageIndex } = val;
        const params = {
            pageIndex,
        };

        onchange(params);
    }

    handleDel(val) {
        const { fetchUserDel } = this.props;
        const params = {
            id: val,
        };

        fetchUserDel(params);
    }

    // 搜索
    handleSubmit(e) {
        console.log(111);
        e.preventDefault();
        const { fetchSearch, form: { validateFields } } = this.props;

        validateFields((error, values) => {
            if (error) {
                return;
            }

            fetchSearch(values);
        })
    }

    render() {
        const { list, loading, total, pageIndex, form: { getFieldDecorator } } = this.props;
        const pagination = {
            total,
            current: pageIndex,
        };

        const usernameDecorator = getFieldDecorator('username');

        return (
            <div className="user-wrapper">
                <div className="filter-containers">
                    <div>
                        <Form layout="inline" onSubmit={this.handleSubmit}>
                            <FormItem label="用户名">
                                {usernameDecorator(<Input />)}
                            </FormItem>

                            <FormItem>
                                <Button type="primary" htmlType="submit" icon="search">搜索</Button>
                            </FormItem>
                        </Form>
                    </div>
                    <div>
                        <Link to="/manage/user/edit">
                            <Button type="primary" icon="user-add">
                                添加用户
                            </Button>
                        </Link>
                    </div>
                </div>
                <div>
                    <Table
                        columns={this.columns}
                        dataSource={list}
                        loading={loading}
                        rowKey="_id"
                        pagination={pagination}
                        onChange={this.handleChange}
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ userList }, { location }) => {
    const { list, total, loading } = userList;
    const { pageIndex = 1 } = location.query;

    return {
        list,
        total,
        loading,
        pageIndex: Number(pageIndex),
    };
};

const mapDispatchToProps = dispatch => ({
    fetchList: opts => dispatch(fetchList(opts)),
    fetchUserDel: opts => dispatch(fetchUserDel(opts)),
    fetchSearch: opts => dispatch(fetchSearch(opts)),
    onchange: opts => dispatch(updateQuery(opts)),
});

User.propTypes = {
    list: PropTypes.array.isRequired,
    total: PropTypes.number.isRequired,
    loading: PropTypes.bool.isRequired,
    pageIndex: PropTypes.number.isRequired,
    fetchList: PropTypes.func.isRequired,
    fetchUserDel: PropTypes.func.isRequired,
    fetchSearch: PropTypes.func.isRequired,
    onchange: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(User));
