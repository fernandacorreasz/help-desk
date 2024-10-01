import React from 'react';
import { List, Badge } from 'antd';

const data = [
  { id: 1, message: "Nova solicitação de mudança.", status: 'unread' },
  { id: 2, message: "SLA violado em ticket #123.", status: 'read' },
  { id: 3, message: "Atualização em ticket #456.", status: 'unread' },
];

const NotificacoesGestor: React.FC = () => (
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

export default NotificacoesGestor;
