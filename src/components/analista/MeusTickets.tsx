import React from 'react';
import { Layout, Card, Row, Col, Tag } from 'antd';

const { Content } = Layout;

const meusTickets = [
  {
    id: 1,
    title: "Erro no Sistema",
    status: "Em Andamento",
    createdAt: "2023-09-29",
    description: "Mensagem de erro no login."
  },
  {
    id: 2,
    title: "Problema de Rede",
    status: "Aberto",
    createdAt: "2023-09-30",
    description: "Conexão de rede intermitente."
  }
];

const MeusTickets: React.FC = () => {
  return (
    <Content style={{ padding: '24px', background: '#fff' }}>
      <h1>Meus Tickets</h1>
      <Row gutter={[16, 16]}>
        {meusTickets.map(ticket => (
          <Col xs={24} lg={8} key={ticket.id}>
            <Card title={ticket.title} bordered={true} extra={<Tag color="blue">{ticket.status}</Tag>}>
              <p><b>Data de Criação:</b> {ticket.createdAt}</p>
              <p><b>Descrição:</b> {ticket.description}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </Content>
  );
};

export default MeusTickets;
