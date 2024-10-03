import React from 'react';
import { Layout, Card, Typography } from 'antd';
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
const { Paragraph } = Typography;

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
    <Content style={{ padding: '24px', background: '#fff', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Métricas do Sistema</h1>

      {/* Gráfico 1: Número de Tickets por Categoria */}
      <Card title="Número de Tickets por Categoria" bordered={true} style={{ marginBottom: '24px' }}>
        <Bar data={dataTicketsPorCategoria} />
        <Paragraph style={{ marginTop: '16px' }}>
          Este gráfico mostra a distribuição dos tickets abertos por categoria. É possível identificar quais áreas (Software, Hardware, Rede, etc.) têm gerado mais chamados.
        </Paragraph>
      </Card>

      {/* Gráfico 2: Tempo Médio de Resolução */}
      <Card title="Tempo Médio de Resolução" bordered={true} style={{ marginBottom: '24px' }}>
        <Line data={dataTempoResolucao} />
        <Paragraph style={{ marginTop: '16px' }}>
          O gráfico exibe o tempo médio de resolução dos tickets por semana. Isso ajuda a monitorar a eficiência da equipe de suporte ao longo do tempo.
        </Paragraph>
      </Card>

      {/* Gráfico 3: Número de Tickets por Status */}
      <Card title="Número de Tickets por Status" bordered={true} style={{ marginBottom: '24px' }}>
        <Pie data={dataTicketsPorStatus} />
        <Paragraph style={{ marginTop: '16px' }}>
          Este gráfico mostra a proporção de tickets abertos, fechados e em andamento. Ele é útil para acompanhar o fluxo de trabalho atual.
        </Paragraph>
      </Card>

      {/* Gráfico 4: Violações de SLA */}
      <Card title="Número de Violações de SLA" bordered={true} style={{ marginBottom: '24px' }}>
        <Bar data={dataViolacaoSLA} />
        <Paragraph style={{ marginTop: '16px' }}>
          Este gráfico exibe a quantidade de violações de SLA (Acordos de Nível de Serviço) por semana. É essencial para medir a conformidade com os SLAs acordados.
        </Paragraph>
      </Card>

      {/* Gráfico 5: Avaliação de Satisfação do Cliente */}
      <Card title="Avaliação de Satisfação do Cliente" bordered={true} style={{ marginBottom: '24px' }}>
        <Pie data={dataSatisfacaoCliente} />
        <Paragraph style={{ marginTop: '16px' }}>
          Exibe a distribuição de avaliações de satisfação dos clientes, que é uma métrica importante para avaliar a qualidade do suporte oferecido.
        </Paragraph>
      </Card>

      {/* Gráfico 6: Taxa de Resolução no Primeiro Contato */}
      <Card title="Taxa de Resolução no Primeiro Contato" bordered={true} style={{ marginBottom: '24px' }}>
        <Radar data={dataTaxaResolucaoPrimeiroContato} />
        <Paragraph style={{ marginTop: '16px' }}>
          Este gráfico mostra a porcentagem de tickets resolvidos no primeiro contato com o cliente, uma métrica fundamental para medir a eficácia do atendimento inicial.
        </Paragraph>
      </Card>
    </Content>
  );
};

export default Metricas;
