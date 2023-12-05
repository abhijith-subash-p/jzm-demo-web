import Navbar from "@/components/blocks/Navbar";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div>
        <Navbar />
        {children}
      </div>
    </>
  );
}
