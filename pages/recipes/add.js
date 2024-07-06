import Button from "@/components/button";
import Container from "@/components/container";
import Layout from "@/components/layout";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { addRecipe } from "@/lib/recipes";
import { uploadImage } from "@/lib/upload";
import clsx from "clsx";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function AddRecipe({ token }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [recipe, setRecipe] = useState({
    title: "",
    description: "",
  });
  const router = useRouter();

  const onSelecFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(null);
      return;
    }

    setSelectedFile(e.target.files[0]);
  };

  useEffect(() => {
    if (!selectedFile) {
      setPreview(null);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const handleAddRecipe = async (e) => {
    try {
      e.preventDefault();
      const form = e.target;
      const formData = new FormData(form);
      const imageFormData = new FormData();
      const file = formData.get("file");
      const title = formData.get("title");
      const description = formData.get("description");
      imageFormData.append("file", file);
      const imageRes = await uploadImage(imageFormData);
      const image = imageRes.file_url;
      const recipe = await addRecipe({ description, image, title, token });
      form.reset();
      router.push(`/recipes/${recipe.id}`);
    } catch (error) {
      console.log("error from page: ", error);
    }
  };

  return (
    <>
      <Navbar />
      <main>
        {/* <Layout hasLoggedIn={!!token}> */}
        <section className="py-40 bg-white">
          <Container className="">
            <form
              className="max-w-3xl mx-auto space-y-14"
              onSubmit={handleAddRecipe}
              encType="multipart/form-data"
            >
              <div className="rounded-lg group">
                <input
                  className="peer w-[0.1px] h-[0.1px] opacity-0 overflow-hidden absolute -z-10"
                  type="file"
                  name="file"
                  id="file"
                  accept="image/*"
                  required
                  onChange={onSelecFile}
                />
                <label
                  htmlFor="file"
                  className={clsx(
                    "bg-[#F6F5F4] cursor-pointer flex items-center justify-center rounded-lg w-full h-96 transition-all overflow-hidden p-4",
                    "outline outline-1 outline-transparent outline-offset-0",
                    "peer-focus:outline-1 peer-focus:outline-yellow-400 peer-focus:outline-offset-4",
                    "group-hover:outline-1 group-hover:outline-yellow-400 group-hover:outline-offset-4"
                  )}
                >
                  {selectedFile ? (
                    <img
                      src={preview}
                      alt="Uploaded image"
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <div className="flex flex-col items-center gap-4">
                      <svg
                        width="64"
                        height="64"
                        viewBox="0 0 64 64"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden
                      >
                        <path
                          d="M50.6667 8H13.3333C10.3878 8 8 10.3878 8 13.3333V50.6667C8 53.6122 10.3878 56 13.3333 56H50.6667C53.6122 56 56 53.6122 56 50.6667V13.3333C56 10.3878 53.6122 8 50.6667 8Z"
                          stroke="#666666"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M22.6667 26.6666C24.8759 26.6666 26.6667 24.8758 26.6667 22.6666C26.6667 20.4575 24.8759 18.6666 22.6667 18.6666C20.4576 18.6666 18.6667 20.4575 18.6667 22.6666C18.6667 24.8758 20.4576 26.6666 22.6667 26.6666Z"
                          stroke="#666666"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M55.9999 40L42.6666 26.6666L13.3333 56"
                          stroke="#666666"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className="text-center text-[#666666] text-wrap">
                        <p>SVG, PNG, JPG or GIF </p>
                        <p>Ukuran maksimal 2MB</p>
                      </div>
                    </div>
                  )}
                </label>
              </div>

              <div className="relative">
                <input
                  type="text"
                  name="title"
                  id="title"
                  className={clsx(
                    "peer bg-[#F6F5F4] w-full rounded-lg px-4 py-4",
                    "outline outline-1 outline-transparent outline-offset-0 transition-all",
                    "focus:outline-yellow-400 focus:outline-offset-4",
                    "hover:outline-yellow-400 hover:outline-offset-4"
                  )}
                  required
                  value={recipe.title}
                  onChange={(e) =>
                    setRecipe({ ...recipe, title: e.target.value })
                  }
                />
                <label
                  htmlFor="title"
                  className={clsx(
                    "absolute top-1/2 left-0 -translate-y-1/2 transition-transform",
                    "peer-focus:-translate-y-16 peer-focus:translate-x-0",
                    recipe.title
                      ? "-translate-y-16 translate-x-0"
                      : "translate-x-4"
                  )}
                >
                  Title
                </label>
              </div>
              <div className="relative">
                <textarea
                  name="description"
                  id="description"
                  className={clsx(
                    "peer bg-[#F6F5F4] w-full rounded-lg px-4 py-4",
                    "outline outline-1 outline-transparent outline-offset-0 transition-all",
                    "focus:outline-yellow-400 focus:outline-offset-4",
                    "hover:outline-yellow-400 hover:outline-offset-4"
                  )}
                  required
                  rows={10}
                  value={recipe.description}
                  onChange={(e) =>
                    setRecipe({ ...recipe, description: e.target.value })
                  }
                />
                <label
                  htmlFor="description"
                  className={clsx(
                    "absolute top-0 left-0 transition-transform",
                    "peer-focus:-translate-y-10 peer-focus:translate-x-0",
                    recipe.description
                      ? "-translate-y-10 translate-x-0"
                      : "translate-y-4 translate-x-4"
                  )}
                >
                  Description
                </label>
              </div>

              <div className="flex justify-center max-w-md mx-auto">
                <Button type="submit">Save</Button>
              </div>
            </form>
          </Container>
        </section>
        {/* </Layout> */}
		<Footer className="mt-1"></Footer>
      </main>
    </>
  );
}

export async function getServerSideProps({ req }) {
  const token = req.cookies.token || "";
  return {
    props: {
      token,
    },
  };
}
