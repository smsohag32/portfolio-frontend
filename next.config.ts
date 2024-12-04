const nextConfig = {
   images: {
      remotePatterns: [
         {
            protocol: "https",
            hostname: "img.freepik.com",
            pathname: "/**",
         },
         {
            protocol: "https",
            hostname: "i.ibb.com",
            pathname: "/**",
         },
         {
            protocol: "https",
            hostname: "i.ibb.co",
            pathname: "/**",
         },
         {
            protocol: "https",
            hostname: "i.ibb.co.com",
            pathname: "/**",
         },
      ],
   },
};

export default nextConfig;
