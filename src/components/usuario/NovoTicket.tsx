import React from 'react';
import { Form, Input, Button, DatePicker, Layout, Radio } from 'antd';

const { Content } = Layout;
const { TextArea } = Input;

const NovoTicket: React.FC = () => {
  const onFinish = (values: unknown) => {
    console.log('Success:', values);
  };

  return (
    <Content style={{ padding: '24px', background: '#fff', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Criar Novo Ticket</h1>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="Título"
          name="title"
          rules={[{ required: true, message: 'Por favor, insira o título do ticket!' }]}
        >
          <Input placeholder="Digite o título do ticket" />
        </Form.Item>

        <Form.Item
          label="Descrição"
          name="description"
          rules={[{ required: true, message: 'Por favor, insira a descrição do ticket!' }]}
        >
          <TextArea rows={4} placeholder="Descreva o problema" />
        </Form.Item>

        <Form.Item
          label="Data de Abertura"
          name="date"
          rules={[{ required: true, message: 'Por favor, selecione a data de abertura!' }]}
        >
          <DatePicker style={{ width: '100%' }} />
        </Form.Item>

        {/* Campos adicionais */}
        <Form.Item
          name="sistemaOff"
          label="Sistema Off?"
          rules={[{ required: true, message: 'Por favor, selecione uma opção' }]}
        >
          <Radio.Group>
            <Radio value="Sim">Sim</Radio>
            <Radio value="Não">Não</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          name="rotinaInterrompida"
          label="Rotina Interrompida?"
          rules={[{ required: true, message: 'Por favor, selecione uma opção' }]}>
          <Radio.Group>
            <Radio value="Sim">Sim</Radio>
            <Radio value="Não">Não</Radio>
          </Radio.Group>
        </Form.Item>


        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Criar Ticket
          </Button>
        </Form.Item>
      </Form>
    </Content>
  );
};

export default NovoTicket;
