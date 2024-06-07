"use client";
import { Refresh } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useState } from "react";

export default function Home() {
  const [imageSrc, setImageSrc] = useState("https://thispersondoesnotexist.com/");

  const handleRegenerate = () => {
    setImageSrc(`https://thispersondoesnotexist.com/?${new Date().getTime()}`);
  };

  return (
    <main>
      <div className="align-middle justify-center content-center text-center">
        <div className="my-4 text-4xl">Hi, I'm Bernat</div>
        <div className="my-4 text-2xl">A software developer</div>
        <div className="my-4">coming soon... </div>
        <hr className="border-gray-700 mx-9 " />
        <div className="mx-2 text-xl align-middle justify-center content-center">
          <p className="my-6">While you wait, check this person who does not exist:</p>
          <img
            className="ml-auto mr-auto block w-min rounded-lg"
            alt="This person does not exist"
            src={imageSrc}
          />
          <br />
          <Button size="large" color="primary" startIcon={<Refresh />} onClick={handleRegenerate}>
            Regenerate
          </Button>

          <br />
          <br />
          <br />
        </div>
      </div>
    </main>
  );
}
