const { SitemapStream, streamToPromise } = require("sitemap");
const { Readable } = require("stream");

export default async (req, res) => {
  // An array with your links
  const links = [
    { url: "/", changefreq: "daily", priority: 0.3 },
    { url: "/News", changefreq: "daily", priority: 0.3 },
    { url: "/Media", changefreq: "daily", priority: 0.3 },
    { url: "/Events", changefreq: "daily", priority: 0.3 },
    { url: "/Artists", changefreq: "daily", priority: 0.3 },
    { url: "/Artists/BoiOus", changefreq: "daily", priority: 0.3 },
    { url: "/Artists/IcekidDs", changefreq: "daily", priority: 0.3 },
    { url: "/Artists/Freshgee", changefreq: "daily", priority: 0.3 },
    { url: "/Artists/PrincipalOfMinds", changefreq: "daily", priority: 0.3 },
  ];

  // Create a stream to write to
  const stream = new SitemapStream({ hostname: `https://${req.headers.host}` });

  res.writeHead(200, {
    "Content-Type": "application/xml",
  });

  const xmlString = await streamToPromise(
    Readable.from(links).pipe(stream)
  ).then((data) => data.toString());

  res.end(xmlString);
};
