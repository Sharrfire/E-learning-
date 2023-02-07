import React from "react";
import { Button, Form, Input } from "antd";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setLoginAction } from "~/redux/actions/userAction";


function LoginForm(props) {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const onFinish = (values) => {
    console.log("Success:", values);
    let onNavigate = ()=>{
      setTimeout(()=>{
        navigate("/");
      },1000);
    };
    dispatch(setLoginAction(values,onNavigate));
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div
      style={{
        marginTop: "24px",
      }}
    >
      <Form
        name="basic"
        labelCol={{
          span: 6,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Tài khoản"
          name="taiKhoan"
          rules={[
            {
              required: true,
              message: "Tài khoản không được để trống!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Mật Khẩu"
          name="matKhau"
          rules={[
            {
              required: true,
              message: "Mật khẩu không được để trống!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 10,
            span: 16,
          }}
        >
          <Button
            type="primary"
            htmlType="submit"
          >
            Xác nhận
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}


export default LoginForm;
