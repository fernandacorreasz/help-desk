import React from 'react';
import { Layout, Row, Col, Card, Statistic, Divider } from 'antd';
import { Bar, Pie, Line, Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  RadialLinearScale,
} from 'chart.js';

// Registrar componentes do Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  RadialLinearScale
);

const { Content } = Layout;

// Dados para os gráficos

// 1. Atividades Resolvidas (Tickets resolvidos por categoria)
const dataTicketsResolvidosPorCategoria = {
  labels: ['Software', 'Hardware', 'Rede', 'Outros'],
  datasets: [
    {
      label: 'Tickets Resolvidos',
      data: [10, 5, 8, 3],
      backgroundColor: [
        'rgba(75, 192, 192, 0.6)',
        'rgba(153, 102, 255, 0.6)',
        'rgba(255, 159, 64, 0.6)',
        'rgba(54, 162, 235, 0.6)',
      ],
    },
  ],
};

// 2. Tickets Abertos (Status dos tickets atribuídos ao analista)
const dataTicketsAbertosPorStatus = {
  labels: ['Aberto', 'Em Progresso', 'Resolvido'],
  datasets: [
    {
      label: 'Status dos Tickets',
      data: [5, 7, 10],
      backgroundColor: [
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(75, 192, 192, 0.6)',
      ],
    },
  ],
};

// 3. Tempo Médio de Resolução (Linhas)
const dataTempoResolucao = {
  labels: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'],
  datasets: [
    {
      label: 'Tempo Médio de Resolução (Horas)',
      data: [5, 4, 6, 3],
      fill: false,
      backgroundColor: 'rgba(255, 99, 132, 0.6)',
      borderColor: 'rgba(255, 99, 132, 1)',
    },
  ],
};

// 4. Taxa de Resolução no Primeiro Contato (Radar)
const dataTaxaResolucaoPrimeiroContato = {
  labels: ['Software', 'Hardware', 'Rede', 'Outros'],
  datasets: [
    {
      label: 'Resolução no Primeiro Contato (%)',
      data: [85, 70, 75, 90],
      backgroundColor: 'rgba(153, 102, 255, 0.6)',
      borderColor: 'rgba(153, 102, 255, 1)',
    },
  ],
};

const DashboardAnalista: React.FC = () => {
  return (
    <Content style={{ padding: '24px', background: '#fff' }}>
      <h1>Dashboard - Analista</h1>

      {/* Seção de Informações */}
      <Row gutter={[16, 16]}>
        <Col xs={24} lg={8}>
          <Card bordered={true}>
            <Statistic title="Tickets Abertos" value={5} />
            <Divider />
            <Statistic title="Tickets Em Progresso" value={7} />
          </Card>
        </Col>

        <Col xs={24} lg={8}>
          <Card bordered={true}>
            <Statistic title="Tickets Resolvidos" value={10} />
            <Divider />
            <Statistic title="SLA Cumprido (%)" value="90%" />
          </Card>
        </Col>

        <Col xs={24} lg={8}>
          <Card bordered={true}>
            <Statistic title="Tempo Médio de Resolução" value="4 horas" />
            <Divider />
            <Statistic title="Resolução no Primeiro Contato (%)" value="85%" />
          </Card>
        </Col>
      </Row>

      {/* Gráfico 1 - Atividades Resolvidas por Categoria */}
      <Row gutter={[16, 16]} style={{ marginTop: '16px' }}>
        <Col xs={18}>
          <Card title="Atividades Resolvidas por Categoria" bordered={true}>
            <Bar data={dataTicketsResolvidosPorCategoria} />
            <p style={{ marginTop: '16px' }}>
              Este gráfico exibe o número de tickets resolvidos por categoria, permitindo uma visão clara das áreas mais atendidas pelo analista.
            </p>
          </Card>
        </Col>
      </Row>

      {/* Gráfico 2 - Status dos Tickets Atribuídos */}
      <Row gutter={[16, 16]} style={{ marginTop: '16px' }}>
        <Col xs={16}>
          <Card title="Status dos Tickets Atribuídos" bordered={true}>
            <Pie data={dataTicketsAbertosPorStatus} />
            <p style={{ marginTop: '16px' }}>
              Este gráfico de pizza mostra a proporção de tickets abertos, em progresso e resolvidos, permitindo que o analista veja seu progresso geral.
            </p>
          </Card>
        </Col>
      </Row>

      {/* Gráfico 3 - Tempo Médio de Resolução */}
      <Row gutter={[16, 16]} style={{ marginTop: '16px' }}>
        <Col xs={18}>
          <Card title="Tempo Médio de Resolução" bordered={true}>
            <Line data={dataTempoResolucao} />
            <p style={{ marginTop: '16px' }}>
              O gráfico de linhas exibe o tempo médio de resolução dos tickets nas últimas semanas, permitindo acompanhar a eficiência na solução dos tickets.
            </p>
          </Card>
        </Col>
      </Row>

      {/* Gráfico 4 - Taxa de Resolução no Primeiro Contato */}
      <Row gutter={[16, 16]} style={{ marginTop: '16px' }}>
        <Col xs={18}>
          <Card title="Taxa de Resolução no Primeiro Contato" bordered={true}>
            <Radar data={dataTaxaResolucaoPrimeiroContato} />
            <p style={{ marginTop: '16px' }}>
              O gráfico radar mostra a porcentagem de tickets resolvidos no primeiro contato para cada categoria, indicando a eficiência do analista.
            </p>
          </Card>
        </Col>
      </Row>
    </Content>
  );
};

export default DashboardAnalista;
