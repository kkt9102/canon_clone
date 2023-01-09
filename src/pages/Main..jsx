import Header from "../components/include/Header";
import FixedMenu from "../components/include/FixedMenu";
import SlideContents from "../components/main/SlideContents";
const Main = () => {
  return(
    <>
      <Header/>
      <FixedMenu/>
      <div className="body">
        <SlideContents/>
      </div>
    </>
  )
}

export default Main;

