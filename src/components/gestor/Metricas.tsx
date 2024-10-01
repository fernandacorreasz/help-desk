import React from 'react';
import { Layout, Card, Row, Col } from 'antd';
import { Bar, Line } from 'react-chartjs-2';
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
  Legend
);

const { Content } = Layout;

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
    </Content>
  );
};

export default Metricas;
