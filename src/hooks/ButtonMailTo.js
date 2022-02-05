import { Link as RouterLink } from "react-router-dom";

const ButtonMailTo = ({ mailto, label }) => {
    return (
        <RouterLink
            to={{
                pathname: `${mailto}`
            }}
            style={{ textDecoration: "none", overflowWrap: "break-word" }}
        >
            {label}
        </RouterLink>
    );
};

export default ButtonMailTo;