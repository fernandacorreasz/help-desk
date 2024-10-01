import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import users from '../../assets/dataTest/users.json';
import './Login.css'; // Importando o arquivo CSS

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
      if (user.role === 'user') navigate('/usuario/dashboard');
      if (user.role === 'analyst') navigate('/analista');
      if (user.role === 'manager') navigate('/gestor/metricas');
    } else {
      alert('Login inválido!');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="login-title">Help Desk</h1>
        <input
          type="text"
          placeholder="Digite seu email"
          value={username}
          onChange={e => setUsername(e.target.value)}
          className="login-input"
        />
        <input
          type="password"
          placeholder="Digite sua senha"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="login-input"
        />
        <button onClick={handleLogin} className="login-button">
          Entrar
        </button>
      </div>
      <div className="login-side">
        <h1 className="side-text">AidPoint</h1>
        <div className="user-credentials">
          <h2>Credenciais de Teste</h2>
          <div className="credentials-card">
            <p><b>Usuário Final:</b> juliana / Senha: 123</p>
            <p><b>Analista:</b> pablo / Senha: 123</p>
            <p><b>Gestor:</b> pedro / Senha: 123</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
