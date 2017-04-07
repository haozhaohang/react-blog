import React, { Component, PropTypes } from 'react';
import { Layout, Menu, Icon } from 'antd';

import './index.styl';

const { Header, Sider, Content } = Layout;
const { Item: MenuItem } = Menu;

class Manage extends Component {
    state = {
        collapsed: false,
    };
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
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
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <MenuItem key="1">
                            <Icon type="user" />
                            <span className="nav-text">用户管理</span>
                        </MenuItem>
                        <MenuItem key="2">
                            <Icon type="video-camera" />
                            <span className="nav-text">分类管理</span>
                        </MenuItem>
                        <MenuItem key="3">
                            <Icon type="upload" />
                            <span className="nav-text">内容管理</span>
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
