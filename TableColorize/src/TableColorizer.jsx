import React, { useState } from "react";

const TableColorizer = () => {
  const [tableData, setTableData] = useState([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]);
  const [selectedNumber, setSelectedNumber] = useState("");
  const [selectedColor, setSelectedColor] = useState("#ffffff");

  const handleCellClick = (number) => {
    setSelectedNumber(number);
  };

  const handleColorChange = () => {
    const newTableData = tableData.map(row =>
      row.map(cell => {
        if (cell === selectedNumber) {
          return selectedColor;
        }
        return cell;
      })
    );
    setTableData(newTableData);
  };

  const handleInputChange = (event) => {
    setSelectedNumber(event.target.value);
  };

  const handleColorInputChange = (event) => {
    setSelectedColor(event.target.value);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Table Colorizer</h1>
      <div>
        <input
          type="number"
          value={selectedNumber}
          onChange={handleInputChange}
          placeholder="Enter number to color"
          style={{ marginRight: "10px" }}
        />
        <input
          type="color"
          value={selectedColor}
          onChange={handleColorInputChange}
          style={{ marginRight: "10px" }}
        />
        <button onClick={handleColorChange}>Choose Color</button>
      </div>
      <table style={{ margin: "auto", marginTop: "20px" }}>
        <tbody>
          {tableData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, colIndex) => (
                <td
                  key={colIndex}
                  style={{
                    padding: "10px",
                    backgroundColor: cell === selectedNumber ? selectedColor : "#ffffff",
                    cursor: "pointer",
                  }}
                  onClick={() => handleCellClick(cell)}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableColorizer;
