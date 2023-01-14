import images from "../../resources/img/img";
import MenuArray from "../../Array/HeaderMenu";

const Header = () => {
  const hoverToggleEvent = (e) => {
    const drop_menu = document.querySelector(".bottom_header .left_menu li span");
    drop_menu.classList.add('active');
    //  onMouseEnter={hoverToggleEvent}
  }
  return(
    <header className="fixed">
      <div className="con relative">
        <div className="top_header">
          <ul className="flex flex_jc_e">
            <li className="search_btn">
              <button>
                <img src={images.search_icon} alt="통합검색"/>
              </button>
            </li>
            <li className="login_btn relative">
              <button>로그인</button>
            </li>
            <li className="join_btn">
              <button>회원가입</button>
            </li>
          </ul>
        </div>
        <div className="bottom_header flex flex_jc_sb">
          <ul className="left_menu flex flex_jc_s flex_ai_fe">
            <li className="logo flex flex_jc_s">
              <div className="img_box">
                <img src={images.logo} alt=""/>
              </div>
            </li>
            {MenuArray.LeftMenuArray.map((menu, index) =>
              <li key={index} className="flex">
                <span className="flex flex_ai_c">{menu.title}</span>
                {menu.drop_depth_1.length >= 1 ? 
                  (
                    <div className="drop_menu_section absolute con">
                      <ul>
                        {menu.drop_depth_1.map((menu, index) =>
                          <li key={index}>
                            {menu.title}
                          </li>
                        )}
                      </ul>
                    </div>
                  )
                : null}
                
                  
                
              </li>
            )}
          </ul>
          <ul className="right_menu flex flex_jc_e flex_ai_c">
            {MenuArray.RightMenuArray.map((menu, index) =>
              <li className="flex flex_ai_fe" key={index}>
              <span>{menu.title}</span>
              <span className="icon_box flex flex_ai_fe">
                <img src={images.link_icon} alt=""/>
              </span>
            </li>
            )}
            <li className="down_center flex flex_jc_c flex_ai_c">
              <span>다운로드센터</span>
            </li>
            <li className="item_reg flex flex_jc_c flex_ai_c">
              <span>정품등록</span>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header;