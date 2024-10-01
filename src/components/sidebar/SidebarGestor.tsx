import React from 'react';
import { Avatar, Layout, Menu } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { 
  BarChartOutlined, 
  CheckCircleOutlined, 
  SettingOutlined, 
  PieChartOutlined, 
  NotificationOutlined, 
  TeamOutlined, 
  LogoutOutlined 
} from '@ant-design/icons';

const { Sider } = Layout;

const SidebarGestor: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <Sider collapsible>
      <div style={{ textAlign: 'center', padding: '16px', color: '#fff' }}>
        <div style={{ marginBottom: '8px' }}>
          <Avatar size={64} icon={<TeamOutlined />} />
        </div>
        <div>
          <strong>Pedro</strong>
          <p style={{ margin: 0 }}>Gestor</p>
        </div>
      </div>
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        <Menu.Item key="1" icon={<BarChartOutlined />}>
          <Link to="/gestor/metricas">Métricas</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<CheckCircleOutlined />}>
          <Link to="/gestor/aprovacoes">Aprovações de Mudanças</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<SettingOutlined />}>
          <Link to="/gestor/slas">Configurações de SLAs</Link>
        </Menu.Item>
        <Menu.Item key="4" icon={<NotificationOutlined />}>
          <Link to="/gestor/notificacoes">Notificações</Link>
        </Menu.Item>
        <Menu.Item key="5" icon={<PieChartOutlined />}>
          <Link to="/gestor/relatorios">Relatórios</Link>
        </Menu.Item>
        <Menu.Item key="6" icon={<TeamOutlined />}>
          <Link to="/gestor/usuarios">Gerenciamento de Usuários</Link>
        </Menu.Item>
        <Menu.Item key="7" icon={<LogoutOutlined />} onClick={handleLogout}>
          Sair
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default SidebarGestor;
