import React from 'react';
import { Layout, Table } from 'antd';

const { Content } = Layout;

const Relatorios: React.FC = () => {
  const data = [
    { key: '1', title: 'Problema de Rede', status: 'Aberto', sla: 'Violado', date: '2023-09-28' },
    { key: '2', title: 'Erro no Sistema', status: 'Em Progresso', sla: 'Dentro do Prazo', date: '2023-09-29' },
  ];

  const columns = [
    { title: 'Título', dataIndex: 'title', key: 'title' },
    { title: 'Status', dataIndex: 'status', key: 'status' },
    { title: 'SLA', dataIndex: 'sla', key: 'sla' },
    { title: 'Data', dataIndex: 'date', key: 'date' },
  ];

  return (
    <Content style={{ padding: '24px', background: '#fff' }}>
      <h1>Relatórios de Tickets</h1>
      <Table columns={columns} dataSource={data} />
    </Content>
  );
};

export default Relatorios;
