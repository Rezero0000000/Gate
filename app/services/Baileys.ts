
import makeWASocket, { DisconnectReason, useMultiFileAuthState } from "@whiskeysockets/baileys";
import { Boom } from "@hapi/boom";

let sock;
let qrCode;

export async function connectToWhatsApp() {
  const { state, saveCreds } = await useMultiFileAuthState("auth");

  sock = makeWASocket({
    printQRInTerminal: false,
    auth: state
  });

  sock.ev.on("connection.update", (update) => {
    const { connection, qr, lastDisconnect } = update;

    if (qr) {
      qrCode = qr; 
    }

    if (connection === "close") {
      const shouldReconnect =
        (lastDisconnect?.error as Boom)?.output?.statusCode !==
        DisconnectReason.loggedOut;
      console.log(
        "connection closed due to ",
        lastDisconnect?.error,
        ", reconnecting ",
        shouldReconnect
      );
      if (shouldReconnect) {
        connectToWhatsApp();
      }
    } else if (connection === "open") {
      console.log("WhatsApp connected!");
    }
  });

  sock.ev.on("creds.update", saveCreds);

  sock.ev.on("messages.upsert", async (m) => {
    const msg = m.messages[0];
    if (msg.key.fromMe) {
        const jid = msg.key.remoteJid;
        const message = msg.message?.conversation?.toLowerCase();

        console.log(jid)
    }
  });
}

export function getQRCode() {
  return qrCode;
}

export function getSocket() {
  return sock;
}
