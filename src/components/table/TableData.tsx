import React, { useEffect, useState } from 'react'

interface DataItem {
  [key: string]: any
}

interface iColumn {
  name: string | (() => JSX.Element)
  width?: string
  set: (row: any) => JSX.Element
}

interface TableDataProps {
  data: DataItem[]
  columns: iColumn[]
  onSelectionChange?: (selectedData: DataItem[]) => void
}

const TableData: React.FC<TableDataProps> = ({
  data,
  columns,
  onSelectionChange = () => { },
}) => {
  const [selectedItems, setSelectedItems] = useState<number[]>([])

  const handleSelectItem = (index: number) => {
    const newSelectedItems = selectedItems.includes(index)
      ? selectedItems.filter((itemIndex) => itemIndex !== index)
      : [...selectedItems, index]
    setSelectedItems(newSelectedItems)
  }

  const handleSelectAll = () => {
    const newSelectedItems =
      selectedItems.length === data.length ? [] : data.map((_, index) => index)
    setSelectedItems(newSelectedItems)
  }

  useEffect(() => {
    const selectedData = selectedItems.map((index) => data[index])
    onSelectionChange(selectedData)
  }, [selectedItems])

  useEffect(() => {
    setSelectedItems([])
  }, [data])

  return (
    <div className="table-responsive">
      <table className='table'>
        <thead>
          <tr>
            <th style={{ width: "40px" }}>
              <input
                type="checkbox"
                checked={selectedItems.length === data.length}
                className="form-check-input"
                onChange={handleSelectAll}
              />
            </th>
            {Array.isArray(columns) &&
              columns.map((column, index) =>
                <th key={index} style={{ width: column?.width }}>
                  {typeof column.name === "string" ? (
                    <>{column.name}</>
                  ) : (
                    column.name()
                  )}
                </th>)}
          </tr>
        </thead>
        <tbody>
          {Array.isArray(data) &&
            data.map((item, index) => (
              <tr key={index}>
                <td>
                  <input
                    type="checkbox"
                    checked={selectedItems.includes(index)}
                    className="form-check-input"
                    onChange={() => handleSelectItem(index)}
                  />
                </td>
                {columns.map((column, index) => (
                  <td key={index}>{column.set(item)}</td>
                ))}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default TableData
