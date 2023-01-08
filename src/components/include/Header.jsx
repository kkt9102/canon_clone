const Header = () => {
  return(
    <header className="fixed">
      <div className="top_header"></div>
      <div className="bottom_header flex flex_jc_sb">
        <ul className="left_menu flex">
          <li>
            <span></span>
          </li>
          <li>
            <span>컨슈머</span>
          </li>
          <li>
            <span>비지니스</span>
          </li>
          <li>
            <span>회사소</span>
          </li>
          <li>
            <span>이벤트</span>
          </li>
        </ul>
        <ul className="right_menu flex">
          <li>
            <span>고객지원</span>
          </li>
          <li>
            <span>e스토</span>
          </li>
          <li>
            <span>아카데</span>
          </li>
          <li>
            <span>다운로드센터</span>
          </li>
          <li>
            <span>정품등록</span>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header;