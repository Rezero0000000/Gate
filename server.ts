require('dotenv').config()
import inertia from "./app/middlewares/inertia";
import web from "./routes/web";
import { authMiddleware } from "./app/middlewares/auth";
const HyperExpress = require('hyper-express');

import { Bailey } from "./app/services/Baileys";
import https from "https"
import axios from "axios";
let webserver = new HyperExpress.Server();


const httpsAgent = new https.Agent({ rejectUnauthorized: false });

axios.interceptors.request.use(function (config) {
    config.httpsAgent = httpsAgent;
    return config;
});


const LiveDirectory = require('live-directory');

import manifest from "./public/manifest.json";

import { version } from "./package.json";

//  rendering html files
import view from "./app/middlewares/view";
import dayjs from "dayjs";

webserver.use(view());
// 

var cors = require('cors')

webserver.use(cors())

// rendering svelte files
// require('svelte/register');


// Middleware untuk CORS
web.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*"); // Izinkan semua origin
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS"); // Izinkan metode HTTP yang diperlukan
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization"); // Header yang diizinkan

    // Jika request adalah OPTIONS (pre-flight), kirimkan response dengan status 204 (No Content)
    if (req.method === 'OPTIONS') {
        return res.status(204).send();
    }

    next(); // Lanjutkan ke route berikutnya
});

// Bailey.connectToWhatsApp();
    
webserver.use(
    inertia({
        view: "index",
        version: version,
        manifest
    })
);

web.use((req, res, next) => {
    if (req.path !== '/login' && req.path !== '/register') {
        authMiddleware(req, res, next);
    } else {
        next();
    }
});

webserver.use(web);


const LiveAssets = new LiveDirectory(__dirname + "/public", {  // We want to provide the system path to the folder. Avoid using relative paths.
    keep: {
        extensions: ['.css', '.js', '.json', '.png', '.jpg', '.jpeg'] // We only want to serve files with these extensions
    },
    cache: {
        max_file_count: 200, // 2.5 MB * 200 = 250 MB - This means you won't go over 250 MB of cached memory for your assets 
        max_file_size: 1024 * 1024 * 2.5, // 2.5 MB - Most assets will be under 2.5 MB hence they can be cached
    },
    ignore: (path) => {
        return path.startsWith('.'); // We want to ignore dotfiles for safety
    }
});



// Create static serve route to serve frontend assets
webserver.get('*', (request, response) => {
    // Strip away '/assets' from the request path to get asset relative path
    // Lookup LiveFile instance from our LiveDirectory instance.

    const path = request.path.replace('/', '');



    const asset = LiveAssets.get(path);
    if (!asset) return response.status(404).send('Not Found');

    // Send the asset content as response depending on if the file is cached
    if (asset.cached) {
        // Simply send the Buffer returned by asset.content as the responseha
        // You can convert a Buffer to a string using Buffer.toString() if your webserver requires string response body

        response 
        .header("Cache-Control","max-age=31536000")
        .header("Connection","Keep-Alive")
        .header("Date",dayjs().toString()) 
        .header("ETag",manifest["app.js"])

        if (path.endsWith(".css"))
            return response.header("Content-Type", "text/css").send(asset.content);

        if (path.endsWith(".js"))
            return response.header("Content-Type", "text/javascript").send(asset.content);

        response.send(asset.content);
        
    } else {
        // For files that are not cached, you must create a stream and pipe it as the response for memory efficiency
        const readable = asset.stream();
        return readable.pipe(response);
    }
});


// Activate webserver by calling .listen(port, callback);
webserver.listen(6544).then(() => {
    console.log(`Server is running at http://localhost:${6544}`);
}).catch((err: any) => {
    console.log(err);
}) 

process.on('SIGTERM', () => {
    console.info('SIGTERM signal received.');
    process.exit(0);
  });