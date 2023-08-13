import DefaultNavbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-w-screen min-h-screen bg-white px-20 text-black">
      <DefaultNavbar current_page="โครงการ" />
    </main>
  );
}
