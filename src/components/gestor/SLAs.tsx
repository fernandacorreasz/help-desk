import React from 'react';
import { Layout, Form, InputNumber, Button } from 'antd';

const { Content } = Layout;

const SLAs: React.FC = () => {
  const onFinish = (values: unknown) => {
    console.log('Valores de SLA:', values);
  };

  return (
    <Content style={{ padding: '24px', background: '#fff', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Configuração de SLAs</h1>
      <Form
        name="slas"
        labelCol={{ span: 16 }}
        wrapperCol={{ span: 16 }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item label="SLA para Incidentes Críticos (horas)" name="incidenteCritico">
          <InputNumber min={1} />
        </Form.Item>
        <Form.Item label="SLA para Incidentes Médios (horas)" name="incidenteMedio">
          <InputNumber min={1} />
        </Form.Item>
        <Form.Item label="SLA para Incidentes Baixos (horas)" name="incidenteBaixo">
          <InputNumber min={1} />
        </Form.Item>
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
