import React from 'react'
import { Route } from 'react-router'

export const PrivateRouter = ({children, ...props}) => {
    return (
        <div>
            <h1>Soy un privado</h1>
            {children}
        </div>
    )
}
