const needle = require("needle");
const http = require("http");

let services = [
    {
        name: "Pi-hole",
        status: "Unavailable",
        url: "https://pihole.blastoffnetwork.org"
    },
    {
        name: "Dashboard",
        status: "Unavailable",
        url: "https://dashboard.blastoffnetwork.org"
    }
];
setInterval(() => {
    services.forEach((service) => {
        needle.get(service.url, (err, res) => {
            if (!err && res.statusCode == 200) {
                service.status = "Operational";
            } else {
                service.status = "Unavailable";
            }
        });
    });
}, 2 * 1000);

const server = http.createServer((req, res) => {
    const headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "OPTIONS, POST, GET",
        "Access-Control-Max-Age": 2592000 // 30 days
    };
    res.writeHead(200, headers);
    res.end(JSON.stringify(services));
});
server.listen(8000);
