import React from 'react';
import MemoItem from './MemoItem';

type Memo = {
    id: number;
    title: string;
    content: string;
    createdAt: Date;
  };

  type MemoListProps = {
    memos: Memo[];
    onDelete: (id: number) => void;
    onEdit: (memo: Memo) => void;
  };

  const MemoList: React.FC<MemoListProps> = ({
    memos,
    onDelete,
    onEdit
  }) => {
    return (
        <div>
            {memos.map(memo => (
                <MemoItem
                key={memo.id}
                memo={memo}
                onDelete={onDelete}
                onEdit={onEdit}
                />
            ))}
        </div>
    );
  };

  export default MemoList;
