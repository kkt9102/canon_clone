import SolutionArray from "../../Array/SolutionItem";

const SolutionContents = () => {

  // flex-flow: column wrap;
  // align-content: space-around;
  // height: 75rem;
  return(
    <div className="solution_section">
      <div className="page_tit">Total Imaging Soultion</div>
      <ul className="flex flex_dir_c">
        {SolutionArray.SolutionItem.map((item, index) =>
          <li key={index}>
            <div className="img_box">
              <img src={item.img} alt={item.title}/>
            </div>
            <div className="title">{item.title}</div>
            <div className="hash_tag">
              {item.hashtag}
            </div>
          </li>
        )}
      </ul>
    </div>
  )
}

export default SolutionContents;