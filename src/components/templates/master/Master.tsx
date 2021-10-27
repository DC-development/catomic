import './Master.scss'
import { Navigation } from '../../organisms/navigation/Navigation'
import React from 'react'

interface Props {
  leftCol: React.ReactNode
  stage: React.ReactNode
}

export const Master = (props: Props) => {
  const { leftCol, stage } = props

  return (
    <div className="container">
      <div className="topBar">
        <Navigation />
      </div>
      <div className="layout-row">
        <div className="leftCol">{leftCol}</div>
        <div className="stage">{stage}</div>
      </div>
    </div>
  )
}
