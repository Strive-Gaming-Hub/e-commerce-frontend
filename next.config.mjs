/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode:true,
    env:{
        MONGO_URI:process.env.MONGO_URI
    }
};

export default nextConfig;
