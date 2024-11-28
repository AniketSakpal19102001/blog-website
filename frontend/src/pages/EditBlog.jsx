import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { GoUpload } from "react-icons/go";
import { useNavigate } from "react-router-dom";
function EditBlog() {
  const [heading, setHeading] = useState("");
  const [coverImage, setCoverImage] = useState(null);
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");

  const handleImageChange = (event) => {
    setCoverImage(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("heading", heading);
    formData.append("coverImage", coverImage);
    formData.append("content", content);

    // try {
    //   await axios.post("http://localhost:5000/api/posts", formData, {
    //     headers: {
    //       "Content-Type": "multipart/form-data",
    //     },
    //   });
    //   // Redirect or clear the form after submission
    // } catch (error) {
    //   console.error("Error creating post:", error);
    // }
  };

  const navigate = useNavigate();
  function handleLogout(e) {
    e.preventDefault();
    navigate("/");
  }

  return (
    <>
      <div className="text-xl pt-4 ml-4 md:ml-20">
        <h1>Edit Blog</h1>
      </div>
      <div className="mx-4 md:mx-20 mt-2 ">
        <form onSubmit={handleSubmit} className="">
          <div className="flex justify-end gap-4">
            <button
              type="submit"
              className=" bg-red-500 px-4 text-white rounded-md py-2"
            >
              Delete This Blog
            </button>
            <button
              type="submit"
              className=" bg-blue-500 px-4 text-white rounded-md py-2"
            >
              Update Blog
            </button>
          </div>
          <div className="flex-col gap-6">
            <div className=" py-2">
              <label htmlFor="title" className="py-2 mr-2">
                Title:{" "}
              </label>
              <input
                className="py-2 px-2 rounded border"
                id="title"
                type="text"
                placeholder="Title"
                value={heading}
                onChange={(e) => setHeading(e.target.value)}
                required
              />
            </div>
            <div className=" py-2">
              <label htmlFor="tags" className="py-2 mr-2">
                Tags:
              </label>
              <input
                className="py-2 px-2 rounded border"
                id="title"
                type="text"
                placeholder="Title"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                required
              />
            </div>
            <div className=" flex gap-4 items-center  py-2">
              <label
                htmlFor="coverIMG"
                className=" flex justify-center items-center gap-2 rounded-lg border-black border px-4 py-2"
              >
                Cover Image <GoUpload />
              </label>
              <input
                id="coverIMG"
                type="file"
                onChange={handleImageChange}
                required
                className=""
              />
            </div>
          </div>
          <ReactQuill value={content} onChange={setContent} className="pt-2" />
        </form>
      </div>
    </>
  );
}

export default EditBlog;
