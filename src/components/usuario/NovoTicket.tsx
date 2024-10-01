import React from 'react';
import { Form, Input, Button } from 'antd';

const NovoTicket: React.FC = () => {
  const onFinish = (values: unknown) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: unknown) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div style={{ padding: '24px', background: '#fff', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Criar Novo Ticket</h1>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Título"
          name="title"
          rules={[{ required: true, message: 'Por favor, insira o título do ticket!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Descrição"
          name="description"
          rules={[{ required: true, message: 'Por favor, insira a descrição do ticket!' }]}
        >
          <Input.TextArea />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Criar Ticket
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default NovoTicket;
