import './button.scss'

const Button = ({title, ...attr}) => {
    return (
        <button {...attr}>{title}</button>
    );
};

export default Button;