import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const LoginSuccess = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");
    const id = params.get("id");
    const userName = params.get("userName");
    const role = params.get("role");
    const avatarUrl = params.get("avatarUrl");
    const email = params.get("email");

    if (token) {
      login({ id, userName, role, avatarUrl, email }, token);
      if (role === 'admin') {
        navigate("/admin");
      } else {
        navigate("/");
      }
    } else {
      navigate("/");
    }
  }, [navigate, login]);

  return <div>Đang đăng nhập...</div>;
};

export default LoginSuccess;