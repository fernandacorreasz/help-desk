import React from 'react';
import { Form, Input, Button, Avatar } from 'antd';

const ConfiguracoesPerfilUser: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: unknown) => {
    console.log('Received values of form:', values);
  };

  return (
    <div style={{ padding: '24px' }}>
      <h1>Configurações de Perfil</h1>
      <Avatar size={100} src="https://your-image-url.com/user-avatar.png" />
      <Form
        form={form}
        name="profile-settings"
        layout="vertical"
        onFinish={onFinish}
        initialValues={{ name: 'Juliana', email: 'Juliana@example.com' }}
        style={{ marginTop: '16px' }}
      >
        <Form.Item name="name" label="Nome">
          <Input placeholder="Seu nome completo" />
        </Form.Item>
        <Form.Item name="email" label="Email">
          <Input placeholder="Seu email" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Salvar Alterações
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ConfiguracoesPerfilUser;
