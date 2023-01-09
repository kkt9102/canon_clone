import Array from "../../Array/FixedMenu";
import images from "../../resources/img/img";

const FixedMenu = () => {
  return(
    <div className="fixed_menu fixed">
      <ul className="flex flex_dir_c flex_ai_c flex_jc_sb">
        {Array.FixedMenu.map((menu, index) =>
          <li key={index}>
            <div className="img_box">
              <img src={menu.img} alt={menu.title}/>
            </div>
            <div className="sub_tit">{menu.title}</div>
          </li>
        )}
        <li>
          <div>
            <img src={images.quick_close} alt="퀵메뉴 닫기"/>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default FixedMenu;