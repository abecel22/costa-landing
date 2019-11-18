import React, { useState } from 'react';
import { Layout } from 'antd';
import TopNav from '../components/TopNav';
import SideNav from '../components/SideNav';
import MainContent from './MainContent';

const { Header, Footer, Sider, Content } = Layout;
const MainLayout = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isNarrow, setIsNarrow] = useState(false);

  const handleToggle = () => {
    return setIsCollapsed(!isCollapsed);
  };

  return (
    <>
      <Header>
        <TopNav
          handleToggle={handleToggle}
          isCollapsed={isCollapsed}
          isNarrow={isNarrow}
        />
      </Header>
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={isCollapsed}
          collapsedWidth={0}
          breakpoint="md"
          onBreakpoint={broken => setIsNarrow(broken)}
        >
          <SideNav />
        </Sider>
        <Content>
          <MainContent />
        </Content>
      </Layout>
      <Footer>Footer</Footer>
    </>
  );
};

export default MainLayout;
