import React from "react";
import Input from "../../components/input/input";

const Signin = () => {
  const formInputs = [
    {
      type: "email",
      className: "email",
      name: "email",
      placeHolder: "Email",
    },
    {
      type: "password",
      className: "password",
      name: "password",
      placeHolder: "Mot de passe",
    },
  ];

  return (
    <div className="w-full h-3/4 flex">
      <div className="w-1/2 h-full flex justify-center items-center ">
        <div className="w-[90%] h-full flex justify-center items-start">
          <form className="w-full h-[75%] flex flex-col justify-around">
            {formInputs.map((form, index) => (
              <div key={index}>
                <Input
                  width="w-[25rem]"
                  height="h-[4rem]"
                  className={form.className}
                  type={form.type}
                  name={form.name}
                  placeHolder={form.placeHolder}
                />
              </div>
            ))}
            <Input
              width="w-[15rem]"
              height="h-[4rem]"
              className="connexion"
              type="submit"
              name="connexion"
              value="Connexion"
            />
          </form>
        </div>
      </div>
      <div className="w-1/2 h-full flex justify-center items-start mt-6">
        <div className="w-4/6 h-[65%] bg-backOfficePrimary rounded-xl flex flex-col justify-around">
          <div>
              <p className="text-white text-4xl italic font-extralightq tracking-wide">Nouveau dans<br/> ce site ???</p>
          </div>
          <div>
              <Input 
                width="w-[15rem]"
                height="h-[4rem]"
                type="submit"
                value="Signup"
              />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
