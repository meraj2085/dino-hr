"use client";
import "./contract.css";
const ContractUsPage = () => {
  return (
    <div className="max-w-[1200px] mx-auto mt-20">
      <div className="containers">
        <div className="content">
          <div className="left-side">
            <div className="address details">
              <div className="topic">Address</div>
              <div className="text-one">Mirsarai, CTG</div>
              <div className="text-two">Bangladesh 096</div>
            </div>
            <div className="phone details">
              <div className="topic">Phone</div>
              <div className="text-one">+00770000000</div>
              <div className="text-two">+00770000000</div>
            </div>
            <div className="email details">
              <div className="topic">Email</div>
              <div className="text-one">xyz@gmail.com</div>
              <div className="text-two">info.xyz@gmail.com</div>
            </div>
          </div>
          <div className="right-side">
            <div className="topic-text">Send us a message</div>
            <p>
              If you have any work from me or any types of quries related to my
              tutorial, you can send me message from here. s my pleasure to help
              you.
            </p>
            <form action="#">
              <div className="input-box">
                <input type="text" placeholder="Enter your name" />
              </div>
              <div className="input-box">
                <input type="text" placeholder="Enter your email" />
              </div>
              <div className="input-box message-box">
                <input type="textarea" placeholder="Enter your Description" />
              </div>
              <div className="button">
                <input type="button" value="Send Now" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContractUsPage;
