/** @type {import('next').NextConfig} */
const nextConfig = {
  // AGENTS.md lo mantiene el proyecto; evita que `next dev` le añada su bloque
  agentRules: false
}

module.exports = nextConfig
