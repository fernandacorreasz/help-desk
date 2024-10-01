import React from 'react';
import { List, Badge } from 'antd';

const data = [
  { id: 1, message: "Seu ticket 'Problema de Conexão' foi atualizado para 'Em Progresso'.", status: 'unread' },
  { id: 2, message: "Novo comentário no ticket 'Erro no Sistema'.", status: 'unread' },
  { id: 3, message: "Seu ticket 'Atualização de Software' foi resolvido.", status: 'read' },
];

const NotificacoesUsuario: React.FC = () => (
  <div style={{ padding: '24px', background: '#fff' }}>
    <h1>Notificações</h1>
    <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={item => (
        <List.Item>
          <List.Item.Meta
            title={<Badge dot={item.status === 'unread'}>{item.message}</Badge>}
          />
        </List.Item>
      )}
    />
  </div>
);

export default NotificacoesUsuario;
