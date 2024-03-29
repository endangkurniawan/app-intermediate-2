const Royalty = (props) => {
  return (
    <div className="royalty">
      <div className="container">
        <div className="royalty__wrap">
          <div className="royalty__img">
            <img src={props.img} alt={props.title} className="royalty__img__el" />
          </div>
          <div className="royalty__txt">
            <h2 className="royalty__txt__title">{props.title}</h2>
            {props.desc !== undefined ? <p className="royalty__txt__desc">{props.desc}</p> : null}
            <a href={props.to} className="btn">
              {props.txtbtn}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Royalty;
