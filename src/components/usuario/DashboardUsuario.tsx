import React from 'react';
import { Layout, Row, Col, Card, Statistic, Divider, Button } from 'antd';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const { Content } = Layout;

// Dados do gráfico de tickets criados pelo usuário
const dataTicketsUsuario = {
  labels: ['Software', 'Hardware', 'Rede', 'Outros'],
  datasets: [
    {
      label: 'Tickets Criados',
      data: [5, 3, 4, 2],
      backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(153, 102, 255, 0.6)', 'rgba(255, 159, 64, 0.6)', 'rgba(54, 162, 235, 0.6)'],
    },
  ],
};

const DashboardUsuario: React.FC = () => {
  return (
    <Content style={{ padding: '24px', background: '#fff' }}>
      <h1>Dashboard - Usuário Final</h1>

      {/* Seção de Informações */}
      <Row gutter={[16, 16]}>
        <Col xs={24} lg={8}>
          <Card bordered={true}>
            <Statistic title="Tickets Abertos" value={5} />
            <Divider />
            <Statistic title="Tickets Resolvidos" value={10} />
          </Card>
        </Col>

        <Col xs={24} lg={8}>
          <Card bordered={true}>
            <Statistic title="Tickets Em Andamento" value={3} />
            <Divider />
            <Statistic title="Tempo Médio de Resolução" value="4 horas" />
          </Card>
        </Col>

        <Col xs={24} lg={8}>
          <Card bordered={true}>
            <Statistic title="Tickets com Violações de SLA" value={1} />
            <Divider />
            <Statistic title="Satisfação Média do Atendimento" value="4.2 / 5" />
          </Card>
        </Col>
      </Row>

      {/* Gráfico de Tickets Criados pelo Usuário */}
      <Row gutter={[16, 16]} style={{ marginTop: '16px' }}>
        <Col xs={24}>
          <Card title="Tickets Criados por Categoria" bordered={true}>
            <Bar data={dataTicketsUsuario} />
            <p style={{ marginTop: '16px' }}>
              Este gráfico exibe os tickets criados pelo usuário final, categorizados em Software, Hardware, Rede e Outros.
            </p>
          </Card>
        </Col>
      </Row>

      {/* Seção informativa adicional */}
      <Row gutter={[16, 16]} style={{ marginTop: '16px' }}>
        <Col xs={24}>
          <Card bordered={true}>
            <h3>Detalhes dos Tickets</h3>
            <p>
              <strong>Tickets Abertos:</strong> Representa os tickets ainda pendentes e aguardando solução. <br />
              <strong>Tickets Em Andamento:</strong> Representa os tickets em que o suporte técnico já está trabalhando. <br />
              <strong>Tempo Médio de Resolução:</strong> Indica a eficiência do suporte no atendimento de tickets abertos.
            </p>
            <Button type="primary">Ver Todos os Tickets</Button>
          </Card>
        </Col>
      </Row>
    </Content>
  );
};

export default DashboardUsuario;
