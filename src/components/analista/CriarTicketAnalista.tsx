import React from 'react';
import { Form, Input, Button, Select, DatePicker, Radio, Layout, message } from 'antd';

const { Content } = Layout;
const { TextArea } = Input;
const { Option } = Select;

const CriarTicketAnalista: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: unknown) => {
    console.log('Ticket Criado:', values);
    message.success('Ticket criado com sucesso!');
    form.resetFields();
  };

  return (
    <Content style={{ padding: '24px', background: '#fff' }}>
      <h1>Criar Novo Ticket - Analista</h1>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        initialValues={{ prioridade: 'Média' }}
      >
        <Form.Item
          name="titulo"
          label="Título do Ticket"
          rules={[{ required: true, message: 'Por favor, insira o título do ticket' }]}
        >
          <Input placeholder="Digite o título do ticket" />
        </Form.Item>

        <Form.Item
          name="categoria"
          label="Categoria"
          rules={[{ required: true, message: 'Por favor, selecione a categoria' }]}
        >
          <Select placeholder="Selecione a categoria">
            <Option value="software">Software</Option>
            <Option value="hardware">Hardware</Option>
            <Option value="rede">Rede</Option>
            <Option value="outros">Outros</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="descricao"
          label="Descrição"
          rules={[{ required: true, message: 'Por favor, insira a descrição do problema' }]}
        >
          <TextArea rows={4} placeholder="Descreva o problema" />
        </Form.Item>

        <Form.Item
          name="prioridade"
          label="Prioridade"
          rules={[{ required: true, message: 'Por favor, selecione a prioridade' }]}
        >
          <Select>
            <Option value="Baixa">Baixa</Option>
            <Option value="Média">Média</Option>
            <Option value="Alta">Alta</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="data"
          label="Data de Abertura"
          rules={[{ required: true, message: 'Por favor, selecione a data de abertura' }]}
        >
          <DatePicker style={{ width: '100%' }} />
        </Form.Item>

        {/* Campos adicionais para opções específicas */}
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
          rules={[{ required: true, message: 'Por favor, selecione uma opção' }]}
        >
          <Radio.Group>
            <Radio value="Sim">Sim</Radio>
            <Radio value="Não">Não</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          name="ambienteOnPremise"
          label="Ambiente OnPremise?"
          rules={[{ required: true, message: 'Por favor, selecione uma opção' }]}
        >
          <Radio.Group>
            <Radio value="Sim">Sim</Radio>
            <Radio value="Não">Não</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          name="status"
          label="Status"
          rules={[{ required: true, message: 'Por favor, selecione o status do ticket' }]}
        >
          <Radio.Group>
            <Radio value="Aberto">Aberto</Radio>
            <Radio value="Em andamento">Em andamento</Radio>
            <Radio value="Resolvido">Resolvido</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Criar Ticket
          </Button>
        </Form.Item>
      </Form>
    </Content>
  );
};

export default CriarTicketAnalista;
