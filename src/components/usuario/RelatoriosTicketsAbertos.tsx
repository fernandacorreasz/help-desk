import React from 'react';
import { Layout, Table } from 'antd';

const { Content } = Layout;

const Relatorios: React.FC = () => {
  const tickets = [
    {
      key: '1',
      title: 'Problema de Conexão',
      status: 'Aberto',
      date: '2023-09-28',
    },
    {
      key: '2',
      title: 'Erro no Sistema',
      status: 'Em Progresso',
      date: '2023-09-29',
    },
    {
      key: '3',
      title: 'Atualização de Software',
      status: 'Resolvido',
      date: '2023-09-30',
    },
  ];

  const columns = [
    {
      title: 'Título',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Data de Criação',
      dataIndex: 'date',
      key: 'date',
    },
  ];

  return (
    <Content style={{ padding: '24px', background: '#fff' }}>
      <h1>Relatório de Tickets Abertos</h1>
      <Table columns={columns} dataSource={tickets.filter(ticket => ticket.status !== 'Resolvido')} />
    </Content>
  );
};

export default Relatorios;
