import React from 'react';

type Memo = {
    id: number;
    title: string;
    content: string;
    createdAt: Date;
  };

  type MemoItemProps = {
    memo: Memo;
    onDelete: (id:number) => void;
    onEdit: (memo: Memo) => void;
  };

  const MemoItem: React.FC<MemoItemProps> = ({
    memo,
    onDelete,
    onEdit
  }) => {
    return (
        <div>
            <h3>{memo.title}</h3>
            <p>{memo.content}</p>
            <small>{memo.createdAt.toLocaleString()}</small>
            <button onClick={() => onEdit(memo)}>編集</button>
            <button onClick={() => onDelete(memo.id)}>削除</button>
        </div>
    );
  };

  export default MemoItem;
