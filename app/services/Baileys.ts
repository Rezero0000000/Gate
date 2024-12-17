import makeWASocket, { DisconnectReason, useMultiFileAuthState } from "@whiskeysockets/baileys";
import { Boom } from "@hapi/boom";


export class Bailey {
  private static sock: any; 
  
  public static async connectToWhatsApp() {
    const { state, saveCreds } = await useMultiFileAuthState("auth");

    this.sock = makeWASocket({
      printQRInTerminal: false,
      auth: state,
    });

    this.sock.ev.on("connection.update", (update) => {
      const { connection, qr, lastDisconnect } = update;

      if (qr) {
        console.log("QR Code:", qr);
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
          Bailey.connectToWhatsApp(); 
        }
      } else if (connection === "open") {
        console.log("WhatsApp connected!");
      }
    });

    this.sock.ev.on("creds.update", saveCreds);

    this.sock.ev.on("messages.upsert", async (m) => {
      const msg = m.messages[0];
      if (msg.key.fromMe) {
        const jid = msg.key.remoteJid;
        const message = msg.message?.conversation?.toLowerCase();
        console.log(jid, ":", message);
      }
    });
  }

  public static sendMessage(jid: string, message: string) {
    if (!this.sock) {
      console.log("WhatsApp connection is not established yet.");
      return;
    }
    
    this.sock.sendMessage(jid, { text: message });
    console.log(`Message sent to ${jid}: ${message}`);
  }

  public static sendImage(jid: string, image: string, caption: string) {
    if (!this.sock) {
      console.log("WhatsApp connection is not established yet.");
      return;
    }
    
    this.sock.sendMessage(jid, { image: image, caption: caption });
    console.log(`Message sent to ${jid}: Succsess`);
  }


}


