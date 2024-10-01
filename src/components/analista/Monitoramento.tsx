import React from 'react';
import { Layout } from 'antd';

const { Content } = Layout;

const Monitoramento: React.FC = () => {
  return (
    <Content style={{ padding: '24px', background: '#fff' }}>
      <h1>Monitoramento</h1>
      <p>Aqui serão exibidas as métricas de monitoramento do sistema.</p>
    </Content>
  );
};

export default Monitoramento;
