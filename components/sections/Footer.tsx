export default function Footer() {
  return (
    <footer className="py-8 border-t border-white/10">
      <div className="container mx-auto px-4 text-center">
        <p className="text-white/50 font-mono text-sm">
          © {new Date().getFullYear()} Nombre Apellido. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}