import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Button, Table, Form, Input } from 'antd';
import * as actions from 'Actions/content';
import * as router from 'Actions/router';
import { equalByProps } from 'Assets/js/util';

// css
import './index.styl';

const { Item: FormItem } = Form;

class Content extends Component {
    constructor(props) {
        super(props);

        this.columns = [
            {
                title: 'ID',
                dataIndex: '_id',
            },
            {
                title: '文章题目',
                dataIndex: 'title',
            },
            {
                title: '创建时间',
                dataIndex: 'createTime',
            },
            {
                title: '浏览量',
                dataIndex: 'views',
            },
            {
                title: '作者',
                dataIndex: 'author1',
            },
            {
                title: '类型',
                dataIndex: 'classify',
            },
            {
                title: '操作',
                render: ({ _id }) =>
                (
                    <div>
                        <Link to={`/manage/content/edit?id=${_id}`}>
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
        const { pageIndex, title, fetchList } = this.props;
        const params = {
            pageIndex,
            title,
        };

        fetchList(params);
    }

    componentDidUpdate(preProps) {
        const { pageIndex, title, fetchList } = this.props;
        const fields = ['pageIndex', 'title'];
        const params = {
            pageIndex,
            title,
        };

        if (equalByProps(preProps, this.props, fields)) {
            fetchList(params);
        }
    }

    handleChange(val) {
        const { updateQuery } = this.props;
        const { current: pageIndex } = val;
        const params = {
            pageIndex,
        };

        updateQuery(params);
    }

    async handleDel(val) {
        const { pageIndex, title, fetchList, fetchContentDel } = this.props;
        const params1 = {
            id: val,
        };

        try {
            await fetchContentDel(params1);
        } catch (e) {
            return;
        }

        const params2 = {
            pageIndex,
            title,
        };

        fetchList(params2);

    }

    // 搜索
    handleSubmit(e) {

        e.preventDefault();
        const { replaceQuery, form: { validateFields } } = this.props;

        validateFields((error, values) => {
            if (error) {
                return;
            }

            replaceQuery(values);
        })
    }

    render() {
        const { list, loading, total, pageIndex, title, form: { getFieldDecorator } } = this.props;
        const pagination = {
            total,
            current: pageIndex,
        };

        const usernameDecorator = getFieldDecorator('title', {
            initialValue: title,
        });

        return (
            <div className="user-wrapper">
                <div className="filter-containers">
                    <div>
                        <Form layout="inline" onSubmit={this.handleSubmit}>
                            <FormItem label="文章题目">
                                {usernameDecorator(<Input />)}
                            </FormItem>

                            <FormItem>
                                <Button type="primary" htmlType="submit" icon="search">搜索</Button>
                            </FormItem>
                        </Form>
                    </div>
                    <div>
                        <Link to="/manage/content/edit">
                            <Button type="primary" icon="file-add">
                                添加文章
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

const mapStateToProps = ({ contentList }, { location }) => {
    const { list, total, loading } = contentList;
    const { pageIndex = 1, title } = location.query;

    return {
        list,
        total,
        loading,
        title,
        pageIndex: Number(pageIndex),
    };
};

const mapDispatchToProps = { ...actions, ...router };

Content.propTypes = {
    list: PropTypes.array.isRequired,
    total: PropTypes.number.isRequired,
    loading: PropTypes.bool.isRequired,
    pageIndex: PropTypes.number.isRequired,
    username: PropTypes.string,
    fetchList: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(Content));
