import React from 'react';
import { Layout, Form, InputNumber, Button, Alert, Select, Input } from 'antd';

const { Content } = Layout;
const { Option } = Select;

const SLAs: React.FC = () => {
  const onFinish = (values: unknown) => {
    console.log('Valores de SLA:', values);
  };

  return (
    <Content style={{ padding: '24px', background: '#fff', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Configuração de SLAs</h1>

      {/* Descrição sobre a tela de configuração de SLAs */}
      <Alert
        message="Configuração de Acordos de Nível de Serviço (SLAs)"
        description="Nesta tela, o gestor pode definir os tempos máximos de resolução para diferentes categorias de tickets, ou aplicar configurações a um ticket específico. Essas configurações impactam diretamente os tickets abertos, determinando se um ticket violou ou está em conformidade com o SLA."
        type="info"
        showIcon
        style={{ marginBottom: '24px' }}
      />

      <Form
        name="slas"
        labelCol={{ span: 16 }}
        wrapperCol={{ span: 16 }}
        onFinish={onFinish}
        autoComplete="off"
      >
        {/* Seleção de categoria de ticket */}
        <Form.Item
          label="Categoria de Ticket"
          name="categoriaTicket"
          rules={[{ required: true, message: 'Por favor, selecione uma categoria de ticket.' }]}
        >
          <Select placeholder="Selecione uma categoria de ticket">
            <Option value="software">Software</Option>
            <Option value="hardware">Hardware</Option>
            <Option value="rede">Rede</Option>
            <Option value="outros">Outros</Option>
          </Select>
        </Form.Item>

        {/* Identificador do Ticket */}
        <Form.Item
          label="Identificador do Ticket (Opcional)"
          name="identificadorTicket"
          rules={[{ required: false }]}
        >
          <Input placeholder="Digite o ID do ticket, se aplicável" />
        </Form.Item>

        {/* Configuração de SLA para incidentes críticos */}
        <Form.Item
          label="SLA para Incidentes Críticos (horas)"
          name="incidenteCritico"
          rules={[{ required: true, message: 'Por favor, defina o SLA para incidentes críticos.' }]}
        >
          <InputNumber min={1} placeholder="Ex: 4 horas" />
        </Form.Item>

        {/* Configuração de SLA para incidentes médios */}
        <Form.Item
          label="SLA para Incidentes Médios (horas)"
          name="incidenteMedio"
          rules={[{ required: true, message: 'Por favor, defina o SLA para incidentes médios.' }]}
        >
          <InputNumber min={1} placeholder="Ex: 8 horas" />
        </Form.Item>

        {/* Configuração de SLA para incidentes baixos */}
        <Form.Item
          label="SLA para Incidentes Baixos (horas)"
          name="incidenteBaixo"
          rules={[{ required: true, message: 'Por favor, defina o SLA para incidentes baixos.' }]}
        >
          <InputNumber min={1} placeholder="Ex: 24 horas" />
        </Form.Item>

        {/* Botão de submissão */}
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Salvar SLAs
          </Button>
        </Form.Item>
      </Form>
    </Content>
  );
};

export default SLAs;
