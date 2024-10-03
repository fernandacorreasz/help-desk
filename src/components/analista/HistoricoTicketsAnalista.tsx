import React from 'react';
import { Layout, Table, Tag } from 'antd';

const { Content } = Layout;

const columns = [
  {
    title: 'Cód. Ticket',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Título',
    dataIndex: 'title',
    key: 'title',
    render: (text: string) => <a>{text}</a>,
  },
  {
    title: 'Data Abertura',
    dataIndex: 'createdAt',
    key: 'createdAt',
  },
  {
    title: 'Data Resolução',
    dataIndex: 'resolvedAt',
    key: 'resolvedAt',
  },
  {
    title: 'Tempo de resolução (SLA)',
    dataIndex: 'sla',
    key: 'sla',
    render: (sla: string) => (
      <Tag color={sla.includes('dias') && parseInt(sla) > 5 ? 'red' : 'green'}>{sla}</Tag>
    ),
  },
  {
    title: 'Categoria',
    dataIndex: 'category',
    key: 'category',
  },
  {
    title: 'NPS',
    dataIndex: 'nps',
    key: 'nps',
  },
];

const data = [
  {
    id: 1,
    title: 'Erro no Endpoint S3',
    createdAt: '02/08/2024',
    resolvedAt: '06/08/2024',
    sla: '4 dias',
    category: 'Ops',
    nps: 8,
    user: 'Juliana Lima',
  },
  {
    id: 2,
    title: 'Dúvida na importação Excel',
    createdAt: '05/08/2024',
    resolvedAt: '05/08/2024',
    sla: 'Mesmo dia',
    category: 'Importação',
    nps: 10,
    user: 'Carlos Mendes',
  },
  {
    id: 3,
    title: 'Computador não liga',
    createdAt: '08/08/2024',
    resolvedAt: '08/08/2024',
    sla: 'Mesmo dia',
    category: 'Hardware',
    nps: 10,
    user: 'Fernanda Corrêa',
  },
  {
    id: 4,
    title: 'Demora na geração de relatório',
    createdAt: '11/08/2024',
    resolvedAt: '20/08/2024',
    sla: '9 dias',
    category: 'Relatório',
    nps: 6,
    user: 'Ana Souza',
  },
  {
    id: 5,
    title: 'Container não iniciando',
    createdAt: '12/08/2024',
    resolvedAt: '19/08/2024',
    sla: '7 dias',
    category: 'Ops',
    nps: 7,
    user: 'Pedro Silva',
  },
  {
    id: 6,
    title: 'Versão JAVA incompatível',
    createdAt: '14/08/2024',
    resolvedAt: '16/08/2024',
    sla: '2 dias',
    category: 'Ops',
    nps: 9,
    user: 'Cláudia Santos',
  },
  {
    id: 7,
    title: 'Tela CM010 fora do ar',
    createdAt: '17/08/2024',
    resolvedAt: '30/08/2024',
    sla: '13 dias',
    category: 'Ops',
    nps: 4,
    user: 'Bruno Silva',
  },
  {
    id: 8,
    title: 'Dúvida no cálculo de Markup',
    createdAt: '19/08/2024',
    resolvedAt: '21/08/2024',
    sla: '2 dias',
    category: 'Analista de Negócio',
    nps: 9,
    user: 'Gabriela Costa',
  },
  {
    id: 9,
    title: 'Problema na config tributária',
    createdAt: '20/08/2024',
    resolvedAt: '28/08/2024',
    sla: '8 dias',
    category: 'Tributário',
    nps: 5,
    user: 'Mariana Borges',
  },
  {
    id: 10,
    title: 'Configuração do servidor',
    createdAt: '22/08/2024',
    resolvedAt: '28/08/2024',
    sla: '6 dias',
    category: 'Infraestrutura',
    nps: 7,
    user: 'Rafael Ferreira',
  },
];

const HistoricoTicketsAnalista: React.FC = () => {
  return (
    <Content style={{ padding: '24px', background: '#fff' }}>
      <h1>Histórico de Tickets Fechados</h1>
      <Table columns={columns} dataSource={data} pagination={false} rowKey="id" />
    </Content>
  );
};

export default HistoricoTicketsAnalista;
