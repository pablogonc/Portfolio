import React from 'react'

export const Title: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <h1 style={{ fontSize: '42px' }}>
      (<span style={{ color: '#FF8F66' }}>{children}</span>){' '}
      <span style={{ color: '#A778DD' }}> =&gt; </span>
    </h1>
  )
}
