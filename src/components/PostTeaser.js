import React from 'react';
import { Card, Avatar, Icon, Button } from 'antd';


export default function PostTeaser() {
  return (
    <div style={{display: 'flex'}}>
      <div style={{display: 'flex', width: 50, flexDirection: 'column', alignItems: 'center', fontSize: 30, marginRight: 20}}>
        <Button icon="caret-up" />
        6
        <Button icon="caret-down" />
      </div>
      <div style={{flex: '1 1 20000px'}}>
        <Card title="title goes here">
          <div style={{display: 'flex', flexDirection: 'column'}}>
            <div style={{marginBottom: 20}}>
              Content will go here
            </div>
            <div>
              Posted By: <strong>Username here</strong>
            </div>
            <div>
              Posted in: <strong>Category</strong>
            </div>
            <div>
              Posted On: <strong>12:45PM</strong>
            </div>
            <div><strong>500 Comments</strong></div>
          </div>
        </Card>
      </div>
    </div>
  )
}