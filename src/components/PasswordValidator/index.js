// Write your code here
import {useState} from 'react'
import {
  MainContainer,
  Card,
  Heading,
  Para,
  PasswordInput,
  ErrorMsg,
} from './styledComponents'

const PasswordValidator = () => {
  const [pass, isPassword] = useState('')

  const onChangePasswordLength = event => {
    isPassword(event.target.value)
  }

  return (
    <MainContainer>
      <Card>
        <Heading>Password Validator</Heading>
        <Para>Check how strong and secure is your password</Para>
        <PasswordInput
          type="Password"
          value={pass}
          onChange={onChangePasswordLength}
        />
        {pass.length < 8 ? (
          <ErrorMsg>Your password must be at least 8 characters</ErrorMsg>
        ) : (
          ''
        )}
      </Card>
    </MainContainer>
  )
}

export default PasswordValidator
