export default {

  async fetch(request, env) {

    const url = new URL(request.url);

    const headers = {

      "Access-Control-Allow-Origin": "*",

      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",

      "Access-Control-Allow-Headers": "*"

    };

    if (request.method === "OPTIONS") {

      return new Response(null, { headers });

    }

    if (url.pathname === "/api/config") {

      return Response.json({

        host: env.IPTV_HOST,

        username: env.IPTV_USERNAME,

        password: env.IPTV_PASSWORD

      }, { headers });

    }

    return new Response("VistaOne API is running", {

      status: 200,

      headers

    });

  }

};