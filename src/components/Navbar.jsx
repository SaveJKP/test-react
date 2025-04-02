import React from "react";
import { Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav className="border-b-2 border-(--color-text) bg-(--color-primary) p-4 text-(--color-text) mb-10">
        <div className="container__div">
          <ul className="flex justify-end gap-4">
            <li>
              <Link to="/" className="font-bold hover:bg-gray-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="/owner" className="font-bold hover:bg-gray-400">
                Owner
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Layout;
