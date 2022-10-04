import * as Yup from 'yup';

const scheme = Yup.object().shape({
  password: Yup.string()
    .min(8, 'Mật khẩu tối thiểu 8 kí tự')
    .required('Vui lòng nhập password'),
  email: Yup.string().email('Email không hợp lệ').required('Vui lòng nhập email'),
});

export default scheme