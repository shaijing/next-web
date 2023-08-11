import React, { ReactComponentElement, useState } from "react";
import Button from "./Button";

type PaginationProps = {
    total: number;
    currentPage: number;
    pageSize: number;
    onChange: (currentPage: number) => void;
};

function Pagination(props: PaginationProps) {
    const { total, currentPage, pageSize, onChange } = props;
    // 声明一个叫 “current” 的 state 变量，用来保存当前的页码；
    // setPage方法是用来改变current的。
    const [current, setPage] = useState(currentPage);
    const totalPage = Math.ceil(total / pageSize);
    return (
        <div className="m-pagination">
            <Button
                className="btn-prev"
                onClick={() => {
                    if (current < 2) return;
                    setPage(current - 1);
                    onChange(current - 1);
                }}
            >
                &lt;
            </Button>
            {current}
            <Button
                className="btn-next"
                onClick={() => {
                    if (current >= totalPage) return;
                    setPage(current + 1);
                    onChange(current + 1);
                }}
            >
                &lt;
            </Button>
        </div>
    );
}
export default Pagination;
