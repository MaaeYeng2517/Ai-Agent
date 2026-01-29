import Button from "@/components/Button";

export default function Login() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="card p-10 w-96">
        <h2 className="text-xl font-semibold mb-6 text-center">Login</h2>

        <input placeholder="Email" className="w-full mb-3 p-3 border rounded-xl" />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-6 p-3 border rounded-xl"
        />

        <Button className="w-full">Sign In</Button>
      </div>
    </div>
  );
}
