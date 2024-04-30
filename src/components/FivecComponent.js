import React, { useState } from "react";
import FivecAccordion from "./FivecAccordion";
import Title from "./Title";

function FivecComponent() {
  const fivecData = [
    {
      id: 1,
      title: "Cut",
      info: "When we speak of cut we are more interested in the proportions of the diamond as opposed to its shape.As you can see if the angles are correct the light that enters is dispersed properly back through the diamond’s top facets. When a stone is cut too shallow or too deep the light that enters through the top is allowed to escape through the diamond’s bottom and does not allow the maximum beauty of the diamond to be realized.",
    },
    {
      id: 2,
      title: "Clarity",
      info: "The clarity of a diamond is determined by the amount and location of flaws,or blemishes, in the diamond when viewed under 10 power (10x) magnification. Diamonds have the capability of producing more brilliance than any other gemstone. A diamond that is free of inclusions and surface blemishes is very rare…and therefore very valuable.",
    },
    {
      id: 3,
      title: "Carat",
      info: "Diamonds are sold by the carat (shown as ct.), which is actually a unit of weight, though most think of a carat in terms of size. The word “carat” comes from the “carob” seed, the original unit of measure for diamond traders. Today, a carat is equal to exactly 0.2 grams . Carat weight is unrelated to the similar sounding karat, which refers to gold’s purity. One carat is divided into 100 “points,” so that a diamond of 75 points weights .75 carats. The carat-weight of a diamond is the easiest measurement to determine. Most importantly, two diamonds can be of equal carat-weight, but their value can differ greatly due to their cut, color, and clarity.",
    },
    {
      id: 4,
      title: "Color",
      info: "Diamonds come in a variety of colors, some of them highly prized (pinks, blues, even yellow). However in a white diamond, the presence of a yellow tint will lower the price of a diamond. The less body color in a white diamond, the more true color it will reflect, and thus the greater its value. The best color for a diamond is no color at all. A totally colorless diamond allows light to pass through it easily, resulting in the light being dispersed as the color of the rainbow. Colors are graded totally colorless to light yellow. The differences from one grade to the other are very subtle and it takes a trained eye and years of experience to color grade a diamond.",
    },
    {
      id: 5,
      title: "Customer Care",
      info: "Don’t rush into your diamond purchase. Take your time and evaluate your choice carefully. It took billions (yes, billions) of years for nature to form your diamond and the skill of a master diamond cutter to bring your diamond to you. The time you spend now can bring you a lifetime of pleasure, satisfaction.",
    },
  ];

  const [questions, setQuestions] = useState(fivecData);
  return (
    <div className="fivec-main">
      <div className="fivec-container">
        <Title subTitle={"Five C's"} />

        <section className="info">
          {questions.map((question) => {
            return (
              <FivecAccordion key={question.id} {...question}></FivecAccordion>
            );
          })}
        </section>
      </div>
    </div>
  );
}

export default FivecComponent;
