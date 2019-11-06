import React from 'react';
import { Card, Icon, Avatar } from 'antd';
const { Meta } = Card;

export default function Book(props) {
  const { bookId, title, message, deleteBook, token } = props;

  const onClickEdit = () => {
    alert('clicked edit');
  }

  const onClickDelete = () => {
    deleteBook(token, bookId);
  }

  return (
    <Card
      style={{ width: 300 }}
      cover={
        <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
      }
      actions={[
        <Icon type="edit" key="edit" onClick={onClickEdit} />,
        <Icon type="delete" key="delete" onClick={onClickDelete} />,
      ]}
    >
      <Meta
        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
        title={title}
        description={message}
      />
    </Card>
  );
}