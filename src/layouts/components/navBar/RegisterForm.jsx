import React from 'react'
import PropTypes from 'prop-types'
import { Button, Form, Input, InputNumber,Select } from 'antd';
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const { Option } = Select;
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
const onFinish = (values) => {
  console.log(values);
};

function RegisterForm(props) {
  return (
    <div>
      <Form
    {...layout}
    name="nest-messages"
    onFinish={onFinish}
    style={{
      maxWidth: 600,
    }}
    validateMessages={validateMessages}
  >
    <Form.Item
      name={['user', 'taiKhoan']}
      label="Tài Khoản"
      rules={[
        {
          required: true,
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      name={['user', 'matKhau']}
      label="Mật khẩu"
      rules={[
        {
          required: true,
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      name={['user', 'hoTen']}
      label="Họ và tên"
      rules={[
        {
          required: true,
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      name={['user', 'soDT']}
      label="Số điện thoại"
      rules={[
        {
          required: true,
        },
      ]}
    >
       <Input />
    </Form.Item>
    <Form.Item
      name={['user', 'maNhom']}
      label="Mã nhóm"
      rules={[
        {
          required: true,
        },
      ]}
    >
       <Select style={{ width: "50%" }}>
              <Option value="GP00">GP00</Option>
              <Option value="GP01">GP01</Option>
              <Option value="GP02">GP02</Option>
              <Option value="GP03">GP03</Option>
              <Option value="GP04">GP04</Option>
              <Option value="GP05">GP05</Option>
              <Option value="GP06">GP06</Option>
              <Option value="GP07">GP07</Option>
              <Option value="GP08">GP08</Option>
              <Option value="GP09">GP09</Option>
              <Option value="GP10">GP10</Option>
            </Select>
    </Form.Item>
    <Form.Item
      name={['user', 'email']}
      label="Email"
      rules={[
        {
          type: 'email',
        },
        {
          required: true,
        }
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      wrapperCol={{
        ...layout.wrapperCol,
        offset: 8,
      }}
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>

    </div>
  )
}

RegisterForm.propTypes = {}

export default RegisterForm
