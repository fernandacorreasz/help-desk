import React from 'react';
import { Table, Button } from 'antd';

const data = [
  { key: '1', name: 'João Silva', role: 'Usuário', tickets: 5 },
  { key: '2', name: 'Maria Oliveira', role: 'Analista', tickets: 8 },
];

const GerenciamentoUsuarios: React.FC = () => {
  const columns = [
    { title: 'Nome', dataIndex: 'name', key: 'name' },
    { title: 'Cargo', dataIndex: 'role', key: 'role' },
    { title: 'Tickets Abertos', dataIndex: 'tickets', key: 'tickets' },
    {
      title: 'Ações',
      key: 'actions',
      render: () => <Button type="primary">Gerenciar</Button>,
    },
  ];

  return (
    <div style={{ padding: '24px', background: '#fff' }}>
      <h1>Gerenciamento de Usuários</h1>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default GerenciamentoUsuarios;
