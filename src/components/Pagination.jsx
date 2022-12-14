
function Pagination({ handlePrev, handleNext }) {
  return (
    <div className="btns-pagination">
      <button onClick={handlePrev}>Prev</button>
      <button onClick={handleNext}>Next</button>
    </div>
  )
}

export default Pagination