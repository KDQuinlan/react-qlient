import React from "react";
import MetaContent from "../components/MetaContent";
import ScreenContainer from "../components/ScreenContainer";
import NavBar from "../components/navigation/NavBar";

export default function Home() {
  return (
    <div>
      <MetaContent />

      <ScreenContainer>
        <NavBar />
      </ScreenContainer>
    </div>
  );
}
