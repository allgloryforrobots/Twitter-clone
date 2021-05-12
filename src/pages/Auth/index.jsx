import React from 'react'
import { Block, Button } from '@c'

import './Auth.scss'

const Auth = () => (
        <section className="auth">
            <div class="auth__content">
                <div class="auth__top">
                    <h2>Войти в аккаунт</h2>
                    <p>Пожайлуста, войдите в свой аккаунт</p>
                </div>
                <Block>
                    <Button type="primary" size="large">
                        This is button
                    </Button>
                </Block>
            </div>
        </section>
    )


export default Auth
