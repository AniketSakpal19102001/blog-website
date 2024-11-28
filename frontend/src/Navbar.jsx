import { NavLink, useNavigate } from "react-router-dom";
function Navbar() {
  const navigate = useNavigate();
  function handleLogout(e) {
    e.preventDefault();
    navigate("/");
  }
  return (
    <>
      <div className="flex justify-between items-center border-b border-gray-600 py-3 ">
        <div className="text-xl py-2 font-bold  md:ml-20 ml-2 ">
          {" "}
          <NavLink to={"/user"}>Blog Logo</NavLink>
        </div>
        <nav className="flex justify-between items-center  md:mr-20 mr-2 gap-4 md:gap-6">
          <NavLink to={"/user"} className="hidden md:block list-none">
            Articles
          </NavLink>
          <NavLink to={"/user/myblog"} className=" list-none">
            My Blogs
          </NavLink>
          <NavLink to={"/user/create"} className=" list-none">
            Create Blog
          </NavLink>
          <li
            className="hidden md:block list-none"
            title="feature available soon"
          >
            Categories
          </li>
          <li className="list-none">
            <button onClick={handleLogout}>Log out</button>
          </li>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
