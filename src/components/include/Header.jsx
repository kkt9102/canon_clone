import images from "../../resources/img/img";

const Header = () => {
  return(
    <header className="fixed">
      <div className="con">
        <div className="top_header">
          <ul className="flex flex_jc_e">
            <li></li>
            <li>로그인</li>
            <li>회원가입</li>
          </ul>
        </div>
        <div className="bottom_header flex flex_jc_sb">
          <ul className="left_menu flex flex_ai_fe">
            <li className="logo">
              <div className="img_box">
                <img src={images.logo} alt=""/>
              </div>
            </li>
            <li>
              <span>컨슈머</span>
            </li>
            <li>
              <span>비지니스</span>
            </li>
            <li>
              <span>회사소개</span>
            </li>
            <li>
              <span>이벤트</span>
            </li>
          </ul>
          <ul className="right_menu flex flex_ai_fe">
            <li className="flex flex_ai_fe">
              <span>고객지원</span>
              <span>
                <img src={images.link_icon} alt=""/>
              </span>
            </li>
            <li className="flex flex_ai_fe">
              <span>e스토어</span>
              <span>
                <img src={images.link_icon} alt=""/>
              </span>
            </li>
            <li className="flex flex_ai_fe">
              <span>아카데</span>
              <span>
                <img src={images.link_icon} alt=""/>
              </span>
            </li>
            <li className="down_center">
              <span>다운로드센터</span>
            </li>
            <li className="item_reg">
              <span>정품등록</span>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header;