import { CartIcon, Testing } from "../icons";
import { useSelector } from "react-redux";

const Navbar = () => {
  const amount = useSelector((store) => store.cart.amount);

  return (
    <nav className="nav-center">
      <div>
        <h3>redux toolkit</h3>
      </div>
      <div className="nav-container">
        <Testing />
        <CartIcon />
        <div className="amount-container">
          <p className="total-amount">{amount}</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
