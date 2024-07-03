export const Copyright = ()=>{
  const date = new Date();
  const year = date.getFullYear();
  
    return (
        <div className="copyright">
    <p>
    &copy; {year} НЧ &quot;А.Константинов - 1954&quot; - Пловдив<br />
      Уеб дизайн:
      Vladimir Nguyen
    </p>
  </div>
    )
}