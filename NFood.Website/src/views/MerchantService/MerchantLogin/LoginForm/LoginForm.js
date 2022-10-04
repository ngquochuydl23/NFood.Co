import React from 'react'
import AccountTextInput from '@components/AccountTextInput'
import { Formik, Form } from 'formik';
import Container from '@mui/material/Container';
import scheme from './scheme';
import { useNavigate } from "react-router-dom";
import { IcShowPassword, IcHidePassword } from '@assets/icons';
import './login-style.scss'
import { FilledButton, OutlineButton } from '@components/Button';

const LoginForm = () => {
  const navigate = useNavigate();

  const LineCross = () => (
    <div className='form-line-contain'>
      <div className='line left' />
      OR
      <div className='line right' />
    </div>
  )

  return (
    <Container>
      <div className='login-contain'>
        <div className='login-illustration'>

        </div>

        <div className='login-form'>
          <h3 className='form-title'>Login to NFood Merchant</h3>
          <Formik
            validationSchema={scheme}
            initialValues={{ email: '', password: '' }}
            onSubmit={() => navigate('../dashboard')}>
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting
            }) => (
              <Form>
                <AccountTextInput
                  className='form-email'
                  type="email"
                  name='email'
                  hint='Email của bạn'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  error={errors.email && touched.email && errors.email}
                />
                <AccountTextInput
                  className='form-password'
                  name='password'
                  type='password'
                  hint='Mật khẩu của bạn'
                  enableRightButton
                  rightButtonType='toggle'
                  rightIconToggleOff={IcShowPassword}
                  rightIconToggleOn={IcHidePassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  error={errors.password && touched.password && errors.password}
                />
                <FilledButton
                  className='form-login-button'
                  text='Login'
                  type="submit"
                  disabled={isSubmitting} />
                <LineCross />
                <OutlineButton
                  className='form-register-button '
                  text='Become a partner'
                  onClick={() => navigate("../register")} />
              </Form>
            )}
          </Formik>

        </div>
      </div>
    </Container>
  )
}

export default LoginForm;
