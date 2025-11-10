import { UserForm } from "./UserForm";

export function CreateUserForm() {


  return (
    <div className="space-y-8">
      <header>
        <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
          Create
        </p>
        <h1 className="text-3xl font-semibold text-slate-900">
          Add a new teammate
        </h1>
        <p className="mt-1 text-sm text-slate-500">
          Submit the form below to provision a user in the Spring Boot API.
        </p>
      </header>
      <UserForm />
    </div>
  );
}

