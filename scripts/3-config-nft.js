import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0xE18786594fC8565A9D470f0DcA28653634d543Bd");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Controle do Poder",
        description: "Esse NFT vai te dar acesso ao JogatinaDAO!",
        image: readFileSync("scripts/assets/gamepad.png"),
      },
    ]);
    console.log("✅ Novo NFT criado com sucesso no !");
  } catch (error) {
    console.error("falha ao criar o novo NFT", error);
  }
})()