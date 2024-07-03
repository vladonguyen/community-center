export const Copyright = ()=>{
  const date = new Date();
  const year = date.getFullYear();
  
    return (
        <div className="copyright">
    <p>
      © {year} НЧ "А.Константинов - 1954" - Пловдив
      <br />
      Уеб дизайн:
      Vladimir Nguyen
    </p>
  </div>
    )
}