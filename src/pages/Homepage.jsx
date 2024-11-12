import { useState, useEffect, MouseEventHandler } from "react";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <div>
      <div className="d-flex p-2 justify-content-center">
        <h1>About me</h1>
      </div>
      <div className="d-flex justify-content-center">
        <img src="/Profile.jpg" alt="Picture of Kenjy" className="profilePicture profilePictureBorder border border-sm border-success" />
      </div>
      <div className="aboutMeBorder1 border border-sm border-success d-flex align-items-center justify-content-center p-4">
        <div className="title-section pe-4">
          <h2 className="text-center mb-0">Education</h2>
        </div>
        <div className="content-section px-4 border-start">
          <section>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus aliquid assumenda optio accusantium! Libero itaque quisquam minima. Rem quidem, eligendi facere sit laudantium vitae,
            fugiat iste dolorum veniam amet cupiditate! Non eum officiis commodi nobis repellendus provident magni, nulla expedita inventore quibusdam ducimus blanditiis molestias a atque enim
            voluptas tempore rem? Accusantium, eos quo cupiditate magnam maxime nobis corporis reiciendis. Sint harum, voluptate ab repudiandae eum consequuntur. Voluptate maiores a doloremque,
            tenetur officiis cumque, vitae recusandae asperiores suscipit amet quo doloribus impedit, dolor necessitatibus voluptas. Reprehenderit nesciunt id ullam officiis?
          </section>
        </div>
      </div>
      <div className="aboutMeBorder2 border border-sm border-success d-flex align-items-center justify-content-center p-4">
        <div className="content-section px-4">
          <section>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt alias placeat, architecto quod, nulla, ea natus a vel quibusdam quo autem aliquam odio nesciunt quasi laborum corrupti. Delectus, nobis tenetur?
            Ullam ratione nobis asperiores repellendus numquam repudiandae similique, maiores, debitis expedita quisquam ipsa, neque suscipit rerum dignissimos ab. Animi mollitia eaque doloribus numquam quis, pariatur dicta rem cupiditate quibusdam recusandae.
            Dolore accusantium eaque ipsam minima dolor, recusandae consequuntur quidem, aspernatur illum repellat doloremque asperiores veniam sint odit tempora temporibus ea cumque deserunt impedit nulla nesciunt ullam labore! Iste, iusto laborum!
          </section>
        </div>
        <div className="title-section ps-4 border-start">
          <h2 className="text-center mb-0">Work History</h2>
        </div>
      </div>

      <div className="aboutMeBorder1 border border-sm border-success d-flex align-items-center justify-content-center p-4">
        <div className="title-section px-4">
          <h2 className="text-center mb-0">Goals</h2>
        </div>
        <div className="content-section ps-4 border-start">
          <section>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus aliquid assumenda optio accusantium! Libero itaque quisquam minima. Rem quidem, eligendi facere sit laudantium vitae,
            fugiat iste dolorum veniam amet cupiditate! Non eum officiis commodi nobis repellendus provident magni, nulla expedita inventore quibusdam ducimus blanditiis molestias a atque enim
            voluptas tempore rem? Accusantium, eos quo cupiditate magnam maxime nobis corporis reiciendis. Sint harum, voluptate ab repudiandae eum consequuntur. Voluptate maiores a doloremque,
            tenetur officiis cumque, vitae recusandae asperiores suscipit amet quo doloribus impedit, dolor necessitatibus voluptas. Reprehenderit nesciunt id ullam officiis?
          </section>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
