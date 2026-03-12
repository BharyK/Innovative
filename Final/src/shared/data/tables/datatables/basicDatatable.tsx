import { useState, useCallback } from "react";
import DataTable, { type TableColumn } from "react-data-table-component";
import { Definecolumns, type TableDataItem, tableDataItems, } from "../tablesdata";

const BasicDatatable = () => {
  const [selectedRows, setSelectedRows] = useState<TableDataItem[]>([]);
  const [clearSelected, setClearSelected] = useState(false);
  const [data, setData] = useState<TableDataItem[]>(tableDataItems);

  const handleRowSelected = useCallback(
    (state: { selectedRows: TableDataItem[] }) => {
      setSelectedRows(state.selectedRows);
    },
    []
  );

  const handleDelete = useCallback(() => {
    setData(prev =>
      prev.filter(
        item => !selectedRows.some(row => row.id === item.id)
      )
    );
    setClearSelected(prev => !prev);
    setSelectedRows([]);
  }, [selectedRows]);

  const contextActions = (
    <button
      key="delete"
      onClick={handleDelete}
      className="btn btn-danger btn-sm"
    >
      Delete
    </button>
  );

  return (
    <div className="datatable">
      <DataTable
        columns={Definecolumns as TableColumn<TableDataItem>[]}
        data={data}
        selectableRows
        onSelectedRowsChange={handleRowSelected}
        clearSelectedRows={clearSelected}
        contextActions={contextActions}
        pagination
        highlightOnHover
        responsive
      />
    </div>
  );
};

export default BasicDatatable;
