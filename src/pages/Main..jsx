import Header from "../components/include/Header";
import FixedMenu from "../components/include/FixedMenu";
import SlideContents from "../components/main/SlideContents";
import SolutionContents from "../components/main/ImageSolutionContents";
import NewandHot from "../components/main/NewandHot";
import CardList from "../components/main/CardList";
import BoardList from "../components/main/BoardList";
import Footer from "../components/include/Footer.";
const Main = () => {
  return(
    <>
      <Header/>
      <FixedMenu/>
      <div className="body">
        <SlideContents/>
        <div className="con">
          <SolutionContents/>
          <NewandHot/>
          <CardList/>
          <BoardList/>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Main;

