import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onAddT, showAdd }) => {
  return (
    <header className="header">
      <h1 className="h-title">{title}</h1>
      <Button
        color={showAdd ? "#f44336" : "#1694cd"}
        text={showAdd ? "Cancel" : "Add Task"}
        onClick={onAddT}
      />
    </header>
  );
};

Header.defaultProps = {
  title: "React App",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Header;
