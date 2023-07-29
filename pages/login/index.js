'use client';
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useEffect, useState} from "react";
import login from "@/api/login";
import LoadingButton from '@mui/lab/LoadingButton';
import { useRouter } from 'next/router';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © J8-116 All Reserved '}
            <Link color="inherit" href="https://bbs.swu.social/">
                bbs.swu.social
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}


// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignIn() {
    const [loading, setLoading] = React.useState(false);
    const [accoutError, setAccountError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const router = useRouter();
    const clearHelperText = () => {
        setAccountError('');
        setPasswordError('');
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        setLoading(true);
        // 创建一个 JSON 对象
        const data = new FormData(event.currentTarget);
        console.log({
            account: data.get('account'),
            password: data.get('password'),
        });

        if (data.get('account').trim().length === 0) {
            setLoading(false);
            setAccountError("账号不能为空");
            return;
        } else if (data.get('password').trim().length === 0) {
            setLoading(false);
            setPasswordError("密码不能为空");
            return;
        }
        login(data)
            .then(response => {
                console.log(response.headers);
                console.log("test");
                if ( response.headers.get("1235d6") === "true") {
                    console.log("登录成功！");
                    router.push('/');
                } else {
                    console.log("认证失败！");
                    setPasswordError("用户名或密码错误！请重试或点击\"忘记密码\"以重置密码");
                    setLoading(false);
                }
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        登录
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            autoFocus
                            margin="normal"
                            required
                            fullWidth
                            id="account"
                            label="校园账号"
                            name="account"
                            error={Boolean(accoutError)}
                            helperText={accoutError}
                            onChange={clearHelperText}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="密码"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            error={Boolean(passwordError)}
                            helperText={passwordError}
                            onChange={clearHelperText}
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="记住密码"
                        />
                        <LoadingButton
                            type="submit"
                            loading={loading}
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            fullWidth
                        >
                            <span>登录</span>
                        </LoadingButton>

                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    忘记密码？
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider>
    );
}

export async function getServerSideProps(context) {
    if (context.req.cookies['doorKey'] != null) {
        return {
            redirect: {
                permanent: false,
                destination: '/',
            },
        };
    }
    return {
        props: {
            status: "Success"
        }
    };
}
