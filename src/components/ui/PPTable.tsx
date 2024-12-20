"use client";

import { Table } from "antd";

type PPTableProps = {
  loading?: boolean;
  columns: any;
  dataSource: any;
  pageSize?: number;
  totalPages?: number;
  showSizeChanger?: boolean;
  onPaginationChange?: (page: number, pageSize: number) => void;
  onTableChange?: (pagination: any, filter: any, sorter: any) => void;
  showPagination?: boolean;
  scroll?: { x?: number | string; y?: number | string };
};

const PPTable = ({
  loading = false,
  columns,
  dataSource,
  pageSize,
  totalPages,
  showSizeChanger = true,
  onPaginationChange,
  onTableChange,
  showPagination = true,
  scroll = {},
}: PPTableProps) => {
  const paginationConfig = showPagination
    ? {
        pageSize: pageSize,
        total: totalPages,
        pageSizeOptions: [5, 10, 20],
        showSizeChanger: showSizeChanger,
        onChange: onPaginationChange,
      }
    : false;

  const getRowClassName = (record: any, index: number): string => {
    return index % 2 === 0 ? "even-row" : "odd-row";
  };

  return (
    <Table
      className="table-container"
      loading={loading}
      columns={columns}
      dataSource={dataSource}
      scroll={{ y: 375, ...scroll }}
      pagination={paginationConfig}
      onChange={onTableChange}
      size="middle"
    />
  );
};

export default PPTable;