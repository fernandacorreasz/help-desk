import React from 'react';
import { Layout, Card, Row, Col, Divider } from 'antd';

const { Content } = Layout;

export const Usuario: React.FC = () => {
  // Exemplo de dados de tickets simulados
  const tickets = [
    {
      id: 1,
      title: "Problema de Conexão",
      description: "Não consigo conectar ao servidor.",
      status: "Aberto",
      date: "2023-09-28"
    },
    {
      id: 2,
      title: "Erro no Sistema",
      description: "Ao acessar o sistema, recebo uma mensagem de erro.",
      status: "Em Progresso",
      date: "2023-09-29"
    },
    {
      id: 3,
      title: "Atualização de Software",
      description: "Preciso de ajuda para atualizar o software.",
      status: "Resolvido",
      date: "2023-09-30"
    }
  ];

  return (
    <Content style={{ padding: '24px', background: '#fff', maxWidth: '1200px', margin: '0 auto' }}>
      <h1>Meus Tickets</h1>
      <p>Aqui estão listados todos os tickets criados pelo usuário.</p>
      <Divider />
      <Row gutter={[32, 32]}>  {/* Ajustado para criar mais espaço entre os itens */}
        {tickets.map(ticket => (
          <Col xs={24} sm={12} lg={8} key={ticket.id}>
            <Card title={ticket.title} bordered={true}>
              <p><b>Status:</b> {ticket.status}</p>
              <p><b>Data de Criação:</b> {ticket.date}</p>
              <p><b>Descrição:</b> {ticket.description}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </Content>
  );
};
