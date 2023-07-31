import React from 'react'

export default function Custom404() {
    return (
        <>
            <>
                <h1>404</h1>
                <p>You are lost in this page</p>
                <p className={'info'}>你来到了树林的边缘, 别担心, 我们会送你回去</p>
                <button className={'go-home btn'} >
                    <a href={'/'}>返回首页</a>
                </button>
                <button className={'go-back btn'}>返回上一页</button>
            </>
        </>
    )
}
