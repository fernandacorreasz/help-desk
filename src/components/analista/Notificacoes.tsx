import React from 'react';
import { List, Badge } from 'antd';

const data = [
  { id: 1, message: "Novo ticket atribuído a você.", status: 'unread' },
  { id: 2, message: "Ticket resolvido por outro analista.", status: 'read' },
  { id: 3, message: "Novo comentário no ticket #3.", status: 'unread' }
];

const Notificacoes: React.FC = () => (
  <div style={{ padding: '24px' }}>
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

export default Notificacoes;
