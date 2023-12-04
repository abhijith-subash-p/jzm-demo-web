export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="w-full container mx-auto flex justify-center items-center h-screen">
        {children}
      </div>
    </>
  );
}
