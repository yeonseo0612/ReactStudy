import { Container, Grid, TextField, Button, Box, Typography } from '@mui/material';
import { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // 로그인 제출 함수
  const handleSubmit = (e) => {
    e.preventDefault();
    // 로그인 로직을 여기에 추가
    console.log('로그인 정보:', { username, password });
    // 예시: API 호출 등을 통해 로그인 요청 처리
  };

  return (
    <Container>
      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="100vh">
        <Grid container spacing={2} direction="column" alignItems="center">
          <Grid item xs={12}>
            <Typography component="h1" variant='h5'>
              로그인
            </Typography>
          </Grid>
        </Grid>
        <form noValidate onSubmit={handleSubmit}>
          <Grid container spacing={2} direction="column" alignItems="center">
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                required
                fullWidth
                id="username"
                label="이메일 주소"
                name="username"
                autoComplete='username'
                value={username}
                onChange={(e) => setUsername(e.target.value)} 
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                required
                fullWidth
                id="password"
                label="비밀번호"
                name="password"
                autoComplete='current-password'
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} 
              />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" fullWidth variant="contained" color='primary'>
              로그인
            </Button>
          </Grid>
        </form>
      </Box>
    </Container>
  );
};

export default Login;