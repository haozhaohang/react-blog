import React, { Component } from 'react';
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

        return (
            <Layout className="manage-containers">
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
                    <Header style={{ background: '#fff', padding: 0 }}>
                        <Icon
                            className="trigger"
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.toggle}
                        />
                    </Header>
                    <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
                            Content
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default Manage;
