import React from 'react';
import { Layout, Card, Button, Row, Col, Tag } from 'antd';

const { Content } = Layout;

// Exemplo de dados de solicitações de mudança
const solicitacoes = [
  {
    id: 1,
    title: "Atualização de Servidor",
    description: "Atualização de segurança crítica no servidor principal.",
    impacto: "Alto",
    status: "Pendente"
  },
  {
    id: 2,
    title: "Mudança de Interface",
    description: "Alteração no layout do dashboard principal.",
    impacto: "Médio",
    status: "Pendente"
  },
  {
    id: 3,
    title: "Atualização de Software",
    description: "Atualização do sistema de Help Desk para a versão 2.0.",
    impacto: "Baixo",
    status: "Aprovado"
  }
];

const Aprovacoes: React.FC = () => {
  const handleAprovar = (id: number) => {
    console.log(`Aprovar solicitação ${id}`);
   
  };

  const handleRejeitar = (id: number) => {
    console.log(`Rejeitar solicitação ${id}`);
   
  };

  return (
    <Content style={{ padding: '24px', background: '#fff' }}>
      <h1>Aprovações de Mudanças</h1>
      <Row gutter={[16, 16]}>
        {solicitacoes.map(solicitacao => (
          <Col xs={24} md={12} lg={8} key={solicitacao.id}>
            <Card title={solicitacao.title} bordered={true}>
              <p><b>Descrição:</b> {solicitacao.description}</p>
              <p><b>Impacto:</b> <Tag color={solicitacao.impacto === 'Alto' ? 'red' : solicitacao.impacto === 'Médio' ? 'orange' : 'green'}>{solicitacao.impacto}</Tag></p>
              <p><b>Status:</b> {solicitacao.status === "Pendente" ? <Tag color="blue">Pendente</Tag> : <Tag color="green">Aprovado</Tag>}</p>

              {/* Exibe os botões somente se o status for Pendente */}
              {solicitacao.status === "Pendente" && (
                <div>
                  <Button type="primary" onClick={() => handleAprovar(solicitacao.id)} style={{ marginRight: '8px' }}>
                    Aprovar
                  </Button>
                  <Button type="default" onClick={() => handleRejeitar(solicitacao.id)}>
                    Rejeitar
                  </Button>
                </div>
              )}
            </Card>
          </Col>
        ))}
      </Row>
    </Content>
  );
};

export default Aprovacoes;
