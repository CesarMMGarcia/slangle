interface TableProps {
  word: string
}

const Table = ({ word }: TableProps) => {
  const wordLength = word.length
  const tableCol = []
  const attempts = 5
  for (let i = 0; i < wordLength; i++) {
    tableCol.push(<div></div>)
  }
  


  return (
    <>
      <div id="wrapper">
        {tableCol}
      </div>
      <div id="wrapper">
        {tableCol}
      </div>
      <div id="wrapper">
        {tableCol}
      </div>
      <div id="wrapper">
        {tableCol}
      </div>
      <div id="wrapper">
        {tableCol}
      </div>

    </>
  )
}

export default Table
