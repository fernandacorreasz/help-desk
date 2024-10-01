import React from 'react';
import { Layout, Menu, Avatar, Badge } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import {
  BarChartOutlined,
  BellOutlined,
  UserOutlined,
  SettingOutlined,
  HistoryOutlined,
  FileTextOutlined,
  LogoutOutlined,
} from '@ant-design/icons';

const { Sider } = Layout;

const SidebarUsuario: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/'); 
  };

  return (
    <Sider collapsible>
      <div style={{ textAlign: 'center', padding: '16px', color: '#fff' }}>
        <div style={{ marginBottom: '8px' }}>
          <Avatar size={64} icon={<UserOutlined />} />
        </div>
        <div>
          <strong>Juliana</strong>
          <p style={{ margin: 0 }}>Usuário Final</p>
        </div>
      </div>
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        <Menu.Item key="1" icon={<BarChartOutlined />}>
          <Link to="/usuario/dashboard">Dashboard</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<UserOutlined />}>
          <Link to="/usuario/novo-ticket">Criar Ticket</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<BellOutlined />}>
          <Link to="/usuario/notificacoes">
            Notificações
            <Badge count={3} style={{ backgroundColor: '#f5222d', marginLeft: '10px' }} />
          </Link>
        </Menu.Item>
        <Menu.Item key="4" icon={<FileTextOutlined />}>
          <Link to="/usuario/meus-tickets">Meus Tickets</Link>
        </Menu.Item>
        <Menu.Item key="5" icon={<HistoryOutlined />}>
          <Link to="/usuario/relatorios">Histórico de Tickets</Link>
        </Menu.Item>
        <Menu.Item key="6" icon={<SettingOutlined />}>
          <Link to="/usuario/configuracoes">Configurações de Perfil</Link>
        </Menu.Item>
        <Menu.Item key="7" icon={<LogoutOutlined />} onClick={handleLogout}>
          Sair
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default SidebarUsuario;
