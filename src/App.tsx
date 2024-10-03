import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login/Login";
import SidebarUsuario from "./components/sidebar/SidebarUsuario";
import SidebarAnalista from "./components/sidebar/SidebarAnalista";
import SidebarGestor from "./components/sidebar/SidebarGestor";
import { Usuario } from "./pages/Usuario";
import Relatorios from "./components/usuario/RelatoriosTicketsAbertos";
import { Layout } from "antd";
import Aprovacoes from "./components/gestor/Aprovacoes";
import Metricas from "./components/gestor/Metricas";
import HistoricoTicketsAnalista from "./components/analista/HistoricoTicketsAnalista";
import ConfiguracoesPerfil from "./components/analista/ConfiguracaoPerfil";
import Notificacoes from "./components/analista/Notificacoes";
import Monitoramento from "./components/analista/Monitoramento";
import MeusTickets from "./components/analista/MeusTickets";
import CriarTicketAnalista from "./components/analista/CriarTicketAnalista";
import NovoTicket from "./components/usuario/NovoTicket";
import NotificacoesUsuario from "./components/usuario/NotificacoesUser";
import GerenciamentoUsuarios from "./components/gestor/GerenciamentoUsuarios";
import NotificacoesGestor from "./components/gestor/NotificacoesGestor";
import SLAs from "./components/gestor/SLAs";
import RelatoriosGestor from "./components/gestor/Relatorios";
import ConfiguracoesPerfilUser from "./components/usuario/ConfiguracaoPerfil";
import DashboardAnalista from "./components/analista/DashboardAnalista";
import DashboardUsuario from "./components/usuario/DashboardUsuario";

const { Content } = Layout;

const App: React.FC = () => (
  <Router>
    <Layout style={{ minHeight: "100vh", display: "flex" }}>
      <Routes>
        {/* Login */}
        <Route path="/" element={<Login />} />

        {/* Rotas para Usuário */}
        <Route
          path="/usuario/dashboard"
          element={
            <Layout hasSider style={{ display: "flex" }}>
              <SidebarUsuario />
              <Layout className="site-layout" style={{ flex: 1 }}>
                <Content
                  style={{
                    margin: "24px 16px",
                    padding: 24,
                    background: "#fff",
                    minHeight: 280,
                  }}
                >
                  <DashboardUsuario />
                </Content>
              </Layout>
            </Layout>
          }
        />
        <Route
          path="/usuario/novo-ticket"
          element={
            <Layout hasSider style={{ display: "flex" }}>
              <SidebarUsuario />
              <Layout className="site-layout" style={{ flex: 1 }}>
                <Content
                  style={{
                    margin: "24px 16px",
                    padding: 24,
                    background: "#fff",
                    minHeight: 280,
                  }}
                >
                  <NovoTicket />
                </Content>
              </Layout>
            </Layout>
          }
        />
        <Route
          path="/usuario/relatorios"
          element={
            <Layout hasSider style={{ display: "flex" }}>
              <SidebarUsuario />
              <Layout className="site-layout" style={{ flex: 1 }}>
                <Content
                  style={{
                    margin: "24px 16px",
                    padding: 24,
                    background: "#fff",
                    minHeight: 280,
                  }}
                >
                  <Relatorios />
                </Content>
              </Layout>
            </Layout>
          }
        />
        <Route
          path="/usuario/meus-tickets"
          element={
            <Layout hasSider style={{ display: "flex" }}>
              <SidebarUsuario />
              <Layout className="site-layout" style={{ flex: 1 }}>
                <Content
                  style={{
                    margin: "24px 16px",
                    padding: 24,
                    background: "#fff",
                    minHeight: 280,
                  }}
                >
                  <Usuario />
                </Content>
              </Layout>
            </Layout>
          }
        />
        <Route
          path="/usuario/configuracoes"
          element={
            <Layout hasSider style={{ display: "flex" }}>
            <SidebarUsuario />
              <Layout className="site-layout" style={{ flex: 1 }}>
                <Content
                  style={{
                    margin: "24px 16px",
                    padding: 24,
                    background: "#fff",
                    minHeight: 280,
                  }}
                >
                  <ConfiguracoesPerfilUser />
                </Content>
              </Layout>
            </Layout>
          }
        />
        <Route
          path="/usuario/notificacoes"
          element={
            <Layout hasSider style={{ display: "flex" }}>
              <SidebarUsuario />
              <Layout className="site-layout" style={{ flex: 1 }}>
                <Content
                  style={{
                    margin: "24px 16px",
                    padding: 24,
                    background: "#fff",
                    minHeight: 280,
                  }}
                >
                  <NotificacoesUsuario />
                </Content>
              </Layout>
            </Layout>
          }
        />

        <Route
          path="/analista/configuracoes"
          element={
            <Layout hasSider style={{ display: "flex" }}>
              <SidebarAnalista />
              <Layout className="site-layout" style={{ flex: 1 }}>
                <Content
                  style={{
                    margin: "24px 16px",
                    padding: 24,
                    background: "#fff",
                    minHeight: 280,
                  }}
                >
                  <ConfiguracoesPerfil />
                </Content>
              </Layout>
            </Layout>
          }
        />

        {/* Rotas para Analista */}
        <Route
          path="/analista"
          element={
            <Layout hasSider style={{ display: "flex" }}>
              <SidebarAnalista />
              <Layout className="site-layout" style={{ flex: 1 }}>
                <Content
                  style={{
                    margin: "24px 16px",
                    padding: 24,
                    background: "#fff",
                    minHeight: 280,
                  }}
                >
                  <DashboardAnalista />
                </Content>
              </Layout>
            </Layout>
          }
        />
        <Route
          path="/analista/historico"
          element={
            <Layout hasSider style={{ display: "flex" }}>
              <SidebarAnalista />
              <Layout className="site-layout" style={{ flex: 1 }}>
                <Content
                  style={{
                    margin: "24px 16px",
                    padding: 24,
                    background: "#fff",
                    minHeight: 280,
                  }}
                >
                  <HistoricoTicketsAnalista />
                </Content>
              </Layout>
            </Layout>
          }
        />
        <Route
          path="/analista/notificacoes"
          element={
            <Layout hasSider style={{ display: "flex" }}>
              <SidebarAnalista />
              <Layout className="site-layout" style={{ flex: 1 }}>
                <Content
                  style={{
                    margin: "24px 16px",
                    padding: 24,
                    background: "#fff",
                    minHeight: 280,
                  }}
                >
                  <Notificacoes />
                </Content>
              </Layout>
            </Layout>
          }
        />
        <Route
          path="/analista/configuracoes"
          element={
            <Layout hasSider style={{ display: "flex" }}>
              <SidebarAnalista />
              <Layout className="site-layout" style={{ flex: 1 }}>
                <Content
                  style={{
                    margin: "24px 16px",
                    padding: 24,
                    background: "#fff",
                    minHeight: 280,
                  }}
                >
                  <ConfiguracoesPerfil />
                </Content>
              </Layout>
            </Layout>
          }
        />
        <Route
          path="/analista/historico"
          element={
            <Layout hasSider style={{ display: "flex" }}>
              <SidebarAnalista />
              <Layout className="site-layout" style={{ flex: 1 }}>
                <Content
                  style={{
                    margin: "24px 16px",
                    padding: 24,
                    background: "#fff",
                    minHeight: 280,
                  }}
                >
                  <HistoricoTicketsAnalista />
                </Content>
              </Layout>
            </Layout>
          }
        />
        <Route
          path="/analista/monitoramento"
          element={
            <Layout hasSider style={{ display: "flex" }}>
              <SidebarAnalista />
              <Layout className="site-layout" style={{ flex: 1 }}>
                <Content
                  style={{
                    margin: "24px 16px",
                    padding: 24,
                    background: "#fff",
                    minHeight: 280,
                  }}
                >
                  <Monitoramento />
                </Content>
              </Layout>
            </Layout>
          }
        />
        <Route
          path="/analista/meus-tickets"
          element={
            <Layout hasSider style={{ display: "flex" }}>
              <SidebarAnalista />
              <Layout className="site-layout" style={{ flex: 1 }}>
                <Content
                  style={{
                    margin: "24px 16px",
                    padding: 24,
                    background: "#fff",
                    minHeight: 280,
                  }}
                >
                  <MeusTickets />
                </Content>
              </Layout>
            </Layout>
          }
        />

        <Route
          path="/analista/criar-ticket"
          element={
            <Layout hasSider style={{ display: "flex" }}>
              <SidebarAnalista />
              <Layout className="site-layout" style={{ flex: 1 }}>
                <Content
                  style={{
                    margin: "24px 16px",
                    padding: 24,
                    background: "#fff",
                    minHeight: 280,
                  }}
                >
                  <CriarTicketAnalista />
                </Content>
              </Layout>
            </Layout>
          }
        />

        {/* Rotas para Gestor */}
        <Route
          path="/gestor/metricas"
          element={
            <Layout hasSider style={{ display: 'flex' }}>
              <SidebarGestor />
              <Metricas />
            </Layout>
          }
        />
        <Route
          path="/gestor/aprovacoes"
          element={
            <Layout hasSider style={{ display: 'flex' }}>
              <SidebarGestor />
              <Aprovacoes />
            </Layout>
          }
        />
        <Route
          path="/gestor/slas"
          element={
            <Layout hasSider style={{ display: 'flex' }}>
              <SidebarGestor />
              <SLAs />
            </Layout>
          }
        />
        <Route
          path="/gestor/notificacoes"
          element={
            <Layout hasSider style={{ display: 'flex' }}>
              <SidebarGestor />
              <NotificacoesGestor />
            </Layout>
          }
        />
        <Route
          path="/gestor/relatorios"
          element={
            <Layout hasSider style={{ display: 'flex' }}>
              <SidebarGestor />
              <RelatoriosGestor />
            </Layout>
          }
        />
        <Route
          path="/gestor/usuarios"
          element={
            <Layout hasSider style={{ display: 'flex' }}>
              <SidebarGestor />
              <GerenciamentoUsuarios />
            </Layout>
          }
        />
        {/* Outras rotas para analista e usuário */}
      </Routes>
    </Layout>
  </Router>
);

export default App;
