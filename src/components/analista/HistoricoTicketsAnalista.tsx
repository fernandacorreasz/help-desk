import React from 'react';
import { Layout, Card, Row, Col, Tag } from 'antd';

const { Content } = Layout;

const historicoTickets = [
  {
    id: 1,
    title: "Erro no Sistema",
    status: "Resolvido",
    createdAt: "2023-09-29",
    resolvedAt: "2023-09-30",
    description: "Erro corrigido após atualização."
  },
  {
    id: 2,
    title: "Problema de Rede",
    status: "Resolvido",
    createdAt: "2023-09-30",
    resolvedAt: "2023-10-01",
    description: "Conexão estabilizada após reiniciar o roteador."
  }
];

const HistoricoTicketsAnalista: React.FC = () => {
  return (
    <Content style={{ padding: '24px', background: '#fff' }}>
      <h1>Histórico de Tickets</h1>
      <Row gutter={[16, 16]}>
        {historicoTickets.map(ticket => (
          <Col xs={24} lg={8} key={ticket.id}>
            <Card title={ticket.title} bordered={true} extra={<Tag color="green">{ticket.status}</Tag>}>
              <p><b>Data de Criação:</b> {ticket.createdAt}</p>
              <p><b>Data de Resolução:</b> {ticket.resolvedAt}</p>
              <p><b>Descrição:</b> {ticket.description}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </Content>
  );
};

export default HistoricoTicketsAnalista;
