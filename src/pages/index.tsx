import jsPDF from "jspdf";
import { useEffect, useRef } from "react";
import { BsDownload, BsBrush } from "react-icons/bs";
import { BiColorFill } from "react-icons/bi";

import {
  Header,
  Contact,
  Awards,
  Profile,
  Education,
  Abilities,
} from "~/components";
import Experiences from "~/components/Experiences";
import { Column } from "~/styles/components";

import { Main, Actions, Container } from "./styles";

const Home = () => {
  const ref = useRef();

  const download = () => {
    const doc = new jsPDF();

    doc.setFont("Comfortaa");

    doc
      .html(ref.current, {
        html2canvas: { scale: 0.25 },
      })
      .save("Ádisson.pdf");
  };

  return (
    <Main>
      <Actions>
        {/*<button type="button">
          <BsBrush size={30} color="white" />
        </button>*/}
        <button type="button" onClick={download}>
          <BsDownload size={30} color="white" />
        </button>
      </Actions>
      <Container ref={ref}>
        <Column>
          <Header />
          <Contact />
          <Awards />
        </Column>
        <Column>
          <Profile />
          <Education />
          <Abilities />
        </Column>
        <Column>
          <Experiences />
        </Column>
      </Container>
    </Main>
  );
};

export default Home;
