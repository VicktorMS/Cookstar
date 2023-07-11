import React from "react";
import User from "../icons/User";
import Cart from "../icons/Cart";
import SearchIcon from "../icons/SearchIcon";
import { NavLink } from "react-router-dom";

const Navbar = () => {

  const isActiveNavLink = ({isActive}) => isActive ? "after:content-['+'] text-primary": null

  return (
    <header className="navbar bg-base-100 border-b-2 border-base-200 justify-between h-20 w-full">
      <div className="flex-1 flex gap-20">
        <div className="">
          <h1>
            <a className="btn btn-ghost normal-case text-3xl">
              <span className="text-primary">Cook</span>star
            </a>
          </h1>
        </div>

        <nav>
          <ul className="flex gap-4">
            <li><NavLink to="/" className={isActiveNavLink}>Home </NavLink></li>
            <li><NavLink to="cardapio" className={isActiveNavLink}>Cardápio</NavLink></li>
            <li><NavLink to="pedidos" className={isActiveNavLink}>Seus Pedidos</NavLink></li>
            <li><NavLink to="cupons" className={isActiveNavLink}>Cupons</NavLink></li>
          </ul>
        </nav>
      </div>

      <div className="flex-2">
        <div className=" flex items-center">
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered rounded-lg w-full input-sm max-w-xs rounded-e-none"
          />
          <button className="btn btn-secondary text-base-100 btn-sm rounded-s-none glass bg-primary-focus">
            <SearchIcon />
          </button>
        </div>

        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <div className="indicator">
              <Cart />
              <span className="badge badge-sm indicator-item">8</span>
            </div>
          </label>
          <div
            tabIndex={0}
            className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
          >
            <div className="card-body">
              <span className="font-bold text-lg">8 Items</span>
              <span className="text-info">Subtotal: $999</span>
              <div className="card-actions">
                <button className="btn btn-primary text-base-100 btn-block">
                  View cart
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <User />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
