import { SignIn } from "@/components/auth/signin-button";
import Image from "next/image";

const LandingPage = () => {
  return (
    <div className="min-h-screen cursor-fancy relative flex items-center justify-center text-white p-4">
      <div className="absolute -z-10 inset-0 h-full w-full bg-transparent bg-[linear-gradient(to_right,#80808030_1px,transparent_1px),linear-gradient(to_bottom,#80808030_1px,transparent_1px)] bg-[size:48px_48px]"></div>
      <div className="max-w-3xl md:max-w-5xl mx-auto text-center text-balance">
        <div className="mb-8">
          <span className="inline-block bg-gray-800 text-sm text-gray-300 rounded-full px-3 py-1 mb-4">
            🎉 Announcing Snippets
          </span>
          <div className="relative size-32 p-1 mx-auto my-4">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#FCA702] via-[#CD2C4A] to-[#2EB3BA]" />
            <div className="relative rounded-full overflow-hidden bg-white/20">
              <Image
                src="/logo.png"
                alt="logo"
                width={150}
                height={150}
                className="relative w-full h-full z-10"
              />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl md:leading-[5rem] font-bold mb-4">
            A{" "}
            <span className="font-serif font-thin bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-red-400 to-green-400">
              home
            </span>{" "}
            for those{" "}
            <span className="font-serif font-thin bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-red-400 to-green-400">
              cute
            </span>{" "}
            <span className="underline">snippets</span> of{" "}
            <span className="font-serif font-thin bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-red-400 to-green-400">
              code
            </span>
          </h1>
          <p className="text-xl text-gray-400">
            Ever dreamt of making your own library of components just like
            shadcn. Now, you can!
          </p>
        </div>
        <div className="flex justify-center space-x-4">
          <SignIn />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
