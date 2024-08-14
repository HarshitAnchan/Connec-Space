import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center">
      <main className="flex-1 max-w-md px-8 py-8 sm:px-12 lg:px-16 lg:py-12">
        <SignIn />
      </main>
    </div>
  );
}
