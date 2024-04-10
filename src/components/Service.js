const Service = ({ icon, title, text, image, email }) => {
  return (
    <article className="service">
      <span className="service-icon">
        <i className={icon}></i>
        <img src={image} alt="India" width="10" />
      </span>
      <div className="service-info">
        <h4 className="service-title">{title}</h4>
        <p className="service-text">{text}</p>
        <p className="service-text">{email}</p>
      </div>
    </article>
  );
};
export default Service;
