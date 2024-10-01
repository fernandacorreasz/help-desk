import React from 'react';
import { Layout, Card, Row, Col, Tag } from 'antd';

const { Content } = Layout;

const meusTickets = [
  {
    id: 1,
    title: "Problema no Wi-Fi",
    status: "Aberto",
    createdAt: "2023-09-28",
    description: "Não consigo me conectar à rede.",
  },
  {
    id: 2,
    title: "Erro no Sistema",
    status: "Em Progresso",
    createdAt: "2023-09-29",
    description: "Recebo uma mensagem de erro ao abrir o sistema.",
  },
];

const MeusTicketsUsuario: React.FC = () => {
  return (
    <Content style={{ padding: '24px', background: '#fff' }}>
      <h1>Meus Tickets</h1>
      <Row gutter={[16, 16]}>
        {meusTickets.map((ticket) => (
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

export default MeusTicketsUsuario;
