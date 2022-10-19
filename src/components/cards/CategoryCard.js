import { Link } from "react-router-dom";

const CategoryCard = ({ title, description, link}) => {
  return (
    <div className="cell">
      <div className="card category-card">
        <div className="card-section">
          <div className="text-center"><h5>{title}</h5></div>
          <div className="divider" />
          <small>
            {description}
          </small>
          <Link to={link} className="button expanded category-btn">View</Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
