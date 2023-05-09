import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signInSchema } from "../validation/signInSchema";
import { signUpSchema } from "../validation/signUpSchema";
import { setLoginAction, setRegisterAction } from "./../../../../redux/actions/userAction";
import "./login.css";

const Login = () => {

  const navigate = useNavigate()
  let dispatch = useDispatch();

  const  onNavigate = () => {
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };
  let handleRegisterSubmit = (values) => {
    dispatch(setRegisterAction(values, onNavigate));
  };
  let handleLoginSubmit = (values) => {
    // dispatch data login action with navigation to redux 
    dispatch(setLoginAction(values, onNavigate));
  };
  function signUp() {
    // make the animation scroll 
    document.getElementById("container").classList.add("right-panel-active");
  }

  function signIn() {
    // make the animation scroll
    document.getElementById("container").classList.remove("right-panel-active");
  }

  return (
    <div className="loginBody">
      <div className="container" id="container">
        <div className="form-container sign-up-container">
          <Formik 
          onSubmit={handleRegisterSubmit}
          validationSchema={signUpSchema} 
          initialValues={{
            taiKhoan:'',
            matKhau:'',
            hoTen:'',
            email:'',
            soDT:'',
            maNhom:'GP01',
          }}>{({handleChange,handleSubmit})=>(
             <Form onSubmit={handleSubmit} action="#" className="form-signUp">
              <h2>Đăng Ký</h2>
              <Field onChange={handleChange}  type="text" placeholder="Tài khoản" name="taiKhoan" />
              <ErrorMessage name="taiKhoan">{(msg)=><div className="errorMessage">{msg}</div>}</ErrorMessage>
              <Field onChange={handleChange} type="text" placeholder="Họ và tên" name="hoTen" />
              <ErrorMessage name="hoTen">{(msg)=><div className="errorMessage">{msg}</div>}</ErrorMessage>
              <Field
              onChange={handleChange}
                autoComplete="on"
                type="password"
                placeholder="Mật khẩu"
                name="matKhau"
              />
              <ErrorMessage name="matKhau">{(msg)=><div className="errorMessage">{msg}</div>}</ErrorMessage>
              <Field onChange={handleChange} type="email" placeholder="Email" name="email" />
              <ErrorMessage name="email">{(msg)=><div className="errorMessage">{msg}</div>}</ErrorMessage>
              <Field onChange={handleChange} type="text" placeholder="Số điện thoại" name="soDT" />
              <ErrorMessage name="soDT">{(msg)=><div className="errorMessage">{msg}</div>}</ErrorMessage>
              <Field as="select" onChange={handleChange} componet="select"  name="maNhom">
                <option>GP01</option>
                <option>GP02</option>
                <option>GP03</option>
                <option>GP04</option>
                <option>GP05</option>
                <option>GP06</option>
                <option>GP07</option>
                <option>GP08</option>
                <option>GP09</option>
                <option>GP010</option>
              </Field>
              <button type="submit">Đăng ký</button>
            </Form>
          )}
           
          </Formik>
        </div>
        <div className="form-container sign-in-container">
          <Formik
            validationSchema={signInSchema}
            initialValues={{
              email: "",
              matKhau: "",
            }}
            onSubmit={handleLoginSubmit}
          >
            {({ handleChange, handleSubmit }) => (
              <Form
                onSubmit={handleSubmit}
                className="formLoginUser"
                action="#"
              >
                <h1>Đăng nhập</h1>
                <span>hoặc sử dụng tài khoản đã đăng ký của bạn</span>
                {/* <Field
                  type="text"
                  placeholder="Tài khoản"
                  name="taiKhoan"
                  onChange={handleChange}
                />
                <ErrorMessage name="taiKhoan">
                  {(msg) => <div className="errorMessage">{msg}</div>}
                </ErrorMessage> */}


                <Field onChange={handleChange} type="email" placeholder="Email" name="email" />
              <ErrorMessage name="email">{(msg)=><div className="errorMessage">{msg}</div>}</ErrorMessage>
                <Field
                  onChange={handleChange}
                  autoComplete="on"
                  type="password"
                  placeholder="Mật khẩu"
                  name="matKhau"
                />
                <ErrorMessage name="matKhau">
                  {(msg) => <div className="errorMessage">{msg}</div>}
                </ErrorMessage>
                <a href="#!">Quên mật khẩu?</a>
                <button type="submit">Đăng nhập</button>
              </Form>
            )}
          </Formik>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Chào mừng bạn đã trở lại!</h1>
              <span>Vui lòng đăng nhập để kết nối với tài khoản của bạn</span>
              <button
                className="ghost"
                id="signIn"
                onClick={() => {
                  signIn();
                }}
              >
                Đăng nhập
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Xin chào!</h1>
              <span>
                Vui lòng nhấn đăng ký để thiết lập thông tin tài khoản của bạn!
              </span>
              <button
                className="ghost"
                id="signUp"
                onClick={() => {
                  signUp();
                }}
              >
                Đăng ký
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
