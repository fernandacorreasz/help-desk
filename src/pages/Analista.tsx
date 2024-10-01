import React from 'react';
import { Layout, Card, Row, Col, Button, Tag } from 'antd';

const { Content } = Layout;

// Simulando os tickets atribuídos ao analista
const tickets = [
  {
    id: 1,
    title: "Problema de Conexão",
    status: "Em Andamento",
    createdAt: "2023-09-28",
    description: "Não consigo conectar ao servidor.",
    assignedTo: "Analista A"
  },
  {
    id: 2,
    title: "Erro no Sistema",
    status: "Aberto",
    createdAt: "2023-09-29",
    description: "Ao acessar o sistema, recebo uma mensagem de erro.",
    assignedTo: null // O ticket não foi atribuído ainda
  },
  {
    id: 3,
    title: "Atualização de Software",
    status: "Resolvido",
    createdAt: "2023-09-30",
    description: "Preciso de ajuda para atualizar o software.",
    assignedTo: "Analista B"
  }
];

const Analista: React.FC = () => {
  
  // Função para atribuir um ticket ao analista
  const handleAtribuirTicket = (ticketId: number) => {
    // Lógica de atribuição aqui (API ou estado local para atualizar o ticket)
    console.log(`Ticket ${ticketId} atribuído ao analista.`);
  };

  // Função para atualizar o status de um ticket
  const handleAtualizarStatus = (ticketId: number) => {
    // Lógica de atualização de status aqui
    console.log(`Status do Ticket ${ticketId} atualizado.`);
  };

  return (
    <Content style={{ padding: '24px', background: '#fff' }}>
      <h1>Gerenciamento de Tickets - Analista</h1>
      <p>Aqui o analista pode visualizar e gerenciar os tickets atribuídos a ele.</p>
      
      <Row gutter={[16, 16]}>
        {tickets.map(ticket => (
          <Col xs={24} lg={8} key={ticket.id}>
            <Card
              title={ticket.title}
              bordered={true}
              extra={
                ticket.assignedTo === null ? (
                  <Button type="primary" onClick={() => handleAtribuirTicket(ticket.id)}>
                    Atribuir a mim
                  </Button>
                ) : (
                  <Tag color="blue">{ticket.status}</Tag>
                )
              }
            >
              <p><b>Status:</b> {ticket.status}</p>
              <p><b>Data de Criação:</b> {ticket.createdAt}</p>
              <p><b>Descrição:</b> {ticket.description}</p>
              {ticket.assignedTo && (
                <>
                  <p><b>Designado para:</b> {ticket.assignedTo}</p>
                  <Button type="primary" onClick={() => handleAtualizarStatus(ticket.id)}>
                    Atualizar Status
                  </Button>
                </>
              )}
            </Card>
          </Col>
        ))}
      </Row>
    </Content>
  );
};

export default Analista;
