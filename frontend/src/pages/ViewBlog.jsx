import { NavLink, useNavigate } from "react-router-dom";
import { MdModeEdit } from "react-icons/md";
function ViewBlog() {
  const navigate = useNavigate();
  function handleLogout(e) {
    e.preventDefault();
    navigate("/");
  }

  return (
    <>
      <div className="mx-4 md:mx-20 py-6">
        <div>
          <p className="text-6xl flex items-center justify-between">
            Title For The Blog{" "}
            <span>
              <NavLink to={"/user/edit"}>
                <MdModeEdit />
              </NavLink>
            </span>
          </p>
          <p className="text-[0.75rem] text-gray-400 mt-1">date</p>
          <p className="text-[0.75rem] text-gray-400">
            created by Creator_name
          </p>
        </div>
        <div className=" flex justify-center items-center mt-4">
          <img
            src="https://tradebrains.in/features/wp-content/uploads/2023/04/Cryptocurrency-chart.png"
            className="h-full w-full object-fill rounded-md border mb-1"
            alt=""
          />
        </div>
        <div>
          <p className="mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus, quis incidunt dolorum nesciunt similique eum delectus
            autem quae nulla aperiam repellat fuga dignissimos facere adipisci
            explicabo, magnam libero. Aliquam ab, illo deserunt libero aperiam
            hic possimus modi rem dolores nostrum, facere tempore odio atque
            doloribus cumque eius suscipit porro voluptatum ipsum totam saepe!
            Saepe possimus mollitia incidunt eius omnis recusandae perspiciatis
            eos. Assumenda asperiores facere sed, qui suscipit odit ipsum,
            labore non vel debitis nobis nam nostrum fuga optio doloribus ipsam
            id consequuntur sunt? Quaerat ipsam tempore hic dignissimos dolorum
            quas quis excepturi, odio, voluptatem alias, quod minima dolorem
            soluta.
          </p>
        </div>
      </div>
    </>
  );
}

export default ViewBlog;
