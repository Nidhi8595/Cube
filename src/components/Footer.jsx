export default function Footer() {
  return (
    <footer className="py-12 text-sm text-[#7E7E99] bg-[#0B0B0E]">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-4 gap-6">
        <div>
          <p className="text-white font-semibold mb-2">Products</p>
          <p>Common Data Env</p>
          <p>Project Management</p>
          <p>Digital Twins</p>
        </div>
        <div>
          <p className="text-white font-semibold mb-2">Company</p>
          <p>About</p>
          <p>Careers</p>
          <p>Contact</p>
        </div>
        <div>
          <p className="text-white font-semibold mb-2">Resources</p>
          <p>Blog</p>
          <p>Case Studies</p>
          <p>Support</p>
        </div>
        <div className="text-right">
          <p>Privacy Policy</p>
          <p>Terms</p>
          <p>© 2026 Cube Clone</p>
        </div>
      </div>
    </footer>
  );
}
