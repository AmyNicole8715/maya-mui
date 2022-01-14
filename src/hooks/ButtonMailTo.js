import { Link as RouterLink } from "react-router-dom";

const ButtonMailTo = ({ mailto, label }) => {
    return (
        <RouterLink
            to={{
                pathname: `${mailto}`
            }}
        >
            {label}
        </RouterLink>
    );
};

export default ButtonMailTo;