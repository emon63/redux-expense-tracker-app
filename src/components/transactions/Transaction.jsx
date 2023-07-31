import editImage from '../../assets/images/edit.svg';
import deleteImage from '../../assets/images/delete.svg';

const Transaction = ({ transaction }) => {
    const { name, type, amount } = transaction || {}
    return (
        <li className={`transaction ${type}`}>
            <p>{name}</p>
            <div className="right">
                <p>৳ {amount}</p>
                <button className="link">
                    <img
                        className="icon"
                        src={editImage}
                        alt="Edit"
                    />
                </button>
                <button className="link">
                    <img
                        className="icon"
                        src={deleteImage}
                        alt="Delete"
                    />
                </button>
            </div>
        </li>
    );
};

export default Transaction;