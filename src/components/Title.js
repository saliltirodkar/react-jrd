const Title = ({ title, subTitle }) => {
  return (
    <div className="section-title heading-container">
      <h2>
        {title} <span>{subTitle}</span>
      </h2>
      <div className="heading-seperator">
        <div className="seperator-line"></div>
        <div className="seperator-blob">
          <div></div>
        </div>
      </div>
    </div>
  );
};
export default Title;
