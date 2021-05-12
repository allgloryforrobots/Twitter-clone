import React from 'react'
import { Button as BaseButton } from 'antd'
import './Button.scss'
import classNames from 'classnames'
import { string } from 'prop-types'

const Button = props => <BaseButton 
{...props} className={classNames('button', props.className, { 'button--large': props.size === 'large' })} />


Button.propTypes = {
    className: string,
}

export default Button