import React, { useState } from 'react';
import { Table, Button, Popconfirm, message, Modal, Form, Input, Select } from 'antd';

const { Option } = Select;

const GerenciamentoUsuarios: React.FC = () => {
  // Estado para gerenciar os dados da tabela
  const [users, setUsers] = useState([
    { key: '1', name: 'João Silva', role: 'Usuário', tickets: 5 },
    { key: '2', name: 'Maria Oliveira', role: 'Analista', tickets: 8 },
    { key: '3', name: 'Carlos Souza', role: 'Gestor', tickets: 2 },
    { key: '4', name: 'Fernanda Costa', role: 'Usuário', tickets: 3 },
    { key: '5', name: 'Paulo Santos', role: 'Analista', tickets: 6 },
    { key: '6', name: 'Clara Nunes', role: 'Gestor', tickets: 1 },
  ]);

  // Estado para controlar o modal de adicionar usuário
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();

  // Função para adicionar um novo usuário
  const handleAddUser = (values: { name: string; role: string }) => {
    const newUser = {
      key: (users.length + 1).toString(),
      name: values.name,
      role: values.role,
      tickets: 0,
    };
    setUsers([...users, newUser]);
    message.success('Usuário adicionado com sucesso!');
    form.resetFields();
    setIsModalVisible(false);
  };

  // Função para excluir um usuário
  const handleDelete = (key: string) => {
    const newUsers = users.filter(user => user.key !== key);
    setUsers(newUsers);
    message.success(`Usuário ${key} excluído.`);
  };

  // Colunas da tabela
  const columns = [
    { title: 'Nome', dataIndex: 'name', key: 'name' },
    { title: 'Cargo', dataIndex: 'role', key: 'role' },
    { title: 'Tickets Abertos', dataIndex: 'tickets', key: 'tickets' },
    {
      title: 'Ações',
      key: 'actions',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      render: (text: any, record: any) => (
        <div>
          <Button type="primary" style={{ marginRight: 8 }}>
            Editar
          </Button>
          <Popconfirm
            title="Tem certeza que deseja excluir este usuário?"
            onConfirm={() => handleDelete(record.key)}
            okText="Sim"
            cancelText="Não"
          >
            <Button type="primary" danger>
              Excluir
            </Button>
          </Popconfirm>
        </div>
      ),
    },
  ];

  return (
    <div style={{ padding: '24px', background: '#fff' }}>
      <h1>Gerenciamento de Usuários</h1>
      <Button type="primary" style={{ marginBottom: 16 }} onClick={() => setIsModalVisible(true)}>
        Adicionar Novo Usuário
      </Button>
      <Table columns={columns} dataSource={users} />

      {/* Modal para adicionar novo usuário */}
      <Modal
        title="Adicionar Novo Usuário"
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
      >
        <Form form={form} layout="vertical" onFinish={handleAddUser}>
          <Form.Item
            name="name"
            label="Nome do Usuário"
            rules={[{ required: true, message: 'Por favor, insira o nome do usuário' }]}
          >
            <Input placeholder="Nome do Usuário" />
          </Form.Item>
          <Form.Item
            name="role"
            label="Cargo"
            rules={[{ required: true, message: 'Por favor, selecione o cargo do usuário' }]}
          >
            <Select placeholder="Selecione o Cargo">
              <Option value="Usuário">Usuário</Option>
              <Option value="Analista">Analista</Option>
              <Option value="Gestor">Gestor</Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Adicionar
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default GerenciamentoUsuarios;
