const Checkbox = ({ title, ...attr }) => {
    return (
        <div className="py-1">
            <label>
                <input type="checkbox" {...attr} className="mr-1"/> {title}
            </label>
        </div>
    );
};

export default Checkbox;