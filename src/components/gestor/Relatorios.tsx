import React from 'react';
import { Layout, Table, Tag, Tooltip } from 'antd';

const { Content } = Layout;

const RelatoriosGestor: React.FC = () => {
  const data = [
    {
      key: '1',
      title: 'Problema de Rede',
      status: 'Aberto',
      sla: 'Violado',
      createdAt: '2023-09-28',
      estimatedResolution: '2023-10-02',
      priority: 'Alta',
      category: 'Infraestrutura',
      requester: 'Juliana Lima',
      assignedAnalyst: 'Carlos Mendes',
      lastComment: 'Aguardando peça de reposição.',
    },
    {
      key: '2',
      title: 'Erro no Sistema',
      status: 'Em Progresso',
      sla: 'Dentro do Prazo',
      createdAt: '2023-09-29',
      estimatedResolution: '2023-09-30',
      priority: 'Média',
      category: 'Software',
      requester: 'Rafael Ferreira',
      assignedAnalyst: 'Fernanda Corrêa',
      lastComment: 'Bug identificado, corrigindo no ambiente de testes.',
    },
    {
      key: '3',
      title: 'Falha de Segurança',
      status: 'Aberto',
      sla: 'Violado',
      createdAt: '2023-09-25',
      estimatedResolution: '2023-09-29',
      priority: 'Crítica',
      category: 'Segurança',
      requester: 'Bruno Souza',
      assignedAnalyst: 'Ana Souza',
      lastComment: 'Verificando vulnerabilidade relatada.',
    },
  ];

  const columns = [
    { title: 'Título', dataIndex: 'title', key: 'title' },
    { title: 'Solicitante', dataIndex: 'requester', key: 'requester' },
    { title: 'Categoria', dataIndex: 'category', key: 'category' },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => (
        <Tag color={status === 'Aberto' ? 'red' : 'blue'}>{status}</Tag>
      ),
    },
    {
      title: 'SLA',
      dataIndex: 'sla',
      key: 'sla',
      render: (sla: string) => (
        <Tag color={sla === 'Violado' ? 'red' : 'green'}>{sla}</Tag>
      ),
    },
    { title: 'Data de Abertura', dataIndex: 'createdAt', key: 'createdAt' },
    { title: 'Data Estimada de Resolução', dataIndex: 'estimatedResolution', key: 'estimatedResolution' },
    {
      title: 'Prioridade',
      dataIndex: 'priority',
      key: 'priority',
      render: (priority: string) => (
        <Tag color={priority === 'Crítica' ? 'volcano' : priority === 'Alta' ? 'red' : 'blue'}>{priority}</Tag>
      ),
    },
    { title: 'Analista Atribuído', dataIndex: 'assignedAnalyst', key: 'assignedAnalyst' },
    {
      title: 'Último Comentário',
      dataIndex: 'lastComment',
      key: 'lastComment',
      render: (comment: string) => (
        <Tooltip title={comment}>
          <span>{comment.length > 30 ? `${comment.slice(0, 30)}...` : comment}</span>
        </Tooltip>
      ),
    },
  ];

  return (
    <Content style={{ padding: '24px', background: '#fff' }}>
      <h1>Relatórios de Tickets Abertos</h1>
      <Table columns={columns} dataSource={data} pagination={false} />
    </Content>
  );
};

export default RelatoriosGestor;
