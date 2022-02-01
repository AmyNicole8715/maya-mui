import { Link as RouterLink } from "react-router-dom";

const ButtonMailTo = ({ mailto, label }) => {
    return (
        <RouterLink
            to={{
                pathname: `${mailto}`
            }}
            style={{ textDecoration: "none" }}
        >
            {label}
        </RouterLink>
    );
};

export default ButtonMailTo;