import React from 'react';
import { Layout, Card, Row, Col } from 'antd';
import { Bar, Line, Pie, Radar } from 'react-chartjs-2';
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

// Registrar componentes necessários do Chart.js
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

// Dados para gráficos
const dataTicketsPorCategoria = {
  labels: ['Software', 'Hardware', 'Rede', 'Outros'],
  datasets: [
    {
      label: 'Número de Tickets',
      data: [12, 19, 3, 5],
      backgroundColor: [
        'rgba(75, 192, 192, 0.6)',
        'rgba(153, 102, 255, 0.6)',
        'rgba(255, 159, 64, 0.6)',
        'rgba(54, 162, 235, 0.6)',
      ],
    },
  ],
};

const dataTempoResolucao = {
  labels: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'],
  datasets: [
    {
      label: 'Tempo Médio de Resolução (Horas)',
      data: [2.5, 3.0, 2.0, 4.0],
      fill: false,
      backgroundColor: 'rgba(255, 99, 132, 0.6)',
      borderColor: 'rgba(255, 99, 132, 1)',
    },
  ],
};

const dataTicketsPorStatus = {
  labels: ['Aberto', 'Fechado', 'Em Progresso'],
  datasets: [
    {
      label: 'Número de Tickets por Status',
      data: [8, 15, 7],
      backgroundColor: [
        'rgba(255, 206, 86, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 99, 132, 0.6)',
      ],
    },
  ],
};

const dataViolacaoSLA = {
  labels: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'],
  datasets: [
    {
      label: 'Número de Violações de SLA',
      data: [2, 1, 4, 3],
      backgroundColor: 'rgba(153, 102, 255, 0.6)',
      borderColor: 'rgba(153, 102, 255, 1)',
      borderWidth: 1,
    },
  ],
};

// Dados para satisfação do cliente
const dataSatisfacaoCliente = {
  labels: ['1 Estrela', '2 Estrelas', '3 Estrelas', '4 Estrelas', '5 Estrelas'],
  datasets: [
    {
      label: 'Avaliações de Satisfação',
      data: [3, 2, 5, 8, 12],
      backgroundColor: [
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(75, 192, 192, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(153, 102, 255, 0.6)',
      ],
    },
  ],
};

// Dados para a Taxa de Resolução no Primeiro Contato
const dataTaxaResolucaoPrimeiroContato = {
  labels: ['Software', 'Hardware', 'Rede', 'Outros'],
  datasets: [
    {
      label: 'Resolução no Primeiro Contato (%)',
      data: [85, 75, 60, 90],
      backgroundColor: 'rgba(75, 192, 192, 0.6)',
      borderColor: 'rgba(75, 192, 192, 1)',
    },
  ],
};

const Metricas: React.FC = () => {
  return (
    <Content style={{ padding: '24px', background: '#fff' }}>
      <h1>Métricas</h1>
      <Row gutter={[16, 16]}>
        <Col xs={24} lg={12}>
          <Card title="Número de Tickets por Categoria" bordered={true}>
            <Bar data={dataTicketsPorCategoria} />
          </Card>
        </Col>
        <Col xs={24} lg={12}>
          <Card title="Tempo Médio de Resolução" bordered={true}>
            <Line data={dataTempoResolucao} />
          </Card>
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col xs={24} lg={12}>
          <Card title="Número de Tickets por Status" bordered={true}>
            <Pie data={dataTicketsPorStatus} />
          </Card>
        </Col>
        <Col xs={24} lg={12}>
          <Card title="Número de Violações de SLA" bordered={true}>
            <Bar data={dataViolacaoSLA} />
          </Card>
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col xs={24} lg={12}>
          <Card title="Avaliação de Satisfação do Cliente" bordered={true}>
            <Pie data={dataSatisfacaoCliente} />
          </Card>
        </Col>
        <Col xs={24} lg={12}>
          <Card title="Taxa de Resolução no Primeiro Contato" bordered={true}>
            <Radar data={dataTaxaResolucaoPrimeiroContato} />
          </Card>
        </Col>
      </Row>
    </Content>
  );
};

export default Metricas;