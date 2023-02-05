let abcd=require("./elementCard");
test("show a ui content",()=>{
    expect(abcd(props)).toBe(  <>
        <div className="card-help-container">
            <div className="image-qst-container">
                <img src={props.src} alt="" />
            </div>
            <div className="blocks-item">
                <Link to={props.lien}>
                <h5>{props.title}</h5>
                </Link>
            </div>
            <div className="bloc-item-description">
                <p>{props.description}</p>
            </div>
        </div>
    
</>);
})