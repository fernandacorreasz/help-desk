import React from 'react';
import { Layout } from 'antd';

const { Content } = Layout;

const DashboardAnalista: React.FC = () => {
  return (
    <Content style={{ padding: '24px', background: '#fff' }}>
      <h1>Dashboard - Analista</h1>
      <p>Bem-vindo ao painel de controle do analista.</p>
    </Content>
  );
};

export default DashboardAnalista;
