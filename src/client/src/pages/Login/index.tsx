import React from 'react'
import LoginForm from './LoginForm'
import { Button } from 'src/components/buttons';
import useCustomMutation from 'src/hooks/useCustomMutation';
import useRouter from 'src/hooks/useRouter';
import { Space } from 'src/components/layout';

const Login = () => {
  const handleGoogleLogin = () => {
    window.location.replace(`${process.env.REACT_APP_SERVER_DOMAIN}/api/public/auth/google`)
  }

  const handleKakaoLogin = () => {
    window.location.replace(`${process.env.REACT_APP_SERVER_DOMAIN}/api/public/auth/kakao`)
  }

  const handleNaverLogin = () => {
    window.location.replace(`${process.env.REACT_APP_SERVER_DOMAIN}/api/public/auth/naver`)
  }

  const handleFacebookLogin = () => {
    window.location.replace(`${process.env.REACT_APP_SERVER_DOMAIN}/api/public/auth/facebook`)
  }

  return (
    <div>
      <LoginForm />
      <Button
        label='google login'
        onClick={handleGoogleLogin}
      />
      <Space margin='1rem 0' />
      <Button
        label='kakao login'
        onClick={handleKakaoLogin}
      />
      <Space margin='1rem 0' />
      <Button
        label='naver login'
        onClick={handleNaverLogin}
      />
      <Space margin='1rem 0' />
      <Button
        label='facebook login'
        onClick={handleFacebookLogin}
      />
      <Space margin='1rem 0' />
    </div>
  )
}

export default Login
