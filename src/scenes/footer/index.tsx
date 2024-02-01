import Logo from "@/assets/dp.jpg";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
            As a former Mechanical Engineer who has transitioned into the field
            of web development, I bring a unique perspective to the world of
            technology. Proficient in an array of technologies including
            React.js, Node.js, Express, MongoDB, JavaScript, Python, HTML, CSS,
            and MySQL, I possess a versatile skill set that enables me to excel
            in both frontend and backend development. My passion lies in
            harnessing technology to tackle intricate challenges, offering
            innovative solutions to complex problems
          </p>
          <p>© Naveen All Rights Reserved.</p>
        </div>
        {/* <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Massa orci senectus</p>
          <p className="my-5">Et gravida id et etiam</p>
          <p>Ullamcorper vivamus</p>
        </div> */}
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Naveen</p>
          <p className="my-5">Naveen850850@gmail.com</p>
          <p>9133430919</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
