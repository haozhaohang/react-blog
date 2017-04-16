import React, { Component, PropTypes } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router';

import './index.styl';

const { Header, Sider, Content } = Layout;
const { Item: MenuItem } = Menu;

class Manage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            collapsed: false,
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        const { collapsed } = this.state;
        this.setState({
            collapsed: !collapsed,
        });
    }

    render() {
        const { collapsed } = this.state;

        const { children } = this.props;
        return (
            <Layout className="manage-wrapper">
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={collapsed}
                >
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['user']} onClick={this.handleClick}>
                        <MenuItem key="user">
                            <Link to="/manage">
                                <Icon type="user" />
                                <span className="nav-text">用户管理</span>
                            </Link>
                        </MenuItem>
                        <MenuItem key="2">
                            <Link to="/manage/content">
                                <Icon type="video-camera" />
                                <span className="nav-text">分类管理</span>
                            </Link>
                        </MenuItem>
                        <MenuItem key="3">
                            <Link to="/manage/content">
                                <Icon type="upload" />
                                <span className="nav-text">内容管理</span>
                            </Link>
                        </MenuItem>
                    </Menu>
                </Sider>
                <Layout>
                    <Header className="manage-header">
                        <Icon
                            className="trigger"
                            type={collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.toggle}
                        />
                    </Header>
                    <Content className="manage-containers">
                        {children}
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

Manage.propTypes = {
    children: PropTypes.node,
};

Manage.defaultProps = {
    children: [],
};

export default Manage;
